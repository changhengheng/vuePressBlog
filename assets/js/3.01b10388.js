(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{570:function(t,e,n){},571:function(t,e,n){},572:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return c})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f}));n(50),n(124),n(126),n(323);var r=/#.*$/,i=/\.(md|html)$/,s=/\/$/,o=/^(https?:|mailto:|tel:)/;function a(t){return o.test(t)}function u(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function l(t){if(a(t))return t;var e=t.match(r),n=e?e[0]:"",o=function(t){return decodeURI(t).replace(r,"").replace(i,"")}(t);return s.test(o)?t:o+".html"+n}function f(t,e,n){if(!t)return n;for(var r,i=e;(i=i.$parent)&&!r;)r=i.$refs[t];return r&&r.$el&&(r=r.$el),r||n}},573:function(t,e,n){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",r="second",i="minute",s="hour",o="day",a="week",u="month",c="quarter",l="year",f="date",h="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},m={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+g(r,2,"0")+":"+g(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,o=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:l,w:a,d:o,D:f,h:s,m:i,s:r,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",_={};_[$]=v;var y=function(t){return t instanceof O},S=function t(e,n,r){var i;if(!e)return $;if("string"==typeof e){var s=e.toLowerCase();_[s]&&(i=s),n&&(_[s]=n,i=s);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var a=e.name;_[a]=e,i=a}return!r&&i&&($=i),i||!r&&$},b=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new O(n)},M=m;M.l=S,M.i=y,M.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var O=function(){function v(t){this.$L=S(t.locale,null,!0),this.parse(t)}var g=v.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(d);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return M},g.isValid=function(){return!(this.$d.toString()===h)},g.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return b(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<b(t)},g.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,c=!!M.u(e)||e,h=M.p(t),d=function(t,e){var r=M.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?r:r.endOf(o)},p=function(t,e){return M.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,g=this.$M,m=this.$D,$="set"+(this.$u?"UTC":"");switch(h){case l:return c?d(1,0):d(31,11);case u:return c?d(1,g):d(0,g+1);case a:var _=this.$locale().weekStart||0,y=(v<_?v+7:v)-_;return d(c?m-y:m+(6-y),g);case o:case f:return p($+"Hours",0);case s:return p($+"Minutes",1);case i:return p($+"Seconds",2);case r:return p($+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var a,c=M.p(t),h="set"+(this.$u?"UTC":""),d=(a={},a[o]=h+"Date",a[f]=h+"Date",a[u]=h+"Month",a[l]=h+"FullYear",a[s]=h+"Hours",a[i]=h+"Minutes",a[r]=h+"Seconds",a[n]=h+"Milliseconds",a)[c],p=c===o?this.$D+(e-this.$W):e;if(c===u||c===l){var v=this.clone().set(f,1);v.$d[d](p),v.init(),this.$d=v.set(f,Math.min(this.$D,v.daysInMonth())).$d}else d&&this.$d[d](p);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[M.p(t)]()},g.add=function(n,c){var f,h=this;n=Number(n);var d=M.p(c),p=function(t){var e=b(h);return M.w(e.date(e.date()+Math.round(t*n)),h)};if(d===u)return this.set(u,this.$M+n);if(d===l)return this.set(l,this.$y+n);if(d===o)return p(1);if(d===a)return p(7);var v=(f={},f[i]=t,f[s]=e,f[r]=1e3,f)[d]||1,g=this.$d.getTime()+n*v;return M.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=M.z(this),s=this.$H,o=this.$m,a=this.$M,u=n.weekdays,c=n.months,l=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},f=function(t){return M.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:M.s(a+1,2,"0"),MMM:l(n.monthsShort,a,c,3),MMMM:l(c,a),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,u,2),ddd:l(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:M.s(s,2,"0"),h:f(1),hh:f(2),a:d(s,o,!0),A:d(s,o,!1),m:String(o),mm:M.s(o,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(t,e){return e||v[t]||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,f,h){var d,p=M.p(f),v=b(n),g=(v.utcOffset()-this.utcOffset())*t,m=this-v,$=M.m(this,v);return $=(d={},d[l]=$/12,d[u]=$,d[c]=$/3,d[a]=(m-g)/6048e5,d[o]=(m-g)/864e5,d[s]=m/e,d[i]=m/t,d[r]=m/1e3,d)[p]||m,h?$:M.a($)},g.daysInMonth=function(){return this.endOf(u).$D},g.$locale=function(){return _[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},g.clone=function(){return M.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},v}(),D=O.prototype;return b.prototype=D,[["$ms",n],["$s",r],["$m",i],["$H",s],["$W",o],["$M",u],["$y",l],["$D",f]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,O,b),t.$i=!0),b},b.locale=S,b.isDayjs=y,b.unix=function(t){return b(1e3*t)},b.en=_[$],b.Ls=_,b.p={},b}()},574:function(t,e,n){t.exports=function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(r,i,s){var o=i.prototype;s.utc=function(t){var e={date:t,utc:!0,args:arguments};return new i(e)},o.utc=function(e){var n=s(this.toDate(),{locale:this.$L,utc:!0});return e?n.add(this.utcOffset(),t):n},o.local=function(){return s(this.toDate(),{locale:this.$L,utc:!1})};var a=o.parse;o.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),a.call(this,t)};var u=o.init;o.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else u.call(this)};var c=o.utcOffset;o.utcOffset=function(r,i){var s=this.$utils().u;if(s(r))return this.$u?0:s(this.$offset)?c.call(this):this.$offset;if("string"==typeof r&&null===(r=function(t){void 0===t&&(t="");var r=t.match(e);if(!r)return null;var i=(""+r[0]).match(n)||["-",0,0],s=i[0],o=60*+i[1]+ +i[2];return 0===o?0:"+"===s?o:-o}(r)))return this;var o=Math.abs(r)<=16?60*r:r,a=this;if(i)return a.$offset=o,a.$u=0===r,a;if(0!==r){var u=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(a=this.local().add(o+u,t)).$offset=o,a.$x.$localOffset=u}else a=this.utc();return a};var l=o.format;o.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return l.call(this,e)},o.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},o.isUTC=function(){return!!this.$u},o.toISOString=function(){return this.toDate().toISOString()},o.toString=function(){return this.toDate().toUTCString()};var f=o.toDate;o.toDate=function(t){return"s"===t&&this.$offset?s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():f.call(this)};var h=o.diff;o.diff=function(t,e,n){if(t&&this.$u===t.$u)return h.call(this,t,e,n);var r=this.local(),i=s(t).local();return h.call(r,i,e,n)}}}()},575:function(t,e,n){"use strict";n(570)},576:function(t,e,n){"use strict";n(571)},577:function(t,e,n){"use strict";var r=n(14),i=n(3),s=n(7),o=n(186),a=n(30),u=n(15),c=n(187),l=n(57),f=n(91),h=n(311),d=n(6),p=n(72).f,v=n(58).f,g=n(19).f,m=n(578),$=n(322).trim,_=i.Number,y=_.prototype,S=i.TypeError,b=s("".slice),M=s("".charCodeAt),O=function(t){var e=h(t,"number");return"bigint"==typeof e?e:D(e)},D=function(t){var e,n,r,i,s,o,a,u,c=h(t,"number");if(f(c))throw S("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=$(c),43===(e=M(c,0))||45===e){if(88===(n=M(c,2))||120===n)return NaN}else if(48===e){switch(M(c,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+c}for(o=(s=b(c,2)).length,a=0;a<o;a++)if((u=M(s,a))<48||u>i)return NaN;return parseInt(s,r)}return+c};if(o("Number",!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var x,w=function(t){var e=arguments.length<1?0:_(O(t)),n=this;return l(y,n)&&d((function(){m(n)}))?c(Object(e),n,w):e},T=r?p(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),k=0;T.length>k;k++)u(_,x=T[k])&&!u(w,x)&&g(w,x,v(_,x));w.prototype=y,y.constructor=w,a(i,"Number",w)}},578:function(t,e,n){var r=n(7);t.exports=r(1..valueOf)},579:function(t,e,n){var r=n(319),i=n(312),s=n(580),o=n(584);t.exports=function(t,e){if(null==t)return{};var n=r(o(t),(function(t){return[t]}));return e=i(e),s(t,n,(function(t,n){return e(t,n[0])}))}},580:function(t,e,n){var r=n(192),i=n(581),s=n(185);t.exports=function(t,e,n){for(var o=-1,a=e.length,u={};++o<a;){var c=e[o],l=r(t,c);n(l,c)&&i(u,s(c,t),l)}return u}},581:function(t,e,n){var r=n(582),i=n(185),s=n(190),o=n(123),a=n(92);t.exports=function(t,e,n,u){if(!o(t))return t;for(var c=-1,l=(e=i(e,t)).length,f=l-1,h=t;null!=h&&++c<l;){var d=a(e[c]),p=n;if("__proto__"===d||"constructor"===d||"prototype"===d)return t;if(c!=f){var v=h[d];void 0===(p=u?u(v,d,h):void 0)&&(p=o(v)?v:s(e[c+1])?[]:{})}r(h,d,p),h=h[d]}return t}},582:function(t,e,n){var r=n(583),i=n(189),s=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var o=t[e];s.call(t,e)&&i(o,n)&&(void 0!==n||e in t)||r(t,e,n)}},583:function(t,e,n){var r=n(320);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},584:function(t,e,n){var r=n(313),i=n(585),s=n(587);t.exports=function(t){return r(t,s,i)}},585:function(t,e,n){var r=n(188),i=n(586),s=n(314),o=n(315),a=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)r(e,s(t)),t=i(t);return e}:o;t.exports=a},586:function(t,e,n){var r=n(318)(Object.getPrototypeOf,Object);t.exports=r},587:function(t,e,n){var r=n(316),i=n(588),s=n(191);t.exports=function(t){return s(t)?r(t,!0):i(t)}},588:function(t,e,n){var r=n(123),i=n(317),s=n(589),o=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return s(t);var e=i(t),n=[];for(var a in t)("constructor"!=a||!e&&o.call(t,a))&&n.push(a);return n}},589:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},590:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return h}));n(11),n(37),n(43);var r={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;n.e(2).then(n.t.bind(null,626,7)).then((function(e){t.comp=e.default}))},methods:{clickCallback:function(t){var e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},i=(n(575),n(21)),s=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comp?n(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,o=(n(576),Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?n("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?n("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),a=(n(577),n(127)),u=n.n(a),c=n(579),l=n.n(c),f={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return l()(this.$props,u.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},h=Object(i.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},591:function(t,e,n){},592:function(t,e,n){},593:function(t,e,n){},594:function(t,e,n){},595:function(t,e,n){},603:function(t,e,n){"use strict";var r=n(5),i=n(73).findIndex,s=n(194),o=!0;"findIndex"in[]&&Array(1).findIndex((function(){o=!1})),r({target:"Array",proto:!0,forced:o},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),s("findIndex")},604:function(t,e,n){"use strict";n(591)},605:function(t,e,n){"use strict";n(592)},606:function(t,e,n){"use strict";n(593)},607:function(t,e,n){"use strict";n(594)},608:function(t,e,n){"use strict";n(595)},627:function(t,e,n){"use strict";n.r(e);n(11),n(37),n(43),n(321),n(603);var r,i=n(572),s={props:["stick","tag"],data:function(){return{needFloat:!1,stickBottom:0}},watch:{stick:function(){this.unStick(),this.stickHandle()}},mounted:function(){this.stickHandle()},beforeDestroy:function(){this.unStick()},methods:{stickHandle:function(){var t=this;if(this.stick){var e=Object(i.b)(this.stick,this);e&&(this._stickerScroll=function(){var n=t.$el.getBoundingClientRect(),r=document.body.scrollTop+document.documentElement.scrollTop;t.needFloat=document.body.offsetHeight-r-n.height<e.offsetHeight,t.stickBottom=e.offsetHeight},this._stickerScroll(),window.addEventListener("scroll",this._stickerScroll))}},unStick:function(){this.needFloat=!1,this.stickBottom=0,window.removeEventListener("scroll",this._stickerScroll)}}},o=(n(604),n(21));function a(t){return t&&t.getBoundingClientRect?t.getBoundingClientRect().top+document.body.scrollTop+document.documentElement.scrollTop:0}var u={components:{Sticker:Object(o.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)(this.tag||"div",{tag:"component",staticClass:"sticker",class:this.needFloat?["stick-float"]:void 0,style:this.needFloat?{bottom:this.stickBottom+"px"}:void 0},[this._t("default")],2)}),[],!1,null,null,null).exports},data:function(){return{activeIndex:0}},computed:{visible:function(){return this.$frontmatter&&!1!==this.$frontmatter.toc&&!!(this.$page&&this.$page.headers&&this.$page.headers.length)}},watch:{activeIndex:function(){var t=(this.$refs.chairTocItem||[])[this.activeIndex];if(t){var e=t.getBoundingClientRect(),n=this.$el.getBoundingClientRect(),r=e.top-n.top;r<20?this.$el.scrollTop=this.$el.scrollTop+r-20:r+e.height>n.height&&(this.$el.scrollTop+=e.top-(n.height-e.height))}},$route:function(){}},mounted:function(){var t=this,e=function(){t.$emit("visible-change",t.visible)};e(),this.$watch("visible",e),setTimeout((function(){return t.triggerEvt()}),1e3),this._onScroll=function(){return t.onScroll()},this._onHashChange=function(){var e=decodeURIComponent(location.hash.substring(1)),n=(t.$page.headers||[]).findIndex((function(t){return t.slug===e}));n>=0&&(t.activeIndex=n);var r=e&&document.getElementById(e);r&&window.scrollTo(0,a(r)-20)},window.addEventListener("scroll",this._onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this._onScroll),window.removeEventListener("hashchange",this._onHashChange)},methods:{onScroll:function(){var t=this;void 0===r&&(r=a(this.$el));for(var e=document.body.scrollTop+document.documentElement.scrollTop,n=this.$page.headers||[],i=0,s=function(e){t.activeIndex=e};i<n.length;i++){if(!(a(document.getElementById(n[i].slug))-50<e)){i||s(i);break}s(i)}},triggerEvt:function(){this._onScroll(),this._onHashChange()}}},c=(n(605),Object(o.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("Sticker",t._b({staticClass:"vuepress-toc"},"Sticker",t.$attrs,!1),t._l(t.$page.headers,(function(e,r){return n("div",{key:r,ref:"chairTocItem",refInFor:!0,staticClass:"vuepress-toc-item",class:["vuepress-toc-h"+e.level,{active:t.activeIndex===r}]},[n("a",{attrs:{href:"#"+e.slug,title:e.title}},[t._v(t._s(e.title))])])})),0):t._e()}),[],!1,null,null,null).exports),l=(n(125),n(573)),f=n.n(l),h=n(574),d=n.n(h),p=n(13),v={name:"PostTag",props:{tag:{type:String,required:!0}}},g=(n(606),Object(o.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"post-tag"},[e("router-link",{attrs:{to:"/tag/"+this.tag}},[e("span",[this._v(this._s(this.tag))])])],1)}),[],!1,null,"42ccfcd5",null).exports);f.a.extend(d.a);var m={name:"PostMeta",components:{NavigationIcon:p.n,ClockIcon:p.a,PostTag:g},props:{tags:{type:[Array,String]},author:{type:String},date:{type:String},location:{type:String}},computed:{resolvedDate:function(){return f.a.utc(this.date).format(this.$themeConfig.dateFormat||"ddd MMM DD YYYY")},resolvedTags:function(){return!this.tags||Array.isArray(this.tags)?this.tags:[this.tags]}}},$=(n(607),{components:{Toc:c,PostMeta:Object(o.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-meta"},[t.author?n("div",{staticClass:"post-meta-author",attrs:{itemprop:"publisher author",itemtype:"http://schema.org/Person",itemscope:""}},[n("NavigationIcon"),t._v(" "),n("span",{attrs:{itemprop:"name"}},[t._v(t._s(t.author))]),t._v(" "),t.location?n("span",{attrs:{itemprop:"address"}},[t._v("   in "+t._s(t.location))]):t._e()],1):t._e(),t._v(" "),t.date?n("div",{staticClass:"post-meta-date"},[n("ClockIcon"),t._v(" "),n("time",{attrs:{pubdate:"",itemprop:"datePublished",datetime:t.date}},[t._v("\n      "+t._s(t.resolvedDate)+"\n    ")])],1):t._e(),t._v(" "),t.tags?n("ul",{staticClass:"post-meta-tags",attrs:{itemprop:"keywords"}},t._l(t.resolvedTags,(function(t){return n("PostTag",{key:t,attrs:{tag:t}})})),1):t._e()])}),[],!1,null,null,null).exports,Comment:n(590).a,Newsletter:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,628))}}}),_=(n(608),Object(o.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"vuepress-theme-blog__post-layout"}},[n("article",{staticClass:"vuepress-blog-theme-content",attrs:{itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[n("header",[n("h1",{staticClass:"post-title",attrs:{itemprop:"name headline"}},[t._v("\n        "+t._s(t.$frontmatter.title)+"\n      ")]),t._v(" "),n("PostMeta",{attrs:{tags:t.$frontmatter.tags,author:t.$frontmatter.author,date:t.$frontmatter.date,location:t.$frontmatter.location}})],1),t._v(" "),n("Content",{attrs:{itemprop:"articleBody"}}),t._v(" "),n("footer",[t.$service.email.enabled?n("Newsletter"):t._e(),t._v(" "),n("hr"),t._v(" "),n("Comment")],1)],1),t._v(" "),n("Toc")],1)}),[],!1,null,null,null));e.default=_.exports}}]);