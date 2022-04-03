"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[992],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,b=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),r=n(7294),i=n(2389),o=n(3725),l=n(6010),u="tabItem_LplD";function s(e){var t,n,i,s=e.lazy,c=e.block,m=e.defaultValue,p=e.values,d=e.groupId,b=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,o.lx)(f,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=g[0])?void 0:i.props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),k=y.tabGroupChoices,x=y.setTabGroupChoices,w=(0,r.useState)(v),N=w[0],_=w[1],T=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var I=k[d];null!=I&&I!==N&&f.some((function(e){return e.value===I}))&&_(I)}var O=function(e){var t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==N&&(E(t),_(a),null!=d&&x(d,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},b)},f.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return T.push(e)},onKeyDown:C,onFocus:O,onClick:O},i,{className:(0,l.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(g.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function c(e){var t=(0,i.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},4715:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return m},assets:function(){return p},toc:function(){return d},default:function(){return g}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(9877),l=n(8215),u=["components"],s={title:"Creating items"},c=void 0,m={unversionedId:"ox_inventory/Guides/creatingItems",id:"ox_inventory/Guides/creatingItems",title:"Creating items",description:"Defining item data",source:"@site/docs/ox_inventory/Guides/creatingItems.md",sourceDirName:"ox_inventory/Guides",slug:"/ox_inventory/Guides/creatingItems",permalink:"/docs/ox_inventory/Guides/creatingItems",editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Guides/creatingItems.md",tags:[],version:"current",frontMatter:{title:"Creating items"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/ox_inventory/Guides/"},next:{title:"Creating custom drops",permalink:"/docs/ox_inventory/Guides/customDrop"}},p={},d=[{value:"Defining item data",id:"defining-item-data",level:2},{value:"Making the item usable",id:"making-the-item-usable",level:2},{value:"Item events",id:"item-events",level:2},{value:"Creating container items",id:"creating-container-items",level:2}],b={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"defining-item-data"},"Defining item data"),(0,i.kt)("p",null,"Before being able to see or use an item in game it ",(0,i.kt)("strong",{parentName:"p"},"must")," first be defined."),(0,i.kt)("p",null,"All of the items are defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/data/items.lua")," file with key, value pairs.",(0,i.kt)("br",{parentName:"p"}),"\n","Key is the name (not the label) of an item and the value is a table containing the\noptions for the item."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Item options:")),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"shared",label:"Shared",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- label: string\n-- weight: number (optional)\n-- stack: boolean (optional) -- If set to false will not allow the item to be stacked\n-- degrade: number (optional) -- The amount of time in minutes an item will degrade after\n-- close: boolean (optional) -- If set to false will not close the inventory on item use\n-- description: string (optional)\n-- consume: number (optional) -- Number of an item needed to use it, and removed after use (Default: 1)\n-- allowArmed: boolean (optional) -- If set to true will allow use of item while armed with a weapon\n-- client: table (optional)\n-- buttons: table (optional) -- Allows you to define custom context menu functions for the item\n"))),(0,i.kt)(l.Z,{value:"client",label:"Client",mdxType:"TabItem"},(0,i.kt)("p",null,"All values are optional."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- event: string -- Event to trigger after item use\n-- status: table -- Adjust esx_status values after use\n-- anim: table -- Animation during progress bar\n    -- dict: string\n    -- clip: string\n-- prop: table -- Attached prop during progress bar\n    -- model: string or hash\n    -- pos: table (x, y, z)\n    -- rot: table (x, y, z)\n-- disable: boolean -- Disables actions during progress bar\n-- usetime: number\n-- cancel: boolean -- If set to true the player can cancel item use\n-- add: function(total) -- Function that triggers when recieving an item (Returns total item count as `total`)\n-- remove: function(total) -- Function that triggers when removing an item (Returns total item count as `total`)\n"))),(0,i.kt)(l.Z,{value:"buttons",label:"Buttons",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- label: string,\n-- action: function(slot) -- Callback function when button is clicked in context menu, returns item slot\n")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples:")),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"burger",label:"Burger",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"['burger'] = {\n    label = 'Burger',\n    weight = 220,\n    stack = true,\n    close = true,\n    client = {\n        status = { hunger = 200000 },\n        anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },\n        prop = { \n            model = 'prop_cs_burger_01',\n            pos = { x = 0.02, y = 0.02, y = -0.02},\n            rot = { x = 0.0, y = 0.0, y = 0.0}\n        },\n        usetime = 2500,\n    }\n}\n"))),(0,i.kt)(l.Z,{value:"custom_burger",label:"Custom burger",mdxType:"TabItem"},(0,i.kt)("p",null,"A modified burger item, with a description and custom crafting table."),(0,i.kt)("p",null,"Combined with several new functions and events you could easily create your own crafting system."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"['burger'] = {\n    label = 'Burger',\n    description = 'Just what is the secret formula?'\n    weight = 220,\n    stack = true,\n    close = true,\n    client = {\n        status = { hunger = 200000 },\n        anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },\n        prop = {\n            model = 'prop_cs_burger_01', \n            pos = { x = 0.02, y = 0.02, y = -0.02}, \n            rot = { x = 0.0, y = 0.0, y = 0.0}\n        },\n        usetime = 2500,\n    }\n    crafting = {\n        ['bun'] = 2,\n        ['ketchup'] = 1,\n        ['mustard'] = 1,\n        ['cheese'] = 1,\n        ['pickles'] = 1,\n        ['lettuce'] = 1,\n        ['tomato'] = 1,\n        ['onion'] = 1, \n    }\n}\n"))),(0,i.kt)(l.Z,{value:"notify_burger",label:"Notify burger",mdxType:"TabItem"},(0,i.kt)("p",null,"A modified burger item, which gives you notifications on add and remove arguments."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"['burger'] = {\n    label = 'Burger',\n    weight = 220,\n    stack = true,\n    consume = 0,\n    client = {\n        add = function(total)\n            if total > 0 then\n                exports.ox_inventory:notify({text = 'Nice burger you got there!'})\n            end\n        end,\n\n        remove = function(total)\n            if total < 1 then\n                exports.ox_inventory:notify({text = 'You lost all of your burgers!'})\n            end\n        end\n    }\n}\n")))),(0,i.kt)("h2",{id:"making-the-item-usable"},"Making the item usable"),(0,i.kt)("p",null,"If you are using ESX you can continue using ",(0,i.kt)("inlineCode",{parentName:"p"},"ESX.RegisterUsableItem")," if desired.",(0,i.kt)("br",{parentName:"p"}),"\n","Using the built-in system is more secure and provides simple progressbar support.  "),(0,i.kt)("p",null,"An item will be usable when client variables are added to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/data/items.lua"},"data/items.lua"),", or has a registered item callback. Item callbacks can be added by defining an export (recommended), or by adding it to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/modules/items/client.lua#L33"},"items/client.lua"),". "),(0,i.kt)("p",null,"When defining ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/data/items.lua"},"item data"),", adding client.export will trigger an event on item use.",(0,i.kt)("br",{parentName:"p"}),"\n","The correct formatting is ",(0,i.kt)("inlineCode",{parentName:"p"},"export = resourceName.exportName"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"exports('bandage', function(data, slot)\n    local playerPed = PlayerPedId()\n    local maxHealth = GetEntityMaxHealth(playerPed)\n    local health = GetEntityHealth(playerPed)\n\n    -- Does the ped need to heal?\n    if health < maxHealth then\n        -- Use the bandage\n        exports.ox_inventory:useItem(data, function(data)\n            -- The item has been used, so trigger the effects\n            if data then\n                SetEntityHealth(playerPed, math.min(maxHealth, math.floor(health + maxHealth / 16)))\n                exports.ox_inventory:notify({text = 'You feel better already'})\n            end\n        end)\n    else\n        -- Don't use the item\n        exports.ox_inventory:notify({type = 'error', text = 'You don\\'t need a bandage right now'})\n    end\nend)\n")),(0,i.kt)("h2",{id:"item-events"},"Item events"),(0,i.kt)("p",null,"Similarly to the client, a callback function can be defined on the server to handle several events (usingItem, usedItem, buyItem).",(0,i.kt)("br",{parentName:"p"}),"\n","This can either be an export (recommended), or added to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/modules/items/server.lua#L287"},"items/server.lua"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"exports('bandage', function(event, item, inventory, slot, data)\n    if event == 'usingItem' then\n        local playerPed = GetPlayerPed(inventory.source)\n        local maxHealth = GetEntityMaxHealth(playerPed)\n        local health = GetEntityHealth(playerPed)\n\n        if health >= maxHealth then\n            TriggerClientEvent('ox_inventory:notify', inventory.source, {type = 'error', text = 'You don\\'t need a bandage right now'})\n\n            -- Returning 'false' will prevent the item from being used\n            return false\n        end\n\n        return\n    elseif event == 'usedItem' then\n        return TriggerClientEvent('ox_inventory:notify', inventory.source, {text = 'You feel better already'})\n\n    elseif event == 'buying' then\n        return TriggerClientEvent('ox_inventory:notify', inventory.source, {type = 'success', text = 'You bought a bandage'})\n    end\nend)\n")),(0,i.kt)("h2",{id:"creating-container-items"},"Creating container items"),(0,i.kt)("p",null,"Like with other items the item must first be registered.  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"['paperbag'] = {\n    label = 'Paper Bag',\n    weight = 1,\n    stack = false,\n    close = false,\n    consume = 0\n},\n")),(0,i.kt)("p",null,"When registered you can define the item as a container under the ",(0,i.kt)("inlineCode",{parentName:"p"},"Items.containers")," table in ",(0,i.kt)("inlineCode",{parentName:"p"},"/modules/items/sever.lua"),(0,i.kt)("br",{parentName:"p"}),"\n","The key for the container is the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," you gave it when registering the item.",(0,i.kt)("br",{parentName:"p"}),"\n","You can also define the number of slots, the maximum weight, blacklist and whitelist items."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"['name'] = {\n    -- size: {slots, maxWeight}\n        -- slots: number\n        -- maxWeight: number\n    -- blacklist: table (optional)\n        -- ['itemName'] = true\n    -- whitelist: table (optional)\n        -- ['itemName'] = true\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"['paperbag'] = {\n    size = {5, 1000},\n    blacklist = {\n        ['testburger'] = true -- No burgers!\n    }\n},\n")))}g.isMDXComponent=!0}}]);