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
  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }

  function enhanceCodeBlocks() {
    document.querySelectorAll("#contents pre > code").forEach((code) => {
      if (code.classList.contains("language-mermaid")) return;
      const pre = code.parentElement;
      if (!pre || pre.parentElement?.classList.contains("code-block-wrapper")) return;

      const wrapper = document.createElement("div");
      wrapper.className = "code-block-wrapper";
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "code-copy-btn";
      btn.setAttribute("aria-label", "Copy code to clipboard");
      btn.textContent = "Copy";

      let resetTimer = null;
      btn.addEventListener("click", async () => {
        try {
          await copyText(code.textContent || "");
          btn.textContent = "Copied";
          btn.classList.add("is-copied");
          if (resetTimer) window.clearTimeout(resetTimer);
          resetTimer = window.setTimeout(() => {
            btn.textContent = "Copy";
            btn.classList.remove("is-copied");
          }, 2000);
        } catch (err) {
          console.error("Failed to copy code block:", err);
        }
      });

      wrapper.appendChild(btn);
    });
  }

  document.addEventListener("DOMContentLoaded", enhanceCodeBlocks);
})();
