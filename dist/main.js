(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),a=n.n(r),i=n(645),o=n.n(i)()(a());o.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Pacifico&display=swap);"]),o.push([e.id,"* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    background-color: white;\r\n}\r\n\r\n#content {\r\n    font-family: 'Noto Sans', 'sans serif';\r\n    color: white;\r\n}\r\n\r\n/* HEADER STUFF */\r\n\r\n.header {\r\n    font-family: 'Pacifico', cursive;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    min-width: 200px;\r\n    justify-content: space-between;\r\n    background-color: #3a4144;\r\n    font-size: 35px;\r\n    padding: 5px;\r\n    text-shadow: 3px 2px 5px #20292ed8;\r\n    box-shadow: 0px 0px 5px black;\r\n}\r\n\r\n#navIcon, .ghub {\r\n    font-size: 50px;\r\n    cursor: pointer;\r\n    padding: 15px;\r\n    transition: .1s;\r\n    transition-timing-function: ease-out;\r\n}\r\n\r\n#navIcon:active {\r\n    font-size: 45px;\r\n    padding-left: 20px;\r\n    transition: .05s;\r\n}\r\n\r\n.header i.ghub:hover {\r\n    cursor: pointer;\r\n    transition: .1s;\r\n    transition-timing-function: ease-out;\r\n}\r\n\r\n/* NAV MENU STUFF */\r\n\r\n.sMenuOverlay {\r\n    height: 100vh;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0; /* Stay at the top */\r\n    left: 0;\r\n}\r\n\r\n.sideMenu {\r\n    font-family: 'Noto Sans', 'sans serif';\r\n    height: 100%; /* 100% Full-height */\r\n    width: 0; /* 0 width - change this with JavaScript */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 2; /* Stay on top */\r\n    top: 0; /* Stay at the top */\r\n    left: 0;\r\n    background-color: #3a4144; /* Black*/\r\n    overflow-x: hidden; /* Disable horizontal scroll */\r\n    transition: 0.15s; /* 0.5 second transition effect to slide in the sidenav */\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n#navHText {\r\n    font-size: 30px;\r\n    padding-left: 10px;\r\n}\r\n\r\n#navBack {\r\n    font-size: 30px;\r\n    padding-right: 25px;\r\n    cursor: pointer;\r\n}\r\n\r\n#navBack:active {\r\n    font-size: 25px;\r\n    padding-right: 30px;\r\n}\r\n\r\n.sideHeader {\r\n    width: 100%;\r\n    transition: .15s;\r\n    font-size: 20px;\r\n    text-shadow: 3px 2px 5px #20292ed8;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding-bottom: 20px;\r\n    padding-top: 20px;\r\n    margin-bottom: 20px;\r\n    box-shadow: 0px 0px 20px rgb(0, 0, 0);\r\n\r\n}\r\n\r\n.sideItem {\r\n    margin: 5px;\r\n    background-color: rgb(199, 97, 97);\r\n    border-color: black;\r\n    width: 90%;\r\n    display: flex;\r\n    display: grid;\r\n    grid-template-columns: 1fr 4fr 1fr;\r\n    grid-template-rows: 1fr;\r\n    align-items: center;\r\n    justify-items: center;\r\n    flex-wrap: nowrap;\r\n    height: 50px;\r\n    border-radius: 10px;\r\n    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.651);\r\n    cursor: pointer;\r\n    transition: .1s;\r\n}\r\n\r\n.sideItem:active{\r\n    background-color: rgb(255, 255, 255);\r\n    transition: .05s;\r\n}\r\n\r\np.projectText {\r\n    font-size: auto;\r\n    justify-self: left;\r\n}\r\n\r\n.fa-square-pen {\r\n    font-size: 25px;\r\n    cursor: pointer;\r\n    transition: .05s;\r\n}\r\n\r\n.fa-square-pen:hover {\r\n    font-size: 26px;\r\n    transition: .05s;\r\n}\r\n\r\n#projectAdd {\r\n    background-color: rgba(114, 114, 114, 0);\r\n}\r\n\r\n#projectAdd:hover {\r\n    background-color: rgba(114, 114, 114, 0.308);\r\n}\r\n\r\n#projectAdd:active{\r\n    background-color: rgb(255, 255, 255);\r\n    transition: .05s;\r\n}\r\n\r\n/* EDIT STUFF */\r\n\r\n.pTextInput {\r\n    font-size: 20px;\r\n    padding-left: 5px;\r\n    margin-left: 5px;\r\n    border: 0px;\r\n    outline: none;\r\n    color: white;\r\n    border-radius: 10px;\r\n    max-width: 180px;\r\n    justify-self: left;\r\n    font-family: 'Noto Sans', 'sans serif';\r\n    background-color: rgb(179, 75, 75);\r\n}\r\n\r\n/* TASKVIEW STUFF */\r\n\r\n\r\n#taskView {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: auto;\r\n    width: clamp(345px, 75%, 900px);\r\n}\r\n\r\n.projectHText {\r\n    margin: 10px;\r\n    padding: 10px;\r\n    width: 100%;\r\n    font-size: 25px;\r\n    text-align: center;\r\n    border-radius: 10px;\r\n    background-color: rgb(199, 97, 97);\r\n    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.651);\r\n    text-shadow: 3px 2px 5px #20292ed8;\r\n}\r\n\r\n#taskContainer {\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template: repeat(auto-fill, 100px) / repeat(auto-fit, minmax(200px, 1fr));\r\n    gap: 5px\r\n}\r\n\r\n.taskCard {\r\n    color: #3a4144;\r\n    font-weight:600;\r\n    border: 1px solid black;\r\n}",""]);const s=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(o[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],s=0;s<e.length;s++){var d=e[s],c=r.base?d[0]+r.base:d[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=a(m,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=n(i[o]);t[s].references--}for(var d=r(e,a),c=0;c<i.length;c++){var l=n(i[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),i=n(569),o=n.n(i),s=n(565),d=n.n(s),c=n(216),l=n.n(c),p=n(589),u=n.n(p),m=n(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=o().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;class h{constructor(e){this.pName=e,this.pId=h.pLibraryIndex+=1,this.tasks=[]}addTask(e,t,n,r){let a={taskName:e,date:t,priority:n,notes:r,completed:!1};this.tasks.push(a)}static pLibraryIndex=0;static pLibrary=[];static getPLib(){return h.pLibrary}static pushPLib(e){h.pLibrary.push(e)}static removePLib(e){let t=h.pLibrary.indexOf(e);if(-1===t)return"Project Not Found";h.pLibrary.splice(t,1)}static updatePLib(e){let t=h.pLibrary.indexOf(e);return-1!==t&&h.pLibrary.splice(t,1,e),"Project Not Found"}}const x=e=>{const t=h.getPLib()[h.getPLib().findIndex((t=>t.pId==e.target.id))];console.log(t);const n=e.target.parentNode;e.target.previousElementSibling.remove(),e.target.remove();let r=document.createElement("i");r.classList="fa-solid fa-square-pen",r.id=t.pId,r.addEventListener("click",(e=>x(e)));let a=document.createElement("input");a.type="text",a.minLength=1,a.maxLength=20,a.classList="projectText pTextInput",a.value=t.pName;let i=!1;a.addEventListener("keydown",(e=>{if("Enter"===e.key){if(a.value.length<1)return;i=!0;const o=document.createElement("p");n.appendChild(o),o.classList="projectText",o.textContent=e.target.value,t.pName=e.target.value,e.target.remove(),n.appendChild(r)}})),a.addEventListener("blur",(e=>{if(!0===i)return;if(a.value.length<1)return;const o=document.createElement("p");n.appendChild(o),o.classList="projectText",o.textContent=e.target.value,t.pName=e.target.value,e.target.remove(),n.appendChild(r),i=!1})),n.appendChild(a),a.focus()},g=x,v=e=>{let t=document.getElementById("mainView"),n=document.createElement("div");n.id="taskView";let r=document.createElement("p");r.classList="projectHText",r.innerHTML=`${e.pName}`,n.appendChild(r);let a=document.createElement("div");a.id="taskContainer",n.appendChild(a),t.appendChild(n),e.tasks.forEach((e=>{(e=>{let t=document.getElementById("taskContainer"),n=document.createElement("div");n.classList="taskCard";let r=document.createElement("p");r.classList="taskName",r.innerHTML=`${e.taskName}`,n.appendChild(r);let a=document.createElement("p");a.classList="taskDate",a.innerHTML=`Due: ${e.date}`,n.appendChild(a);let i=document.createElement("p");i.classList="taskPrio",i.innerHTML=`${e.priority}`,n.appendChild(i);let o=document.createElement("p");o.classList="taskNotes",o.innerHTML=`Notes: ${e.notes}`,n.appendChild(o),t.appendChild(n)})(e)}))};(()=>{const e=document.getElementById("content");let t=document.createElement("div");t.classList="header";let n=document.createElement("i");n.classList="fa-solid fa-bars navIcon",n.id="navIcon",t.appendChild(n);let r=document.createElement("p");r.innerHTML="To Do",t.appendChild(r);let a=document.createElement("i");a.classList="fa-brands fa-square-github ghub",t.appendChild(a),e.appendChild(t)})(),(()=>{const e=document.getElementById("navIcon");let t=document.createElement("div");t.classList="sMenuOverlay";let n=document.createElement("div");n.classList="sideMenu",n.id="sideMenu";let r=document.createElement("div");r.classList="sideHeader";let a=document.createElement("p");a.id="navHText",a.innerHTML="Projects",r.appendChild(a);let i=document.createElement("i");i.classList="fa-solid fa-x navBack",i.id="navBack",r.appendChild(i),n.appendChild(r),t.appendChild(n),document.getElementById("content").appendChild(t),e.addEventListener("click",(()=>{t.style.width="100%",n.style.width="275px",n.style.boxShadow="0px 0px 5px black"})),t.addEventListener("click",(e=>{e.target===t&&(t.style.width="0px",n.style.width="0px",n.style.boxShadow="0px 0px 0px")})),i.addEventListener("click",(()=>{t.style.width="0px",n.style.width="0px",n.style.boxShadow="0px 0px 0px"}))})();let y=new h("Work");h.pushPLib(y),h.getPLib()[0].addTask("Do Work","Tomorrow","Low Priority","wacky"),h.getPLib()[0].addTask("Do Work","Tomorrow","Low Priority","wacky"),h.getPLib()[0].addTask("Do Work","Tomorrow","Low Priority","wacky"),h.getPLib()[0].addTask("Do Work","Tomorrow","Low Priority","wacky"),console.log(h.getPLib()[0]),(e=>{const t=h.getPLib().indexOf(e);console.log(t);const n=document.getElementById("sideMenu");if(-1!==t){let t=document.createElement("div");t.classList="sideItem";let r=document.createElement("i");r.classList="fa-solid fa-circle",t.appendChild(r);let a=document.createElement("p");a.classList="projectText",a.innerHTML=e.pName,t.appendChild(a);let i=document.createElement("i");return i.classList="fa-solid fa-square-pen edit",i.id=e.pId,t.appendChild(i),i.addEventListener("click",(e=>g(e))),void n.appendChild(t)}let r=document.createElement("p");r.classList="errorText",r.style="color: red; font-family: sans serif",r.innerHTML="Error Displaying Projects",n.appendChild(r)})(h.getPLib()[0]),(()=>{const e=document.getElementById("sideMenu");let t=document.createElement("div");t.classList="sideItem",t.id="projectAdd";let n=document.createElement("i");n.classList="fa-solid fa-circle",t.appendChild(n);let r=document.createElement("p");r.classList="projectText",r.innerHTML="New Project",t.appendChild(r);let a=document.createElement("i");a.classList="fa-solid fa-plus",t.appendChild(a),e.appendChild(t),t.addEventListener("click",(()=>{(()=>{let e=new h("New Project");h.pushPLib(e),console.log(h.getPLib());const t=document.getElementById("sideMenu");let n=!1,r=document.createElement("div");r.classList="sideItem";let a=document.createElement("i");a.classList="fa-solid fa-circle",r.appendChild(a);let i=document.createElement("input");i.type="text",i.minLength=1,i.maxLength=20,i.classList="projectText pTextInput",i.value=e.pName,r.appendChild(i);let o=document.createElement("i");o.classList="fa-solid fa-square-pen",o.id=e.pId,o.addEventListener("click",(e=>g(e))),i.addEventListener("keydown",(t=>{if("Enter"===t.key){if(i.value.length<1)return;n=!0;const a=document.createElement("p");r.appendChild(a),a.classList="projectText",a.textContent=t.target.value,e.pName=t.target.value,t.target.remove(),r.appendChild(o)}})),i.addEventListener("blur",(t=>{if(!0===n)return;if(i.value.length<1)return;const a=document.createElement("p");r.appendChild(a),a.classList="projectText",a.textContent=t.target.value,e.pName=t.target.value,t.target.remove(),r.appendChild(o),n=!1})),t.insertBefore(r,t.lastChild),i.focus()})()}))})(),(e=>{let t=document.getElementById("content"),n=document.createElement("div");n.id="mainView",t.appendChild(n),v(e)})(h.getPLib()[0])})()})();