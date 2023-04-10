"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[15741],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(87462),o=(n(67294),n(3905)),i=n(65488),r=n(85162);const l={title:"MUI Icons in React",description:"A complete guide on using Material UI(MUI Icons) in a React app",slug:"mui-icons-in-react",authors:"doro_onome",tags:["material-ui","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-24-mui-icons/mui-icons-social.png",hide_table_of_contents:!1},s=void 0,c={permalink:"/blog/mui-icons-in-react",source:"@site/blog/2022-08-24-mui-icons.md",title:"MUI Icons in React",description:"A complete guide on using Material UI(MUI Icons) in a React app",date:"2022-08-24T00:00:00.000Z",formattedDate:"August 24, 2022",tags:[{label:"material-ui",permalink:"/blog/tags/material-ui"},{label:"react",permalink:"/blog/tags/react"}],readingTime:9.9,hasTruncateMarker:!0,authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],frontMatter:{title:"MUI Icons in React",description:"A complete guide on using Material UI(MUI Icons) in a React app",slug:"mui-icons-in-react",authors:"doro_onome",tags:["material-ui","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-24-mui-icons/mui-icons-social.png",hide_table_of_contents:!1},prevItem:{title:"Creating a React search bar and content filtering components",permalink:"/blog/react-search-bar-and-filtering"},nextItem:{title:"Using Material UI DataGrid component with refine app",permalink:"/blog/mui-datagrid-refine"},relatedPosts:[{title:"Mocking API calls in React Tests with Nock",permalink:"/blog/mocking-api-calls-in-react",formattedDate:"August 4, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:6.835,date:"2022-08-04T00:00:00.000Z"},{title:"Memoization in React - How useCallback Works",permalink:"/blog/react-usecallback-guide",formattedDate:"September 20, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:5.37,date:"2022-09-20T00:00:00.000Z"},{title:"Build internal tools using Low-Code with refine, React-based framework",permalink:"/blog/build-internal-tools-using-low-code-with-refine",formattedDate:"February 21, 2022",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:9.675,date:"2022-02-21T00:00:00.000Z"}],authorPosts:[{title:"Material UI Grid System in React",permalink:"/blog/material-ui-grid",formattedDate:"September 18, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:13.13,date:"2022-09-18T00:00:00.000Z"},{title:"A Guide on Material UI AutoComplete in React",permalink:"/blog/material-ui-autocomplete-component",formattedDate:"October 19, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:14.105,date:"2022-10-19T00:00:00.000Z"},{title:"Material UI button in React",permalink:"/blog/mui-button-in-react",formattedDate:"September 5, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.04,date:"2022-09-05T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"What is Material UI?",id:"what-is-material-ui",level:2},{value:"Getting started with Material UI icons in React",id:"getting-started-with-material-ui-icons-in-react",level:2},{value:"How to apply MUI icons to your project",id:"how-to-apply-mui-icons-to-your-project",level:2},{value:"Step 1 - Install the MUI Library",id:"step-1---install-the-mui-library",level:3},{value:"Step 2 - Install the MUI Icons package",id:"step-2---install-the-mui-icons-package",level:3},{value:"Step 3 - Import the Icons",id:"step-3---import-the-icons",level:3},{value:"Step 4 - Displaying the icon on the DOM",id:"step-4---displaying-the-icon-on-the-dom",level:3},{value:"SvgIcon API",id:"svgicon-api",level:2},{value:"The Icon component(Font icons)",id:"the-icon-componentfont-icons",level:2},{value:"Building a Task Tracker with React and Material UI",id:"building-a-task-tracker-with-react-and-material-ui",level:2},{value:"The Form Component",id:"the-form-component",level:3},{value:"The Task Component",id:"the-task-component",level:3},{value:"The TaskList Component",id:"the-tasklist-component",level:3},{value:"Testing MUI Icons",id:"testing-mui-icons",level:2},{value:"Conclusion",id:"conclusion",level:2}],u=(d="PromotionBanner",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const h={toc:p};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"React is the most commonly used frontend framework for creating a responsive web interface. It is accompanied by libraries that provide elements with a means of working together to maximise the aesthetic value of any web design layout effectively. Some of these libraries include Material UI, Ant Design, React-Bootstrap, Semantic UI, Fluent UI, Blueprint UI, e.t.c."),(0,o.kt)("p",null,"These libraries, whether component or utility-based, perform specific roles in aiding React developers to create web structures that are responsive and pretty. For this article, we will focus on Material UI, investigate its icons and highlight their functions in a React application."),(0,o.kt)("p",null,"Steps we\u2019ll cover:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#what-is-material-ui"},"What is Material UI?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#getting-started-with-material-ui-icons-in-react"},"Getting started with Material UI icons in React")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-to-apply-mui-icons-to-your-project"},"How to apply MUI icons to your project")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#svgicon-api"},"SvgIcon API")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#the-icon-componentfont-icons"},"The Icon component(Font icons)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#building-a-task-tracker-with-react-and-material-ui"},"Building a Task Tracker with React and Material UI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#testing-mui-icons"},"Testing MUI Icons"))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To properly understand the scope of this article, you must have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Thorough knowledge of HTML, CSS, and JavaScript"),(0,o.kt)("li",{parentName:"ul"},"A working installation of Node.Js")),(0,o.kt)("h2",{id:"what-is-material-ui"},"What is Material UI?"),(0,o.kt)("p",null,"Material UI is an open-source React component library based on Google\u2019s ",(0,o.kt)("a",{parentName:"p",href:"https://material.io/design"},"Material Design"),". It provides a complete set of UI tools to help developers build and maintain React applications and effectively import components into several parts of their projects. Over the years, more developers have incorporated Material UI into their project UI because it makes the web design process significantly easier and faster."),(0,o.kt)("p",null," Material UI offers components that can serve specific purposes on a web page. Some of which include Form components, Data display components, Feedback components, Navigation components, Layout components, e.t.c. Material UI icons are a significant example of the Data display components. "),(0,o.kt)("h2",{id:"getting-started-with-material-ui-icons-in-react"},"Getting started with Material UI icons in React"),(0,o.kt)("p",null,"Material UI icons are a pre-made set of icons that can be extracted from the MUI component system and embedded into any React application. They are commonly used in application toolbars to represent frequent operations and actions. These icons make it easier for developers to create shortcuts on the app and substitute lengthy text descriptions with easy-to-understand representations."),(0,o.kt)("p",null,"MUI offers three types of icon support:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Uniform ",(0,o.kt)("a",{parentName:"li",href:"https://mui.com/material-ui/icons/#material-svg-icons"},"Material Icons")," that are exported as React Components"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://mui.com/material-ui/icons/#svgicon"},(0,o.kt)("inlineCode",{parentName:"a"},"SvgIcon"))," component - A React wrapper for custom SVG icons. "),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://mui.com/material-ui/icons/#icon-font-icons"},(0,o.kt)("inlineCode",{parentName:"a"},"Icon"))," component - A React wrapper for custom font icons. ")),(0,o.kt)("h2",{id:"how-to-apply-mui-icons-to-your-project"},"How to apply MUI icons to your project"),(0,o.kt)("h3",{id:"step-1---install-the-mui-library"},"Step 1 - Install the MUI Library"),(0,o.kt)("p",null,"Install the MUI library into your project as part of your package.json dependencies with the following command:"),(0,o.kt)(i.Z,{defaultValue:"npm",values:[{label:"use npm",value:"npm"},{label:"use yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @mui/material @emotion/react @emotion/styled\n"))),(0,o.kt)(r.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @mui/material @emotion/react @emotion/styled\n")))),(0,o.kt)("h3",{id:"step-2---install-the-mui-icons-package"},"Step 2 - Install the MUI Icons package"),(0,o.kt)("p",null,"Install the MUI icons themselves into your project with the following command:"),(0,o.kt)(i.Z,{defaultValue:"npm",values:[{label:"use npm",value:"npm"},{label:"use yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @mui/icons-material\n"))),(0,o.kt)(r.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @mui/icons-material\n")))),(0,o.kt)("p",null,"You should now see the updated dependencies on your package.json like this:"),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-24-mui-icons/package.png",alt:"package"})),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"step-3---import-the-icons"},"Step 3 - Import the Icons"),(0,o.kt)("p",null,"The next step would be to import the Material UI icons into your desired project directory by using one of the following techniques:"),(0,o.kt)("p",null,"You can import each icon you intend to use for that particular React component individually like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import ArrowRight from '@mui/icons-material/ArrowRight'\nimport Camera from '@mui/icons-material/Camera'\n")),(0,o.kt)("p",null,"You can import them together in one declaration like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ArrowRight, Camera } from '@mui/icons-material'\n")),(0,o.kt)("p",null,"Each Material UI icon comes with a theme:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Filled(The default theme)"),(0,o.kt)("li",{parentName:"ul"},"Outlined"),(0,o.kt)("li",{parentName:"ul"},"Rounded"),(0,o.kt)("li",{parentName:"ul"},"Two-tone"),(0,o.kt)("li",{parentName:"ul"},"Sharp")),(0,o.kt)("p",null,"To use a theme other than the default, append the theme name to the icon name when importing it. For instance, you can import a Camera icon with an outlined theme like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," @material-ui/icons/CameraOutlined\n")),(0,o.kt)("h3",{id:"step-4---displaying-the-icon-on-the-dom"},"Step 4 - Displaying the icon on the DOM"),(0,o.kt)("p",null,"After successfully installing the MUI library and icons package into your application, you can call the individual icons into your JSX as a component and export them into ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js"),", ensuring that they are displayed on the virtual DOM."),(0,o.kt)("p",null,"For instance, if you want to display Camera icons bearing all the primary themes. You can do that with the code below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport Grid from "@mui/material/Grid";\nimport Typography from "@mui/material/Typography";\nimport CameraIcon from "@mui/icons-material/Camera";\nimport CameraOutlinedIcon from "@mui/icons-material/CameraOutlined";\nimport CameraRoundedIcon from "@mui/icons-material/CameraRounded";\nimport CameraTwoToneIcon from "@mui/icons-material/CameraTwoTone";\nimport CameraSharpIcon from "@mui/icons-material/CameraSharp";\nimport ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";\n\nconst Home = () => {\n    return (\n        <div>\n            <Grid container sx={{ color: "text.primary" }}>\n                <Grid item xs={4}>\n                    <Typography>Filled</Typography>\n                </Grid>\n                <Grid item xs={8}>\n                    <CameraIcon />\n                </Grid>\n                <Grid item xs={4}>\n                    <Typography>Outlined</Typography>\n                </Grid>\n                <Grid item xs={8}>\n                    <CameraOutlinedIcon />\n                </Grid>\n                <Grid item xs={4}>\n                    <Typography>Rounded</Typography>\n                </Grid>\n                <Grid item xs={8}>\n                    <CameraRoundedIcon />\n                </Grid>\n                <Grid item xs={4}>\n                    <Typography>Two Tone</Typography>\n                </Grid>\n                <Grid item xs={8}>\n                    <CameraTwoToneIcon />\n                </Grid>\n                <Grid item xs={4}>\n                    <Typography>Sharp</Typography>\n                </Grid>\n                <Grid item xs={8}>\n                    <CameraSharpIcon />\n                </Grid>\n                <Grid item xs={4}>\n                    <Typography>Edge-cases</Typography>\n                </Grid>\n                <Grid item xs={8}>\n                    <ThreeSixtyIcon />\n                </Grid>\n            </Grid>\n        </div>\n    );\n};\n\nexport default Home;\n')),(0,o.kt)("p",null,"The code above demonstrates how to include the Camera icon and its primary themes in a standard React project. The icons are then displayed as virtual DOM components. "),(0,o.kt)("p",null,"Here\u2019s the result:"),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-24-mui-icons/icon-dom.png",alt:"iconDom"})),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)(u,{title:"Small dev teams love this React framework!",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/mui_banner.png",mdxType:"PromotionBanner"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"svgicon-api"},"SvgIcon API"),(0,o.kt)("p",null,"For cases where you may need a custom SVG icon that is not readily available in the Material icon specifications, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"SvgIcon")," wrapper. This component is an extension of the native ",(0,o.kt)("inlineCode",{parentName:"p"},"<svg>")," element:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It has built-in accessibility."),(0,o.kt)("li",{parentName:"ul"},"SVG elements have a default ",(0,o.kt)("inlineCode",{parentName:"li"},"viewport")," size of 24px by 24px that can customised with the ",(0,o.kt)("inlineCode",{parentName:"li"},"viewport")," attribute.   "),(0,o.kt)("li",{parentName:"ul"},"The component inherits the current colour by default. You can, at your discretion, use the ",(0,o.kt)("inlineCode",{parentName:"li"},"color")," prop to apply one of the theme colours.")),(0,o.kt)("p",null,"Below is a simple representation of how to call a customised MUI ",(0,o.kt)("inlineCode",{parentName:"p"},"SvgIcon")," component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\nimport SvgIcon from \'@mui/material/SvgIcon\';\nimport CameraIcon from \'./Components/CameraIcon\'\n\nconst HomeIcon = (props) => {\n  return (\n    <div>\n    <SvgIcon {...props}>\n         <path d="M9.4 10.5l4.77-8.26C13.47 2.09 12.75 2 12 2c-2.4 0-4.6.85-6.32 2.25l3.66 6.35.06-.1zM21.54 9c-.92-2.92-3.15-5.26-6-6.34L11.88 9h9.66zm.26 1h-7.49l.29.5 4.76 8.25C21 16.97 22 14.61 22 12c0-.69-.07-1.35-.2-2zM8.54 12l-3.9-6.75C3.01 7.03 2 9.39 2 12c0 .69.07 1.35.2 2h7.49l-1.15-2zm-6.08 3c.92 2.92 3.15 5.26 6 6.34L12.12 15H2.46zm11.27 0l-3.9 6.76c.7.15 1.42.24 2.17.24 2.4 0 4.6-.85 6.32-2.25l-3.66-6.35-.93 1.6z"/>\n   </SvgIcon>\n    </div>\n  )\n}\n\n// And the code for the color setting would look the following way:\n<div className={Class.root}>\n      <CameraIcon />\n      <CameraIcon color="primary" />\n      <CameraIcon color="secondary" />\n      <CameraIcon color="action" />\n      <CameraIcon color="disabled" />\n</div>\n\nexport default HomeIcon\n')),(0,o.kt)("p",null,"Here\u2019s the result:"),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-24-mui-icons/svg-icon.png",alt:"svgIcon"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"the-icon-componentfont-icons"},"The Icon component(Font icons)"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Icon")," component displays any icon font that supports ligatures. To use an icon, just enclose its name in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Icon")," component's font ligature. "),(0,o.kt)("p",null,"Here\u2019s a simple illustration of how to import font icons into your React app with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Icon")," component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport { green } from '@mui/material/colors';\nimport Icon from '@mui/material/Icon';\n\nexport default function Icons() {\n  return (\n    <Box\n      sx={{\n        '& > :not(style)': {\n          m: 2,\n        },\n      }}\n    >\n      <Icon>camera</Icon>\n      <Icon color=\"primary\">camera</Icon>\n      <Icon sx={{ color: green[500] }}>camera</Icon>\n      <Icon fontSize=\"small\">camera</Icon>\n      <Icon sx={{ fontSize: 30 }}>camera</Icon>\n    </Box>\n  );\n}\n")),(0,o.kt)("p",null,"Here\u2019s the result"),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-24-mui-icons/icon-icon.png",alt:"iconIcon"})),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"Notice how we could customise the `font size of some of the icons. "),(0,o.kt)("p",null,"You can also use FontAwesome icons like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<FontAwesomeIcon icon="fa-solid fa-aperture" />\n')),(0,o.kt)("h2",{id:"building-a-task-tracker-with-react-and-material-ui"},"Building a Task Tracker with React and Material UI"),(0,o.kt)("p",null,"Material UI icons are a very dynamic element of web design. You can use them to represent commands, actions and directories in a React application. We can showcase their uses and functions in a simple application like a task tracker."),(0,o.kt)("p",null,"The task tracker will have three components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Form")," component"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Task")," component"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"TaskList")," component")),(0,o.kt)("h3",{id:"the-form-component"},"The Form Component"),(0,o.kt)("p",null,"This component includes an input element where users can type their tasks, as well as an add button represented by Material UI's ",(0,o.kt)("inlineCode",{parentName:"p"},"AddCircleIcon.")," It also has a ",(0,o.kt)("inlineCode",{parentName:"p"},"Select")," element where users can customise the task tracker by displaying tasks that have been completed or those that have yet to be completed. "),(0,o.kt)("p",null,"Here\u2019s the code for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Form")," component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport AddCircleIcon from "@mui/icons-material/AddCircle";\n\nconst Form = () => {\n    const [inputText, setInputText] = useState("");\n    const [todos, setTodos] = useState([]);\n    const [status, setStatus] = useState("All");\n    const [filteredTodos, setFilteredTodos] = useState([]);\n\n    const inputTextHandler = (e) => {\n        setInputText(e.target.value);\n    };\n\n    const submitTodoHandler = (e) => {\n        e.preventDefault();\n\n        setTodos([\n            ...todos,\n            {\n                text: inputText,\n                completed: false,\n                id: Math.floor(Math.random() * 10000),\n            },\n        ]);\n\n        setInputText("");\n    };\n\n    const statusHandler = (e) => {\n        setStatus(e.target.value);\n    };\n\n    return (\n        <section>\n            <form className="form-div">\n                <div>\n                    <input\n                        type="text"\n                        placeholder="Enter New Task Here"\n                        value={inputText}\n                        className="input"\n                        onChange={inputTextHandler}\n                    />\n                    <AddCircleIcon\n                        onClick={submitTodoHandler}\n                        className="add-icon"\n                    />\n                    <select onChange={statusHandler}>\n                        <option>All</option>\n                        <option>Completed</option>\n                        <option>Uncompleted</option>\n                    </select>\n                </div>\n            </form>\n        </section>\n    );\n};\n\nexport default Form;\n')),(0,o.kt)("p",null,"Here\u2019s the ",(0,o.kt)("inlineCode",{parentName:"p"},"Form")," component:"),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-24-mui-icons/task-form.png",alt:"task form"})),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("div",null,(0,o.kt)("a",{href:"https://discord.gg/refine"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,o.kt)("h3",{id:"the-task-component"},"The Task Component"),(0,o.kt)("p",null,"This component displays the user interface and functionalities within the individual tasks that the user specifies. You can delete tasks from the Material UI by clicking the ",(0,o.kt)("inlineCode",{parentName:"p"},"DeleteIcon.")," By clicking the ",(0,o.kt)("inlineCode",{parentName:"p"},"CheckCircleIcon"),' from Material UI, you can mark a "todo" as "completed." '),(0,o.kt)("p",null,"Here\u2019s the code for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Task")," component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport CheckCircleIcon from "@mui/icons-material/CheckCircle";\nimport DeleteIcon from "@mui/icons-material/Delete";\n\nconst Task = () => {\n    const [todos, setTodos] = useState([]);\n    const [filteredTodos, setFilteredTodos] = useState([]);\n\n    const deleteHandler = () => {\n        setTodos(todos.filter((el) => el.id !== todo.id));\n    };\n\n    const completeHandler = () => {\n        setTodos(\n            todos.map((item) => {\n                if (item.id === todo.id) {\n                    return {\n                        ...item,\n                        completed: !item.completed,\n                    };\n                }\n                return item;\n            }),\n        );\n    };\n\n    return (\n        <section className="task-section">\n            <div className="class-list">\n                <p className={`${todo.completed ? "pargh2" : "pargh"}`}>\n                    {text}\n                </p>\n            </div>\n            <div>\n                <button onClick={completeHandler} className="btn-2">\n                    <CheckCircleIcon className="icon2" />\n                </button>\n                <button onClick={deleteHandler} className="btn-1">\n                    <DeleteIcon className="icon1" />\n                </button>\n            </div>\n        </section>\n    );\n};\n\nexport default Task;\n')),(0,o.kt)("p",null,"Here\u2019s the ",(0,o.kt)("inlineCode",{parentName:"p"},"Task")," component"),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-24-mui-icons/task-component.png",alt:"task component"})),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"the-tasklist-component"},"The TaskList Component"),(0,o.kt)("p",null,"This component maps the various tasks created by the user and displays them as an unordered list in the DOM. "),(0,o.kt)("p",null,"Here\u2019s the code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport Task from "./Task";\n\nconst Tasklist = () => {\n    const [todos, setTodos] = useState([]);\n    const [filteredTodos, setFilteredTodos] = useState([]);\n\n    return (\n        <div>\n            <ul>\n                {filteredTodos.map((todo) => (\n                    <Task\n                        text={todo.text}\n                        key={todo.id}\n                        todos={todos}\n                        setTodos={setTodos}\n                        todo={todo}\n                    />\n                ))}\n            </ul>\n        </div>\n    );\n};\n\nexport default Tasklist;\n')),(0,o.kt)("p",null,"Here\u2019s the final result:"),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-24-mui-icons/tasklist.png",alt:"task list"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"testing-mui-icons"},"Testing MUI Icons"),(0,o.kt)("p",null,"Material UI provides a wide range of regression tests. MUI components are tested internally. ",(0,o.kt)("inlineCode",{parentName:"p"},"@testing-library/react")," is a library with a first-class API for this approach. MUI icons exported from ",(0,o.kt)("inlineCode",{parentName:"p"},"@mui/icons-material")," have a ",(0,o.kt)("inlineCode",{parentName:"p"},"data-testid")," attribute for testing purposes."),(0,o.kt)("p",null,"For instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import CameraIcon from '@mui/icons-material/Camera';\n")),(0,o.kt)("p",null,"Once mounted, it has the following property:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<svg data-testid="CameraIcon"></svg>\n')),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"This article reviewed React Material UI and explored its icons, installation, and application processes. We also highlighted a possible use case in a task-tracking application.\nYou can access the source code on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/refinedev/task-manager-with-react-blog"},"Github Repo"),"."),(0,o.kt)("p",null,"You can also see the deployed application ",(0,o.kt)("a",{parentName:"p",href:"https://task-manager-with-react.vercel.app/"},"here"),"."))}k.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(86010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),o=n(67294),i=n(86010),r=n(72389),l=n(67392),s=n(7094),c=n(12466);const m="tabList__CuJ",p="tabItem_LNqP";function u(e){var t;const{lazy:n,block:r,defaultValue:u,values:d,groupId:h,className:k}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,l.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===u?u:u??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:I}=(0,s.U)(),[T,w]=(0,o.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=h){const e=b[h];null!=e&&e!==T&&f.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,n=N.indexOf(t),a=f[n].value;a!==T&&(C(t),w(a),null!=h&&I(h,String(a)))},M=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",m)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},k)},f.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>N.push(e),onKeyDown:M,onFocus:x,onClick:x},r,{className:(0,i.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,o.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,r.Z)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}}}]);