"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41380],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,g=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return a?n.createElement(g,i(i({ref:t},s),{},{components:a})):n.createElement(g,i({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7769:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>m,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(68017),a(39786),a(81669),a(99088);const o={title:"React memo guide with examples",description:"Improve the app performance with React.memo()",slug:"react-memo-guide",authors:"abdullah_numan",tags:["react","memoization","react-memo","performance"],image:"img/blog/2022-09-13-react-memo/social.png",hide_table_of_contents:!1},i=void 0,m={permalink:"/blog/react-memo-guide",source:"@site/blog/2022-09-13-react-memo.md",title:"React memo guide with examples",description:"Improve the app performance with React.memo()",date:"2022-09-13T00:00:00.000Z",formattedDate:"September 13, 2022",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"memoization",permalink:"/blog/tags/memoization"},{label:"react-memo",permalink:"/blog/tags/react-memo"},{label:"performance",permalink:"/blog/tags/performance"}],readingTime:10.815,hasTruncateMarker:!0,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"React memo guide with examples",description:"Improve the app performance with React.memo()",slug:"react-memo-guide",authors:"abdullah_numan",tags:["react","memoization","react-memo","performance"],image:"img/blog/2022-09-13-react-memo/social.png",hide_table_of_contents:!1},nextItem:{title:"A Guide for Next.js with TypeScript",permalink:"/blog/next-js-with-typescript"},relatedPosts:[{title:"Simple Web Application Example with Refine",permalink:"/blog/simple-web-application-with-refine",formattedDate:"October 4, 2021",authors:[{name:"Ayd\u0131n Akyol",title:"Software Developer",url:"https://github.com/biskuvit",imageURL:"https://github.com/biskuvit.png",key:"aydin"}],readingTime:9.89,date:"2021-10-04T00:00:00.000Z"},{title:"Creating a React search bar and content filtering components",permalink:"/blog/react-search-bar-and-filtering",formattedDate:"August 26, 2022",authors:[{name:"Madars Bi\u0161s",title:"Software Developer",url:"https://github.com/madzadev",imageURL:"https://github.com/madzadev.png",key:"madar_biss"}],readingTime:14.765,date:"2022-08-26T00:00:00.000Z"},{title:"Introduction to Next.js Link component with examples",permalink:"/blog/next-js-link-component",formattedDate:"September 4, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],readingTime:9.48,date:"2022-09-04T00:00:00.000Z"}],authorPosts:[{title:"Javascript Currying - Variadic Currying",permalink:"/blog/javascript-variadic-currying",formattedDate:"August 28, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.82,date:"2022-08-28T00:00:00.000Z"}]},l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2}],s={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This is the first part of a series on the use of memoization in React. In this series, we'll cover memoizing a React component with ",(0,r.kt)("inlineCode",{parentName:"p"},"React.memo()")," as well as caching functions and values with React's memoization hooks."),(0,r.kt)("p",null,"We will begin with a progressive example that involves memoizing a functional component, which will be gradually extended to include use cases for the hooks: ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useMemo()"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback()")," is leveraged for memoizing a callback function, whereas ",(0,r.kt)("inlineCode",{parentName:"p"},"useMemo()")," is used to cache a computed value from an expensive function, for example, a sorting function that processes large amount of data."),(0,r.kt)("p",null,"In this post, we'll demonstrate the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"React.memo()"),", which is a Higher Order Function, or HOC that adds caching logic to the passed in component. In the upcoming articles, we'll discuss about how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useMemo()"),"."))}p.isMDXComponent=!0},68017:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/memo1-1e1c9f845d25a6bb806a09f470c4aac4.png"},39786:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/memo2-dd4d0322e4d1fbf11b423a5df7b93265.png"},81669:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/memo3-123bed76aff20ef1c8aed5a8824ce85c.png"},99088:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/memo4-8fd5258bacebb013c7d3b384c5a15454.png"}}]);