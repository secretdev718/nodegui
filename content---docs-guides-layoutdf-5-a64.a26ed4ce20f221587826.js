(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p}));var a=n(0),o=n.n(a),i=o.a.createContext({}),r=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=r(e.components);return o.a.createElement(i.Provider,{value:t},e.children)};var c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),u=r(n),p=a,d=u[l+"."+p]||u[p]||s[p]||i;return n?o.a.createElement(d,Object.assign({},{ref:t},c,{components:n})):o.a.createElement(d,Object.assign({},{ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));n(0);var a=n(111);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r={sidebar_label:"Layout",title:"Layout"},l=[{value:"Fixed Dimensions",id:"fixed-dimensions",children:[]},{value:"Dynamic Layouts",id:"dynamic-layouts",children:[]},{value:"FlexLayout",id:"flexlayout",children:[{value:"Example:",id:"example",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],c={rightToc:l},s="wrapper";function u(e){var t=e.components,n=i(e,["components"]);return Object(a.b)(s,o({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"React NodeGui uses a layout system to automatically arranging child components within a component to ensure that they make good use of the available space."),Object(a.b)("h2",{id:"fixed-dimensions"},"Fixed Dimensions"),Object(a.b)("p",null,"A component's height and width determine its size on the screen. The simplest way to set the dimensions of a component is by adding a fixed width and height to style. Setting dimensions this way is common for components that should always render at exactly the same size, regardless of screen dimensions."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx"}),'import React from "react";\nimport { Renderer, View, Window } from "@nodegui/react-nodegui";\n\nconst App = () => {\n  return (\n    <Window>\n      <View style={viewStyle} />\n    </Window>\n  );\n};\n\nconst viewStyle = `\n  width:50px;\n  height:30px; \n  background-color: yellow;\n`;\n\nRenderer.render(<App />);\n')),Object(a.b)("h2",{id:"dynamic-layouts"},"Dynamic Layouts"),Object(a.b)("p",null,"Dynamic layouts automatically position and resize components when the amount of space available for them changes, ensuring that they are consistently arranged and that the user interface as a whole remains usable."),Object(a.b)("p",null,"React NodeGui currently supports layouting using FlexLayout."),Object(a.b)("h2",{id:"flexlayout"},"FlexLayout"),Object(a.b)("p",null,"FlexLayout allows the children to expand and shrink dynamically based on available space. Normally you will use ",Object(a.b)("inlineCode",{parentName:"p"},"flex: 1"),", which tells a component to fill all available space, shared evenly amongst other components with the same parent. The larger the flex given, the higher the ratio of space a component will take compared to its siblings."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"A component can only expand to fill available space if its parent has dimensions greater than 0. If a parent does not have either a fixed width and height or flex, the parent will have dimensions of 0 and the flex children will not be visible.")),Object(a.b)("p",null,"Flexbox is designed to provide a consistent layout on different screen sizes. You will normally use a combination of flex-direction, align-items,and justify-content to achieve the right layout."),Object(a.b)("h3",{id:"example"},"Example:"),Object(a.b)("p",null,"Lets say you want to build a UI that has a parent view which has two child components. One a label with text Hello and another a view with background color white. Now you want the label to occupy 1/3 of the available space while the white colored child view to occupy the remaining 2/3 space."),Object(a.b)("img",{src:"https://docs.nodegui.org/img/docs/flex-layout-1.png",alt:"flex layout example 1",style:{maxWidth:700,width:"100%"}}),Object(a.b)("p",null,"The code for that would look something like this:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx"}),'import React from "react";\nimport { Renderer, View, Text, Window } from "@nodegui/react-nodegui";\n\nconst App = () => {\n  return (\n    <Window styleSheet={styleSheet}>\n      <View id="rootView">\n        <Text id="label">Hello</Text>\n        <View id="view" />\n      </View>\n    </Window>\n  );\n};\n\nconst styleSheet = `\n  #rootView{\n    height: \'100%\';\n    background-color: blue;\n  }\n  #label {\n    flex: 1;\n    color: white;\n    background-color: green;\n  }\n  #view {\n    flex: 3;\n    background-color: white;\n  }\n`;\n\nRenderer.render(<App />);\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"To know more on how FlexBox layout works in depth you can visit: ",Object(a.b)("a",o({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/0.60/flexbox"}),"https://facebook.github.io/react-native/docs/0.60/flexbox"),"."),Object(a.b)("p",{parentName:"blockquote"},"NodeGui uses the same library that React Native uses underneath for FlexBox (",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/facebook/yoga"}),"Yoga"),").")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You can specify layout properties via inline styles also.")),Object(a.b)("h2",{id:"conclusion"},"Conclusion"),Object(a.b)("p",null,"The primary layout in React NodeGui is the Flexbox layout. Flexbox layout can be controlled via stylesheet just as in web. So both paint and layout properties are available at the same place."))}u.isMDXComponent=!0}}]);