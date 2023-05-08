"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[47239],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,h=u["".concat(l,".").concat(f)]||u[f]||c[f]||o;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(87462),a=r(67294),o=r(86010),i=r(72389),s=r(67392),l=r(7094),p=r(12466);const d="tabList__CuJ",c="tabItem_LNqP";function u(e){var t;const{lazy:r,block:i,defaultValue:u,values:f,groupId:h,className:m}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=f??g.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),v=(0,s.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===u?u:u??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:y}=(0,l.U)(),[I,N]=(0,a.useState)(b),x=[],{blockElementScrollPositionUntilNextRender:P}=(0,p.o5)();if(null!=h){const e=w[h];null!=e&&e!==I&&k.some((t=>t.value===e))&&N(e)}const C=e=>{const t=e.currentTarget,r=x.indexOf(t),n=k[r].value;n!==I&&(P(t),N(n),null!=h&&y(h,String(n)))},T=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;r=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;r=x[t]??x[x.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},m)},k.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:e=>x.push(e),onKeyDown:T,onFocus:C,onClick:C},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":I===t})}),r??t)}))),r?(0,a.cloneElement)(g.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==I})))))}function f(e){const t=(0,i.Z)();return a.createElement(u,(0,n.Z)({key:String(t)},e))}},44433:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),o=r(65488),i=r(85162);const s={id:"generate-crud-pages",title:"4. Generate CRUD pages automatically with Inferencer",tutorial:{prev:"tutorial/getting-started/{preferredUI}/create-project",next:"tutorial/getting-started/store-your-repository"}},l=void 0,p={unversionedId:"tutorial/getting-started/headless/generate-crud-pages",id:"version-3.xx.xx/tutorial/getting-started/headless/generate-crud-pages",title:"4. Generate CRUD pages automatically with Inferencer",description:"Inferencer",source:"@site/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/headless/3-generate-crud-pages.md",sourceDirName:"tutorial/1-getting-started/headless",slug:"/tutorial/getting-started/headless/generate-crud-pages",permalink:"/docs/3.xx.xx/tutorial/getting-started/headless/generate-crud-pages",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/headless/3-generate-crud-pages.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1683544345,formattedLastUpdatedAt:"May 8, 2023",sidebarPosition:3,frontMatter:{id:"generate-crud-pages",title:"4. Generate CRUD pages automatically with Inferencer",tutorial:{prev:"tutorial/getting-started/{preferredUI}/create-project",next:"tutorial/getting-started/store-your-repository"}}},d={},c=[{value:"Inferencer",id:"inferencer",level:2},{value:"Why use Inferencer?",id:"why-use-inferencer",level:4},{value:"Learn Inferencer",id:"learn-inferencer",level:4},{value:"How to use Inferencer",id:"how-to-use-inferencer",level:2},{value:"Preview the auto-generated pages",id:"preview-the-auto-generated-pages",level:2},{value:"List Page",id:"list-page",level:3},{value:"Create Page",id:"create-page",level:3},{value:"Edit Page",id:"edit-page",level:3},{value:"Show Page",id:"show-page",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},f=u("Checklist"),h=u("ChecklistItem"),m={toc:c};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"inferencer"},"Inferencer"),(0,a.kt)("p",null,"Inferencer is a powerful tool in the ",(0,a.kt)("strong",{parentName:"p"},"refine")," ecosystem that helps developers quickly generate CRUD (create, read, update, delete) pages for their data model. It analyzes your data model based on the resource scheme and automatically creates the pages with required forms and tables for CRUD operations."),(0,a.kt)("h4",{id:"why-use-inferencer"},"Why use Inferencer?"),(0,a.kt)("p",null,"There are several benefits:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The goal of Inferencer is to reduce the amount of time spent on creating views for resources by generating the code automatically. This can save developers a significant amount of time and effort, especially on large projects with many resources.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Inferencer generates code that is easy to customize. Instead of starting from scratch, you can use the auto-generated code as a starting point and make changes to fit your specific needs. This allows you to quickly iterate and get your project up and running faster.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"By using Inferencer, you can avoid common mistakes that can arise when building CRUD pages manually. This can help you avoid bugs and other issues that can arise during development."))),(0,a.kt)("p",null,"Overall, using Inferencer can greatly speed up development time and reduce the amount of code that needs to be written manually. It helps ensure that your CRUD pages are consistent and adhere to best practices, freeing you up to focus on more complex tasks."),(0,a.kt)("h4",{id:"learn-inferencer"},"Learn Inferencer"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Learn about ",(0,a.kt)("a",{parentName:"li",href:"/docs/packages/documentation/inferencer"},"how Inferencer works"),"."),(0,a.kt)("li",{parentName:"ul"},"Learn about ",(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/components/inferencer/"},"how to use headless Inferencer"),".")),(0,a.kt)("h2",{id:"how-to-use-inferencer"},"How to use Inferencer"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer")," package provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"<HeadlessInferencer/>")," component, which can be imported from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/headless"),". It used to generate CRUD pages based on your API response."),(0,a.kt)("p",null,"Before we start using Inferencer, we need to add ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-hook-form")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-table")," packages to our project. Since these packages are used by Inferencer to generate forms and tables, they need to be installed in our project."),(0,a.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @pankod/refine-react-table @pankod/refine-react-hook-form\n"))),(0,a.kt)(i.Z,{value:"pnpm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm i @pankod/refine-react-table @pankod/refine-react-hook-form\n"))),(0,a.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pankod/refine-react-table @pankod/refine-react-hook-form\n")))),(0,a.kt)("p",null,"Then, we need to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"<HeadlessInferencer/>")," component is used by passing to appropriate values in the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component in ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx")," as shown below:"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-resources/index"},"Unit 4"),", the resources concept will be explained in detail. For now, you can assume that the resource is a collection of data on your API used in the app.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n//highlight-next-line\nimport { HeadlessInferencer } from "@pankod/refine-inferencer/headless";\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            //highlight-start\n            resources={[\n                {\n                    name: "blog_posts",\n                    list: HeadlessInferencer,\n                    show: HeadlessInferencer,\n                    create: HeadlessInferencer,\n                    edit: HeadlessInferencer,\n                },\n            ]}\n            //highlight-end\n        />\n    );\n};\nexport default App;\n')),(0,a.kt)("p",null,"At this point, ",(0,a.kt)("strong",{parentName:"p"},"refine")," will automatically generate the CRUD pages for the ",(0,a.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource based on the API response."),(0,a.kt)("h2",{id:"preview-the-auto-generated-pages"},"Preview the auto-generated pages"),(0,a.kt)("p",null,"So far we have added complete CRUD pages by utilizing Inferencer feature to the project. Let's take a look at the auto-generated CRUD pages that Inferencer handles for us."),(0,a.kt)("p",null,"Before we start, let's understand the API that we will be using in this tutorial. We will be using the ",(0,a.kt)("a",{parentName:"p",href:"https://api.fake-rest.refine.dev"},"https://api.fake-rest.refine.dev")," API. This API is created by the ",(0,a.kt)("strong",{parentName:"p"},"refine")," team and is used for demo purposes. It is a simple REST API that contains some resources like ",(0,a.kt)("inlineCode",{parentName:"p"},"blog_posts"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"categories"),", etc."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-dataprovider/index"},"Unit 3"),", it will be explained in detail how ",(0,a.kt)("strong",{parentName:"p"},"refine")," apps communicate with the API via the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider"),".")),(0,a.kt)("p",null,'You can view the code generated by Inferencer by clicking the "Show Code" button in the right corner of the live preview below.'),(0,a.kt)("h3",{id:"list-page"},"List Page"),(0,a.kt)("p",null,"To preview the list page, go back to your browser and open the ",(0,a.kt)("a",{href:"localhost:3000",rel:"noopener noreferrer nofollow"},"localhost:3000")," address."),(0,a.kt)("p",null,"You should see the list page for the ",(0,a.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource that was generated by Inferencer like below:"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"When you navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:3000"),", ",(0,a.kt)("strong",{parentName:"p"},"refine")," will redirect you to the initial resource's list page registered to ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component like ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:3000/blog-posts"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts"},'setInitialRoutes(["/blog-posts"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { HeadlessInferencer } from "@pankod/refine-inferencer/headless";\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "blog_posts",\n                    list: HeadlessInferencer,\n                    show: HeadlessInferencer,\n                    create: HeadlessInferencer,\n                    edit: HeadlessInferencer,\n                },\n            ]}\n        />\n    );\n};\nrender(<App />);\n')),(0,a.kt)("h3",{id:"create-page"},"Create Page"),(0,a.kt)("p",null,"To preview the create page, go back to your browser and open the ",(0,a.kt)("a",{href:"localhost:3000/blog-posts/create",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/create"),' address or click the "Create" button on the list page.'),(0,a.kt)("p",null,"You should see the create page for the ",(0,a.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource that was generated by Inferencer like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/create",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/create"},'setInitialRoutes(["/blog-posts/create"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { HeadlessInferencer } from "@pankod/refine-inferencer/headless";\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "blog_posts",\n                    list: HeadlessInferencer,\n                    show: HeadlessInferencer,\n                    create: HeadlessInferencer,\n                    edit: HeadlessInferencer,\n                },\n            ]}\n        />\n    );\n};\nrender(<App />);\n')),(0,a.kt)("h3",{id:"edit-page"},"Edit Page"),(0,a.kt)("p",null,"To preview the edit page, go back to your browser and open the ",(0,a.kt)("a",{href:"localhost:3000/blog-posts/edit/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/edit/123"),' address or click the "Edit" button on the record in the list page.'),(0,a.kt)("p",null,"You should see the edit page for the ",(0,a.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource with the id ",(0,a.kt)("inlineCode",{parentName:"p"},"123")," that was generated by Inferencer like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/edit/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/edit/123"},'setInitialRoutes(["/blog-posts/edit/123"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { HeadlessInferencer } from "@pankod/refine-inferencer/headless";\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "blog_posts",\n                    list: HeadlessInferencer,\n                    show: HeadlessInferencer,\n                    create: HeadlessInferencer,\n                    edit: HeadlessInferencer,\n                },\n            ]}\n        />\n    );\n};\nrender(<App />);\n')),(0,a.kt)("h3",{id:"show-page"},"Show Page"),(0,a.kt)("p",null,"To preview the show page, go back to your browser and open the ",(0,a.kt)("a",{href:"localhost:3000/blog-posts/show/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/show/123"),' address or click the "Show" button on the record in the list page.'),(0,a.kt)("p",null,"You should see the show page for the ",(0,a.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource with the id ",(0,a.kt)("inlineCode",{parentName:"p"},"123")," that was generated by Inferencer like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/show/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/show/123"},'setInitialRoutes(["/blog-posts/show/123"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport { HeadlessInferencer } from "@pankod/refine-inferencer/headless";\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "blog_posts",\n                    list: HeadlessInferencer,\n                    show: HeadlessInferencer,\n                    create: HeadlessInferencer,\n                    edit: HeadlessInferencer,\n                },\n            ]}\n        />\n    );\n};\nrender(<App />);\n')),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/adding-crud-pages/headless/index"},"Unit 5"),", you will learn how to create CRUD pages manually using the code generated by Inferencer as a reference."),(0,a.kt)(f,{mdxType:"Checklist"},(0,a.kt)(h,{id:"generated-headless-crud-pages",mdxType:"ChecklistItem"},"I understood what is Inferencer, how it works and how Inferencer make my work easier."),(0,a.kt)(h,{id:"generated-headless-crud-pages-2",mdxType:"ChecklistItem"},(0,a.kt)("p",null,"I inspected the auto-generated ",(0,a.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"edit"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"show")," pages."))))}g.isMDXComponent=!0}}]);