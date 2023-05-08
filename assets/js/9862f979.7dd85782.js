"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2109],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={id:"list-search",title:"List Search"},a=void 0,s={unversionedId:"advanced-tutorials/search/list-search",id:"advanced-tutorials/search/list-search",title:"List Search",description:"We will examine how to make an extensive search and filtering with the useSimpleList hook that works with the Ant Design's `` component.",source:"@site/docs/advanced-tutorials/search/list-search.md",sourceDirName:"advanced-tutorials/search",slug:"/advanced-tutorials/search/list-search",permalink:"/docs/advanced-tutorials/search/list-search",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/advanced-tutorials/search/list-search.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1683544345,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{id:"list-search",title:"List Search"},sidebar:"someSidebar",previous:{title:"Mutation Mode",permalink:"/docs/advanced-tutorials/mutation-mode"},next:{title:"Search",permalink:"/docs/advanced-tutorials/search/"}},l={},c=[{value:"Example",id:"example",level:2}],d=(p="CodeSandboxExample",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var p;const m={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We will examine how to make an extensive search and filtering with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/hooks/list/useSimpleList"},(0,i.kt)("inlineCode",{parentName:"a"},"useSimpleList"))," hook that works with the Ant Design's ",(0,i.kt)("a",{parentName:"p",href:"https://ant.design/components/list"},(0,i.kt)("inlineCode",{parentName:"a"},"<List>"))," component."),(0,i.kt)("p",null,"To do this, let's list posts using the posts resource."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/list.tsx"',title:'"pages/posts/list.tsx"'},'import { useMany } from "@refinedev/core";\nimport {\n    List,\n    // highlight-next-line\n    useSimpleList,\n    NumberField,\n} from "@refinedev/antd";\nimport { List as AntdList, Typography, Space } from "antd";\n\nconst { Text } = Typography;\n\nexport const PostList: React.FC = () => {\n    // highlight-next-line\n    const { listProps } = useSimpleList<IPost>();\n\n    const categoryIds =\n        listProps?.dataSource?.map((item) => item.category.id) ?? [];\n    const { data } = useMany<ICategory>({\n        resource: "categories",\n        ids: categoryIds,\n        queryOptions: {\n            enabled: categoryIds.length > 0,\n        },\n    });\n\n    const renderItem = (item: IPost) => {\n        const { title, hit, content } = item;\n\n        const categoryTitle = data?.data.find(\n            (category: ICategory) => category.id === item.category.id,\n        )?.title;\n\n        return (\n            <AntdList.Item\n                actions={[\n                    <Space key={item.id} direction="vertical" align="end">\n                        <NumberField\n                            value={hit}\n                            options={{\n                                notation: "compact",\n                            }}\n                        />\n                        <Text>{categoryTitle}</Text>\n                    </Space>,\n                ]}\n            >\n                <AntdList.Item.Meta title={title} description={content} />\n            </AntdList.Item>\n        );\n    };\n\n    return (\n        <List>\n            // highlight-next-line\n            <AntdList {...listProps} renderItem={renderItem} />\n        </List>\n    );\n};\n\ninterface ICategory {\n    id: number;\n    title: string;\n}\n\ninterface IPost {\n    id: number;\n    title: string;\n    content: string;\n    hit: number;\n    category: { id: number };\n}\n')),(0,i.kt)("p",null,"After creating the ",(0,i.kt)("inlineCode",{parentName:"p"},"<PostList>")," component, add it to the resource with ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," prop:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\nimport {\n    ThemedLayoutV2,\n    notificationProvider,\n    ErrorComponent,\n    RefineThemes,\n} from "@refinedev/antd";\nimport routerProvider, { NavigateToResource } from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { ConfigProvider } from "antd";\nimport "@refinedev/antd/dist/reset.css";\n\n// highlight-next-line\nimport { PostList } from "pages/posts";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <ConfigProvider theme={RefineThemes.Blue}>\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(API_URL)}\n                    notificationProvider={notificationProvider}\n                    // highlight-start\n                    resources={[\n                        {\n                            name: "posts",\n                            list: "/posts",\n                        },\n                    ]}\n                    //highlight-end\n                >\n                    <Routes>\n                        <Route index element={<NavigateToResource />} />\n                        <Route\n                            element={\n                                <ThemedLayoutV2>\n                                    <Outlet />\n                                </ThemedLayoutV2>\n                            }\n                        >\n                            <Route path="/posts" element={<PostList />} />\n                        </Route>\n                        <Route path="*" element={<ErrorComponent />} />\n                    </Routes>\n                </Refine>\n            </ConfigProvider>\n        </BrowserRouter>\n    );\n};\n\nexport default App;\n')),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/list-search/basic-list.png",alt:"basic list"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"We will create a form by extracting ",(0,i.kt)("inlineCode",{parentName:"p"},"searchFormProps")," from ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/hooks/list/useSimpleList"},(0,i.kt)("inlineCode",{parentName:"a"},"useSimpleList")),". We will use this form for search/filtering. We will also create an interface to determine the types of values from the form."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/list.tsx"',title:'"pages/posts/list.tsx"'},'...\n\nimport {\n    ...\n// highlight-next-line\n    CrudFilters,\n} from "@refinedev/core";\n\nexport const PostList: React.FC = () => {\n// highlight-start\n    const { listProps, searchFormProps } = useSimpleList<\n        IPost,\n        IPostFilterVariables\n    >({\n        onSearch: (params) => {\n            const filters: CrudFilters = [];\n            const { category, createdAt } = params;\n\n            filters.push(\n                {\n                    field: "category.id",\n                    operator: "eq",\n                    value: category,\n                },\n                {\n                    field: "createdAt",\n                    operator: "gte",\n                    value: createdAt ? createdAt[0].toISOString() : undefined,\n                },\n                {\n                    field: "createdAt",\n                    operator: "lte",\n                    value: createdAt ? createdAt[1].toISOString() : undefined,\n                },\n            );\n\n            return filters;\n        },\n    });\n// highlight-end\n\n    // ...\n\n    const { selectProps: categorySelectProps } = useSelect<ICategory>({\n        resource: "categories",\n    });\n\n    return (\n        <List>\n// highlight-start\n            <Form\n                {...searchFormProps}\n                layout="vertical"\n                onValuesChange={() => searchFormProps.form?.submit()}\n            >\n                <Space wrap>\n                    <Form.Item label="Category" name="category">\n                        <Select\n                            {...categorySelectProps}\n                            allowClear\n                            placeholder="Search Categories"\n                        />\n                    </Form.Item>\n                    <Form.Item label="Created At" name="createdAt">\n                        <RangePicker />\n                    </Form.Item>\n                </Space>\n            </Form>\n            <AntdList {...listProps} renderItem={renderItem} />\n// highlight-end\n        </List>\n    );\n};\n\ninterface IPostFilterVariables {\n    category: string;\n    createdAt: [Dayjs, Dayjs];\n}\n')),(0,i.kt)("p",null,"When the form is submitted, the ",(0,i.kt)("inlineCode",{parentName:"p"},"onSearch")," method runs and we get the search form values. Then the ",(0,i.kt)("inlineCode",{parentName:"p"},"listProps")," is refreshed according to the criteria."),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/list-search/form-list.png",alt:"form list"})),(0,i.kt)("br",null),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/interfaceReferences#crudfilters"},(0,i.kt)("inlineCode",{parentName:"a"},"CrudFilters"))," type object has ",(0,i.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"operator"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," properties. These properties help us to filter in which field, with which operator, and with which data.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)(d,{path:"use-simple-list-antd",mdxType:"CodeSandboxExample"}))}u.isMDXComponent=!0}}]);