(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4Brf":function(t,e,n){"use strict";var o=n("I+eb"),r=n("g6v/"),i=n("2oRo"),a=n("Gi26"),s=n("Fib7"),c=n("hh1v"),u=n("m/L8").f,l=n("6JNq"),f=i.Symbol;if(r&&s(f)&&(!("description"in f.prototype)||void 0!==f().description)){var p={},g=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof g?new f(t):void 0===t?f():f(t);return""===t&&(p[e]=!0),e};l(g,f);var m=g.prototype=f.prototype;m.constructor=g;var d=m.toString,b="Symbol(test)"==String(f("test")),h=/^Symbol\((.*)\)[^)]+$/;u(m,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=d.call(t);if(a(p,t))return"";var n=b?e.slice(7,-1):e.replace(h,"$1");return""===n?void 0:n}}),o({global:!0,forced:!0},{Symbol:g})}},"5Tg+":function(t,e,n){var o=n("tiKp");e.f=o},"7ZHo":function(t,e,n){},"84tl":function(t,e,n){t.exports=n.p+"assets/img/piotr-migdal-direct-smiling-2022-by-cytacka-thumbnail.ff0c983d.jpg"},"BX/b":function(t,e,n){var o=n("/GqU"),r=n("JBy8").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return r(t)}catch(t){return a.slice()}}(t):r(o(t))}},Qo9l:function(t,e,n){var o=n("2oRo");t.exports=o},Tqq3:function(t,e,n){"use strict";function o(t,e,n,o){return{title:t,meta:[{property:"og:title",content:t},{name:"twitter:title",content:t},{name:"description",content:e},{property:"og:description",content:e},{name:"twitter:description",content:e},{name:"url",content:n},{property:"og:url",content:n},{name:"twitter:url",content:n},{property:"og:image",content:o},{name:"twitter:image",content:o},{name:"author",content:"Piotr Migdał"}]}}n.d(e,"a",(function(){return o}))},UcZm:function(t,e,n){"use strict";n("7ZHo")},WXMF:function(t,e,n){"use strict";n.r(e);n("pNMO"),n("4Brf");var o=n("Tqq3"),r={metaInfo:function(){var t=this.$page.blogPost.title,e=this.$page.blogPost.description,r="".concat("https://p.migdal.pl").concat(this.$page.blogPost.path),i=this.$page.blogPost.image?this.$page.blogPost.image.src:n("84tl");return Object(o.a)(t,e,r,"https://p.migdal.pl"+i)},computed:{htmlCollectedImages:function(){return this.$page.blogPost.content}},methods:{author:function(t){return t.author||"Piotr Migdał"}}},i=(n("UcZm"),n("KHd+")),a=null,s=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("div",{staticClass:"markdown-header"},[n("h1",[t._v(t._s(t.$page.blogPost.title))]),n("p",{staticClass:"header-information"},[t._v("\n      "+t._s(t.$page.blogPost.date)+" | by "+t._s(t.author(t.$page.blogPost))+"\n      "),t.$page.blogPost.medium_url?n("span",[t._v("\n         | "),n("a",{attrs:{href:t.$page.blogPost.medium_url}},[t._v("orginally posted at Medium")])]):t._e(),t._v("\n      | "+t._s(t.$page.blogPost.timeToRead)+" min read\n    "),t.$page.blogPost.mentions.length>0?n("ul",{staticClass:"header-mentions"},t._l(t.$page.blogPost.mentions,(function(e){return n("li",[n("a",{attrs:{href:e.href}},[t._v(t._s(e.text))])])})),0):t._e()])]),n("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"markdown",domProps:{innerHTML:t._s(t.htmlCollectedImages)}})])}),[],!1,null,null,null);"function"==typeof a&&a(s);e.default=s.exports},"dG/n":function(t,e,n){var o=n("Qo9l"),r=n("Gi26"),i=n("5Tg+"),a=n("m/L8").f;t.exports=function(t){var e=o.Symbol||(o.Symbol={});r(e,t)||a(e,t,{value:i.f(t)})}},pNMO:function(t,e,n){"use strict";var o=n("I+eb"),r=n("2oRo"),i=n("0GbY"),a=n("xDBR"),s=n("g6v/"),c=n("STAE"),u=n("0Dky"),l=n("Gi26"),f=n("6LWA"),p=n("Fib7"),g=n("hh1v"),m=n("2bX/"),d=n("glrk"),b=n("ewvW"),h=n("/GqU"),y=n("oEtG"),v=n("V37c"),w=n("XGwC"),P=n("fHMY"),S=n("33Wh"),O=n("JBy8"),_=n("BX/b"),$=n("dBg+"),j=n("Bs8V"),T=n("m/L8"),k=n("0eef"),B=n("busE"),G=n("VpIT"),E=n("93I0"),N=n("0BK2"),C=n("kOOl"),I=n("tiKp"),M=n("5Tg+"),q=n("dG/n"),x=n("1E5z"),J=n("afO8"),L=n("tycR").forEach,R=E("hidden"),F=I("toPrimitive"),H=J.set,W=J.getterFor("Symbol"),X=Object.prototype,K=r.Symbol,U=i("JSON","stringify"),Z=j.f,D=T.f,Q=_.f,V=k.f,A=G("symbols"),Y=G("op-symbols"),z=G("string-to-symbol-registry"),tt=G("symbol-to-string-registry"),et=G("wks"),nt=r.QObject,ot=!nt||!nt.prototype||!nt.prototype.findChild,rt=s&&u((function(){return 7!=P(D({},"a",{get:function(){return D(this,"a",{value:7}).a}})).a}))?function(t,e,n){var o=Z(X,e);o&&delete X[e],D(t,e,n),o&&t!==X&&D(X,e,o)}:D,it=function(t,e){var n=A[t]=P(K.prototype);return H(n,{type:"Symbol",tag:t,description:e}),s||(n.description=e),n},at=function(t,e,n){t===X&&at(Y,e,n),d(t);var o=y(e);return d(n),l(A,o)?(n.enumerable?(l(t,R)&&t[R][o]&&(t[R][o]=!1),n=P(n,{enumerable:w(0,!1)})):(l(t,R)||D(t,R,w(1,{})),t[R][o]=!0),rt(t,o,n)):D(t,o,n)},st=function(t,e){d(t);var n=h(e),o=S(n).concat(ft(n));return L(o,(function(e){s&&!ct.call(n,e)||at(t,e,n[e])})),t},ct=function(t){var e=y(t),n=V.call(this,e);return!(this===X&&l(A,e)&&!l(Y,e))&&(!(n||!l(this,e)||!l(A,e)||l(this,R)&&this[R][e])||n)},ut=function(t,e){var n=h(t),o=y(e);if(n!==X||!l(A,o)||l(Y,o)){var r=Z(n,o);return!r||!l(A,o)||l(n,R)&&n[R][o]||(r.enumerable=!0),r}},lt=function(t){var e=Q(h(t)),n=[];return L(e,(function(t){l(A,t)||l(N,t)||n.push(t)})),n},ft=function(t){var e=t===X,n=Q(e?Y:h(t)),o=[];return L(n,(function(t){!l(A,t)||e&&!l(X,t)||o.push(A[t])})),o};(c||(B((K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?v(arguments[0]):void 0,e=C(t),n=function(t){this===X&&n.call(Y,t),l(this,R)&&l(this[R],e)&&(this[R][e]=!1),rt(this,e,w(1,t))};return s&&ot&&rt(X,e,{configurable:!0,set:n}),it(e,t)}).prototype,"toString",(function(){return W(this).tag})),B(K,"withoutSetter",(function(t){return it(C(t),t)})),k.f=ct,T.f=at,j.f=ut,O.f=_.f=lt,$.f=ft,M.f=function(t){return it(I(t),t)},s&&(D(K.prototype,"description",{configurable:!0,get:function(){return W(this).description}}),a||B(X,"propertyIsEnumerable",ct,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:K}),L(S(et),(function(t){q(t)})),o({target:"Symbol",stat:!0,forced:!c},{for:function(t){var e=v(t);if(l(z,e))return z[e];var n=K(e);return z[e]=n,tt[n]=e,n},keyFor:function(t){if(!m(t))throw TypeError(t+" is not a symbol");if(l(tt,t))return tt[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),o({target:"Object",stat:!0,forced:!c,sham:!s},{create:function(t,e){return void 0===e?P(t):st(P(t),e)},defineProperty:at,defineProperties:st,getOwnPropertyDescriptor:ut}),o({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:lt,getOwnPropertySymbols:ft}),o({target:"Object",stat:!0,forced:u((function(){$.f(1)}))},{getOwnPropertySymbols:function(t){return $.f(b(t))}}),U)&&o({target:"JSON",stat:!0,forced:!c||u((function(){var t=K();return"[null]"!=U([t])||"{}"!=U({a:t})||"{}"!=U(Object(t))}))},{stringify:function(t,e,n){for(var o,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(o=e,(g(e)||void 0!==t)&&!m(t))return f(e)||(e=function(t,e){if(p(o)&&(e=o.call(this,t,e)),!m(e))return e}),r[1]=e,U.apply(null,r)}});if(!K.prototype[F]){var pt=K.prototype.valueOf;B(K.prototype,F,(function(){return pt.apply(this,arguments)}))}x(K,"Symbol"),N[R]=!0}}]);