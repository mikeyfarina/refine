"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26339],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||n;return a?i.createElement(h,o(o({ref:t},c),{},{components:a})):i.createElement(h,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<n;s++)o[s]=a[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},40860:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var i=a(87462),r=(a(67294),a(3905));const n={title:"Simple Web Application Example with Refine",description:"Do you want to develop a web application quickly? You are at the right place!",slug:"simple-web-application-with-refine",authors:"aydin",tags:["refine","supabase","react","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/simple-web-application-with-refine",source:"@site/blog/2021-10-4-simple-web-application.md",title:"Simple Web Application Example with Refine",description:"Do you want to develop a web application quickly? You are at the right place!",date:"2021-10-04T00:00:00.000Z",formattedDate:"October 4, 2021",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"supabase",permalink:"/blog/tags/supabase"},{label:"react",permalink:"/blog/tags/react"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:9.445,hasTruncateMarker:!0,authors:[{name:"Ayd\u0131n Akyol",title:"Software Developer",url:"https://github.com/biskuvit",imageURL:"https://github.com/biskuvit.png",key:"aydin"}],frontMatter:{title:"Simple Web Application Example with Refine",description:"Do you want to develop a web application quickly? You are at the right place!",slug:"simple-web-application-with-refine",authors:"aydin",tags:["refine","supabase","react","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Let's Build an App to Manage Your Hackathons with Refine",permalink:"/blog/manage-hackathons-with-refine"},relatedPosts:[{title:"Building a React Admin Dashboard with refine",description:"We will be building a Complete React CRUD application using refine and Airtable, a famous backend service to illustrate how you can power your applications with refine.",permalink:"/blog/building-react-admin-dashboard",formattedDate:"April 6, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:37.895,date:"2023-04-06T00:00:00.000Z"},{title:"Creating responsive tooltips in React with react-tooltip",description:"We'll explore how to create a custom tooltip component in a React application, as well as integrating the react-tooltip library.",permalink:"/blog/react-tooltip",formattedDate:"May 23, 2023",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:13.47,date:"2023-05-23T00:00:00.000Z"},{title:"How to use Zustand",description:"We'll learn how to use Zustand in our React project.",permalink:"/blog/zustand-react-state",formattedDate:"May 18, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:15.66,date:"2023-05-18T00:00:00.000Z"}],authorPosts:[{title:"Top React JS Frameworks Every Developer Should Know",description:"We will compare the features of refine and react-admin",permalink:"/blog/best-react-frameworks",formattedDate:"February 21, 2022",authors:[{name:"Ayd\u0131n Akyol",title:"Software Developer",url:"https://github.com/biskuvit",imageURL:"https://github.com/biskuvit.png",key:"aydin"}],readingTime:4.13,date:"2022-02-21T00:00:00.000Z"},{title:"10 High-Quality Free Resources That Will Make Every Web Developer's Life Easier",description:"We will examine the resources that will make our job easier when making a website.",permalink:"/blog/10-high-quality-free-resources",formattedDate:"May 2, 2022",authors:[{name:"Ayd\u0131n Akyol",title:"Software Developer",url:"https://github.com/biskuvit",imageURL:"https://github.com/biskuvit.png",key:"aydin"}],readingTime:4,date:"2022-05-02T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},s=[],c={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This post was created using version 3.x.x of ",(0,r.kt)("strong",{parentName:"p"},"refine"),". Although we plan to update it with the latest version of ",(0,r.kt)("strong",{parentName:"p"},"refine")," as soon as possible, you can still benefit from the post in the meantime."),(0,r.kt)("p",{parentName:"admonition"},"You should know that ",(0,r.kt)("strong",{parentName:"p"},"refine")," version 4.x.x is backward compatible with version 3.x.x, so there is no need to worry. If you want to see the differences between the two versions, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/migration-guide/"},"migration guide"),"."),(0,r.kt)("p",{parentName:"admonition"},"Just be aware that the source code example in this post have been updated to version 4.x.x.")),(0,r.kt)("p",null,"Do you want to develop a web application quickly? You are at the right place! I will develop a simple movie web application with ",(0,r.kt)("strong",{parentName:"p"},"refine")," on the frontend and ",(0,r.kt)("strong",{parentName:"p"},"Supabase")," on the backend, you should continue reading. I will try to explain it step by step in a very simple way."))}u.isMDXComponent=!0}}]);