"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[48404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Implementing Dark Mode In Ant Design Using gulp",description:"In this article, we\u2019ll learn how to efficiently implement dark mode in a refine/Ant Design app, using gulp library and leveraging some React features like hooks",slug:"how-to-add-darkmode-in-ant-design",authors:"vmalep",tags:["refine","react","css","ant-design"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},i=void 0,s={permalink:"/blog/how-to-add-darkmode-in-ant-design",source:"@site/blog/2022-02-12-implement-darkmode.md",title:"Implementing Dark Mode In Ant Design Using gulp",description:"In this article, we\u2019ll learn how to efficiently implement dark mode in a refine/Ant Design app, using gulp library and leveraging some React features like hooks",date:"2022-02-12T00:00:00.000Z",formattedDate:"February 12, 2022",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"react",permalink:"/blog/tags/react"},{label:"css",permalink:"/blog/tags/css"},{label:"ant-design",permalink:"/blog/tags/ant-design"}],readingTime:5.045,hasTruncateMarker:!0,authors:[{name:"Pierre van Male",title:"Junior Fullstack Developer",url:"https://github.com/vmalep",imageURL:"https://github.com/vmalep.png",key:"vmalep"}],frontMatter:{title:"Implementing Dark Mode In Ant Design Using gulp",description:"In this article, we\u2019ll learn how to efficiently implement dark mode in a refine/Ant Design app, using gulp library and leveraging some React features like hooks",slug:"how-to-add-darkmode-in-ant-design",authors:"vmalep",tags:["refine","react","css","ant-design"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Next.js E-commerce App with Strapi and Chakra UI",permalink:"/blog/handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui"},nextItem:{title:"How to Import CSV File with React",permalink:"/blog/how-to-import-csv"},relatedPosts:[{title:"How to use the useParams hook in React Router",description:"We'll discover how to access the parameters of the current route with the useParams hook in React Router.",permalink:"/blog/react-router-useparams",formattedDate:"September 24, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:4.515,date:"2022-09-24T00:00:00.000Z"},{title:"How to use Material UI Card Component",description:"We'll discover the Material UI Card component with examples",permalink:"/blog/material-ui-card",formattedDate:"January 4, 2023",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:12.205,date:"2023-01-04T00:00:00.000Z"},{title:"refine vs RedwoodJS",description:"We will compare two open source React frameworks, that can be used to build CRUD applications",permalink:"/blog/refine-vs-redwood-js",formattedDate:"January 23, 2023",authors:[{name:"Madars Bi\u0161s",title:"Software Developer",url:"https://github.com/madzadev",imageURL:"https://github.com/madzadev.png",key:"madars_biss"}],readingTime:26.69,date:"2023-01-23T00:00:00.000Z"}],authorPosts:[]},l={authorsImageUrls:[void 0]},p=[],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This post was created using version 3.x.x of ",(0,r.kt)("strong",{parentName:"p"},"refine"),". Although we plan to update it with the latest version of ",(0,r.kt)("strong",{parentName:"p"},"refine")," as soon as possible, you can still benefit from the post in the meantime."),(0,r.kt)("p",{parentName:"admonition"},"You should know that ",(0,r.kt)("strong",{parentName:"p"},"refine")," version 4.x.x is backward compatible with version 3.x.x, so there is no need to worry. If you want to see the differences between the two versions, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/migration-guide/"},"migration guide"),".")),(0,r.kt)("p",null,"In this article, we will provide an example on how to implement darkmode with ",(0,r.kt)("strong",{parentName:"p"},"refine"),". In order to switch between light and dark mode, we need 2 different styles and the possibility to switch between one and the other without restarting the application. Since the Less stylesheets with React doesn't allow variables to be modified without compilation and therefore a restart of the application. To solve this, we are going to use ",(0,r.kt)("strong",{parentName:"p"},"gulp")," that will compile the Less files into swappable CSS, directly accessible to the running application."))}m.isMDXComponent=!0}}]);