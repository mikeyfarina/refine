"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56068],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(t),u=o,f=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34506:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=t(87462),o=(t(67294),t(3905));const i={id:"markdown",title:"Markdown",swizzle:!0},a=void 0,s={unversionedId:"api-reference/mantine/components/fields/markdown",id:"version-3.xx.xx/api-reference/mantine/components/fields/markdown",title:"Markdown",description:"This field lets you display markdown content. It supports GitHub Flavored Markdown.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mantine/components/fields/markdown.md",sourceDirName:"api-reference/mantine/components/fields",slug:"/api-reference/mantine/components/fields/markdown",permalink:"/docs/3.xx.xx/api-reference/mantine/components/fields/markdown",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mantine/components/fields/markdown.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1680519548,formattedLastUpdatedAt:"Apr 3, 2023",frontMatter:{id:"markdown",title:"Markdown",swizzle:!0},sidebar:"someSidebar",previous:{title:"File",permalink:"/docs/3.xx.xx/api-reference/mantine/components/fields/file"},next:{title:"Number",permalink:"/docs/3.xx.xx/api-reference/mantine/components/fields/number"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],l=(c="PropsTable",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var c;const m={toc:d};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { default: routerProvider } = RefineReactRouterV6;\nconst { default: simpleRest } = RefineSimpleRest;\nsetRefineProps({\n    routerProvider,\n    dataProvider: simpleRest("https://api.fake-rest.refine.dev"),\n    notificationProvider: RefineMantine.notificationProvider,\n    Layout: RefineMantine.Layout,\n    Sider: () => null,\n});\n\nconst Wrapper = ({ children }) => {\n    return (\n        <RefineMantine.MantineProvider\n            theme={RefineMantine.LightTheme}\n            withNormalizeCSS\n            withGlobalStyles\n        >\n            <RefineMantine.Global\n                styles={{ body: { WebkitFontSmoothing: "auto" } }}\n            />\n            <RefineMantine.NotificationsProvider position="top-right">\n                {children}\n            </RefineMantine.NotificationsProvider>\n        </RefineMantine.MantineProvider>\n    );\n};\n')),(0,o.kt)("p",null,"This field lets you display markdown content. It supports ",(0,o.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/"},"GitHub Flavored Markdown"),"."),(0,o.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,o.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,o.kt)("strong",{parentName:"a"},"refine CLI")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Let's see how we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"<MarkdownField>")," in a show page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/show/123 previewHeight=420px hideCode",live:!0,url:"http://localhost:3000/posts/show/123",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts/show/123"]);\nimport { Refine } from "@pankod/refine-core";\nimport { ShowButton } from "@pankod/refine-mantine";\n\n// visible-block-start\nimport { useShow } from "@pankod/refine-core";\nimport { Show, Title, Text, MarkdownField } from "@pankod/refine-mantine";\n\nconst PostShow: React.FC<IResourceComponentsProps> = () => {\n    const { queryResult } = useShow<IPost>();\n    const { data, isLoading } = queryResult;\n    const record = data?.data;\n\n    return (\n        <Show isLoading={isLoading}>\n            <Title order={5}>Id</Title>\n            <Text mt="sm">{record?.id}</Text>\n            <Title mt="sm" order={5}>\n                Content\n            </Title>\n            <MarkdownField value={record?.content} />\n        </Show>\n    );\n};\n\ninterface IPost {\n    id: number;\n    content: string;\n}\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            resources={[\n                {\n                    name: "posts",\n                    show: PostShow,\n                    list: () => (\n                        <div>\n                            <p>This page is empty.</p>\n                            <ShowButton recordItemId="123">\n                                Show Item 123\n                            </ShowButton>\n                        </div>\n                    ),\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)(l,{module:"@pankod/refine-mantine/MarkdownField","value-description":"Markdown data to render",mdxType:"PropsTable"}))}u.isMDXComponent=!0}}]);