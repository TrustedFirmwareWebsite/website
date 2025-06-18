""" Fetch the data from CI to generate the dashboard. """
""" Author: Ben Copeland (ben.copeland@linaro.org) """

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
        "Patch": [
            "https://ci.trustedfirmware.org/view/TF-M/job/tf-m-static/"
        ],
        "Daily": [
            "https://ci.trustedfirmware.org/view/TF-M/job/tf-m-nightly/",
            "https://ci.trustedfirmware.org/view/TF-M/job/tf-m-nightly-performance/",
            "https://ci.trustedfirmware.org/view/TF-M/job/tf-m-extra-build/"
        ],
        "Weekly": [],
        "MISRA": [],
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
            results[project][category] = {"status": "-", "tooltip": "", "link": None}
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
        tooltip_text = f"<p>Latest build: <b>{overall_latest_build if overall_latest_build is not None else 'N/A'}</b><br>Average pass rate: <b>{avg_rate*100:.0f}%</b></p>"
        results[project][category] = {"value": avg_rate*100, "tooltip": tooltip_text, "link": overall_link}

generated_date = datetime.now()
date_str = generated_date.strftime("%Y-%m-%d %H:%M:%S")
filename_date = generated_date.strftime("%Y%m%d_%H%M%S")
# It has to be a ".astro" file for IconButton to work
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
        if "value" in cell:
            html += "<td class=\"px-4 py-2 border border-gray-300 text-center align-top\">"
            html += "<div class=\"flex justify-center items-center\">"
            if cell["link"]:
                html += f'<IconButton value="{cell["value"]}" url="{cell["link"]}" />'
            else:
                html += f'<IconButton value="{cell["value"]}" />'
            html += "</div>"
        else:
            html += "<td class=\"px-4 py-2 border border-gray-300 text-center align-middle\">"
            html += f'{cell["status"]}'
        html += f'{cell["tooltip"]}</td>'
    html += "</tr>\n"

html += f"""</tbody>
</table>
<p style="font-size: 0.9em; color: white">Data generated on: {date_str}</p>
"""

with open(output_filename, "w", encoding="utf-8") as f:
    f.write(html)
print(f"Dashboard created as {output_filename}")
