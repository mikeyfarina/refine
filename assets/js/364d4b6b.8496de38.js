"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56164],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47219:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>s});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={id:"useApiUrl",title:"useApiUrl",source:"packages/core/src/hooks/data/useApiUrl.ts"},c=void 0,p={unversionedId:"api-reference/core/hooks/data/useApiUrl",id:"version-3.xx.xx/api-reference/core/hooks/data/useApiUrl",title:"useApiUrl",description:"useApiUrl is a React hook that returns the API URL.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useApiUrl.md",sourceDirName:"api-reference/core/hooks/data",slug:"/api-reference/core/hooks/data/useApiUrl",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useApiUrl",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useApiUrl.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1690553710,formattedLastUpdatedAt:"Jul 28, 2023",frontMatter:{id:"useApiUrl",title:"useApiUrl",source:"packages/core/src/hooks/data/useApiUrl.ts"},sidebar:"someSidebar",previous:{title:"useBreadcrumb",permalink:"/docs/3.xx.xx/api-reference/core/hooks/useBreadcrumb"},next:{title:"useCreate",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useCreate/"}},u={},s=[{value:"Usage",id:"usage",level:2},{value:"API",id:"api",level:2},{value:"Return value",id:"return-value",level:3}],d={toc:s};function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useApiUrl")," is a React hook that returns the API URL."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It uses the ",(0,n.kt)("inlineCode",{parentName:"li"},"getApiUrl")," method to get the API URL from the ",(0,n.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"dataProvider")),".")),(0,n.kt)("p",null,"It is useful when you want to use the API URL in your custom hooks."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"useApiUrl")," hook does not expect any parameter. It will run the ",(0,n.kt)("inlineCode",{parentName:"p"},"getApiUrl")," method from the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider")," and return the result."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'//highlight-next-line\nimport { useCustom, useApiUrl } from "@pankod/refine-core";\n\ninterface PostUniqueCheckResponse {\n    isAvailable: boolean;\n}\n\n//highlight-next-line\nconst apiUrl = useApiUrl();\n\nconst { data, isLoading } = useCustom<PostUniqueCheckResponse>({\n    //highlight-next-line\n    url: `${apiUrl}/posts-unique-check`,\n    method: "get",\n    config: {\n        query: {\n            title: "Foo bar",\n        },\n    },\n});\n')),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("h3",{id:"return-value"},"Return value"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"API URL"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))))}f.isMDXComponent=!0}}]);