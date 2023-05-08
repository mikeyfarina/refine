"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,h=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"How to use React Fragments?",description:"We'll cover what React Fragments are, differences between React Fragments and Div elements.",slug:"how-react-fragments-is-works",authors:"clara_ekekenta",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-02-react-fragments/social.png",hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/how-react-fragments-is-works",source:"@site/blog/2022-10-02-react-fragments.md",title:"How to use React Fragments?",description:"We'll cover what React Fragments are, differences between React Fragments and Div elements.",date:"2022-10-02T00:00:00.000Z",formattedDate:"October 2, 2022",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:5.455,hasTruncateMarker:!1,authors:[{name:"Clara Ekekenta",title:"Software Engineer",imageURL:"/img/generic-profile.png",key:"clara_ekekenta"}],frontMatter:{title:"How to use React Fragments?",description:"We'll cover what React Fragments are, differences between React Fragments and Div elements.",slug:"how-react-fragments-is-works",authors:"clara_ekekenta",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-02-react-fragments/social.png",hide_table_of_contents:!1},prevItem:{title:"A Guide on TypeScript Omit Type",permalink:"/blog/typescript-omit-utility-type"},nextItem:{title:"A Detailed Guide on TypeScript Pick Type",permalink:"/blog/typescript-pick-utility-type"},relatedPosts:[{title:"How to implement a date picker in React",permalink:"/blog/react-date-picker",formattedDate:"May 3, 2023",authors:[{name:"Irakli Tchigladze",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"irakli_tchigladze"}],readingTime:12.55,date:"2023-05-03T00:00:00.000Z"},{title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",permalink:"/blog/refine-invoice-generator",formattedDate:"March 1, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:14.195,date:"2022-03-01T00:00:00.000Z"},{title:"Build Fast and Customizable Admin Panel with NestJS",permalink:"/blog/customizable-admin-panel-with-nestjs",formattedDate:"October 4, 2021",authors:[{name:"Y\u0131ld\u0131ray \xdcnl\xfc",title:"Software Developer",url:"https://github.com/yildirayunlu",imageURL:"https://github.com/yildirayunlu.png",key:"yildiray"}],readingTime:4.4,date:"2021-10-04T00:00:00.000Z"}],authorPosts:[{title:"When to use dangerouslySetInnerHTML in React?",permalink:"/blog/use-react-dangerouslysetinnerhtml",formattedDate:"September 25, 2022",authors:[{name:"Clara Ekekenta",title:"Software Engineer",imageURL:"/img/generic-profile.png",key:"clara_ekekenta"}],readingTime:5.35,date:"2022-09-25T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is React Fragment?",id:"what-is-react-fragment",level:2},{value:"React Fragment vs Div Element",id:"react-fragment-vs-div-element",level:2},{value:"Problem with using div",id:"problem-with-using-div",level:2},{value:"Advantages of Fragment",id:"advantages-of-fragment",level:2},{value:"Using the key prop with React fragments",id:"using-the-key-prop-with-react-fragments",level:2},{value:"Using shortcut version",id:"using-shortcut-version",level:2},{value:"Fragment in Action",id:"fragment-in-action",level:2},{value:"Conclusion",id:"conclusion",level:2}],m={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Returning multiple elements from a component has always been problematic for React developers.\nThis is because React depends on creating a tree-like structure that is used for reconciliation. Therefore, when multiple elements are returned in the render method, the algorithm used for reconciliation will not function as expected, and the presumption that the tree will have one root node for a component will no longer be valid."),(0,r.kt)("p",null,"React Fragment fixed this problem in version 16.2 of the library."),(0,r.kt)("p",null,"Steps we'll cover:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#what-is-react-fragment"},"What is React Fragment?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#react-fragment-vs-div-element"},"React Fragment vs Div Element")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#problem-with-using-div"},"Problem with using div")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#advantages-of-fragment"},"Advantages of Fragment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#using-the-key-prop-with-react-fragments"},"Using the key prop with React fragments")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#using-shortcut-version"},"Using shortcut version")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#fragment-in-action"},"Fragment in Action"))),(0,r.kt)("h2",{id:"what-is-react-fragment"},"What is React Fragment?"),(0,r.kt)("p",null,"React Fragment is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM."),(0,r.kt)("p",null,"To return multiple elements from a React component, you'll need to wrap the element in a root element. This approach has not been efficient and may cause issues in some cases. Eg."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function TableData () {\n  return  (\n    <div>\n      <td>Eat</td>\n      <td>Learn</td>\n      <td>Code</td>\n    </div>\n  );\n}\n\nfunction Table () {\n  return (\n    <table>\n      <tr>\n        <TableData />\n      </tr>\n    </table>\n  );\n}\n")),(0,r.kt)("p",null,"The above code will produce the HTML equivalent below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<table>\n  <tr>\n    <div>\n       <td>Eat</td>\n      <td>Learn</td>\n      <td>Code</td>\n    </div>\n  </tr>\n</table>\n")),(0,r.kt)("p",null,"So as you can see that wrapping the ",(0,r.kt)("inlineCode",{parentName:"p"},"<td>")," tags in a ",(0,r.kt)("inlineCode",{parentName:"p"},"div")," element breaks the table parent-child relationship. For things to work as expected, the ",(0,r.kt)("inlineCode",{parentName:"p"},"<td>")," tags have to be rendered individually without wrapping them in a ",(0,r.kt)("inlineCode",{parentName:"p"},"div")," element. In scenarios like this, it's better to use React Fragment."),(0,r.kt)("h2",{id:"react-fragment-vs-div-element"},"React Fragment vs Div Element"),(0,r.kt)("p",null,'In React, "Fragment" and "Div" are used interchangeably. The main difference between the two is that "Fragment" clears out all extra divs from a DOM tree while "Div" adds a div to the DOM tree.'),(0,r.kt)("p",null,"With React Fragments, we can create code that is cleaner and easier to read. It renders components more quickly and uses less memory. Every element is rendered as intended. While Div expands the DOM due to the long nested nodes that occur when there are too many HTML tags on your website."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"div")," element has more methods and properties, which causes it to consume more memory which can make the page slow load time; the prototype chain is like HTMLDivElement -> HTMLElement -> Element -> Node -> EventTarget, whereas the React fragment has fewer methods with the prototype chain DocumentFragment -> Node -> EventTarget."),(0,r.kt)("p",null,"Using fragments, you can reuse parts of your application. But, like in the table example we used in the previous section, div makes it challenging to do so. However, there are situations where using div instead of a fragment is necessary."),(0,r.kt)("p",null,"For instance, utilizing fragments does not allow you to design a component since you must wrap the target elements in a div. Additionally, you must use a div if you are adding keys to the components' elements. In light of this, you can use the two interchangeably depending on what you want your React application to accomplish."),(0,r.kt)("h2",{id:"problem-with-using-div"},"Problem with using div"),(0,r.kt)("p",null,"Let's look at some of the problems in using div in detail."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The div element expands the HTML DOM, causing the browser to consume more resources than expected."),(0,r.kt)("li",{parentName:"ul"},"When the DOM is too large, it consumes a lot of memory, causing the pages to load slowly in the browser."),(0,r.kt)("li",{parentName:"ul"},"Debugging and tracing the origin of the extra nodes becomes more difficult as the DOM grows larger and more nested."),(0,r.kt)("li",{parentName:"ul"},"Using div to render components may cause performance issues by clogging your HTML.")),(0,r.kt)("h2",{id:"advantages-of-fragment"},"Advantages of Fragment"),(0,r.kt)("p",null,"React Fragment replaces the ",(0,r.kt)("inlineCode",{parentName:"p"},"<div>")," element, which can cause issues with invalid HTML, with the following advantages."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The code readability of React Fragment is higher."),(0,r.kt)("li",{parentName:"ul"},"Because React fragments have a smaller DOM, they render faster and use less memory."),(0,r.kt)("li",{parentName:"ul"},"React Fragment allows React components to be rendered as intended without causing any parent-child relationship issues."),(0,r.kt)("li",{parentName:"ul"},"Fragments allow the return of multiple JSX elements, which addresses the issue of invalid HTML markups within react applications that were caused by the must-have constraint of only one element returning per component.")),(0,r.kt)("h2",{id:"using-the-key-prop-with-react-fragments"},"Using the key prop with React fragments"),(0,r.kt)("p",null,"In some cases, the key prop is required in a React application. In react, the key props are typically used to control component instances. React uses the key prop in scenarios like this to identify which items changed, removed, or added. Using the key props in a React application with fragments will be like the code snippet below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function TableData () {\n  return  (\n       {data.map(rec=>\n        <React.Fragment key={rec.id}>\n           <td>{rec.hobby}</td>\n        </React.Fragment>\n      )}\n  );\n}\n")),(0,r.kt)("h2",{id:"using-shortcut-version"},"Using shortcut version"),(0,r.kt)("p",null,"Aside from using React Fragment, React also provides a shorthand notation ",(0,r.kt)("inlineCode",{parentName:"p"},"<></>")," to wrap multiple elements together that works similarly to React Fragment but with a lower memory load. In a react application, the shorthand notation ",(0,r.kt)("inlineCode",{parentName:"p"},"<></>")," is implemented as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<function TableData () {\n  return  (\n    <>\n      <td>Eat</td>\n      <td>Learn</td>\n      <td>Code</td>\n    <>\n  );\n}\n")),(0,r.kt)("p",null,"The above code will produce the expected HTML equivalent below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<table>\n  <tr>\n    <div>\n       <td>Eat</td>\n      <td>Learn</td>\n      <td>Code</td>\n    </div>\n  </tr>\n</table>\n")),(0,r.kt)("p",null,"However, there are some drawbacks to this approach. For example, implementing the key props is impossible because the shorthand notation ",(0,r.kt)("inlineCode",{parentName:"p"},"<></>")," will not work here. After all, it cannot take an attribute."),(0,r.kt)("h2",{id:"fragment-in-action"},"Fragment in Action"),(0,r.kt)("p",null,"Now let's see how fragments are used in a React application. In the example below, we'll use the React Fragment to render a list of items in a table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import "./App.css";\nimport React from "react";\n\nconst Table = ({ children, style }) => {\n  return <div>{children}</div>;\n};\n\nconst TableData = () => {\n  return (\n    <React.Fragment>\n      <td>John Doe</td>\n      <td>16</td>\n      <td>Developer</td>;\n    </React.Fragment>\n  );\n}\n\nfunction App() {\n  return (\n    <Table>\n      <tr>\n        <th>Name</th>\n        <th>Age</th>\n        <th>Occupation</th>\n      </tr>\n      <TableData />\n    </Table>\n  );\n}\nexport default App;\n')),(0,r.kt)("p",null,"In the above code snippet, we created two components that we to be rendered in our application. In the render method, we used React Fragment instead of wrapping the elements in the TableData components in a div. This way, our table data will be rendered as expected."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Throughout this tutorial, you've learned about React Fragment. We started by knowing what a React Fragment is and when to use it in a React application. Then we went further to demonstrate how it's used in a practical application."))}p.isMDXComponent=!0}}]);