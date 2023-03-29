"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52514],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(n),h=o,u=p["".concat(l,".").concat(h)]||p[h]||c[h]||i;return n?r.createElement(u,a(a({ref:t},d),{},{components:n})):r.createElement(u,a({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var m=2;m<i;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},40768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=n(87462),o=(n(67294),n(3905));const i={id:"theming",title:"Theme",sidebar_label:"Theme"},a=void 0,s={unversionedId:"api-reference/mantine/theming",id:"api-reference/mantine/theming",title:"Theme",description:"Mantine theme is an object where your application's colors, fonts, spacing, border-radius and other design tokens are stored. You can either create your own theme object or use themes that provide from refine. There are two types of themes: LightTheme and DarkTheme. LightTheme tend to have dark text on a light background, while DarkTheme have light text on a dark background. Theme provides a way to your app's design to meet them.",source:"@site/docs/api-reference/mantine/theming.md",sourceDirName:"api-reference/mantine",slug:"/api-reference/mantine/theming",permalink:"/docs/api-reference/mantine/theming",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mantine/theming.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1680071227,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{id:"theming",title:"Theme",sidebar_label:"Theme"},sidebar:"someSidebar",previous:{title:"Url",permalink:"/docs/api-reference/mantine/components/fields/url"},next:{title:"Material UI API",permalink:"/docs/api-reference/mui"}},l={},m=[{value:"Theme customization",id:"theme-customization",level:2},{value:"Overriding the refine themes",id:"overriding-the-refine-themes",level:3},{value:"Theme switching",id:"theme-switching",level:2}],d={toc:m};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'import {\n    List,\n    Create,\n    Edit,\n    EditButton,\n    useForm,\n} from "@refinedev/mantine";\nimport { Table, Pagination, TextInput } from "@mantine/core";\nimport { useTable } from "@refinedev/react-table";\nimport { ColumnDef, flexRender } from "@tanstack/react-table";\n\nconst PostList: React.FC = () => {\n    const columns = React.useMemo<ColumnDef<IPost>[]>(\n        () => [\n            {\n                id: "id",\n                header: "ID",\n                accessorKey: "id",\n            },\n            {\n                id: "title",\n                header: "Title",\n                accessorKey: "title",\n            },\n            {\n                id: "actions",\n                header: "Actions",\n                accessorKey: "id",\n                cell: function render({ getValue }) {\n                    return (\n                        <EditButton\n                            hideText\n                            recordItemId={getValue() as number}\n                        />\n                    );\n                },\n            },\n        ],\n        [],\n    );\n\n    const {\n        getHeaderGroups,\n        getRowModel,\n        refineCore: { setCurrent, pageCount, current },\n    } = useTable({\n        columns,\n        refineCoreProps: {\n            initialPageSize: 5,\n        },\n    });\n\n    return (\n        <List>\n            <Table>\n                <thead>\n                    {getHeaderGroups().map((headerGroup) => (\n                        <tr key={headerGroup.id}>\n                            {headerGroup.headers.map((header) => (\n                                <th key={header.id}>\n                                    {header.isPlaceholder\n                                        ? null\n                                        : flexRender(\n                                              header.column.columnDef.header,\n                                              header.getContext(),\n                                          )}\n                                </th>\n                            ))}\n                        </tr>\n                    ))}\n                </thead>\n                <tbody>\n                    {getRowModel().rows.map((row) => (\n                        <tr key={row.id}>\n                            {row.getVisibleCells().map((cell) => (\n                                <td key={cell.id}>\n                                    {flexRender(\n                                        cell.column.columnDef.cell,\n                                        cell.getContext(),\n                                    )}\n                                </td>\n                            ))}\n                        </tr>\n                    ))}\n                </tbody>\n            </Table>\n            <br />\n            <Pagination\n                position="right"\n                total={pageCount}\n                page={current}\n                onChange={setCurrent}\n            />\n        </List>\n    );\n};\n\nconst PostEdit: React.FC = () => {\n    const { saveButtonProps, getInputProps } = useForm({\n        initialValues: {\n            title: "",\n        },\n        validate: {\n            title: (value) => (value.length < 2 ? "Too short title" : null),\n        },\n    });\n\n    return (\n        <Edit saveButtonProps={saveButtonProps}>\n            <form>\n                <TextInput\n                    mt={8}\n                    label="Title"\n                    placeholder="Title"\n                    {...getInputProps("title")}\n                />\n            </form>\n        </Edit>\n    );\n};\n\nconst PostCreate: React.FC = () => {\n    const { saveButtonProps, getInputProps } = useForm({\n        initialValues: {\n            title: "",\n        },\n        validate: {\n            title: (value) => (value.length < 2 ? "Too short title" : null),\n        },\n    });\n\n    return (\n        <Create saveButtonProps={saveButtonProps}>\n            <form>\n                <TextInput\n                    mt={8}\n                    label="Title"\n                    placeholder="Title"\n                    {...getInputProps("title")}\n                />\n            </form>\n        </Create>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n')),(0,o.kt)("p",null,"Mantine theme is an object where your application's colors, fonts, spacing, border-radius and other design tokens are stored. You can either create your own theme object or use themes that provide from ",(0,o.kt)("strong",{parentName:"p"},"refine"),". There are two types of themes: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/next/packages/mantine/src/theme/index.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"LightTheme"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/next/packages/mantine/src/theme/index.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"DarkTheme")),". ",(0,o.kt)("inlineCode",{parentName:"p"},"LightTheme")," tend to have dark text on a light background, while ",(0,o.kt)("inlineCode",{parentName:"p"},"DarkTheme")," have light text on a dark background. Theme provides a way to your app's design to meet them."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mantine.dev/theming/theme-object/"},"Refer to the Mantine documentation for more information about theme object. ","\u2192")),(0,o.kt)("h2",{id:"theme-customization"},"Theme customization"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<MantineProvider/>")," component can be used to change theme. It is not required if you decide to use the default theme. You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"LightTheme")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"DarkTheme")," provided by ",(0,o.kt)("strong",{parentName:"p"},"refine"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px",live:!0,url:"http://localhost:3000",previewHeight:"420px"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport {\n    Layout,\n    notificationProvider,\n    ErrorComponent,\n    // highlight-next-line\n    DarkTheme,\n} from "@refinedev/mantine";\nimport { MantineProvider, Global } from "@mantine/core";\nimport { NotificationsProvider } from "@mantine/notifications";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { PostCreate, PostEdit, PostList } from "./pages";\n\nconst App = () => {\n    return (\n        // highlight-next-line\n        <MantineProvider theme={DarkTheme} withNormalizeCSS withGlobalStyles>\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <NotificationsProvider position="top-right">\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerProvider}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                        resources={[\n                            {\n                                name: "posts",\n                                list: "/posts",\n                                edit: "/posts/edit/:id",\n                                create: "/posts/create",\n                            },\n                        ]}\n                    >\n                        <Routes>\n                            <Route element={(\n                                <Layout>\n                                    <Outlet />\n                                </Layout>\n                            )}>\n                                <Route path="posts">\n                                    <Route index element={<PostList />} />\n                                    <Route path="create" element={<PostCreate />} />\n                                    <Route path="edit/:id" element={<PostEdit />} />\n                                </Route>\n                                <Route path="*" element={<ErrorComponent />} />\n                            </Route>\n                        </Routes>\n                    </Refine>\n                </BrowserRouter>\n            </NotificationsProvider>\n        </MantineProvider>\n    );\n};\n// visible-block-end\nrender(<App />);\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mantine.dev/theming/mantine-provider/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"<MantineProvider/>")," documentation for more information. ","\u2192")),(0,o.kt)("h3",{id:"overriding-the-refine-themes"},"Overriding the refine themes"),(0,o.kt)("p",null,"You can override or extend the default refine themes. You can also create your own theme. Let's see how to do this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px",live:!0,url:"http://localhost:3000",previewHeight:"420px"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport {\n    Layout,\n    notificationProvider,\n    ErrorComponent,\n    // highlight-next-line\n    LightTheme,\n} from "@refinedev/mantine";\nimport { MantineProvider, Global } from "@mantine/core";\nimport { NotificationsProvider } from "@mantine/notifications";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { PostCreate, PostEdit, PostList } from "./pages";\n\nconst App = () => {\n    return (\n        <MantineProvider\n            // highlight-start\n            theme={{\n                ...LightTheme,\n                colors: {\n                    primary: [\n                        "#ECF9F8",\n                        "#C9EEEC",\n                        "#A6E2E1",\n                        "#84D7D5",\n                        "#61CCC9",\n                        "#3EC1BD",\n                        "#329A97",\n                        "#257471",\n                        "#194D4B",\n                        "#0C2726",\n                    ],\n                },\n            }}\n            // highlight-end\n            withNormalizeCSS\n            withGlobalStyles\n        >\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <NotificationsProvider position="top-right">\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerProvider}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                        Layout={Layout}\n                        resources={[\n                            {\n                                name: "posts",\n                                list: "/posts",\n                                edit: "/posts/edit/:id",\n                                create: "/posts/create",\n                            },\n                        ]}\n                    >\n                        <Routes>\n                            <Route element={(\n                                <Layout>\n                                    <Outlet />\n                                </Layout>\n                            )}>\n                                <Route path="posts">\n                                    <Route index element={<PostList />} />\n                                    <Route path="create" element={<PostCreate />} />\n                                    <Route path="edit/:id" element={<PostEdit />} />\n                                </Route>\n                                <Route path="*" element={<ErrorComponent />} />\n                            </Route>\n                        </Routes>\n                    </Refine>\n                </BrowserRouter>\n            </NotificationsProvider>\n        </MantineProvider>\n    );\n};\n// visible-block-end\nrender(<App />);\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mantine.dev/theming/colors/"},"Refer to the Mantine colors documentation for more information. ","\u2192")),(0,o.kt)("h2",{id:"theme-switching"},"Theme switching"),(0,o.kt)("p",null,"You can switch between themes as Mantine mentioned in its documentation. You can see an example of using local storage to store the theme below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px",live:!0,url:"http://localhost:3000",previewHeight:"420px"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport {\n    Layout,\n    ErrorComponent,\n    notificationProvider,\n    LightTheme,\n    DarkTheme,\n} from "@refinedev/mantine";\n// highlight-start\nimport { NotificationsProvider } from "@mantine/notifications";\nimport {\n    MantineProvider,\n    Global,\n    useMantineColorScheme,\n    Header as MantineHeader,\n    Group,\n    ActionIcon,\n    ColorScheme,\n    ColorSchemeProvider,\n} from "@mantine/core";\nimport { useLocalStorage } from "@mantine/hooks";\n// highlight-end\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { IconSun, IconMoonStars } from "@tabler/icons";\n\nimport { PostCreate, PostEdit, PostList } from "./pages";\n\n// highlight-start\nconst Header = () => {\n    const { colorScheme, toggleColorScheme } = useMantineColorScheme();\n    const dark = colorScheme === "dark";\n\n    return (\n        <MantineHeader height={50} p="xs">\n            <Group position="right">\n                <ActionIcon\n                    variant="outline"\n                    color={dark ? "yellow" : "primary"}\n                    onClick={() => toggleColorScheme()}\n                    title="Toggle color scheme"\n                >\n                    {dark ? <IconSun /> : <IconMoonStars />}\n                </ActionIcon>\n            </Group>\n        </MantineHeader>\n    );\n};\n// highlight-end\n\nconst App = () => {\n    // highlight-start\n    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({\n        key: "mantine-color-scheme",\n        defaultValue: "light",\n        getInitialValueInEffect: true,\n    });\n    // highlight-end\n\n    // highlight-start\n    const toggleColorScheme = (value?: ColorScheme) =>\n        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));\n    // highlight-end\n\n    return (\n        // highlight-start\n        <ColorSchemeProvider\n            colorScheme={colorScheme}\n            toggleColorScheme={toggleColorScheme}\n            // highlight-end\n        >\n            <MantineProvider\n                // highlight-next-line\n                theme={colorScheme === "dark" ? DarkTheme : LightTheme}\n                withNormalizeCSS\n                withGlobalStyles\n            >\n                <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n                <NotificationsProvider position="top-right">\n                    <BrowserRouter>\n                        <Refine\n                            routerProvider={routerProvider}\n                            dataProvider={dataProvider(\n                                "https://api.fake-rest.refine.dev",\n                            )}\n                            notificationProvider={notificationProvider}\n                            resources={[\n                                {\n                                    name: "posts",\n                                    list: "/posts",\n                                    edit: "/posts/edit/:id",\n                                    create: "/posts/create",\n                                },\n                            ]}\n                        >\n                            <Routes>\n                                <Route element={(\n                                    <Layout\n                                        // highlight-next-line\n                                        Header={Header}\n                                    >\n                                        <Outlet />\n                                    </Layout>\n                                )}>\n                                    <Route path="posts">\n                                        <Route index element={<PostList />} />\n                                        <Route path="create" element={<PostCreate />} />\n                                        <Route path="edit/:id" element={<PostEdit />} />\n                                    </Route>\n                                    <Route path="*" element={<ErrorComponent />} />\n                                </Route>\n                            </Routes>\n                        </Refine>\n                    </BrowserRouter>\n                </NotificationsProvider>\n            </MantineProvider>\n        </ColorSchemeProvider>\n    );\n};\n// visible-block-end\nrender(<App />);\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mantine.dev/guides/dark-theme"},"Refer to the Mantine dark theme documentation for more information. ","\u2192")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you want to customize the default layout elements provided with ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/mantine")," package, check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/custom-layout"},"Custom Layout")," tutorial.")))}c.isMDXComponent=!0}}]);