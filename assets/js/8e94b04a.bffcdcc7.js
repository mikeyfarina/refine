"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91582],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(h,l(l({ref:t},u),{},{components:r})):a.createElement(h,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(87462),n=r(67294),o=r(86010),l=r(72389),i=r(67392),p=r(7094),s=r(12466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:r,block:l,defaultValue:d,values:m,groupId:h,className:v}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??f.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),g=(0,i.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:w}=(0,p.U)(),[N,x]=(0,n.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=h){const e=b[h];null!=e&&e!==N&&y.some((t=>t.value===e))&&x(e)}const j=e=>{const t=e.currentTarget,r=T.indexOf(t),a=y[r].value;a!==N&&(C(t),x(a),null!=h&&w(h,String(a)))},O=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;r=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;r=T[t]??T[T.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},v)},y.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:O,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":N===t})}),r??t)}))),r?(0,n.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},60067:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905)),o=r(65488),l=r(85162);const i={id:"create-project",title:"3. Create your refine project",tutorial:{prev:"tutorial/getting-started/{preferredUI}/prepare-env",next:"tutorial/getting-started/{preferredUI}/generate-crud-pages"}},p=void 0,s={unversionedId:"tutorial/getting-started/headless/create-project",id:"version-3.xx.xx/tutorial/getting-started/headless/create-project",title:"3. Create your refine project",description:"Launch the refine CLI setup",source:"@site/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/headless/2-create-project.md",sourceDirName:"tutorial/1-getting-started/headless",slug:"/tutorial/getting-started/headless/create-project",permalink:"/docs/3.xx.xx/tutorial/getting-started/headless/create-project",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/headless/2-create-project.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1683544345,formattedLastUpdatedAt:"May 8, 2023",sidebarPosition:2,frontMatter:{id:"create-project",title:"3. Create your refine project",tutorial:{prev:"tutorial/getting-started/{preferredUI}/prepare-env",next:"tutorial/getting-started/{preferredUI}/generate-crud-pages"}}},u={},c=[{value:"Launch the refine CLI setup",id:"launch-the-refine-cli-setup",level:2},{value:"Open your project in VS Code",id:"open-your-project-in-vs-code",level:3},{value:"Running the dev server",id:"running-the-dev-server",level:3},{value:"Viewing a preview of your app",id:"viewing-a-preview-of-your-app",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},m=d("Checklist"),h=d("ChecklistItem"),v={toc:c};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"launch-the-refine-cli-setup"},"Launch the refine CLI setup"),(0,n.kt)("p",null,"The easiest way to create a new project is to use the ",(0,n.kt)("strong",{parentName:"p"},"refine CLI"),". This tool will help you get started quickly by generating a new project with a basic configuration and a folder structure that follows best practices."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Launch your terminal and type the following command using your preferred package manager:"),(0,n.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm create refine-app@latest -- -o refine-headless tutorial\n"))),(0,n.kt)(l.Z,{value:"pnpm",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm create refine-app@latest -- -o refine-headless tutorial\n"))),(0,n.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create refine-app -- -o refine-headless tutorial\n")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Only support yarn@1 version."))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Confirm ",(0,n.kt)("inlineCode",{parentName:"p"},"y")," to installation of ",(0,n.kt)("inlineCode",{parentName:"p"},"create-refine-app"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"-o refine-headless")," flag in the command above tells the CLI to install the project with the ",(0,n.kt)("inlineCode",{parentName:"p"},"refine-headless")," preset. This preset selects some options for you in accordance with this tutorial."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"We use a preset here to sync the tutorial content with the code. Outside of the tutorial, you can skip this flag and select your own options."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The CLI will ask if you agree to share your selection anonymously with the ",(0,n.kt)("strong",{parentName:"p"},"refine")," team. You can choose whatever you prefer."))),(0,n.kt)("p",null,"Once the installation wizard is finished, you can close this terminal window and open VS Code to continue your journey."),(0,n.kt)("h3",{id:"open-your-project-in-vs-code"},"Open your project in VS Code"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open Visual Studio Code and select the directory that was generated during your setup process.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure the terminal is open and ready to run commands. You can open it by pressing ",(0,n.kt)("inlineCode",{parentName:"p"},"Ctrl + J"),"(Windows) or ",(0,n.kt)("inlineCode",{parentName:"p"},"Cmd \u2318 + J"),"(macOS)."))),(0,n.kt)("p",null,"For the rest of this tutorial, you can use the terminal within VS Code instead of your computer's terminal."),(0,n.kt)("h3",{id:"running-the-dev-server"},"Running the dev server"),(0,n.kt)("p",null,"To preview your project as a web page while you work on it, the project must be running in development (dev) mode."),(0,n.kt)("h4",null,"Start the dev server"),(0,n.kt)("p",null,"To start the dev server, run the following command in your terminal:"),(0,n.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n"))),(0,n.kt)(l.Z,{value:"pnpm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run dev\n"))),(0,n.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run dev\n")))),(0,n.kt)("p",null,"You should see confirmation in the terminal that the ",(0,n.kt)("strong",{parentName:"p"},"refine")," app is running in dev mode."),(0,n.kt)("h3",{id:"viewing-a-preview-of-your-app"},"Viewing a preview of your app"),(0,n.kt)("p",null,"Your project files contain all the code you need to run your website. To see a preview of your website in the browser:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on the ",(0,n.kt)("a",{href:"http://localhost:3000",rel:"noopener noreferrer nofollow"},"localhost:3000")," link in the terminal. This will open a new browser tab with your app running in dev mode.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You will be redirected to the welcome page as we have not added any pages yet."),(0,n.kt)("p",{parentName:"li"},"(",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/headless/generate-crud-pages"},"Next section")," will guide you through adding pages to your app.)"))),(0,n.kt)("p",null,"Here's what you should see:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=450px url=http://localhost:3000",live:!0,previewOnly:!0,previewHeight:"450px",url:"http://localhost:3000"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        />\n    );\n};\n\nrender(<App />);\n')),(0,n.kt)(m,{mdxType:"Checklist"},(0,n.kt)(h,{id:"getting-started-headless",mdxType:"ChecklistItem"},"I understood how to create a new project."),(0,n.kt)(h,{id:"getting-started-headless-2",mdxType:"ChecklistItem"},"I run the dev server and previewed my app.")))}f.isMDXComponent=!0}}]);