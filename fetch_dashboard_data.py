import requests
import time
from datetime import datetime

projects = {
    "TF-A": {
        "Patch": [
            "https://ci.trustedfirmware.org/view/TF-A/job/tf-a-gerrit-tforg-l1/",
            "https://ci.trustedfirmware.org/view/TF-A/job/tf-a-gerrit-tforg-l2/"
        ],
        "Daily": [
            "https://ci.trustedfirmware.org/job/tf-a-main/",
            "https://ci.trustedfirmware.org/job/tf-a-windows-builder/"
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
        "Patch": [],
        "Daily": [],
        "Weekly": [],
        "MISRA": [],
        "Static Analysis": [],
        "Code Coverage": []
    },
    "Hafnium": {
        "Patch": [
            "https://ci.trustedfirmware.org/view/Hafnium/job/hafnium-build-test-review/",
            "https://ci.trustedfirmware.org/view/Hafnium/job/hafnium-spmc-test-fvp/"
        ],
        "Daily": [
            "https://ci.trustedfirmware.org/job/tf-a-main/",
            "https://ci.trustedfirmware.org/job/tf-a-windows-builder/"
        ],
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
        "Patch": [],
        "Daily": [
            "https://ci.trustedfirmware.org/job/mbedtls-daily/"
        ],
        "Weekly": [
            "https://ci.trustedfirmware.org/job/mbedtls-weekly/"
        ],
        "MISRA": [],
        "Static Analysis": [],
        "Code Coverage": [
            "https://ci.trustedfirmware.org/job/mbedtls-coverage/"
        ]
    }
}

def get_last_10_build_info(job_url):
    if not job_url.endswith("/"):
        job_url += "/"
    api_url = job_url + "api/json?tree=builds[number,result,timestamp]{0,10}"
    try:
        r = requests.get(api_url, timeout=10)
        if r.status_code != 200:
            return None
        data = r.json()
        builds = data.get("builds", [])
        if not builds:
            return None
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
        return {"pass_rate": pass_rate, "latest_build_number": latest_build_number, "latest_timestamp": latest_timestamp}
    except Exception:
        return None

results = {}
for project, categories in projects.items():
    results[project] = {}
    for category, urls in categories.items():
        if not urls:
            results[project][category] = {"status": "N/A", "tooltip": "No jobs configured", "link": None}
            continue
        total_rate = 0
        job_count = 0
        overall_latest_build = None
        overall_latest_ts = 0
        overall_link = None
        for url in urls:
            info = get_last_10_build_info(url)
            if info is None:
                total_rate += 0
                job_count += 1
            else:
                total_rate += info["pass_rate"]
                job_count += 1
                if info["latest_timestamp"] > overall_latest_ts:
                    overall_latest_ts = info["latest_timestamp"]
                    overall_latest_build = info["latest_build_number"]
                    overall_link = url + "lastCompletedBuild/"
            time.sleep(0.5)
        avg_rate = total_rate / job_count if job_count else 0
        symbol = "✅" if avg_rate > 0.5 else "❌"
        tooltip_text = f"Latest build: {overall_latest_build if overall_latest_build is not None else 'N/A'}; Average pass rate: {avg_rate*100:.0f}%"
        results[project][category] = {"status": symbol, "tooltip": tooltip_text, "link": overall_link}

generated_date = datetime.now()
date_str = generated_date.strftime("%Y-%m-%d %H:%M:%S")
filename_date = generated_date.strftime("%Y%m%d_%H%M%S")
output_filename = "src/assets/html/dashboard.html"

html = """
<table class="w-full border border-gray-300">
<thead class="bg-green-600 text-white">
<tr>
<th class="px-4 py-2 border border-gray-300">Project</th>
<th class="px-4 py-2 border border-gray-300">Patch</th>
<th class="px-4 py-2 border border-gray-300">Daily</th>
<th class="px-4 py-2 border border-gray-300">Weekly</th>
<th class="px-4 py-2 border border-gray-300">MISRA</th>
<th class="px-4 py-2 border border-gray-300">Static Analysis</th>
<th class="px-4 py-2 border border-gray-300">Code Coverage</th>
</tr>
</thead>
<tbody>
"""

for project, data in results.items():
    html += f"<tr class=\"bg-gray-100\"><td class=\"px-4 py-2 border border-gray-300\">{project}</td>"
    for col in ["Patch", "Daily", "Weekly", "MISRA", "Static Analysis", "Code Coverage"]:
        cell = data.get(col, {"status": "", "tooltip": "", "link": None})
        if cell["link"]:
            html += f'<td class="px-4 py-2 border border-gray-300" title="{cell["tooltip"]}"><a href="{cell["link"]}" target="_blank">{cell["status"]}</a></td>'
        else:
            html += f'<td class="px-4 py-2 border border-gray-300" title="{cell["tooltip"]}">{cell["status"]}</td>'
    html += "</tr>\n"

html += """</tbody>
</table>
"""

with open(output_filename, "w", encoding="utf-8") as f:
    f.write(html)
print(f"Dashboard created as {output_filename}")
