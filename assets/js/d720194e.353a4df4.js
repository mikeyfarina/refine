"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98716],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),f=i,m=p["".concat(u,".").concat(f)]||p[f]||c[f]||o;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var d=2;d<o;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},83474:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(87462),i=(r(67294),r(3905));const o={id:"useGetIdentity",title:"useGetIdentity",siderbar_label:"useGetIdentity",description:"useGetIdentity data hook from refine is a modified version of react-query's useQuery for retrieving user data"},a=void 0,s={unversionedId:"api-reference/core/hooks/auth/useGetIdentity",id:"version-3.xx.xx/api-reference/core/hooks/auth/useGetIdentity",title:"useGetIdentity",description:"useGetIdentity data hook from refine is a modified version of react-query's useQuery for retrieving user data",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useGetIdentity.md",sourceDirName:"api-reference/core/hooks/auth",slug:"/api-reference/core/hooks/auth/useGetIdentity",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useGetIdentity",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useGetIdentity.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1680071227,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{id:"useGetIdentity",title:"useGetIdentity",siderbar_label:"useGetIdentity",description:"useGetIdentity data hook from refine is a modified version of react-query's useQuery for retrieving user data"},sidebar:"someSidebar",previous:{title:"useCheckError",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useCheckError"},next:{title:"useLogin",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useLogin"}},u={},d=[{value:"Usage",id:"usage",level:2}],l={toc:d};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useGetIdentity")," calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"getUserIdentity")," method from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},(0,i.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,i.kt)("p",null,"It returns the result of ",(0,i.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"useQuery"),"  which includes many properties, some of which being ",(0,i.kt)("inlineCode",{parentName:"p"},"isSuccess")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"isError"),". Data that is resolved from the ",(0,i.kt)("inlineCode",{parentName:"p"},"getUserIdentity")," will be returned as the ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useGetIdentity")," can be useful when you want to get the user information anywhere in your code."),(0,i.kt)("p",null,"Let's say that you want to show the user's name."),(0,i.kt)("p",null,"We have a logic in ",(0,i.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},(0,i.kt)("inlineCode",{parentName:"a"},"authProvider")),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"getUserIdentity")," method like below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'const authProvider: AuthProvider = {\n  ...\n    // highlight-start\n    getUserIdentity: () =>\n            Promise.resolve({\n                id: 1,\n                fullName: "Jane Doe",\n            }),\n  // highlight-end\n  ...\n};\n')),(0,i.kt)("br",null),(0,i.kt)("p",null,"You can access identity data like below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\nimport { useGetIdentity } from "@pankod/refine-core";\n\nexport const User: React.FC = () => {\n    // highlight-next-line\n    const { data: identity } = useGetIdentity<{ id: number; fullName: string}>();\n\n    return <span>{identity?.fullName}</span>\n}\n')),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This hook can only be used if the ",(0,i.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.")))}c.isMDXComponent=!0}}]);