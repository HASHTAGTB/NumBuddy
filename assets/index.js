function jsScrollAnimations(){let t=!1,e=document.querySelectorAll("[data-jsscroll]");function s(t,e=1){const s=t.getBoundingClientRect().top,l=window.innerHeight||document.documentElement.clientHeight;return s>=0&&s<=l/e}function l(){!function(e,s){if(t)return;t=!0,setTimeout(()=>{e(),t=!1},s)}(()=>{e.forEach(t=>{const e=t.getAttribute("data-jsscroll-delay")||0,l=t.hasAttribute("data-jsscroll-reset"),o=t.getAttribute("data-jsscroll-threshold")||1.25;s(t,parseFloat(o))?setTimeout(()=>{t.classList.add("jsScroll__scrolled")},e):l&&!s(t,0)&&t.classList.remove("jsScroll__scrolled")})},250)}function o(){e.forEach(t=>{t.classList.remove("jsScroll__scrolled"),t.classList.remove("jsScroll__disabled")})}function n(){window.removeEventListener("scroll",l)}return{init:function(){0!==e.length&&(window.addEventListener("scroll",l),l())},pause:n,reset:o,disable:function(){n(),o(),e.forEach(t=>{t.classList.add("jsScroll__disabled")})}}}
//# sourceMappingURL=index.js.map
