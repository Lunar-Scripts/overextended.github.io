"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[423],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||l;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5511:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(4250),a=(r(9496),r(9613));const l={title:"Callbacks"},o=void 0,i={unversionedId:"ox_core/Player/Client/callbacks",id:"ox_core/Player/Client/callbacks",title:"Callbacks",description:"ox:getStatus",source:"@site/docs/ox_core/Player/Client/callbacks.md",sourceDirName:"ox_core/Player/Client",slug:"/ox_core/Player/Client/callbacks",permalink:"/docs/ox_core/Player/Client/callbacks",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_core/Player/Client/callbacks.md",tags:[],version:"current",lastUpdatedAt:1676294669,formattedLastUpdatedAt:"Feb 13, 2023",frontMatter:{title:"Callbacks"},sidebar:"ox_core",previous:{title:"Client",permalink:"/docs/ox_core/Player/Client/"},next:{title:"Events",permalink:"/docs/ox_core/Player/Client/events"}},c={},s=[{value:"ox:getStatus",id:"oxgetstatus",level:3},{value:"ox:getLicense",id:"oxgetlicense",level:3}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"oxgetstatus"},"ox:getStatus"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.callback.await('ox:getStatus', delay, targetId, statusName)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"delay: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"targetId: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The server id for the player to get statuses for."))),(0,a.kt)("li",{parentName:"ul"},"statusName?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The name of the status (i.e. hunger). Can be omitted to return all statuses.")))),(0,a.kt)("h3",{id:"oxgetlicense"},"ox:getLicense"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.callback.await('ox:getLicense', delay, licenseName, targetId)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"delay: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"licenseName: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The name of the license to get data for. Can be omitted to return all licenses."))),(0,a.kt)("li",{parentName:"ul"},"targetId?: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The server id to get license data for, defaulting to the current player.")))))}p.isMDXComponent=!0}}]);