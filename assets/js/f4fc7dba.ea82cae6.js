"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6287],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={id:"text",title:"Text",swizzle:!0},a=void 0,s={unversionedId:"api-reference/mui/components/fields/text",id:"api-reference/mui/components/fields/text",title:"Text",description:"This field lets you show basic text. It uses Material UI `` component.",source:"@site/docs/api-reference/mui/components/fields/text.md",sourceDirName:"api-reference/mui/components/fields",slug:"/api-reference/mui/components/fields/text",permalink:"/docs/api-reference/mui/components/fields/text",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mui/components/fields/text.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1680071227,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{id:"text",title:"Text",swizzle:!0},sidebar:"someSidebar",previous:{title:"Tag",permalink:"/docs/api-reference/mui/components/fields/tag"},next:{title:"Url",permalink:"/docs/api-reference/mui/components/fields/url"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],c=(m="PropsTable",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var m;const u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This field lets you show basic text. It uses Material UI ",(0,i.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-typography/#main-content"},(0,i.kt)("inlineCode",{parentName:"a"},"<Typography>"))," component."),(0,i.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,i.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,i.kt)("strong",{parentName:"a"},"refine CLI")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Let's see how to use it in a basic list page:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=340px",live:!0,url:"http://localhost:3000/posts",previewHeight:"340px"},'// visible-block-start\nimport {\n    useDataGrid,\n    List,\n    // highlight-next-line\n    TextFieldComponent as TextField,\n} from "@refinedev/mui";\nimport { DataGrid, GridColumns } from "@mui/x-data-grid";\n\nconst columns: GridColumns = [\n    { field: "id", headerName: "ID", type: "number" },\n    {\n        field: "title",\n        headerName: "Title",\n        renderCell: function render({ row }) {\n            // highlight-start\n            return <TextField value={row.title} />;\n            // highlight-end\n        },\n        minWidth: 100,\n        flex: 1,\n    },\n];\n\nconst PostsList: React.FC = () => {\n    const { dataGridProps } = useDataGrid<IPost>();\n\n    return (\n        <List>\n            <DataGrid {...dataGridProps} columns={columns} autoHeight />\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        resources={[\n            {\n                name: "posts",\n                list: PostsList,\n            },\n        ]}\n    />,\n);\n')),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)(c,{module:"@refinedev/mui/TextField",mdxType:"PropsTable"}),(0,i.kt)("admonition",{title:"External Props",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"It also accepts all props of Material UI ",(0,i.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-typography/#main-content"},"Typography"),".")))}d.isMDXComponent=!0}}]);