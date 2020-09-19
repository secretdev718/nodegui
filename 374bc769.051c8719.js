(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{132:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),b=r,f=l["".concat(c,".").concat(b)]||l[b]||d[b]||a;return n?o.a.createElement(f,i(i({ref:t},u),{},{components:n})):o.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(132)),c={sidebar_label:"Networking",title:"Networking"},i={unversionedId:"guides/networking",id:"guides/networking",isDocsHomePage:!1,title:"Networking",description:"Many apps need to load resources from a remote URL. You may want to make a POST request to a REST API, or you may need to fetch a chunk of static content from another server.",source:"@site/docs/guides/networking.md",slug:"/guides/networking",permalink:"/docs/guides/networking",version:"current",sidebar_label:"Networking",sidebar:"guides",previous:{title:"Images",permalink:"/docs/guides/images"},next:{title:"Debugging",permalink:"/docs/guides/debugging"}},s=[{value:"Using Node Fetch",id:"using-node-fetch",children:[]}],u={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Many apps need to load resources from a remote URL. You may want to make a POST request to a REST API, or you may need to fetch a chunk of static content from another server."),Object(a.b)("p",null,"Remember that NodeGui apps do not run in a browser and hence do not have access to browser apis. NodeGui app is essentially a Node.js app."),Object(a.b)("p",null,"And in a typical Node.js application you would use a third party library like ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/axios/axios"}),"axios"),", ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/node-fetch/node-fetch"}),"node-fetch")," or ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/niftylettuce/frisbee"}),"frisbee")," for achieving this functionality."),Object(a.b)("h2",{id:"using-node-fetch"},"Using Node Fetch"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/node-fetch/node-fetch"}),"Node Fetch")," is a light-weight module that brings window.fetch to Node.js."),Object(a.b)("p",null,"An example usage would look like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const fetch = require("node-fetch");\nasync function getData() {\n  try {\n    let response = await fetch("https://somewebsite.com/some.json");\n    let responseJson = await response.json();\n    return responseJson.somecontent;\n  } catch (error) {\n    console.error(error);\n  }\n}\n')),Object(a.b)("p",null,"Take a look at the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/node-fetch/node-fetch"}),"Node Fetch docs")," for a full list of properties."))}p.isMDXComponent=!0}}]);