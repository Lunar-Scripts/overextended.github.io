"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7008],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,y=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(y,s(s({ref:t},u),{},{components:r})):n.createElement(y,s({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9393:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(2564),a=(r(9496),r(9613));const o={},s="Benchmark",i={unversionedId:"oxmysql/Getting Started/benchmark",id:"oxmysql/Getting Started/benchmark",title:"Benchmark",description:"Internal benchmark",source:"@site/docs/oxmysql/Getting Started/benchmark.md",sourceDirName:"oxmysql/Getting Started",slug:"/oxmysql/Getting Started/benchmark",permalink:"/docs/oxmysql/Getting Started/benchmark",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/oxmysql/Getting Started/benchmark.md",tags:[],version:"current",lastUpdatedAt:1684744261,formattedLastUpdatedAt:"May 22, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/oxmysql/Getting Started/"},next:{title:"Common Issues",permalink:"/docs/oxmysql/Getting Started/issues"}},l={},c=[{value:"Lua (5.4)",id:"lua-54",level:2},{value:"JavaScript",id:"javascript",level:2}],u={toc:c},m="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"benchmark"},"Benchmark"),(0,a.kt)("p",null,"Internal benchmark"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"Low: 0.1222ms | Avg: 0.14188357ms | Total: 1418.8357ms (10000 queries)\n")),(0,a.kt)("p",null,"Round-trip-time for exports"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"Low: 0.1997ms | Avg: 0.25898800ms | Total: 2589.8800ms (10000 queries)\n")),(0,a.kt)("h2",{id:"lua-54"},"Lua (5.4)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local val = 10000\nRegisterCommand('luasync', function()\n    local queryTimesLocal = {}\n    local result\n    MySQL.prepare.await('SELECT identifier from users WHERE lastname = ?', {'Linden'})\n\n    for i=1, val do\n        local time = os.nanotime()\n        local r = MySQL.prepare.await('SELECT identifier from users WHERE lastname = ?', {'Linden'})\n        queryTimesLocal[#queryTimesLocal+1] = (os.nanotime() - time) / 1000000\n        if i==1 then result = r end\n    end\n\n    local queryMsLow, queryMsSum = 1000, 0\n\n    for _, v in pairs(queryTimesLocal) do queryMsSum = queryMsSum + v end\n    for _, v in pairs(queryTimesLocal) do\n        if v < queryMsLow then queryMsLow = v end\n    end\n\n    local averageQueryTime = queryMsSum / #queryTimesLocal\n    print(json.encode(result))\n    print('Low: '.. queryMsLow ..'ms | Avg: '..averageQueryTime..'ms | Total: '..queryMsSum..'ms ('..#queryTimesLocal..' queries)')\nend)\n")),(0,a.kt)("h2",{id:"javascript"},"JavaScript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const val = 10000\nRegisterCommand('jssync', async() => {\n  const queryTimesLocal = [];\n  let result\n  await exports.oxmysql.prepare_async('SELECT identifier from users WHERE lastname = ?', ['Linden'])\n\n  for(let i=0; i < val; i++) {\n    const startTime = process.hrtime()\n    const r = await exports.oxmysql.prepare_async('SELECT identifier from users WHERE lastname = ?', ['Linden'])\n    queryTimesLocal.push(process.hrtime(startTime)[1] / 1000000)\n    if (i === 0) result = r\n  }\n\n  const queryMsSum = queryTimesLocal.reduce((a, b) => a + b, 0)\n  const queryMsLow = queryTimesLocal.sort((a, b) => a - b)[0]\n  const averageQueryTime = queryMsSum / queryTimesLocal.length\n\n  console.log(result)\n  console.log('Low: '+ queryMsLow +'ms | Avg: '+averageQueryTime+'ms | Total: '+queryMsSum+'ms ('+queryTimesLocal.length+' queries)')\n})\n")))}p.isMDXComponent=!0}}]);