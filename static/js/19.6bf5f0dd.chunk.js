(this["webpackJsonpmnm-exports"]=this["webpackJsonpmnm-exports"]||[]).push([[19,9],{33:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){i=!0,o=c}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return i}))},34:function(e,t,r){"use strict";r.r(t);var n=r(33),i=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var a=new Map,s=new WeakMap,c=0;function l(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(r=e.root)?(s.has(r)||(c+=1,s.set(r,c.toString())),s.get(r)):"0":e[t]);var r})).toString()}function u(e,t,r){if(void 0===r&&(r={}),!e)return function(){};var n=function(e){var t=l(e),r=a.get(t);if(!r){var n,i=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var r,o=t.isIntersecting&&n.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(r=i.get(t.target))||r.forEach((function(e){e(o,t)}))}))}),e);n=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:i},a.set(t,r)}return r}(r),i=n.id,o=n.observer,s=n.elements,c=s.get(e)||[];return s.has(e)||s.set(e,c),c.push(t),o.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(s.delete(e),o.unobserve(e)),0===s.size&&(o.disconnect(),a.delete(i))}}function d(e){return"function"!==typeof e.children}var h=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).node=null,r._unobserveCb=null,r.handleNode=function(e){r.node&&(r.unobserve(),e||r.props.triggerOnce||r.props.skip||r.setState({inView:!!r.props.initialInView,entry:void 0})),r.node=e||null,r.observeNode()},r.handleChange=function(e,t){e&&r.props.triggerOnce&&r.unobserve(),d(r.props)||r.setState({inView:e,entry:t}),r.props.onChange&&r.props.onChange(e,t)},r.state={inView:!!t.initialInView,entry:void 0},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=n.prototype;return a.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},a.componentWillUnmount=function(){this.unobserve(),this.node=null},a.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,r=e.root,n=e.rootMargin,i=e.trackVisibility,o=e.delay;this._unobserveCb=u(this.node,this.handleChange,{threshold:t,root:r,rootMargin:n,trackVisibility:i,delay:o})}},a.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},a.render=function(){if(!d(this.props)){var e=this.state,t=e.inView,r=e.entry;return this.props.children({inView:t,entry:r,ref:this.handleNode})}var n=this.props,a=n.children,s=n.as,c=n.tag,l=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(n,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(i.createElement)(s||c||"div",o({ref:this.handleNode},l),a)},n}(i.Component);h.displayName="InView",h.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};var p=r(66),f=r(1);t.default=function(e){var t=e.title,r=e.color,o=void 0===r?"primary":r,a=function(e){var t=void 0===e?{}:e,r=t.threshold,n=t.delay,o=t.trackVisibility,a=t.rootMargin,s=t.root,c=t.triggerOnce,l=t.skip,d=t.initialInView,h=Object(i.useRef)(),p=Object(i.useState)({inView:!!d}),f=p[0],b=p[1],y=Object(i.useCallback)((function(e){void 0!==h.current&&(h.current(),h.current=void 0),l||e&&(h.current=u(e,(function(e,t){b({inView:e,entry:t}),t.isIntersecting&&c&&h.current&&(h.current(),h.current=void 0)}),{root:s,rootMargin:a,threshold:r,trackVisibility:o,delay:n}))}),[Array.isArray(r)?r.toString():r,s,a,c,l,o,n]);Object(i.useEffect)((function(){h.current||!f.entry||c||l||b({inView:!!d})}));var v=[y,f.inView,f.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}(),s=Object(n.a)(a,3),c=s[0],l=s[1];s[2];return Object(f.jsx)(p.a.h2,{className:"text-3xl md:text-6xl leading-relaxed tracking-wider py-5 text-".concat(o," font-montserrat"),variants:{initial:{y:50,opacity:0},animate:{y:0,opacity:1}},animate:l?"animate":"initial",transition:{ease:"easeOut",duration:.8,delay:.2},ref:c,children:t})}},47:function(e,t,r){"use strict";t.a=r.p+"static/media/mnm-exports-about.c8b0faeb.jpg"},57:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r(42),o=r(13),a=r(47),s=r(34),c=r(1),l=Object(n.lazy)((function(){return Promise.all([r.e(1),r.e(10)]).then(r.bind(null,41))})),u=Object(n.lazy)((function(){return r.e(11).then(r.bind(null,43))})),d=Object(n.lazy)((function(){return r.e(29).then(r.bind(null,46))})),h=Object(n.lazy)((function(){return Promise.all([r.e(1),r.e(8)]).then(r.bind(null,40))}));t.default=function(){var e=[{name:"Mr. Manish Mahale",image:a.a},{name:"Mr. Parag Mahale",image:a.a}];return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(n.Suspense,{fallback:Object(c.jsx)(o.a,{}),children:[Object(c.jsxs)(i.a,{children:[Object(c.jsx)("title",{children:" About Us - MNM Exports "}),Object(c.jsx)("meta",{name:"description",content:"MNM Exports is a International Merchant of Apparel based in Dhule, Maharashtra, India. MNM Exports primarily works with comodities like fresh cotton t-shirts, shirts, etc."})]}),Object(c.jsx)(l,{}),Object(c.jsx)(u,{title:"About Us",image:a.a}),Object(c.jsxs)("section",{className:"h-auto p-10 text-primary font-montserrat text-xl leading-relaxed tracking-wider",children:[Object(c.jsx)("p",{children:"MNM exports is an export company situated in Dhule, Maharashtra, India. Our founder, Mr Manish Mahale, comes from a family of farmers. After seeing and experiencing all the opportunities that the apparel industry has to offer, decided to found MNM exports."}),Object(c.jsx)("p",{children:"MNM exports have been founded with the vision of helping the local farmers to cultivate good quality crops and helping them understand and take active participation in value addition of said crops."}),Object(c.jsx)("p",{children:"MNM exports values quality products and quality services above everything else. MNM exports ensure the quality of your product through rigorous quality checks with international quality standards."})]}),Object(c.jsxs)("section",{className:"p-10 text-center",children:[Object(c.jsx)(s.default,{title:"Our Team"}),Object(c.jsx)("div",{className:"grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-10 md:p-20",children:e.map((function(e){return Object(c.jsx)(d,{title:e.name,image:e.image},e.name)}))})]}),Object(c.jsx)(h,{})]})})}}}]);
//# sourceMappingURL=19.6bf5f0dd.chunk.js.map