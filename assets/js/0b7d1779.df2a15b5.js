"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86151],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>h});var r=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(i),h=a,g=u["".concat(c,".").concat(h)]||u[h]||s[h]||n;return i?r.createElement(g,o(o({ref:t},m),{},{components:i})):r.createElement(g,o({ref:t},m))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,o=new Array(n);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<n;p++)o[p]=i[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},63038:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=i(87462),a=(i(67294),i(3905));const n={title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",slug:"how-to-import-csv",authors:"melih",tags:["JavaScript","csv","import","React"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/how-to-import-csv",source:"@site/blog/2022-01-18-csv-import.md",title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",date:"2022-01-18T00:00:00.000Z",formattedDate:"January 18, 2022",tags:[{label:"JavaScript",permalink:"/blog/tags/java-script"},{label:"csv",permalink:"/blog/tags/csv"},{label:"import",permalink:"/blog/tags/import"},{label:"React",permalink:"/blog/tags/react"}],readingTime:4.195,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",slug:"how-to-import-csv",authors:"melih",tags:["JavaScript","csv","import","React"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Implementing Dark Mode In Ant Design Using gulp",permalink:"/blog/how-to-add-darkmode-in-ant-design"},nextItem:{title:"How to Multipart File Upload Using FormData with HTML",permalink:"/blog/how-to-multipart-upload"},relatedPosts:[{title:"How to Multipart File Upload Using FormData with HTML",permalink:"/blog/how-to-multipart-upload",formattedDate:"December 27, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:2.73,date:"2021-12-27T00:00:00.000Z"},{title:"How to upload files from your HTML form using Base64 encoding",permalink:"/blog/how-to-base64-upload",formattedDate:"December 22, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:3.36,date:"2021-12-22T00:00:00.000Z"}],authorPosts:[{title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",permalink:"/blog/refine-invoice-generator",formattedDate:"March 1, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:13.745,date:"2022-03-01T00:00:00.000Z"},{title:"Create Full Featured Admin Panel with React and Ant Design",permalink:"/blog/refine-react-ant-design-admin-panel-framework",formattedDate:"February 21, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:12.68,date:"2022-02-21T00:00:00.000Z"},{title:"Next.js E-commerce App with Strapi and Chakra UI",permalink:"/blog/handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui",formattedDate:"February 14, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:10.915,date:"2022-02-14T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},p=[],m={toc:p};function s(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this guide, we will learn how to import any CSV file received from the user with React. Our application will consist of two parts. We will create a form for the user to select a file. Next, we will do some operations with JavaScript to be able to view this CSV file. Let's start with our example."))}s.isMDXComponent=!0}}]);