"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6193],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,y=m["".concat(l,".").concat(c)]||m[c]||d[c]||o;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(4250),a=(n(9496),n(9613));const o={slug:"./../"},s="Getting Started",i={unversionedId:"oxmysql/Getting Started/index",id:"oxmysql/Getting Started/index",title:"Getting Started",description:"MySQL or MariaDB?",source:"@site/docs/oxmysql/Getting Started/index.md",sourceDirName:"oxmysql/Getting Started",slug:"/oxmysql/",permalink:"/docs/oxmysql/",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/oxmysql/Getting Started/index.md",tags:[],version:"current",lastUpdatedAt:1673993468,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{slug:"./../"},sidebar:"oxmysql",previous:{title:"OxMySQL",permalink:"/docs/category/oxmysql"},next:{title:"Benchmark",permalink:"/docs/oxmysql/Getting Started/benchmark"}},l={},u=[{value:"MySQL or MariaDB?",id:"mysql-or-mariadb",level:2},{value:"XAMPP",id:"xampp",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Debug options",id:"debug-options",level:3},{value:"Using the UI",id:"using-the-ui",level:3},{value:"Compatibility",id:"compatibility",level:2},{value:"mysql-async",id:"mysql-async",level:3},{value:"ghmattimysql",id:"ghmattimysql",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("h2",{id:"mysql-or-mariadb"},"MySQL or MariaDB?"),(0,a.kt)("p",null,"Most resources for FiveM were designed to be used with MySQL 5.7 and may hit compatibility issues when using MySQL 8, i.e."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"More reserved keywords, like 'stored' and 'group'."),(0,a.kt)("li",{parentName:"ul"},"Longtext / JSON fields do not support default values.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mariadb.org/"},"MariaDB")," is strongly recommended for compatibility, and improved performance (over all versions of MySQL)."),(0,a.kt)("h2",{id:"xampp"},"XAMPP"),(0,a.kt)("p",null,"XAMPP is not a database, and should not be used solely to start your MySQL/MariaDB service. Please ",(0,a.kt)("em",{parentName:"p"},"do not")," use XAMPP."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/overextended/oxmysql/releases/latest"},"latest build")," of oxmysql (not the source code)."),(0,a.kt)("li",{parentName:"ul"},"Extract the contents of the archive to your resources folder."),(0,a.kt)("li",{parentName:"ul"},"Start the resource near the top of your resources in your ",(0,a.kt)("inlineCode",{parentName:"li"},"server.cfg"),"."),(0,a.kt)("li",{parentName:"ul"},"If you have a lot of streamed assets, load them first to prevent timing out the connection.")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"You can change the configuration settings by using convars inside your ",(0,a.kt)("inlineCode",{parentName:"p"},"server.cfg"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Reference the following for an idea of how to set your connection options.",(0,a.kt)("br",{parentName:"p"}),"\n","You must include one of the following lines, adjusted for your connection and database settings."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"When using convars do not replicate sensitive information to the client.\n",(0,a.kt)("strong",{parentName:"p"},"set")," will only be set on the server, while ",(0,a.kt)("strong",{parentName:"p"},"setr")," is replicated.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'set mysql_connection_string "mysql://root:12345@localhost:3306/es_extended?charset=utf8mb4"\nset mysql_connection_string "user=root;password=12345;host=localhost;port=3306;database=es_extended;charset=utf8mb4"\n')),(0,a.kt)("p",null,"Certain special characters are reserved or blocked and may cause issues when used in your password.",(0,a.kt)("br",{parentName:"p"}),"\n","For more optional settings (such as multiple statements) you can reference ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sidorares/node-mysql2/blob/master/typings/mysql/lib/Pool.d.ts#L10"},"pool.d.ts")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sidorares/node-mysql2/blob/master/typings/mysql/lib/Connection.d.ts#L8"},"connection.d.ts"),"."),(0,a.kt)("p",null,"You can also add the following convars if you require extra information when testing queries."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"set mysql_slow_query_warning 150\nset mysql_debug true\n")),(0,a.kt)("h3",{id:"debug-options"},"Debug options"),(0,a.kt)("p",null,"When using the ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql_debug")," convar, rather than setting the value as true, you can send an array and enable debug prints for a set list of resources instead."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'set mysql_debug [\n    "ox_core",\n    "ox_inventory"\n]\n')),(0,a.kt)("p",null,"This list can be adjusted during runtime with commands, temporarily adding or removing resources until the resource is restarted."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"oxmysql_debug remove ox_core\noxmysql_debug add ox_core\n")),(0,a.kt)("h3",{id:"using-the-ui"},"Using the UI"),(0,a.kt)("p",null,"Before using the UI first you have to make sure you have the ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql_ui")," convar set to true:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"set mysql_ui true\n")),(0,a.kt)("p",null,"Also make sure that you have ",(0,a.kt)("inlineCode",{parentName:"p"},"command")," ace permission access, then you should be able to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql")," command in game to open up the UI and see your query data."),(0,a.kt)("h2",{id:"compatibility"},"Compatibility"),(0,a.kt)("p",null,"You shouldn't run multiple mysql resources to ensure the best experience.",(0,a.kt)("br",{parentName:"p"}),"\n","The resources listed below can be deleted to allow oxmysql to handle the events, without any changes."),(0,a.kt)("h3",{id:"mysql-async"},"mysql-async"),(0,a.kt)("p",null,"Standard API for mysql-async uses ",(0,a.kt)("inlineCode",{parentName:"p"},"server_script '@mysql-async/lib/MySQL.lua'"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Raw exports, mostly used in resources written in JavaScript or C#, are ",(0,a.kt)("em",{parentName:"p"},"not supported"),"."),(0,a.kt)("h3",{id:"ghmattimysql"},"ghmattimysql"),(0,a.kt)("p",null,"As of v2.4.0, oxmysql can be utilised with ghmattimysql's exports, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"exports.ghmattimysql:execute"),"."))}d.isMDXComponent=!0}}]);