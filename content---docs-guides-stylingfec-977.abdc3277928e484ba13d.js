(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));n(0);var o=n(161);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var a={sidebar_label:"Styling",title:"Styling"},i=[{value:"Overview",id:"overview",children:[]},{value:"Global styles",id:"global-styles",children:[]},{value:"Inline styles",id:"inline-styles",children:[]},{value:"Selectors",id:"selectors",children:[]},{value:"Pseudo states",id:"pseudo-states",children:[]},{value:"Cascading",id:"cascading",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Supported properties",id:"supported-properties",children:[]},{value:"Advanced usage (Setting QObject Properties)",id:"advanced-usage-setting-qobject-properties",children:[]}],r={rightToc:i},c="wrapper";function p(e){var t=e.components,n=l(e,["components"]);return Object(o.b)(c,s({},r,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With NodeGui, you can style a widget to your needs. If you are familiar with CSS in the web world you would feel right at home. All widgets have a method ",Object(o.b)("inlineCode",{parentName:"p"},"setInlineStyle")," for setting inline styles for the respective widget. The style names and values usually match how CSS works on the web."),Object(o.b)("p",null,"Here's an example:"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-js"}),'const { QLabel, QMainWindow } = require("@nodegui/nodegui");\n\nconst win = new QMainWindow();\n\nconst label = new QLabel(win);\nlabel.setText("Hello world");\nlabel.setInlineStyle("color: green; background-color: white;");\n\nwin.show();\nglobal.win = win;\n')),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"NodeGui makes use of ",Object(o.b)("a",s({parentName:"p"},{href:"https://doc.qt.io/qt-5/stylesheet-syntax.html"}),"Qt's stylesheet")," for styling. Qt Style Sheet terminology and syntactic rules are almost identical to those of HTML CSS. Additionally, NodeGui adds support for layout using flex properties like align-items, justify-content, etc. Flexbox layout support is added using ",Object(o.b)("a",s({parentName:"p"},{href:"https://github.com/facebook/yoga"}),"facebook's yoga library"),"."),Object(o.b)("p",null,"You would write your style properties in a string and pass it to the NodeGui widgets either via global styles or inline styles (similar to how it works in the web)."),Object(o.b)("h2",{id:"global-styles"},"Global styles"),Object(o.b)("p",null,"Lets take a look at an example:"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-js"}),'const { QLabel, FlexLayout, QWidget } = require("@nodegui/nodegui");\n\nconst view = new QWidget();\nview.setObjectName("rootView");\nview.setLayout(new FlexLayout());\n\nconst label = new QLabel();\nlabel.setObjectName("helloLabel");\nlabel.setText("Hello");\n\nconst label2 = new QLabel();\nlabel2.setObjectName("worldLabel");\nlabel2.setText("World");\n\nview.layout.addWidget(label);\nview.layout.addWidget(label2);\n\nview.setStyleSheet(`\n  #helloLabel {\n    color: red;\n    padding: 10px;\n  }\n  #worldLabel {\n    color: green;\n    padding: 10px;\n  }\n  #rootView {\n    background-color: black;\n  }\n`);\nview.show();\n(global as any).view = view;\n\n')),Object(o.b)("p",null,"In the case of global stylesheet you can define all your style properties in a stylesheet string and the tell the root view or window to set it as a stylsheet for it and its child widgets. The only difference here from web is that you can set a stylesheet on a widget at any level in the whole tree of widgets, the stylesheet will affect the widget and its children."),Object(o.b)("p",null,"In the above example, in order to reference a widget in a stylesheet we will assign it a ",Object(o.b)("inlineCode",{parentName:"p"},"objectName")," using setObjectName instance method. Think of objectName as something similar to an ",Object(o.b)("inlineCode",{parentName:"p"},"id")," in the case of web. Now using the objectName you could reference the widget in the stylesheet and set style properties on them. Do not worry about the layout stuff that is going on here, that will be covered in the next section."),Object(o.b)("p",null,"Global stylesheet really becomes powerful when you use things like pseudo-selectors (hover, checked, etc). It also has helps in implementing cascaded styles which allow you to style a group of widgets at once. We will see more about these features below."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"More details on all the features and the syntax can be found here: ",Object(o.b)("a",s({parentName:"p"},{href:"https://doc.qt.io/qt-5/stylesheet-syntax.html"}),"https://doc.qt.io/qt-5/stylesheet-syntax.html"))),Object(o.b)("h2",{id:"inline-styles"},"Inline styles"),Object(o.b)("p",null,"Lets look at this example again:"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-js"}),'const { QLabel, QMainWindow } = require("@nodegui/nodegui");\n\nconst win = new QMainWindow();\n\nconst label = new QLabel(win);\nlabel.setText("Hello world");\nlabel.setInlineStyle("color: green; background-color: white;");\n\nwin.show();\nglobal.win = win;\n')),Object(o.b)("p",null,"In most cases it would be easier to style the widgets inline. NodeGui supports inline styling using ",Object(o.b)("inlineCode",{parentName:"p"},"setInlineStyle")," instance method. Inline styles will only affect the widget to which the style is applied to and is often easier to understand and manage. All properties you use in the global stylesheet are available in inline styles as well."),Object(o.b)("h2",{id:"selectors"},"Selectors"),Object(o.b)("p",null,"NodeGui style sheets support all the selectors defined in CSS2.\nSome examples include:"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-css"}),"* {\n  color: blue;\n}\n\nQPushButton {\n  padding: 10px;\n}\n\n#okButton {\n  margin: 10px;\n}\n\n#mainView > QPushButton {\n  margin: 10px;\n}\n")),Object(o.b)("p",null,"To see a complete list of selectors see here: ",Object(o.b)("a",s({parentName:"p"},{href:"https://doc.qt.io/qt-5/stylesheet-syntax.html#selector-types"}),"https://doc.qt.io/qt-5/stylesheet-syntax.html#selector-types")),Object(o.b)("h2",{id:"pseudo-states"},"Pseudo states"),Object(o.b)("p",null,"Like in the web, you can style your widget based on its state. An example would be, you might want the color of the button text to be red when its hovered upon. These are possible with pseudo states. Pseudo-states appear at the end of the selector, with a colon (:) in between."),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-css"}),"#okButton:hover {\n  color: red;\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"More details here : ",Object(o.b)("a",s({parentName:"p"},{href:"https://doc.qt.io/qt-5/stylesheet-syntax.html#pseudo-states"}),"https://doc.qt.io/qt-5/stylesheet-syntax.html#pseudo-states"))),Object(o.b)("h2",{id:"cascading"},"Cascading"),Object(o.b)("p",null,"Style sheets can be set on the parent widgets and on child widgets. An arbitrary widget's effective style sheet is obtained by merging the style sheets set on the widget's ancestors (parent, grandparent, etc.)."),Object(o.b)("p",null,"When conflicts arise, the widget's own inline style sheet is always preferred to any inherited style sheet, irrespective of the specificity of the conflicting rules. Likewise, the parent widget's style sheet is preferred to the grandparent's, etc."),Object(o.b)("p",null,"The behaviour is similar to what we see on the web."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"For more in depth examples see here: ",Object(o.b)("a",s({parentName:"p"},{href:"https://doc.qt.io/qt-5/stylesheet-syntax.html#cascading"}),"https://doc.qt.io/qt-5/stylesheet-syntax.html#cascading"))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("p",null,"NodeGui style sheets is a css string."),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{}),"const textStyle = `\n  color: 'green';\n  padding: 12;\n  height: '100%';\n`;\n\n")),Object(o.b)("p",null,"Here if you look carefully, you would notice that there are some differences in the way we write style properties as compared to web.\nThe quotes you see around ",Object(o.b)("inlineCode",{parentName:"p"},"'green'")," and ",Object(o.b)("inlineCode",{parentName:"p"},"'100%'")," are necessary so that Qt doesnt interpret them as numbers.\nSo the rule of thumb is that any integer based property like margin, border, etc can be written without quotes while any string property, it is better to surround them with quotes. PS: Qt does recognise some string based properties without quotes also."),Object(o.b)("h2",{id:"supported-properties"},"Supported properties"),Object(o.b)("p",null,"Since we are not running inside a web browser, there are few differences in the properties you could use in NodeGui vs in web."),Object(o.b)("p",null,"The complete list is detailed here: ",Object(o.b)("a",s({parentName:"p"},{href:"https://doc.qt.io/qt-5/stylesheet-reference.html#list-of-properties"}),"https://doc.qt.io/qt-5/stylesheet-reference.html#list-of-properties")),Object(o.b)("p",null,"Apart from the properties listed in the link, NodeGui also supports layout properties related to Flex. You can use all flex properties such as align-items, justify-content, flex, etc on all widgets. ",Object(o.b)("a",s({parentName:"p"},{href:"/docs/guides/layout"}),"The layout styling will be coverted in more detail in the section: Layout.")),Object(o.b)("h2",{id:"advanced-usage-setting-qobject-properties"},"Advanced usage (Setting QObject Properties)"),Object(o.b)("p",null,"In Qt, every widget has certain properties set on them using something called as ",Object(o.b)("a",s({parentName:"p"},{href:"https://doc.qt.io/qt-5/qobject.html#Q_PROPERTY"}),"Q_PROPERTY"),". There are many q-properties that are defined on each widget already. You can also define custom qproperties in the native C++ code yourself too. What does it have to do with styling ? The thing is some of these properties can be altered using qt stylesheet. In Qt's terminology, these properties are called designable properties."),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",s({parentName:"pre"},{className:"language-css"}),"MyLabel {\n  qproperty-alignment: AlignCenter;\n}\nMyGroupBox {\n  qproperty-titlecolor: rgb(100, 200, 100);\n}\nQPushButton {\n  qproperty-iconsize: 20px 20px;\n}\n")),Object(o.b)("p",null,'You can discover these properties by following Qt\'s documentation or by running a simple google search like "center text in QLabel using stylesheet in Qt". These are advanced properties and in practice will come in use rarely but its good to know.'),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"More details : ",Object(o.b)("a",s({parentName:"p"},{href:"https://doc.qt.io/qt-5/stylesheet-syntax.html#setting-qobject-properties"}),"https://doc.qt.io/qt-5/stylesheet-syntax.html#setting-qobject-properties"))),Object(o.b)("hr",null),Object(o.b)("p",null,"In this section, we mostly covered the paint properties in the NodeGui stylesheet. The next section would cover on how you can use flex to layout your widgets with stylesheet."))}p.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return b}));var o=n(0),s=n.n(o),l=s.a.createContext({}),a=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=a(e.components);return s.a.createElement(l.Provider,{value:t},e.children)};var r="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},p=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,r=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),p=a(n),b=o,d=p[i+"."+b]||p[b]||c[b]||l;return n?s.a.createElement(d,Object.assign({},{ref:t},r,{components:n})):s.a.createElement(d,Object.assign({},{ref:t},r))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[r]="string"==typeof e?e:o,a[1]=i;for(var b=2;b<l;b++)a[b]=n[b];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);