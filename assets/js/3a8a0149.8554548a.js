"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>d});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"appwrite",title:"Appwrite",sidebar_label:"Appwrite"},l=void 0,p={unversionedId:"packages/documentation/data-providers/appwrite",id:"packages/documentation/data-providers/appwrite",title:"Appwrite",description:"Introduction",source:"@site/docs/packages/documentation/data-providers/appwrite.md",sourceDirName:"packages/documentation/data-providers",slug:"/packages/documentation/data-providers/appwrite",permalink:"/docs/packages/documentation/data-providers/appwrite",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/packages/documentation/data-providers/appwrite.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1688049291,formattedLastUpdatedAt:"Jun 29, 2023",frontMatter:{id:"appwrite",title:"Appwrite",sidebar_label:"Appwrite"},sidebar:"someSidebar",previous:{title:"CLI",permalink:"/docs/packages/documentation/cli"},next:{title:"GraphQL",permalink:"/docs/packages/documentation/data-providers/graphql"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"Creating Appwrite Client",id:"creating-appwrite-client",level:3},{value:"Creating Auth Provider",id:"creating-auth-provider",level:3},{value:"Configure Refine Component",id:"configure-refine-component",level:3},{value:"Create Collections",id:"create-collections",level:2},{value:"Permissions",id:"permissions",level:3},{value:"Login page\u200b",id:"login-page",level:2},{value:"List Page",id:"list-page",level:2},{value:"Create Page",id:"create-page",level:2},{value:"Edit Page",id:"edit-page",level:2},{value:"Example",id:"example",level:2}],m=(u="CodeSandboxExample",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const g={toc:d};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," and ",(0,r.kt)("a",{parentName:"p",href:"https://appwrite.io/"},"Appwrite")," work in harmony, offering you quick development options. You can use your data (API, Database) very simply by using ",(0,r.kt)("strong",{parentName:"p"},"refine"),"'s Appwrite data provider."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://appwrite.io/"},"Appwrite")," version >= 1.0 is required")),(0,r.kt)("p",null,"You can only focus on your UI as we can handle your data quickly and simply."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This guide has been prepared assuming you know the basics of ",(0,r.kt)("strong",{parentName:"p"},"refine"),". If you haven't learned these basics yet, we recommend reading the ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/"},"Tutorial"),".")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @refinedev/appwrite\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To make this example more visual, we used the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/refine-antd"},(0,r.kt)("inlineCode",{parentName:"a"},"@refinedev/antd"))," package. If you are using Refine headless, you need to provide the components, hooks or helpers imported from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/refine-antd"},(0,r.kt)("inlineCode",{parentName:"a"},"@refinedev/antd"))," package.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"It is very simple to use and consists of two steps. First, define your Appwrite project id and then give it to the dataprovider."),(0,r.kt)("h3",{id:"creating-appwrite-client"},"Creating Appwrite Client"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="appwriteClient.ts"',title:'"appwriteClient.ts"'},'import { Appwrite, Account, Storage } from "@refinedev/appwrite";\n\nconst APPWRITE_URL = "http://YOUR_COOL_APPWRITE_API/v1";\n//highlight-start\nconst APPWRITE_PROJECT = "YOUR_APPWRITE_PROJECT_ID";\n//highlight-end\n\nconst appwriteClient = new Appwrite();\n\nappwriteClient.setEndpoint(APPWRITE_URL).setProject(APPWRITE_PROJECT);\n\n// for authentication\nconst account = new Account(appwriteClient);\n// for file upload\nconst storage = new Storage(appwriteClient);\n\nexport { appwriteClient, account, storage };\n')),(0,r.kt)("h3",{id:"creating-auth-provider"},"Creating Auth Provider"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="authProvider.ts"',title:'"authProvider.ts"'},'import { AuthBindings } from "@refinedev/core";\n\nimport { account } from "./appwriteClient";\n\nconst authProvider: AuthBindings = {\n    login: async ({ email, password }) => {\n        try {\n            await account.createEmailSession(email, password);\n            return {\n                success: true,\n                redirectTo: "/",\n            };\n        } catch (e) {\n            const { type, message, code } = e as AppwriteException;\n            return {\n                success: false,\n                error: {\n                    message,\n                    name: `${code} - ${type}`,\n                },\n            };\n        }\n    },\n    logout: async () => {\n        try {\n            await account.deleteSession("current");\n        } catch (error: any) {\n            return {\n                success: false,\n                error,\n            };\n        }\n\n        return {\n            success: true,\n            redirectTo: "/login",\n        };\n    },\n    onError: async (error) => {\n        console.error(error);\n        return { error };\n    },\n    check: async () => {\n        try {\n            const session = await account.get();\n\n            if (session) {\n                return {\n                    authenticated: true,\n                };\n            }\n        } catch (error: any) {\n            return {\n                authenticated: false,\n                error: error,\n                logout: true,\n                redirectTo: "/login",\n            };\n        }\n\n        return {\n            authenticated: false,\n            error: {\n                message: "Check failed",\n                name: "Session not found",\n            },\n            logout: true,\n            redirectTo: "/login",\n        };\n    },\n    getPermissions: async () => null,\n    getIdentity: async () => {\n        const user = await account.get();\n\n        if (user) {\n            return user;\n        }\n\n        return null;\n    },\n};\n')),(0,r.kt)("h3",{id:"configure-refine-component"},"Configure Refine Component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine, AuthBindings } from "@refinedev/core";\nimport {\n    Layout,\n    ReadyPage,\n    notificationProvider,\n    ErrorComponent,\n} from "@refinedev/antd";\nimport routerProvider from "@refinedev/react-router-v6";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\n//highlight-start\nimport { dataProvider, liveProvider } from "@refinedev/appwrite";\n//highlight-end\n\n//highlight-start\nimport { appwriteClient, account } from "./appwriteClient";\nimport authProvider from "./authProvider";\n//highlight-end\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                //highlight-start\n                dataProvider={dataProvider(appwriteClient, {\n                    databaseId: "default",\n                })}\n                liveProvider={liveProvider(appwriteClient, {\n                    databaseId: "default",\n                })}\n                options={{ liveMode: "auto" }}\n                authProvider={authProvider}\n                //highlight-end\n                routerProvider={routerProvider}\n                notificationProvider={notificationProvider}\n            >\n                {/* ... */}\n            </Refine>\n        </BrowserRouter>\n    );\n};\n')),(0,r.kt)("admonition",{title:"Live/Realtime \ud83d\ude80",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/appwrite")," package supports Live/Realtime Provider natively \ud83d\ude80"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider"},"Refer to the Live/Realtime Provider docs for detailed usage. \u2192"))),(0,r.kt)("h2",{id:"create-collections"},"Create Collections"),(0,r.kt)("p",null,"We created two collections on Appwrite Database as ",(0,r.kt)("inlineCode",{parentName:"p"},"posts")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"categories")," and added a relation between them."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Category Collection"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Title: text")),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/data-provider/appwrite/category.png",alt:"category"}),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Post Collection"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Title: text"),(0,r.kt)("li",{parentName:"ul"},"CategoryId: text"),(0,r.kt)("li",{parentName:"ul"},"Content: text"),(0,r.kt)("li",{parentName:"ul"},"Images: wilcard")),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/data-provider/appwrite/posts.png",alt:"posts"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"Then we need to create an appwrite user to be able to login with ",(0,r.kt)("strong",{parentName:"p"},"refine"),"."),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/data-provider/appwrite/user.png",alt:"user"}),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"permissions"},"Permissions"),(0,r.kt)("p",null,"In order to list posts and categories, you need to give read and write permission by Appwrite."),(0,r.kt)("p",null,"Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"Post Collection Permissons")),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/data-provider/appwrite/permission.png",alt:"permission"}),(0,r.kt)("br",null),(0,r.kt)("p",null,'We indicate that the read and write permission is open to everyone by giving the "',"*",'" parameter.'),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://appwrite.io/docs/permissions"},"Refer to the Appwrite Permissions documentation for detailed information.\u2192")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#create-page"},"Check out how you can use permissions when creating posts with ",(0,r.kt)("strong",{parentName:"a"},"refine")," \u2192")),(0,r.kt)("h2",{id:"login-page"},"Login page\u200b"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," default login screen allows you to login with username. Appwrite allows login with email, therefore we need to override the login page."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show Code"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/login.tsx"',title:'"pages/login.tsx"'},'import React from "react";\n\nimport { useLogin } from "@refinedev/core";\nimport {\n    Row,\n    Col,\n    Layout,\n    Card,\n    Typography,\n    Form,\n    Input,\n    Button,\n    Checkbox,\n} from "antd";\n\nimport "./styles.css";\n\nconst { Text, Title } = Typography;\n\nexport interface ILoginForm {\n    username: string;\n    password: string;\n    remember: boolean;\n}\n\nexport const Login: React.FC = () => {\n    const [form] = Form.useForm<ILoginForm>();\n\n    const { mutate: login } = useLogin<ILoginForm>();\n\n    const CardTitle = (\n        <Title level={3} className="title">\n            Sign in your account\n        </Title>\n    );\n\n    return (\n        <Layout className="layout">\n            <Row\n                justify="center"\n                align="middle"\n                style={{\n                    height: "100vh",\n                }}\n            >\n                <Col xs={22}>\n                    <div className="container">\n                        <div className="imageContainer">\n                            <img src="./refine.svg" alt="Refine Logo" />\n                        </div>\n                        <Card title={CardTitle} headStyle={{ borderBottom: 0 }}>\n                            <Form<ILoginForm>\n                                layout="vertical"\n                                form={form}\n                                onFinish={(values) => {\n                                    login(values);\n                                }}\n                                requiredMark={false}\n                            >\n                                <Form.Item\n                                    name="email"\n                                    label="Email"\n                                    rules={[{ required: true, type: "email" }]}\n                                >\n                                    <Input size="large" placeholder="Email" />\n                                </Form.Item>\n                                <Form.Item\n                                    name="password"\n                                    label="Password"\n                                    rules={[{ required: true }]}\n                                    style={{ marginBottom: "12px" }}\n                                >\n                                    <Input\n                                        type="password"\n                                        placeholder="\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf"\n                                        size="large"\n                                    />\n                                </Form.Item>\n                                <div style={{ marginBottom: "12px" }}>\n                                    <Form.Item\n                                        name="remember"\n                                        valuePropName="checked"\n                                        noStyle\n                                    >\n                                        <Checkbox\n                                            style={{\n                                                fontSize: "12px",\n                                            }}\n                                        >\n                                            Remember me\n                                        </Checkbox>\n                                    </Form.Item>\n\n                                    <a\n                                        style={{\n                                            float: "right",\n                                            fontSize: "12px",\n                                        }}\n                                        href="#"\n                                    >\n                                        Forgot password?\n                                    </a>\n                                </div>\n                                <Button\n                                    type="primary"\n                                    size="large"\n                                    htmlType="submit"\n                                    block\n                                >\n                                    Sign in\n                                </Button>\n                            </Form>\n                            <div style={{ marginTop: 8 }}>\n                                <Text style={{ fontSize: 12 }}>\n                                    Don\u2019t have an account?{" "}\n                                    <a href="#" style={{ fontWeight: "bold" }}>\n                                        Sign up\n                                    </a>\n                                </Text>\n                            </div>\n                        </Card>\n                    </div>\n                </Col>\n            </Row>\n        </Layout>\n    );\n};\n')))),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/data-provider/appwrite/login.png",alt:"login"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"Now we can login with the user we created by Appwrite. We can then list, create and edit posts."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"refine")," resource name must be the same as Appwrite Collection ID. You can change your label with resource meta."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const App: React.FC = () => {\n    return (\n        <Refine\n            dataProvider={dataProvider(appwriteClient, {\n                databaseId: "default",\n            })}\n            liveProvider={liveProvider(appwriteClient, {\n                databaseId: "default",\n            })}\n            options={{ liveMode: "auto" }}\n            authProvider={authProvider}\n            routerProvider={routerProvider}\n            Layout={Layout}\n            ReadyPage={ReadyPage}\n            notificationProvider={notificationProvider}\n            catchAll={<ErrorComponent />}\n            LoginPage={Login}\n            resources={[\n                {\n                    //highlight-start\n                    name: "61bc3660648a6",\n                    //highlight-end\n                    meta: {\n                        //highlight-start\n                        label: "Post",\n                        //highlight-end\n                    },\n                },\n            ]}\n        />\n    );\n};\n\nexport default App;\n'))),(0,r.kt)("h2",{id:"list-page"},"List Page"),(0,r.kt)("p",null,"Now that we've created our collections, we can create and list documents. Let's list the posts and categories that we have created by Appwrite with ",(0,r.kt)("strong",{parentName:"p"},"refine"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show Code"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useMany } from "@refinedev/core";\nimport {\n    List,\n    TextField,\n    useTable,\n    EditButton,\n    ShowButton,\n    getDefaultSortOrder,\n} from "@refinedev/antd";\nimport { Table, Space } from "antd";\n\nimport { IPost, ICategory } from "interfaces";\n\nexport const PostsList: React.FC = () => {\n    const { tableProps, sorter } = useTable<IPost>({\n        sorters: {\n            initial: [\n                {\n                    field: "$id",\n                    order: "asc",\n                },\n            ],\n        },\n    });\n\n    const categoryIds =\n        tableProps?.dataSource?.map((item) => item.categoryId) ?? [];\n    const { data, isLoading } = useMany<ICategory>({\n        resource: "61bc4afa9ee2c",\n        ids: categoryIds,\n        queryOptions: {\n            enabled: categoryIds.length > 0,\n        },\n    });\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column\n                    dataIndex="id"\n                    title="ID"\n                    sorter\n                    defaultSortOrder={getDefaultSortOrder("id", sorter)}\n                />\n                <Table.Column dataIndex="title" title="Title" sorter />\n                <Table.Column\n                    dataIndex="categoryId"\n                    title="Category"\n                    render={(value) => {\n                        if (isLoading) {\n                            return <TextField value="Loading..." />;\n                        }\n\n                        return (\n                            <TextField\n                                value={\n                                    data?.data.find((item) => item.id === value)\n                                        ?.title\n                                }\n                            />\n                        );\n                    }}\n                />\n                <Table.Column<IPost>\n                    title="Actions"\n                    dataIndex="actions"\n                    render={(_, record) => (\n                        <Space>\n                            <EditButton\n                                hideText\n                                size="small"\n                                recordItemId={record.id}\n                            />\n                            <ShowButton\n                                hideText\n                                size="small"\n                                recordItemId={record.id}\n                            />\n                        </Space>\n                    )}\n                />\n            </Table>\n        </List>\n    );\n};\n')))),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/data-provider/appwrite/list.png",alt:"list"}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"create-page"},"Create Page"),(0,r.kt)("p",null,"We can now create posts and set categories from our ",(0,r.kt)("strong",{parentName:"p"},"refine")," UI."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show Code"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useState } from "react";\n\nimport { Create, useForm, useSelect } from "@refinedev/antd";\nimport { Form, Input, Select, Upload } from "antd";\nimport { RcFile } from "antd/lib/upload/interface";\n\nimport MDEditor from "@uiw/react-md-editor";\n\nimport { IPost, ICategory } from "interfaces";\nimport { storage, normalizeFile } from "utility";\n\nexport const PostsCreate: React.FC = () => {\n    const { formProps, saveButtonProps } = useForm<IPost>();\n\n    const { selectProps: categorySelectProps } = useSelect<ICategory>({\n        resource: "61bc4afa9ee2c",\n        optionLabel: "title",\n        optionValue: "id",\n    });\n\n    return (\n        <Create saveButtonProps={saveButtonProps}>\n            <Form {...formProps} layout="vertical">\n                <Form.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n                <Form.Item\n                    label="Category"\n                    name="categoryId"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Select {...categorySelectProps} />\n                </Form.Item>\n                <Form.Item\n                    label="Content"\n                    name="content"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <MDEditor data-color-mode="light" />\n                </Form.Item>\n                <Form.Item label="Images">\n                    <Form.Item\n                        name="images"\n                        valuePropName="fileList"\n                        normalize={normalizeFile}\n                        noStyle\n                    >\n                        <Upload.Dragger\n                            name="file"\n                            listType="picture"\n                            multiple\n                            customRequest={async ({\n                                file,\n                                onError,\n                                onSuccess,\n                            }) => {\n                                try {\n                                    const rcFile = file as RcFile;\n\n                                    const { $id } = await storage.createFile(\n                                        "default",\n                                        rcFile.name,\n                                        rcFile,\n                                    );\n\n                                    const url = storage.getFileView(\n                                        "default",\n                                        $id,\n                                    );\n\n                                    onSuccess?.({ url }, new XMLHttpRequest());\n                                } catch (error) {\n                                    onError?.(new Error("Upload Error"));\n                                }\n                            }}\n                        >\n                            <p className="ant-upload-text">\n                                Drag &amp; drop a file in this area\n                            </p>\n                        </Upload.Dragger>\n                    </Form.Item>\n                </Form.Item>\n            </Form>\n        </Create>\n    );\n};\n')))),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/data-provider/appwrite/create.gif",alt:"create"}),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"As we mentioned above, we need permissions to list or create documents in Appwrite. By default, Read Access and Write Access are public when creating documents from ",(0,r.kt)("strong",{parentName:"p"},"refine")," UI."),(0,r.kt)("p",{parentName:"admonition"},"If you want to restrict ",(0,r.kt)("a",{parentName:"p",href:"https://appwrite.io/docs/permissions#permission-types"},"permissions")," and only allow specific users, you need to specify it in meta."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Permission, Role } from "@refinedev/appwrite";\nconst { formProps, saveButtonProps } = useForm<IPost>({\n    meta: {\n        writePermissions: [Permission.read(Role.any())],\n        readPermissions: [Permission.read(Role.any())],\n    },\n});\n'))),(0,r.kt)("h2",{id:"edit-page"},"Edit Page"),(0,r.kt)("p",null,"You can edit the posts and categories we have created update your data."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show Code"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\n\nimport { Edit, useForm, useSelect } from "@refinedev/antd";\nimport { Form, Input, Select, Upload } from "antd";\nimport { RcFile } from "antd/lib/upload/interface";\n\nimport MDEditor from "@uiw/react-md-editor";\n\nimport { IPost, ICategory } from "interfaces";\nimport { storage, normalizeFile } from "utility";\n\nexport const PostsEdit: React.FC = () => {\n    const { formProps, saveButtonProps, queryResult } = useForm<IPost>();\n\n    const postData = queryResult?.data?.data;\n    const { selectProps: categorySelectProps } = useSelect<ICategory>({\n        resource: "61bc4afa9ee2c",\n        defaultValue: postData?.categoryId,\n        optionLabel: "title",\n        optionValue: "id",\n    });\n\n    return (\n        <Edit saveButtonProps={saveButtonProps}>\n            <Form {...formProps} layout="vertical">\n                <Form.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n                <Form.Item\n                    label="Category"\n                    name="categoryId"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Select {...categorySelectProps} />\n                </Form.Item>\n                <Form.Item\n                    label="Content"\n                    name="content"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <MDEditor data-color-mode="light" />\n                </Form.Item>\n                <Form.Item label="Images">\n                    <Form.Item\n                        name="images"\n                        valuePropName="fileList"\n                        normalize={normalizeFile}\n                        noStyle\n                    >\n                        <Upload.Dragger\n                            name="file"\n                            listType="picture"\n                            multiple\n                            customRequest={async ({\n                                file,\n                                onError,\n                                onSuccess,\n                            }) => {\n                                try {\n                                    const rcFile = file as RcFile;\n\n                                    const { $id } = await storage.createFile(\n                                        "default",\n                                        rcFile.name,\n                                        rcFile,\n                                    );\n\n                                    const url = storage.getFileView(\n                                        "default",\n                                        $id,\n                                    );\n\n                                    onSuccess?.({ url }, new XMLHttpRequest());\n                                } catch (error) {\n                                    onError?.(new Error("Upload Error"));\n                                }\n                            }}\n                        >\n                            <p className="ant-upload-text">\n                                Drag &amp; drop a file in this area\n                            </p>\n                        </Upload.Dragger>\n                    </Form.Item>\n                </Form.Item>\n            </Form>\n        </Edit>\n    );\n};\n')))),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/data-provider/appwrite/edit.png",alt:"edit"}),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("admonition",{type:"additional"},(0,r.kt)("p",{parentName:"admonition"},"Username: ",(0,r.kt)("inlineCode",{parentName:"p"},"demo@refine.dev")),(0,r.kt)("p",{parentName:"admonition"},"Password: ",(0,r.kt)("inlineCode",{parentName:"p"},"demodemo"))),(0,r.kt)(m,{path:"data-provider-appwrite",mdxType:"CodeSandboxExample"}))}f.isMDXComponent=!0}}]);