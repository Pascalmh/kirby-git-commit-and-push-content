(function(){"use strict";var W={};function O(){return W}function M(t){"@babel/helpers - typeof";return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(t)}function m(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function l(t){m(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||M(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function y(t,e){m(2,arguments);var n=l(t),a=l(e),r=n.getTime()-a.getTime();return r<0?-1:r>0?1:r}function x(t,e){m(2,arguments);var n=l(t),a=l(e),r=n.getFullYear()-a.getFullYear(),s=n.getMonth()-a.getMonth();return r*12+s}function F(t){m(1,arguments);var e=l(t);return e.setHours(23,59,59,999),e}function N(t){m(1,arguments);var e=l(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function R(t){m(1,arguments);var e=l(t);return F(e).getTime()===N(e).getTime()}function $(t,e){m(2,arguments);var n=l(t),a=l(e),r=y(n,a),s=Math.abs(x(n,a)),i;if(s<1)i=0;else{n.getMonth()===1&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-r*s);var c=y(n,a)===-r;R(l(t))&&s===1&&y(t,a)===1&&(c=!1),i=r*(s-Number(c))}return i===0?0:i}function A(t,e){return m(2,arguments),l(t).getTime()-l(e).getTime()}var S={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},I="trunc";function X(t){return t?S[t]:S[I]}function E(t,e,n){m(2,arguments);var a=A(t,e)/1e3;return X(n==null?void 0:n.roundingMethod)(a)}var Y={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},j=function(e,n,a){var r,s=Y[e];return typeof s=="string"?r=s:n===1?r=s.one:r=s.other.replace("{{count}}",n.toString()),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+r:r+" ago":r};const z=j;function w(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,a=t.formats[n]||t.formats[t.defaultWidth];return a}}var V={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},L={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},B={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},q={date:w({formats:V,defaultWidth:"full"}),time:w({formats:L,defaultWidth:"full"}),dateTime:w({formats:B,defaultWidth:"full"})};const U=q;var H={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},J=function(e,n,a,r){return H[e]};const Q=J;function b(t){return function(e,n){var a=n!=null&&n.context?String(n.context):"standalone",r;if(a==="formatting"&&t.formattingValues){var s=t.defaultFormattingWidth||t.defaultWidth,i=n!=null&&n.width?String(n.width):s;r=t.formattingValues[i]||t.formattingValues[s]}else{var c=t.defaultWidth,o=n!=null&&n.width?String(n.width):t.defaultWidth;r=t.values[o]||t.values[c]}var u=t.argumentCallback?t.argumentCallback(e):e;return r[u]}}var G={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},K={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Z={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},tt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},et={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},nt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},at=function(e,n){var a=Number(e),r=a%100;if(r>20||r<10)switch(r%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},rt={ordinalNumber:at,era:b({values:G,defaultWidth:"wide"}),quarter:b({values:K,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:b({values:Z,defaultWidth:"wide"}),day:b({values:tt,defaultWidth:"wide"}),dayPeriod:b({values:et,defaultWidth:"wide",formattingValues:nt,defaultFormattingWidth:"wide"})};const it=rt;function p(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],s=e.match(r);if(!s)return null;var i=s[0],c=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],o=Array.isArray(c)?st(c,function(f){return f.test(i)}):ot(c,function(f){return f.test(i)}),u;u=t.valueCallback?t.valueCallback(o):o,u=n.valueCallback?n.valueCallback(u):u;var v=e.slice(i.length);return{value:u,rest:v}}}function ot(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function st(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function ut(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.match(t.matchPattern);if(!a)return null;var r=a[0],s=e.match(t.parsePattern);if(!s)return null;var i=t.valueCallback?t.valueCallback(s[0]):s[0];i=n.valueCallback?n.valueCallback(i):i;var c=e.slice(r.length);return{value:i,rest:c}}}var lt=/^(\d+)(th|st|nd|rd)?/i,ct=/\d+/i,dt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ft={any:[/^b/i,/^(a|c)/i]},ht={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},mt={any:[/1/i,/2/i,/3/i,/4/i]},vt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},gt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},bt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},pt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},yt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Mt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},wt={ordinalNumber:ut({matchPattern:lt,parsePattern:ct,valueCallback:function(e){return parseInt(e,10)}}),era:p({matchPatterns:dt,defaultMatchWidth:"wide",parsePatterns:ft,defaultParseWidth:"any"}),quarter:p({matchPatterns:ht,defaultMatchWidth:"wide",parsePatterns:mt,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:p({matchPatterns:vt,defaultMatchWidth:"wide",parsePatterns:gt,defaultParseWidth:"any"}),day:p({matchPatterns:bt,defaultMatchWidth:"wide",parsePatterns:pt,defaultParseWidth:"any"}),dayPeriod:p({matchPatterns:yt,defaultMatchWidth:"any",parsePatterns:Mt,defaultParseWidth:"any"})},_t={code:"en-US",formatDistance:z,formatLong:U,formatRelative:Q,localize:it,match:wt,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Dt=_t;function k(t,e){if(t==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}function St(t){return k({},t)}function P(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var C=1440,kt=2520,_=43200,Pt=86400;function Ct(t,e,n){var a,r;m(2,arguments);var s=O(),i=(a=(r=n==null?void 0:n.locale)!==null&&r!==void 0?r:s.locale)!==null&&a!==void 0?a:Dt;if(!i.formatDistance)throw new RangeError("locale must contain formatDistance property");var c=y(t,e);if(isNaN(c))throw new RangeError("Invalid time value");var o=k(St(n),{addSuffix:!!(n!=null&&n.addSuffix),comparison:c}),u,v;c>0?(u=l(e),v=l(t)):(u=l(t),v=l(e));var f=E(v,u),h=(P(v)-P(u))/1e3,d=Math.round((f-h)/60),g;if(d<2)return n!=null&&n.includeSeconds?f<5?i.formatDistance("lessThanXSeconds",5,o):f<10?i.formatDistance("lessThanXSeconds",10,o):f<20?i.formatDistance("lessThanXSeconds",20,o):f<40?i.formatDistance("halfAMinute",0,o):f<60?i.formatDistance("lessThanXMinutes",1,o):i.formatDistance("xMinutes",1,o):d===0?i.formatDistance("lessThanXMinutes",1,o):i.formatDistance("xMinutes",d,o);if(d<45)return i.formatDistance("xMinutes",d,o);if(d<90)return i.formatDistance("aboutXHours",1,o);if(d<C){var Rt=Math.round(d/60);return i.formatDistance("aboutXHours",Rt,o)}else{if(d<kt)return i.formatDistance("xDays",1,o);if(d<_){var $t=Math.round(d/C);return i.formatDistance("xDays",$t,o)}else if(d<Pt)return g=Math.round(d/_),i.formatDistance("aboutXMonths",g,o)}if(g=$(v,u),g<12){var At=Math.round(d/_);return i.formatDistance("xMonths",At,o)}else{var T=g%12,D=Math.floor(g/12);return T<3?i.formatDistance("aboutXYears",D,o):T<9?i.formatDistance("overXYears",D,o):i.formatDistance("almostXYears",D+1,o)}}function Tt(t,e,n,a,r,s,i,c){var o=typeof t=="function"?t.options:t;e&&(o.render=e,o.staticRenderFns=n,o._compiled=!0),a&&(o.functional=!0),s&&(o._scopeId="data-v-"+s);var u;if(i?(u=function(h){h=h||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!h&&typeof __VUE_SSR_CONTEXT__<"u"&&(h=__VUE_SSR_CONTEXT__),r&&r.call(this,h),h&&h._registeredComponents&&h._registeredComponents.add(i)},o._ssrRegister=u):r&&(u=c?function(){r.call(this,(o.functional?this.parent:this).$root.$options.shadowRoot)}:r),u)if(o.functional){o._injectStyles=u;var v=o.render;o.render=function(d,g){return u.call(g),v(d,g)}}else{var f=o.beforeCreate;o.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:o}}const Wt={name:"GitContent",props:{status:{type:Object},log:{type:Array,default:[]},branch:{type:String,default:""},disableBranchManagement:{type:Boolean,default:!1}},computed:{commitItems(){const t=[];return this.log.forEach(e=>{t.push({text:e.message,info:this.formatRelative(e.date)+" / "+e.hash.substr(0,7),link:!1})}),t},statusItems(){const t=[];return this.status.files.forEach(e=>{t.push({text:e.filename,info:e.code,link:!1})}),t},remoteStatus(){if(!this.status.hasRemote)return{text:"No remote branch found.",theme:"negative"};if(this.status.diffFromOrigin===0)return{text:"Your branch is up to date with origin/"+this.branch,theme:"positive"};const t=Math.abs(this.status.diffFromOrigin);return{text:`Your branch is ${this.status.diffFromOrigin>0?"ahead":"behind"} of origin/${this.branch} by ${t} commit${t!==1?"s":""}.`,theme:"notice"}}},methods:{pull:async function(){await panel.app.$api.post("/git-content/pull"),this.$reload()},push:async function(){await panel.app.$api.post("/git-content/push"),this.$reload()},revert:async function(){this.$dialog("git-content/revert")},commit:async function(){this.$dialog("git-content/commit")},switchBranch:async function(){this.$dialog("git-content/branch")},createBranch:async function(){this.$dialog("git-content/create-branch")},formatRelative(t){return Ct(new Date(t),new Date,{addSuffix:!0})}}};var Ot=function(){var e=this,n=e._self._c;return n("k-inside",[n("k-view",{staticClass:"k-git-content-view"},[n("k-header",[e._v("Git Content "+e._s(e.size))]),e.status.files.length?n("section",{staticClass:"k-section"},[n("header",{staticClass:"k-section-header"},[n("k-headline",[e._v("Uncommitted changes")]),n("k-button-group",{attrs:{buttons:[{text:"Revert Changes",icon:"undo",click:e.revert},{text:"Commit Changes",icon:"check",click:e.commit}]}})],1),n("k-collection",{attrs:{items:e.statusItems,help:"Refer to the <a target='_blank' href='https://git-scm.com/docs/git-status#_short_format'>Git documentation</a> on how to interpret the status codes to the right."}})],1):e._e(),n("section",{staticClass:"k-section"},[n("header",{staticClass:"k-section-header"},[n("k-headline",[e._v("Remote synchronization")]),n("k-button-group",{attrs:{buttons:[{text:"Pull",icon:"download",click:e.pull},{text:"Push",icon:"upload",click:e.push}]}})],1),n("k-box",{attrs:{text:e.remoteStatus.text,theme:e.remoteStatus.theme}})],1),n("section",{staticClass:"k-section"},[n("header",{staticClass:"k-section-header"},[n("k-headline",[e._v("Latest "+e._s(e.log.length)+" changes on branch »"+e._s(e.branch)+"«")]),e.disableBranchManagement?e._e():n("k-button-group",{attrs:{buttons:[{text:"Create Branch",icon:"add",click:e.createBranch},{text:"Switch Branch",icon:"refresh",click:e.switchBranch}]}})],1),n("k-collection",{attrs:{items:e.commitItems}})],1)],1)],1)},xt=[],Ft=Tt(Wt,Ot,xt,!1,null,null,null,null);const Nt=Ft.exports;panel.plugin("thathoff/git-content",{components:{"git-content":Nt}})})();
