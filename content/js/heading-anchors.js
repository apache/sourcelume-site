/* Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License. */

(() => {
  function slugify(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function addHeadingAnchors() {
    const usedIds = new Set(
      Array.from(document.querySelectorAll("[id]"), (el) => el.id)
    );

    document.querySelectorAll("#contents h2, #contents h3, #contents h4").forEach((heading) => {
      if (heading.closest(".sourcelume-card, .sourcelume-hero")) return;
      if (heading.querySelector(".headerlink")) return;

      const label = (heading.textContent || "").trim();
      if (!label) return;

      if (!heading.id) {
        const base = slugify(label);
        if (!base) return;
        let candidate = base;
        let n = 2;
        while (usedIds.has(candidate)) {
          candidate = `${base}-${n}`;
          n += 1;
        }
        heading.id = candidate;
        usedIds.add(candidate);
      }

      const link = document.createElement("a");
      link.className = "headerlink";
      link.href = `#${heading.id}`;
      link.setAttribute("aria-label", `Link to section ${label}`);
      link.textContent = "#";
      heading.appendChild(link);
    });

    if (window.location.hash.length > 1) {
      const targetId = decodeURIComponent(window.location.hash.slice(1));
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView();
      }
    }
  }

  document.addEventListener("DOMContentLoaded", addHeadingAnchors);
})();
