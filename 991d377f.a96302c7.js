(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(168)),o={sidebar_label:"Images",title:"Images"},l={id:"guides/images",title:"Images",description:"Images are very important for making your app more interesting.",source:"@site/docs/guides/images.md",permalink:"/docs/guides/images",sidebar_label:"Images",sidebar:"guides",previous:{title:"Scroll Area",permalink:"/docs/guides/scroll-view"},next:{title:"Networking",permalink:"/docs/guides/networking"}},c=[{value:"Some tips",id:"some-tips",children:[{value:"Showing large images",id:"showing-large-images",children:[]},{value:"Animated images",id:"animated-images",children:[]},{value:"Loading an image from a buffer",id:"loading-an-image-from-a-buffer",children:[]}]}],s={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Images are very important for making your app more interesting."),Object(i.b)("p",null,"In React NodeGui, ",Object(i.b)("inlineCode",{parentName:"p"},"<Image>")," is used to display an image."),Object(i.b)("p",null,"Internally Image is a QLabel. QLabel is typically used for displaying text, but it can also display an image.\nWhat this means is that you can pass all the props you pass to a ",Object(i.b)("inlineCode",{parentName:"p"},"<Text>")," to ",Object(i.b)("inlineCode",{parentName:"p"},"<Image>")," also."),Object(i.b)("p",null,"A very minimal example would look like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import React from "react";\nimport { Renderer, Image, Window } from "@nodegui/react-nodegui";\n\nconst App = () => {\n  return (\n    <Window>\n      <Image src="https://docs.nodegui.org/img/logo-circle.png" />\n    </Window>\n  );\n};\n\nRenderer.render(<App />);\n')),Object(i.b)("p",null,"Here,"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Image is a native QLabel component that sets the image as its pixmap.")),Object(i.b)("p",null,"The result would look like this:"),Object(i.b)("img",{src:"https://github.com/nodegui/react-nodegui/releases/download/assets/images.png",alt:"image example",style:{width:"100%",maxWidth:400}}),Object(i.b)("h2",{id:"some-tips"},"Some tips"),Object(i.b)("h3",{id:"showing-large-images"},"Showing large images"),Object(i.b)("p",null,"The above examples wont allow you to show a huge image without either cutting it off or making the widget huge."),Object(i.b)("p",null,"In order to do that:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You can create the image instance using ",Object(i.b)("inlineCode",{parentName:"li"},"<Image>")),Object(i.b)("li",{parentName:"ul"},"Set the image instance as a child to a ",Object(i.b)("inlineCode",{parentName:"li"},"<ScrollArea>"))),Object(i.b)("h3",{id:"animated-images"},"Animated images"),Object(i.b)("p",null,"In order to use animated images, instead of ",Object(i.b)("inlineCode",{parentName:"p"},"<Image>")," use ",Object(i.b)("inlineCode",{parentName:"p"},"<AnimatedImage>")),Object(i.b)("h3",{id:"loading-an-image-from-a-buffer"},"Loading an image from a buffer"),Object(i.b)("p",null,"Lets say we want to load an image from a buffer. In this case we can't use the ",Object(i.b)("inlineCode",{parentName:"p"},"src")," prop since its only reserved for local file system path or urls."),Object(i.b)("p",null,"In this case use the ",Object(i.b)("inlineCode",{parentName:"p"},"buffer")," prop."))}p.isMDXComponent=!0},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,d=u["".concat(o,".").concat(b)]||u[b]||m[b]||i;return n?r.a.createElement(d,l(l({ref:t},s),{},{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);