import"./hoisted.eIR-8qRW.js";import"./hoisted.YKHqfak2.js";import"./navigation.pQB08nQA.js";import"./index.es.3QVITkr_.js";import"./http.FvipgnVD.js";import"./jwt.E7BTUPpl.js";import"./resource-progress.6e21kl_i.js";import"./roadmap.mY9zKeY8.js";import"./index.2T9xAa-2.js";import"./index.rS7vpNfE.js";import"./page.WSJoHwTn.js";import"./popup.xZrd6hzK.js";import"./dom.PQSz9BVV.js";class r{constructor(){this.topicSearchId="search-topic-input",this.onDOMLoaded=this.onDOMLoaded.bind(this),this.init=this.init.bind(this),this.filterTopicNodes=this.filterTopicNodes.bind(this)}get topicSearchEl(){return document.getElementById(this.topicSearchId)}filterTopicNodes(e){const i=e.target.value.trim().toLowerCase();if(!i){document.querySelectorAll("[data-topic]").forEach(t=>t.classList.remove("hidden"));return}document.querySelectorAll("[data-topic]").forEach(t=>t.classList.add("hidden")),document.querySelectorAll(`[data-topic*="${i}"]`).forEach(t=>t.classList.remove("hidden"))}onDOMLoaded(){this.topicSearchEl&&this.topicSearchEl.addEventListener("keyup",this.filterTopicNodes)}init(){window.addEventListener("DOMContentLoaded",this.onDOMLoaded)}}const c=new r;c.init();document.querySelectorAll("[faq-question]").forEach(o=>{o.addEventListener("click",()=>{document.querySelectorAll("[faq-answer]").forEach(i=>{i.classList.add("hidden")});const e=o.nextElementSibling;e&&e.classList.remove("hidden")})});
