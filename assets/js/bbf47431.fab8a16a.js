"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12096],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>f});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),p=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},l=function(e){var r=p(e.components);return t.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return n?t.createElement(m,c(c({ref:r},l),{},{components:n})):t.createElement(m,c({ref:r},l))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var p=2;p<o;p++)c[p]=n[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87740:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var t=n(87462),a=(n(67294),n(3905));const o={id:"can-access",title:"<CanAccess>",siderbar_label:"<CanAccess>",source:"packages/core/src/components/canAccess/index.tsx"},c=void 0,s={unversionedId:"api-reference/core/components/accessControl/can-access",id:"version-3.xx.xx/api-reference/core/components/accessControl/can-access",title:"<CanAccess>",description:"` is the component form of useCan`.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/components/accessControl/canAccess.md",sourceDirName:"api-reference/core/components/accessControl",slug:"/api-reference/core/components/accessControl/can-access",permalink:"/docs/3.xx.xx/api-reference/core/components/accessControl/can-access",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/components/accessControl/canAccess.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1680071227,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{id:"can-access",title:"<CanAccess>",siderbar_label:"<CanAccess>",source:"packages/core/src/components/canAccess/index.tsx"},sidebar:"someSidebar",previous:{title:"<Authenticated>",permalink:"/docs/3.xx.xx/api-reference/core/components/auth/authenticated"},next:{title:"Interface References",permalink:"/docs/3.xx.xx/api-reference/core/interfaceReferences"}},i={},p=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>fallback</code>",id:"fallback",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],l=(d="PropsTable",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const u={toc:p};function f(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<CanAccess>")," is the component form of ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/accessControl/useCan/"},(0,a.kt)("inlineCode",{parentName:"a"},"useCan")),"."),(0,a.kt)("p",null,"It internally uses ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/accessControl/useCan/"},(0,a.kt)("inlineCode",{parentName:"a"},"useCan")),"'s return values to provide its functionality."),(0,a.kt)("p",null,"Passes the given properties to the ",(0,a.kt)("inlineCode",{parentName:"p"},"can")," method from your ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/accessControl-provider/"},"access control provider"),". After, if it returns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"true"),", it renders the children."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"false"),", it renders ",(0,a.kt)("a",{parentName:"li",href:"#fallback"},(0,a.kt)("inlineCode",{parentName:"a"},"fallback"))," prop if provided. Otherwise, it renders ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),".")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/accessControl-provider/"},"Refer to Access Control Provider for more information. ","\u2192")),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CanAccess } from "@pankod/refine-core";\n\nconst MyComponent = () => (\n    <CanAccess\n        resource="posts"\n        action="edit"\n        params={{ id: 1 }}\n        fallback={<CustomFallback />}\n    >\n        <YourComponent />\n    </CanAccess>\n);\n')),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("p",null,"It's also accepts all the properties of ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/accessControl/useCan/#properties"},(0,a.kt)("inlineCode",{parentName:"a"},"useCan")),"."),(0,a.kt)("h3",{id:"fallback"},(0,a.kt)("inlineCode",{parentName:"h3"},"fallback")),(0,a.kt)("p",null,"Component to render if ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/accessControl/useCan/"},(0,a.kt)("inlineCode",{parentName:"a"},"useCan"))," returns false. If ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),", it renders ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<CanAccess fallback={<div>You cannot access this section</div>}>\n    <YourComponent />\n</CanAccess>\n")),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)(l,{module:"@pankod/refine-core/CanAccess",mdxType:"PropsTable"}))}f.isMDXComponent=!0}}]);