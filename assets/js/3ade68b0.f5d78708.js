"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41417],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(99104),s=n(72389);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},f=e=>{var t;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:f,onClick:m},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":l===t})}),n??t)})))}function p(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function m(e){const t=(0,l.Y)(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement(d,(0,a.Z)({},e,t)),r.createElement(p,(0,a.Z)({},e,t)))}function f(e){const t=(0,s.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},99104:(e,t,n)=>{n.d(t,{Y:()=>d});var a=n(67294),r=n(76775),o=n(91980);var i=n(50012);function l(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function s(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??l(n);return function(e){const t=(void 0===(a=(e,t)=>e.value===t.value)&&(a=(e,t)=>e===t),(n=e).filter(((e,t)=>n.findIndex((t=>a(t,e)))!==t)));var n,a;if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:n}=e;const i=(0,r.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(i.location.search);t.set(l,e),i.replace({...i.location,search:t.toString()})}),[l,i])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=s(e),[l,d]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[p,m]=c({queryString:n,groupId:r}),[f,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,i.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),v=(()=>{const e=p??f;return u({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{v&&d(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);d(e),m(e),h(e)}),[m,h,o]),tabValues:o}}},14314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),i=n(85162);const l={id:"faq",title:"FAQ"},s=void 0,u={unversionedId:"faq",id:"version-3.xx.xx/faq",title:"FAQ",description:"How can I change the form data before submitting it to the API?",source:"@site/versioned_docs/version-3.xx.xx/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/3.xx.xx/faq",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/faq.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1686577105,formattedLastUpdatedAt:"Jun 12, 2023",frontMatter:{id:"faq",title:"FAQ"},sidebar:"someSidebar",previous:{title:"Comparison | Refine vs React-Admin vs AdminBro vs Retool vs Redwood",permalink:"/docs/3.xx.xx/comparison"},next:{title:"Contributing",permalink:"/docs/3.xx.xx/contributing"}},c={},d=[{value:"How can I change the form data before submitting it to the API?",id:"how-can-i-change-the-form-data-before-submitting-it-to-the-api",level:2},{value:"How can I refetch data?",id:"how-can-i-refetch-data",level:2},{value:"How can I request an API with nested route?",id:"how-can-i-request-an-api-with-nested-route",level:2},{value:"How can I ensure a query is only run after a certain variable is available and not on load?",id:"how-can-i-ensure-a-query-is-only-run-after-a-certain-variable-is-available-and-not-on-load",level:2},{value:"Can I work with JavaScript?",id:"can-i-work-with-javascript",level:2},{value:"How I can override specific function of Data Providers?",id:"how-i-can-override-specific-function-of-data-providers",level:2},{value:"Why are API calls triggering twice",id:"why-are-api-calls-triggering-twice",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-can-i-change-the-form-data-before-submitting-it-to-the-api"},"How can I change the form data before submitting it to the API?"),(0,r.kt)("p",null,"You may need to modify the form data before it is sent to the API."),(0,r.kt)("p",null,"For example, Let's send the values we received from the user in two separate inputs, ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"surname"),", to the API as ",(0,r.kt)("inlineCode",{parentName:"p"},"fullName"),"."),(0,r.kt)(o.Z,{defaultValue:"core",values:[{label:"Core Form",value:"core"},{label:"Ant Design Form",value:"antd"},{label:"React Hook Form",value:"react-hook-form"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"core",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport { useForm } from "@pankod/refine-core";\n\nexport const UserCreate: React.FC = () => {\n    const [name, setName] = useState();\n    const [surname, setSurname] = useState();\n\n    const { onFinish } = useForm();\n\n    const onSubmit = (e) => {\n        e.preventDefault();\n        const fullName = `${name} ${surname}`;\n        onFinish({\n            fullName: fullName,\n            name,\n            surname,\n        });\n    };\n\n    return (\n        <form onSubmit={onSubmit}>\n            <input onChange={(e) => setName(e.target.value)} />\n            <input onChange={(e) => setSurname(e.target.value)} />\n            <button type="submit">Submit</button>\n        </form>\n    );\n};\n'))),(0,r.kt)(i.Z,{value:"antd",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useForm, Form, Input } from "@pankod/refine-antd";\n\nexport const UserCreate: React.FC = () => {\n    const { formProps } = useForm();\n\n    return (\n        <Form\n            {...formProps}\n            onFinish={(values) => {\n                const { name, surname } = values;\n                const fullName = `${name} ${surname}`;\n\n                return (\n                    formProps.onFinish &&\n                    formProps.onFinish({\n                        ...values,\n                        fullName,\n                    })\n                );\n            }}\n        >\n            <Form.Item label="Name" name="name">\n                <Input />\n            </Form.Item>\n            <Form.Item label="Surname" name="surname">\n                <Input />\n            </Form.Item>\n        </Form>\n    );\n};\n'))),(0,r.kt)(i.Z,{value:"react-hook-form",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useForm } from "@pankod/refine-react-hook-form";\n\nexport const UserCreate: React.FC = () => {\n    const {\n        refineCore: { onFinish, formLoading },\n        register,\n        handleSubmit,\n    } = useForm();\n\n    const handleSubmitPostCreate = (values) => {\n        const { name, surname } = values;\n        const fullName = `${name} ${surname}`;\n        onFinish({\n            ...value,\n            fullName,\n        });\n    };\n\n    return (\n        <form onSubmit={handleSubmit(handleSubmitPostCreate)}>\n            <input {...register("name")} />\n            <input {...register("surname")} />\n        </form>\n    );\n};\n')))),(0,r.kt)("h2",{id:"how-can-i-refetch-data"},"How can I refetch data?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Refine")," automatically invalidates the affected resources after mutations. However, in some cases you may want to refetch manually."),(0,r.kt)(o.Z,{defaultValue:"refetch",values:[{label:"React Query Refetch",value:"refetch"},{label:"useInvalidate Hook",value:"useinvalidate"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"refetch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTable, useForm, useShow } from "@pankod/refine-core";\n\n// All "data" related hooks provided by Refine can use queryResult\' refetch function\nconst { tableQueryResult: { refetch } } = useTable();\nconst { queryResult: { refetch } } = useForm();\n...\n...\nconst { queryResult: { refetch } } = useShow();\n...\n...\n'))),(0,r.kt)(i.Z,{value:"useinvalidate",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useInvalidate } from "@pankod/refine-core";\n\nconst invalidate = useInvalidate();\n\n// To invalidate the list and many states of the Posts resource\ninvalidate({\n    resource: "posts",\n    invalidates: ["list", "many"],\n});\n\n// To invalidate the state of a Posts with an id of 1\ninvalidate({\n    resource: "posts",\n    invalidates: ["detail"],\n    id: 1,\n});\n\n// To invalidate the list and many states of the Posts resource of the dataProvider named "second-data-provider"\ninvalidate({\n    resource: "posts",\n    dataProviderName: "second-data-provider",\n    invalidates: ["list"],\n});\n\n// To invalidate all states of dataprovider named "second-data-provider"\ninvalidate({\n    dataProviderName: "second-data-provider",\n    invalidates: ["all"],\n});\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/invalidate/useInvalidate"},"Refer to the ",(0,r.kt)("strong",{parentName:"a"},"refine")," useInvalidate hook documentation for more information. \u2192")))),(0,r.kt)("h2",{id:"how-can-i-request-an-api-with-nested-route"},"How can I request an API with nested route?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Refine"),"'s way of doing this is with the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," property on all data hooks. You can think of the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," property as the URL."),(0,r.kt)("p",null,"For example, If you want to make a request of the URL ",(0,r.kt)("inlineCode",{parentName:"p"},"/user/1/posts"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTable, useOne } from "@pankod/refine-core";\n\nuseTable({\n    resource: "/users/1/posts",\n});\n')),(0,r.kt)("h2",{id:"how-can-i-ensure-a-query-is-only-run-after-a-certain-variable-is-available-and-not-on-load"},"How can I ensure a query is only run after a certain variable is available and not on load?"),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," related hooks (",(0,r.kt)("inlineCode",{parentName:"p"},"useMany"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useOne"),", etc.) can also accept all ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," options, which allows you to implement dependent queries whereby a query is only run after a certain data is available. This is particularly useful if you want ",(0,r.kt)("inlineCode",{parentName:"p"},"useMany")," to only run after a certain data is available and not on load."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/guides/dependent-queries"},"Refer to react-query docs on ",(0,r.kt)("strong",{parentName:"a"},"dependent queries")," for more information \u2192 ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Suppose you want this query to run after ",(0,r.kt)("inlineCode",{parentName:"li"},"categoryIds")," is fetched by a preceding query, you can set ",(0,r.kt)("inlineCode",{parentName:"li"},"enabled")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"categoryIds.length > 0"),". This will ensure that ",(0,r.kt)("inlineCode",{parentName:"li"},"useMany")," is only run after ",(0,r.kt)("inlineCode",{parentName:"li"},"categoryIds")," is fetched.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useMany({\n    resource: "categories",\n    ids: categoryIds,\n    // highlight-next-line\n    queryOptions: { enabled: categoryIds.length > 0 },\n});\n')),(0,r.kt)("h2",{id:"can-i-work-with-javascript"},"Can I work with JavaScript?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Yes!")," You can work with JavaScript!"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/with-javascript"},"Refer to ",(0,r.kt)("strong",{parentName:"a"},"Refine JavaScript")," example \u2192 ")),(0,r.kt)("h2",{id:"how-i-can-override-specific-function-of-data-providers"},"How I can override specific function of Data Providers?"),(0,r.kt)("p",null,"In some cases, you may need to override functions of Refine data providers. The simplest way to do this is to use the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"},"Spread syntax")),(0,r.kt)("p",null,"For example, Let's override the ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," function of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/next/packages/simple-rest"},(0,r.kt)("inlineCode",{parentName:"a"},"@pankod/refine-simple-rest")),". ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-simple-rest")," uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," HTTP method for ",(0,r.kt)("inlineCode",{parentName:"p"},"update"),", let's change it to ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")," without forking the whole data provider."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import dataProvider from "@pankod/refine-simple-rest";\n\nconst simpleRestProvider = dataProvider("API_URL");\nconst myDataProvider = {\n    ...simpleRestProvider,\n    update: async ({ resource, id, variables }) => {\n        const url = `${apiUrl}/${resource}/${id}`;\n\n        const { data } = await httpClient.put(url, variables);\n\n        return {\n            data,\n        };\n    },\n};\n\n<Refine dataProvider={myDataProvider} />;\n')),(0,r.kt)("p",null,"What if we want to select ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," on a request basis?"),(0,r.kt)("p",null,"\ud83d\udca5 We can use ",(0,r.kt)("inlineCode",{parentName:"p"},"metaData")," for this. Remember, ",(0,r.kt)("inlineCode",{parentName:"p"},"metaData")," can be used in all ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"form")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"table")," hooks"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'// PATCH Request\nuseUpdate({\n    resource: "this-is-patch",\n    id: 1,\n    variables: {\n        foo: "bar",\n    },\n    metaData: {\n        httpMethod: "patch",\n    },\n});\n\n// PUT Request\nuseUpdate({\n    resource: "this-is-put",\n    id: 1,\n    variables: {\n        foo: "bar",\n    },\n    metaData: {\n        httpMethod: "put",\n    },\n});\n\nconst simpleRestProvider = dataProvider("API_URL");\nconst myDataProvider = {\n    ...simpleRestProvider,\n    update: async ({ resource, id, variables, metaData }) => {\n        const method = metaData.httpMethod ?? "patch";\n\n        const url = `${apiUrl}/${resource}/${id}`;\n\n        const { data } = await httpClient[method](url, variables);\n\n        return {\n            data,\n        };\n    },\n};\n')),(0,r.kt)("h2",{id:"why-are-api-calls-triggering-twice"},"Why are API calls triggering twice"),(0,r.kt)("p",null,"This is the expected behavior if you use ",(0,r.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/reference/react/StrictMode"},(0,r.kt)("inlineCode",{parentName:"a"},"<React.StrictMode>")),". In this mode, React will render the components twice in development mode to identify unsafe life cycles, unexpected side effects, and legacy or deprecated APIs. It's used for highlighting possible problems."),(0,r.kt)("admonition",{title:"note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/reference/react/StrictMode"},(0,r.kt)("inlineCode",{parentName:"a"},"<React.StrictMode>"))," checks are run in development mode only; they do not impact the production build.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/reference/react/StrictMode"},(0,r.kt)("inlineCode",{parentName:"a"},"<React.StrictMode>")," documentation")," for more information. ","\u2192")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/TanStack/query/issues/3633"},"TanStack Query issue")," for more information. ","\u2192")))}m.isMDXComponent=!0}}]);