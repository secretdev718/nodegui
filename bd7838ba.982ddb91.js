(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{152:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return b}));var r=t(2),o=t(6),a=(t(0),t(168)),i={sidebar_label:"Debugging in VSCode",title:"Debugging in VSCode"},c={id:"guides/debugging-in-vscode",title:"Debugging in VSCode",description:"- Open a NodeGui project in VSCode.",source:"@site/docs/guides/debugging-in-vscode.md",permalink:"/docs/guides/debugging-in-vscode",sidebar_label:"Debugging in VSCode",sidebar:"guides",previous:{title:"Debugging",permalink:"/docs/guides/debugging"},next:{title:"Using native Node Modules",permalink:"/docs/guides/using-native-node-modules"}},u=[],p={rightToc:u};function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Open a NodeGui project in VSCode.")),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ git clone git@github.com:nodegui/react-nodegui-starter.git\n$ code react-nodegui-starter\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Add a file ",Object(a.b)("inlineCode",{parentName:"strong"},".vscode/launch.json")," with the following configuration:")),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Debug Qode Process",\n      "type": "node",\n      "request": "launch",\n      "cwd": "${workspaceRoot}",\n      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/qode",\n      "windows": {\n        "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/qode.exe"\n      },\n      "args": ["./dist/index.js"],\n      "outputCapture": "std"\n    }\n  ]\n}\n')),Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Tip"),": You could also configure a preLaunchTask for building typescript before launching the debugger everytime.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Debugging")),Object(a.b)("p",{parentName:"li"},"Set some breakpoints in ",Object(a.b)("inlineCode",{parentName:"p"},"index.js"),", and start debugging in the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/editor/debugging"}),"Debug View"),". You should be able to hit the breakpoints."))))}b.isMDXComponent=!0},168:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return g}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),b=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=b(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=b(t),d=r,g=s["".concat(i,".").concat(d)]||s[d]||l[d]||a;return t?o.a.createElement(g,c(c({ref:n},p),{},{components:t})):o.a.createElement(g,c({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);