(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"Gjj/":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI"),o=n.n(r).a.createElement;function a(e){return o("svg",{className:e.class,xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,fill:e.fill,viewBox:"0 0 18 18"},o("path",{d:"M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z"}))}},OrM8:function(e,t,n){"use strict";var r=n("rePB"),o=n("wx14"),a=n("Ff2n"),i=n("q1tI"),c=n.n(i),s=n("iuhU"),u=n("nOHt"),l=n("YFqc"),f=n.n(l),p=(n("17x9"),n("NqtD")),d=n("H2TA"),m=n("G7As"),b=n("bfFb"),h=n("ofer"),g=i.forwardRef((function(e,t){var n=e.classes,r=e.className,c=e.color,u=void 0===c?"primary":c,l=e.component,f=void 0===l?"a":l,d=e.onBlur,g=e.onFocus,v=e.TypographyClasses,O=e.underline,y=void 0===O?"hover":O,w=e.variant,j=void 0===w?"inherit":w,k=Object(a.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),R=Object(m.a)(),x=R.isFocusVisible,N=R.onBlurVisible,B=R.ref,E=i.useState(!1),L=E[0],C=E[1],P=Object(b.a)(t,B);return i.createElement(h.a,Object(o.a)({className:Object(s.a)(n.root,n["underline".concat(Object(p.a)(y))],r,L&&n.focusVisible,"button"===f&&n.button),classes:v,color:u,component:f,onBlur:function(e){L&&(N(),C(!1)),d&&d(e)},onFocus:function(e){x(e)&&C(!0),g&&g(e)},ref:P,variant:j},k))})),v=Object(d.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(g),O=c.a.createElement,y=c.a.forwardRef((function(e,t){var n=e.as,r=e.href,i=e.prefetch,c=Object(a.a)(e,["as","href","prefetch"]);return O(f.a,{href:r,prefetch:i,as:n},O("a",Object(o.a)({ref:t},c)))}));function w(e){var t=e.activeClassName,n=void 0===t?"active":t,i=e.className,c=e.innerRef,l=e.naked,f=Object(a.a)(e,["activeClassName","className","innerRef","naked"]),p=Object(u.useRouter)(),d=Object(s.a)(i,Object(r.a)({},n,p.pathname===e.href&&n));return l?O(y,Object(o.a)({className:d,ref:c},f)):O(v,Object(o.a)({underline:"none",component:y,className:d,ref:c},f))}t.a=c.a.forwardRef((function(e,t){return O(w,Object(o.a)({},e,{innerRef:t}))}))},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a,i=o(n("q1tI")),c=n("elyg"),s=n("nOHt"),u=new Map,l=window.IntersectionObserver,f={};var p=function(e,t){var n=a||(l?a=new l((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),u.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function d(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var m=function(e){var t=!1!==e.prefetch,n=i.default.useState(),o=r(n,2),a=o[0],u=o[1],m=(0,s.useRouter)(),b=m&&m.pathname||"/",h=i.default.useMemo((function(){var t=(0,c.resolveHref)(b,e.href);return{href:t,as:e.as?(0,c.resolveHref)(b,e.as):t}}),[b,e.href,e.as]),g=h.href,v=h.as;i.default.useEffect((function(){if(t&&l&&a&&a.tagName&&(0,c.isLocalURL)(g)&&!f[g+"%"+v])return p(a,(function(){d(m,g,v)}))}),[t,a,g,v,m]);var O=e.children,y=e.replace,w=e.shallow,j=e.scroll;"string"===typeof O&&(O=i.default.createElement("a",null,O));var k=i.Children.only(O),R={ref:function(e){e&&u(e),k&&"object"===typeof k&&k.ref&&("function"===typeof k.ref?k.ref(e):"object"===typeof k.ref&&(k.ref.current=e))},onClick:function(e){k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,m,g,v,y,w,j)}};return t&&(R.onMouseEnter=function(e){(0,c.isLocalURL)(g)&&(k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),d(m,g,v,{priority:!0}))}),(e.passHref||"a"===k.type&&!("href"in k.props))&&(R.href=(0,c.addBasePath)(v)),i.default.cloneElement(k,R)};t.default=m},p24T:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("rePB"),o=n("q1tI"),a=n.n(o),i=n("R/WZ"),c=n("tr08"),s=n("tRbT"),u=n("ofer"),l=n("Z3vd"),f=n("Gjj/"),p=n("lopY"),d=n("OrM8"),m=a.a.createElement;function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=Object(i.a)((function(e){return{learnButton:h(h({},e.typography.learnButton),{},Object(r.a)({fontSize:"0.7rem",height:"35px",padding:"5px"},e.breakpoints.down("sm"),{marginBottom:"2em"})),callActionBackground:Object(r.a)({backgroundImage:'url("/assets/background.jpg")',backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundAttachment:"fixed",height:"60em",width:"100%"},e.breakpoints.down("md"),{backgroundImage:'url("/assets/mobileBackground.jpg")',backgroundAttachment:"inherit"}),estimateButton:h(h({},e.typography.estimate),{},Object(r.a)({backgroundColor:e.palette.common.arcOrange,borderRadius:"50px",height:"80px",width:"205px",marginRight:"2em",marginLeft:"2em",fontSize:"1.5rem","&:hover":{backgroundColor:e.palette.secondary.light}},e.breakpoints.down("sm"),{marginLeft:0,marginRight:0}))}}));function v(e){var t=g(),n=Object(c.a)(),r=Object(p.a)(n.breakpoints.down("sm"));return m(s.a,{container:!0,alignItems:"center",className:t.callActionBackground,justify:r?"center":"space-between",direction:r?"column":"row"},m(s.a,{item:!0,style:{marginLeft:r?0:"5em",textAlign:r?"center":"inherit"}},m(s.a,{container:!0,direction:"column"},m(s.a,{item:!0},m(u.a,{variant:"h1"},"Simple Software.",m("br",null)," Revolutionary Results."),m(u.a,{variant:"subtitle1",style:{color:"white",fontSize:"1.5rem"}},"Take advantage of the 21st century."),m(s.a,{item:!0,container:!0,justify:r?"center":void 0},m(l.a,{variant:"outlined",className:t.learnButton,component:d.a,href:"/revolution",onClick:function(){return e.setValue(2)}},m("span",{style:{marginRight:"5px"}},"Learn More"),m(f.a,{width:15,height:15,fill:n.palette.common.arcBlue})))))),m(s.a,{item:!0},m(l.a,{variant:"contained",className:t.estimateButton,component:d.a,href:"/estimate",onClick:function(){return e.setValue(5)}},"Free Estimate")))}}}]);