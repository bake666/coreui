(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3cb51c4"],{5596:function(t,e,n){var o,i,r;(function(n,s){i=[],o=s,r="function"===typeof o?o.apply(e,i):o,void 0===r||(t.exports=r)})(0,(function(){"use strict";var t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var n=function(){var n,o;if("undefined"===typeof window)return{init:function(){}};function i(t,e){var n=this;t.style.opacity&&t.style.opacity>.05?t.style.opacity=t.style.opacity-.05:t.style.opacity&&t.style.opacity<=.1?t.parentNode&&(t.parentNode.removeChild(t),e&&e()):t.style.opacity=.9,setTimeout((function(){return i.apply(n,[t,e])}),1e3/30)}var r={error:"error",warn:"warn",success:"success",info:"info"},s={container:"mini-toastr",notification:"mini-toastr__notification",title:"mini-toastr-notification__title",icon:"mini-toastr-notification__icon",message:"mini-toastr-notification__message",error:"-"+r.error,warn:"-"+r.warn,success:"-"+r.success,info:"-"+r.info};function a(e,n,o){for(var i in n=n||{},o=o||"",e)if(e.hasOwnProperty(i)){var r=e[i];r&&"object"===("undefined"===typeof r?"undefined":t(r))&&!(r instanceof Date||r instanceof RegExp)?a(r,n,o+i+" "):n[o]&&"object"===t(n[o])?n[o][i]=r:(n[o]={},n[o][i]=r)}return n}function c(t){var e=a(t),n=JSON.stringify(e,null,2);return n=n.replace(/"([^"]*)": \{/g,"$1 {").replace(/"([^"]*)"/g,"$1").replace(/(\w*-?\w*): ([\w\d .#]*),?/g,"$1: $2;").replace(/},/g,"}\n").replace(/ &([.:])/g,"$1"),n=n.substr(1,n.lastIndexOf("}")-1),n}function u(t){var e=document.head||document.getElementsByTagName("head")[0],n=f("style");n.id="mini-toastr-styles",n.type="text/css",n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t)),e.appendChild(n)}var l={types:r,animation:i,timeout:3e3,icons:{},appendTarget:document.body,node:f(),style:(o={},e(o,"."+s.container,{position:"fixed","z-index":99999,right:"12px",top:"12px"}),e(o,"."+s.notification,(n={cursor:"pointer",padding:"12px 18px",margin:"0 0 6px 0","background-color":"#000",opacity:.8,color:"#fff","border-radius":"3px","box-shadow":"#3c3b3b 0 0 12px",width:"300px"},e(n,"&."+s.error,{"background-color":"#D5122B"}),e(n,"&."+s.warn,{"background-color":"#F5AA1E"}),e(n,"&."+s.success,{"background-color":"#7AC13E"}),e(n,"&."+s.info,{"background-color":"#4196E1"}),e(n,"&:hover",{opacity:1,"box-shadow":"#000 0 0 12px"}),n)),e(o,"."+s.title,{"font-weight":"500"}),e(o,"."+s.message,{display:"inline-block","vertical-align":"middle",width:"240px",padding:"0 12px"}),o)};function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div";return document.createElement(t)}function p(t,e,n){var o=f(n.icons[e].nodeType),i=n.icons[e].attrs;for(var r in i)i.hasOwnProperty(r)&&o.setAttribute(r,i[r]);t.appendChild(o)}function d(t,e,n){var o=f();o.className=n,o.appendChild(document.createTextNode(e)),t.appendChild(o)}var y={config:l,showMessage:function(t,e,n,o,i,r){var a={};Object.assign(a,this.config),Object.assign(a,r);var c=f();return c.className=s.notification+" "+s[n],c.onclick=function(){a.animation(c,null)},e&&d(c,e,s.title),a.icons[n]&&p(c,n,a),t&&d(c,t,s.message),a.node.insertBefore(c,a.node.firstChild),setTimeout((function(){return a.animation(c,i)}),o||a.timeout),i&&i(),this},init:function(t){var e=this,n={};Object.assign(n,l),Object.assign(n,t),this.config=n;var o=c(n.style);return u(o),n.node.id=""+s.container,n.node.className=""+s.container,n.appendTarget.appendChild(n.node),Object.keys(n.types).forEach((function(t){y[n.types[t]]=function(e,o,i,r,s){return this.showMessage(e,o,n.types[t],i,r,s),this}.bind(e)})),this},setIcon:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"i",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];n["class"]=n["class"]?n["class"]+" "+s.icon:s.icon,this.config.icons[t]={nodeType:e,attrs:n}}};return y}();return n}))},afd9:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"animated fadeIn"},[n("b-card",{attrs:{"show-footer":""}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("i",{staticClass:"icon-info"}),t._v(" Toastr\n      "),n("a",{staticClass:"badge badge-danger ml-1",attrs:{href:"https://coreui.io/pro/vue/",rel:"noreferrer noopener",target:"_blank"}},[t._v("CoreUI Pro")]),n("div",{staticClass:"card-header-actions"},[n("a",{staticClass:"card-header-action",attrs:{href:"https://github.com/se-panfilov/vue-notifications",rel:"noreferrer noopener",target:"_blank"}},[n("small",{staticClass:"text-muted"},[t._v("docs")])])])]),n("b-button",{staticClass:"mr-1",attrs:{type:"button",variant:"success"},on:{click:function(e){return t.showSuccessMsg()}}},[t._v("Success")]),n("b-button",{staticClass:"mr-1",attrs:{type:"button",variant:"info"},on:{click:function(e){return t.showInfoMsg()}}},[t._v("Info")]),n("b-button",{staticClass:"mr-1",attrs:{type:"button",variant:"warning"},on:{click:function(e){return t.showWarnMsg()}}},[t._v("Warning")]),n("b-button",{staticClass:"mr-1",attrs:{type:"button",variant:"danger"},on:{click:function(e){return t.showErrorMsg()}}},[t._v("Error")])],1)],1)},i=[],r=n("a026"),s=n("e440"),a=n.n(s),c=n("5596"),u=n.n(c),l={success:"success",error:"error",info:"info",warn:"warn"};function f(t){var e=t.title,n=t.message,o=t.type,i=t.timeout,r=t.cb;return u.a[o](n,e,i,r)}u.a.init({types:l});var p={success:f,error:f,info:f,warn:f};r["default"].use(a.a,p);var d={name:"toastr",data:function(){return{}},notifications:{showSuccessMsg:{type:a.a.types.success,title:"Hello there",message:"That's the success!"},showInfoMsg:{type:a.a.types.info,title:"Hey you",message:"Here is some info for you"},showWarnMsg:{type:a.a.types.warn,title:"Wow, man",message:"That's the kind of warning"},showErrorMsg:{type:a.a.types.error,title:"Wow-wow",message:"That's the error"}}},y=d,h=n("2877"),g=Object(h["a"])(y,o,i,!1,null,null,null);e["default"]=g.exports},e440:function(t,e,n){var o,i,r;(function(n,s){i=[],o=s,r="function"===typeof o?o.apply(e,i):o,void 0===r||(t.exports=r)})(0,(function(){"use strict";function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var e="VueNotifications",n="vue-notifications",o="notifications",i={error:"error",warn:"warn",info:"info",success:"success"},r=1,s={alreadyInstalled:e+": plugin already installed",methodNameConflict:e+": names conflict - "};function a(t){var e=t.version.match(/(\d+)/g);return+e[0]}function c(t){var e=t.type,n=t.message,o=t.title,r="Title: "+o+", Message: "+n+", Type: "+e;e===i.error?console.error(r):e===i.warn?console.warn(r):console.log(r)}function u(t,e){var n={};return Object.keys(e).forEach((function(o){n[o]="cb"===o?e[o].bind(t):"function"===typeof e[o]?e[o].call(t):e[o]})),n}function l(t,e){var n=u(e,t),o=m.pluginOptions[n.type],i=o?m.pluginOptions[n.type]:c;if(i(n,e),t.cb)return t.cb()}function f(t,e){Object.keys(e).forEach((function(n){t[e[n]]=function(t){return t.type=e[n],l(t)}}))}function p(t,e,n,o){n.methods||(n.methods={}),n.methods[e]||(n.methods[e]=d(t,e,n,o))}function d(t,e,n,o){return function(i){var r=Object.assign({},m.config,n[m.propertyName][e],i);return l(r,o,t)}}function y(t,e,o){e&&(Object.keys(e).forEach((function(e){return p(t,e,t.$options,o)})),t.$emit(n+"-initiated"))}function h(t,e){if(e){var o=t.$options.methods;Object.keys(e).forEach((function(t){o[t]&&(o[t]=void 0,delete o[t])})),t.$emit(n+"-unlinked")}}function g(e,n){var o,i=a(e)===r?"init":"beforeCreate";return o={},t(o,i,(function(){var t=this.$options[m.propertyName];y(this,t,n)})),t(o,"beforeDestroy",(function(){var t=this.$options[m.propertyName];h(this,t)})),o}var m={types:i,propertyName:o,config:{type:i.info,timeout:3e3},pluginOptions:{},installed:!1,install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.installed)throw console.error(s.alreadyInstalled);var n=g(t,e);t.mixin(n),this.setPluginOptions(e),f(this,this.types),this.installed=!0},setPluginOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.pluginOptions=t}};return"undefined"!==typeof window&&window.Vue&&window.Vue.use(m),m}))}}]);
//# sourceMappingURL=chunk-b3cb51c4.a4165984.js.map