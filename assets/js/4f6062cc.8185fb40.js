"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4017],{83375:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(67294),o=r(86010);const a="browserWindow_NI4q",i="browserWindowHeader_nZEk",s="buttons_iIn6",d="browserWindowAddressBar_K9wW",l="dot_VUxd",c="browserWindowMenuIcon_TbEo",p="bar_Ghqi",u="browserWindowBody_x6m3";function m(e){let{children:t,minHeight:r,url:m="http://localhost:3000",right:g}=e;return n.createElement("div",{className:a,style:{minHeight:r}},n.createElement("div",{className:i},n.createElement("div",{className:s},n.createElement("span",{className:l,style:{background:"#f25f58"}}),n.createElement("span",{className:l,style:{background:"#fbbe3c"}}),n.createElement("span",{className:l,style:{background:"#58cb42"}})),n.createElement("div",{className:(0,o.Z)(d,"text--truncate")},n.createElement("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine-mini.svg"}),m),g||n.createElement("div",{className:c},n.createElement("div",null,n.createElement("span",{className:p}),n.createElement("span",{className:p}),n.createElement("span",{className:p})))),n.createElement("div",{className:u,style:{overflow:"hidden"}},t))}},9612:(e,t,r)=>{r.d(t,{Z:()=>j});var n=r(67294),o=r(90814),a=r(86010),i=r(52263),s=r(45772),d=r.n(s);const l="playgroundContainer_ppBt",c="playgroundHeader_DsVj",p="headerButton_QPem",u="playgroundPreview_jwe9",m="playgroundEditorWrapper_AfoV";var g=r(83375);const f=e=>{let{if:t,maxWait:r,children:o}=e;const[a,i]=n.useState(t),[s]=n.useState(r);n.useEffect((()=>{!a&&t&&i(!0)}),[t]),n.useEffect((()=>{if(s){const e=setTimeout((()=>{i(!0)}),s);return()=>clearTimeout(e)}}),[s]);const d=n.useMemo((()=>a&&"function"==typeof o?o():null),[a]);if(void 0!==o&&"function"!=typeof o)throw new Error("Conditional component requires a function as a child");return d};var k=r(57482),h=r(30816);r.g.Buffer=r.g.Buffer||h.lW;const v=e=>{let{query:t,code:r,css:o}=e;const{siteConfig:{customFields:a}}=(0,i.Z)(),[s,l]=n.useState(void 0),c=n.useCallback((async e=>{if("undefined"!=typeof window&&window.Worker){const r=new Worker(`${location.protocol}//${location.host}/workers/lz-worker.js`);r.onmessage=function(e){let{data:n}=e;n.compressed&&l(`${a.LIVE_PREVIEW_URL}?code=${n.compressed}${o?`&css=${d().encode(o)}`:""}${t?`${t}`:""}`),r.terminate()},r.postMessage({code:e})}}),[t]);return n.useEffect((()=>{c(r)}),[r,c]),s?n.createElement("iframe",{loading:"lazy",src:s,width:"100%",height:"100%",style:{borderRadius:"3px",position:"absolute",left:0,top:0,width:"100%",height:"100%"}}):null},x=n.memo(v,((e,t)=>e.code===t.code&&e.query===t.query&&e.css===t.css));function y(e){let{hidden:t,code:r}=e;const[o,i]=n.useState(!t);return n.createElement(n.Fragment,null,n.createElement("div",{className:(0,a.Z)(c)},n.createElement("button",{className:(0,a.Z)(p),onClick:()=>i((e=>!e))},o?"Hide":"Show"," Code")),n.createElement("div",{className:(0,a.Z)(m,"playground-code",o&&"playground-code-visible"),style:{maxHeight:o?"4500px":"0px",padding:o?void 0:"0px",transition:"0.3s all ease-in-out",overflow:"hidden"}},n.createElement(j,{language:"tsx",style:{borderRadius:0}},r)))}const b=e=>{let{children:t,disableScroll:r,previewHeight:o,hideCode:s=!1,url:d="http://localhost:3000",previewOnly:c=!1,tailwind:p=!1}=e;const m=String(t),{shared:h,sharedCss:v}=(0,k.dD)(),{visible:b}=(e=>{const t="// visible-block-start";let r=e.indexOf(t);r=r>0?r+t.length:0;let n=e.indexOf("// visible-block-end");n=n>0?n:e.length;const o=e.slice(0,r),a=e.slice(r,n).trimEnd().trimStart(),i=e.slice(n);return{visible:a,join:e=>`${o}\n${e}\n${i}`}})(`\n    ${h??""}\n    ${m}\n    `.replace(/\n$/,"")),N=n.useRef(null),w=function(e,t){void 0===t&&(t="0px");const[r,o]=n.useState(!1);return n.useEffect((()=>{const r=null==e?void 0:e.current,n=new IntersectionObserver((e=>{let[t]=e;o(t.isIntersecting)}),{rootMargin:t});return r&&n.observe(r),()=>{r&&n.unobserve(r)}}),[]),r}(N),{siteConfig:{customFields:C}}=(0,i.Z)();return n.createElement("div",{className:l},n.createElement(n.Fragment,null,n.createElement(g.Z,{url:d},n.createElement("div",{className:(0,a.Z)(u,"live-editor-wrapper"),style:{maxHeight:o,minHeight:o,overflow:r?"hidden":void 0,position:"relative"},ref:N},n.createElement(f,{if:w,maxWait:3e3},(()=>n.createElement(x,{code:`\n${h??""}\n${m}\n                                        `,css:v,query:`${r?"&disableScroll=true":""}${p?"&tailwind=true":""}`}))))),!c&&n.createElement(y,{hidden:s,code:b})))},N=n.memo(b,((e,t)=>String(e.children)===String(t.children))),w=e=>{let{children:t}=e;const{setShared:r}=(0,k.dD)();return n.useEffect((()=>(r(String(t)),()=>{r(void 0)})),[t]),null},C=n.memo(w,((e,t)=>String(e.children)===String(t.children))),E=e=>{let{children:t}=e;const{setSharedCss:r}=(0,k.dD)();return n.useEffect((()=>(r(String(t)),()=>{r(void 0)})),[t]),null},P=n.memo(E,((e,t)=>String(e.children)===String(t.children)));function j(e){var t;return e.live&&e.live&&null!=(t=e.className)&&t.includes("language-css")?n.createElement(P,e):e.shared&&e.live?n.createElement(C,e):e.live?n.createElement(N,e):n.createElement(o.Z,e)}},84057:(e,t,r)=>{r.r(t),r.d(t,{Packages:()=>m,assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),a=r(65488),i=r(85162),s=r(9612);const d={id:"migration-guide",title:"Migration Guide"},l=void 0,c={unversionedId:"migration-guide",id:"version-2.xx.xx/migration-guide",title:"Migration Guide",description:"1.0.XX to 2.0.XX",source:"@site/versioned_docs/version-2.xx.xx/migration-guide.md",sourceDirName:".",slug:"/migration-guide",permalink:"/docs/2.xx.xx/migration-guide",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/migration-guide.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1666175240,formattedLastUpdatedAt:"Oct 19, 2022",frontMatter:{id:"migration-guide",title:"Migration Guide"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"JavaScript",permalink:"/docs/2.xx.xx/examples/javascript"},next:{title:"Testing",permalink:"/docs/2.xx.xx/testing"}},p={},u=[{value:"1.0.XX to 2.0.XX",id:"10xx-to-20xx",level:2},{value:"Motivation behind breaking changes",id:"motivation-behind-breaking-changes",level:3},{value:"<code>resources</code>",id:"resources",level:4},{value:"<code>routerProvider</code>",id:"routerprovider",level:4},{value:"Custom Pages",id:"custom-pages",level:4},{value:"\ud83e\ude84 Migrating your project automatically with refine-codemod \u2728 (recommended)",id:"-migrating-your-project-automatically-with-refine-codemod--recommended",level:2},{value:"Migrating your project manually",id:"migrating-your-project-manually",level:2},{value:"Updating the packages",id:"updating-the-packages",level:3},{value:"<code>&lt;Resource/&gt;</code> to <code>resources</code>",id:"resource-to-resources",level:3},{value:"<code>routerProvider</code>",id:"routerprovider-1",level:3},{value:"<code>Link</code> component",id:"link-component",level:3},{value:"Custom Pages",id:"custom-pages-1",level:3}],m=()=>{const e=["@pankod/refine","@pankod/refine-airtable","@pankod/refine-altogic","@pankod/refine-graphql","@pankod/refine-hasura","@pankod/refine-nestjsx-crud","@pankod/refine-nextjs-router","@pankod/refine-react-router","@pankod/refine-simple-rest","@pankod/refine-strapi","@pankod/refine-strapi-graphql","@pankod/refine-supabase"];return(0,o.kt)(a.Z,{defaultValue:"@pankod/refine",values:e.map((e=>({label:e,value:e}))),mdxType:"Tabs"},e.map((e=>(0,o.kt)(i.Z,{value:e,mdxType:"TabItem"},(0,o.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},`npm i ${e}@latest`)))))},g={toc:u,Packages:m};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"10xx-to-20xx"},"1.0.XX to 2.0.XX"),(0,o.kt)("h3",{id:"motivation-behind-breaking-changes"},"Motivation behind breaking changes"),(0,o.kt)("h4",{id:"resources"},(0,o.kt)("inlineCode",{parentName:"h4"},"resources")),(0,o.kt)("p",null,"Making ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," property-based instead of component-based was necessary for Nextjs support. A property is also more flexible, dynamic and easier to configure compared to a component."),(0,o.kt)("h4",{id:"routerprovider"},(0,o.kt)("inlineCode",{parentName:"h4"},"routerProvider")),(0,o.kt)("p",null,"Router layer is abstracted from the core for mainly Nextjs support. This also creates the opportunity for any other router solution to be used."),(0,o.kt)("h4",{id:"custom-pages"},"Custom Pages"),(0,o.kt)("p",null,"This is also related to abstracting away the router layer from core. Differences between (currently two) router provider are so big that adding a layer to cover both cases (possibly more in the future) is much harder to implement and maintain compared to letting everyone handle it with their own conventions. This also has the huge benefit of allowing maximum configurability for every respective provider."),(0,o.kt)("h2",{id:"-migrating-your-project-automatically-with-refine-codemod--recommended"},"\ud83e\ude84 Migrating your project automatically with refine-codemod \u2728 (recommended)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/codemod"},(0,o.kt)("inlineCode",{parentName:"a"},"@pankod/refine-codemod"))," package handles the breaking changes for your project automatically, without any manual steps. It migrates your project from ",(0,o.kt)("inlineCode",{parentName:"p"},"1.x.x")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"2.x.x"),"."),(0,o.kt)("p",null,"Just ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," into root folder of your project (where ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," is contained) and run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx @pankod/refine-codemod refine1-to-refine2\n")),(0,o.kt)("p",null,"And it's done. Now your project uses ",(0,o.kt)("inlineCode",{parentName:"p"},"refine@2.x.x"),"."),(0,o.kt)("h2",{id:"migrating-your-project-manually"},"Migrating your project manually"),(0,o.kt)("h3",{id:"updating-the-packages"},"Updating the packages"),(0,o.kt)("p",null,"Packages used by your app must be updated to ",(0,o.kt)("inlineCode",{parentName:"p"},"^2.xx.xx")),(0,o.kt)(m,{mdxType:"Packages"}),(0,o.kt)("h3",{id:"resource-to-resources"},(0,o.kt)("inlineCode",{parentName:"h3"},"<Resource/>")," to ",(0,o.kt)("inlineCode",{parentName:"h3"},"resources")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Resource/>")," is deprecated. Resources must be passed to ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/components/refine-config#resources"},(0,o.kt)("inlineCode",{parentName:"a"},"resources"))," prop instead."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine";\nimport dataProvider from "@pankod/refine-json-server";\nimport "@pankod/refine/dist/styles.min.css";\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            dataProvider={dataProvider(API_URL)}\n// highlight-start\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                    create: PostCreate,\n                    edit: PostEdit,\n                    show: PostShow,\n                },\n            ]}\n// highlight-end\n        />\n    );\n};\n\nexport default App;\n')),(0,o.kt)("h3",{id:"routerprovider-1"},(0,o.kt)("inlineCode",{parentName:"h3"},"routerProvider")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine/>"))," now requires a ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/providers/router-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"routerProvider")),". You can use packages ",(0,o.kt)("strong",{parentName:"p"},"@pankod/refine-react-router")," or ",(0,o.kt)("strong",{parentName:"p"},"@pankod/refine-nextjs-router")," provided by ",(0,o.kt)("strong",{parentName:"p"},"refine"),"."),(0,o.kt)(a.Z,{defaultValue:"react",values:[{label:"React Router",value:"react"},{label:"Next.js Router",value:"nextjs"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"react",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine";\nimport routerProvider from "@pankod/refine-react-router";\n\nconst App: React.FC = () => {\n    return <Refine routerProvider={routerProvider} />;\n};\n'))),(0,o.kt)(i.Z,{value:"nextjs",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine";\nimport routerProvider from "@pankod/refine-nextjs-router";\n\nconst App: React.FC = () => {\n    return <Refine routerProvider={routerProvider} />;\n};\n')))),(0,o.kt)("h3",{id:"link-component"},(0,o.kt)("inlineCode",{parentName:"h3"},"Link")," component"),(0,o.kt)("p",null,"If you imported ",(0,o.kt)("inlineCode",{parentName:"p"},"Link")," component from ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine"),", now you have to switch to ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-router")," package to get the ",(0,o.kt)("inlineCode",{parentName:"p"},"Link")," component. Like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// Old\n// import { ..., Link } from "@pankod/refine";\n\n// Now\nimport routerProvider from "@pankod/refine-react-router";\n\nconst Link = routerProvider.Link;\n')),(0,o.kt)("h3",{id:"custom-pages-1"},"Custom Pages"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"routes")," prop of ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," is deprecated. Custom routes must be handled by the router provider you choose. ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/guides-and-concepts/custom-pages"},"Refer to Custom Pages documentation for a detailed guide")))}f.isMDXComponent=!0}}]);