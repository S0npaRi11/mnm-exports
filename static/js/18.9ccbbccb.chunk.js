(this["webpackJsonpmnm-exports"]=this["webpackJsonpmnm-exports"]||[]).push([[18],{33:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(s){o=!0,a=s}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return o}))},51:function(t,e,r){t.exports=r(52)},52:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(T){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(t,e,r){var n=h;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===b){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=b,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?b:f,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=b,r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(T){return{type:"throw",arg:T}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",p="executing",b="completed",d={};function m(){}function y(){}function v(){}var j={};s(j,a,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(_([])));x&&x!==r&&n.call(x,a)&&(j=x);var O=v.prototype=m.prototype=Object.create(j);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function N(t,e){function r(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function _(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return y.prototype=v,s(O,"constructor",v),s(v,"constructor",y),y.displayName=s(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},w(N.prototype),s(N.prototype,i,(function(){return this})),t.AsyncIterator=N,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new N(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(O),s(O,c,"Generator"),s(O,a,(function(){return this})),s(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:_(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},66:function(t,e,r){"use strict";r.r(e);var n=r(51),o=r.n(n);function a(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}var i=r(33),c=r(0),s=r(39),u=r(13),l=r(1),h=Object(c.lazy)((function(){return Promise.all([r.e(0),r.e(24)]).then(r.bind(null,44))})),f=Object(c.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(16)]).then(r.bind(null,41))})),p=Object(c.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(25)]).then(r.bind(null,43))}));e.default=function(){var t=Object(c.useState)(""),e=Object(i.a)(t,2),r=e[0],n=e[1],b=Object(c.useState)(""),d=Object(i.a)(b,2),m=d[0],y=d[1],v=Object(c.useState)(""),j=Object(i.a)(v,2),g=j[0],x=j[1],O=Object(c.useState)(""),w=Object(i.a)(O,2),N=w[0],L=w[1],S=Object(c.useState)(""),E=Object(i.a)(S,2),k=E[0],_=E[1],P=Object(c.useState)(""),T=Object(i.a)(P,2),A=T[0],F=T[1],G=Object(c.useState)(""),z=Object(i.a)(G,2),C=z[0],I=z[1],M=Object(c.useState)(""),D=Object(i.a)(M,2),R=D[0],Z=D[1],$=!1,q=!1,J=!1,U=!1,Y=function(){if(""!==r){$=!/[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(r)}if(""!==m){q=!/[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(m)}if(""!==g){J=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(g)}return""!==N&&(U=!0),$&&q&&J&&U},B=function(){var t,e=(t=o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),!Y()){t.next=9;break}return t.next=5,fetch("https://v1.nocodeapi.com/s0npari11/google_sheets/DDzNHovbOhhZtycR?tabId=Sheet1",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify([[r,m,g,N,(new Date).toLocaleString()]])});case 5:200===t.sent.status?(alert("Thank you for your request!! \n We will contact you back via email within a working day."),n(""),x(""),L(""),y("")):alert("There seems to be a problem with server corrently. Try again after a little while. \n Sorry for the inconvenience"),t.next=13;break;case 9:$||_("Name can't containt special characters"),J||F("Email is not valid"),U||Z("Message can't be empty"),q||I("Busniess name can't containt special characters");case 13:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,s,"next",t)}function s(t){a(i,n,o,c,s,"throw",t)}c(void 0)}))});return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(c.Suspense,{fallback:Object(l.jsx)(u.a,{}),children:[Object(l.jsxs)(s.a,{children:[Object(l.jsx)("title",{children:" Contact Us - MNM Exports "}),Object(l.jsx)("meta",{name:"description",content:"You can leave your requirements / quries by filling the given form, email us or follow us on social media for regular updates"})]}),Object(l.jsx)(p,{}),Object(l.jsx)(h,{title:"Contact Us"}),Object(l.jsx)("div",{className:"text-left p-10",children:Object(l.jsxs)("form",{className:"md:mx-20 w-auto md:px-20 font-montserrat",onSubmit:B,children:[Object(l.jsxs)("div",{className:"p-3 md:p-5",children:[Object(l.jsx)("label",{htmlFor:"name",children:" Name "})," ",Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"text",className:"border border-black h-10 w-full p-2 mt-2",value:r,onChange:function(t){return n(t.target.value)}})," ",Object(l.jsx)("br",{}),Object(l.jsx)("span",{className:"text-danger text-sm",children:k})]}),Object(l.jsxs)("div",{className:"p-3 md:p-5",children:[Object(l.jsx)("label",{htmlFor:"business name",children:" Business Name "})," ",Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"text",className:"border border-black h-10 w-full p-2 mt-2",value:m,onChange:function(t){return y(t.target.value)}})," ",Object(l.jsx)("br",{}),Object(l.jsxs)("span",{className:"text-danger text-sm",children:[" ",C," "]})]}),Object(l.jsxs)("div",{className:"p-3 md:p-5",children:[Object(l.jsx)("label",{htmlFor:"email",children:" Email "})," ",Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"email",className:"border border-black h-10 w-full p-2 mt-2",value:g,onChange:function(t){return x(t.target.value)}})," ",Object(l.jsx)("br",{}),Object(l.jsxs)("span",{className:"text-danger text-sm",children:[" ",A," "]})]}),Object(l.jsxs)("div",{className:"p-3 md:p-5",children:[Object(l.jsx)("label",{htmlFor:"name",children:" Message "})," ",Object(l.jsx)("br",{}),Object(l.jsx)("textarea",{className:"border border-black w-full p-2 mt-2",value:N,onChange:function(t){return L(t.target.value)}}),Object(l.jsxs)("span",{className:"text-danger text-sm",children:[" ",R," "]})]}),Object(l.jsx)("div",{className:"p-3 md:p-5",children:Object(l.jsx)("button",{className:"p-4 border border-black font-montserrat inline-block transition duration-600 hover:bg-primary",type:"submit",children:" Send Message "})})]})}),Object(l.jsx)(f,{})]})})}}}]);
//# sourceMappingURL=18.9ccbbccb.chunk.js.map