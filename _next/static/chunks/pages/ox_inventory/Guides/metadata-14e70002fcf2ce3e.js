(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6072],{5421:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ox_inventory/Guides/metadata",function(){return r(6856)}])},6856:function(e,s,r){"use strict";r.r(s);var l=r(1527),n=r(6510),i=r(6736);function o(e){let s=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",span:"span",ul:"ul",li:"li",a:"a",em:"em"},(0,i.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{children:"Metadata"}),"\n",(0,l.jsx)(s.p,{children:"Item metadata is a very powerful tool that can be used to create multiple different items out of a single item."}),"\n",(0,l.jsxs)(s.p,{children:["In this guide we'll use pokemon cards as an example, but you can find an already integrated example in the inventory\nwith the ",(0,l.jsx)(s.code,{children:"garbage"})," item."]}),"\n",(0,l.jsx)(s.h2,{id:"creating-the-base-item",children:"Creating the base item"}),"\n",(0,l.jsx)(s.p,{children:"First of all we need to create a base item that we'll use to apply metadata to."}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",filename:"/data/items.lua",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"["}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'pokemon_card'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    label "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Pokemon card'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    weight "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"10"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    consume "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    server "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        export "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'pokemon.pokemon_card'"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,l.jsx)(s.p,{children:"In this case we define the label and the weight as well since we are going to have all the cards weigh the same, but if you\ndo not want them all to weigh the same you can leave it out and apply weight through metadata."}),"\n",(0,l.jsxs)(s.p,{children:["We'll also make the item usable by calling the ",(0,l.jsx)(s.code,{children:"pokemon_card"})," export in the ",(0,l.jsx)(s.code,{children:"pokemon"})," resource."]}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",filename:"pokemon/server.lua",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"exports"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'pokemon_card'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"event"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"item"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"inventory"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"slot"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"data"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" event "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'usingItem' "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"then"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" itemSlot "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" exports.ox_inventory:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetSlot"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(inventory.id, slot)"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(json."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"encode"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(itemSlot.metadata, {indent"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}))"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"special-metadata-properties",children:"Special metadata properties"}),"\n",(0,l.jsx)(s.p,{children:"You can define any metadata property with any value you want it to have, but there are a couple metadata properties that\nhave special use cases."}),"\n",(0,l.jsx)(s.p,{children:"These properties are:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["label: ",(0,l.jsx)(s.code,{children:"string"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Display name of the item"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["weight: ",(0,l.jsx)(s.code,{children:"number"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Amount the item will weigh"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["description: ",(0,l.jsx)(s.code,{children:"string"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Description of the item that will be displayed in the tooltip"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["image: ",(0,l.jsx)(s.code,{children:"string"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Image inside the image path that the item will use"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["imageurl: ",(0,l.jsx)(s.code,{children:"string"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Url to the image that the item will use"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["type: ",(0,l.jsx)(s.code,{children:"any"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Item type that is displayed in top right of the tooltip"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["We'll use these properties to create our pokemon cards out of the ",(0,l.jsx)(s.code,{children:"pokemon_card"})," item that we created earlier."]}),"\n",(0,l.jsx)(s.h2,{id:"creating-metadata-items",children:"Creating metadata items"}),"\n",(0,l.jsxs)(s.p,{children:["We can easily create metadata items by defining a hook using ",(0,l.jsx)(s.a,{href:"../Functions/Server/Hooks#creatitem",children:"createItem"})," and assign\nthe metadata we want by adding a ",(0,l.jsx)(s.code,{children:"type"})," to the item in the shop inventory."]}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",filename:"/data/shops.lua",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"inventory "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    {name "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'pokemon_card'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", price "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"300"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", metadata "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        label "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Charizard'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        description "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'It is said that Charizard’s fire burns hotter if it has experienced harsh battles.'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        image "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'panties'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        type "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Fire'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        hp "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"78"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        attack "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"84"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        defense "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"78"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }}"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",filename:"pokemon/server.lua",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" pokemonMetadata "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    charizard "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        label "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Charizard'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        description "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'It is said that Charizard’s fire burns hotter if it has experienced harsh battles.'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        image "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'panties'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        type "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Fire'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        hp "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"78"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        attack "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"84"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        defense "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"78"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" hookId "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" exports.ox_inventory:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"registerHook"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'createItem'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"payload"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" pokemon "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" pokemonMetadata[payload.metadata.type]"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"not"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" pokemon "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"then"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" pokemon"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    itemFilter "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        pokemon_card "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})}),"\n",(0,l.jsx)(s.p,{children:"As seen above when our item is usable, the metadata properties are all there and accessible through the slot."}),"\n",(0,l.jsx)(s.h2,{id:"displaying-custom-metadata-properties",children:"Displaying custom metadata properties"}),"\n",(0,l.jsxs)(s.p,{children:["We can display our custom metadata we set on our charizard card by either using string concatenation and adding them to\nthe description or by using the ",(0,l.jsx)(s.a,{href:"../Functions/Client#displaymetadata",children:"displayMetadata"})," ",(0,l.jsx)(s.em,{children:"client"})," function."]}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"exports.ox_inventory:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"displayMetadata"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    hp "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'HP'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    attack "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ATK'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    defense "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'DEF'"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})})]})}r(5941),s.default=(0,n.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(o,{...e})}):o(e)},pageOpts:{filePath:"pages/ox_inventory/Guides/metadata.mdx",route:"/ox_inventory/Guides/metadata",frontMatter:{title:"Metadata"},headings:[{depth:1,value:"Metadata",id:"metadata"},{depth:2,value:"Creating the base item",id:"creating-the-base-item"},{depth:2,value:"Special metadata properties",id:"special-metadata-properties"},{depth:2,value:"Creating metadata items",id:"creating-metadata-items"},{depth:2,value:"Displaying custom metadata properties",id:"displaying-custom-metadata-properties"}],title:"Metadata"},pageNextRoute:"/ox_inventory/Guides/metadata"})}},function(e){e.O(0,[6510,9774,2888,179],function(){return e(e.s=5421)}),_N_E=e.O()}]);