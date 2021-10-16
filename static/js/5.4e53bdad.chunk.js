(this["webpackJsonpmnm-exports"]=this["webpackJsonpmnm-exports"]||[]).push([[5,9,11,24],{33:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,i=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(c){i=!0,o=c}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return i}))},34:function(t,e,r){"use strict";r.r(e);var n=r(33),i=r(0);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var s=new Map,a=new WeakMap,c=0;function u(t){return Object.keys(t).sort().filter((function(e){return void 0!==t[e]})).map((function(e){return e+"_"+("root"===e?(r=t.root)?(a.has(r)||(c+=1,a.set(r,c.toString())),a.get(r)):"0":t[e]);var r})).toString()}function l(t,e,r){if(void 0===r&&(r={}),!t)return function(){};var n=function(t){var e=u(t),r=s.get(e);if(!r){var n,i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r,o=e.isIntersecting&&n.some((function(t){return e.intersectionRatio>=t}));t.trackVisibility&&"undefined"===typeof e.isVisible&&(e.isVisible=o),null==(r=i.get(e.target))||r.forEach((function(t){t(o,e)}))}))}),t);n=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),r={id:e,observer:o,elements:i},s.set(e,r)}return r}(r),i=n.id,o=n.observer,a=n.elements,c=a.get(t)||[];return a.has(t)||a.set(t,c),c.push(e),o.observe(t),function(){c.splice(c.indexOf(e),1),0===c.length&&(a.delete(t),o.unobserve(t)),0===a.size&&(o.disconnect(),s.delete(i))}}function h(t){return"function"!==typeof t.children}var p=function(t){var e,r;function n(e){var r;return(r=t.call(this,e)||this).node=null,r._unobserveCb=null,r.handleNode=function(t){r.node&&(r.unobserve(),t||r.props.triggerOnce||r.props.skip||r.setState({inView:!!r.props.initialInView,entry:void 0})),r.node=t||null,r.observeNode()},r.handleChange=function(t,e){t&&r.props.triggerOnce&&r.unobserve(),h(r.props)||r.setState({inView:t,entry:e}),r.props.onChange&&r.props.onChange(t,e)},r.state={inView:!!e.initialInView,entry:void 0},r}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var s=n.prototype;return s.componentDidUpdate=function(t){t.rootMargin===this.props.rootMargin&&t.root===this.props.root&&t.threshold===this.props.threshold&&t.skip===this.props.skip&&t.trackVisibility===this.props.trackVisibility&&t.delay===this.props.delay||(this.unobserve(),this.observeNode())},s.componentWillUnmount=function(){this.unobserve(),this.node=null},s.observeNode=function(){if(this.node&&!this.props.skip){var t=this.props,e=t.threshold,r=t.root,n=t.rootMargin,i=t.trackVisibility,o=t.delay;this._unobserveCb=l(this.node,this.handleChange,{threshold:e,root:r,rootMargin:n,trackVisibility:i,delay:o})}},s.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},s.render=function(){if(!h(this.props)){var t=this.state,e=t.inView,r=t.entry;return this.props.children({inView:e,entry:r,ref:this.handleNode})}var n=this.props,s=n.children,a=n.as,c=n.tag,u=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(n,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(i.createElement)(a||c||"div",o({ref:this.handleNode},u),s)},n}(i.Component);p.displayName="InView",p.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};var d=r(64),f=r(1);e.default=function(t){var e=t.title,r=t.color,o=void 0===r?"primary":r,s=function(t){var e=void 0===t?{}:t,r=e.threshold,n=e.delay,o=e.trackVisibility,s=e.rootMargin,a=e.root,c=e.triggerOnce,u=e.skip,h=e.initialInView,p=Object(i.useRef)(),d=Object(i.useState)({inView:!!h}),f=d[0],y=d[1],b=Object(i.useCallback)((function(t){void 0!==p.current&&(p.current(),p.current=void 0),u||t&&(p.current=l(t,(function(t,e){y({inView:t,entry:e}),e.isIntersecting&&c&&p.current&&(p.current(),p.current=void 0)}),{root:a,rootMargin:s,threshold:r,trackVisibility:o,delay:n}))}),[Array.isArray(r)?r.toString():r,a,s,c,u,o,n]);Object(i.useEffect)((function(){p.current||!f.entry||c||u||y({inView:!!h})}));var v=[b,f.inView,f.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}(),a=Object(n.a)(s,2),c=a[0],u=a[1];return Object(f.jsx)(d.a.h2,{className:"text-3xl md:text-6xl leading-relaxed tracking-wider py-5 text-".concat(o," font-montserrat"),variants:{initial:{y:50,opacity:0},animate:{y:0,opacity:1}},animate:u?"animate":"initial",transition:{ease:"easeOut",duration:.8,delay:.2},ref:c,children:e})}},44:function(t,e,r){"use strict";r.r(e);r(0);var n=r(34),i=r(1);e.default=function(t){var e=t.title;t.image;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("section",{className:"bg-secondary h-auto px-10 font-montserrat bg-secondary text-white",children:Object(i.jsx)(n.default,{title:e,color:"black"})})})}}}]);
//# sourceMappingURL=5.4e53bdad.chunk.js.map