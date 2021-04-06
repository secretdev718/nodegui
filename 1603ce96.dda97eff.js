(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{160:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return h}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),d=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),b=o,h=u["".concat(i,".").concat(b)]||u[b]||p[b]||r;return t?a.a.createElement(h,s(s({ref:n},c),{},{components:t})):a.a.createElement(h,s({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},63:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return d}));var o=t(2),a=t(6),r=(t(0),t(160)),i={sidebar_label:"Handle Events",title:"Handle Events"},s={unversionedId:"guides/handle-events",id:"guides/handle-events",isDocsHomePage:!1,title:"Handle Events",description:"React NodeGui allows you to listen to various events that might originate from the underlying Qt widgets. These events can either be a simple button click or a text change on a lineedit or even something like window being hidden and shown.",source:"@site/docs/guides/handle-events.md",slug:"/guides/handle-events",permalink:"/docs/guides/handle-events",version:"current",sidebar_label:"Handle Events",sidebar:"guides",previous:{title:"Layout",permalink:"/docs/guides/layout"},next:{title:"Scroll Area",permalink:"/docs/guides/scroll-view"}},l=[{value:"Event handling",id:"event-handling",children:[{value:"useEventHandler hook and typescript support",id:"useeventhandler-hook-and-typescript-support",children:[]},{value:"How do I know which events are supported ?",id:"how-do-i-know-which-events-are-supported-",children:[]}]}],c={rightToc:l};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"React NodeGui allows you to listen to various events that might originate from the underlying Qt widgets. These events can either be a simple button click or a text change on a lineedit or even something like window being hidden and shown."),Object(r.b)("p",null,"In order to do this we need to attach an event listener to the respective widget."),Object(r.b)("p",null,"Technically, the event listener is a NodeJs ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://nodejs.org/api/events.html#events_class_eventemitter"}),"EventEmitter")," instance that listens to events from the underlying Qt widget. The native Qt widget would send all the events to the event emitter in React NodeGui world and the user can essentially subscribe to it."),Object(r.b)("p",null,"Lets see an example to see how this looks in practice."),Object(r.b)("h2",{id:"event-handling"},"Event handling"),Object(r.b)("p",null,"The following example demonstrates how to add a clicked event listener to a button widget."),Object(r.b)("img",{src:"https://github.com/nodegui/react-nodegui/releases/download/assets/events-react.gif",alt:"event example",style:{width:"100%",maxWidth:400}}),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'const React = require("react");\nconst { Renderer, Button, Window } = require("@nodegui/react-nodegui");\n\nconst App = () => {\n  const buttonHandler = {\n    clicked: () => {\n      console.log("the button was clicked");\n    }\n  };\n\n  return (\n    <Window>\n      <Button text={"Click me"} on={buttonHandler} />\n    </Window>\n  );\n};\n\nRenderer.render(<App />);\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"on")," prop accepts a simple object map with event type as key and a handler function as callback for the event. You can register multiple event handlers by passing multiple events as keys and their handlers as values."),Object(r.b)("p",null,"Internally, Qt widgets in nodegui has two types of events.:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Signals: In short these are basically different for different widgets. So a button maybe have ",Object(r.b)("inlineCode",{parentName:"li"},"clicked"),", ",Object(r.b)("inlineCode",{parentName:"li"},"pressed")," signal, while a linedit may have ",Object(r.b)("inlineCode",{parentName:"li"},"textChanged")," signal."),Object(r.b)("li",{parentName:"ul"},"QEvents: These are common set of events for all the widgets/qobjects in NodeGui world. These are also helpful at times but typically you would end up using signals more than these common events.")),Object(r.b)("p",null,"In React NodeGui you can listen to both Signals and QEvents using the same ",Object(r.b)("inlineCode",{parentName:"p"},"on")," prop."),Object(r.b)("h3",{id:"useeventhandler-hook-and-typescript-support"},"useEventHandler hook and typescript support"),Object(r.b)("p",null,"Although you can pass in an object with event handlers to the ",Object(r.b)("inlineCode",{parentName:"p"},"on")," prop, its not the most efficient way. This is because everytime the render is called the ",Object(r.b)("inlineCode",{parentName:"p"},"on")," prop will get a new object meaning the widget will re-render every time. To solve for this we have ",Object(r.b)("inlineCode",{parentName:"p"},"useEventHandler")," hook."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),'import React from "react";\nimport {\n  Renderer,\n  Button,\n  Window,\n  useEventHandler\n} from "@nodegui/react-nodegui";\nimport { QPushButtonSignals } from "@nodegui/nodegui";\n\nconst App = () => {\n  const buttonHandler = useEventHandler<QPushButtonSignals>(\n    {\n      clicked: () => {\n        console.log("the button was clicked");\n      },\n      pressed: () => {\n        console.log("button was pressed");\n      },\n      objectNameChanged: objectName => {\n        console.log("new object name", objectName);\n      }\n    },\n    []\n  );\n\n  return (\n    <Window>\n      <Button text={"Click me"} on={buttonHandler} />\n    </Window>\n  );\n};\n\nRenderer.render(<App />);\n')),Object(r.b)("p",null,"In a nutshell, the above code uses the ",Object(r.b)("inlineCode",{parentName:"p"},"useEventHandler")," hook which is a wrapper over ",Object(r.b)("inlineCode",{parentName:"p"},"useMemo"),".\nThis means, the buttonHandler remains same on every render call and hence the ",Object(r.b)("inlineCode",{parentName:"p"},"on")," prop to Button doesnt change."),Object(r.b)("p",null,"Here ",Object(r.b)("inlineCode",{parentName:"p"},"objectNameChanged")," is a QEvent while ",Object(r.b)("inlineCode",{parentName:"p"},"clicked")," and ",Object(r.b)("inlineCode",{parentName:"p"},"pressed")," are signals. As an app developer it really doesnt mean much but internally they are both two different things in Qt and React NodeGui allows you to use both of them using a single familiar ",Object(r.b)("inlineCode",{parentName:"p"},"on")," prop."),Object(r.b)("p",null,"Also, another point you see in this typescript code is the QPushButtonSignals. The QPushButtonSignals is a type that allows autocompletion of event handlers as you type them."),Object(r.b)("h3",{id:"how-do-i-know-which-events-are-supported-"},"How do I know which events are supported ?"),Object(r.b)("p",null,"In order to find all the supported events for a widget you can take a look at"),Object(r.b)("h4",{id:"all-signals-for-the-widgets"},"All Signals for the widgets:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.nodegui.org/docs/api/generated/globals/#interfaces"}),"https://docs.nodegui.org/docs/api/generated/globals/#interfaces")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.nodegui.org/docs/api/generated/globals/#type-aliases"}),"https://docs.nodegui.org/docs/api/generated/globals/#type-aliases"))),Object(r.b)("p",null,"You can subscribe to a signal like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),'import React from "react";\nimport {\n  Renderer,\n  Button,\n  Window,\n  useEventHandler\n} from "@nodegui/react-nodegui";\nimport { QPushButtonSignals } from "@nodegui/nodegui";\n\nconst App = () => {\n  const buttonHandler = useEventHandler<QPushButtonSignals>(\n    {\n      clicked: () => {\n        console.log("the button was clicked");\n      }\n    },\n    []\n  );\n\n  return (\n    <Window>\n      <Button text={"Click me"} on={buttonHandler} />\n    </Window>\n  );\n};\n\nRenderer.render(<App />);\n')),Object(r.b)("p",null,"The value you receive in the callback depends on the signal. Refer to respective signal docs for more details. All the handlers are also typed. So if you are using typescript you should get correct autocomplete for it."),Object(r.b)("h4",{id:"all-common-qevents-for-the-widgets"},"All common QEvents for the widgets"),Object(r.b)("p",null,"In nodegui all these common QEvents are represented under an enum type: ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.nodegui.org/docs/api/generated/enums/widgeteventtypes"}),"WidgetEventTypes")),Object(r.b)("p",null,"You can subscribe to a QEvent like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),'import React from "react";\nimport {\n  Renderer,\n  Text,\n  Window,\n  useEventHandler\n} from "@nodegui/react-nodegui";\nimport { QLabelSignals, QMouseEvent, WidgetEventTypes } from "@nodegui/nodegui";\n\nconst App = () => {\n  const textHandler = useEventHandler<QLabelSignals>(\n    {\n      MouseMove: (nativeEvt: any) => {\n        const mouseEvt = new QMouseEvent(nativeEvt);\n        console.log("mouseMoved at: ", { x: mouseEvt.x(), y: mouseEvt.y() });\n      },\n      [WidgetEventTypes.MouseButtonPress]: () => {\n        console.log("mouse button was pressed");\n      }\n    },\n    []\n  );\n\n  return (\n    <Window>\n      <Text mouseTracking={true} on={textHandler}>\n        Move your mouse here\n      </Text>\n    </Window>\n  );\n};\n\nRenderer.render(<App />);\n')),Object(r.b)("img",{src:"https://github.com/nodegui/react-nodegui/releases/download/assets/qevents.gif",alt:"qevent example",style:{width:"100%",maxWidth:400}}),Object(r.b)("p",null,"Note here that every QEvent handler gives a reference to native QEvent in the handler callback.\nNot all native QEvent wrappers are implemented yet and we might need your help regarding those. Feel free to jump in and contribute to the nodegui core."),Object(r.b)("p",null,"Also you can specify the QEvent type as a regular ",Object(r.b)("inlineCode",{parentName:"p"},"MouseMove")," string or use it directly from the enum ",Object(r.b)("inlineCode",{parentName:"p"},"WidgetEventTypes.MouseMove"),". They both achieve same things."))}d.isMDXComponent=!0}}]);