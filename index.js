(function(){"use strict";function c(e,n){if(n.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+n.length+" present")}function d(e){c(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&n==="[object Date]"?new Date(e.getTime()):typeof e=="number"||n==="[object Number]"?new Date(e):((typeof e=="string"||n==="[object String]")&&typeof console!="undefined"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(new Error().stack)),new Date(NaN))}function p(e,n){c(2,arguments);var t=d(e),a=d(n),i=t.getTime()-a.getTime();return i<0?-1:i>0?1:i}function k(e,n){c(2,arguments);var t=d(e),a=d(n),i=t.getFullYear()-a.getFullYear(),r=t.getMonth()-a.getMonth();return i*12+r}function C(e){c(1,arguments);var n=d(e);return n.setHours(23,59,59,999),n}function N(e){c(1,arguments);var n=d(e),t=n.getMonth();return n.setFullYear(n.getFullYear(),t+1,0),n.setHours(23,59,59,999),n}function F(e){c(1,arguments);var n=d(e);return C(n).getTime()===N(n).getTime()}function R(e,n){c(2,arguments);var t=d(e),a=d(n),i=p(t,a),r=Math.abs(k(t,a)),s;if(r<1)s=0;else{t.getMonth()===1&&t.getDate()>27&&t.setDate(30),t.setMonth(t.getMonth()-i*r);var l=p(t,a)===-i;F(d(e))&&r===1&&p(e,a)===1&&(l=!1),s=i*(r-Number(l))}return s===0?0:s}function A(e,n){return c(2,arguments),d(e).getTime()-d(n).getTime()}var D={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},X="trunc";function O(e){return e?D[e]:D[X]}function x(e,n,t){c(2,arguments);var a=A(e,n)/1e3;return O(t==null?void 0:t.roundingMethod)(a)}var E={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},I=function(e,n,t){var a,i=E[e];return typeof i=="string"?a=i:n===1?a=i.one:a=i.other.replace("{{count}}",n.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+a:a+" ago":a},Y=I;function M(e){return function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.width?String(n.width):e.defaultWidth,a=e.formats[t]||e.formats[e.defaultWidth];return a}}var $={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},j={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},z={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},V={date:M({formats:$,defaultWidth:"full"}),time:M({formats:j,defaultWidth:"full"}),dateTime:M({formats:z,defaultWidth:"full"})},L=V,q={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},H=function(e,n,t,a){return q[e]},J=H;function v(e){return function(n,t){var a=t||{},i=a.context?String(a.context):"standalone",r;if(i==="formatting"&&e.formattingValues){var s=e.defaultFormattingWidth||e.defaultWidth,l=a.width?String(a.width):s;r=e.formattingValues[l]||e.formattingValues[s]}else{var o=e.defaultWidth,f=a.width?String(a.width):e.defaultWidth;r=e.values[f]||e.values[o]}var u=e.argumentCallback?e.argumentCallback(n):n;return r[u]}}var U={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Q={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},G={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},B={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},K={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Z={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ee=function(e,n){var t=Number(e),a=t%100;if(a>20||a<10)switch(a%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},te={ordinalNumber:ee,era:v({values:U,defaultWidth:"wide"}),quarter:v({values:Q,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:v({values:G,defaultWidth:"wide"}),day:v({values:B,defaultWidth:"wide"}),dayPeriod:v({values:K,defaultWidth:"wide",formattingValues:Z,defaultFormattingWidth:"wide"})},ne=te;function g(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.width,i=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],r=n.match(i);if(!r)return null;var s=r[0],l=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],o=Array.isArray(l)?re(l,function(h){return h.test(s)}):ae(l,function(h){return h.test(s)}),f;f=e.valueCallback?e.valueCallback(o):o,f=t.valueCallback?t.valueCallback(f):f;var u=n.slice(s.length);return{value:f,rest:u}}}function ae(e,n){for(var t in e)if(e.hasOwnProperty(t)&&n(e[t]))return t}function re(e,n){for(var t=0;t<e.length;t++)if(n(e[t]))return t}function ie(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.match(e.matchPattern);if(!a)return null;var i=a[0],r=n.match(e.parsePattern);if(!r)return null;var s=e.valueCallback?e.valueCallback(r[0]):r[0];s=t.valueCallback?t.valueCallback(s):s;var l=n.slice(i.length);return{value:s,rest:l}}}var oe=/^(\d+)(th|st|nd|rd)?/i,se=/\d+/i,ue={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},le={any:[/^b/i,/^(a|c)/i]},fe={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},de={any:[/1/i,/2/i,/3/i,/4/i]},he={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},me={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ce={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ve={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},ge={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},pe={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},be={ordinalNumber:ie({matchPattern:oe,parsePattern:se,valueCallback:function(e){return parseInt(e,10)}}),era:g({matchPatterns:ue,defaultMatchWidth:"wide",parsePatterns:le,defaultParseWidth:"any"}),quarter:g({matchPatterns:fe,defaultMatchWidth:"wide",parsePatterns:de,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:g({matchPatterns:he,defaultMatchWidth:"wide",parsePatterns:me,defaultParseWidth:"any"}),day:g({matchPatterns:ce,defaultMatchWidth:"wide",parsePatterns:ve,defaultParseWidth:"any"}),dayPeriod:g({matchPatterns:ge,defaultMatchWidth:"any",parsePatterns:pe,defaultParseWidth:"any"})},Me=be,we={code:"en-US",formatDistance:Y,formatLong:L,formatRelative:J,localize:ne,match:Me,options:{weekStartsOn:0,firstWeekContainsDate:1}},ye=we;function _e(e,n){if(e==null)throw new TypeError("assign requires that input parameter not be null or undefined");n=n||{};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e}function De(e){return _e({},e)}function P(e){var n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),e.getTime()-n.getTime()}var S=1440,Pe=2520,w=43200,Se=86400;function Te(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};c(2,arguments);var a=t.locale||ye;if(!a.formatDistance)throw new RangeError("locale must contain formatDistance property");var i=p(e,n);if(isNaN(i))throw new RangeError("Invalid time value");var r=De(t);r.addSuffix=Boolean(t.addSuffix),r.comparison=i;var s,l;i>0?(s=d(n),l=d(e)):(s=d(e),l=d(n));var o=x(l,s),f=(P(l)-P(s))/1e3,u=Math.round((o-f)/60),h;if(u<2)return t.includeSeconds?o<5?a.formatDistance("lessThanXSeconds",5,r):o<10?a.formatDistance("lessThanXSeconds",10,r):o<20?a.formatDistance("lessThanXSeconds",20,r):o<40?a.formatDistance("halfAMinute",null,r):o<60?a.formatDistance("lessThanXMinutes",1,r):a.formatDistance("xMinutes",1,r):u===0?a.formatDistance("lessThanXMinutes",1,r):a.formatDistance("xMinutes",u,r);if(u<45)return a.formatDistance("xMinutes",u,r);if(u<90)return a.formatDistance("aboutXHours",1,r);if(u<S){var m=Math.round(u/60);return a.formatDistance("aboutXHours",m,r)}else{if(u<Pe)return a.formatDistance("xDays",1,r);if(u<w){var y=Math.round(u/S);return a.formatDistance("xDays",y,r)}else if(u<Se)return h=Math.round(u/w),a.formatDistance("aboutXMonths",h,r)}if(h=R(l,s),h<12){var b=Math.round(u/w);return a.formatDistance("xMonths",b,r)}else{var W=h%12,_=Math.floor(h/12);return W<3?a.formatDistance("aboutXYears",_,r):W<9?a.formatDistance("overXYears",_,r):a.formatDistance("almostXYears",_+1,r)}}var We=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("k-inside",[t("k-view",{staticClass:"k-git-content-view"},[t("k-header",[e._v("Git Content "+e._s(e.size))]),t("section",{staticClass:"k-section"},[t("header",{staticClass:"k-section-header"},[t("k-headline",[e._v("Latest "+e._s(e.log.length)+" changes on branch \xBB"+e._s(e.branch)+"\xAB")]),t("k-button-group",{attrs:{buttons:[{text:"Pull",icon:"download",click:e.pull},{text:"Push",icon:"upload",click:e.push}]}})],1),e._l(e.log,function(a){return t("k-item",{key:a.hash,attrs:{text:a.message,link:!1,info:e.formatRelative(a.date)+" / "+a.hash.substr(0,7)}})})],2)],1)],1)},ke=[];function Ce(e,n,t,a,i,r,s,l){var o=typeof e=="function"?e.options:e;n&&(o.render=n,o.staticRenderFns=t,o._compiled=!0),a&&(o.functional=!0),r&&(o._scopeId="data-v-"+r);var f;if(s?(f=function(m){m=m||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!m&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(m=__VUE_SSR_CONTEXT__),i&&i.call(this,m),m&&m._registeredComponents&&m._registeredComponents.add(s)},o._ssrRegister=f):i&&(f=l?function(){i.call(this,(o.functional?this.parent:this).$root.$options.shadowRoot)}:i),f)if(o.functional){o._injectStyles=f;var u=o.render;o.render=function(y,b){return f.call(b),u(y,b)}}else{var h=o.beforeCreate;o.beforeCreate=h?[].concat(h,f):[f]}return{exports:e,options:o}}const Ne={name:"GitContent",props:{log:{type:Array,default:[]},branch:{type:String,default:""}},methods:{pull:async function(){await panel.app.$api.post("/git-content/pull")},push:async function(){await panel.app.$api.post("/git-content/push")},formatRelative(e){return Te(new Date(e),new Date,{addSuffix:!0})}}},T={};var Fe=Ce(Ne,We,ke,!1,Re,null,null,null);function Re(e){for(let n in T)this[n]=T[n]}var Ae=function(){return Fe.exports}();panel.plugin("thathoff/git-content",{components:{"git-content":Ae}})})();