"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91035],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=i,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27026:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const s={id:"useRegister",title:"useRegister",siderbar_label:"useRegister",description:"useRegister data hook from refine is a modified version of react-query's useMutation for registration."},u=void 0,l={unversionedId:"api-reference/core/hooks/auth/useRegister",id:"version-3.xx.xx/api-reference/core/hooks/auth/useRegister",title:"useRegister",description:"useRegister data hook from refine is a modified version of react-query's useMutation for registration.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useRegister.md",sourceDirName:"api-reference/core/hooks/auth",slug:"/api-reference/core/hooks/auth/useRegister",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useRegister",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useRegister.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1690553710,formattedLastUpdatedAt:"Jul 28, 2023",frontMatter:{id:"useRegister",title:"useRegister",siderbar_label:"useRegister",description:"useRegister data hook from refine is a modified version of react-query's useMutation for registration."},sidebar:"someSidebar",previous:{title:"usePermissions",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/usePermissions"},next:{title:"useForgotPassword",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useForgotPassword"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Logged In after successful registration",id:"logged-in-after-successful-registration",level:2},{value:"Redirection after register",id:"redirection-after-register",level:2}],m={toc:c};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useRegister")," calls ",(0,n.kt)("inlineCode",{parentName:"p"},"register")," method from ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood. It registers the app if ",(0,n.kt)("inlineCode",{parentName:"p"},"register")," method from ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," resolves and if it rejects shows an error notification."),(0,n.kt)("p",null,"It returns the result of ",(0,n.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,n.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"useMutation"),"."),(0,n.kt)("p",null,"Data that is resolved from ",(0,n.kt)("inlineCode",{parentName:"p"},"register")," will be returned as the ",(0,n.kt)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Normally refine provides a default register page. If you prefer to use this default register page, there is no need to handle register flow manually.",(0,n.kt)("br",{parentName:"p"}),"\n","If we want to build a custom register page instead of the default one that comes with ",(0,n.kt)("strong",{parentName:"p"},"refine"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"useRegister")," can be used like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/customRegisterPage"',title:'"pages/customRegisterPage"'},'import { useRegister } from "@pankod/refine-core";\n\ntype RegisterVariables = {\n    email: string;\n    password: string;\n};\n\nexport const RegisterPage = () => {\n    const { mutate: register } = useRegister<RegisterVariables>();\n\n    const onSubmit = (values: RegisterVariables) => {\n        register(values);\n    };\n\n    return (\n        <form onSubmit={onSubmit}>\n            <label>Email</label>\n            <input name="email" value="test@refine.com" />\n            <label>Password</label>\n            <input name="password" value="refine" />\n            <button type="submit">Submit</button>\n        </form>\n    );\n};\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"mutate")," acquired from ",(0,n.kt)("inlineCode",{parentName:"p"},"useRegister")," can accept any kind of object for values since ",(0,n.kt)("inlineCode",{parentName:"p"},"register")," method from ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," doesn't have a restriction on its parameters.",(0,n.kt)("br",{parentName:"p"}),"\n","A type parameter for the values can be provided to ",(0,n.kt)("inlineCode",{parentName:"p"},"useRegister"),"."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const { mutate: register } = useRegister<{ email: string; password: string }>();\n"))),(0,n.kt)("h2",{id:"logged-in-after-successful-registration"},"Logged In after successful registration"),(0,n.kt)("p",null,"If you want to log in the user after successful registration, you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"useLogin")," hook after ",(0,n.kt)("inlineCode",{parentName:"p"},"useRegister")," hook ",(0,n.kt)("inlineCode",{parentName:"p"},"onSuccess")," callback."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/customRegisterPage"',title:'"pages/customRegisterPage"'},'import { useRegister, useLogin } from "@pankod/refine-core";\n\ntype FormVariables = {\n    email: string;\n    password: string;\n};\n\nexport const RegisterPage = () => {\n    const { mutate: register } = useRegister<FormVariables>();\n    const { mutate: login } = useLogin<FormVariables>();\n\n    const onSubmit = (values: FormVariables) => {\n        register(values, {\n            //highlight-start\n            onSuccess: () => {\n                login(values);\n            },\n            //highlight-end\n        });\n    };\n\n    return (\n        <form onSubmit={onSubmit}>\n            <label>Email</label>\n            <input name="email" value="test@refine.com" />\n            <label>Password</label>\n            <input name="password" value="refine" />\n            <button type="submit">Submit</button>\n        </form>\n    );\n};\n')),(0,n.kt)("h2",{id:"redirection-after-register"},"Redirection after register"),(0,n.kt)("p",null,"We have 2 options for redirecting the app after registering successfully ."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A custom url can be resolved from the promise returned from the ",(0,n.kt)("inlineCode",{parentName:"li"},"register")," method of the ",(0,n.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},"authProvider"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const authProvider: AuthProvider = {\n    ...\n    register: () => {\n        ...\n        return Promise.resolve("/custom-url");\n    }\n}\n')),(0,n.kt)("p",null,"A custom url can be given to mutate the function from the ",(0,n.kt)("inlineCode",{parentName:"p"},"useRegister")," hook if you want to redirect yourself to a certain url."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useRegister } from "@pankod/refine-core";\n\nconst { mutate: register } = useRegister();\n\nregister({ redirectPath: "/custom-url" });\n')),(0,n.kt)("p",null,"Then, you can handle this url in your ",(0,n.kt)("inlineCode",{parentName:"p"},"register")," method of the ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"\nconst authProvider: AuthProvider = {\n    ...\n    register: ({ redirectPath }) => {\n        ...\n        return Promise.resolve(redirectPath);\n    }\n}\n\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If the promise returned from the ",(0,n.kt)("inlineCode",{parentName:"li"},"register")," method of the ",(0,n.kt)("inlineCode",{parentName:"li"},"authProvider")," gets resolved with ",(0,n.kt)("inlineCode",{parentName:"li"},"false")," no redirection will occur.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const authProvider: AuthProvider = {\n    ...\n    register: () => {\n        ...\n        return Promise.resolve(false);\n    }\n}\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If the promise returned from ",(0,n.kt)("inlineCode",{parentName:"p"},"register")," is resolved with nothing, app will be redirected to the ",(0,n.kt)("inlineCode",{parentName:"p"},"/")," route by default.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This hook can only be used if ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.")))}d.isMDXComponent=!0}}]);