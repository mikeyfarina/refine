"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30665],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return t?n.createElement(m,p(p({ref:r},l),{},{components:t})):n.createElement(m,p({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},73350:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>u});t(67294);var n=t(3905);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i={id:"strapi-graphql",title:"Strapi GraphQL","example-tags":["data-provider","auth-provider"]},c=void 0,s={unversionedId:"examples/data-provider/strapi-graphql",id:"examples/data-provider/strapi-graphql",title:"Strapi GraphQL",description:"Strapi GraphQL is supported out-of-the-box by refine. Using your GraphQL data and creating custom queries is very easy using the refine Strapi-GraphQL provider. This example provides information on how to manage your Strapi-GraphQL data and how you can submit queries.",source:"@site/docs/examples/data-provider/strapi-graphql.md",sourceDirName:"examples/data-provider",slug:"/examples/data-provider/strapi-graphql",permalink:"/docs/examples/data-provider/strapi-graphql",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/data-provider/strapi-graphql.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1690553710,formattedLastUpdatedAt:"Jul 28, 2023",frontMatter:{id:"strapi-graphql",title:"Strapi GraphQL","example-tags":["data-provider","auth-provider"]},sidebar:"someSidebar",previous:{title:"Strapi",permalink:"/docs/examples/data-provider/strapi"},next:{title:"Strapi v4",permalink:"/docs/examples/data-provider/strapi-v4"}},l={},u=[],d=(f="CodeSandboxExample",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var f;const m={toc:u};function y(e){var{components:r}=e,t=p(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){a(e,r,t[r])}))}return e}({},m,t),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://strapi.io/"},"Strapi")," GraphQL is supported out-of-the-box by ",(0,n.kt)("strong",{parentName:"p"},"refine"),". Using your GraphQL data and creating custom queries is very easy using the ",(0,n.kt)("strong",{parentName:"p"},"refine")," Strapi-GraphQL provider. This example provides information on how to manage your Strapi-GraphQL data and how you can submit queries."),(0,n.kt)(d,{path:"data-provider-strapi-graphql",mdxType:"CodeSandboxExample"}))}y.isMDXComponent=!0}}]);