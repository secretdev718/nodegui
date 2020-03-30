(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{123:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"rightToc",(function(){return l})),t.d(a,"metadata",(function(){return s})),t.d(a,"default",(function(){return p}));var n=t(1),i=t(6),r=(t(0),t(149)),o={sidebar_label:"Images",title:"Images"},l=[{value:"Some tips",id:"some-tips",children:[{value:"Showing large images",id:"showing-large-images",children:[]},{value:"Animated images",id:"animated-images",children:[]},{value:"Loading an image from a buffer",id:"loading-an-image-from-a-buffer",children:[]}]}],s={id:"guides/images",title:"Images",description:"Images are very important for making your app more interesting.",source:"@site/docs/guides/images.md",permalink:"/docs/guides/images",sidebar_label:"Images",sidebar:"guides",previous:{title:"Scroll Area",permalink:"/docs/guides/scroll-view"},next:{title:"Networking",permalink:"/docs/guides/networking"}},c={rightToc:l,metadata:s},m="wrapper";function p(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)(m,Object(n.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Images are very important for making your app more interesting."),Object(r.b)("p",null,"In React NodeGui, ",Object(r.b)("inlineCode",{parentName:"p"},"<Image>")," is used to display an image."),Object(r.b)("p",null,"Internally Image is a QLabel. QLabel is typically used for displaying text, but it can also display an image.\nWhat this means is that you can pass all the props you pass to a ",Object(r.b)("inlineCode",{parentName:"p"},"<Text>")," to ",Object(r.b)("inlineCode",{parentName:"p"},"<Image>")," also."),Object(r.b)("p",null,"A very minimal example would look like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import React from "react";\nimport { Renderer, Image, Window } from "@nodegui/react-nodegui";\n\nconst App = () => {\n  return (\n    <Window>\n      <Image src="https://docs.nodegui.org/img/logo-circle.png" />\n    </Window>\n  );\n};\n\nRenderer.render(<App />);\n')),Object(r.b)("p",null,"Here,"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Image is a native QLabel component that sets the image as its pixmap.")),Object(r.b)("p",null,"The result would look like this:"),Object(r.b)("img",{src:"https://github.com/nodegui/react-nodegui/releases/download/assets/images.png",alt:"image example",style:{width:"100%",maxWidth:400}}),Object(r.b)("h2",{id:"some-tips"},"Some tips"),Object(r.b)("h3",{id:"showing-large-images"},"Showing large images"),Object(r.b)("p",null,"The above examples wont allow you to show a huge image without either cutting it off or making the widget huge."),Object(r.b)("p",null,"In order to do that:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You can create the image instance using ",Object(r.b)("inlineCode",{parentName:"li"},"<Image>")),Object(r.b)("li",{parentName:"ul"},"Set the image instance as a child to a ",Object(r.b)("inlineCode",{parentName:"li"},"<ScrollArea>"))),Object(r.b)("h3",{id:"animated-images"},"Animated images"),Object(r.b)("p",null,"In order to use animated images, instead of ",Object(r.b)("inlineCode",{parentName:"p"},"<Image>")," use ",Object(r.b)("inlineCode",{parentName:"p"},"<AnimatedImage>")),Object(r.b)("h3",{id:"loading-an-image-from-a-buffer"},"Loading an image from a buffer"),Object(r.b)("p",null,"Lets say we want to load an image from a buffer. In this case we can't use the ",Object(r.b)("inlineCode",{parentName:"p"},"src")," prop since its only reserved for local file system path or urls."),Object(r.b)("p",null,"In this case use the ",Object(r.b)("inlineCode",{parentName:"p"},"buffer")," prop."))}p.isMDXComponent=!0},149:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return p}));var n=t(0),i=t.n(n),r=i.a.createContext({}),o=function(e){var a=i.a.useContext(r),t=a;return e&&(t="function"==typeof e?e(a):Object.assign({},a,e)),t},l=function(e){var a=o(e.components);return i.a.createElement(r.Provider,{value:a},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},m=Object(n.forwardRef)((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,s=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===a.indexOf(n)&&(t[n]=e[n]);return t}(e,["components","mdxType","originalType","parentName"]),m=o(t),p=n,u=m[l+"."+p]||m[p]||c[p]||r;return t?i.a.createElement(u,Object.assign({},{ref:a},s,{components:t})):i.a.createElement(u,Object.assign({},{ref:a},s))}));function p(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[s]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);