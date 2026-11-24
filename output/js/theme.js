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
  const STORAGE_KEY = "color-scheme";
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function getMeta() {
    return document.querySelector('meta[name="color-scheme"]');
  }

  function readStored() {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return value === "light" || value === "dark" ? value : null;
    } catch (_) {
      return null;
    }
  }

  function writeStored(value) {
    try {
      if (value === null) {
        localStorage.removeItem(STORAGE_KEY);
      } else {
        localStorage.setItem(STORAGE_KEY, value);
      }
    } catch (_) {
      // Theme still applies to the current page even when storage is blocked.
    }
  }

  function getSystemScheme() {
    return darkQuery.matches ? "dark" : "light";
  }

  function getRenderedScheme() {
    const meta = getMeta();
    if (meta && (meta.content === "light" || meta.content === "dark")) {
      return meta.content;
    }
    return getSystemScheme();
  }

  function applyMeta(value) {
    const meta = getMeta();
    if (meta) {
      meta.content = value || "light dark";
    }
  }

  async function renderMermaid() {
    if (typeof window.mermaid === "undefined") return;
    const blocks = document.querySelectorAll(".mermaid");
    if (!blocks.length) return;

    const theme = getRenderedScheme() === "dark" ? "dark" : "default";
    blocks.forEach((el) => {
      if (!el.dataset.mermaidSrc) {
        el.dataset.mermaidSrc = el.textContent;
      }
      el.removeAttribute("data-processed");
      el.textContent = el.dataset.mermaidSrc;
    });

    window.mermaid.initialize({ startOnLoad: false, theme });
    try {
      await window.mermaid.run({ querySelector: ".mermaid" });
    } catch (err) {
      console.error("Mermaid rendering failed:", err);
    }
  }

  function transitionTheme(updateFn) {
    if (typeof document.startViewTransition === "function" && !reducedMotion.matches) {
      document.startViewTransition(() => updateFn());
      return;
    }
    const root = document.documentElement;
    root.classList.add("theme-transitioning");
    updateFn();
    window.setTimeout(() => root.classList.remove("theme-transitioning"), 320);
  }

  function toggleTheme() {
    const system = getSystemScheme();
    const target = getRenderedScheme() === "dark" ? "light" : "dark";
    const nextStored = target === system ? null : target;

    writeStored(nextStored);
    transitionTheme(() => {
      applyMeta(nextStored);
      return renderMermaid();
    });
  }

  window.sourcelumeRenderMermaid = renderMermaid;

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("theme-toggle");
    if (toggle) {
      toggle.addEventListener("click", toggleTheme);
    }
  });

  window.addEventListener("storage", (event) => {
    if (event.key !== STORAGE_KEY && event.key !== null) return;
    applyMeta(readStored());
    renderMermaid();
  });

  // Never remove a stored override on OS change; only re-render Mermaid when following system.
  darkQuery.addEventListener("change", () => {
    if (readStored() === null) {
      renderMermaid();
    }
  });
})();
