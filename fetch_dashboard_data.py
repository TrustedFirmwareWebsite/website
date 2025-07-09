"""
Fetch the data from CI to generate the dashboard.
Author: Ben Copeland (ben.copeland@linaro.org)
"""

import requests
import time
import logging
from datetime import datetime

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

projects = {
    "TF-A": {
        "Patch": [
            "https://ci.trustedfirmware.org/view/TF-A/job/tf-a-gerrit-tforg-l1/",
            "https://ci.trustedfirmware.org/view/TF-A/job/tf-a-gerrit-tforg-l2/"
        ],
        "Daily": [
            "https://ci.trustedfirmware.org/job/tf-a-main/",
        ],
        "Weekly": [
            "https://ci.trustedfirmware.org/job/tf-a-weekly/"
        ],
        "MISRA": [
            "https://ci.trustedfirmware.org/job/tf-a-eclair-delta/"
        ],
        "Static Analysis": [
            "https://ci.trustedfirmware.org/job/tf-a-coverity/"
        ],
        "Code Coverage": [
            "https://ci.trustedfirmware.org/view/TF-A/job/tf-a-ci-coverage-gateway/"
        ]
    },
    "TF-M": {
        "Patch": [
            "https://ci.trustedfirmware.org/view/TF-M/job/tf-m-static/"
        ],
        "Daily": [
            "https://ci.trustedfirmware.org/view/TF-M/job/tf-m-nightly/",
            "https://ci.trustedfirmware.org/view/TF-M/job/tf-m-nightly-performance/",
            "https://ci.trustedfirmware.org/view/TF-M/job/tf-m-extra-build/"
        ],
        "Weekly": ["https://ci.trustedfirmware.org/view/TF-M/job/tf-m-release/"],
        "MISRA": ["https://ci.trustedfirmware.org/view/TF-M/job/tf-m-eclair-daily/"],
        "Static Analysis": [
            "https://ci.trustedfirmware.org/job/tf-m-static-checks/"
        ],
        "Code Coverage": [
            "https://ci.trustedfirmware.org/view/TF-M/job/tf-m-code-coverage/"
        ]
    },
    "Hafnium": {
        "Patch": [
            "https://ci.trustedfirmware.org/view/Hafnium/job/hafnium-build-test-review/",
            "https://ci.trustedfirmware.org/view/Hafnium/job/hafnium-spmc-test-fvp/"
        ],
        "Daily": [],
        "Weekly": [
            "https://ci.trustedfirmware.org/view/Hafnium/job/hafnium-acs-test/"
        ],
        "MISRA": [],
        "Static Analysis": [
            "https://ci.trustedfirmware.org/view/Hafnium/job/hafnium-static-checks/"
        ],
        "Code Coverage": [
            "https://ci.trustedfirmware.org/view/Hafnium/job/hafnium-code-coverage-fvp/"
        ]
    },
    "Mbed TLS": {
        "Patch": [
            "https://mbedtls.trustedfirmware.org/job/mbed-tls-pr-head/"
        ],
        "Daily": [
            "https://mbedtls.trustedfirmware.org/job/mbed-tls-nightly-tests/"
        ],
        "Weekly": [],
        "MISRA": [],
        "Static Analysis": [],
        "Code Coverage": [
            "https://mbedtls.trustedfirmware.org/job/mbed-tls-nightly-tests/"
        ]
    }
}


def get_last_10_build_info(job_url, retries=2):
    """
    Fetch build information for the last 10 builds from a Jenkins job.
    Enhanced with multibranch job support using color status.
    """
    if not job_url.endswith("/"):
        job_url += "/"

    basic_api_url = job_url + "api/json?tree=jobs[name,color,url,lastBuild[timestamp]]"
    try:
        r = requests.get(basic_api_url, timeout=10)
        if r.status_code == 200:
            job_data = r.json()
            if 'jobs' in job_data and 'builds' not in job_data:
                logger.info(f"Detected multibranch job at {job_url}")
                jobs = job_data.get('jobs', [])

                if jobs:
                    jobs_with_timestamps = []
                    for job in jobs:
                        last_build = job.get('lastBuild')
                        timestamp = 0
                        if last_build and last_build.get('timestamp'):
                            timestamp = last_build['timestamp']
                        jobs_with_timestamps.append((timestamp, job))

                    branch_limit = 20 if 'mbedtls' in job_url.lower() else 10
                    jobs_with_timestamps.sort(key=lambda x: x[0], reverse=True)
                    recent_jobs = [job for timestamp, job in jobs_with_timestamps[:branch_limit]]

                    logger.info(f"Analyzing {len(recent_jobs)} most recent branches (out of {len(jobs)} total)")

                    total_success = 0
                    total_jobs = 0
                    latest_timestamp = 0
                    latest_build = None

                    for job in recent_jobs:
                        color = job.get('color', 'notbuilt')
                        url = job.get('url', '')

                        base_color = color.replace('_anime', '')
                        is_building = '_anime' in color

                        if base_color == 'blue' and not is_building:  # Only count completed successes
                            total_success += 1

                        total_jobs += 1
                        if url and base_color not in ['nobuilt', 'notbuilt']:
                            try:
                                last_build = job.get('lastBuild')
                                if last_build:
                                    build_timestamp = last_build.get('timestamp', 0)
                                    build_number = last_build.get('number')
                                    if build_timestamp > latest_timestamp:
                                        latest_timestamp = build_timestamp
                                        latest_build = build_number
                            except:
                                pass

                    if total_jobs > 0:
                        pass_rate = total_success / total_jobs
                        logger.info(f"Multibranch summary: {total_success}/{total_jobs} recent branches successful")

                        return {
                            "pass_rate": pass_rate,
                            "latest_build_number": latest_build,
                            "latest_timestamp": latest_timestamp,
                            "is_multibranch": True
                        }

                logger.warning(f"Multibranch job has no branches: {job_url}")
                return {
                    "pass_rate": 0,
                    "latest_build_number": "No branches",
                    "latest_timestamp": 0,
                    "status": "no_branches"
                }
    except Exception as e:
        logger.debug(f"Error checking job type for {job_url}: {e}")

    # Regular single job
    return get_single_job_builds(job_url, retries)


def get_single_job_builds(job_url, retries=2):
    """Get builds from a single Jenkins job."""
    api_url = job_url + "api/json?tree=builds[number,result,timestamp]{0,10}"

    for attempt in range(retries):
        try:
            logger.info(f"Fetching builds from {job_url} (attempt {attempt + 1}/{retries})")

            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Accept': 'application/json',
            }

            r = requests.get(api_url, timeout=15, headers=headers)

            if r.status_code != 200:
                logger.warning(f"HTTP {r.status_code} for {job_url}")
                if attempt < retries - 1:
                    time.sleep(2)
                    continue
                return None

            data = r.json()
            builds = data.get("builds", [])

            if not builds:
                logger.warning(f"No builds found for {job_url}")
                return {
                    "pass_rate": 0,
                    "latest_build_number": "No builds",
                    "latest_timestamp": 0,
                    "status": "no_builds"
                }

            passed = 0
            latest_build_number = None
            latest_timestamp = 0

            for build in builds:
                if build.get("result") == "SUCCESS":
                    passed += 1
                ts = build.get("timestamp", 0)
                if ts > latest_timestamp:
                    latest_timestamp = ts
                    latest_build_number = build.get("number")

            count = len(builds)
            pass_rate = passed / count if count else 0

            logger.info(f"Success: {job_url} - {passed}/{count} builds passed ({pass_rate:.1%})")

            return {
                "pass_rate": pass_rate,
                "latest_build_number": latest_build_number,
                "latest_timestamp": latest_timestamp
            }

        except requests.exceptions.RequestException as e:
            logger.error(f"Request failed for {job_url}: {e}")
            if attempt < retries - 1:
                time.sleep(2)
            continue
        except Exception as e:
            logger.error(f"Unexpected error for {job_url}: {e}")
            return None

    logger.error(f"All attempts failed for {job_url}")
    return None


def format_timestamp(timestamp):
    """Convert Jenkins timestamp to readable format."""
    if timestamp:
        return datetime.fromtimestamp(timestamp / 1000).strftime("%Y-%m-%d %H:%M")
    return "N/A"


def main():
    """Generate the dashboard with improved error handling."""
    logger.info("Starting dashboard generation...")

    results = {}
    for project, categories in projects.items():
        logger.info(f"Processing project: {project}")
        results[project] = {}

        for category, urls in categories.items():
            logger.info(f"  Processing category: {category}")

            if not urls:
                results[project][category] = {
                    "status": "N/A", "tooltip": "", "link": None}
                continue

            total_rate = 0
            job_count = 0
            overall_latest_build = None
            overall_latest_ts = 0
            overall_link = None
            successful_jobs = 0

            for url in urls:
                info = get_last_10_build_info(url)
                job_count += 1

                if info is None:
                    logger.warning(f"    Failed to get data for {url}")
                else:
                    total_rate += info["pass_rate"]
                    successful_jobs += 1

                    if info["latest_timestamp"] > overall_latest_ts:
                        overall_latest_ts = info["latest_timestamp"]
                        overall_latest_build = info["latest_build_number"]
                        overall_link = url + "lastCompletedBuild/"

                time.sleep(0.5)  # Rate limiting

            if successful_jobs == 0:
                # All jobs failed to fetch data
                results[project][category] = {
                    "status": "ERROR",
                    "tooltip": "<p class=\"mt-0 text-xs text-center\">Failed to fetch data</p>",
                    "link": None
                }
            else:
                avg_rate = total_rate / successful_jobs
                last_build_time = format_timestamp(overall_latest_ts)

                # CONSISTENT tooltip format for ALL jobs - no exceptions
                tooltip_text = (
                    f"<p class=\"mt-0 text-xs text-center\">"
                    f"Latest build: <b>{overall_latest_build if overall_latest_build not in ['No builds', 'No branches'] else 'N/A'}</b><br/>"
                    f"Last run: <b>{last_build_time}</b><br/>"
                    f"Average pass rate: <b>{avg_rate*100:.0f}%</b><br/>"
                    f"Active sources: <b>{successful_jobs}/{job_count}</b>"
                    f"</p>"
                )

                results[project][category] = {
                    "value": avg_rate * 100,
                    "tooltip": tooltip_text,
                    "link": overall_link
                }

    # Generate HTML output
    generated_date = datetime.now()
    date_str = generated_date.strftime("%Y-%m-%d %H:%M:%S")
    output_filename = "src/assets/html/dashboard.astro"

    html = """
---
import IconButton from "@/components/icon_button/IconButton.astro";
---

<table class="w-full border border-white">
<thead class="bg-white text-black">
<tr>
<th class="px-4 py-2 border border-white bg-gray-300 text-center">Project</th>
<th class="px-4 py-2 border border-white bg-gray-300 text-center">Patch</th>
<th class="px-4 py-2 border border-white bg-gray-300 text-center">Daily</th>
<th class="px-4 py-2 border border-white bg-gray-300 text-center">Weekly</th>
<th class="px-4 py-2 border border-white bg-gray-300 text-center">MISRA</th>
<th class="px-4 py-2 border border-white bg-gray-300 text-center">Static Analysis</th>
<th class="px-4 py-2 border border-white bg-gray-300 text-center">Code Coverage</th>
</tr>
</thead>
<tbody>
"""

    for project, data in results.items():
        html += f"<tr class=\"bg-white\"><td class=\"px-4 py-2 border border-gray-300 text-center align-middle\"><b>{project}</b></td>"

        for col in ["Patch", "Daily", "Weekly", "MISRA", "Static Analysis", "Code Coverage"]:
            cell = data.get(col, {"status": "", "tooltip": "", "link": None})

            html += "<td class=\"px-4 py-2 border border-gray-300 text-center align-top\">"

            if "value" in cell:
                html += "<div class=\"flex flex-col items-center gap-0.5 leading-tight\">"
                html += "<div class=\"flex justify-center items-start leading-none -mb-0.5\">"
                if cell["link"]:
                    html += f'<IconButton value="{cell["value"]}" url="{cell["link"]}" />'
                else:
                    html += f'<IconButton value="{cell["value"]}" />'
                html += "</div>"
                html += f'{cell["tooltip"]}'
                html += "</div>"
            else:
                html += f'{cell["status"]}'
                html += f'{cell["tooltip"]}'

            html += '</td>'
        html += "</tr>\n"

    html += f"""</tbody>
</table>
<p style="font-size: 0.9em; color: white">Data generated on: {date_str}</p>
"""

    try:
        with open(output_filename, "w", encoding="utf-8") as f:
            f.write(html)
        logger.info(f"Dashboard successfully created as {output_filename}")

    except Exception as e:
        logger.error(f"Failed to write dashboard file: {e}")


if __name__ == "__main__":
    main()