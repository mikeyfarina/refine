"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43993],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"A Definitive guide on JavaScript every() Method",description:"In this post, we expound on with examples of what the JavaScript every method is, how it works.",slug:"javascript-every-method",authors:"abdullah_numan",tags:["javascript","javascript-every"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-02-js-every/social.png",hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/javascript-every-method",source:"@site/blog/2022-11-02-js-every.md",title:"A Definitive guide on JavaScript every() Method",description:"In this post, we expound on with examples of what the JavaScript every method is, how it works.",date:"2022-11-02T00:00:00.000Z",formattedDate:"November 2, 2022",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"javascript-every",permalink:"/blog/tags/javascript-every"}],readingTime:9.685,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"A Definitive guide on JavaScript every() Method",description:"In this post, we expound on with examples of what the JavaScript every method is, how it works.",slug:"javascript-every-method",authors:"abdullah_numan",tags:["javascript","javascript-every"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-02-js-every/social.png",hide_table_of_contents:!1},prevItem:{title:"esbuild - Next-generation JavaScript bundler",permalink:"/blog/what-is-esbuild"},nextItem:{title:"Top 6 Free Online Code Editors and IDEs with Pros and Cons",permalink:"/blog/6-best-online-code-editors-comparison"},relatedPosts:[{title:"Build internal tools using Low-Code with Refine, React-based framework",permalink:"/blog/build-internal-tools-using-low-code-with-refine",formattedDate:"February 21, 2022",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:9.62,date:"2022-02-21T00:00:00.000Z"},{title:"Building a CRUD app with Material UI and Strapi in React",permalink:"/blog/build-admin-panel-with-material-ui-and-strapi",formattedDate:"July 21, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:16.64,date:"2022-07-21T00:00:00.000Z"},{title:"How to Use JavaScript Array some",permalink:"/blog/javascript-some-method",formattedDate:"October 25, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.015,date:"2022-10-25T00:00:00.000Z"}],authorPosts:[{title:"How to Use JavaScript Slice Method",permalink:"/blog/javascript-slice",formattedDate:"October 17, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.215,date:"2022-10-17T00:00:00.000Z"},{title:"How to use JavaScript Ternary Operator?",permalink:"/blog/javascript-ternary-operator",formattedDate:"November 15, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:4.105,date:"2022-11-15T00:00:00.000Z"},{title:"How to use TypeScript Partial Type?",permalink:"/blog/typescript-partial-utility-type",formattedDate:"October 10, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.985,date:"2022-10-10T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"What is <code>Array.prototype.every()</code>?",id:"what-is-arrayprototypeevery",level:2},{value:"How JavaScript every Works",id:"how-javascript-every-works",level:2},{value:"JavaScript <code>every()</code> With <code>thisArg</code> Argument",id:"javascript-every-with-thisarg-argument",level:2},{value:"<code>every(callback, thisArg)</code> Doesn&#39;t Work With Arrow Functions",id:"everycallback-thisarg-doesnt-work-with-arrow-functions",level:2},{value:"<code>every(callback, thisArg)</code> Works With Non-Arrow Functions",id:"everycallback-thisarg-works-with-non-arrow-functions",level:2},{value:"Modifying the Caller Array",id:"modifying-the-caller-array",level:2},{value:"<code>every()</code> With Sparse Arrays",id:"every-with-sparse-arrays",level:2},{value:"JavaScript <code>every()</code> With Empty Arrays",id:"javascript-every-with-empty-arrays",level:2},{value:"Conclusion",id:"conclusion",level:2}],d=(c="PromotionBanner",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var c;const m={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This article is about the ",(0,i.kt)("inlineCode",{parentName:"p"},"every()")," method in JavaScript. This is the third part of the series titled ",(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/blog/javascript-some-method/"},"Handy JavaScript Iteration Methods"),"."),(0,i.kt)("p",null,"In this post, we expound on with examples of what the ",(0,i.kt)("inlineCode",{parentName:"p"},"Array.prototype.every()")," is, how it works - with and without the ",(0,i.kt)("inlineCode",{parentName:"p"},"thisArg")," and see the impact of modifying the caller array from inside."),(0,i.kt)("p",null,"We'll also discuss what happens when we call JavaScript ",(0,i.kt)("inlineCode",{parentName:"p"},"every()")," on sparse and empty arrays. But let's begin with the basics."),(0,i.kt)("p",null,"Steps we'll cover:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#what-is-arrayprototypeevery"},"What is ",(0,i.kt)("inlineCode",{parentName:"a"},"Array.prototype.every()"),"?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-javascript-every-works"},"How JavaScript every Works")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#javascript-every-with-thisarg-argument"},"JavaScript ",(0,i.kt)("inlineCode",{parentName:"a"},"every()")," With ",(0,i.kt)("inlineCode",{parentName:"a"},"thisArg")," Argument")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#everycallback-thisarg-doesnt-work-with-arrow-functions"},(0,i.kt)("inlineCode",{parentName:"a"},"every(callback, thisArg)")," Doesn't Work With Arrow Functions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#everycallback-thisarg-works-with-non-arrow-functions"},(0,i.kt)("inlineCode",{parentName:"a"},"every(callback, thisArg)")," Works With Non-Arrow Functions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#modifying-the-caller-array"},"Modifying the Caller Array")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#every-with-sparse-arrays"},(0,i.kt)("inlineCode",{parentName:"a"},"every()")," With Sparse Arrays")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#javascript-every-with-empty-arrays"},"JavaScript ",(0,i.kt)("inlineCode",{parentName:"a"},"every()")," With Empty Arrays"))),(0,i.kt)("h2",{id:"what-is-arrayprototypeevery"},"What is ",(0,i.kt)("inlineCode",{parentName:"h2"},"Array.prototype.every()"),"?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Array.prototype.every()")," is a JavaScript iteration method that checks whether every element in an array satisfies a given condition. The method is called on an array of items, and the condition is checked with a callback function, ",(0,i.kt)("inlineCode",{parentName:"p"},"callbackFn"),", and any necessary ",(0,i.kt)("inlineCode",{parentName:"p"},"thisArg")," object passed to the execution context of the callback function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Method signature\n\nevery(callbackFn)\nevery(callbackFn, thisArg)\n")),(0,i.kt)("p",null,"The first argument, ",(0,i.kt)("inlineCode",{parentName:"p"},"callbackFn"),", is mandatory, and the second argument, ",(0,i.kt)("inlineCode",{parentName:"p"},"thisArg")," is optional."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"callbackFn()"),", in turn, takes three arguments. The first is the element being traversed to, ",(0,i.kt)("inlineCode",{parentName:"p"},"element"),", which is mandatory. The second argument is the current index, ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," and the third is ",(0,i.kt)("inlineCode",{parentName:"p"},"array"),", the array being iterated. Both the second and third arguments are optional:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Method signature\n\nevery(function(element){...});\nevery(function(element, index){...});\nevery(function(element, index, array){...});\n")),(0,i.kt)("h2",{id:"how-javascript-every-works"},"How JavaScript every Works"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"JavaScript every")," tests whether ",(0,i.kt)("strong",{parentName:"p"},"all")," elements satisfy the condition specified in the callback function,",(0,i.kt)("inlineCode",{parentName:"p"},"callbackFn"),". It attempts to execute ",(0,i.kt)("inlineCode",{parentName:"p"},"callbackFn()")," once for each item in the array. If it finds one that evaluates to a falsy value, it immediately returns with the Boolean ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". Otherwise, it seeks to traverse to the end of the array and returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if all are truthy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const numbers = [1, 2, 3, 4, 5];\nconst numbersDoubled = [2, 4, 6, 8, 10];\n\nconst even = element => element % 2 === 0;\n\nconst areAllEven = numbers.every(even);\nconst areAllDoubledEven = numbersDoubled.every(even);\n\nconsole.log(areAllEven); // false\nconsole.log(areAllDoubledEven); // true\n")),(0,i.kt)("p",null,"In the chunk of code above, ",(0,i.kt)("inlineCode",{parentName:"p"},"even()")," is our callback function, which we pass to ",(0,i.kt)("inlineCode",{parentName:"p"},"every()"),". Apparently, we have at least one odd number in our ",(0,i.kt)("inlineCode",{parentName:"p"},"numbers")," array. So, ",(0,i.kt)("inlineCode",{parentName:"p"},"every()")," returns ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"areAllEven"),". In contrast, all items in ",(0,i.kt)("inlineCode",{parentName:"p"},"numbersDoubled")," are even, so we get ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"areAllDoubledEven"),"."),(0,i.kt)("h2",{id:"javascript-every-with-thisarg-argument"},"JavaScript ",(0,i.kt)("inlineCode",{parentName:"h2"},"every()")," With ",(0,i.kt)("inlineCode",{parentName:"h2"},"thisArg")," Argument"),(0,i.kt)("p",null,"We can pass in the ",(0,i.kt)("inlineCode",{parentName:"p"},"thisArg")," object to ",(0,i.kt)("inlineCode",{parentName:"p"},"every()")," to add it to the execution context of the callback function. Let's start doing that now by first making some modifications to our callback."),(0,i.kt)("p",null,"Instead of checking for an even number, let's say we want to generalize our callback function to check if the item is divisible by a given number. We would like our callback to be something like the below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function divisible(element, divisor) {\n  return element % divisor === 0;\n};\n")),(0,i.kt)("p",null,"However, we cannot pass ",(0,i.kt)("inlineCode",{parentName:"p"},"divisor")," as the second argument to ",(0,i.kt)("inlineCode",{parentName:"p"},"divisible()"),", as our callback accepts ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"array")," as the second and third arguments respectively. And it becomes overcrowded if we introduce a fourth with ",(0,i.kt)("inlineCode",{parentName:"p"},"divisor"),"."),(0,i.kt)("p",null,"We can get around this problem by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"divisor")," as a property of the ",(0,i.kt)("inlineCode",{parentName:"p"},"thisArg")," object, the second argument to JavaScript ",(0,i.kt)("inlineCode",{parentName:"p"},"every()"),". And then access the object with ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," from inside the callback:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const numbers = [1, 2, 3, 4, 5];\nconst numbersDoubled = [2, 4, 6, 8, 10];\n\nfunction divisible(element) {\n  return element % this?.divisor === 0;\n};\n\nconst areAllEven = numbers.every(divisible, { divisor: 2 });\nconst areAllDoubledEven = numbersDoubled.every(divisible, { divisor: 2 });\n\nconsole.log(areAllEven); // false\nconsole.log(areAllDoubledEven); // true\n")),(0,i.kt)("p",null,"Here, we set the ",(0,i.kt)("inlineCode",{parentName:"p"},"thisArg")," object to ",(0,i.kt)("inlineCode",{parentName:"p"},"{ divisor: 2 }"),", which leads to checking whether the item is even or not."),(0,i.kt)("p",null,"We can try other divisor options, like checking if we have a number divisible by 3 or 7. Thanks to ",(0,i.kt)("inlineCode",{parentName:"p"},"thisArg"),", this became very easily reproducible:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const areAllDivisibleByThree = numbers.every(divisible, { divisor: 3 });\nconst areAllDivisibleBySeven = numbers.every(divisible, { divisor: 7 });\n\nconsole.log(areAllDivisibleByThree); // false\nconsole.log(areAllDivisibleBySeven ); // false\n")),(0,i.kt)("h2",{id:"everycallback-thisarg-doesnt-work-with-arrow-functions"},(0,i.kt)("inlineCode",{parentName:"h2"},"every(callback, thisArg)")," Doesn't Work With Arrow Functions"),(0,i.kt)("p",null,"If we look back at the first example that involves the ",(0,i.kt)("inlineCode",{parentName:"p"},"even()")," callback, we defined it as an arrow function. And it worked."),(0,i.kt)("p",null,"We defined its extension, the ",(0,i.kt)("inlineCode",{parentName:"p"},"divisible()")," function with named declaration syntax. And it worked as well."),(0,i.kt)("p",null,"If we declare ",(0,i.kt)("inlineCode",{parentName:"p"},"divisible()")," as an arrow function, we run into problems:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const numbers = [1, 2, 3, 4, 5];\nconst numbersDoubled = [2, 4, 6, 8, 10];\n\nconst divisible = element => element % this?.divisor === 0;\n\nconst areAllDoubledEven = numbersDoubled.every(divisible, { divisor: 2 });\nconst areAllDoubledDivisibleByThree = numbersDoubled.every(divisible, { divisor: 3 });\nconst areAllDoubledDivisibleBySeven = numbersDoubled.every(divisible, { divisor: 7 });\n\nconsole.log(areAllDoubledEven); // false\nconsole.log(areAllDoubledDivisibleByThree); // false\nconsole.log(areAllDoubledDivisibleBySeven); // false\n")),(0,i.kt)("p",null,"All returning ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", although we know ",(0,i.kt)("inlineCode",{parentName:"p"},"areAllDoubledEven")," should be ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and the other two ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"If we investigate with a modified ",(0,i.kt)("inlineCode",{parentName:"p"},"divisible()")," function that logs ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," to the console, we see that ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," in strict mode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// strict mode\n\nconst numbers = [1, 2, 3, 4, 5];\nconst numbersDoubled = [2, 4, 6, 8, 10];\n\nconst divisible = element => {\n  console.log(this);\n  return element % this?.divisor === 0;\n};\n\nconst areAllDoubledEven = numbersDoubled.every(divisible, { divisor: 2 });\n\nconsole.log(areAllDoubledEven);\n// undefined\n// false\n")),(0,i.kt)("p",null,"Now, if we introduce a ",(0,i.kt)("inlineCode",{parentName:"p"},"this.divisor")," property to the lexical environment of ",(0,i.kt)("inlineCode",{parentName:"p"},"divisible()"),", we get its value logged to the console:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const numbers = [1, 2, 3, 4, 5];\nconst numbersDoubled = [2, 4, 6, 8, 10];\n\nthis.divisor = 'Hi';\n\nconst divisible = element => {\n  console.log(this);\n  return element % this.divisor === 0;\n};\n\nconst areAllDoubledEven = numbersDoubled.every(divisible, { divisor: 2 });\n\nconsole.log(areAllDoubledEven);\n// { divisor: 'Hi' }\n// false\n")),(0,i.kt)("p",null,"Here, clearly, we have ",(0,i.kt)("inlineCode",{parentName:"p"},"{ divisor: 'Hi' }")," coming from ",(0,i.kt)("inlineCode",{parentName:"p"},"divisible"),"'s closure. It turns out, the problem is due to the binding of ",(0,i.kt)("inlineCode",{parentName:"p"},"divisible()"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," to its lexical environment because of the arrow syntax. It was ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," before we introduced ",(0,i.kt)("inlineCode",{parentName:"p"},"this.divisor = 'Hi';"),". Now ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"{ divisor: 'Hi' }"),". In other words, ",(0,i.kt)("inlineCode",{parentName:"p"},"{ divisor: 2 "),"} is not being relayed to ",(0,i.kt)("inlineCode",{parentName:"p"},"divisible"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"this"),"."),(0,i.kt)("p",null,"So, ",(0,i.kt)("strong",{parentName:"p"},"JavaScript ",(0,i.kt)("inlineCode",{parentName:"strong"},"every()"))," with ",(0,i.kt)("inlineCode",{parentName:"p"},"thisArg")," does not work as expected with ",(0,i.kt)("inlineCode",{parentName:"p"},"callbackFn")," defined with arrow syntax."),(0,i.kt)("hr",null),(0,i.kt)(d,{title:"Backend devs love this React framework!",image:"/img/generic_banner.png",mdxType:"PromotionBanner"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"everycallback-thisarg-works-with-non-arrow-functions"},(0,i.kt)("inlineCode",{parentName:"h2"},"every(callback, thisArg)")," Works With Non-Arrow Functions"),(0,i.kt)("p",null,"But as we have seen before, it works with callbacks defined with named function declarations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function divisible(element) {\n  return element % this?.divisor === 0;\n};\n\nconst areAllDoubledEven = numbersDoubled.every(divisible, { divisor: 2 });\n\nconsole.log(areAllDoubledEven); // true\n")),(0,i.kt)("p",null,"It also works with anonymous function expressions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const divisible = function(element) {\n  return element % this?.divisor === 0;\n};\n\nconst areAllDoubledEven = numbersDoubled.every(divisible, { divisor: 2 });\n\nconsole.log(areAllDoubledEven); // true\n")),(0,i.kt)("h2",{id:"modifying-the-caller-array"},"Modifying the Caller Array"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Array.prototype.every()")," sets the range of the items to be processed before the first invocation of the callback function. And if an item is changed after traversal, the change is disregarded by the callback function. That is, the callback function only respects the existing value of an item at the time it is visited."),(0,i.kt)("p",null,"We can witness this in a scenario where the caller array is mutated from inside ",(0,i.kt)("strong",{parentName:"p"},"JavaScript ",(0,i.kt)("inlineCode",{parentName:"strong"},"every()")),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"every()")," itself does not modify the caller array, but the caller is available to the callback function as its third argument, ",(0,i.kt)("inlineCode",{parentName:"p"},"array"),". This means we can deliberately mutate the caller when we need to from inside our callback, ",(0,i.kt)("inlineCode",{parentName:"p"},"divisible()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function divisible(element, index, array) {\n  array[0] = 7;\n  array[4] = 7;\n\n  console.log(array);\n\n  return element % this?.divisor === 0;\n};\n")),(0,i.kt)("p",null,"In this scenario, if an unvisited item is changed ahead of time, the callback function - here ",(0,i.kt)("inlineCode",{parentName:"p"},"divisible()")," - finds the new value when it visits the item and so the new value is processed. In contrast, it disregards changes to items that are already traversed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const numbers = [1, 2, 3, 4, 5];\nconst numbersDoubled = [2, 4, 6, 8, 10];\n\nconst divisible = function(element, index, array) {\n  array[0] = 7;\n  array[4] = 7;\n\n  console.log(array);\n\n  return element % this?.divisor === 0;\n};\n\nconst areAllDoubledEven = numbersDoubled.every(divisible, { divisor: 2 });\nconsole.log(areAllDoubledEven);\nconsole.log(numbersDoubled);\n/*\n  [ 7, 4, 6, 8, 7 ]\n  [ 7, 4, 6, 8, 7 ]\n  [ 7, 4, 6, 8, 7 ]\n  [ 7, 4, 6, 8, 7 ]\n  [ 7, 4, 6, 8, 7 ]\n  false\n  [ 7, 4, 6, 8, 7 ]\n*/\n")),(0,i.kt)("p",null,"In the console log statements above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"numbersDoubled")," array is being logged five times due to the ",(0,i.kt)("inlineCode",{parentName:"p"},"console.log(array);")," statement we placed inside ",(0,i.kt)("inlineCode",{parentName:"p"},"divisible()"),"."),(0,i.kt)("p",null,"As we can see, ",(0,i.kt)("inlineCode",{parentName:"p"},"numbersDoubled")," is being mutated twice in the first call to ",(0,i.kt)("inlineCode",{parentName:"p"},"divisible()"),". The first mutation happens when at ",(0,i.kt)("inlineCode",{parentName:"p"},"numbersDoubled[0]"),", i.e. after being visited, which changes the value of itself to ",(0,i.kt)("inlineCode",{parentName:"p"},"7"),". So, even though ",(0,i.kt)("inlineCode",{parentName:"p"},"7")," is not divisible by the divisor ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"every()")," didn't immediately return ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," at index ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),". Instead, it returned ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," in the next instance when it visited the unvisited and mutated value of ",(0,i.kt)("inlineCode",{parentName:"p"},"7")," at ",(0,i.kt)("inlineCode",{parentName:"p"},"numbersDoubled[4]"),"."),(0,i.kt)("p",null,"This shows that the callback function processes the value of an item as it finds it at traversal and disregards the changes made to it when and after it is at that index."),(0,i.kt)("br",null),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://discord.gg/refine"},(0,i.kt)("img",{src:"/img/discord_big_blue.png",alt:"discord banner"}))),(0,i.kt)("h2",{id:"every-with-sparse-arrays"},(0,i.kt)("inlineCode",{parentName:"h2"},"every()")," With Sparse Arrays"),(0,i.kt)("p",null,"Now, let's consider what happens when we have empty slots in the caller array."),(0,i.kt)("p",null,"We'll add a couple of empty items to ",(0,i.kt)("inlineCode",{parentName:"p"},"numbersDouble")," and remove the mutations from ",(0,i.kt)("inlineCode",{parentName:"p"},"divisible"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const numbers = [1, 2, 3, 4, 5];\nconst numbersDoubled = [2, 4, , 6, 8, , 10];\n\nconst divisible = function(element, index, array) {\n  console.log(array);\n  return element % this?.divisor === 0;\n};\n\nconst areAllDoubledEven = numbersDoubled.every(divisible, { divisor: 2 });\nconsole.log(areAllDoubledEven);\nconsole.log('Caller length: ' + numbersDoubled.length);\n/*\n  [ 2, 4, <1 empty item>, 6, 8, <1 empty item>, 10 ]\n  [ 2, 4, <1 empty item>, 6, 8, <1 empty item>, 10 ]\n  [ 2, 4, <1 empty item>, 6, 8, <1 empty item>, 10 ]\n  [ 2, 4, <1 empty item>, 6, 8, <1 empty item>, 10 ]\n  [ 2, 4, <1 empty item>, 6, 8, <1 empty item>, 10 ]\n  true\n  [ 2, 4, <1 empty item>, 6, 8, <1 empty item>, 10 ]\n*/\n")),(0,i.kt)("p",null,"As we can see, we have two empty slots and the length of the caller array is 7. However, the ",(0,i.kt)("inlineCode",{parentName:"p"},"numbersDoubled")," is logged 5 times, indicating 5 calls to ",(0,i.kt)("inlineCode",{parentName:"p"},"divisible()"),". This is because ",(0,i.kt)("inlineCode",{parentName:"p"},"divisible()")," was not invoked for the empty items."),(0,i.kt)("h2",{id:"javascript-every-with-empty-arrays"},"JavaScript ",(0,i.kt)("inlineCode",{parentName:"h2"},"every()")," With Empty Arrays"),(0,i.kt)("p",null,"If we call ",(0,i.kt)("inlineCode",{parentName:"p"},"every()")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"divisible")," on an empty array, it returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const emptyArray = [];\n\nconst divisible = element => {\n  return element % this?.divisor === 0;\n};\n\nconst testEmptyArray = emptyArray.every(divisible, {divisor: 2 });\n\nconsole.log(testEmptyArray); // true\n")),(0,i.kt)("p",null,'This is so because "all items" in an empty array vacuously satisfy the condition that they are even or anything else. Supposedly.'),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In this article, we focused on ",(0,i.kt)("strong",{parentName:"p"},"JavaScript every")," which helps us test whether all items in an array pass the test we implement in a callback function. We saw that the callback function can take three arguments, and additional arguments can be bound to its execution context by setting its ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," value with a ",(0,i.kt)("inlineCode",{parentName:"p"},"thisArg")," passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"every()")," as the second argument."),(0,i.kt)("p",null,"We also found out that if we use arrow syntax to declare the callback function, its lexical environment messes with the binding of ",(0,i.kt)("inlineCode",{parentName:"p"},"thisArg")," to its ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," object. So, we should be using non-arrow functions to declare a callback that uses ",(0,i.kt)("inlineCode",{parentName:"p"},"this"),"."))}u.isMDXComponent=!0}}]);