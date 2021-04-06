(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{160:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=b(r),s=n,m=u["".concat(i,".").concat(s)]||u[s]||d[s]||c;return r?a.a.createElement(m,l(l({ref:t},p),{},{components:r})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<c;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},59:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(6),c=(r(0),r(160)),i={id:"cellwidget",title:"CellWidget",sidebar_label:"CellWidget"},l={unversionedId:"api/interfaces/cellwidget",id:"api/interfaces/cellwidget",isDocsHomePage:!1,title:"CellWidget",description:"Hierarchy",source:"@site/docs/api/interfaces/cellwidget.md",slug:"/api/interfaces/cellwidget",permalink:"/docs/api/interfaces/cellwidget",version:"current",sidebar_label:"CellWidget",sidebar:"api",previous:{title:"CellRange",permalink:"/docs/api/interfaces/cellrange"},next:{title:"CheckBoxProps",permalink:"/docs/api/interfaces/checkboxprops"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"column",id:"column",children:[]},{value:"row",id:"row",children:[]},{value:"widget",id:"widget",children:[]}]}],p={rightToc:o};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/cellrange"}),"CellRange")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("strong",{parentName:"p"},"CellWidget")))),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/interfaces/cellwidget#column"}),"column")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/interfaces/cellwidget#row"}),"row")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/interfaces/cellwidget#widget"}),"widget"))),Object(c.b)("h2",{id:"properties-1"},"Properties"),Object(c.b)("h3",{id:"column"},"column"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"column"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/interfaces/cellrange"}),"CellRange"),".",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/interfaces/cellrange#column"}),"column"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"row"},"row"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"row"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/interfaces/cellrange"}),"CellRange"),".",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/interfaces/cellrange#row"}),"row"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"widget"},"widget"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"widget"),": ",Object(c.b)("em",{parentName:"p"},"NodeWidget\u2039any\u203a")))}b.isMDXComponent=!0}}]);