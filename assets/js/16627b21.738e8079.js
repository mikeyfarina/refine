"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58361],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"can-access",title:"<CanAccess>",siderbar_label:"<CanAccess>",source:"packages/core/src/components/canAccess/index.tsx"},i=void 0,p={unversionedId:"api-reference/core/components/accessControl/can-access",id:"api-reference/core/components/accessControl/can-access",title:"<CanAccess>",description:"` is the component form of useCan`.",source:"@site/docs/api-reference/core/components/accessControl/canAccess.md",sourceDirName:"api-reference/core/components/accessControl",slug:"/api-reference/core/components/accessControl/can-access",permalink:"/docs/api-reference/core/components/accessControl/can-access",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/components/accessControl/canAccess.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1688049291,formattedLastUpdatedAt:"Jun 29, 2023",frontMatter:{id:"can-access",title:"<CanAccess>",siderbar_label:"<CanAccess>",source:"packages/core/src/components/canAccess/index.tsx"},sidebar:"someSidebar",previous:{title:"<Authenticated>",permalink:"/docs/api-reference/core/components/auth/authenticated"},next:{title:"Interface References",permalink:"/docs/api-reference/core/interfaceReferences"}},l={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Usage with props",id:"usage-with-props",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>fallback</code>",id:"fallback",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=(f="PropsTable",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var f;const m={toc:u};function k(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<CanAccess>")," is the component form of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/accessControl/useCan/"},(0,r.kt)("inlineCode",{parentName:"a"},"useCan")),"."),(0,r.kt)("p",null,"It internally uses ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/accessControl/useCan/"},(0,r.kt)("inlineCode",{parentName:"a"},"useCan")),"'s return values to provide its functionality."),(0,r.kt)("p",null,"Passes the given properties to the ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," method from your access control provider. After, if it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", it renders the children, otherwise, if it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", it renders ",(0,r.kt)("a",{parentName:"p",href:"#fallback"},(0,r.kt)("inlineCode",{parentName:"a"},"fallback"))," prop if provided. Otherwise, it renders ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/accessControl-provider/"},"Access Control Provider ","\u2192"))),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,"By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"CanAccess")," component will infer the current ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," based on your route automatically. ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," will also be inferred if the current route includes one."),(0,r.kt)("p",null,"So if you are at the ",(0,r.kt)("inlineCode",{parentName:"p"},"/posts")," route, ",(0,r.kt)("inlineCode",{parentName:"p"},"CanAccess")," will check authorization for the ",(0,r.kt)("inlineCode",{parentName:"p"},"posts")," resource and the ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," action."),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"/posts/show/:id")," route, the action will be ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CanAccess } from "@refinedev/core";\n\nconst MyComponent = () => (\n    <CanAccess fallback={<CustomFallback />}>\n        <YourComponent />\n    </CanAccess>\n);\n')),(0,r.kt)("h3",{id:"usage-with-props"},"Usage with props"),(0,r.kt)("p",null,"You may have a case like in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/posts/show/:id")," page, where, inferred resource is ",(0,r.kt)("inlineCode",{parentName:"p"},"posts")," and action is ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),", but you want to authorize a different resource eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"category"),"."),(0,r.kt)("p",null,"In this case, you can explicitly pass props to the ",(0,r.kt)("inlineCode",{parentName:"p"},"CanAccess")," component for authorizing a different resource."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CanAccess } from "@refinedev/core";\n\nexport const MyComponent = () => {\n    return (\n        <Buttons>\n            <CreateButton>Create</CreateButton>\n            <CanAccess resource="posts" action="delete">\n                <DeleteButton>Delete</DeleteButton>\n            </CanAccess>\n        </Buttons>\n    );\n};\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("p",null,"It also accepts all the properties of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/accessControl/useCan/#properties"},(0,r.kt)("inlineCode",{parentName:"a"},"useCan")),"."),(0,r.kt)("h3",{id:"fallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"fallback")),(0,r.kt)("p",null,"Component to render if ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/accessControl/useCan/"},(0,r.kt)("inlineCode",{parentName:"a"},"useCan"))," returns false. If ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),", it renders ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<CanAccess fallback={<div>You cannot access this section</div>}>\n    <YourComponent />\n</CanAccess>\n")),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(d,{module:"@refinedev/core/CanAccess",mdxType:"PropsTable"}))}k.isMDXComponent=!0}}]);