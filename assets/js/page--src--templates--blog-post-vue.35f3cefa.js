(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1OyB":function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return i}))},"7ZHo":function(t,e,n){},"84tl":function(t,e,n){t.exports=n.p+"assets/img/piotr-migdal-direct-smiling-2022-by-cytacka-thumbnail.c6cd93cf.jpg"},BzYT:function(t,e,n){var i=n("xFgl"),r=n("OHzE").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?function(t){try{return r(t)}catch(t){return a.slice()}}(t):r(i(t))}},GaaO:function(t,e,n){var i=n("qcUw");e.f=i},IjEv:function(t,e,n){"use strict";var i=n("EqoQ"),r=n("3yG5"),o=n("RByB"),a=n("cy3i"),s=n("/yhu"),u=n("bdo+"),c=n("cQx/").f,l=n("3Zg8"),f=o.Symbol;if(r&&s(f)&&(!("description"in f.prototype)||void 0!==f().description)){var g={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new f(t):void 0===t?f():f(t);return""===t&&(g[e]=!0),e};l(p,f);var h=p.prototype=f.prototype;h.constructor=p;var m=h.toString,d="Symbol(test)"==String(f("test")),v=/^Symbol\((.*)\)[^)]+$/;c(h,"description",{configurable:!0,get:function(){var t=u(this)?this.valueOf():this,e=m.call(t);if(a(g,t))return"";var n=d?e.slice(7,-1):e.replace(v,"$1");return""===n?void 0:n}}),i({global:!0,forced:!0},{Symbol:p})}},PTfx:function(t,e,n){var i=n("c10S"),r=n("cy3i"),o=n("GaaO"),a=n("cQx/").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});r(e,t)||a(e,t,{value:o.f(t)})}},Tqq3:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("1OyB"),r=n("vuIU");n("l2Ro");var o="https://p.migdal.pl"+n("84tl"),a=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";Object(i.a)(this,t),this._base_url=r,this._title={main:e,og:e,twitter:e},this._description={main:n,og:n,twitter:n},this._url={main:o,og:o,twitter:o},this._image={main:a,og:a,twitter:a},this._author=s}return Object(r.a)(t,[{key:"getMeta",value:function(){return{title:this._title.main,meta:[{property:"og:title",content:this._title.og},{name:"twitter:title",content:this._title.twitter},{name:"description",content:this._description.main},{property:"og:description",content:this._description.og},{name:"twitter:description",content:this._description.twitter},{name:"url",content:this._url.main},{property:"og:url",content:this._url.og},{name:"twitter:url",content:this._url.twitter},{property:"og:image",content:this._image.og},{name:"twitter:image",content:this._image.twitter},{name:"author",content:this._author}]}}},{key:"setTitle",value:function(t,e){return e?this._title[e]=t:this._title={main:t,og:t,twitter:t},this}},{key:"setDescription",value:function(t,e){return e?this._description[e]=t:this._description={main:t,og:t,twitter:t},this}},{key:"setRelativeURL",value:function(t,e){var n="".concat(this._base_url).concat(t);return e?this._url[e]=n:this._url={main:n,og:n,twitter:n},this}},{key:"setAbsoluteURL",value:function(t,e){return e?this._url[e]=t:this._url={main:t,og:t,twitter:t},this}},{key:"maybeSetRelativeImage",value:function(t,e){if(!t)return this;var n="".concat(this._base_url).concat(t);return e?this._image[e]=n:this._image={main:n,og:n,twitter:n},this}}],[{key:"defaultMigdal",value:function(){return new t("Piotr Migdał","Piotr Migdał - blog posts and stuff.","https://p.migdal.pl","https://p.migdal.pl",o,"Piotr Migdał")}}]),t}()},UcZm:function(t,e,n){"use strict";n("7ZHo")},WXMF:function(t,e,n){"use strict";n.r(e);n("pol5"),n("IjEv");var i=n("Tqq3"),r={metaInfo:function(){var t;return i.a.defaultMigdal().setTitle(this.$page.blogPost.title).setDescription(this.$page.blogPost.description).setRelativeURL(this.$page.blogPost.path).maybeSetRelativeImage(null===(t=this.$page.blogPost.image)||void 0===t?void 0:t.src).getMeta()},computed:{htmlCollectedImages:function(){return this.$page.blogPost.content}},methods:{author:function(t){return t.author||"Piotr Migdał"}}},o=(n("UcZm"),n("KHd+")),a=null,s=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("div",{staticClass:"markdown-header"},[n("h1",[t._v(t._s(t.$page.blogPost.title))]),n("p",{staticClass:"header-information"},[t._v("\n      "+t._s(t.$page.blogPost.date)+" | by "+t._s(t.author(t.$page.blogPost))+"\n      "),t.$page.blogPost.medium_url?n("span",[t._v("\n         | "),n("a",{attrs:{href:t.$page.blogPost.medium_url}},[t._v("orginally posted at Medium")])]):t._e(),t._v("\n      | "+t._s(t.$page.blogPost.timeToRead)+" min read\n    "),t.$page.blogPost.mentions.length>0?n("ul",{staticClass:"header-mentions"},t._l(t.$page.blogPost.mentions,(function(e){return n("li",[n("a",{attrs:{href:e.href}},[t._v(t._s(e.text))])])})),0):t._e()])]),n("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"markdown",domProps:{innerHTML:t._s(t.htmlCollectedImages)}}),n("footer",[t._v("\n    By "),n("g-link",{attrs:{to:"/"}},[t._v("Piotr Migdał")]),t._v(", a curious being, doctor of\n    sorcery. See "),n("g-link",{attrs:{to:"/blog"}},[t._v("my other blog posts")]),t._v(".\n  ")],1)])}),[],!1,null,null,null);"function"==typeof a&&a(s);e.default=s.exports},c10S:function(t,e,n){var i=n("RByB");t.exports=i},pol5:function(t,e,n){"use strict";var i=n("EqoQ"),r=n("RByB"),o=n("ml1h"),a=n("D59c"),s=n("3yG5"),u=n("LXrG"),c=n("5tlu"),l=n("cy3i"),f=n("2CzT"),g=n("/yhu"),p=n("bdo+"),h=n("gc9D"),m=n("a3gQ"),d=n("RpcN"),v=n("xFgl"),y=n("Vkfl"),b=n("AoJY"),_=n("9Rqp"),w=n("oFY8"),P=n("NUYl"),O=n("OHzE"),S=n("BzYT"),k=n("Bnsn"),j=n("r99Z"),$=n("cQx/"),T=n("QI7S"),x=n("C0OK"),R=n("dLMH"),M=n("kFjK"),B=n("ZTPG"),E=n("KJNj"),I=n("qcUw"),U=n("GaaO"),C=n("PTfx"),q=n("IAU4"),N=n("YLkJ"),L=n("Od7x").forEach,Q=M("hidden"),F=I("toPrimitive"),G=N.set,H=N.getterFor("Symbol"),J=Object.prototype,Z=r.Symbol,Y=o("JSON","stringify"),z=j.f,D=$.f,K=S.f,A=T.f,W=R("symbols"),X=R("op-symbols"),V=R("string-to-symbol-registry"),tt=R("symbol-to-string-registry"),et=R("wks"),nt=r.QObject,it=!nt||!nt.prototype||!nt.prototype.findChild,rt=s&&c((function(){return 7!=w(D({},"a",{get:function(){return D(this,"a",{value:7}).a}})).a}))?function(t,e,n){var i=z(J,e);i&&delete J[e],D(t,e,n),i&&t!==J&&D(J,e,i)}:D,ot=function(t,e){var n=W[t]=w(Z.prototype);return G(n,{type:"Symbol",tag:t,description:e}),s||(n.description=e),n},at=function(t,e,n){t===J&&at(X,e,n),m(t);var i=y(e);return m(n),l(W,i)?(n.enumerable?(l(t,Q)&&t[Q][i]&&(t[Q][i]=!1),n=w(n,{enumerable:_(0,!1)})):(l(t,Q)||D(t,Q,_(1,{})),t[Q][i]=!0),rt(t,i,n)):D(t,i,n)},st=function(t,e){m(t);var n=v(e),i=P(n).concat(ft(n));return L(i,(function(e){s&&!ut.call(n,e)||at(t,e,n[e])})),t},ut=function(t){var e=y(t),n=A.call(this,e);return!(this===J&&l(W,e)&&!l(X,e))&&(!(n||!l(this,e)||!l(W,e)||l(this,Q)&&this[Q][e])||n)},ct=function(t,e){var n=v(t),i=y(e);if(n!==J||!l(W,i)||l(X,i)){var r=z(n,i);return!r||!l(W,i)||l(n,Q)&&n[Q][i]||(r.enumerable=!0),r}},lt=function(t){var e=K(v(t)),n=[];return L(e,(function(t){l(W,t)||l(B,t)||n.push(t)})),n},ft=function(t){var e=t===J,n=K(e?X:v(t)),i=[];return L(n,(function(t){!l(W,t)||e&&!l(J,t)||i.push(W[t])})),i};(u||(x((Z=function(){if(this instanceof Z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?b(arguments[0]):void 0,e=E(t),n=function(t){this===J&&n.call(X,t),l(this,Q)&&l(this[Q],e)&&(this[Q][e]=!1),rt(this,e,_(1,t))};return s&&it&&rt(J,e,{configurable:!0,set:n}),ot(e,t)}).prototype,"toString",(function(){return H(this).tag})),x(Z,"withoutSetter",(function(t){return ot(E(t),t)})),T.f=ut,$.f=at,j.f=ct,O.f=S.f=lt,k.f=ft,U.f=function(t){return ot(I(t),t)},s&&(D(Z.prototype,"description",{configurable:!0,get:function(){return H(this).description}}),a||x(J,"propertyIsEnumerable",ut,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:Z}),L(P(et),(function(t){C(t)})),i({target:"Symbol",stat:!0,forced:!u},{for:function(t){var e=b(t);if(l(V,e))return V[e];var n=Z(e);return V[e]=n,tt[n]=e,n},keyFor:function(t){if(!h(t))throw TypeError(t+" is not a symbol");if(l(tt,t))return tt[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),i({target:"Object",stat:!0,forced:!u,sham:!s},{create:function(t,e){return void 0===e?w(t):st(w(t),e)},defineProperty:at,defineProperties:st,getOwnPropertyDescriptor:ct}),i({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:lt,getOwnPropertySymbols:ft}),i({target:"Object",stat:!0,forced:c((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(d(t))}}),Y)&&i({target:"JSON",stat:!0,forced:!u||c((function(){var t=Z();return"[null]"!=Y([t])||"{}"!=Y({a:t})||"{}"!=Y(Object(t))}))},{stringify:function(t,e,n){for(var i,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(i=e,(p(e)||void 0!==t)&&!h(t))return f(e)||(e=function(t,e){if(g(i)&&(e=i.call(this,t,e)),!h(e))return e}),r[1]=e,Y.apply(null,r)}});if(!Z.prototype[F]){var gt=Z.prototype.valueOf;x(Z.prototype,F,(function(){return gt.apply(this,arguments)}))}q(Z,"Symbol"),B[Q]=!0},vuIU:function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}n.d(e,"a",(function(){return r}))}}]);