var v1=Object.create;var $0=Object.defineProperty;var y1=Object.getOwnPropertyDescriptor;var x1=Object.getOwnPropertyNames;var S1=Object.getPrototypeOf,M1=Object.prototype.hasOwnProperty;var Vs=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var b1=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of x1(t))!M1.call(e,s)&&s!==n&&$0(e,s,{get:()=>t[s],enumerable:!(i=y1(t,s))||i.enumerable});return e};var xd=(e,t,n)=>(n=e!=null?v1(S1(e)):{},b1(t||!e||!e.__esModule?$0(n,"default",{value:e,enumerable:!0}):n,e));var f_=Vs(It=>{"use strict";var bd=Symbol.for("react.transitional.element"),T1=Symbol.for("react.portal"),E1=Symbol.for("react.fragment"),A1=Symbol.for("react.strict_mode"),w1=Symbol.for("react.profiler"),C1=Symbol.for("react.consumer"),R1=Symbol.for("react.context"),N1=Symbol.for("react.forward_ref"),D1=Symbol.for("react.suspense"),L1=Symbol.for("react.memo"),s_=Symbol.for("react.lazy"),U1=Symbol.for("react.activity"),O1=Symbol.for("react.view_transition"),t_=Symbol.iterator;function I1(e){return e===null||typeof e!="object"?null:(e=t_&&e[t_]||e["@@iterator"],typeof e=="function"?e:null)}var a_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},r_=Object.assign,o_={};function yr(e,t,n){this.props=e,this.context=t,this.refs=o_,this.updater=n||a_}yr.prototype.isReactComponent={};yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function l_(){}l_.prototype=yr.prototype;function Td(e,t,n){this.props=e,this.context=t,this.refs=o_,this.updater=n||a_}var Ed=Td.prototype=new l_;Ed.constructor=Td;r_(Ed,yr.prototype);Ed.isPureReactComponent=!0;var e_=Array.isArray;function Md(){}var ve={H:null,A:null,T:null,S:null},c_=Object.prototype.hasOwnProperty;function Ad(e,t,n){var i=n.ref;return{$$typeof:bd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function P1(e,t){return Ad(e.type,t,e.props)}function wd(e){return typeof e=="object"&&e!==null&&e.$$typeof===bd}function B1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var n_=/\/+/g;function Sd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?B1(""+e.key):t.toString(36)}function z1(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Md,Md):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function vr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case bd:case T1:r=!0;break;case s_:return r=e._init,vr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+Sd(e,0):i,e_(s)?(n="",r!=null&&(n=r.replace(n_,"$&/")+"/"),vr(s,t,n,"",function(c){return c})):s!=null&&(wd(s)&&(s=P1(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(n_,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(e_(e))for(var l=0;l<e.length;l++)i=e[l],a=o+Sd(i,l),r+=vr(i,t,n,a,s);else if(l=I1(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+Sd(i,l++),r+=vr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return vr(z1(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Bc(e,t,n){if(e==null)return e;var i=[],s=0;return vr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function F1(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var i_=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function u_(e){var t=ve.T,n={};n.types=t!==null?t.types:null,ve.T=n;try{var i=e(),s=ve.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Md,i_)}catch(a){i_(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),ve.T=t}}function h_(e){var t=ve.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else u_(h_.bind(null,e))}var H1={map:Bc,forEach:function(e,t,n){Bc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Bc(e,function(){t++}),t},toArray:function(e){return Bc(e,function(t){return t})||[]},only:function(e){if(!wd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};It.Activity=U1;It.Children=H1;It.Component=yr;It.Fragment=E1;It.Profiler=w1;It.PureComponent=Td;It.StrictMode=A1;It.Suspense=D1;It.ViewTransition=O1;It.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ve;It.__COMPILER_RUNTIME={__proto__:null,c:function(e){return ve.H.useMemoCache(e)}};It.addTransitionType=h_;It.cache=function(e){return function(){return e.apply(null,arguments)}};It.cacheSignal=function(){return null};It.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=r_({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!c_.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Ad(e.type,s,i)};It.createContext=function(e){return e={$$typeof:R1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:C1,_context:e},e};It.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)c_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Ad(e,a,s)};It.createRef=function(){return{current:null}};It.forwardRef=function(e){return{$$typeof:N1,render:e}};It.isValidElement=wd;It.lazy=function(e){return{$$typeof:s_,_payload:{_status:-1,_result:e},_init:F1}};It.memo=function(e,t){return{$$typeof:L1,type:e,compare:t===void 0?null:t}};It.startTransition=u_;It.unstable_useCacheRefresh=function(){return ve.H.useCacheRefresh()};It.use=function(e){return ve.H.use(e)};It.useActionState=function(e,t,n){return ve.H.useActionState(e,t,n)};It.useCallback=function(e,t){return ve.H.useCallback(e,t)};It.useContext=function(e){return ve.H.useContext(e)};It.useDebugValue=function(){};It.useDeferredValue=function(e,t){return ve.H.useDeferredValue(e,t)};It.useEffect=function(e,t){return ve.H.useEffect(e,t)};It.useEffectEvent=function(e){return ve.H.useEffectEvent(e)};It.useId=function(){return ve.H.useId()};It.useImperativeHandle=function(e,t,n){return ve.H.useImperativeHandle(e,t,n)};It.useInsertionEffect=function(e,t){return ve.H.useInsertionEffect(e,t)};It.useLayoutEffect=function(e,t){return ve.H.useLayoutEffect(e,t)};It.useMemo=function(e,t){return ve.H.useMemo(e,t)};It.useOptimistic=function(e,t){return ve.H.useOptimistic(e,t)};It.useReducer=function(e,t,n){return ve.H.useReducer(e,t,n)};It.useRef=function(e){return ve.H.useRef(e)};It.useState=function(e){return ve.H.useState(e)};It.useSyncExternalStore=function(e,t,n){return ve.H.useSyncExternalStore(e,t,n)};It.useTransition=function(){return ve.H.useTransition()};It.version="19.3.1"});var Yo=Vs((bN,d_)=>{"use strict";d_.exports=f_()});var b_=Vs(Ee=>{"use strict";function Dd(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<zc(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Hi(e){return e.length===0?null:e[0]}function Hc(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>zc(o,n))l<s&&0>zc(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>zc(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function zc(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Ee.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(p_=performance,Ee.unstable_now=function(){return p_.now()}):(Cd=Date,m_=Cd.now(),Ee.unstable_now=function(){return Cd.now()-m_});var p_,Cd,m_,fs=[],ks=[],G1=1,ci=null,_n=3,Ld=!1,Zo=!1,Jo=!1,Ud=!1,v_=typeof setTimeout=="function"?setTimeout:null,y_=typeof clearTimeout=="function"?clearTimeout:null,g_=typeof setImmediate<"u"?setImmediate:null;function Fc(e){for(var t=Hi(ks);t!==null;){if(t.callback===null)Hc(ks);else if(t.startTime<=e)Hc(ks),t.sortIndex=t.expirationTime,Dd(fs,t);else break;t=Hi(ks)}}function Od(e){if(Jo=!1,Fc(e),!Zo)if(Hi(fs)!==null)Zo=!0,Sr||(Sr=!0,xr());else{var t=Hi(ks);t!==null&&Id(Od,t.startTime-e)}}var Sr=!1,Ko=-1,x_=5,S_=-1;function M_(){return Ud?!0:!(Ee.unstable_now()-S_<x_)}function Rd(){if(Ud=!1,Sr){var e=Ee.unstable_now();S_=e;var t=!0;try{t:{Zo=!1,Jo&&(Jo=!1,y_(Ko),Ko=-1),Ld=!0;var n=_n;try{e:{for(Fc(e),ci=Hi(fs);ci!==null&&!(ci.expirationTime>e&&M_());){var i=ci.callback;if(typeof i=="function"){ci.callback=null,_n=ci.priorityLevel;var s=i(ci.expirationTime<=e);if(e=Ee.unstable_now(),typeof s=="function"){ci.callback=s,Fc(e),t=!0;break e}ci===Hi(fs)&&Hc(fs),Fc(e)}else Hc(fs);ci=Hi(fs)}if(ci!==null)t=!0;else{var a=Hi(ks);a!==null&&Id(Od,a.startTime-e),t=!1}}break t}finally{ci=null,_n=n,Ld=!1}t=void 0}}finally{t?xr():Sr=!1}}}var xr;typeof g_=="function"?xr=function(){g_(Rd)}:typeof MessageChannel<"u"?(Nd=new MessageChannel,__=Nd.port2,Nd.port1.onmessage=Rd,xr=function(){__.postMessage(null)}):xr=function(){v_(Rd,0)};var Nd,__;function Id(e,t){Ko=v_(function(){e(Ee.unstable_now())},t)}Ee.unstable_IdlePriority=5;Ee.unstable_ImmediatePriority=1;Ee.unstable_LowPriority=4;Ee.unstable_NormalPriority=3;Ee.unstable_Profiling=null;Ee.unstable_UserBlockingPriority=2;Ee.unstable_cancelCallback=function(e){e.callback=null};Ee.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x_=0<e?Math.floor(1e3/e):5};Ee.unstable_getCurrentPriorityLevel=function(){return _n};Ee.unstable_next=function(e){switch(_n){case 1:case 2:case 3:var t=3;break;default:t=_n}var n=_n;_n=t;try{return e()}finally{_n=n}};Ee.unstable_requestPaint=function(){Ud=!0};Ee.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=_n;_n=e;try{return t()}finally{_n=n}};Ee.unstable_scheduleCallback=function(e,t,n){var i=Ee.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:G1++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,Dd(ks,e),Hi(fs)===null&&e===Hi(ks)&&(Jo?(y_(Ko),Ko=-1):Jo=!0,Id(Od,n-i))):(e.sortIndex=s,Dd(fs,e),Zo||Ld||(Zo=!0,Sr||(Sr=!0,xr()))),e};Ee.unstable_shouldYield=M_;Ee.unstable_wrapCallback=function(e){var t=_n;return function(){var n=_n;_n=t;try{return e.apply(this,arguments)}finally{_n=n}}}});var E_=Vs((EN,T_)=>{"use strict";T_.exports=b_()});var C_=Vs(vn=>{"use strict";var V1=Yo();function w_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Xs(){}var En={d:{f:Xs,r:function(){throw Error(w_(522))},D:Xs,C:Xs,L:Xs,m:Xs,X:Xs,S:Xs,M:Xs},p:0,findDOMNode:null},k1=Symbol.for("react.portal"),X1=Symbol.for("react.recoverable"),A_=Symbol.for("react.optimistic_key");function W1(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k1,key:i==null?null:i===A_?A_:""+i,children:e,containerInfo:t,implementation:n}}var Qo=V1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Gc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}vn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=En;vn.browser=function(e){return{$$typeof:X1,_reason:e}};vn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(w_(299));return W1(e,t,null,n)};vn.flushSync=function(e){var t=Qo.T,n=En.p;try{if(Qo.T=null,En.p=2,e)return e()}finally{Qo.T=t,En.p=n,En.d.f()}};vn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,En.d.C(e,t))};vn.prefetchDNS=function(e){typeof e=="string"&&En.d.D(e)};vn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Gc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?En.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&En.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};vn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Gc(t.as,t.crossOrigin);En.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&En.d.M(e)};vn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Gc(n,t.crossOrigin);En.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};vn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Gc(t.as,t.crossOrigin);En.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else En.d.m(e)};vn.requestFormReset=function(e){En.d.r(e)};vn.unstable_batchedUpdates=function(e,t){return e(t)};vn.useFormState=function(e,t,n){return Qo.H.useFormState(e,t,n)};vn.useFormStatus=function(){return Qo.H.useHostTransitionStatus()};vn.version="19.3.1"});var D_=Vs((wN,N_)=>{"use strict";function R_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(R_)}catch(e){console.error(e)}}R_(),N_.exports=C_()});var _M=Vs(Mh=>{"use strict";var Ye=E_(),gy=Yo(),q1=D_();function Q(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _y(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zl(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function vy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function yy(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function L_(e){if(zl(e)!==e)throw Error(Q(188))}function Y1(e){var t=e.alternate;if(!t){if(t=zl(e),t===null)throw Error(Q(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return L_(s),e;if(a===i)return L_(s),t;a=a.sibling}throw Error(Q(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(Q(189))}}if(n.alternate!==i)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?e:t}function xy(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=xy(e),t!==null)return t;e=e.sibling}return null}function Fn(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&Fn(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function ir(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function U_(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function Sy(e){var t=[null,null],n=ir(e);return n===null||My(t,e,n.child,{foundSelf:!1}),t}function My(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&My(e,t,n.child,i))return!0;n=n.sibling}return!1}function qe(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(Q(559))}}var Cr=null,dp=null;function Z1(e,t,n){return e===n?!0:e===t?(Cr=e,!0):!1}function J1(e,t,n){return e===n?(dp=e,!1):e===t?(dp!==null&&(Cr=e),!0):!1}function O_(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function pp(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var ge=Object.assign,K1=Symbol.for("react.element"),Vc=Symbol.for("react.transitional.element"),sl=Symbol.for("react.portal"),Rr=Symbol.for("react.fragment"),by=Symbol.for("react.strict_mode"),mp=Symbol.for("react.profiler"),Ty=Symbol.for("react.consumer"),qi=Symbol.for("react.context"),Tm=Symbol.for("react.forward_ref"),gp=Symbol.for("react.suspense"),_p=Symbol.for("react.suspense_list"),Em=Symbol.for("react.memo"),Zs=Symbol.for("react.lazy"),vp=Symbol.for("react.activity"),Q1=Symbol.for("react.legacy_hidden"),j1=Symbol.for("react.memo_cache_sentinel"),yp=Symbol.for("react.view_transition"),$1=Symbol.for("react.recoverable"),I_=Symbol.iterator;function jo(e){return e===null||typeof e!="object"?null:(e=I_&&e[I_]||e["@@iterator"],typeof e=="function"?e:null)}var tT=Symbol.for("react.client.reference");function xp(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tT?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rr:return"Fragment";case mp:return"Profiler";case by:return"StrictMode";case gp:return"Suspense";case _p:return"SuspenseList";case vp:return"Activity";case yp:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case sl:return"Portal";case qi:return e.displayName||"Context";case Ty:return(e._context.displayName||"Context")+".Consumer";case Tm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Em:return t=e.displayName||null,t!==null?t:xp(e.type)||"Memo";case Zs:t=e._payload,e=e._init;try{return xp(e(t))}catch{}}return null}var al=Array.isArray,Dt=gy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=q1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Xa={pending:!1,data:null,method:null,action:null},Sp=[],Nr=-1;function $i(e){return{current:e}}function hn(e){0>Nr||(e.current=Sp[Nr],Sp[Nr]=null,Nr--)}function Se(e,t){Nr++,Sp[Nr]=e.current,e.current=t}var Ki=$i(null),Ml=$i(null),ia=$i(null),Cu=$i(null);function Ru(e,t){switch(Se(ia,t),Se(Ml,e),Se(Ki,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Jv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Jv(t),e=qS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}hn(Ki),Se(Ki,e)}function Kr(){hn(Ki),hn(Ml),hn(ia)}function Mp(e){var t=e.memoizedState;t!==null&&(ro._currentValue=t.memoizedState,Se(Cu,e)),t=Ki.current;var n=qS(t,e.type);t!==n&&(Se(Ml,e),Se(Ki,n))}function Nu(e){Ml.current===e&&(hn(Ki),hn(Ml)),Cu.current===e&&(hn(Cu),ro._currentValue=Xa)}var Pd,P_;function qs(e){if(Pd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pd=t&&t[1]||"",P_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pd+e+P_}var Bd=!1;function zd(e,t){if(!e||Bd)return"";Bd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(v){var u=v}Reflect.construct(e,[],p)}else{try{p.call()}catch(v){u=v}p=!1;try{var d=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new e}finally{p&&(d!==void 0?Object.defineProperty(e.prototype,"props",d):delete e.prototype.props)}}}else{try{throw Error()}catch(v){u=v}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(v){if(v&&u&&typeof v.stack=="string")return[v.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=s);break}}}finally{Bd=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?qs(n):""}function eT(e,t){switch(e.tag){case 26:case 27:case 5:return qs(e.type);case 16:return qs("Lazy");case 13:return e.child!==t&&t!==null?qs("Suspense Fallback"):qs("Suspense");case 19:return qs("SuspenseList");case 0:case 15:return zd(e.type,!1);case 11:return zd(e.type.render,!1);case 1:return zd(e.type,!0);case 31:return qs("Activity");case 30:return qs("ViewTransition");default:return""}}function B_(e){try{var t="",n=null;do t+=eT(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var bp=Object.prototype.hasOwnProperty,Am=Ye.unstable_scheduleCallback,Fd=Ye.unstable_cancelCallback,nT=Ye.unstable_shouldYield,iT=Ye.unstable_requestPaint,Zn=Ye.unstable_now,sT=Ye.unstable_getCurrentPriorityLevel,Ey=Ye.unstable_ImmediatePriority,Ay=Ye.unstable_UserBlockingPriority,Du=Ye.unstable_NormalPriority,aT=Ye.unstable_LowPriority,wy=Ye.unstable_IdlePriority,rT=Ye.log,oT=Ye.unstable_setDisableYieldValue,Fl=null,Jn=null;function Qs(e){if(typeof rT=="function"&&oT(e),Jn&&typeof Jn.setStrictMode=="function")try{Jn.setStrictMode(Fl,e)}catch{}}var Kn=Math.clz32?Math.clz32:uT,lT=Math.log,cT=Math.LN2;function uT(e){return e>>>=0,e===0?32:31-(lT(e)/cT|0)|0}var kc=256,Xc=262144,Wc=4194304;function Fa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ih(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=Fa(i):(r&=o,r!==0?s=Fa(r):n||(n=o&~e,n!==0&&(s=Fa(n))))):(o=i&~a,o!==0?s=Fa(o):r!==0?s=Fa(r):n||(n=i&~e,n!==0&&(s=Fa(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function Hl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Cy(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-Kn(n),s=1<<i;t|=e[i],n&=~s}return t}function hT(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ry(){var e=Wc;return Wc<<=1,(Wc&62914560)===0&&(Wc=4194304),e}function Hd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function fT(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-Kn(n),p=1<<f;o[f]=0,l[f]=-1;var u=c[f];if(u!==null)for(c[f]=null,f=0;f<u.length;f++){var d=u[f];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&Ny(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function Ny(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Kn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Dy(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Kn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function Ly(e,t){var n=t&-t;return n=(n&42)!==0?1:wm(n),(n&(e.suspendedLanes|t))!==0?0:n}function wm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Cm(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Uy(){var e=ie.p;return e!==0?e:(e=window.event,e===void 0?32:pM(e.type))}function z_(e,t){var n=ie.p;try{return ie.p=e,t()}finally{ie.p=n}}var Es=Math.random().toString(36).slice(2),cn="__reactFiber$"+Es,Hn="__reactProps$"+Es,co="__reactContainer$"+Es,F_="__reactEvents$"+Es,dT="__reactListeners$"+Es,pT="__reactHandles$"+Es,H_="__reactResources$"+Es,Vl="__reactMarker$"+Es,Lu="__reactLoad$"+Es;function sh(e){delete e[cn],delete e[Hn],delete e[dT],delete e[pT]}function Va(e){var t;if(t=e[cn])return t;for(var n=e.parentNode;n;){if(t=n[co]||n[cn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=iy(e);e!==null;){if(n=e[cn])return n;e=iy(e)}return t}e=n,n=e.parentNode}return null}function uo(e){if(e=e[cn]||e[co]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function rl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Q(33))}function Hr(e){var t=e[H_];return t||(t=e[H_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function en(e){e[Vl]=!0}function Oy(e){e[Lu]=void 0}var Iy=new Set,Py={};function sr(e,t){Qr(e,t),Qr(e+"Capture",t)}function Qr(e,t){for(Py[e]=t,e=0;e<t.length;e++)Iy.add(t[e])}var mT=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),G_={},V_={};function gT(e){return bp.call(V_,e)?!0:bp.call(G_,e)?!1:mT.test(e)?V_[e]=!0:(G_[e]=!0,!1)}var te=!1;function k_(){var e=te;return te=!1,e}function cu(e,t,n){if(gT(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function qc(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function ds(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function Xn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function By(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _T(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Tp(e){if(!e._valueTracker){var t=By(e)?"checked":"value";e._valueTracker=_T(e,t,""+e[t])}}function zy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=By(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var vT=/[\n"\\]/g;function pi(e){return e.replace(vT,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ep(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Xn(t)):e.value!==""+Xn(t)&&(e.value=""+Xn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?Gd(e,Xn(e.value)):Gd(e,Xn(t)):n!=null?Gd(e,Xn(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Xn(o):e.removeAttribute("name")}function Fy(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Tp(e);return}n=n!=null?""+Xn(n):"",t=t!=null?""+Xn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Tp(e)}function Gd(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Gr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Xn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Hy(e,t,n){if(t!=null&&(t=""+Xn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Xn(n):""}function Gy(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(Q(92));if(al(i)){if(1<i.length)throw Error(Q(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Xn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Tp(e)}function jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yT=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function X_(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||yT.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Vy(e,t,n){if(t!=null&&typeof t!="object")throw Error(Q(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",te=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(X_(e,s,i),te=!0)}else for(var a in t)t.hasOwnProperty(a)&&X_(e,a,t[a])}function Rm(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ST=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function uu(e){return ST.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Yi(){}var Ap=null;function Nm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dr=null,Vr=null;function W_(e){var t=uo(e);if(t&&(e=t.stateNode)){var n=e[Hn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Ep(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+pi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Hn]||null;if(!s)throw Error(Q(90));Ep(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&zy(i)}break t;case"textarea":Hy(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Gr(e,!!n.multiple,t,!1)}}}var Vd=!1;function ky(e,t,n){if(Vd)return e(t,n);Vd=!0;try{var i=e(t);return i}finally{if(Vd=!1,(Dr!==null||Vr!==null)&&(vh(),Dr&&(t=Dr,e=Vr,Vr=Dr=null,W_(t),e)))for(t=0;t<e.length;t++)W_(e[t])}}function bl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Hn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Q(231,t,typeof n));return n}var ys=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wp=!1;if(ys)try{Mr={},Object.defineProperty(Mr,"passive",{get:function(){wp=!0}}),window.addEventListener("test",Mr,Mr),window.removeEventListener("test",Mr,Mr)}catch{wp=!1}var Mr,js=null,Dm=null,hu=null;function Xy(){if(hu)return hu;var e,t=Dm,n=t.length,i,s="value"in js?js.value:js.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return hu=s.slice(e,1<i?1-i:void 0)}function fu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yc(){return!0}function q_(){return!1}function Rn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Yc:q_,this.isPropagationStopped=q_,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yc)},persist:function(){},isPersistent:Yc}),t}var va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ah=Rn(va),kl=ge({},va,{view:0,detail:0}),MT=Rn(kl),kd,Xd,$o,rh=ge({},kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$o&&($o&&e.type==="mousemove"?(kd=e.screenX-$o.screenX,Xd=e.screenY-$o.screenY):Xd=kd=0,$o=e),kd)},movementY:function(e){return"movementY"in e?e.movementY:Xd}}),Y_=Rn(rh),bT=ge({},rh,{dataTransfer:0}),TT=Rn(bT),ET=ge({},kl,{relatedTarget:0}),Wd=Rn(ET),AT=ge({},va,{animationName:0,elapsedTime:0,pseudoElement:0}),wT=Rn(AT),CT=ge({},va,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),RT=Rn(CT),NT=ge({},va,{data:0}),Z_=Rn(NT),DT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function OT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=UT[e])?!!t[e]:!1}function Lm(){return OT}var IT=ge({},kl,{key:function(e){if(e.key){var t=DT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?LT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lm,charCode:function(e){return e.type==="keypress"?fu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),PT=Rn(IT),BT=ge({},rh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),J_=Rn(BT),zT=ge({},va,{submitter:0}),FT=Rn(zT),HT=ge({},kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lm}),GT=Rn(HT),VT=ge({},va,{propertyName:0,elapsedTime:0,pseudoElement:0}),kT=Rn(VT),XT=ge({},rh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),WT=Rn(XT),qT=ge({},va,{newState:0,oldState:0,source:0}),YT=Rn(qT),ZT=[9,13,27,32],Um=ys&&"CompositionEvent"in window,cl=null;ys&&"documentMode"in document&&(cl=document.documentMode);var JT=ys&&"TextEvent"in window&&!cl,Wy=ys&&(!Um||cl&&8<cl&&11>=cl),K_=" ",Q_=!1;function qy(e,t){switch(e){case"keyup":return ZT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lr=!1;function KT(e,t){switch(e){case"compositionend":return Yy(t);case"keypress":return t.which!==32?null:(Q_=!0,K_);case"textInput":return e=t.data,e===K_&&Q_?null:e;default:return null}}function QT(e,t){if(Lr)return e==="compositionend"||!Um&&qy(e,t)?(e=Xy(),hu=Dm=js=null,Lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wy&&t.locale!=="ko"?null:t.data;default:return null}}var jT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function j_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jT[e.type]:t==="textarea"}function Zy(e,t,n,i){Dr?Vr?Vr.push(i):Vr=[i]:Dr=i,t=th(t,"onChange"),0<t.length&&(n=new ah("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var ul=null,Tl=null;function $T(e){kS(e,0)}function oh(e){var t=rl(e);if(zy(t))return e}function $_(e,t){if(e==="change")return t}var Jy=!1;ys&&(ys?(Jc="oninput"in document,Jc||(qd=document.createElement("div"),qd.setAttribute("oninput","return;"),Jc=typeof qd.oninput=="function"),Zc=Jc):Zc=!1,Jy=Zc&&(!document.documentMode||9<document.documentMode));var Zc,Jc,qd;function tv(){ul&&(ul.detachEvent("onpropertychange",Ky),Tl=ul=null)}function Ky(e){if(e.propertyName==="value"&&oh(Tl)){var t=[];Zy(t,Tl,e,Nm(e)),ky($T,t)}}function tE(e,t,n){e==="focusin"?(tv(),ul=t,Tl=n,ul.attachEvent("onpropertychange",Ky)):e==="focusout"&&tv()}function eE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oh(Tl)}function nE(e,t){if(e==="click")return oh(t)}function iE(e,t){if(e==="input"||e==="change")return oh(t)}function sE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jn=typeof Object.is=="function"?Object.is:sE;function El(e,t){if(jn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!bp.call(t,s)||!jn(e[s],t[s]))return!1}return!0}function Cp(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ev(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nv(e,t){var n=ev(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=ev(n)}}function Qy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jy(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Cp(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Cp(e.document)}return t}function Om(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var aE=ys&&"documentMode"in document&&11>=document.documentMode,Ur=null,Rp=null,hl=null,Np=!1;function iv(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Np||Ur==null||Ur!==Cp(i)||(i=Ur,"selectionStart"in i&&Om(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),hl&&El(hl,i)||(hl=i,i=th(Rp,"onSelect"),0<i.length&&(t=new ah("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Ur)))}function Ba(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Or={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionrun:Ba("Transition","TransitionRun"),transitionstart:Ba("Transition","TransitionStart"),transitioncancel:Ba("Transition","TransitionCancel"),transitionend:Ba("Transition","TransitionEnd")},Yd={},$y={};ys&&($y=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function ar(e){if(Yd[e])return Yd[e];if(!Or[e])return e;var t=Or[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $y)return Yd[e]=t[n];return e}var tx=ar("animationend"),ex=ar("animationiteration"),nx=ar("animationstart"),rE=ar("transitionrun"),oE=ar("transitionstart"),lE=ar("transitioncancel"),ix=ar("transitionend"),sx=new Map,Dp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Dp.push("scrollEnd");function Ri(e,t){sx.set(e,t),sr(t,[e])}var cE=0;function xs(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Ci.identifierPrefix;var n=cE++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function sv(e){if(e==null||typeof e=="string")return e;var t=null,n=Jr;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function As(e,t){return e=sv(e),t=sv(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Uu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},hi=[],Ir=0,Im=0;function lh(){for(var e=Ir,t=Im=Ir=0;t<e;){var n=hi[t];hi[t++]=null;var i=hi[t];hi[t++]=null;var s=hi[t];hi[t++]=null;var a=hi[t];if(hi[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&ax(n,s,a)}}function ch(e,t,n,i){hi[Ir++]=e,hi[Ir++]=t,hi[Ir++]=n,hi[Ir++]=i,Im|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Pm(e,t,n,i){return ch(e,t,n,i),Ou(e)}function rr(e,t){return ch(e,null,null,t),Ou(e)}function ax(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Kn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function Ou(e){if(50<Sl)throw Sl=0,Mu=null,Error(Q(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Pr={};function uE(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(e,t,n,i){return new uE(e,t,n,i)}function Bm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _s(e,t){var n=e.alternate;return n===null?(n=Bn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function rx(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function du(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")Bm(i)&&(r=1);else if(typeof i=="string")r=PA(e,n,Ki.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case vp:return e=Bn(31,n,t,s),e.elementType=vp,e.lanes=a,e;case Rr:return Wa(n.children,s,a,t);case by:r=8,s|=24;break;case mp:return e=Bn(12,n,t,s|2),e.elementType=mp,e.lanes=a,e;case gp:return e=Bn(13,n,t,s),e.elementType=gp,e.lanes=a,e;case _p:return e=Bn(19,n,t,s),e.elementType=_p,e.lanes=a,e;case Q1:case yp:return e=s|32,e=Bn(30,n,t,e),e.elementType=yp,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case qi:r=10;break t;case Ty:r=9;break t;case Tm:r=11;break t;case Em:r=14;break t;case Zs:r=16,i=null;break t}r=29,n=Error(Q(130,e===null?"null":typeof e,"")),i=null}return t=Bn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function Wa(e,t,n,i){return e=Bn(7,e,i,t),e.lanes=n,e}function Zd(e,t,n){return e=Bn(6,e,null,t),e.lanes=n,e}function ox(e){var t=Bn(18,null,null,0);return t.stateNode=e,t}function Jd(e,t,n){return t=Bn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var av=new WeakMap;function mi(e,t){if(typeof e=="object"&&e!==null){var n=av.get(e);return n!==void 0?n:(t={value:e,source:t,stack:B_(t)},av.set(e,t),t)}return{value:e,source:t,stack:B_(t)}}var Br=[],zr=0,Iu=null,Al=0,fi=[],di=0,da=null,Zi=1,Ji="";function ms(e,t){Br[zr++]=Al,Br[zr++]=Iu,Iu=e,Al=t}function lx(e,t,n){fi[di++]=Zi,fi[di++]=Ji,fi[di++]=da,da=e;var i=Zi;e=Ji;var s=32-Kn(i)-1;i&=~(1<<s),n+=1;var a=32-Kn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Zi=1<<32-Kn(t)+s|n<<s|i,Ji=a+e}else Zi=1<<a|n<<s|i,Ji=e}function uh(e){e.return!==null&&(ms(e,1),lx(e,1,0))}function zm(e){for(;e===Iu;)Iu=Br[--zr],Br[zr]=null,Al=Br[--zr],Br[zr]=null;for(;e===da;)da=fi[--di],fi[di]=null,Ji=fi[--di],fi[di]=null,Zi=fi[--di],fi[di]=null}function cx(e,t){fi[di++]=Zi,fi[di++]=Ji,fi[di++]=da,Zi=t.id,Ji=t.overflow,da=e}var nn=null,xe=null,Vt=!1,sa=null,gi=!1,Lp=Error(Q(519));function pa(e){var t=Error(Q(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wl(mi(t,e)),Lp}function rv(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[cn]=e,t[Hn]=i,n){case"dialog":Xt("cancel",t),Xt("close",t);break;case"iframe":case"object":case"embed":Xt("load",t);break;case"video":case"audio":for(n=0;n<Dl.length;n++)Xt(Dl[n],t);break;case"source":Xt("error",t);break;case"img":case"image":case"link":Xt("error",t),Xt("load",t);break;case"details":Xt("toggle",t);break;case"input":Xt("invalid",t),Fy(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Xt("invalid",t);break;case"textarea":Xt("invalid",t),Gy(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||WS(t.textContent,n)?(i.popover!=null&&(Xt("beforetoggle",t),Xt("toggle",t)),i.onScroll!=null&&Xt("scroll",t),i.onScrollEnd!=null&&Xt("scrollend",t),i.onClick!=null&&(t.onclick=Yi),t=!0):t=!1,t||pa(e,!0)}function Pu(e){for(nn=e.return;nn;)switch(nn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:nn=nn.return}}function br(e){if(e!==nn)return!1;if(!Vt)return Pu(e),Vt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||gm(e.type,e.memoizedProps)),n=!n),n&&xe&&pa(e),Pu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));xe=ny(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));xe=ny(e)}else t===27?(t=xe,ya(e.type)?(e=xm,xm=null,xe=e):xe=t):xe=nn?_i(e.stateNode.nextSibling):null;return!0}function Ja(){xe=nn=null,Vt=!1}function Kd(){var e=sa;return e!==null&&(In===null?In=e:In.push.apply(In,e),sa=null),e}function wl(e){sa===null?sa=[e]:sa.push(e)}var Up=$i(null),or=null,gs=null;function $s(e,t,n){Se(Up,t._currentValue),t._currentValue=n}function vs(e){e._currentValue=Up.current,hn(Up)}function pu(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Op(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),pu(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(Q(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),pu(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),pu(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Ka(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(Q(387));if(r=r.memoizedProps,r!==null){var o=s.type;jn(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===Cu.current){if(r=s.alternate,r===null)throw Error(Q(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(ro):e=[ro])}s=s.return}return e!==null&&Op(t,e,n,i),t.flags|=262144,e!==null}function Bu(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Qa(e){or=e,gs=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function un(e){return ux(or,e)}function Kc(e,t){return or===null&&Qa(e),ux(e,t)}function ux(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},gs===null){if(e===null)throw Error(Q(308));gs=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else gs=gs.next=t;return n}var hE=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},fE=Ye.unstable_scheduleCallback,dE=Ye.unstable_NormalPriority,He={$$typeof:qi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fm(){return{controller:new hE,data:new Map,refCount:0}}function Xl(e){e.refCount--,e.refCount===0&&fE(dE,function(){e.controller.abort()})}function ov(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var ol=null;function pE(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var fl=null,Ip=0,ja=0,kr=null;function mE(e,t){if(fl===null){var n=fl=[];Ip=0,ja=dg(),kr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Ip++,t.then(lv,lv),t}function lv(){if(--Ip===0&&(ol=null,fl!==null)){kr!==null&&(kr.status="fulfilled");var e=fl;fl=null,ja=0,kr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function gE(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var cv=Dt.S;Dt.S=function(e,t){if(CS=Zn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&mE(e,t),ol!==null)for(var n=io;n!==null;)ov(n,ol),n=n.next;if(n=e.types,n!==null){for(var i=io;i!==null;)ov(i,n),i=i.next;if(ja!==0){i=ol,i===null&&(i=ol=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}cv!==null&&cv(e,t)};var qa=$i(null);function Hm(){var e=qa.current;return e!==null?e:me.pooledCache}function mu(e,t){t===null?Se(qa,qa.current):Se(qa,t.pool)}function hx(){var e=Hm();return e===null?null:{parent:He._currentValue,pool:e}}var ho=Error(Q(460)),Gm=Error(Q(474)),hh=Error(Q(542)),zu={then:function(){}};function uv(e){return e=e.status,e==="fulfilled"||e==="rejected"}function fx(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Yi,Yi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,fv(e),e===void 0&&!("reason"in t)?Error(Q(600)):e;default:if(typeof t.status=="string")t.then(Yi,Yi);else{if(e=me,e!==null&&100<e.shellSuspendCounter)throw Error(Q(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,fv(e),e}throw Ya=t,ho}}function Ha(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ya=n,ho):n}}var Ya=null;function hv(){if(Ya===null)throw Error(Q(459));var e=Ya;return Ya=null,e}function fv(e){if(e===ho||e===hh)throw Error(Q(483))}var Xr=null,Cl=0;function Qc(e){var t=Cl;return Cl+=1,Xr===null&&(Xr=[]),fx(Xr,e,t)}function Ws(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function jc(e,t){throw t.$$typeof===K1?Error(Q(525)):(e=Object.prototype.toString.call(t),Error(Q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function dx(e){function t(h,m){if(e){var x=h.deletions;x===null?(h.deletions=[m],h.flags|=16):x.push(m)}}function n(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function i(h){for(var m=new Map;h!==null;)h.key===null?m.set(h.index,h):m.set(h.key,h),h=h.sibling;return m}function s(h,m){return h=_s(h,m),h.index=0,h.sibling=null,h}function a(h,m,x){return h.index=x,e?(x=h.alternate,x!==null?(x=x.index,x<m?(h.flags|=2,m):x):(h.flags|=134217730,m)):(h.flags|=1048576,m)}function r(h){return e&&h.alternate===null&&(h.flags|=134217730),h}function o(h,m,x,y){return m===null||m.tag!==6?(m=Zd(x,h.mode,y),m.return=h,m):(m=s(m,x),m.return=h,m)}function l(h,m,x,y){var E=x.type;return E===Rr?(h=f(h,m,x.props.children,y,x.key),Ws(h,x),h):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Zs&&Ha(E)===m.type)?(m=s(m,x.props),Ws(m,x),m.return=h,m):(m=du(x.type,x.key,x.props,null,h.mode,y),Ws(m,x),m.return=h,m)}function c(h,m,x,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Jd(x,h.mode,y),m.return=h,m):(m=s(m,x.children||[]),m.return=h,m)}function f(h,m,x,y,E){return m===null||m.tag!==7?(m=Wa(x,h.mode,y,E),m.return=h,m):(m=s(m,x),m.return=h,m)}function p(h,m,x){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Zd(""+m,h.mode,x),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Vc:return x=du(m.type,m.key,m.props,null,h.mode,x),Ws(x,m),x.return=h,x;case sl:return m=Jd(m,h.mode,x),m.return=h,m;case Zs:return m=Ha(m),p(h,m,x)}if(al(m)||jo(m))return m=Wa(m,h.mode,x,null),m.return=h,m;if(typeof m.then=="function")return p(h,Qc(m),x);if(m.$$typeof===qi)return p(h,Kc(h,m),x);jc(h,m)}return null}function u(h,m,x,y){var E=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return E!==null?null:o(h,m,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Vc:return x.key===E?l(h,m,x,y):null;case sl:return x.key===E?c(h,m,x,y):null;case Zs:return x=Ha(x),u(h,m,x,y)}if(al(x)||jo(x))return E!==null?null:f(h,m,x,y,null);if(typeof x.then=="function")return u(h,m,Qc(x),y);if(x.$$typeof===qi)return u(h,m,Kc(h,x),y);jc(h,x)}return null}function d(h,m,x,y,E){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return h=h.get(x)||null,o(m,h,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Vc:return h=h.get(y.key===null?x:y.key)||null,l(m,h,y,E);case sl:return h=h.get(y.key===null?x:y.key)||null,c(m,h,y,E);case Zs:return y=Ha(y),d(h,m,x,y,E)}if(al(y)||jo(y))return h=h.get(x)||null,f(m,h,y,E,null);if(typeof y.then=="function")return d(h,m,x,Qc(y),E);if(y.$$typeof===qi)return d(h,m,x,Kc(m,y),E);jc(m,y)}return null}function v(h,m,x,y){for(var E=null,A=null,g=m,T=m=0,L=null;g!==null&&T<x.length;T++){g.index>T?(L=g,g=null):L=g.sibling;var C=u(h,g,x[T],y);if(C===null){g===null&&(g=L);break}e&&g&&C.alternate===null&&t(h,g),m=a(C,m,T),A===null?E=C:A.sibling=C,A=C,g=L}if(T===x.length)return n(h,g),Vt&&ms(h,T),E;if(g===null){for(;T<x.length;T++)g=p(h,x[T],y),g!==null&&(m=a(g,m,T),A===null?E=g:A.sibling=g,A=g);return Vt&&ms(h,T),E}for(g=i(g);T<x.length;T++)L=d(g,h,T,x[T],y),L!==null&&(e&&(C=L.alternate,C!==null&&g.delete(C.key===null?T:C.key)),m=a(L,m,T),A===null?E=L:A.sibling=L,A=L);return e&&g.forEach(function(U){return t(h,U)}),Vt&&ms(h,T),E}function b(h,m,x,y){if(x==null)throw Error(Q(151));for(var E=null,A=null,g=m,T=m=0,L=null,C=x.next();g!==null&&!C.done;T++,C=x.next()){g.index>T?(L=g,g=null):L=g.sibling;var U=u(h,g,C.value,y);if(U===null){g===null&&(g=L);break}e&&g&&U.alternate===null&&t(h,g),m=a(U,m,T),A===null?E=U:A.sibling=U,A=U,g=L}if(C.done)return n(h,g),Vt&&ms(h,T),E;if(g===null){for(;!C.done;T++,C=x.next())C=p(h,C.value,y),C!==null&&(m=a(C,m,T),A===null?E=C:A.sibling=C,A=C);return Vt&&ms(h,T),E}for(g=i(g);!C.done;T++,C=x.next())C=d(g,h,T,C.value,y),C!==null&&(e&&(L=C.alternate,L!==null&&g.delete(L.key===null?T:L.key)),m=a(C,m,T),A===null?E=C:A.sibling=C,A=C);return e&&g.forEach(function(I){return t(h,I)}),Vt&&ms(h,T),E}function _(h,m,x,y){if(typeof x=="object"&&x!==null&&x.type===Rr&&x.key===null&&x.props.ref===void 0&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Vc:t:{for(var E=x.key;m!==null;){if(m.key===E){if(E=x.type,E===Rr){if(m.tag===7){n(h,m.sibling),y=s(m,x.props.children),Ws(y,x),y.return=h,h=y;break t}}else if(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Zs&&Ha(E)===m.type){n(h,m.sibling),y=s(m,x.props),Ws(y,x),y.return=h,h=y;break t}n(h,m);break}else t(h,m);m=m.sibling}x.type===Rr?(y=Wa(x.props.children,h.mode,y,x.key),Ws(y,x),y.return=h,h=y):(y=du(x.type,x.key,x.props,null,h.mode,y),Ws(y,x),y.return=h,h=y)}return r(h);case sl:t:{for(E=x.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(h,m.sibling),y=s(m,x.children||[]),y.return=h,h=y;break t}else{n(h,m);break}else t(h,m);m=m.sibling}y=Jd(x,h.mode,y),y.return=h,h=y}return r(h);case Zs:return x=Ha(x),_(h,m,x,y)}if(al(x))return v(h,m,x,y);if(jo(x)){if(E=jo(x),typeof E!="function")throw Error(Q(150));return x=E.call(x),b(h,m,x,y)}if(typeof x.then=="function")return _(h,m,Qc(x),y);if(x.$$typeof===qi)return _(h,m,Kc(h,x),y);jc(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,m!==null&&m.tag===6?(n(h,m.sibling),y=s(m,x),y.return=h,h=y):(n(h,m),y=Zd(x,h.mode,y),y.return=h,h=y),r(h)):n(h,m)}return function(h,m,x,y){try{Cl=0;var E=_(h,m,x,y);return Xr=null,E}catch(g){if(g===ho||g===hh)throw g;var A=Bn(29,g,null,h.mode);return A.lanes=y,A.return=h,A}}}var $a=dx(!0),px=dx(!1),Js=!1;function Vm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ra(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ne&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Ou(e),ax(e,null,n),t}return ch(e,i,t,n),Ou(e)}function dl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Dy(e,n)}}function Qd(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Bp=!1;function pl(){if(Bp){var e=kr;if(e!==null)throw e}}function ml(e,t,n,i){Bp=!1;var s=e.updateQueue;Js=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,f=c=l=null,o=a;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(Kt&u)===u:(i&u)===u){u!==0&&u===ja&&(Bp=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,b=o;u=t;var _=n;switch(b.tag){case 1:if(v=b.payload,typeof v=="function"){p=v.call(_,p,u);break t}p=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,u=typeof v=="function"?v.call(_,p,u):v,u==null)break t;p=ge({},p,u);break t;case 2:Js=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=s.callbacks,d===null?s.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=d,l=p):f=f.next=d,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);f===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=f,a===null&&(s.shared.lanes=0),_a|=r,e.lanes=r,e.memoizedState=p}}function mx(e,t){if(typeof e!="function")throw Error(Q(191,e));e.call(t)}function gx(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)mx(n[e],t)}var ma=$i(null),Fu=$i(0);function dv(e,t){e=Ts,Se(Fu,e),Se(ma,t),Ts=e|t.baseLanes}function zp(){Se(Fu,Ts),Se(ma,ma.current)}function km(){Ts=Fu.current,hn(ma),hn(Fu)}var pn=$i(null),yn=null;function oa(e){var t=e.alternate;Se(fn,fn.current&1),Se(pn,e),yn===null&&(t===null||ma.current!==null||t.memoizedState!==null)&&(yn=e)}function Fp(e){Se(fn,fn.current),Se(pn,e),yn===null&&(yn=e)}function _x(e){e.tag===22?(Se(fn,fn.current),Se(pn,e),yn===null&&(yn=e)):la()}function la(){Se(fn,fn.current),Se(pn,pn.current)}function Wn(e){hn(pn),yn===e&&(yn=null),hn(fn)}var fn=$i(0);function Rl(e,t){Se(pn,pn.current),Se(fn,t)}function Xm(e){hn(fn),hn(pn),yn===e&&(yn=null)}function Hu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ym(n)||_g(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ss=0,zt=null,he=null,Fe=null,Gu=!1,Wr=!1,tr=!1,Vu=0,Nl=0,qr=null,_E=0;function Ue(){throw Error(Q(321))}function Wm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jn(e[n],t[n]))return!1;return!0}function qm(e,t,n,i,s,a){return Ss=a,zt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Dt.H=e===null||e.memoizedState===null?Zx:Jx,tr=!1,a=n(i,s),tr=!1,Wr&&(a=yx(t,n,i,s)),vx(e),a}function vx(e){Dt.H=ku;var t=he!==null&&he.next!==null;if(Ss=0,Fe=he=zt=null,Gu=!1,Nl=0,qr=null,t)throw Error(Q(300));e===null||Ge||(e=e.dependencies,e!==null&&Bu(e)&&(Ge=!0))}function yx(e,t,n,i){zt=e;var s=0;do{if(Wr&&(qr=null),Nl=0,Wr=!1,25<=s)throw Error(Q(301));if(s+=1,Fe=he=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Dt.H=EE,a=t(n,i)}while(Wr);return a}function vE(){var e=Dt.H,t=e.useState()[0];return t=typeof t.then=="function"?Wl(t):t,e=e.useState()[0],(he!==null?he.memoizedState:null)!==e&&(zt.flags|=1024),t}function Ym(){var e=Vu!==0;return Vu=0,e}function Zm(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Jm(e){if(Gu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Gu=!1}Ss=0,Fe=he=zt=null,Wr=!1,Nl=Vu=0,qr=null}function Cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?zt.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Ie(){if(he===null){var e=zt.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=Fe===null?zt.memoizedState:Fe.next;if(t!==null)Fe=t,he=e;else{if(e===null)throw zt.alternate===null?Error(Q(467)):Error(Q(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},Fe===null?zt.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function fh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wl(e){var t=Nl;return Nl+=1,qr===null&&(qr=[]),e=fx(qr,e,t),t=zt,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,Dt.H=t===null||t.memoizedState===null?Zx:Jx),e}function dh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Wl(e);if(e.$$typeof===$1)return;if(e.$$typeof===qi)return un(e)}throw Error(Q(438,String(e)))}function Km(e){var t=null,n=zt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=zt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=fh(),zt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=j1;return t.index++,n}function Ms(e,t){return typeof t=="function"?t(e):t}function gu(e){var t=Ie();return Qm(t,he,e)}function Qm(e,t,n){var i=e.queue;if(i===null)throw Error(Q(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,f=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(Kt&p)===p:(Ss&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===ja&&(f=!0);else if((Ss&u)===u){c=c.next,u===ja&&(f=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,zt.lanes|=u,_a|=u;p=c.action,tr&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,zt.lanes|=p,_a|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!jn(a,e.memoizedState)&&(Ge=!0,f&&(n=kr,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function jd(e){var t=Ie(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);jn(a,t.memoizedState)||(Ge=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function xx(e,t,n){var i=zt,s=Ie(),a=Vt;if(a){if(n===void 0)throw Error(Q(407));n=n()}else n=t();var r=!jn((he||s).memoizedState,n);if(r&&(s.memoizedState=n,Ge=!0),s=s.queue,jm(bx.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||Fe!==null&&(Fe.memoizedState.tag&1)!==0,$r(e?9:8,{destroy:void 0},Mx.bind(null,i,s,n,t),null),e){if(i.flags|=2048,me===null)throw Error(Q(349));a||(Ss&127)!==0||Sx(i,t,n)}return n}function Sx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=zt.updateQueue,t===null?(t=fh(),zt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Mx(e,t,n,i){t.value=n,t.getSnapshot=i,Tx(t)&&Ex(e)}function bx(e,t,n){return n(function(){Tx(t)&&Ex(e)})}function Tx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jn(e,n)}catch{return!0}}function Ex(e){var t=rr(e,2);t!==null&&zn(t,e,2)}function Hp(e){var t=Cn();if(typeof e=="function"){var n=e;if(e=n(),tr){Qs(!0);try{n()}finally{Qs(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ms,lastRenderedState:e},t}function Ax(e,t,n,i){return e.baseState=n,Qm(e,he,typeof i=="function"?i:Ms)}function yE(e,t,n,i,s){if(mh(e))throw Error(Q(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Dt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,wx(t,a)):(a.next=n.next,t.pending=n.next=a)}}function wx(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Dt.T,r={};r.types=a!==null?a.types:null,Dt.T=r;try{var o=n(s,i),l=Dt.S;l!==null&&l(r,o),pv(e,t,o)}catch(c){Gp(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Dt.T=a}}else try{a=n(s,i),pv(e,t,a)}catch(c){Gp(e,t,c)}}function pv(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){mv(e,t,i)},function(i){return Gp(e,t,i)}):mv(e,t,n)}function mv(e,t,n){t.status="fulfilled",t.value=n,Cx(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,wx(e,n)))}function Gp(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Cx(t),t=t.next;while(t!==i)}e.action=null}function Cx(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Rx(e,t){return t}function gv(e,t){if(Vt){var n=me.formState;if(n!==null){t:{var i=zt;if(Vt){if(xe){e:{for(var s=xe,a=gi;s.nodeType!==8;){if(!a){s=null;break e}if(s=_i(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){xe=_i(s.nextSibling),i=s.data==="F!";break t}}pa(i)}i=!1}i&&(t=n[0])}}return n=Cn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rx,lastRenderedState:t},n.queue=i,n=Wx.bind(null,zt,i),i.dispatch=n,i=Hp(!1),a=ng.bind(null,zt,!1,i.queue),i=Cn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=yE.bind(null,zt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function _v(e){var t=Ie();return Nx(t,he,e)}function Nx(e,t,n){if(t=Qm(e,t,Rx)[0],e=gu(Ms)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Wl(t)}catch(r){throw r===ho?hh:r}else i=t;t=Ie();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(zt.flags|=2048,$r(9,{destroy:void 0},xE.bind(null,s,n),null)),[i,a,e]}function xE(e,t){e.action=t}function vv(e){var t=Ie(),n=he;if(n!==null)return Nx(t,n,e);Ie(),t=t.memoizedState,n=Ie();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function $r(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=zt.updateQueue,t===null&&(t=fh(),zt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Dx(){return Ie().memoizedState}function _u(e,t,n,i){var s=Cn();zt.flags|=e,s.memoizedState=$r(1|t,{destroy:void 0},n,i===void 0?null:i)}function ph(e,t,n,i){var s=Ie();i=i===void 0?null:i;var a=s.memoizedState.inst;he!==null&&i!==null&&Wm(i,he.memoizedState.deps)?s.memoizedState=$r(t,a,n,i):(zt.flags|=e,s.memoizedState=$r(1|t,a,n,i))}function yv(e,t){_u(8390656,8,e,t)}function jm(e,t){ph(2048,8,e,t)}function SE(e){zt.flags|=4;var t=zt.updateQueue;if(t===null)t=fh(),zt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Lx(e){var t=Ie().memoizedState;return SE({ref:t,nextImpl:e}),function(){if((ne&2)!==0)throw Error(Q(440));return t.impl.apply(void 0,arguments)}}function Ux(e,t){return ph(4,2,e,t)}function Ox(e,t){return ph(4,4,e,t)}function Ix(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Px(e,t,n){n=n!=null?n.concat([e]):null,ph(4,4,Ix.bind(null,t,e),n)}function $m(){}function Bx(e,t){var n=Ie();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Wm(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function zx(e,t){var n=Ie();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Wm(t,i[1]))return i[0];if(i=e(),tr){Qs(!0);try{e()}finally{Qs(!1)}}return n.memoizedState=[i,t],i}function tg(e,t,n){return n===void 0||(Ss&1073741824)!==0&&(Kt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=NS(),zt.lanes|=e,_a|=e,n)}function Fx(e,t,n,i){return jn(n,t)?n:ma.current!==null?(e=tg(e,n,i),jn(e,t)||(Ge=!0),e):(Ss&106)===0||(Ss&1073741824)!==0&&(Kt&261930)===0?(Ge=!0,e.memoizedState=n):(e=NS(),zt.lanes|=e,_a|=e,t)}function Hx(e,t,n,i,s){var a=ie.p;ie.p=a!==0&&8>a?a:8;var r=Dt.T,o={};o.types=r!==null?r.types:null,Dt.T=o,ng(e,!1,t,n);try{var l=s(),c=Dt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=gE(l,i);gl(e,t,f,Qn(e))}else gl(e,t,i,Qn(e))}catch(p){gl(e,t,{then:function(){},status:"rejected",reason:p},Qn())}finally{ie.p=a,r!==null&&o.types!==null&&(r.types=o.types),Dt.T=r}}function ME(){}function Vp(e,t,n,i){if(e.tag!==5)throw Error(Q(476));var s=Gx(e).queue;Hx(e,s,t,Xa,n===null?ME:function(){return Vx(e),n(i)})}function Gx(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Xa,baseState:Xa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ms,lastRenderedState:Xa},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ms,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Vx(e){var t=Gx(e);t.next===null&&(t=e.alternate.memoizedState),gl(e,t.next.queue,{},Qn())}function eg(){return un(ro)}function kx(){return Ie().memoizedState}function Xx(){return Ie().memoizedState}function bE(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Qn();e=aa(n);var i=ra(t,e,n);i!==null&&(zn(i,t,n),dl(i,t,n)),t={cache:Fm()},e.payload=t;return}t=t.return}}function TE(e,t,n){var i=Qn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},mh(e)?qx(t,n):(n=Pm(e,t,n,i),n!==null&&(zn(n,e,i),Yx(n,t,i)))}function Wx(e,t,n){var i=Qn();gl(e,t,n,i)}function gl(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(mh(e))qx(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,jn(o,r))return ch(e,t,s,0),me===null&&lh(),!1}catch{}if(n=Pm(e,t,s,i),n!==null)return zn(n,e,i),Yx(n,t,i),!0}return!1}function ng(e,t,n,i){if(i={lane:2,revertLane:dg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},mh(e)){if(t)throw Error(Q(479))}else t=Pm(e,n,i,2),t!==null&&zn(t,e,2)}function mh(e){var t=e.alternate;return e===zt||t!==null&&t===zt}function qx(e,t){Wr=Gu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Yx(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Dy(e,n)}}var ku={readContext:un,use:dh,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue,useEffectEvent:Ue},Zx={readContext:un,use:dh,useCallback:function(e,t){return Cn().memoizedState=[e,t===void 0?null:t],e},useContext:un,useEffect:yv,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,_u(4194308,4,Ix.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _u(4194308,4,e,t)},useInsertionEffect:function(e,t){_u(4,2,e,t)},useMemo:function(e,t){var n=Cn();t=t===void 0?null:t;var i=e();if(tr){Qs(!0);try{e()}finally{Qs(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Cn();if(n!==void 0){var s=n(t);if(tr){Qs(!0);try{n(t)}finally{Qs(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=TE.bind(null,zt,e),[i.memoizedState,e]},useRef:function(e){var t=Cn();return e={current:e},t.memoizedState=e},useState:function(e){e=Hp(e);var t=e.queue,n=Wx.bind(null,zt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:$m,useDeferredValue:function(e,t){var n=Cn();return tg(n,e,t)},useTransition:function(){var e=Hp(!1);return e=Hx.bind(null,zt,e.queue,!0,!1),Cn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=zt,s=Cn();if(Vt){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=t(),me===null)throw Error(Q(349));(Kt&127)!==0||Sx(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,yv(bx.bind(null,i,a,e),[e]),i.flags|=2048,$r(9,{destroy:void 0},Mx.bind(null,i,a,n,t),null),n},useId:function(){var e=Cn(),t=me.identifierPrefix;if(Vt){var n=Ji,i=Zi;n=(i&~(1<<32-Kn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Vu++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=_E++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:eg,useFormState:gv,useActionState:gv,useOptimistic:function(e){var t=Cn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ng.bind(null,zt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Km,useCacheRefresh:function(){return Cn().memoizedState=bE.bind(null,zt)},useEffectEvent:function(e){var t=Cn(),n={impl:e};return t.memoizedState=n,function(){if((ne&2)!==0)throw Error(Q(440));return n.impl.apply(void 0,arguments)}}},Jx={readContext:un,use:dh,useCallback:Bx,useContext:un,useEffect:jm,useImperativeHandle:Px,useInsertionEffect:Ux,useLayoutEffect:Ox,useMemo:zx,useReducer:gu,useRef:Dx,useState:function(){return gu(Ms)},useDebugValue:$m,useDeferredValue:function(e,t){var n=Ie();return Fx(n,he.memoizedState,e,t)},useTransition:function(){var e=gu(Ms)[0],t=Ie().memoizedState;return[typeof e=="boolean"?e:Wl(e),t]},useSyncExternalStore:xx,useId:kx,useHostTransitionStatus:eg,useFormState:_v,useActionState:_v,useOptimistic:function(e,t){var n=Ie();return Ax(n,he,e,t)},useMemoCache:Km,useCacheRefresh:Xx,useEffectEvent:Lx},EE={readContext:un,use:dh,useCallback:Bx,useContext:un,useEffect:jm,useImperativeHandle:Px,useInsertionEffect:Ux,useLayoutEffect:Ox,useMemo:zx,useReducer:jd,useRef:Dx,useState:function(){return jd(Ms)},useDebugValue:$m,useDeferredValue:function(e,t){var n=Ie();return he===null?tg(n,e,t):Fx(n,he.memoizedState,e,t)},useTransition:function(){var e=jd(Ms)[0],t=Ie().memoizedState;return[typeof e=="boolean"?e:Wl(e),t]},useSyncExternalStore:xx,useId:kx,useHostTransitionStatus:eg,useFormState:vv,useActionState:vv,useOptimistic:function(e,t){var n=Ie();return he!==null?Ax(n,he,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Km,useCacheRefresh:Xx,useEffectEvent:Lx};function $d(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var kp={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Qn(),s=aa(i);s.payload=t,n!=null&&(s.callback=n),t=ra(e,s,i),t!==null&&(zn(t,e,i),dl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Qn(),s=aa(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ra(e,s,i),t!==null&&(zn(t,e,i),dl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qn(),i=aa(n);i.tag=2,t!=null&&(i.callback=t),t=ra(e,i,n),t!==null&&(zn(t,e,n),dl(t,e,n))}};function xv(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!El(n,i)||!El(s,a):!0}function Sv(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&kp.enqueueReplaceState(t,t.state,null)}function er(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=ge({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function Kx(e){Uu(e)}function Qx(e){console.error(e)}function jx(e){Uu(e)}function Xu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Mv(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Xp(e,t,n){return n=aa(n),n.tag=3,n.payload={element:null},n.callback=function(){Xu(e,t)},n}function $x(e){return e=aa(e),e.tag=3,e}function tS(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){Mv(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Mv(t,n,i),typeof s!="function"&&(ca===null?ca=new Set([this]):ca.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function AE(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ka(t,n,s,!0),n=pn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return yn===null?ju():n.alternate===null&&Oe===0&&(Oe=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===zu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),rp(e,i,s)),!1;case 22:return n.flags|=65536,i===zu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),rp(e,i,s)),!1}throw Error(Q(435,n.tag))}return rp(e,i,s),ju(),!1}if(Vt)return t=pn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==Lp&&(e=Error(Q(422),{cause:i}),wl(mi(e,n)))):(i!==Lp&&(t=Error(Q(423),{cause:i}),wl(mi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=mi(i,n),s=Xp(e.stateNode,i,s),Qd(e,s),Oe!==4&&(Oe=2)),!1;var a=Error(Q(520),{cause:i});if(a=mi(a,n),xl===null?xl=[a]:xl.push(a),Oe!==4&&(Oe=2),t===null)return!0;i=mi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Xp(n.stateNode,i,e),Qd(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(ca===null||!ca.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=$x(s),tS(s,e,n,i),Qd(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var ig=Error(Q(461)),Ge=!1;function We(e,t,n,i){t.child=e===null?px(t,null,n,i):$a(t,e.child,n,i)}function bv(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Qa(t),i=qm(e,t,n,r,a,s),o=Ym(),e!==null&&!Ge?(Zm(e,t,s),bs(e,t,s)):(Vt&&o&&uh(t),t.flags|=1,We(e,t,i,s),t.child)}function Tv(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Bm(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,eS(e,t,a,i,s)):(e=du(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!ag(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:El,n(r,i)&&e.ref===t.ref)return bs(e,t,s)}return t.flags|=1,e=_s(a,i),e.ref=t.ref,e.return=t,t.child=e}function eS(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(El(a,i)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=i=a,ag(e,s))(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,bs(e,t,s)}return Wp(e,t,n,i,s)}function nS(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return Ev(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&mu(t,a!==null?a.cachePool:null),a!==null?dv(t,a):zp(),_x(t);else return i=t.lanes=536870912,Ev(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(mu(t,a.cachePool),dv(t,a),la(),t.memoizedState=null):(e!==null&&mu(t,null),zp(),la());return We(e,t,s,n),t.child}function _l(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ev(e,t,n,i,s){var a=Hm();return a=a===null?null:{parent:He._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&mu(t,null),zp(),_x(t),e!==null&&Ka(e,t,i,!0),t.childLanes=s,null}function vu(e,t){return t=gh({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Av(e,t,n){return $a(t,e.child,null,n),e=vu(t,t.pendingProps),e.flags|=2,Wn(t),t.memoizedState=null,e}function wE(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Vt){if(i.mode==="hidden")return e=vu(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},_l(null,e);if(Fp(t),(e=xe)?(e=nM(e,gi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:da!==null?{id:Zi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},n=ox(e),n.return=t,t.child=n,nn=t,xe=null)):e=null,e===null)throw pa(t);return t.lanes=536870912,null}return vu(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(Fp(t),s)if(t.flags&256)t.flags&=-257,t=Av(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(Q(558));else if(Ge||Ka(e,t,n,!1),s=(n&e.childLanes)!==0,Ge||s){if(ma.current===null){if(i=me,i!==null&&(r=Ly(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,rr(e,r),zn(i,e,r),ig;ju()}t=Av(e,t,n)}else e=a.treeContext,xe=_i(r.nextSibling),nn=t,Vt=!0,sa=null,gi=!1,e!==null&&cx(t,e),t=vu(t,i),t.flags|=134221824;return t}return e=_s(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Er(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Q(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Wp(e,t,n,i,s){return Qa(t),n=qm(e,t,n,i,void 0,s),i=Ym(),e!==null&&!Ge?(Zm(e,t,s),bs(e,t,s)):(Vt&&i&&uh(t),t.flags|=1,We(e,t,n,s),t.child)}function wv(e,t,n,i,s,a){return Qa(t),t.updateQueue=null,n=yx(t,i,n,s),vx(e),i=Ym(),e!==null&&!Ge?(Zm(e,t,a),bs(e,t,a)):(Vt&&i&&uh(t),t.flags|=1,We(e,t,n,a),t.child)}function Cv(e,t,n,i,s){if(Qa(t),t.stateNode===null){var a=Pr,r=n.contextType;typeof r=="object"&&r!==null&&(a=un(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=kp,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Vm(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?un(r):Pr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&($d(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&kp.enqueueReplaceState(a,a.state,null),ml(t,i,a,s),pl(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=er(n,o);a.props=l;var c=a.context,f=n.contextType;r=Pr,typeof f=="object"&&f!==null&&(r=un(f));var p=n.getDerivedStateFromProps;f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&Sv(t,a,i,r),Js=!1;var u=t.memoizedState;a.state=u,ml(t,i,a,s),pl(),c=t.memoizedState,o||u!==c||Js?(typeof p=="function"&&($d(t,n,p,i),c=t.memoizedState),(l=Js||xv(t,n,l,i,u,c,r))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Pp(e,t),r=t.memoizedProps,f=er(n,r),a.props=f,p=t.pendingProps,u=a.context,c=n.contextType,l=Pr,typeof c=="object"&&c!==null&&(l=un(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||u!==l)&&Sv(t,a,i,l),Js=!1,u=t.memoizedState,a.state=u,ml(t,i,a,s),pl();var d=t.memoizedState;r!==p||u!==d||Js||e!==null&&e.dependencies!==null&&Bu(e.dependencies)?(typeof o=="function"&&($d(t,n,o,i),d=t.memoizedState),(f=Js||xv(t,n,f,i,u,d,l)||e!==null&&e.dependencies!==null&&Bu(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),a.props=i,a.state=d,a.context=l,i=f):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Er(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=$a(t,e.child,null,s),t.child=$a(t,null,n,s)):We(e,t,n,s),t.memoizedState=a.state,e=t.child):e=bs(e,t,s),e}function Rv(e,t,n,i){return Ja(),t.flags|=256,We(e,t,n,i),t.child}var qp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yp(e){return{baseLanes:e,cachePool:hx()}}function Zp(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Yn),e}function iS(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Vt){if(s?oa(t):la(),(e=xe)?(e=nM(e,gi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:da!==null?{id:Zi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},n=ox(e),n.return=t,t.child=n,nn=t,xe=null)):e=null,e===null)throw pa(t);return _g(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(la(),s=t.mode,a=gh({mode:"hidden",children:a},s),i=Wa(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=Yp(n),i.childLanes=Zp(e,r,n),t.memoizedState=qp,_l(null,i)):(oa(t),sg(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return CE(e,t,a,r,i,l,o,n)}return s?(la(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=_s(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=_s(l,s):(s=Wa(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,_l(null,i),i=t.child,s=e.child.memoizedState,s===null?s=Yp(n):(a=s.cachePool,a!==null?(o=He._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=hx(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=Zp(e,r,n),t.memoizedState=qp,_l(e.child,i)):(oa(t),n=e.child,e=n.sibling,n=_s(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function sg(e,t){return t=gh({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function gh(e,t){return e=Bn(22,e,null,t),e.lanes=0,e}function $c(e,t,n){return $a(t,e.child,null,n),e=sg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function CE(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(oa(t),t.flags&=-257,$c(e,t,o)):t.memoizedState!==null?(la(),t.child=e.child,t.flags|=128,null):(la(),a=s.fallback,r=t.mode,s=gh({mode:"visible",children:s.children},r),a=Wa(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,$a(t,e.child,null,o),s=t.child,s.memoizedState=Yp(o),s.childLanes=Zp(e,i,o),t.memoizedState=qp,_l(null,s));if(oa(t),_g(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(Q(419)),s.stack="",s.digest=i,wl({value:s,source:null,stack:null})),$c(e,t,o)}if(Ge||Ka(e,t,o,!1),i=(o&e.childLanes)!==0,Ge||i){if(ma.current!==null)return $c(e,t,o);if(i=me,i!==null&&(s=Ly(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,rr(e,s),zn(i,e,s),ig;return ym(a)||ju(),$c(e,t,o)}return ym(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,xe=_i(a.nextSibling),nn=t,Vt=!0,sa=null,gi=!1,e!==null&&cx(t,e),t=sg(t,s.children),t.flags|=134221824,t)}function Nv(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),pu(e.return,t,n)}function Dv(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Hu(n)===null&&(t=e),e=e.sibling}return t}function tu(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function tp(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Jp(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=fn.current;if(t.flags&128)return Rl(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Rl(t,r),s==="backwards"&&e!==null?(tp(e),We(e,t,i,n),tp(e)):We(e,t,i,n),i=Vt?Al:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nv(e,n,t);else if(e.tag===19)Nv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=Dv(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,tp(t)),tu(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Hu(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}tu(t,!0,n,null,a,i);break;case"together":tu(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=Dv(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),tu(t,!1,s,n,a,i)}return t.child}function Lv(e,t,n){var i=t.pendingProps;return $s(t,t.type,i.value),We(e,t,i.children,n),t.child}function bs(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_a|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ka(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Q(153));if(t.child!==null){for(e=t.child,n=_s(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_s(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ag(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Bu(e)))}function RE(e,t,n){switch(t.tag){case 3:Ru(t,t.stateNode.containerInfo),$s(t,He,e.memoizedState.cache),Ja();break;case 27:case 5:Mp(t);break;case 4:Ru(t,t.stateNode.containerInfo);break;case 10:$s(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Fp(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return oa(t),t.flags|=128,null;i=Ka(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?iS(e,t,n):(oa(t),e=bs(e,t,n),e!==null?e.sibling:null)}oa(t);break;case 19:if(t.flags&128)return Jp(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(Ka(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Jp(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Rl(t,fn.current),i)break;return null;case 22:return t.lanes=0,nS(e,t,n,t.pendingProps);case 24:$s(t,He,e.memoizedState.cache)}return bs(e,t,n)}function sS(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ge=!0;else{if(!ag(e,n)&&(t.flags&128)===0)return Ge=!1,RE(e,t,n);Ge=(e.flags&131072)!==0}else Ge=!1,Vt&&(t.flags&1048576)!==0&&lx(t,Al,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Ha(t.elementType),t.type=e,typeof e=="function")Bm(e)?(i=er(e,i),t.tag=1,t=Cv(null,t,e,i,n)):(t.tag=0,t=Wp(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Tm){t.tag=11,t=bv(null,t,e,i,n);break t}else if(s===Em){t.tag=14,t=Tv(null,t,e,i,n);break t}else if(s===qi){t.tag=10,t.type=e,t=Lv(null,t,n);break t}}throw t=xp(e)||e,Error(Q(306,t,""))}}return t;case 0:return Wp(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=er(i,t.pendingProps),Cv(e,t,i,s,n);case 3:t:{if(Ru(t,t.stateNode.containerInfo),e===null)throw Error(Q(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,Pp(e,t),ml(t,i,null,n);var r=t.memoizedState;if(i=r.cache,$s(t,He,i),i!==a.cache&&Op(t,[He],n,!0),pl(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Rv(e,t,i,n);break t}else if(i!==s){s=mi(Error(Q(424)),t),wl(s),t=Rv(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,xe=_i(e.firstChild),nn=t,Vt=!0,sa=null,gi=!0,n=px(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(Ja(),i===s){t=bs(e,t,n);break t}We(e,t,i,n)}t=t.child}return t;case 26:return Er(e,t),e===null?(n=ay(t.type,null,t.pendingProps,null))?t.memoizedState=n:Vt||(t.stateNode=YS(t.type,t.pendingProps,ia.current,t)):t.memoizedState=ay(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Mp(t),e===null&&Vt&&(i=t.stateNode=iM(t.type,t.pendingProps,ia.current),nn=t,gi=!0,s=xe,ya(t.type)?(xm=s,xe=_i(i.firstChild)):xe=s),We(e,t,t.pendingProps.children,n),Er(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Vt&&((s=i=xe)&&(i=SA(i,t.type,t.pendingProps,gi),i!==null?(t.stateNode=i,nn=t,xe=_i(i.firstChild),gi=!1,s=!0):s=!1),s||pa(t)),Mp(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,gm(s,a)?i=null:r!==null&&gm(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=qm(e,t,vE,null,null,n),ro._currentValue=s),Er(e,t),We(e,t,i,n),t.child;case 6:return e===null&&Vt&&((e=n=xe)&&(n=MA(n,t.pendingProps,gi),n!==null?(t.stateNode=n,nn=t,xe=null,e=!0):e=!1),e||pa(t)),null;case 13:return iS(e,t,n);case 4:return Ru(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=$a(t,null,i,n):We(e,t,i,n),t.child;case 11:return bv(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,Er(e,t),We(e,t,i,n),t.child;case 8:return We(e,t,t.pendingProps.children,n),t.child;case 12:return We(e,t,t.pendingProps.children,n),t.child;case 10:return Lv(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,Qa(t),s=un(s),i=i(s),t.flags|=1,We(e,t,i,n),t.child;case 14:return Tv(e,t,t.type,t.pendingProps,n);case 15:return eS(e,t,t.type,t.pendingProps,n);case 19:return Jp(e,t,n);case 31:return wE(e,t,n);case 22:return nS(e,t,n,t.pendingProps);case 24:return Qa(t),i=un(He),e===null?(s=Hm(),s===null&&(s=me,a=Fm(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},Vm(t),$s(t,He,s)):((e.lanes&n)!==0&&(Pp(e,t),ml(t,null,null,n),pl()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),$s(t,He,i)):(i=a.cache,$s(t,He,i),i!==s.cache&&Op(t,[He],n,!0))),We(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:Vt&&uh(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:Er(e,t),We(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(Q(156,t.tag))}function ps(e){e.flags|=4}function ep(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?ly(t,i):ly(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(US())e.flags|=8192;else throw Ya=zu,Gm}else e.flags&=-16777217}function Uv(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!oM(t))if(US())e.flags|=8192;else throw Ya=zu,Gm}function eu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ry():536870912,e.lanes|=t,to|=t)}function tl(e,t){if(!Vt)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function NE(e,t,n){var i=t.pendingProps;switch(zm(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return ye(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),vs(He),Kr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(br(t)?ps(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Kd())),ye(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(ps(t),a!==null?(ye(t),Uv(t,a)):(ye(t),ep(t,s,null,i,n))):a?a!==e.memoizedState?(ps(t),ye(t),Uv(t,a)):(ye(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&ps(t),ye(t),ep(t,s,e,i,n)),null;case 27:if(Nu(t),n=ia.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ps(t);else{if(!i){if(t.stateNode===null)throw Error(Q(166));return ye(t),t.subtreeFlags&=-33554433,null}e=Ki.current,br(t)?rv(t,e):(e=iM(s,i,n),t.stateNode=e,ps(t))}return ye(t),t.subtreeFlags&=-33554433,null;case 5:if(Nu(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ps(t);else{if(!i){if(t.stateNode===null)throw Error(Q(166));return ye(t),t.subtreeFlags&=-33554433,null}if(a=Ki.current,br(t))rv(t,a);else{var r=Ul(ia.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[cn]=t,a[Hn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(dn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&ps(t)}}return ye(t),t.subtreeFlags&=-33554433,ep(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ps(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(Q(166));if(e=ia.current,br(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=nn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[cn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||WS(e.nodeValue,n)),e||pa(t,!0)}else e=Ul(e).createTextNode(i),e[cn]=t,t.stateNode=e}return ye(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=br(t),n!==null){if(e===null){if(!i)throw Error(Q(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(557));e[cn]=t}else Ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ye(t),e=!1}else n=Kd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Wn(t),t):(Wn(t),null);if((t.flags&128)!==0)throw Error(Q(558))}return ye(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=br(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(Q(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Q(317));s[cn]=t}else Ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ye(t),s=!1}else s=Kd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Wn(t),t):(Wn(t),null)}return Wn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),eu(t,t.updateQueue),ye(t),null);case 4:return Kr(),e===null&&pg(t.stateNode.containerInfo),t.flags|=67108864,ye(t),null;case 10:return vs(t.type),ye(t),null;case 19:if(Xm(t),i=t.memoizedState,i===null)return ye(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)tl(i,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Hu(e),a!==null){for(t.flags|=128,tl(i,!1),e=a.updateQueue,t.updateQueue=e,eu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)rx(n,e),n=n.sibling;return Rl(t,fn.current&1|2),Vt&&ms(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Zn()>Ku&&(t.flags|=128,s=!0,tl(i,!1),t.lanes=4194304)}else{if(!s)if(e=Hu(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,eu(t,e),tl(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!Vt)return ye(t),null}else 2*Zn()-i.renderingStartTime>Ku&&n!==536870912&&(t.flags|=128,s=!0,tl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Zn(),e.sibling=null,a=fn.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||Vt?Rl(t,a):(n=a,Se(pn,t),Se(fn,n),yn===null&&(yn=t)),Vt&&ms(t,i.treeForkCount),e}return ye(t),null;case 22:case 23:return Wn(t),km(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),n=t.updateQueue,n!==null&&eu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&hn(qa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),vs(He),ye(t),null;case 25:return null;case 30:return t.flags|=33554432,ye(t),null}throw Error(Q(156,t.tag))}function DE(e,t){switch(zm(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vs(He),Kr(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Nu(t),null;case 31:if(t.memoizedState!==null){if(Wn(t),t.alternate===null)throw Error(Q(340));Ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Wn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Q(340));Ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Xm(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Kr(),null;case 10:return vs(t.type),null;case 22:case 23:return Wn(t),km(),e!==null&&hn(qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return vs(He),null;case 25:return null;default:return null}}function aS(e,t){switch(zm(t),t.tag){case 3:vs(He),Kr();break;case 26:case 27:case 5:Nu(t);break;case 4:Kr();break;case 31:t.memoizedState!==null&&Wn(t);break;case 13:Wn(t);break;case 19:Xm(t);break;case 10:vs(t.type);break;case 22:case 23:Wn(t),km(),e!==null&&hn(qa);break;case 24:vs(He)}}function ql(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){ue(t,t.return,o)}}function ga(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(f){ue(s,l,f)}}}i=i.next}while(i!==a)}}catch(f){ue(t,t.return,f)}}function rS(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{gx(t,n)}catch(i){ue(e,e.return,i)}}}function oS(e,t,n){n.props=er(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ue(e,t,i)}}function Xi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=xs(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=QS(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new $n(e);Fn(e.child,!1,yA,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){ue(e,t,o)}}function ln(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){ue(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){ue(e,t,s)}else n.current=null}function Wu(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)eM(e.stateNode,t[n])}function Ov(e){for(var t=e.return;t!==null&&(og(t)&&eM(e.stateNode,t.stateNode),!rg(t));)t=t.return}function vl(e){for(var t=e.return;t!==null&&(og(t)&&xA(e.stateNode,t.stateNode),!rg(t));)t=t.return}function rg(e){return e.tag===5||e.tag===3||e.tag===27}function og(e){return e&&e.tag===7&&e.stateNode!==null}function Kp(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){ue(e,e.return,s)}}function np(e,t,n){try{var i=e.stateNode;eA(i,e.type,n,t),i[Hn]=t}catch(s){ue(e,e.return,s)}}function lS(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ya(e.type)||e.tag===4}function ip(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||lS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qp(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yi)),Wu(e,i),te=!0;else if(s!==4&&(s===27&&(Wu(e,i),i=null,ya(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Qp(e,t,n,i),e=e.sibling;e!==null;)Qp(e,t,n,i),e=e.sibling}function qu(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),Wu(e,i),te=!0;else if(s!==4&&(s===27&&(Wu(e,i),i=null,ya(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(qu(e,t,n,i),e=e.sibling;e!==null;)qu(e,t,n,i),e=e.sibling}function cS(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);dn(t,i,n),t[cn]=e,t[Hn]=n}catch(a){ue(e,e.return,a)}}var Yu=!1,qn=null;function Iv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Yu=!0)}var Wi=null;function Pv(){var e=Wi;return Wi=null,e}var Pn=0;function fo(e,t,n,i,s){return Pn=0,uS(e.child,t,n,i,s)}function uS(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=_m(r);i.push(o),o.view&&(a=!0)}else a||_m(r).view&&(a=!0);Yu=!0,ZS(r,Pn===0?t:t+"_"+Pn,n),Pn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||uS(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function ji(e,t){for(;e!==null;)e.tag===5?JS(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||ji(e.child,t)),e=e.sibling}function yu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(yu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(Q(544));var n=t.name;t=As(t.default,t.share),t!=="none"&&(fo(e,n,t,null,!1)||ji(e.child,!1))}e=e.sibling}}function jp(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=xs(i,n),a=As(i.default,n.paired?i.share:i.enter);a!=="none"?fo(e,s,a,null,!1)?(yu(e),n.paired||t||eo(e,i.onEnter)):ji(e.child,!1):yu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)jp(e,t),e=e.sibling;else yu(e)}function $p(e){if(qn!==null&&qn.size!==0){var t=qn;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=As(n.default,n.share);if(a!=="none"&&(fo(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,eo(e,n.onShare)):ji(e.child,!1)),t.delete(i),t.size===0)break}}}$p(e)}e=e.sibling}}}function tm(e){if(e.tag===30){var t=e.memoizedProps,n=xs(t,e.stateNode),i=qn!==null?qn.get(n):void 0,s=As(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(fo(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,qn.delete(n),eo(e,t.onShare)):eo(e,t.onExit):ji(e.child,!1)),qn!==null&&$p(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)tm(e),e=e.sibling;else qn!==null&&$p(e)}function hS(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=xs(t,e.stateNode);t=As(t.default,t.update),e.flags&=-5,t!=="none"&&fo(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&hS(e);e=e.sibling}}function em(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,ji(e.child,!1))}em(e)}e=e.sibling}}function xu(e){if(e.tag===30)e.stateNode.paired=null,ji(e.child,!1),em(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)xu(e),e=e.sibling;else em(e)}function fS(e){for(e=e.child;e!==null;)e.tag===30?ji(e.child,!1):(e.subtreeFlags&33554432)!==0&&fS(e),e=e.sibling}function lg(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&Pn<a.length){var c=a[Pn],f=_m(l);(c.view||f.view)&&(o=!0);var p;if(p=(e.flags&4)===0)if(f.clip)p=!0;else{p=c.rect;var u=f.rect;p=p.y!==u.y||p.x!==u.x||p.height!==u.height||p.width!==u.width}p&&(e.flags|=4),f.abs?f=!c.abs:(c=c.rect,f=f.rect,f=c.height!==f.height||c.width!==f.width),f&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&ZS(l,Pn===0?n:n+"_"+Pn,s),o&&(e.flags&4)!==0||(Wi===null&&(Wi=[]),Wi.push(l,Pn===0?i:i+"_"+Pn,t.memoizedProps)),Pn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:lg(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function dS(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=xs(n,i),a=As(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(oA)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;Pn=0,s=lg(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||eo(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&dS(e,t);e=e.sibling}}var $e=!1,se=!1,Gi=!1,sp=!1,Bv=typeof WeakSet=="function"?WeakSet:Set,tn=null,Vi=!1,ll=!1,Zu=!1,nm=!1;function LE(e,t,n){if(e=e.containerInfo,pm=oo,e=jy(e),Om(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,f=0,p=0,u=e,d=null;e:for(;;){for(var v;u!==i||a!==0&&u.nodeType!==3||(l=o+a),u!==r||s!==0&&u.nodeType!==3||(c=o+s),u.nodeType===3&&(o+=u.nodeValue.length),(v=u.firstChild)!==null;)d=u,u=v;for(;;){if(u===e)break e;if(d===i&&++f===a&&(l=o),d===r&&++p===s&&(c=o),(v=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=v}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(mm={focusedElem:e,selectionRange:i},oo=!1,n=(n&335544064)===n,tn=t,t=n?9270:1024;tn!==null;){if(e=tn,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&tm(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&Iv(e),nu(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&tm(i),nu(n);continue}else if(i!==null&&i.memoizedState!==null){n&&Iv(e),nu(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,tn=i):(n&&hS(e),nu(n))}}qn=null}function nu(e){for(;tn!==null;){var t=tn,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=er(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){ue(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)vm(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":vm(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=xs(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=As(s.default,s.update),s!=="none"&&fo(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(Q(163))}if(i=t.sibling,i!==null){i.return=t.return,tn=i;break}tn=t.return}}function pS(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:ki(e,n),i&4&&ql(5,n);break;case 1:if(ki(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ue(n,n.return,r)}else{var s=er(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ue(n,n.return,r)}}i&64&&rS(n),i&512&&Xi(n,n.return);break;case 3:if(ki(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{gx(e,t)}catch(r){ue(n,n.return,r)}}break;case 27:t===null&&i&4&&cS(n);case 26:case 5:ki(e,n),t===null&&i&4&&Kp(n),i&512&&Xi(n,n.return);break;case 12:ki(e,n);break;case 31:ki(e,n),i&4&&vS(e,n);break;case 13:ki(e,n),i&4&&yS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=XE.bind(null,n),bA(e,n))));break;case 22:if(i=n.memoizedState!==null||$e,!i){var a=t!==null&&t.memoizedState!==null||se;t=$e,s=se,$e=i,(se=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Ei(e,n,i)):ki(e,n),$e=t,se=s}break;case 30:ki(e,n),i&512&&Xi(n,n.return);break;case 7:i&512&&Xi(n,n.return);default:ki(e,n)}}function im(e,t){for(e=e.child;e!==null;)mS(e,t),e=e.sibling}function mS(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){ue(e,e.return,l)}sm(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,te=!0}catch(l){ue(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?$v(o,!0):$v(e.stateNode,!1)}catch(l){ue(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&im(e,t);break;default:im(e,t)}}function sm(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:mS(n,i);break t;case 22:n.memoizedState===null&&sm(n,i);break t;default:sm(n,i)}}e=e.sibling}}function gS(e){var t=e.alternate;t!==null&&(e.alternate=null,gS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&sh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,On=!1;function Ti(e,t,n){for(n=n.child;n!==null;)_S(e,t,n),n=n.sibling}function _S(e,t,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(Fl,n)}catch{}switch(n.tag){case 26:se||ln(n,t),Ti(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!se&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:se||ln(n,t),vl(n);var i=Ae,s=On;ya(n.type)&&(Ae=n.stateNode,On=!1),Ti(e,t,n),sM(n.stateNode,n.type,n.memoizedProps),Ae=i,On=s;break;case 5:se||ln(n,t),vl(n);case 6:if(n.tag===6&&vl(n),i=Ae,s=On,Ae=null,Ti(e,t,n),Ae=i,On=s,Ae!==null)if(On)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(n.stateNode),te=!0}catch(a){ue(n,t,a)}else try{Ae.removeChild(n.stateNode),te=!0}catch(a){ue(n,t,a)}break;case 18:Ae!==null&&(On?(e=Ae,jv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),lo(e)):jv(Ae,n.stateNode));break;case 4:i=Ae,s=On,Ae=n.stateNode.containerInfo,On=!0,Ti(e,t,n),Ae=i,On=s;break;case 0:case 11:case 14:case 15:ga(2,n,t),se||ga(4,n,t),Ti(e,t,n);break;case 1:se||(ln(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&oS(n,t,i)),Ti(e,t,n);break;case 21:Ti(e,t,n);break;case 22:se=(i=se)||n.memoizedState!==null,Ti(e,t,n),se=i;break;case 30:ln(n,t),Ti(e,t,n);break;case 7:se||ln(n,t),Ti(e,t,n);break;default:Ti(e,t,n)}}function vS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{lo(e)}catch(n){ue(t,t.return,n)}}}function yS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{lo(e)}catch(n){ue(t,t.return,n)}}function UE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Bv),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Bv),t;default:throw Error(Q(435,e.tag))}}function iu(e,t){var n=UE(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=WE.bind(null,e,i);i.then(s,s)}})}function An(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(ya(l.type)){Ae=l.stateNode,On=!1;break t}break;case 5:Ae=l.stateNode,On=!1;break t;case 3:case 4:Ae=l.stateNode.containerInfo,On=!0;break t}l=l.return}if(Ae===null)throw Error(Q(160));_S(r,o,a),Ae=null,On=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)xS(t,e,n),t=t.sibling}var Ai=null;function xS(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}An(t,e,n),wn(e),s&4&&(ga(3,e,e.return),ql(3,e),ga(5,e,e.return));break;case 1:An(t,e,n),wn(e),s&512&&(se||i===null||ln(i,i.return)),s&64&&$e&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=Ai,An(t,e,n),wn(e),s&512&&(se||i===null||ln(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if($e)e.stateNode=YS(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[Vl]||i[cn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),dn(i,t,n),i[cn]=e,en(i),t=i;break t;case"link":if(a=oy("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),dn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=oy("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),dn(i,t,n),s.head.appendChild(i);break;default:throw Error(Q(468,t))}i[cn]=e,en(i),t=i}e.stateNode=t}else $e||Sm(a,e.type,e.stateNode);else e.stateNode=ry(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||se||t.parentNode.removeChild(t)):s.count--,n===null?$e||Sm(a,e.type,e.stateNode):ry(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&np(e,e.memoizedProps,i.memoizedProps);break;case 27:An(t,e,n),wn(e),s&512&&(se||i===null||ln(i,i.return)),i!==null&&s&4&&np(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=Gi,Gi=!1,An(t,e,n),Gi=a,wn(e),s&512&&(se||i===null||ln(i,i.return)),e.flags&32){t=e.stateNode;try{jr(t,""),te=!0}catch(f){ue(e,e.return,f)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,np(e,t,i!==null?i.memoizedProps:t)),s&1024&&(sp=!0);break;case 6:if(An(t,e,n),wn(e),s&4){if(e.stateNode===null)throw Error(Q(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,te=!0}catch(f){ue(e,e.return,f)}}break;case 3:if(te=!1,Tu=null,a=Ai,Ai=Ol(t.containerInfo),An(t,e,n),Ai=a,wn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{lo(t.containerInfo)}catch(f){ue(e,e.return,f)}sp&&(sp=!1,SS(e)),te=!1;break;case 4:s=Gi,Gi=$e,i=k_(),a=Ai,Ai=Ol(e.stateNode.containerInfo),An(t,e,n),wn(e),Ai=a,te&&ll&&(Zu=!0),te=i,Gi=s;break;case 12:An(t,e,n),wn(e);break;case 31:An(t,e,n),wn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,iu(e,t)));break;case 13:An(t,e,n),wn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(_h=Zn()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,iu(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=$e,l=se,c=Gi;$e=o||a,Gi=c||a,se=l||r,An(t,e,n),se=l,Gi=c,$e=o,wn(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||$e||se||(t=r||se,n=$e,i=se,$e=a||$e,se=t,Ys(e,2),$e=n,se=i),!a&&Gi||im(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,iu(e,n))));break;case 19:An(t,e,n),wn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,iu(e,t)));break;case 30:s&512&&(se||i===null||ln(i,i.return)),s=k_(),a=ll,r=(n&335544064)===n,o=e.memoizedProps,ll=r&&As(o.default,o.update)!=="none",An(t,e,n),wn(e),r&&i!==null&&te&&(e.flags|=4),ll=a,te=s;break;case 21:break;case 7:s&512&&(se||i===null||ln(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:An(t,e,n),wn(e)}}function wn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(lS(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(og(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(rg(s))break;s=s.return}var r=i;if(n==null)throw Error(Q(160));switch(n.tag){case 27:var o=n.stateNode,l=ip(e);qu(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(jr(c,""),n.flags&=-33);var f=ip(e);qu(e,f,c,r);break;case 3:case 4:var p=n.stateNode.containerInfo,u=ip(e);Qp(e,u,p,r);break;default:throw Error(Q(161))}}catch(d){ue(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function SS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;SS(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,oo=!0,t.reset(),oo=!1),e=e.sibling}}function Tr(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)MS(t,e),t=t.sibling;else dS(t,!1)}function MS(e,t){var n=e.alternate;if(n===null)jp(e,!1);else switch(e.tag){case 3:if(nm=Vi=!1,Pv(),Tr(t,e),!Vi&&!Zu){if(e=Wi,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];JS(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),nm=!0}Wi=null;break;case 5:Tr(t,e);break;case 4:i=Vi,Vi=!1,Tr(t,e),Vi&&(Zu=!0),Vi=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?jp(e,!1):Tr(t,e));break;case 30:i=Vi,s=Pv(),Vi=!1,Tr(t,e),Vi&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=xs(a,r),r=xs(n.memoizedProps,r);var o=As(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Pn=0,t=lg(e,n,t,r,o,a,!0),Pn!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(eo(e,e.memoizedProps.onUpdate),Wi=s):s!==null&&(s.push.apply(s,Wi),Wi=s),Vi=(e.flags&32)!==0?!0:i;break;default:Tr(t,e)}}function ki(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)pS(e,t.alternate,t),t=t.sibling}function Ys(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:ga(4,n,n.return),Ys(n,i);break;case 1:ln(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&oS(n,n.return,s),Ys(n,i);break;case 27:(i&2)!==0&&sM(n.stateNode,n.type,n.memoizedProps);case 5:ln(n,n.return),n.tag!==5&&n.tag!==27||vl(n),Ys(n,i);break;case 6:vl(n);break;case 26:ln(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||se||s.parentNode.removeChild(s),Ys(n,i);break;case 22:n.memoizedState===null&&Ys(n,i);break;case 30:ln(n,n.return),Ys(n,i);break;case 7:ln(n,n.return);default:Ys(n,i)}e=e.sibling}}function Ei(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:Ei(s,a,n),ql(4,a);break;case 1:if(Ei(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(f){ue(i,i.return,f)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)mx(c[s],l)}catch(f){ue(i,i.return,f)}}o&&r&64&&rS(a),Xi(a,a.return);break;case 27:(n&2)!==0&&cS(a);case 5:a.tag!==5&&a.tag!==27||Ov(a),Ei(s,a,n),o&&i===null&&r&4&&Kp(a),Xi(a,a.return);break;case 6:Ov(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||$e||Sm(Ol(l.ownerDocument),a.type,l),Ei(s,a,n),o&&i===null&&r&4&&Kp(a),Xi(a,a.return);break;case 12:Ei(s,a,n);break;case 31:Ei(s,a,n),o&&r&4&&vS(s,a);break;case 13:Ei(s,a,n),o&&r&4&&yS(s,a);break;case 22:a.memoizedState===null&&Ei(s,a,n),Xi(a,a.return);break;case 30:Ei(s,a,n),Xi(a,a.return);break;case 7:Xi(a,a.return);default:Ei(s,a,n)}t=t.sibling}}function cg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Xl(n))}function ug(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Xl(e))}function ui(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)bS(e,t,n,i),t=t.sibling;else s&&fS(t)}function bS(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&xu(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:ui(e,t,n,i),a&2048&&ql(9,t);break;case 1:ui(e,t,n,i);break;case 3:ui(e,t,n,i),s&&nm&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Xl(a)));break;case 12:if(a&2048){ui(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){ue(t,t.return,c)}}else ui(e,t,n,i);break;case 31:ui(e,t,n,i);break;case 13:ui(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&xu(o),r._visibility&2?ui(e,t,n,i):yl(e,t)):(s&&o!==null&&o.memoizedState!==null&&xu(t),r._visibility&2?ui(e,t,n,i):(r._visibility|=2,Ar(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&cg(o,t);break;case 24:ui(e,t,n,i),a&2048&&ug(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(ji(a.child,!0),ji(t.child,!0))),ui(e,t,n,i);break;default:ui(e,t,n,i)}}function Ar(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Ar(a,r,o,l,s),ql(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?Ar(a,r,o,l,s):yl(a,r):(f._visibility|=2,Ar(a,r,o,l,s)),s&&c&2048&&cg(r.alternate,r);break;case 24:Ar(a,r,o,l,s),s&&c&2048&&ug(r.alternate,r);break;default:Ar(a,r,o,l,s)}t=t.sibling}}function yl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:yl(n,i),s&2048&&cg(i.alternate,i);break;case 24:yl(n,i),s&2048&&ug(i.alternate,i);break;default:yl(n,i)}t=t.sibling}}var Ga=8192;function za(e,t,n){if(e.subtreeFlags&Ga)for(e=e.child;e!==null;)TS(e,t,n),e=e.sibling}function TS(e,t,n){switch(e.tag){case 26:za(e,t,n),e.flags&Ga&&(e.memoizedState!==null?BA(n,Ai,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&cy(n,e)));break;case 5:za(e,t,n),e.flags&Ga&&(e=e.stateNode,(t&335544128)===t&&cy(n,e));break;case 3:case 4:var i=Ai;Ai=Ol(e.stateNode.containerInfo),za(e,t,n),Ai=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Ga,Ga=16777216,za(e,t,n),Ga=i):za(e,t,n));break;case 30:if((e.flags&Ga)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,qn===null&&(qn=new Map),qn.set(i,s)}za(e,t,n);break;default:za(e,t,n)}}function ES(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function el(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];tn=i,wS(i,e)}ES(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)AS(e),e=e.sibling}function AS(e){switch(e.tag){case 0:case 11:case 15:el(e),e.flags&2048&&ga(9,e,e.return);break;case 3:el(e);break;case 12:el(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Su(e)):el(e);break;default:el(e)}}function Su(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];tn=i,wS(i,e)}ES(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ga(8,t,t.return),Su(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Su(t));break;default:Su(t)}e=e.sibling}}function wS(e,t){for(;tn!==null;){var n=tn;switch(n.tag){case 0:case 11:case 15:ga(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Xl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,tn=i;else t:for(n=e;tn!==null;){i=tn;var s=i.sibling,a=i.return;if(gS(i),i===n){tn=null;break t}if(s!==null){s.return=a,tn=s;break t}tn=a}}}var OE={getCacheForType:function(e){var t=un(He),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return un(He).controller.signal}},IE=typeof WeakMap=="function"?WeakMap:Map,ne=0,me=null,Wt=null,Kt=0,le=0,kn=null,ta=!1,po=!1,hg=!1,Ts=0,Oe=0,_a=0,Za=0,Ju=0,Yn=0,to=0,xl=null,In=null,am=!1,_h=0,CS=0,Ku=1/0,Qu=null,ca=null,Le=0,Ci=null,nr=null,Qi=0,rm=0,om=null,RS=null,Yr=null,Zr=null,Jr=null,Sl=0,Mu=null;function Qn(){return(ne&2)!==0&&Kt!==0?Kt&-Kt:Dt.T!==null?dg():Uy()}function NS(){if(Yn===0)if((Kt&536870912)===0||Vt){var e=Xc;Xc<<=1,(Xc&3932160)===0&&(Xc=262144),Yn=e}else Yn=536870912;return e=pn.current,e!==null&&(e.flags|=32),Yn}function eo(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=QS(xs(e.memoizedProps,n))),Zr===null&&(Zr=[]),Zr.push(t.bind(null,i))}}function zn(e,t,n){(e===me&&(le===2||le===9)||e.cancelPendingCommit!==null)&&(no(e,0),ea(e,Kt,Yn,!1)),Gl(e,n),((ne&2)===0||e!==me)&&(e===me&&((ne&2)===0&&(Za|=n),Oe===4&&ea(e,Kt,Yn,!1)),ts(e))}function DS(e,t,n){if((ne&6)!==0)throw Error(Q(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Hl(e,t),s=i?zE(e,t):ap(e,t,!0),a=i;do{if(s===0){po&&!i&&ea(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!PE(n)){s=ap(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=xl;var l=o.current.memoizedState.isDehydrated;if(l&&(no(o,r).flags|=256),r=ap(o,r,!1),r!==2&&r!==6){if(hg&&!l){o.errorRecoveryDisabledLanes|=a,Za|=a,s=4;break t}a=In,In=s,a!==null&&(In===null?In=a:In.push.apply(In,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){no(e,0),ea(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(Q(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:ea(i,t,Yn,!ta);break t;case 2:In=null;break;case 3:case 5:break;default:throw Error(Q(329))}if((t&62914560)===t&&(s=_h+300-Zn(),10<s)){if(ea(i,t,Yn,!ta),ih(i,0,!0)!==0)break t;Qi=t,i.timeoutHandle=mg(zv.bind(null,i,n,In,Qu,am,t,Yn,Za,to,ta,a,"Throttled",-0,0),s);break t}zv(i,n,In,Qu,am,t,Yn,Za,to,ta,a,null,-0,0)}}break}while(!0);ts(e)}function zv(e,t,n,i,s,a,r,o,l,c,f,p,u,d){e.timeoutHandle=-1;var v=t.subtreeFlags,b=(a&335544064)===a;if(p=null,(b||v&8192||(v&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},qn=null,TS(t,a,p),b&&(v=p,b=e.containerInfo,b=(b.nodeType===9?b:b.ownerDocument).__reactViewTransition,b!=null&&(v.count++,v.waitingForViewTransition=!0,v=Il.bind(v),b.finished.then(v,v))),v=(a&62914560)===a?_h-Zn():(a&4194048)===a?CS-Zn():0,v=zA(p,v),v!==null)){Qi=a,e.cancelPendingCommit=v(Hv.bind(null,e,t,a,n,i,s,r,o,l,c,f,p,null,u,d)),ea(e,a,r,!c);return}Hv(e,t,a,n,i,s,r,o,l,c,f,p)}function PE(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!jn(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ea(e,t,n,i){t=Cy(e,t),t&=~Ju,t&=~Za,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Kn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&Ny(e,n,t)}function vh(){return(ne&6)===0?(Yl(0,!1),!1):!0}function fg(){if(Wt!==null){if(le===0)var e=Wt.return;else e=Wt,gs=or=null,Jm(e),Xr=null,Cl=0,e=Wt;for(;e!==null;)aS(e.alternate,e),e=e.return;Wt=null}}function no(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,sA(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Qi=0,fg(),me=e,Wt=n=_s(e.current,null),Kt=t,le=0,kn=null,ta=!1,po=Hl(e,t),hg=!1,to=Yn=Ju=Za=_a=Oe=0,In=xl=null,am=!1,Ts=Cy(e,t),lh(),n}function LS(e,t){zt=null,Dt.H=ku,t===ho||t===hh?(t=hv(),le=3):t===Gm?(t=hv(),le=4):le=t===ig?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,kn=t,Wt===null&&(Oe=1,Xu(e,mi(t,e.current)))}function US(){var e=pn.current;return e===null?!0:(Kt&4194048)===Kt?yn===null:(Kt&62914560)===Kt||(Kt&536870912)!==0?e===yn:!1}function OS(){var e=Dt.H;return Dt.H=ku,e===null?ku:e}function IS(){var e=Dt.A;return Dt.A=OE,e}function ju(){Oe=4,ta||(Kt&4194048)!==Kt&&pn.current!==null||(po=!0),(_a&134217727)===0&&(Za&134217727)===0||me===null||ea(me,Kt,Yn,!1)}function ap(e,t,n){var i=ne;ne|=2;var s=OS(),a=IS();(me!==e||Kt!==t)&&(Qu=null,no(e,t)),t=!1;var r=Oe;t:do try{if(le!==0&&Wt!==null){var o=Wt,l=kn;switch(le){case 8:fg(),r=6;break t;case 3:case 2:case 9:case 6:pn.current===null&&(t=!0);var c=le;if(le=0,kn=null,Fr(e,o,l,c),n&&po){r=0;break t}break;default:c=le,le=0,kn=null,Fr(e,o,l,c)}}BE(),r=Oe;break}catch(f){LS(e,f)}while(!0);return t&&e.shellSuspendCounter++,gs=or=null,ne=i,Dt.H=s,Dt.A=a,Wt===null&&(me=null,Kt=0,lh()),r}function BE(){for(;Wt!==null;)PS(Wt)}function zE(e,t){var n=ne;ne|=2;var i=OS(),s=IS();me!==e||Kt!==t?(Qu=null,Ku=Zn()+500,no(e,t)):po=Hl(e,t);t:do try{if(le!==0&&Wt!==null){t=Wt;var a=kn;e:switch(le){case 1:le=0,kn=null,Fr(e,t,a,1);break;case 2:case 9:if(uv(a)){le=0,kn=null,Fv(t);break}t=function(){le!==2&&le!==9||me!==e||(le=7),ts(e)},a.then(t,t);break t;case 3:le=7;break t;case 4:le=5;break t;case 7:uv(a)?(le=0,kn=null,Fv(t)):(le=0,kn=null,Fr(e,t,a,7));break;case 5:var r=null;switch(Wt.tag){case 26:r=Wt.memoizedState;case 5:case 27:var o=Wt;if(r?oM(r):o.stateNode.complete){le=0,kn=null;var l=o.sibling;if(l!==null)Wt=l;else{var c=o.return;c!==null?(Wt=c,yh(c)):Wt=null}break e}}le=0,kn=null,Fr(e,t,a,5);break;case 6:le=0,kn=null,Fr(e,t,a,6);break;case 8:fg(),Oe=6;break t;default:throw Error(Q(462))}}FE();break}catch(f){LS(e,f)}while(!0);return gs=or=null,Dt.H=i,Dt.A=s,ne=n,Wt!==null?0:(me=null,Kt=0,lh(),Oe)}function FE(){for(;Wt!==null&&!nT();)PS(Wt)}function PS(e){var t=sS(e.alternate,e,Ts);e.memoizedProps=e.pendingProps,t===null?yh(e):Wt=t}function Fv(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=wv(n,t,t.pendingProps,t.type,void 0,Kt);break;case 11:t=wv(n,t,t.pendingProps,t.type.render,t.ref,Kt);break;case 5:Jm(t);var i=t;i===nn&&(Vt?(Pu(i),i.tag===5&&i.stateNode!=null&&(xe=i.stateNode)):(Pu(i),Vt=!0));default:aS(n,t),t=Wt=rx(t,Ts),t=sS(n,t,Ts)}e.memoizedProps=e.pendingProps,t===null?yh(e):Wt=t}function Fr(e,t,n,i){gs=or=null,Jm(t),Xr=null,Cl=0;var s=t.return;try{if(AE(e,s,t,n,Kt)){Oe=1,Xu(e,mi(n,e.current)),Wt=null;return}}catch(a){if(s!==null)throw Wt=s,a;Oe=1,Xu(e,mi(n,e.current)),Wt=null;return}t.flags&32768?(Vt||i===1?e=!0:po||(Kt&536870912)!==0?e=!1:(ta=e=!0,(i===2||i===9||i===3||i===6)&&(i=pn.current,i!==null&&i.tag===13&&(i.flags|=16384))),BS(t,e)):yh(t)}function yh(e){var t=e;do{if((t.flags&32768)!==0){BS(t,ta);return}e=t.return;var n=NE(t.alternate,t,Ts);if(n!==null){Wt=n;return}if(t=t.sibling,t!==null){Wt=t;return}Wt=t=e}while(t!==null);Oe===0&&(Oe=5)}function BS(e,t){do{var n=DE(e.alternate,e);if(n!==null){n.flags&=32767,Wt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Wt=e;return}Wt=e=n}while(e!==null);Oe=6,Wt=null}function Hv(e,t,n,i,s,a,r,o,l,c,f,p){e.cancelPendingCommit=null;do xh();while(Le!==0);if((ne&6)!==0)throw Error(Q(327));if(t!==null){if(t===e.current)throw Error(Q(177));e===me&&(Wt=me=null,Kt=0),nr=t,Ci=e,Qi=n,om=s,RS=i,HE(e,t,n,r,o,l,p)}}function HE(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(rm=o,o|=Im,fT(e,n,o,i,s,a),Zr=null,(n&335544064)===n?(Jr=pE(e),i=10262):(Jr=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,qE(Du,function(){return hm(),null})):(e.callbackNode=null,e.callbackPriority=0),Yu=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Dt.T,Dt.T=null,s=ie.p,ie.p=2,a=ne,ne|=4;try{LE(e,t,n)}finally{ne=a,ie.p=s,Dt.T=i}}Le=1,Yu?Yr=uA(r,e.containerInfo,Jr,lm,cm,VE,um,hm,GE,null,null):(lm(),cm(),um())}function GE(e){if(Le!==0){var t=Ci.onRecoverableError;t(e,{componentStack:null})}}function VE(){Le===3&&(Le=0,MS(nr,Ci),Le=4)}function lm(){if(Le===1){Le=0;var e=Ci,t=nr,n=Qi,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Dt.T,Dt.T=null;var s=ie.p;ie.p=2;var a=ne;ne|=4;try{ll=Zu=!1,xS(t,e,n),n=mm;var r=jy(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Qy(o.ownerDocument.documentElement,o)){if(l!==null&&Om(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),v=o.textContent.length,b=Math.min(l.start,v),_=l.end===void 0?b:Math.min(l.end,v);!d.extend&&b>_&&(r=_,_=b,b=r);var h=nv(o,b),m=nv(o,_);if(h&&m&&(d.rangeCount!==1||d.anchorNode!==h.node||d.anchorOffset!==h.offset||d.focusNode!==m.node||d.focusOffset!==m.offset)){var x=p.createRange();x.setStart(h.node,h.offset),d.removeAllRanges(),b>_?(d.addRange(x),d.extend(m.node,m.offset)):(x.setEnd(m.node,m.offset),d.addRange(x))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var y=p[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}oo=!!pm,mm=pm=null}finally{ne=a,ie.p=s,Dt.T=i}}e.current=t,Le=2}}function cm(){if(Le===2){Le=0;var e=Ci,t=nr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Dt.T,Dt.T=null;var i=ie.p;ie.p=2;var s=ne;ne|=4;try{pS(e,t.alternate,t)}finally{ne=s,ie.p=i,Dt.T=n}}Le=3}}function um(){if(Le===4||Le===3){Le=0;var e=Yr;Yr=null,iT();var t=Ci,n=nr,i=Qi,s=RS,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Le=5:(Le=0,nr=Ci=null,zS(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(ca=null),Cm(i),n=n.stateNode,Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(Fl,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=Dt.T,a=ie.p,ie.p=2,Dt.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{Dt.T=n,ie.p=a}}if(s=Zr,r=Jr,Jr=null,s!==null&&(Zr=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);(Qi&3)!==0&&xh(),ts(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===Mu?Sl++:(Sl=0,Mu=t):(Sl=0,Mu=null),Yl(0,!1)}}function zS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Xl(t)))}function xh(){return Yr!==null&&(Yr.skipTransition(),Yr=null),lm(),cm(),um(),hm()}function hm(){if(Le!==5)return!1;var e=Ci,t=rm;rm=0;var n=Cm(Qi),i=Dt.T,s=ie.p;try{ie.p=32>n?32:n,Dt.T=null,n=om,om=null;var a=Ci,r=Qi;if(Le=0,nr=Ci=null,Qi=0,(ne&6)!==0)throw Error(Q(331));var o=ne;if(ne|=4,AS(a.current),bS(a,a.current,r,n),ne=o,Yl(0,!1),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(Fl,a)}catch{}return!0}finally{ie.p=s,Dt.T=i,zS(e,t)}}function Gv(e,t,n){t=mi(n,t),t=Xp(e.stateNode,t,2),e=ra(e,t,2),e!==null&&(Gl(e,2),ts(e))}function ue(e,t,n){if(e.tag===3)Gv(e,e,n);else for(;t!==null;){if(t.tag===3){Gv(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ca===null||!ca.has(i))){e=mi(n,e),n=$x(2),i=ra(t,n,2),i!==null&&(tS(n,i,t,e),Gl(i,2),ts(i));break}}t=t.return}}function rp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new IE;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(hg=!0,s.add(n),e=kE.bind(null,e,t,n),t.then(e,e))}function kE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,me===e&&(Kt&n)===n&&((Oe===4||Oe===3&&(Kt&62914560)===Kt&&300>Zn()-_h)&&(ne&2)===0?no(e,0):Ju|=n,to===Kt&&(to=0)),ts(e)}function FS(e,t){t===0&&(t=Ry()),e=rr(e,t),e!==null&&(Gl(e,t),ts(e))}function XE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),FS(e,n)}function WE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(Q(314))}i!==null&&i.delete(t),FS(e,n)}function qE(e,t){return Am(e,t)}var io=null,wr=null,fm=!1,$u=!1,op=!1,na=0;function ts(e){e!==wr&&e.next===null&&(wr===null?io=wr=e:wr=wr.next=e),$u=!0,fm||(fm=!0,ZE())}function Yl(e,t){if(!op&&$u){op=!0;do for(var n=!1,i=io;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Kn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Vv(i,a))}else a=Kt,a=ih(i,i===me?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||Hl(i,a)||(n=!0,Vv(i,a));i=i.next}while(n);op=!1}}function YE(){HS()}function HS(){$u=fm=!1;var e=0;na!==0&&iA()&&(e=na);for(var t=Zn(),n=null,i=io;i!==null;){var s=i.next,a=GS(i,t);a===0?(i.next=null,n===null?io=s:n.next=s,s===null&&(wr=n)):(n=i,(e!==0||(a&3)!==0)&&($u=!0)),i=s}Le!==0&&Le!==5||Yl(e,!1),na!==0&&(na=0)}function GS(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Kn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=hT(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=me,n=Kt,n=ih(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(le===2||le===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Fd(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Hl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Fd(i),Cm(n)){case 2:case 8:n=Ay;break;case 32:n=Du;break;case 268435456:n=wy;break;default:n=Du}return i=VS.bind(null,e),n=Am(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Fd(i),e.callbackPriority=2,e.callbackNode=null,2}function VS(e,t){if(Le!==0&&Le!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(xh()&&e.callbackNode!==n)return null;var i=Kt;return i=ih(e,e===me?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(DS(e,i,t),GS(e,Zn()),e.callbackNode!=null&&e.callbackNode===n?VS.bind(null,e):null)}function Vv(e,t){if(xh())return null;DS(e,t,!0)}function ZE(){aA(function(){(ne&6)!==0?Am(Ey,YE):HS()})}function dg(){if(na===0){var e=ja;e===0&&(e=kc,kc<<=1,(kc&261888)===0&&(kc=256)),na=e}return na}function kv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:uu(e)}function JE(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=kv((s[Hn]||null).action),r=i.submitter;r&&(t=(t=r[Hn]||null)?kv(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new ah("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(na!==0){var l=new FormData(s,r);Vp(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),Vp(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(su=0;su<Dp.length;su++)au=Dp[su],Xv=au.toLowerCase(),Wv=au[0].toUpperCase()+au.slice(1),Ri(Xv,"on"+Wv);var au,Xv,Wv,su;Ri(tx,"onAnimationEnd");Ri(ex,"onAnimationIteration");Ri(nx,"onAnimationStart");Ri("dblclick","onDoubleClick");Ri("focusin","onFocus");Ri("focusout","onBlur");Ri(rE,"onTransitionRun");Ri(oE,"onTransitionStart");Ri(lE,"onTransitionCancel");Ri(ix,"onTransitionEnd");Qr("onMouseEnter",["mouseout","mouseover"]);Qr("onMouseLeave",["mouseout","mouseover"]);Qr("onPointerEnter",["pointerout","pointerover"]);Qr("onPointerLeave",["pointerout","pointerover"]);sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),KE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Dl));function kS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){Uu(f)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){Uu(f)}s.currentTarget=null,a=l}}}}function Xt(e,t){var n=t[F_];n===void 0&&(n=t[F_]=new Set);var i=e+"__bubble";n.has(i)||(XS(t,e,2,!1),n.add(i))}function lp(e,t,n){var i=0;t&&(i|=4),XS(n,e,i,t)}var ru="_reactListening"+Math.random().toString(36).slice(2);function pg(e){if(!e[ru]){e[ru]=!0,Iy.forEach(function(n){n!=="selectionchange"&&(KE.has(n)||lp(n,!1,e),lp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ru]||(t[ru]=!0,lp("selectionchange",!1,t))}}function XS(e,t,n,i){switch(pM(t)){case 2:var s=VA;break;case 8:s=kA;break;default:s=Sg}n=s.bind(null,t,n,e),s=void 0,!wp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function cp(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=Va(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}ky(function(){var c=a,f=Nm(n),p=[];t:{var u=sx.get(e);if(u!==void 0){var d=ah,v=e;switch(e){case"keypress":if(fu(n)===0)break t;case"keydown":case"keyup":d=PT;break;case"focusin":v="focus",d=Wd;break;case"focusout":v="blur",d=Wd;break;case"beforeblur":case"afterblur":d=Wd;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Y_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=TT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=GT;break;case tx:case ex:case nx:d=wT;break;case ix:d=kT;break;case"scroll":case"scrollend":d=MT;break;case"wheel":d=WT;break;case"copy":case"cut":case"paste":d=RT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=J_;break;case"submit":d=FT;break;case"toggle":case"beforetoggle":d=YT}var b=(t&4)!==0,_=!b&&(e==="scroll"||e==="scrollend"),h=b?u!==null?u+"Capture":null:u;b=[];for(var m=c,x;m!==null;){var y=m;if(x=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||x===null||h===null||(y=bl(m,h),y!=null&&b.push(Ll(m,y,x))),_)break;m=m.return}0<b.length&&(u=new d(u,v,null,n,f),p.push({event:u,listeners:b}))}}if((t&7)===0){t:{if(d=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",d&&n!==Ap&&(v=n.relatedTarget||n.fromElement)&&(Va(v)||v[co]))break t;(u||d)&&(v=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,u?(d=n.relatedTarget||n.toElement,u=c,d=d?Va(d):null,d!==null&&(_=zl(d),b=d.tag,d!==_||b!==5&&b!==27&&b!==6)&&(d=null)):(u=null,d=c),u!==d&&(b=Y_,y="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(b=J_,y="onPointerLeave",h="onPointerEnter",m="pointer"),_=u==null?v:rl(u),x=d==null?v:rl(d),v=new b(y,m+"leave",u,n,f),v.target=_,v.relatedTarget=x,y=null,Va(f)===c&&(b=new b(h,m+"enter",d,n,f),b.target=x,b.relatedTarget=_,y=b),_=y,b=u&&d?pp(u,d,QE):null,u!==null&&qv(p,v,u,b,!1),d!==null&&_!==null&&qv(p,_,d,b,!0)))}t:{if(u=c?rl(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var E=$_;else if(j_(u))if(Jy)E=iE;else{E=eE;var A=tE}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Rm(c.elementType)&&(E=$_):E=nE;if(E&&(E=E(e,c))){Zy(p,E,n,f);break t}A&&A(e,u,c)}switch(A=c?rl(c):window,e){case"focusin":(j_(A)||A.contentEditable==="true")&&(Ur=A,Rp=c,hl=null);break;case"focusout":hl=Rp=Ur=null;break;case"mousedown":Np=!0;break;case"contextmenu":case"mouseup":case"dragend":Np=!1,iv(p,n,f);break;case"selectionchange":if(aE)break;case"keydown":case"keyup":iv(p,n,f)}var g;if(Um)t:{switch(e){case"compositionstart":var T="onCompositionStart";break t;case"compositionend":T="onCompositionEnd";break t;case"compositionupdate":T="onCompositionUpdate";break t}T=void 0}else Lr?qy(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Wy&&n.locale!=="ko"&&(Lr||T!=="onCompositionStart"?T==="onCompositionEnd"&&Lr&&(g=Xy()):(js=f,Dm="value"in js?js.value:js.textContent,Lr=!0)),A=th(c,T),0<A.length&&(T=new Z_(T,e,null,n,f),p.push({event:T,listeners:A}),g?T.data=g:(g=Yy(n),g!==null&&(T.data=g)))),(g=JT?KT(e,n):QT(e,n))&&(T=th(c,"onBeforeInput"),0<T.length&&(A=new Z_("onBeforeInput","beforeinput",null,n,f),p.push({event:A,listeners:T}),A.data=g)),JE(p,e,c,n,f)}kS(p,t)})}function Ll(e,t,n){return{instance:e,listener:t,currentTarget:n}}function th(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=bl(e,n),s!=null&&i.unshift(Ll(e,s,a)),s=bl(e,t),s!=null&&i.push(Ll(e,s,a))),e.tag===3)return i;e=e.return}return[]}function QE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function qv(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=bl(n,a),c!=null&&r.unshift(Ll(n,c,l))):s||(c=bl(n,a),c!=null&&r.push(Ll(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var jE=/\r\n?/g,$E=/\u0000|\uFFFD/g;function Yv(e){return(typeof e=="string"?e:""+e).replace(jE,`
`).replace($E,"")}function WS(e,t){return t=Yv(t),Yv(e)===t}function ce(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||jr(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&jr(e,""+i);else return;break;case"className":qc(e,"class",i);break;case"tabIndex":qc(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":qc(e,n,i);break;case"style":Vy(e,i,a);return;case"data":if(t!=="object"){qc(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=uu(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&ce(e,t,"name",s.name,s,null),ce(e,t,"formEncType",s.formEncType,s,null),ce(e,t,"formMethod",s.formMethod,s,null),ce(e,t,"formTarget",s.formTarget,s,null)):(ce(e,t,"encType",s.encType,s,null),ce(e,t,"method",s.method,s,null),ce(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=uu(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Yi);return;case"onScroll":i!=null&&Xt("scroll",e);return;case"onScrollEnd":i!=null&&Xt("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Q(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Q(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=uu(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Xt("beforetoggle",e),Xt("toggle",e),cu(e,"popover",i);break;case"xlinkActuate":ds(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ds(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ds(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ds(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ds(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ds(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ds(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ds(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ds(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":cu(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=xT.get(n)||n,cu(e,n,i);else return}te=!0}function dm(e,t,n,i,s,a){switch(n){case"style":Vy(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Q(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Q(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")jr(e,i);else if(typeof i=="number"||typeof i=="bigint")jr(e,""+i);else return;break;case"onScroll":i!=null&&Xt("scroll",e);return;case"onScrollEnd":i!=null&&Xt("scrollend",e);return;case"onClick":i!=null&&(e.onclick=Yi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Py.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[Hn]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}te=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):cu(e,n,i)}return}te=!0}function dn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Xt("error",e),Xt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Q(137,t));default:ce(e,t,a,r,n,null)}}s&&ce(e,t,"srcSet",n.srcSet,n,null),i&&ce(e,t,"src",n.src,n,null);return;case"input":Xt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":s=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":a=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(Q(137,t));break;default:ce(e,t,i,f,n,null)}}Fy(e,a,o,l,c,r,s,!1);return;case"select":Xt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:ce(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?Gr(e,!!i,t,!1):n!=null&&Gr(e,!!i,n,!0);return;case"textarea":Xt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Q(91));break;default:ce(e,t,r,o,n,null)}Gy(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":ce(e,t,l,i,n,null));return;case"dialog":Xt("beforetoggle",e),Xt("toggle",e),Xt("cancel",e),Xt("close",e);break;case"iframe":case"object":Xt("load",e);break;case"video":case"audio":for(i=0;i<Dl.length;i++)Xt(Dl[i],e);break;case"image":Xt("error",e),Xt("load",e);break;case"details":Xt("toggle",e);break;case"embed":case"source":case"link":Xt("error",e),Xt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(Q(137,t));default:ce(e,t,c,i,n,null)}return;default:if(Rm(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&dm(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ce(e,t,o,i,n,null))}var tA={};function eA(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,f=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||ce(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":d!==p&&(te=!0),a=d;break;case"name":d!==p&&(te=!0),s=d;break;case"checked":d!==p&&(te=!0),c=d;break;case"defaultChecked":d!==p&&(te=!0),f=d;break;case"value":d!==p&&(te=!0),r=d;break;case"defaultValue":d!==p&&(te=!0),o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(Q(137,t));break;default:d!==p&&ce(e,t,u,d,i,p)}}Ep(e,r,o,l,c,f,a,s);return;case"select":d=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||ce(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(te=!0),u=a;break;case"defaultValue":a!==l&&(te=!0),o=a;break;case"multiple":a!==l&&(te=!0),r=a;default:a!==l&&ce(e,t,s,a,i,l)}t=o,n=r,i=d,u!=null?Gr(e,!!n,u,!1):!!i!=!!n&&(t!=null?Gr(e,!!n,t,!0):Gr(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ce(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(te=!0),u=s;break;case"defaultValue":s!==a&&(te=!0),d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(Q(91));break;default:s!==a&&ce(e,t,r,s,i,a)}Hy(e,u,d);return;case"option":for(var v in n)u=n[v],n.hasOwnProperty(v)&&u!=null&&!i.hasOwnProperty(v)&&(v==="selected"?e.selected=!1:ce(e,t,v,null,i,u));for(l in i)u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null)&&(l==="selected"?(u!==d&&(te=!0),e.selected=u&&typeof u!="function"&&typeof u!="symbol"):ce(e,t,l,u,i,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in n)u=n[b],n.hasOwnProperty(b)&&u!=null&&!i.hasOwnProperty(b)&&ce(e,t,b,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(Q(137,t));break;default:ce(e,t,c,u,i,d)}return;default:if(Rm(t)){for(var _ in n)u=n[_],n.hasOwnProperty(_)&&u!==void 0&&!i.hasOwnProperty(_)&&dm(e,t,_,void 0,i,u);for(f in i)u=i[f],d=n[f],!i.hasOwnProperty(f)||u===d||u===void 0&&d===void 0||dm(e,t,f,u,i,d);return}}for(var h in n)u=n[h],n.hasOwnProperty(h)&&u!=null&&!i.hasOwnProperty(h)&&ce(e,t,h,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||ce(e,t,p,u,i,d)}function Zv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function nA(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&Zv(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,p=l.initiatorType;f&&Zv(p)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var pm=null,mm=null;function Ul(e){return e.nodeType===9?e:e.ownerDocument}function Jv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qS(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function YS(e,t,n,i){return n=Ul(n).createElement(e),n[cn]=i,n[Hn]=t,dn(n,e,t),en(n),n}function gm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var up=null;function iA(){var e=window.event;return e&&e.type==="popstate"?e===up?!1:(up=e,!0):(up=null,!1)}var mg=typeof setTimeout=="function"?setTimeout:void 0,sA=typeof clearTimeout=="function"?clearTimeout:void 0,Kv=typeof Promise=="function"?Promise:void 0,Qv=typeof requestAnimationFrame=="function"?requestAnimationFrame:mg,aA=typeof queueMicrotask=="function"?queueMicrotask:typeof Kv<"u"?function(e){return Kv.resolve(null).then(e).catch(rA)}:mg;function rA(e){setTimeout(function(){throw e})}function ya(e){return e==="head"}function jv(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),lo(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")fp(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,fp(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[Vl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&fp(e.ownerDocument.body);n=s}while(n);lo(t)}function $v(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function ZS(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function JS(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function KS(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function _m(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return KS(t,n,e)}function oA(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return KS(t,n,e)}function lA(e){return e.documentElement.clientHeight}function cA(e){this.addEventListener("load",e),this.addEventListener("error",e)}function uA(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var f=c.startViewTransition({update:function(){var u=c.defaultView,d=u.navigation&&u.navigation.transition,v=c.fonts.status;i();var b=[];if(v==="loaded"&&(lA(c),c.fonts.status==="loading"&&b.push(c.fonts.ready)),v=b.length,e!==null)for(var _=e.suspenseyImages,h=0,m=0;m<_.length;m++){var x=_[m];if(!x.complete){var y=x.getBoundingClientRect();if(0<y.bottom&&0<y.right&&y.top<u.innerHeight&&y.left<u.innerWidth){if(h+=lM(x),h>Eu){b.length=v;break}x=new Promise(cA.bind(x)),b.push(x)}}}if(0<b.length)return u=Promise.race([Promise.all(b),new Promise(function(E){return setTimeout(E,500)})]).then(s,s),(d?Promise.allSettled([d.finished,u]):u).then(a,a);if(s(),d)return d.finished.then(a,a);a()},types:n});c.__reactViewTransition=f;var p=[];return f.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),d=0;d<u.length;d++){var v=u[d],b=v.effect,_=b.pseudoElement;if(_!=null&&_.startsWith("::view-transition")){p.push(v),v=b.getKeyframes();for(var h=_=void 0,m=!0,x=0;x<v.length;x++){var y=v[x],E=y.width;if(_===void 0)_=E;else if(_!==E){m=!1;break}if(E=y.height,h===void 0)h=E;else if(h!==E){m=!1;break}delete y.width,delete y.height,y.transform==="none"&&delete y.transform}m&&_!==void 0&&h!==void 0&&(b.setKeyframes(v),m=getComputedStyle(b.target,b.pseudoElement),m.width!==_||m.height!==h)&&(m=v[0],m.width=_,m.height=h,m=v[v.length-1],m.width=_,m.height=h,b.setKeyframes(v))}}r()},function(u){c.__reactViewTransition===f&&(c.__reactViewTransition=null);try{typeof u=="object"&&u!==null&&u.name==="InvalidStateError"&&(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null),u!==null&&l(u)}finally{i(),s(),r()}}),f.finished.finally(function(){for(var u=0;u<p.length;u++)p[u].cancel();c.__reactViewTransition===f&&(c.__reactViewTransition=null),o()}),f}catch{return i(),s(),r(),null}}function ka(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}ka.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:ge({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};ka.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};ka.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function QS(e){return{name:e,group:new ka("group",e),imagePair:new ka("image-pair",e),old:new ka("old",e),new:new ka("new",e)}}function $n(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}$n.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(jS(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=so(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),Fn(this._fragmentFiber.child,!1,hA,e,o,i)}this._eventListeners=a}};function hA(e,t,n,i){return qe(e).addEventListener(t,n,i),!1}$n.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=jS(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=so(s.optionsOrUseCapture),Fn(this._fragmentFiber.child,!1,fA,e,n,s),i.splice(t,1),a!==null&&a()}};function fA(e,t,n,i){return qe(e).removeEventListener(t,n,i),!1}function so(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function ty(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function jS(e,t,n,i){if(e.length===0)return-1;i=ty(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&ty(a.optionsOrUseCapture)===i)return s}return-1}$n.prototype.dispatchEvent=function(e){var t=ir(this._fragmentFiber);if(t===null)return!0;t=qe(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,so(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,so(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};$n.prototype.focus=function(e){Fn(this._fragmentFiber.child,!0,$S,e,void 0,void 0)};function $S(e,t){return e.tag===6?!1:(e=qe(e),TA(e,t))}$n.prototype.focusLast=function(e){var t=[];Fn(this._fragmentFiber.child,!0,gg,t,void 0,void 0);for(var n=t.length-1;0<=n&&!$S(t[n],e);n--);};function gg(e,t){return t.push(e),!1}$n.prototype.blur=function(){var e=ir(this._fragmentFiber);e!==null&&(e=qe(e),e=Ul(e).activeElement,e!==null&&Fn(this._fragmentFiber.child,!1,dA,e,void 0,void 0))};function dA(e,t){return e.tag===6?!1:(e=qe(e),e===t||e.contains(t)?(t.blur(),!0):!1)}$n.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),Fn(this._fragmentFiber.child,!1,pA,e,void 0,void 0)};function pA(e,t){return e.tag===6||(e=qe(e),t.observe(e)),!1}$n.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),Fn(this._fragmentFiber.child,!1,mA,e,void 0,void 0);for(var n=t=0;n<wi.length;n++){var i=wi[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):wi[t++]=i}wi.length=t}};function mA(e,t){return e.tag===6||(e=qe(e),t.unobserve(e)),!1}var wi=[],hp=!1;function gA(e,t,n){wi.push({fragmentInstance:e,observer:t,instance:n}),hp||(hp=!0,EA(function(){hp=!1;var i=wi;wi=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}$n.prototype.getClientRects=function(){var e=[];return Fn(this._fragmentFiber.child,!1,_A,e,void 0,void 0),e};function _A(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=qe(e),t.push.apply(t,e.getClientRects());return!1}$n.prototype.getRootNode=function(e){var t=ir(this._fragmentFiber);return t===null?this:qe(t).getRootNode(e)};$n.prototype.compareDocumentPosition=function(e){var t=ir(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];Fn(this._fragmentFiber.child,!1,gg,n,void 0,void 0);var i=qe(t);if(n.length===0){if(n=i,U_(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=Sy(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=qe(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=qe(n[0]),s=qe(n[n.length-1]);var a=U_(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||vA(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function vA(e,t,n,i,s){var a=Va(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=ir(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=pp(n,a,O_),t===null?t=!1:(Fn(t,!0,Z1,a,n),a=Cr,Cr=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=pp(i,a,O_),t===null?t=!1:(Fn(t,!0,J1,a,i),a=Cr,dp=Cr=null,t=a!==null)),t):!1}function ey(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}$n.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(Q(566));var t=[];Fn(this._fragmentFiber.child,!1,gg,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=Sy(this._fragmentFiber);if(i=n?i[1]||i[0]||ir(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=qe(i),ey(e,n);return}if(i=qe(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=qe(s),ey(s,n)):qe(s).scrollIntoView(e),i+=n?-1:1}};function yA(e,t){return e=qe(e),tM(e,t),!1}function tM(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function eM(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,so(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<wi.length;o++){var l=wi[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(wi[r++]=l)}wi.length=r,a.observe(e)}),tM(e,t))}function xA(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,so(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?gA(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function vm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":vm(n),sh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function SA(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Vl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function MA(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=_i(e.nextSibling),e===null))return null;return e}function nM(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=_i(e.nextSibling),e===null))return null;return e}function ym(e){return e.data==="$?"||e.data==="$~"}function _g(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function bA(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function _i(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var xm=null;function ny(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return _i(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function iy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function TA(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function EA(e){Qv(function(){Qv(function(t){return e(t)})})}function iM(e,t,n){switch(t=Ul(n),e){case"html":if(e=t.documentElement,!e)throw Error(Q(452));return e;case"head":if(e=t.head,!e)throw Error(Q(453));return e;case"body":if(e=t.body,!e)throw Error(Q(454));return e;default:throw Error(Q(451))}}function sM(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&ce(e,t,i,null,tA,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Yi&&(e.onclick=null),sh(e)}function fp(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);sh(e)}var vi=new Map,sy=new Set;function Ol(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var ws=ie.d;ie.d={f:AA,r:wA,D:CA,C:RA,L:NA,m:DA,X:UA,S:LA,M:OA};function AA(){var e=ws.f(),t=vh();return e||t}function wA(e){var t=uo(e);t!==null&&t.tag===5&&t.type==="form"?Vx(t):ws.r(e)}var mo=typeof document>"u"?null:document;function aM(e,t,n){var i=mo;if(i&&typeof t=="string"&&t){var s=pi(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),sy.has(s)||(sy.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),dn(t,"link",e),en(t),i.head.appendChild(t)))}}function CA(e){ws.D(e),aM("dns-prefetch",e,null)}function RA(e,t){ws.C(e,t),aM("preconnect",e,t)}function NA(e,t,n){ws.L(e,t,n);var i=mo;if(i&&e&&t){var s='link[rel="preload"][as="'+pi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+pi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+pi(n.imageSizes)+'"]')):s+='[href="'+pi(e)+'"]';var a=s;switch(t){case"style":a=ao(e);break;case"script":a=go(e)}if(!(vi.has(a)||(e=ge({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),vi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Zl(a))||t==="script"&&i.querySelector(Jl(a))))){var r=i.createElement("link");dn(r,"link",e),t==="style"&&(r[Lu]=!0,r.onload=r.onerror=function(){Oy(r)}),en(r),i.head.appendChild(r)}}}function DA(e,t){ws.m(e,t);var n=mo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+pi(i)+'"][href="'+pi(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=go(e)}if(!vi.has(a)&&(e=ge({rel:"modulepreload",href:e},t),vi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Jl(a)))return}i=n.createElement("link"),dn(i,"link",e),en(i),n.head.appendChild(i)}}}function LA(e,t,n){ws.S(e,t,n);var i=mo;if(i&&e){var s=Hr(i).hoistableStyles,a=ao(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Zl(a)))o.loading=5;else{e=ge({rel:"stylesheet",href:e,"data-precedence":t},n),(n=vi.get(a))&&vg(e,n);var l=r=i.createElement("link");en(l),dn(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,bu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function UA(e,t){ws.X(e,t);var n=mo;if(n&&e){var i=Hr(n).hoistableScripts,s=go(e),a=i.get(s);a||(a=n.querySelector(Jl(s)),a||(e=ge({src:e,async:!0},t),(t=vi.get(s))&&yg(e,t),a=n.createElement("script"),en(a),dn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function OA(e,t){ws.M(e,t);var n=mo;if(n&&e){var i=Hr(n).hoistableScripts,s=go(e),a=i.get(s);a||(a=n.querySelector(Jl(s)),a||(e=ge({src:e,async:!0,type:"module"},t),(t=vi.get(s))&&yg(e,t),a=n.createElement("script"),en(a),dn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function ay(e,t,n,i){var s=(s=ia.current)?Ol(s):null;if(!s)throw Error(Q(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=ao(n.href),t=Hr(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ao(n.href);var a=Hr(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(Zl(e)))?a._p||(r.instance=a,r.state.loading=5):(a=vi.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vi.set(e,a)),IA(s,e,a,r.state))),t&&i===null)throw Error(Q(528,""));return r}if(t&&i!==null)throw Error(Q(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=go(n),t=Hr(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Q(444,e))}}function ao(e){return'href="'+pi(e)+'"'}function Zl(e){return'link[rel="stylesheet"]['+e+"]"}function rM(e){return ge({},e,{"data-precedence":e.precedence,precedence:null})}function IA(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Lu]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[Lu]=!0,t.onload=t.onerror=Oy.bind(null,t),dn(t,"link",n),en(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function go(e){return'[src="'+pi(e)+'"]'}function Jl(e){return"script[async]"+e}function ry(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+pi(n.href)+'"]');if(i)return t.instance=i,en(i),i;var s=ge({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),en(i),dn(i,"style",s),bu(i,n.precedence,e),t.instance=i;case"stylesheet":s=ao(n.href);var a=e.querySelector(Zl(s));if(a)return t.state.loading|=4,t.instance=a,en(a),a;i=rM(n),(s=vi.get(s))&&vg(i,s),a=(e.ownerDocument||e).createElement("link"),en(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),dn(a,"link",i),t.state.loading|=4,bu(a,n.precedence,e),t.instance=a;case"script":return a=go(n.src),(s=e.querySelector(Jl(a)))?(t.instance=s,en(s),s):(i=n,(s=vi.get(a))&&(i=ge({},n),yg(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),en(s),dn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(Q(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,bu(i,n.precedence,e));return t.instance}function bu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function vg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function yg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Tu=null;function oy(e,t,n){if(Tu===null){var i=new Map,s=Tu=new Map;s.set(n,i)}else s=Tu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[Vl]||a[cn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function Sm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function PA(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ly(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function oM(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function lM(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function cy(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=lM(t),e.suspenseyImages.push(t)),e=FA.bind(e),t.decode().then(e,e))}function BA(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=ao(i.href),a=t.querySelector(Zl(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Il.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,en(a);return}a=t.ownerDocument||t,i=rM(i),(s=vi.get(s))&&vg(i,s),a=a.createElement("link"),en(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),dn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Il.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Eu=0;function zA(e,t){return e.stylesheets&&e.count===0&&Au(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Au(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Eu===0&&(Eu=62500*nA());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Au(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Eu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function cM(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Au(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Il(){this.count--,cM(this)}function FA(){this.imgCount--,cM(this)}var eh=null;function Au(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,eh=new Map,t.forEach(HA,e),eh=null,Il.call(e))}function HA(e,t){if(!(t.state.loading&4)){var n=eh.get(e);if(n)var i=n.get(null);else{n=new Map,eh.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Il.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var ro={$$typeof:qi,Provider:null,Consumer:null,_currentValue:Xa,_currentValue2:Xa,_threadCount:0};function GA(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Hd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hd(0),this.hiddenUpdates=Hd(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function uM(e,t,n,i,s,a,r,o,l,c,f,p){return e=new GA(e,t,n,r,l,c,f,p,o),t=1,a===!0&&(t|=24),a=Bn(3,null,null,t),e.current=a,a.stateNode=e,t=Fm(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},Vm(a),e}function hM(e){return e?(e=Pr,e):Pr}function fM(e,t,n,i,s,a){s=hM(s),i.context===null?i.context=s:i.pendingContext=s,i=aa(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=ra(e,i,t),n!==null&&(zn(n,e,t),dl(n,e,t))}function uy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xg(e,t){uy(e,t),(e=e.alternate)&&uy(e,t)}function dM(e){if(e.tag===13||e.tag===31){var t=rr(e,67108864);t!==null&&zn(t,e,67108864),xg(e,67108864)}}function hy(e){if(e.tag===13||e.tag===31){var t=Qn();t=wm(t);var n=rr(e,t);n!==null&&zn(n,e,t),xg(e,t)}}var oo=!0;function VA(e,t,n,i){var s=Dt.T;Dt.T=null;var a=ie.p;try{ie.p=2,Sg(e,t,n,i)}finally{ie.p=a,Dt.T=s}}function kA(e,t,n,i){var s=Dt.T;Dt.T=null;var a=ie.p;try{ie.p=8,Sg(e,t,n,i)}finally{ie.p=a,Dt.T=s}}function Sg(e,t,n,i){if(oo){var s=Mm(i);if(s===null)cp(e,t,i,nh,n),fy(e,i);else if(WA(s,e,t,n,i))i.stopPropagation();else if(fy(e,i),t&4&&-1<XA.indexOf(e)){for(;s!==null;){var a=uo(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Fa(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Kn(r);o.entanglements[1]|=l,r&=~l}ts(a),(ne&6)===0&&(Ku=Zn()+500,Yl(0,!1))}}break;case 31:case 13:o=rr(a,2),o!==null&&zn(o,a,2),vh(),xg(a,2)}if(a=Mm(i),a===null&&cp(e,t,i,nh,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else cp(e,t,i,null,n)}}function Mm(e){return e=Nm(e),Mg(e)}var nh=null;function Mg(e){if(nh=null,e=Va(e),e!==null){var t=zl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=vy(t),e!==null)return e;e=null}else if(n===31){if(e=yy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return nh=e,null}function pM(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sT()){case Ey:return 2;case Ay:return 8;case Du:case aT:return 32;case wy:return 268435456;default:return 32}default:return 32}}var bm=!1,ua=null,ha=null,fa=null,Pl=new Map,Bl=new Map,Ks=[],XA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function fy(e,t){switch(e){case"focusin":case"focusout":ua=null;break;case"dragenter":case"dragleave":ha=null;break;case"mouseover":case"mouseout":fa=null;break;case"pointerover":case"pointerout":Pl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bl.delete(t.pointerId)}}function nl(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=uo(t),t!==null&&dM(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function WA(e,t,n,i,s){switch(t){case"focusin":return ua=nl(ua,e,t,n,i,s),!0;case"dragenter":return ha=nl(ha,e,t,n,i,s),!0;case"mouseover":return fa=nl(fa,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return Pl.set(a,nl(Pl.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,Bl.set(a,nl(Bl.get(a)||null,e,t,n,i,s)),!0}return!1}function mM(e){var t=Va(e.target);if(t!==null){var n=zl(t);if(n!==null){if(t=n.tag,t===13){if(t=vy(n),t!==null){e.blockedOn=t,z_(e.priority,function(){hy(n)});return}}else if(t===31){if(t=yy(n),t!==null){e.blockedOn=t,z_(e.priority,function(){hy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Mm(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Ap=i,n.target.dispatchEvent(i),Ap=null}else return t=uo(n),t!==null&&dM(t),e.blockedOn=n,!1;t.shift()}return!0}function dy(e,t,n){wu(e)&&n.delete(t)}function qA(){bm=!1,ua!==null&&wu(ua)&&(ua=null),ha!==null&&wu(ha)&&(ha=null),fa!==null&&wu(fa)&&(fa=null),Pl.forEach(dy),Bl.forEach(dy)}function ou(e,t){e.blockedOn===t&&(e.blockedOn=null,bm||(bm=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,qA)))}var lu=null;function py(e){lu!==e&&(lu=e,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,function(){lu===e&&(lu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Mg(i||n)===null)continue;break}var a=uo(n);a!==null&&(e.splice(t,3),t-=3,Vp(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function lo(e){function t(l){return ou(l,e)}ua!==null&&ou(ua,e),ha!==null&&ou(ha,e),fa!==null&&ou(fa,e),Pl.forEach(t),Bl.forEach(t);for(var n=0;n<Ks.length;n++){var i=Ks[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ks.length&&(n=Ks[0],n.blockedOn===null);)mM(n),n.blockedOn===null&&Ks.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Hn]||null;if(typeof a=="function")r||py(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Hn]||null)o=r.formAction;else if(Mg(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),py(n)}}}function gM(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function bg(e){this._internalRoot=e}Sh.prototype.render=bg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Q(409));var n=t.current,i=Qn();fM(n,i,e,t,null,null)};Sh.prototype.unmount=bg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fM(e.current,2,null,e,null,null),vh(),t[co]=null}};function Sh(e){this._internalRoot=e}Sh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Uy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ks.length&&t!==0&&t<Ks[n].priority;n++);Ks.splice(n,0,e),n===0&&mM(e)}};var my=gy.version;if(my!=="19.3.1")throw Error(Q(527,my,"19.3.1"));ie.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Q(188)):(e=Object.keys(e).join(","),Error(Q(268,e)));return e=Y1(t),e=e!==null?xy(e):null,e=e===null?null:e.stateNode,e};var YA={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Dt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(il=__REACT_DEVTOOLS_GLOBAL_HOOK__,!il.isDisabled&&il.supportsFiber))try{Fl=il.inject(YA),Jn=il}catch{}var il;Mh.createRoot=function(e,t){if(!_y(e))throw Error(Q(299));var n=!1,i="",s=Kx,a=Qx,r=jx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=uM(e,1,!1,null,null,n,i,null,s,a,r,gM),e[co]=t.current,pg(e),new bg(t)};Mh.hydrateRoot=function(e,t,n){if(!_y(e))throw Error(Q(299));var i=!1,s="",a=Kx,r=Qx,o=jx,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=uM(e,1,!0,t,n??null,i,s,l,a,r,o,gM),t.context=hM(null),n=t.current,i=Qn(),i=wm(i),s=aa(i),s.callback=null,ra(n,s,i),n=i,t.current.lanes=n,Gl(t,n),ts(t),e[co]=t.current,pg(e),new Sh(t)};Mh.version="19.3.1"});var xM=Vs((RN,yM)=>{"use strict";function vM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vM)}catch(e){console.error(e)}}vM(),yM.exports=_M()});var fe=xd(Yo(),1),f1=xd(xM(),1);var Re=xd(Yo(),1);var XM=0,$g=1,WM=2;var Mc=1,qM=2,Ho=3,La=0,Ln=1,Mi=2,dr=0,Go=1,t0=2,e0=3,n0=4,YM=5;var pr=100,ZM=101,JM=102,KM=103,QM=104,jM=200,$M=201,tb=202,eb=203,i0=204,s0=205,nb=206,ib=207,sb=208,ab=209,rb=210,ob=211,lb=212,cb=213,ub=214,Wh=0,qh=1,Yh=2,Do=3,Zh=4,Jh=5,Kh=6,Qh=7,a0=0,hb=1,fb=2,ls=0,r0=1,o0=2,l0=3,c0=4,u0=5,h0=6,f0=7;var d0=300,mr=301,Vo=302,Ef=303,Af=304,jh=1e3,ns=1001,$h=1002,an=1003,db=1004;var bc=1005;var Dn=1006,wf=1007;var Bs=1008;var Vn=1009,p0=1010,m0=1011,ko=1012,Cf=1013,Ii=1014,Pi=1015,Bi=1016,Rf=1017,Nf=1018,gr=1020,g0=35902,_0=35899,v0=1021,y0=1022,zi=1023,Os=1026,zs=1027,x0=1028,Df=1029,Ua=1030,Lf=1031;var Uf=1033,Tc=33776,Ec=33777,Ac=33778,wc=33779,Of=35840,If=35841,Pf=35842,Bf=35843,zf=36196,Ff=37492,Hf=37496,Gf=37488,Vf=37489,Cc=37490,kf=37491,Xf=37808,Wf=37809,qf=37810,Yf=37811,Zf=37812,Jf=37813,Kf=37814,Qf=37815,jf=37816,$f=37817,td=37818,ed=37819,nd=37820,id=37821,sd=36492,ad=36494,rd=36495,od=36283,ld=36284,Rc=36285,cd=36286;var ec=2300,tf=2301,kh=2302,qg=2303,Yg=2400,Zg=2401,Jg=2402;var pb=3200;var ud=0,mb=1,Fs="",ni="srgb",nc="srgb-linear",ic="linear",ae="srgb";var Xh=7680;var gb=519,_b=512,vb=513,yb=514,S0=515,xb=516,Sb=517,M0=518,b0=519,Mb=35044;var T0="300 es",xi=2e3,Lo=2001;function ZA(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function JA(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function sc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function bb(){let e=sc("canvas");return e.style.display="block",e}var SM={},Uo=null;function E0(...e){let t="THREE."+e.shift();Uo?Uo("log",t,...e):console.log(t,...e)}function Tb(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Rt(...e){e=Tb(e);let t="THREE."+e.shift();if(Uo)Uo("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Lt(...e){e=Tb(e);let t="THREE."+e.shift();if(Uo)Uo("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function tc(...e){let t=e.join(" ");t in SM||(SM[t]=!0,Rt(...e))}function Eb(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var Ab={[Wh]:Wh,[Yh]:Kh,[Zh]:Zh,[Do]:Jh,[qh]:qh,[Kh]:Yh,[Qh]:Qh,[Jh]:Do},as=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Tg=Math.PI/180,ef=180/Math.PI;function Nc(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[e&255]+xn[e>>8&255]+xn[e>>16&255]+xn[e>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[n&63|128]+xn[n>>8&255]+"-"+xn[n>>16&255]+xn[n>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function jt(e,t,n){return Math.max(t,Math.min(n,e))}function KA(e,t){return(e%t+t)%t}function Eg(e,t,n){return(1-n)*e+n*t}function wb(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function A0(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function QA(e,t){if(t.constructor===Float32Array)return e;let n=A0(t);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(e/n,-1)}function jA(e,t){if(t.constructor===Float32Array)return e;let n=A0(t);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(e*n)}var qt=class{static{this.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=jt(this.x,t.x,n.x),this.y=jt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=jt(this.x,t,n),this.y=jt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rs=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],f=i[s+2],p=i[s+3],u=a[r+0],d=a[r+1],v=a[r+2],b=a[r+3];if(p!==b||l!==u||c!==d||f!==v){let _=l*u+c*d+f*v+p*b;_<0&&(u=-u,d=-d,v=-v,b=-b,_=-_);let h=1-o;if(_<.9995){let m=Math.acos(_),x=Math.sin(m);h=Math.sin(h*m)/x,o=Math.sin(o*m)/x,l=l*h+u*o,c=c*h+d*o,f=f*h+v*o,p=p*h+b*o}else{l=l*h+u*o,c=c*h+d*o,f=f*h+v*o,p=p*h+b*o;let m=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=m,c*=m,f*=m,p*=m}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],p=a[r],u=a[r+1],d=a[r+2],v=a[r+3];return t[n]=o*v+f*p+l*d-c*u,t[n+1]=l*v+f*u+c*p-o*d,t[n+2]=c*v+f*d+o*u-l*p,t[n+3]=f*v-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),p=o(a/2),u=l(i/2),d=l(s/2),v=l(a/2);switch(r){case"XYZ":this._x=u*f*p+c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p-u*d*v;break;case"YXZ":this._x=u*f*p+c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p+u*d*v;break;case"ZXY":this._x=u*f*p-c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p-u*d*v;break;case"ZYX":this._x=u*f*p-c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p+u*d*v;break;case"YZX":this._x=u*f*p+c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p-u*d*v;break;case"XZY":this._x=u*f*p-c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p+u*d*v;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],u=i+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(f-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+s*c-a*l,this._y=s*f+r*l+a*o-i*c,this._z=a*f+r*c+i*l-s*o,this._w=r*f-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class{static{this.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(MM.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(MM.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),f=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*f,this.y=i+l*f+o*c-a*p,this.z=s+l*p+a*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=jt(this.x,t.x,n.x),this.y=jt(this.y,t.y,n.y),this.z=jt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=jt(this.x,t,n),this.y=jt(this.y,t,n),this.z=jt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ag.copy(this).projectOnVector(t),this.sub(Ag)}reflect(t){return this.sub(Ag.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ag=new F,MM=new rs,Ut=class{static{this.prototype.isMatrix3=!0}constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=n,f[4]=a,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],u=i[2],d=i[5],v=i[8],b=s[0],_=s[3],h=s[6],m=s[1],x=s[4],y=s[7],E=s[2],A=s[5],g=s[8];return a[0]=r*b+o*m+l*E,a[3]=r*_+o*x+l*A,a[6]=r*h+o*y+l*g,a[1]=c*b+f*m+p*E,a[4]=c*_+f*x+p*A,a[7]=c*h+f*y+p*g,a[2]=u*b+d*m+v*E,a[5]=u*_+d*x+v*A,a[8]=u*h+d*y+v*g,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*a*f+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=f*r-o*c,u=o*l-f*a,d=c*a-r*l,v=n*p+i*u+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/v;return t[0]=p*b,t[1]=(s*c-f*i)*b,t[2]=(o*i-s*r)*b,t[3]=u*b,t[4]=(f*n-s*l)*b,t[5]=(s*a-o*n)*b,t[6]=d*b,t[7]=(i*l-c*n)*b,t[8]=(r*n-i*a)*b,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return tc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wg.makeScale(t,n)),this}rotate(t){return tc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wg.makeRotation(-t)),this}translate(t,n){return tc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wg.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},wg=new Ut,bM=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),TM=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $A(){let e={enabled:!0,workingColorSpace:nc,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===ae&&(s.r=Us(s.r),s.g=Us(s.g),s.b=Us(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ae&&(s.r=No(s.r),s.g=No(s.g),s.b=No(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fs?ic:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[r].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[nc]:{primaries:t,whitePoint:i,transfer:ic,toXYZ:bM,fromXYZ:TM,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:t,whitePoint:i,transfer:ae,toXYZ:bM,fromXYZ:TM,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),e}var Qt=$A();function Us(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function No(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var _o,nf=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{_o===void 0&&(_o=sc("canvas")),_o.width=t.width,_o.height=t.height;let s=_o.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=_o}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=sc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Us(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Us(n[i]/255)*255):n[i]=Us(n[i]);return{data:n,width:t.width,height:t.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},tw=0,Oo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tw++}),this.uuid=Nc(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width||0,n.height||0,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Cg(s[r].image)):a.push(Cg(s[r]))}else a=Cg(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function Cg(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?nf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}var ew=0,Rg=new F,Gn=class e extends as{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=ns,s=ns,a=Dn,r=Bs,o=zi,l=Vn,c=e.DEFAULT_ANISOTROPY,f=Fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ew++}),this.uuid=Nc(),this.name="",this.source=new Oo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Rg).x}get height(){return this.source.getSize(Rg).y}get depth(){return this.source.getSize(Rg).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Rt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Rt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==d0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jh:t.x=t.x-Math.floor(t.x);break;case ns:t.x=t.x<0?0:1;break;case $h:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jh:t.y=t.y-Math.floor(t.y);break;case ns:t.y=t.y<0?0:1;break;case $h:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=d0;Gn.DEFAULT_ANISOTROPY=1;var Ce=class{static{this.prototype.isVector4=!0}constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],f=l[4],p=l[8],u=l[1],d=l[5],v=l[9],b=l[2],_=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(p-b)<.01&&Math.abs(v-_)<.01){if(Math.abs(f+u)<.1&&Math.abs(p+b)<.1&&Math.abs(v+_)<.1&&Math.abs(c+d+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let x=(c+1)/2,y=(d+1)/2,E=(h+1)/2,A=(f+u)/4,g=(p+b)/4,T=(v+_)/4;return x>y&&x>E?x<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(x),s=A/i,a=g/i):y>E?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=A/s,a=T/s):E<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(E),i=g/a,s=T/a),this.set(i,s,a,n),this}let m=Math.sqrt((_-v)*(_-v)+(p-b)*(p-b)+(u-f)*(u-f));return Math.abs(m)<.001&&(m=1),this.x=(_-v)/m,this.y=(p-b)/m,this.z=(u-f)/m,this.w=Math.acos((c+d+h-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=jt(this.x,t.x,n.x),this.y=jt(this.y,t.y,n.y),this.z=jt(this.z,t.z,n.z),this.w=jt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=jt(this.x,t,n),this.y=jt(this.y,t,n),this.z=jt(this.z,t,n),this.w=jt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sf=class extends as{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Ce(0,0,t,n),this.scissorTest=!1,this.viewport=new Ce(0,0,t,n),this.textures=[];let s=i.count;for(let a=0;a<s;a++)this.textures[a]=new Gn({width:t,height:n,depth:i.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new Oo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends sf{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},ac=class extends Gn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var af=class extends Gn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var we=class e{static{this.prototype.isMatrix4=!0}constructor(t,n,i,s,a,r,o,l,c,f,p,u,d,v,b,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,f,p,u,d,v,b,_)}set(t,n,i,s,a,r,o,l,c,f,p,u,d,v,b,_){let h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=s,h[1]=a,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=p,h[14]=u,h[3]=d,h[7]=v,h[11]=b,h[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/vo.setFromMatrixColumn(t,0).length(),a=1/vo.setFromMatrixColumn(t,1).length(),r=1/vo.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let u=r*f,d=r*p,v=o*f,b=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=d+v*c,n[5]=u-b*c,n[9]=-o*l,n[2]=b-u*c,n[6]=v+d*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*f,d=l*p,v=c*f,b=c*p;n[0]=u+b*o,n[4]=v*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*f,n[9]=-o,n[2]=d*o-v,n[6]=b+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*f,d=l*p,v=c*f,b=c*p;n[0]=u-b*o,n[4]=-r*p,n[8]=v+d*o,n[1]=d+v*o,n[5]=r*f,n[9]=b-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*f,d=r*p,v=o*f,b=o*p;n[0]=l*f,n[4]=v*c-d,n[8]=u*c+b,n[1]=l*p,n[5]=b*c+u,n[9]=d*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,d=r*c,v=o*l,b=o*c;n[0]=l*f,n[4]=b-u*p,n[8]=v*p+d,n[1]=p,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=d*p+v,n[10]=u-b*p}else if(t.order==="XZY"){let u=r*l,d=r*c,v=o*l,b=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=u*p+b,n[5]=r*f,n[9]=d*p-v,n[2]=v*p-d,n[6]=o*f,n[10]=b*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nw,t,iw)}lookAt(t,n,i){let s=this.elements;return ti.subVectors(t,n),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),xa.crossVectors(i,ti),xa.lengthSq()===0&&(Math.abs(i.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),xa.crossVectors(i,ti)),xa.normalize(),bh.crossVectors(ti,xa),s[0]=xa.x,s[4]=bh.x,s[8]=ti.x,s[1]=xa.y,s[5]=bh.y,s[9]=ti.y,s[2]=xa.z,s[6]=bh.z,s[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],u=i[9],d=i[13],v=i[2],b=i[6],_=i[10],h=i[14],m=i[3],x=i[7],y=i[11],E=i[15],A=s[0],g=s[4],T=s[8],L=s[12],C=s[1],U=s[5],I=s[9],k=s[13],N=s[2],G=s[6],Y=s[10],V=s[14],et=s[3],X=s[7],$=s[11],tt=s[15];return a[0]=r*A+o*C+l*N+c*et,a[4]=r*g+o*U+l*G+c*X,a[8]=r*T+o*I+l*Y+c*$,a[12]=r*L+o*k+l*V+c*tt,a[1]=f*A+p*C+u*N+d*et,a[5]=f*g+p*U+u*G+d*X,a[9]=f*T+p*I+u*Y+d*$,a[13]=f*L+p*k+u*V+d*tt,a[2]=v*A+b*C+_*N+h*et,a[6]=v*g+b*U+_*G+h*X,a[10]=v*T+b*I+_*Y+h*$,a[14]=v*L+b*k+_*V+h*tt,a[3]=m*A+x*C+y*N+E*et,a[7]=m*g+x*U+y*G+E*X,a[11]=m*T+x*I+y*Y+E*$,a[15]=m*L+x*k+y*V+E*tt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],p=t[6],u=t[10],d=t[14],v=t[3],b=t[7],_=t[11],h=t[15],m=l*d-c*u,x=o*d-c*p,y=o*u-l*p,E=r*d-c*f,A=r*u-l*f,g=r*p-o*f;return n*(b*m-_*x+h*y)-i*(v*m-_*E+h*A)+s*(v*x-b*E+h*g)-a*(v*y-b*A+_*g)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],f=t[10];return n*(r*f-o*c)-i*(a*f-o*l)+s*(a*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=t[9],u=t[10],d=t[11],v=t[12],b=t[13],_=t[14],h=t[15],m=n*o-i*r,x=n*l-s*r,y=n*c-a*r,E=i*l-s*o,A=i*c-a*o,g=s*c-a*l,T=f*b-p*v,L=f*_-u*v,C=f*h-d*v,U=p*_-u*b,I=p*h-d*b,k=u*h-d*_,N=m*k-x*I+y*U+E*C-A*L+g*T;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/N;return t[0]=(o*k-l*I+c*U)*G,t[1]=(s*I-i*k-a*U)*G,t[2]=(b*g-_*A+h*E)*G,t[3]=(u*A-p*g-d*E)*G,t[4]=(l*C-r*k-c*L)*G,t[5]=(n*k-s*C+a*L)*G,t[6]=(_*y-v*g-h*x)*G,t[7]=(f*g-u*y+d*x)*G,t[8]=(r*I-o*C+c*T)*G,t[9]=(i*C-n*I-a*T)*G,t[10]=(v*A-b*y+h*m)*G,t[11]=(p*y-f*A-d*m)*G,t[12]=(o*L-r*U-l*T)*G,t[13]=(n*U-i*L+s*T)*G,t[14]=(b*x-v*E-_*m)*G,t[15]=(f*E-p*x+u*m)*G,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,f=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*r,0,c*l-s*o,f*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,f=r+r,p=o+o,u=a*c,d=a*f,v=a*p,b=r*f,_=r*p,h=o*p,m=l*c,x=l*f,y=l*p,E=i.x,A=i.y,g=i.z;return s[0]=(1-(b+h))*E,s[1]=(d+y)*E,s[2]=(v-x)*E,s[3]=0,s[4]=(d-y)*A,s[5]=(1-(u+h))*A,s[6]=(_+m)*A,s[7]=0,s[8]=(v+x)*g,s[9]=(_-m)*g,s[10]=(1-(u+b))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=vo.set(s[0],s[1],s[2]).length(),o=vo.set(s[4],s[5],s[6]).length(),l=vo.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Ni.copy(this);let c=1/r,f=1/o,p=1/l;return Ni.elements[0]*=c,Ni.elements[1]*=c,Ni.elements[2]*=c,Ni.elements[4]*=f,Ni.elements[5]*=f,Ni.elements[6]*=f,Ni.elements[8]*=p,Ni.elements[9]*=p,Ni.elements[10]*=p,n.setFromRotationMatrix(Ni),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=xi,l=!1){let c=this.elements,f=2*a/(n-t),p=2*a/(i-s),u=(n+t)/(n-t),d=(i+s)/(i-s),v,b;if(l)v=a/(r-a),b=r*a/(r-a);else if(o===xi)v=-(r+a)/(r-a),b=-2*r*a/(r-a);else if(o===Lo)v=-r/(r-a),b=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=xi,l=!1){let c=this.elements,f=2/(n-t),p=2/(i-s),u=-(n+t)/(n-t),d=-(i+s)/(i-s),v,b;if(l)v=1/(r-a),b=r/(r-a);else if(o===xi)v=-2/(r-a),b=-(r+a)/(r-a);else if(o===Lo)v=-1/(r-a),b=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},vo=new F,Ni=new we,nw=new F(0,0,0),iw=new F(1,1,1),xa=new F,bh=new F,ti=new F,EM=new we,AM=new rs,Is=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],f=s[9],p=s[2],u=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-jt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-jt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return EM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(EM,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return AM.setFromEuler(this),this.setFromQuaternion(AM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Is.DEFAULT_ORDER="XYZ";var rc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sw=0,wM=new F,yo=new rs,Cs=new we,Th=new F,Kl=new F,aw=new F,rw=new rs,CM=new F(1,0,0),RM=new F(0,1,0),NM=new F(0,0,1),DM={type:"added"},ow={type:"removed"},xo={type:"childadded",child:null},Ng={type:"childremoved",child:null},Mn=class e extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sw++}),this.uuid=Nc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new F,n=new Is,i=new rs,s=new F(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new we},normalMatrix:{value:new Ut}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return yo.setFromAxisAngle(t,n),this.quaternion.multiply(yo),this}rotateOnWorldAxis(t,n){return yo.setFromAxisAngle(t,n),this.quaternion.premultiply(yo),this}rotateX(t){return this.rotateOnAxis(CM,t)}rotateY(t){return this.rotateOnAxis(RM,t)}rotateZ(t){return this.rotateOnAxis(NM,t)}translateOnAxis(t,n){return wM.copy(t).applyQuaternion(this.quaternion),this.position.add(wM.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(CM,t)}translateY(t){return this.translateOnAxis(RM,t)}translateZ(t){return this.translateOnAxis(NM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cs.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Th.copy(t):Th.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Kl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cs.lookAt(Kl,Th,this.up):Cs.lookAt(Th,Kl,this.up),this.quaternion.setFromRotationMatrix(Cs),s&&(Cs.extractRotation(s.matrixWorld),yo.setFromRotationMatrix(Cs),this.quaternion.premultiply(yo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Lt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(DM),xo.child=t,this.dispatchEvent(xo),xo.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(ow),Ng.child=t,this.dispatchEvent(Ng),Ng.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cs.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(DM),xo.child=t,this.dispatchEvent(xo),xo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kl,t,aw),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kl,rw,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),p=r(t.shapes),u=r(t.skeletons),d=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=s,i;function r(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Mn.DEFAULT_UP=new F(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var is=class extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},lw={type:"move"},Io=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let b of t.hand.values()){let _=n.getJointPose(b,i),h=this._getHandJoint(c,b);_!==null&&(h.matrix.fromArray(_.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=_.radius),h.visible=_!==null}let f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=f.position.distanceTo(p.position),d=.02,v=.005;c.inputState.pinching&&u>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lw)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new is;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},Cb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sa={h:0,s:0,l:0},Eh={h:0,s:0,l:0};function Dg(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var kt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ni){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=Qt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Qt.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=Qt.workingColorSpace){if(t=KA(t,1),n=jt(n,0,1),i=jt(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Dg(r,a,t+1/3),this.g=Dg(r,a,t),this.b=Dg(r,a,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,n=ni){function i(a){a!==void 0&&parseFloat(a)<1&&Rt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,n);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Rt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ni){let i=Cb[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}copyLinearToSRGB(t){return this.r=No(t.r),this.g=No(t.g),this.b=No(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ni){return Qt.workingToColorSpace(Sn.copy(this),t),Math.round(jt(Sn.r*255,0,255))*65536+Math.round(jt(Sn.g*255,0,255))*256+Math.round(jt(Sn.b*255,0,255))}getHexString(t=ni){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Qt.workingColorSpace){Qt.workingToColorSpace(Sn.copy(this),n);let i=Sn.r,s=Sn.g,a=Sn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,f=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=f<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=Qt.workingColorSpace){return Qt.workingToColorSpace(Sn.copy(this),n),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=ni){Qt.workingToColorSpace(Sn.copy(this),t);let n=Sn.r,i=Sn.g,s=Sn.b;return t!==ni?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Sa),this.setHSL(Sa.h+t,Sa.s+n,Sa.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Sa),t.getHSL(Eh);let i=Eg(Sa.h,Eh.h,n),s=Eg(Sa.s,Eh.s,n),a=Eg(Sa.l,Eh.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new kt;kt.NAMES=Cb;var oc=class extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Is,this.environmentIntensity=1,this.environmentRotation=new Is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Di=new F,Rs=new F,Lg=new F,Ns=new F,So=new F,Mo=new F,LM=new F,Ug=new F,Og=new F,Ig=new F,Pg=new Ce,Bg=new Ce,zg=new Ce,Ea=class e{constructor(t=new F,n=new F,i=new F){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Di.subVectors(t,n),s.cross(Di);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){Di.subVectors(s,n),Rs.subVectors(i,n),Lg.subVectors(t,n);let r=Di.dot(Di),o=Di.dot(Rs),l=Di.dot(Lg),c=Rs.dot(Rs),f=Rs.dot(Lg),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let u=1/p,d=(c*l-o*f)*u,v=(r*f-o*l)*u;return a.set(1-d-v,v,d)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Ns)===null?!1:Ns.x>=0&&Ns.y>=0&&Ns.x+Ns.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Ns)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ns.x),l.addScaledVector(r,Ns.y),l.addScaledVector(o,Ns.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return Pg.setScalar(0),Bg.setScalar(0),zg.setScalar(0),Pg.fromBufferAttribute(t,n),Bg.fromBufferAttribute(t,i),zg.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Pg,a.x),r.addScaledVector(Bg,a.y),r.addScaledVector(zg,a.z),r}static isFrontFacing(t,n,i,s){return Di.subVectors(i,n),Rs.subVectors(t,n),Di.cross(Rs).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Di.subVectors(this.c,this.b),Rs.subVectors(this.a,this.b),Di.cross(Rs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;So.subVectors(s,i),Mo.subVectors(a,i),Ug.subVectors(t,i);let l=So.dot(Ug),c=Mo.dot(Ug);if(l<=0&&c<=0)return n.copy(i);Og.subVectors(t,s);let f=So.dot(Og),p=Mo.dot(Og);if(f>=0&&p<=f)return n.copy(s);let u=l*p-f*c;if(u<=0&&l>=0&&f<=0&&l-f>0)return r=l/(l-f),n.copy(i).addScaledVector(So,r);Ig.subVectors(t,a);let d=So.dot(Ig),v=Mo.dot(Ig);if(v>=0&&d<=v)return n.copy(a);let b=d*c-l*v;if(b<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Mo,o);let _=f*v-d*p;if(_<=0&&p-f>=0&&d-v>=0)return LM.subVectors(a,s),o=(p-f)/(p-f+(d-v)),n.copy(s).addScaledVector(LM,o);let h=1/(_+b+u);return r=b*h,o=u*h,n.copy(i).addScaledVector(So,r).addScaledVector(Mo,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Aa=class{constructor(t=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Li.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Li.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Li.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Li):Li.fromBufferAttribute(a,r),Li.applyMatrix4(t.matrixWorld),this.expandByPoint(Li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ah.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ah.copy(i.boundingBox)),Ah.applyMatrix4(t.matrixWorld),this.union(Ah)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Li),Li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ql),wh.subVectors(this.max,Ql),bo.subVectors(t.a,Ql),To.subVectors(t.b,Ql),Eo.subVectors(t.c,Ql),Ma.subVectors(To,bo),ba.subVectors(Eo,To),lr.subVectors(bo,Eo);let n=[0,-Ma.z,Ma.y,0,-ba.z,ba.y,0,-lr.z,lr.y,Ma.z,0,-Ma.x,ba.z,0,-ba.x,lr.z,0,-lr.x,-Ma.y,Ma.x,0,-ba.y,ba.x,0,-lr.y,lr.x,0];return!Fg(n,bo,To,Eo,wh)||(n=[1,0,0,0,1,0,0,0,1],!Fg(n,bo,To,Eo,wh))?!1:(Ch.crossVectors(Ma,ba),n=[Ch.x,Ch.y,Ch.z],Fg(n,bo,To,Eo,wh))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ds[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ds[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ds[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ds[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ds[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ds[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ds[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ds[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ds),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ds=[new F,new F,new F,new F,new F,new F,new F,new F],Li=new F,Ah=new Aa,bo=new F,To=new F,Eo=new F,Ma=new F,ba=new F,lr=new F,Ql=new F,wh=new F,Ch=new F,cr=new F;function Fg(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){cr.fromArray(e,a);let o=s.x*Math.abs(cr.x)+s.y*Math.abs(cr.y)+s.z*Math.abs(cr.z),l=t.dot(cr),c=n.dot(cr),f=i.dot(cr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var Ve=new F,Rh=new qt,cw=0,ss=class extends as{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cw++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Mb,this.updateRanges=[],this.gpuType=Pi,this.version=0,this._normalizationScale=t!==void 0?A0(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Rh.fromBufferAttribute(this,n),Rh.applyMatrix3(t),this.setXY(n,Rh.x,Rh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ve.fromBufferAttribute(this,n),Ve.applyMatrix3(t),this.setXYZ(n,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ve.fromBufferAttribute(this,n),Ve.applyMatrix4(t),this.setXYZ(n,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ve.fromBufferAttribute(this,n),Ve.applyNormalMatrix(t),this.setXYZ(n,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ve.fromBufferAttribute(this,n),Ve.transformDirection(t),this.setXYZ(n,Ve.x,Ve.y,Ve.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,n,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s),a=this._normalize(a)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let n=this._normalizationScale;return n!==void 0?Math.max(t/n,-1):QA(t,this.array)}_normalize(t){let n=this._normalizationScale;return n!==void 0?Math.round(t*n):jA(t,this.array)}};var lc=class extends ss{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var cc=class extends ss{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Pe=class extends ss{constructor(t,n,i){super(new Float32Array(t),n,i)}},uw=new Aa,jl=new F,Hg=new F,Po=class{constructor(t=new F,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):uw.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;jl.subVectors(t,this.center);let n=jl.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(jl,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hg.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(jl.copy(t.center).add(Hg)),this.expandByPoint(jl.copy(t.center).sub(Hg))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},hw=0,yi=new we,Gg=new Mn,Ao=new F,ei=new Aa,$l=new Aa,sn=new F,Oi=class e extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hw++}),this.uuid=Nc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ZA(t)?cc:lc)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Ut().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,n,i){return yi.makeTranslation(t,n,i),this.applyMatrix4(yi),this}scale(t,n,i){return yi.makeScale(t,n,i),this.applyMatrix4(yi),this}lookAt(t){return Gg.lookAt(t),Gg.updateMatrix(),this.applyMatrix4(Gg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ao).negate(),this.translate(Ao.x,Ao.y,Ao.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Pe(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Aa);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];ei.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Po);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let i=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];$l.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(ei.min,$l.min),ei.expandByPoint(sn),sn.addVectors(ei.max,$l.max),ei.expandByPoint(sn)):(ei.expandByPoint($l.min),ei.expandByPoint($l.max))}ei.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)sn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(sn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)sn.fromBufferAttribute(o,c),l&&(Ao.fromBufferAttribute(t,c),sn.add(Ao)),s=Math.max(s,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new ss(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[],c=new Uint8Array(i.count);for(let L=0;L<i.count;L++)o[L]=new F,l[L]=new F;let f=new F,p=new F,u=new F,d=new qt,v=new qt,b=new qt,_=new F,h=new F;function m(L,C,U){c[L]=c[C]=c[U]=1,f.fromBufferAttribute(i,L),p.fromBufferAttribute(i,C),u.fromBufferAttribute(i,U),d.fromBufferAttribute(a,L),v.fromBufferAttribute(a,C),b.fromBufferAttribute(a,U),p.sub(f),u.sub(f),v.sub(d),b.sub(d);let I=1/(v.x*b.y-b.x*v.y);isFinite(I)&&(_.copy(p).multiplyScalar(b.y).addScaledVector(u,-v.y).multiplyScalar(I),h.copy(u).multiplyScalar(v.x).addScaledVector(p,-b.x).multiplyScalar(I),o[L].add(_),o[C].add(_),o[U].add(_),l[L].add(h),l[C].add(h),l[U].add(h))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let L=0,C=x.length;L<C;++L){let U=x[L],I=U.start,k=U.count;for(let N=I,G=I+k;N<G;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let y=new F,E=new F,A=new F,g=new F;function T(L){A.fromBufferAttribute(s,L),g.copy(A);let C=o[L];y.copy(C),y.sub(A.multiplyScalar(A.dot(C))).normalize(),E.crossVectors(g,C);let I=E.dot(l[L])<0?-1:1;r.setXYZW(L,y.x,y.y,y.z,I)}for(let L=0,C=i.count;L<C;++L)c[L]&&T(L);this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new ss(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new F,a=new F,r=new F,o=new F,l=new F,c=new F,f=new F,p=new F;if(t)for(let u=0,d=t.count;u<d;u+=3){let v=t.getX(u+0),b=t.getX(u+1),_=t.getX(u+2);s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,b),r.fromBufferAttribute(n,_),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,_),o.add(f),l.add(f),c.add(f),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)sn.fromBufferAttribute(t,n),sn.normalize(),t.setXYZ(n,sn.x,sn.y,sn.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,p=o.normalized,u=new c.constructor(l.length*f),d=0,v=0;for(let b=0,_=l.length;b<_;b++){o.isInterleavedBufferAttribute?d=l[b]*o.data.stride+o.offset:d=l[b]*f;for(let h=0;h<f;h++)u[v++]=c[d++]}return new ss(u,f,p)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let f=0,p=c.length;f<p;f++){let u=c[f],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];f.push(d.toJSON(t.data))}f.length>0&&(s[l]=f,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(n))}let a=t.morphAttributes;for(let c in a){let f=[],p=a[c];for(let u=0,d=p.length;u<d;u++)f.push(p[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,f=r.length;c<f;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Vg=new F,fw=new F,dw=new Ut,Ui=class{constructor(t=new F(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=Vg.subVectors(i,n).cross(fw.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(Vg),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||dw.getNormalMatrix(t),s=this.coplanarPoint(Vg).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},pw=0,wa=class extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pw++}),this.uuid=Nc(),this.name="",this.type="Material",this.blending=Go,this.side=La,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=i0,this.blendDst=s0,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xh,this.stencilZFail=Xh,this.stencilZPass=Xh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Rt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Rt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ui().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new qt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ls=new F,kg=new F,Nh=new F,Dh=new F,rf=class{constructor(t=new F,n=new F(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ls)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Ls.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ls.copy(this.origin).addScaledVector(this.direction,n),Ls.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){kg.copy(t).add(n).multiplyScalar(.5),Nh.copy(n).sub(t).normalize(),Dh.copy(this.origin).sub(kg);let a=t.distanceTo(n)*.5,r=-this.direction.dot(Nh),o=Dh.dot(this.direction),l=-Dh.dot(Nh),c=Dh.lengthSq(),f=Math.abs(1-r*r),p,u,d,v;if(f>0)if(p=r*l-o,u=r*o-l,v=a*f,p>=0)if(u>=-v)if(u<=v){let b=1/f;p*=b,u*=b,d=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-v?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c):u<=v?(p=0,u=Math.min(Math.max(-a,-l),a),d=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(kg).addScaledVector(Nh,u),d}intersectSphere(t,n){if(t.radius<0)return null;Ls.subVectors(t.center,this.origin);let i=Ls.dot(this.direction),s=Ls.dot(Ls)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(a=(t.min.y-u.y)*f,r=(t.max.y-u.y)*f):(a=(t.max.y-u.y)*f,r=(t.min.y-u.y)*f),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Ls)!==null}intersectTriangle(t,n,i,s,a){let r=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,p=t.x-r.x,u=t.y-r.y,d=t.z-r.z,v=n.x-r.x,b=n.y-r.y,_=n.z-r.z,h=i.x-r.x,m=i.y-r.y,x=i.z-r.z,y=Math.abs(l),E=Math.abs(c),A=Math.abs(f),g,T,L,C,U,I,k,N,G,Y,V,et;if(y>=E&&y>=A?(L=l,I=p,G=v,et=h,l>=0?(g=c,T=f,C=u,U=d,k=b,N=_,Y=m,V=x):(g=f,T=c,C=d,U=u,k=_,N=b,Y=x,V=m)):E>=A?(L=c,I=u,G=b,et=m,c>=0?(g=f,T=l,C=d,U=p,k=_,N=v,Y=x,V=h):(g=l,T=f,C=p,U=d,k=v,N=_,Y=h,V=x)):(L=f,I=d,G=_,et=x,f>=0?(g=l,T=c,C=p,U=u,k=v,N=b,Y=h,V=m):(g=c,T=l,C=u,U=p,k=b,N=v,Y=m,V=h)),L===0)return null;let X=g/L,$=T/L,tt=1/L,yt=C-X*I,Nt=U-$*I,W=k-X*G,ct=N-$*G,vt=Y-X*et,Et=V-$*et,gt=vt*ct-Et*W,Bt=yt*Et-Nt*vt,Be=W*Nt-ct*yt;if(s){if(gt<0||Bt<0||Be<0)return null}else if((gt<0||Bt<0||Be<0)&&(gt>0||Bt>0||Be>0))return null;let Ct=gt+Bt+Be;if(Ct===0)return null;let re=tt*(gt*I+Bt*G+Be*et);return(Ct>0?re<0:re>0)?null:this.at(re/Ct,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},of=class extends wa{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Is,this.combine=a0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},UM=new we,ur=new rf,Lh=new Po,OM=new F,Uh=new F,Oh=new F,Ih=new F,Xg=new F,Ph=new F,IM=new F,Bh=new F,Si=class extends Mn{constructor(t=new Oi,n=new of){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){Ph.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let f=o[l],p=a[l];f!==0&&(Xg.fromBufferAttribute(p,t),r?Ph.addScaledVector(Xg,f):Ph.addScaledVector(Xg.sub(n),f))}n.add(Ph)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lh.copy(i.boundingSphere),Lh.applyMatrix4(a),ur.copy(t.ray).recast(t.near),!(Lh.containsPoint(ur.origin)===!1&&(ur.intersectSphere(Lh,OM)===null||ur.origin.distanceToSquared(OM)>(t.far-t.near)**2))&&(UM.copy(a).invert(),ur.copy(t.ray).applyMatrix4(UM),!(i.boundingBox!==null&&ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,ur)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,p=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,b=u.length;v<b;v++){let _=u[v],h=r[_.materialIndex],m=Math.max(_.start,d.start),x=Math.min(o.count,Math.min(_.start+_.count,d.start+d.count));for(let y=m,E=x;y<E;y+=3){let A=o.getX(y),g=o.getX(y+1),T=o.getX(y+2);s=zh(this,h,t,i,c,f,p,A,g,T),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=_.materialIndex,n.push(s))}}else{let v=Math.max(0,d.start),b=Math.min(o.count,d.start+d.count);for(let _=v,h=b;_<h;_+=3){let m=o.getX(_),x=o.getX(_+1),y=o.getX(_+2);s=zh(this,r,t,i,c,f,p,m,x,y),s&&(s.faceIndex=Math.floor(_/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,b=u.length;v<b;v++){let _=u[v],h=r[_.materialIndex],m=Math.max(_.start,d.start),x=Math.min(l.count,Math.min(_.start+_.count,d.start+d.count));for(let y=m,E=x;y<E;y+=3){let A=y,g=y+1,T=y+2;s=zh(this,h,t,i,c,f,p,A,g,T),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=_.materialIndex,n.push(s))}}else{let v=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let _=v,h=b;_<h;_+=3){let m=_,x=_+1,y=_+2;s=zh(this,r,t,i,c,f,p,m,x,y),s&&(s.faceIndex=Math.floor(_/3),n.push(s))}}}};function mw(e,t,n,i,s,a,r,o){let l;if(t.side===Ln?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===La,o),l===null)return null;Bh.copy(o),Bh.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Bh);return c<n.near||c>n.far?null:{distance:c,point:Bh.clone(),object:e}}function zh(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Uh),e.getVertexPosition(l,Oh),e.getVertexPosition(c,Ih);let f=mw(e,t,n,i,Uh,Oh,Ih,IM);if(f){let p=new F;Ea.getBarycoord(IM,Uh,Oh,Ih,p),s&&(f.uv=Ea.getInterpolatedAttribute(s,o,l,c,p,new qt)),a&&(f.uv1=Ea.getInterpolatedAttribute(a,o,l,c,p,new qt)),r&&(f.normal=Ea.getInterpolatedAttribute(r,o,l,c,p,new F),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new F,materialIndex:0};Ea.getNormal(Uh,Oh,Ih,u.normal),f.face=u,f.barycoord=p}return f}var lf=class extends Gn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=an,f=an,p,u){super(null,r,o,l,c,f,s,a,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hr=new Po,gw=new qt(.5,.5),Fh=new F,Ca=class{constructor(t=new Ui,n=new Ui,i=new Ui,s=new Ui,a=new Ui,r=new Ui){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=xi,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],f=a[4],p=a[5],u=a[6],d=a[7],v=a[8],b=a[9],_=a[10],h=a[11],m=a[12],x=a[13],y=a[14],E=a[15];if(s[0].setComponents(c-r,d-f,h-v,E-m).normalize(),s[1].setComponents(c+r,d+f,h+v,E+m).normalize(),s[2].setComponents(c+o,d+p,h+b,E+x).normalize(),s[3].setComponents(c-o,d-p,h-b,E-x).normalize(),i)s[4].setComponents(l,u,_,y).normalize(),s[5].setComponents(c-l,d-u,h-_,E-y).normalize();else if(s[4].setComponents(c-l,d-u,h-_,E-y).normalize(),n===xi)s[5].setComponents(c+l,d+u,h+_,E+y).normalize();else if(n===Lo)s[5].setComponents(l,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(t){hr.center.set(0,0,0);let n=gw.distanceTo(t.center);return hr.radius=.7071067811865476+n,hr.applyMatrix4(t.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Fh.x=s.normal.x>0?t.max.x:t.min.x,Fh.y=s.normal.y>0?t.max.y:t.min.y,Fh.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fh)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},PM=new we,cf=class e{constructor(){this.coordinateSystem=xi,this._frustums=[],this._count=0}setFromArrayCamera(t){let n=t.cameras,i=this._frustums;for(let s=0;s<n.length;s++){let a=n[s];PM.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),i[s]===void 0&&(i[s]=new Ca),i[s].setFromProjectionMatrix(PM,a.coordinateSystem,a.reversedDepth)}return this._count=n.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(t))return!0;return!1}containsPoint(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let n=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)n[s]===void 0&&(n[s]=new Ca),n[s].copy(i[s]);return this._count=t._count,this}clone(){return new e().copy(this)}};var uc=class extends Gn{constructor(t=[],n=mr,i,s,a,r,o,l,c,f){super(t,n,i,s,a,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Ps=class extends Gn{constructor(t,n,i=Ii,s,a,r,o=an,l=an,c,f=Os,p=1){if(f!==Os&&f!==zs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,s,a,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Oo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},hc=class extends Ps{constructor(t,n=Ii,i=mr,s,a,r=an,o=an,l,c=Os){let f={width:t,height:t,depth:1},p=[f,f,f,f,f,f];super(t,t,n,i,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},fc=class extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Bo=class e extends Oi{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],f=[],p=[],u=0,d=0;v("z","y","x",-1,-1,i,n,t,r,a,0),v("z","y","x",1,-1,i,n,-t,r,a,1),v("x","z","y",1,1,t,i,n,s,r,2),v("x","z","y",1,-1,t,i,-n,s,r,3),v("x","y","z",1,-1,t,n,i,s,a,4),v("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(f,3)),this.setAttribute("uv",new Pe(p,2));function v(b,_,h,m,x,y,E,A,g,T,L){let C=y/g,U=E/T,I=y/2,k=E/2,N=A/2,G=g+1,Y=T+1,V=0,et=0,X=new F;for(let $=0;$<Y;$++){let tt=$*U-k;for(let yt=0;yt<G;yt++){let Nt=yt*C-I;X[b]=Nt*m,X[_]=tt*x,X[h]=N,c.push(X.x,X.y,X.z),X[b]=0,X[_]=0,X[h]=A>0?1:-1,f.push(X.x,X.y,X.z),p.push(yt/g),p.push(1-$/T),V+=1}}for(let $=0;$<T;$++)for(let tt=0;tt<g;tt++){let yt=u+tt+G*$,Nt=u+tt+G*($+1),W=u+(tt+1)+G*($+1),ct=u+(tt+1)+G*$;l.push(yt,Nt,ct),l.push(Nt,W,ct),et+=6}o.addGroup(d,et,L),d+=et,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var dc=class e extends Oi{constructor(t=1,n=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:i,thetaLength:s},n=Math.max(3,n);let a=[],r=[],o=[],l=[],c=new F,f=new qt;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,u=3;p<=n;p++,u+=3){let d=i+p/n*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),r.push(c.x,c.y,c.z),o.push(0,0,1),f.x=(r[u]/t+1)/2,f.y=(r[u+1]/t+1)/2,l.push(f.x,f.y)}for(let p=1;p<=n;p++)a.push(p,p+1,0);this.setIndex(a),this.setAttribute("position",new Pe(r,3)),this.setAttribute("normal",new Pe(o,3)),this.setAttribute("uv",new Pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},fr=class e extends Oi{constructor(t=1,n=1,i=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),a=Math.floor(a);let f=[],p=[],u=[],d=[],v=0,b=[],_=i/2,h=0;m(),r===!1&&(t>0&&x(!0),n>0&&x(!1)),this.setIndex(f),this.setAttribute("position",new Pe(p,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(d,2));function m(){let y=new F,E=new F,A=0,g=(n-t)/i;for(let T=0;T<=a;T++){let L=[],C=T/a,U=C*(n-t)+t;for(let I=0;I<=s;I++){let k=I/s,N=k*l+o,G=Math.sin(N),Y=Math.cos(N);E.x=U*G,E.y=-C*i+_,E.z=U*Y,p.push(E.x,E.y,E.z),y.set(G,g,Y).normalize(),u.push(y.x,y.y,y.z),d.push(k,1-C),L.push(v++)}b.push(L)}for(let T=0;T<s;T++)for(let L=0;L<a;L++){let C=b[L][T],U=b[L+1][T],I=b[L+1][T+1],k=b[L][T+1];(t>0||L!==0)&&(f.push(C,U,k),A+=3),(n>0||L!==a-1)&&(f.push(U,I,k),A+=3)}c.addGroup(h,A,0),h+=A}function x(y){let E=v,A=new qt,g=new F,T=0,L=y===!0?t:n,C=y===!0?1:-1;for(let I=1;I<=s;I++)p.push(0,_*C,0),u.push(0,C,0),d.push(.5,.5),v++;let U=v;for(let I=0;I<=s;I++){let N=I/s*l+o,G=Math.cos(N),Y=Math.sin(N);g.x=L*Y,g.y=_*C,g.z=L*G,p.push(g.x,g.y,g.z),u.push(0,C,0),A.x=G*.5+.5,A.y=Y*.5*C+.5,d.push(A.x,A.y),v++}for(let I=0;I<s;I++){let k=E+I,N=U+I;y===!0?f.push(N,N+1,k):f.push(N+1,N,k),T+=3}c.addGroup(h,T,y===!0?1:2),h+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var pc=class e extends Oi{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,p=t/o,u=n/l,d=[],v=[],b=[],_=[];for(let h=0;h<f;h++){let m=h*u-r;for(let x=0;x<c;x++){let y=x*p-a;v.push(y,-m,0),b.push(0,0,1),_.push(x/o),_.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<o;m++){let x=m+c*h,y=m+c*(h+1),E=m+1+c*(h+1),A=m+1+c*h;d.push(x,y,A),d.push(y,E,A)}this.setIndex(d),this.setAttribute("position",new Pe(v,3)),this.setAttribute("normal",new Pe(b,3)),this.setAttribute("uv",new Pe(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var zo=class e extends Oi{constructor(t=1,n=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,f=[],p=new F,u=new F,d=[],v=[],b=[],_=[];for(let h=0;h<=i;h++){let m=[],x=h/i,y=r+x*o,E=t*Math.cos(y),A=Math.sqrt(t*t-E*E),g=0;h===0&&r===0?g=.5/n:h===i&&l===Math.PI&&(g=-.5/n);for(let T=0;T<=n;T++){let L=T/n,C=s+L*a;p.x=-A*Math.cos(C),p.y=E,p.z=A*Math.sin(C),v.push(p.x,p.y,p.z),u.copy(p).normalize(),b.push(u.x,u.y,u.z),_.push(L+g,1-x),m.push(c++)}f.push(m)}for(let h=0;h<i;h++)for(let m=0;m<n;m++){let x=f[h][m+1],y=f[h][m],E=f[h+1][m],A=f[h+1][m+1];(h!==0||r>0)&&d.push(x,y,A),(h!==i-1||l<Math.PI)&&d.push(y,E,A)}this.setIndex(d),this.setAttribute("position",new Pe(v,3)),this.setAttribute("normal",new Pe(b,3)),this.setAttribute("uv",new Pe(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function _r(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(BM(s))s.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(BM(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function bn(e){let t={};for(let n=0;n<e.length;n++){let i=_r(e[n]);for(let s in i)t[s]=i[s]}return t}function BM(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function _w(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function w0(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var Rb={clone:_r,merge:bn},vw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,os=class extends wa{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vw,this.fragmentShader=yw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_r(t.uniforms),this.uniformsGroups=_w(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new kt().setHex(s.value);break;case"v2":this.uniforms[i].value=new qt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ce().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ut().fromArray(s.value);break;case"m4":this.uniforms[i].value=new we().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},uf=class extends os{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},mc=class extends wa{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ud,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Is,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var hf=class extends wa{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ff=class extends wa{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function wo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Hh(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ra=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},df=class extends Ra{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yg,endingEnd:Yg}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case Zg:a=t,o=2*n-i;break;case Jg:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Zg:r=t,l=2*i-n;break;case Jg:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*f,this._offsetNext=r*f}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,v=(i-n)/(s-n),b=v*v,_=b*v,h=-u*_+2*u*b-u*v,m=(1+u)*_+(-1.5-2*u)*b+(-.5+u)*v+1,x=(-1-d)*_+(1.5+d)*b+.5*v,y=d*_-d*b;for(let E=0;E!==o;++E)a[E]=h*r[f+E]+m*r[c+E]+x*r[l+E]+y*r[p+E];return a}},pf=class extends Ra{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-n)/(s-n),p=1-f;for(let u=0;u!==o;++u)a[u]=r[c+u]*p+r[l+u]*f;return a}},mf=class extends Ra{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},gf=class extends Ra{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this.inTangents,p=this.outTangents;if(!f||!p){let v=(i-n)/(s-n),b=1-v;for(let _=0;_!==o;++_)a[_]=r[c+_]*b+r[l+_]*v;return a}let u=o*2,d=t-1;for(let v=0;v!==o;++v){let b=r[c+v],_=r[l+v],h=d*u+v*2,m=p[h],x=p[h+1],y=t*u+v*2,E=f[y],A=f[y+1],g=Sw(i,n,m,E,s);a[v]=Nb(g,b,x,A,_)}return a}};function Nb(e,t,n,i,s){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*i+e*e*e*s}function xw(e,t,n,i,s){let a=1-e;return 3*a*a*(n-t)+6*a*e*(i-n)+3*e*e*(s-i)}function Sw(e,t,n,i,s){let a=(e-t)/(s-t);for(let r=0;r<8;r++){let o=Nb(a,t,n,i,s)-e;if(Math.abs(o)<1e-10)break;let l=xw(a,t,n,i,s);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var si=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=wo(n,this.TimeBufferType),this.values=wo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:wo(t.times,Array),values:wo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Hh(t.settings)&&(i.settings={inTangents:wo(t.settings.inTangents,Array),outTangents:wo(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new mf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new df(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new gf(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case ec:n=this.InterpolantFactoryMethodDiscrete;break;case tf:n=this.InterpolantFactoryMethodLinear;break;case kh:n=this.InterpolantFactoryMethodSmooth;break;case qg:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Rt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ec;case this.InterpolantFactoryMethodLinear:return tf;case this.InterpolantFactoryMethodSmooth:return kh;case this.InterpolantFactoryMethodBezier:return qg}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t;Hh(this.settings)&&(zM(this.settings.inTangents,t),zM(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t;Hh(this.settings)&&(FM(this.settings.inTangents,t),FM(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Lt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Lt("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Lt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Lt("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&JA(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Lt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===kh,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,u=p-i,d=p+i;for(let v=0;v!==i;++v){let b=n[p+v];if(b!==n[u+v]||b!==n[d+v]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let d=0;d!==i;++d)n[u+d]=n[p+d]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,Hh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function zM(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]+=t}function FM(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}si.prototype.ValueTypeName="";si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=tf;var Na=class extends si{constructor(t,n,i){super(t,n,i)}};Na.prototype.ValueTypeName="bool";Na.prototype.ValueBufferType=Array;Na.prototype.DefaultInterpolation=ec;Na.prototype.InterpolantFactoryMethodLinear=void 0;Na.prototype.InterpolantFactoryMethodSmooth=void 0;var _f=class extends si{constructor(t,n,i,s){super(t,n,i,s)}};_f.prototype.ValueTypeName="color";var vf=class extends si{constructor(t,n,i,s){super(t,n,i,s)}};vf.prototype.ValueTypeName="number";var yf=class extends Ra{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let f=c+o;c!==f;c+=4)rs.slerpFlat(a,0,r,c-o,r,c,l);return a}},gc=class extends si{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new yf(this.times,this.values,this.getValueSize(),t)}};gc.prototype.ValueTypeName="quaternion";gc.prototype.InterpolantFactoryMethodSmooth=void 0;var Da=class extends si{constructor(t,n,i){super(t,n,i)}};Da.prototype.ValueTypeName="string";Da.prototype.ValueBufferType=Array;Da.prototype.DefaultInterpolation=ec;Da.prototype.InterpolantFactoryMethodLinear=void 0;Da.prototype.InterpolantFactoryMethodSmooth=void 0;var xf=class extends si{constructor(t,n,i,s){super(t,n,i,s)}};xf.prototype.ValueTypeName="vector";var Sf=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,a===!1&&s.onStart!==void 0&&s.onStart(f,r,o),a=!0},this.itemEnd=function(f){r++,s.onProgress!==void 0&&s.onProgress(f,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return c.push(f,p),this},this.removeHandler=function(f){let p=c.indexOf(f);return p!==-1&&c.splice(p,2),this},this.getHandler=function(f){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],v=c[p+1];if(d.global&&(d.lastIndex=0),d.test(f))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Db=new Sf,Mf=class{constructor(t){this.manager=t!==void 0?t:Db,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Mf.DEFAULT_MATERIAL_NAME="__DEFAULT";var _c=class extends Mn{static registerNode(t){this.prototype._lightNode=t}constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=n}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},vc=class extends _c{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){let n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}},Wg=new we,HM=new F,GM=new F,bf=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ca,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera;HM.setFromMatrixPosition(t.matrixWorld),n.position.copy(HM),GM.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(GM),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(t,n,i,s){Wg.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Wg,t.coordinateSystem,t.reversedDepth);let a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;t.coordinateSystem===Lo||t.reversedDepth?n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(Wg)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Gh=new F,Vh=new rs,es=new F,yc=class extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Gh,Vh,es),es.x===1&&es.y===1&&es.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gh,Vh,es.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(Gh,Vh,es),es.x===1&&es.y===1&&es.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gh,Vh,es.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ta=new F,VM=new qt,kM=new qt,Nn=class extends yc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=ef*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Tg*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ef*2*Math.atan(Math.tan(Tg*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Ta.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ta.x,Ta.y).multiplyScalar(-t/Ta.z),Ta.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ta.x,Ta.y).multiplyScalar(-t/Ta.z)}getViewSize(t,n){return this.getViewBounds(t,VM,kM),n.subVectors(kM,VM)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Tg*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var xc=class extends yc{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Kg=class extends bf{constructor(){super(new xc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Sc=class extends _c{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new Kg}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var Co=-90,Ro=1,Fo=class extends Mn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Nn(Co,Ro,t,n);s.layers=this.layers,this.add(s);let a=new Nn(Co,Ro,t,n);a.layers=this.layers,this.add(a);let r=new Nn(Co,Ro,t,n);r.layers=this.layers,this.add(r);let o=new Nn(Co,Ro,t,n);o.layers=this.layers,this.add(o);let l=new Nn(Co,Ro,t,n);l.layers=this.layers,this.add(l);let c=new Nn(Co,Ro,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===xi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,f]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.mipmapsAutoUpdate=b,t.setRenderTarget(i,5,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(p,u,d),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Tf=class extends Nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var C0="\\[\\]\\.:\\/",Mw=new RegExp("["+C0+"]","g"),R0="[^"+C0+"]",bw="[^"+C0.replace("\\.","")+"]",Tw=/((?:WC+[\/:])*)/.source.replace("WC",R0),Ew=/(WCOD+)?/.source.replace("WCOD",bw),Aw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",R0),ww=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",R0),Cw=new RegExp("^"+Tw+Ew+Aw+ww+"$"),Rw=["material","materials","bones","map"],Qg=class{constructor(t,n,i){let s=i||Me.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Me=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Mw,"")}static parseTrackName(t){let n=Cw.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);Rw.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Lt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Lt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=Qg;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var NN=new Float32Array(1);var jg=class{static{this.prototype.isMatrix2=!0}constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};function N0(e,t,n,i){let s=Nw(i);switch(n){case v0:return e*t;case x0:return e*t/s.components*s.byteLength;case Df:return e*t/s.components*s.byteLength;case Ua:return e*t*2/s.components*s.byteLength;case Lf:return e*t*2/s.components*s.byteLength;case y0:return e*t*3/s.components*s.byteLength;case zi:return e*t*4/s.components*s.byteLength;case Uf:return e*t*4/s.components*s.byteLength;case Tc:case Ec:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ac:case wc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case If:case Bf:return Math.max(e,16)*Math.max(t,8)/4;case Of:case Pf:return Math.max(e,8)*Math.max(t,8)/2;case zf:case Ff:case Gf:case Vf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Hf:case Cc:case kf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Xf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Wf:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case qf:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Yf:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Zf:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Jf:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Kf:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Qf:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case jf:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case $f:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case td:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ed:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case nd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case id:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case sd:case ad:case rd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case od:case ld:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Rc:case cd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Nw(e){switch(e){case Vn:case p0:return{byteLength:1,components:1};case ko:case m0:case Bi:return{byteLength:2,components:1};case Rf:case Nf:return{byteLength:2,components:4};case Ii:case Cf:case Pi:return{byteLength:4,components:1};case g0:case _0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function $b(){let e=null,t=!1,n=null,i=null;function s(a,r){i=e.requestAnimationFrame(s),n(a,r)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function Lw(e){let t=new WeakMap;function n(o,l){let c=o.array,f=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let f=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,f);else{p.sort((d,v)=>d.start-v.start);let u=0;for(let d=1;d<p.length;d++){let v=p[u],b=p[d];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++u,p[u]=b)}p.length=u+1;for(let d=0,v=p.length;d<v;d++){let b=p[d];e.bufferSubData(c,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var Uw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ow=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Iw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Vw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ww=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$w=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,tC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,eC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,nC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,sC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lC="gl_FragColor = linearToOutputTexel( gl_FragColor );",cC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,hC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,fC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_C=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,MC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,TC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,EC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,NC=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,DC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,LC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,UC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OC=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,IC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,VC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qC=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,JC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$C=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,eR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,lR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,mR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_R=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,MR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ER=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,CR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,DR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,LR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IR=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,GR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,VR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$R=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,t3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,i3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,o3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:Uw,alphahash_pars_fragment:Ow,alphamap_fragment:Iw,alphamap_pars_fragment:Pw,alphatest_fragment:Bw,alphatest_pars_fragment:zw,aomap_fragment:Fw,aomap_pars_fragment:Hw,batching_pars_vertex:Gw,batching_vertex:Vw,begin_vertex:kw,beginnormal_vertex:Xw,bsdfs:Ww,iridescence_fragment:qw,bumpmap_pars_fragment:Yw,clipping_planes_fragment:Zw,clipping_planes_pars_fragment:Jw,clipping_planes_pars_vertex:Kw,clipping_planes_vertex:Qw,color_fragment:jw,color_pars_fragment:$w,color_pars_vertex:tC,color_vertex:eC,common:nC,defaultnormal_vertex:iC,displacementmap_pars_vertex:sC,displacementmap_vertex:aC,emissivemap_fragment:rC,emissivemap_pars_fragment:oC,colorspace_fragment:lC,colorspace_pars_fragment:cC,envmap_fragment:uC,envmap_common_pars_fragment:hC,envmap_pars_fragment:fC,envmap_pars_vertex:dC,envmap_physical_pars_fragment:TC,envmap_vertex:pC,fog_vertex:mC,fog_pars_vertex:gC,fog_fragment:_C,fog_pars_fragment:vC,gradientmap_pars_fragment:yC,lightmap_pars_fragment:xC,lights_lambert_fragment:SC,lights_lambert_pars_fragment:MC,lights_pars_begin:bC,lights_toon_fragment:EC,lights_toon_pars_fragment:AC,lights_phong_fragment:wC,lights_phong_pars_fragment:CC,lights_physical_fragment:RC,lights_physical_pars_fragment:NC,lights_fragment_begin:DC,lights_fragment_maps:LC,lights_fragment_end:UC,lightprobes_pars_fragment:OC,logdepthbuf_fragment:IC,logdepthbuf_pars_fragment:PC,logdepthbuf_pars_vertex:BC,logdepthbuf_vertex:zC,map_fragment:FC,map_pars_fragment:HC,map_particle_fragment:GC,map_particle_pars_fragment:VC,metalnessmap_fragment:kC,metalnessmap_pars_fragment:XC,morphinstance_vertex:WC,morphcolor_vertex:qC,morphnormal_vertex:YC,morphtarget_pars_vertex:ZC,morphtarget_vertex:JC,normal_fragment_begin:KC,normal_fragment_maps:QC,normal_pars_fragment:jC,normal_pars_vertex:$C,normal_vertex:tR,normalmap_pars_fragment:eR,clearcoat_normal_fragment_begin:nR,clearcoat_normal_fragment_maps:iR,clearcoat_pars_fragment:sR,iridescence_pars_fragment:aR,opaque_fragment:rR,packing:oR,premultiplied_alpha_fragment:lR,project_vertex:cR,dithering_fragment:uR,dithering_pars_fragment:hR,roughnessmap_fragment:fR,roughnessmap_pars_fragment:dR,shadowmap_pars_fragment:pR,shadowmap_pars_vertex:mR,shadowmap_vertex:gR,shadowmask_pars_fragment:_R,skinbase_vertex:vR,skinning_pars_vertex:yR,skinning_vertex:xR,skinnormal_vertex:SR,specularmap_fragment:MR,specularmap_pars_fragment:bR,tonemapping_fragment:TR,tonemapping_pars_fragment:ER,transmission_fragment:AR,transmission_pars_fragment:wR,uv_pars_fragment:CR,uv_pars_vertex:RR,uv_vertex:NR,worldpos_vertex:DR,background_vert:LR,background_frag:UR,backgroundCube_vert:OR,backgroundCube_frag:IR,cube_vert:PR,cube_frag:BR,depth_vert:zR,depth_frag:FR,distance_vert:HR,distance_frag:GR,equirect_vert:VR,equirect_frag:kR,linedashed_vert:XR,linedashed_frag:WR,meshbasic_vert:qR,meshbasic_frag:YR,meshlambert_vert:ZR,meshlambert_frag:JR,meshmatcap_vert:KR,meshmatcap_frag:QR,meshnormal_vert:jR,meshnormal_frag:$R,meshphong_vert:t3,meshphong_frag:e3,meshphysical_vert:n3,meshphysical_frag:i3,meshtoon_vert:s3,meshtoon_frag:a3,points_vert:r3,points_frag:o3,shadow_vert:l3,shadow_frag:c3,sprite_vert:u3,sprite_frag:h3},mt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},us={basic:{uniforms:bn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:bn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:bn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:bn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:bn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:bn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:bn([mt.points,mt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:bn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:bn([mt.common,mt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:bn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:bn([mt.sprite,mt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distance:{uniforms:bn([mt.common,mt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distance_vert,fragmentShader:Gt.distance_frag},shadow:{uniforms:bn([mt.lights,mt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};us.physical={uniforms:bn([us.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var hd={r:0,b:0,g:0},f3=new we,t1=new Ut;t1.set(-1,0,0,0,1,0,0,0,1);function d3(e,t,n,i,s,a){let r=new kt(0),o=s===!0?0:1,l,c,f=null,p=0,u=null;function d(m){let x=m.isScene===!0?m.background:null;if(x&&x.isTexture){let y=m.backgroundBlurriness>0;x=t.get(x,y)}return x}function v(m){let x=!1,y=d(m);y===null?_(r,o):y&&y.isColor&&(_(y,1),x=!0);let E=e.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function b(m,x){let y=d(x);y&&y.isCubeTexture?(c===void 0&&(c=new Si(new Bo(1,1,1),new os({name:"BackgroundCubeMaterial",uniforms:_r(us.backgroundCube.uniforms),vertexShader:us.backgroundCube.vertexShader,fragmentShader:us.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(f3.makeRotationFromEuler(x.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(t1),c.material.toneMapped=Qt.getTransfer(y.colorSpace)!==ae,(f!==y||p!==y.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,f=y,p=y.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Si(new pc(2,2),new os({name:"BackgroundMaterial",uniforms:_r(us.background.uniforms),vertexShader:us.background.vertexShader,fragmentShader:us.background.fragmentShader,side:La,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(y.colorSpace)!==ae,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||p!==y.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,f=y,p=y.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,x){m.getRGB(hd,w0(e)),n.buffers.color.setClear(hd.r,hd.g,hd.b,x,a)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,x=1){r.set(m),o=x,_(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,_(r,o)},render:v,addToRenderList:b,dispose:h}}function p3(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(U,I,k,N,G){let Y=!1,V=p(U,N,k,I);a!==V&&(a=V,c(a.object)),Y=d(U,N,k,G),Y&&v(U,N,k,G),G!==null&&t.update(G,e.ELEMENT_ARRAY_BUFFER),(Y||r)&&(r=!1,y(U,I,k,N),G!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return e.createVertexArray()}function c(U){return e.bindVertexArray(U)}function f(U){return e.deleteVertexArray(U)}function p(U,I,k,N){let G=N.wireframe===!0,Y=i[I.id];Y===void 0&&(Y={},i[I.id]=Y);let V=U.isInstancedMesh===!0?U.id:0,et=Y[V];et===void 0&&(et={},Y[V]=et);let X=et[k.id];X===void 0&&(X={},et[k.id]=X);let $=X[G];return $===void 0&&($=u(l()),X[G]=$),$}function u(U){let I=[],k=[],N=[];for(let G=0;G<n;G++)I[G]=0,k[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:N,object:U,attributes:{},index:null}}function d(U,I,k,N){let G=a.attributes,Y=I.attributes,V=0,et=k.getAttributes();for(let X in et)if(et[X].location>=0){let tt=G[X],yt=Y[X];if(yt===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(yt=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(yt=U.instanceColor)),tt===void 0||tt.attribute!==yt||yt&&tt.data!==yt.data)return!0;V++}return a.attributesNum!==V||a.index!==N}function v(U,I,k,N){let G={},Y=I.attributes,V=0,et=k.getAttributes();for(let X in et)if(et[X].location>=0){let tt=Y[X];tt===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(tt=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(tt=U.instanceColor));let yt={};yt.attribute=tt,tt&&tt.data&&(yt.data=tt.data),G[X]=yt,V++}a.attributes=G,a.attributesNum=V,a.index=N}function b(){let U=a.newAttributes;for(let I=0,k=U.length;I<k;I++)U[I]=0}function _(U){h(U,0)}function h(U,I){let k=a.newAttributes,N=a.enabledAttributes,G=a.attributeDivisors;k[U]=1,N[U]===0&&(e.enableVertexAttribArray(U),N[U]=1),G[U]!==I&&(e.vertexAttribDivisor(U,I),G[U]=I)}function m(){let U=a.newAttributes,I=a.enabledAttributes;for(let k=0,N=I.length;k<N;k++)I[k]!==U[k]&&(e.disableVertexAttribArray(k),I[k]=0)}function x(U,I,k,N,G,Y,V){V===!0?e.vertexAttribIPointer(U,I,k,G,Y):e.vertexAttribPointer(U,I,k,N,G,Y)}function y(U,I,k,N){b();let G=N.attributes,Y=k.getAttributes(),V=I.defaultAttributeValues;for(let et in Y){let X=Y[et];if(X.location>=0){let $=G[et];if($===void 0&&(et==="instanceMatrix"&&U.instanceMatrix&&($=U.instanceMatrix),et==="instanceColor"&&U.instanceColor&&($=U.instanceColor)),$!==void 0){let tt=$.normalized,yt=$.itemSize,Nt=t.get($);if(Nt===void 0)continue;let W=Nt.buffer,ct=Nt.type,vt=Nt.bytesPerElement,Et=ct===e.INT||ct===e.UNSIGNED_INT||$.gpuType===Cf;if($.isInterleavedBufferAttribute){let gt=$.data,Bt=gt.isInterleavedBuffer===!0?gt.stride:gt.itemSize,Be=$.offset;if(gt.isInstancedInterleavedBuffer||gt.isInstancedBufferAttribute){for(let Ct=0;Ct<X.locationSize;Ct++)h(X.location+Ct,gt.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Ct=0;Ct<X.locationSize;Ct++)_(X.location+Ct);e.bindBuffer(e.ARRAY_BUFFER,W);for(let Ct=0;Ct<X.locationSize;Ct++)x(X.location+Ct,yt/X.locationSize,ct,tt,Bt*vt,(Be+yt/X.locationSize*Ct)*vt,Et)}else{if($.isInstancedBufferAttribute){for(let gt=0;gt<X.locationSize;gt++)h(X.location+gt,$.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let gt=0;gt<X.locationSize;gt++)_(X.location+gt);e.bindBuffer(e.ARRAY_BUFFER,W);for(let gt=0;gt<X.locationSize;gt++)x(X.location+gt,yt/X.locationSize,ct,tt,yt*vt,yt/X.locationSize*gt*vt,Et)}}else if(V!==void 0){let tt=V[et];if(tt!==void 0)switch(tt.length){case 2:e.vertexAttrib2fv(X.location,tt);break;case 3:e.vertexAttrib3fv(X.location,tt);break;case 4:e.vertexAttrib4fv(X.location,tt);break;default:e.vertexAttrib1fv(X.location,tt)}}}}m()}function E(){L();for(let U in i){let I=i[U];for(let k in I){let N=I[k];for(let G in N){let Y=N[G];for(let V in Y)f(Y[V].object),delete Y[V];delete N[G]}}delete i[U]}}function A(U){if(i[U.id]===void 0)return;let I=i[U.id];for(let k in I){let N=I[k];for(let G in N){let Y=N[G];for(let V in Y)f(Y[V].object),delete Y[V];delete N[G]}}delete i[U.id]}function g(U){for(let I in i){let k=i[I];for(let N in k){let G=k[N];if(G[U.id]===void 0)continue;let Y=G[U.id];for(let V in Y)f(Y[V].object),delete Y[V];delete G[U.id]}}}function T(U){for(let I in i){let k=i[I],N=U.isInstancedMesh===!0?U.id:0,G=k[N];if(G!==void 0){for(let Y in G){let V=G[Y];for(let et in V)f(V[et].object),delete V[et];delete G[Y]}delete k[N],Object.keys(k).length===0&&delete i[I]}}}function L(){C(),r=!0,a!==s&&(a=s,c(a.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:T,releaseStatesOfProgram:g,initAttributes:b,enableAttribute:_,disableUnusedAttributes:m}}function m3(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,f){f!==0&&(e.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function g3(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(g){return!(g!==zi&&i.convert(g)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let T=g===Bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==Vn&&g!==Pi&&!T&&i.convert(g)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(Rt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let p=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=n.logarithmicDepthBuffer===!0&&p===!1;n.reversedDepthBuffer===!0&&p===!1&&Rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&p===!0&&Rt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=e.getParameter(e.MAX_TEXTURE_SIZE),_=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),x=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:_,maxAttributes:h,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:y,maxSamples:E,samples:A}}function _3(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Ui,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||s;return s=u,i=p.length,d},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){n=f(p,u,0)},this.setState=function(p,u,d){let v=p.clippingPlanes,b=p.clipIntersection,_=p.clipShadows,h=e.get(p);if(!s||v===null||v.length===0||a&&!_)a?f(null):c();else{let m=a?0:i,x=m*4,y=h.clippingState||null;l.value=y,y=f(v,u,x,d);for(let E=0;E!==x;++E)y[E]=n[E];h.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(p,u,d,v){let b=p!==null?p.length:0,_=null;if(b!==0){if(_=l.value,v!==!0||_===null){let h=d+b*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(_===null||_.length<h)&&(_=new Float32Array(h));for(let x=0,y=d;x!==b;++x,y+=4)r.copy(p[x]).applyMatrix4(m,o),r.normal.toArray(_,y),_[y+3]=r.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,_}}var Uc=class extends ii{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new uc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Bo(5,5,5),a=new os({name:"CubemapFromEquirect",uniforms:_r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ln,blending:dr});a.uniforms.tEquirect.value=n;let r=new Si(s,a),o=n.minFilter;return n.minFilter===Bs&&(n.minFilter=Dn),new Fo(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},Lb=256,v3=3,y3=20,e1=256,n1=16,x3=3,S3=new F,M3=new kt,dd=class e{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Fo(1,10,null),this._boxMesh=new Si(new Bo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=S3}=a,l=this._renderer;this._setSize(r);let c=this._allocateTarget(),f=this._getSourceTarget(!0);n>0&&(f.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,v=l.autoClearStencil,b=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(t.background=l.getClearColor(M3));let _=new Fo(i,s,f);return _.position.copy(o),_.update(l,t),l.autoClear=p,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=v,t.background=b,n>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ib(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ob(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,n){return n>0?1-Math.sqrt(1-t/n):0}_setSize(t){this._cubeSize=Math.max(Lb,wb(t))}_fromTexture(t,n){t.mapping===mr||t.mapping===Vo?this._setSize(t.image.length===0?Lb:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=n||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,n=Ub(t,!1,!1),i=Math.log2(t)-v3;for(let s=0;s<=i;s++)n.texture.mipmaps.push({width:t>>s,height:t>>s});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(t=!1){let n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Ub(n,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,n,i){let s=this._boxMesh,a=this._cubeCamera;s.material=i,a.renderTarget=t,a.activeMipmapLevel=n;let r=t.width>>n;t.viewport.set(0,0,r,r),a.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let n;t.mapping===mr||t.mapping===Vo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ib()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ob()),n=this._equirectMaterial),n.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=b3(),this._integrationMaterial=T3());let n=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/n1);for(let r=0;r<=i;r++){let o=e.lodToRoughness(r,i);if(r>i-x3)a.roughness.value=o,this._renderCube(t,r,this._integrationMaterial);else{let l=o>0?Math.log2(n)+.5*Math.log2(6/(e1*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,r,this._ggxMaterial)}}}_blur(t,n){this._blurMaterial===null&&(this._blurMaterial=E3());let i=this._blurMaterial,s=i.uniforms,a=this._sourceTarget;s.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,s.envMap.value=a.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(a,0,i)}};function Ub(e,t,n){return new Uc(e,{minFilter:Bs,generateMipmaps:t,type:Bi,colorSpace:nc,depthBuffer:n})}function Oc(e,t,n){return new os({name:e,uniforms:t,vertexShader:Gt.cube_vert,fragmentShader:n,side:Ln,blending:dr,depthTest:!1,depthWrite:!1})}function b3(){return Oc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${e1}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function T3(){return Oc("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:n1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function E3(){return Oc("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${y3}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Ob(){return Oc("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ib(){return Oc("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function A3(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?r(u):a(u)}function a(u){if(u&&u.isTexture){let d=u.mapping;if(d===Ef||d===Af)if(t.has(u)){let v=t.get(u).texture;return o(v,u.mapping)}else{let v=u.image;if(v&&v.height>0){let b=new Uc(v.height);return b.fromEquirectangularTexture(e,u),t.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,v=d===Ef||d===Af,b=d===mr||d===Vo;if(v||b){let _=n.get(u),h=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new dd(e)),_=v?i.fromEquirectangular(u,_):i.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,n.set(u,_),_.texture;if(_!==void 0)return _.texture;{let m=u.image;return v&&m&&m.height>0||b&&m&&l(m)?(i===null&&(i=new dd(e)),_=v?i.fromEquirectangular(u):i.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,n.set(u,_),u.addEventListener("dispose",f),_.texture):null}}}return u}function o(u,d){return d===Ef?u.mapping=mr:d===Af&&(u.mapping=Vo),u}function l(u){let d=0,v=6;for(let b=0;b<v;b++)u[b]!==void 0&&d++;return d===v}function c(u){let d=u.target;d.removeEventListener("dispose",c);let v=t.get(d);v!==void 0&&(t.delete(d),v.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let v=n.get(d);v!==void 0&&(n.delete(d),v.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function w3(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&tc("WebGLRenderer: "+i+" extension not supported."),s}}}function C3(e,t,n,i){let s={},a=new WeakMap,r=new FinalizationRegistry(v=>delete s[v]);function o(v){l(v.target)}function l(v){v.index!==null&&t.remove(v.index);for(let _ in v.attributes)t.remove(v.attributes[_]);v.removeEventListener("dispose",o),delete s[v.id],r.unregister(v);let b=a.get(v);b&&(t.remove(b),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function c(v,b){return s[b.id]!==void 0||(b.addEventListener("dispose",o),s[b.id]=new WeakRef(b),r.register(b,b.id,b),n.memory.geometries++),b}function f(v){let b=v.attributes;for(let _ in b)t.update(b[_],e.ARRAY_BUFFER)}function p(v){let b=v.index,_=v.attributes.position,h=0;if(_===void 0)return;let m=b!==null?b.array.length:_.array.length/3-1,x=_.count>=65535?cc:lc,y=new x(Math.ceil(m/3)*6,1),E=y.array;if(b!==null){let g=b.array;h=b.version;for(let T=0,L=0;T<m;T+=3){let C=g[T+0],U=g[T+1],I=g[T+2];E[L++]=C,E[L++]=U,E[L++]=U,E[L++]=I,E[L++]=I,E[L++]=C}}else{h=_.version;for(let g=0,T=0;g<m;g+=3){let L=g+0,C=g+1,U=g+2;E[T++]=L,E[T++]=C,E[T++]=C,E[T++]=U,E[T++]=U,E[T++]=L}}y.version=h;let A=a.get(v);A&&t.remove(A),a.set(v,y)}function u(v){let b=a.get(v);if(b){let _=v.index;_!==null&&b.version<_.version&&p(v)}else p(v);return a.get(v)}function d(){for(let v in s){let b=s[v].deref();b!==void 0&&l(b)}}return{get:c,update:f,getWireframeAttribute:u,dispose:d}}function R3(e,t,n){let i;function s(p){i=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,a,p*r),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,a,p*r,d),n.update(u,i,d))}function f(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,p,0,d);let b=0;for(let _=0;_<d;_++)b+=u[_];n.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function N3(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Lt("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function D3(e,t,n){let i=new WeakMap,s=new Ce;function a(r,o,l){let c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0,u=i.get(o);if(u===void 0||u.count!==p){let L=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],x=0;d===!0&&(x=1),v===!0&&(x=2),b===!0&&(x=3);let y=o.attributes.position.count*x,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let A=new Float32Array(y*E*4*p),g=new ac(A,y,E,p);g.type=Pi,g.needsUpdate=!0;let T=x*4;for(let C=0;C<p;C++){let U=_[C],I=h[C],k=m[C],N=y*E*4*C;for(let G=0;G<U.count;G++){let Y=G*T;d===!0&&(s.fromBufferAttribute(U,G),A[N+Y+0]=s.x,A[N+Y+1]=s.y,A[N+Y+2]=s.z,A[N+Y+3]=0),v===!0&&(s.fromBufferAttribute(I,G),A[N+Y+4]=s.x,A[N+Y+5]=s.y,A[N+Y+6]=s.z,A[N+Y+7]=0),b===!0&&(s.fromBufferAttribute(k,G),A[N+Y+8]=s.x,A[N+Y+9]=s.y,A[N+Y+10]=s.z,A[N+Y+11]=k.itemSize===4?s.w:1)}}u={count:p,texture:g,size:new qt(y,E)},i.set(o,u),o.addEventListener("dispose",L)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let v=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function L3(e,t,n,i,s){let a=new WeakMap;function r(c){let f=s.render.frame,p=c.geometry,u=t.get(c,p);if(a.get(u)!==f&&(t.update(u),a.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==f&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;a.get(d)!==f&&(d.update(),a.set(d,f))}return u}function o(){a=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:r,dispose:o}}var U3={[r0]:"LINEAR_TONE_MAPPING",[o0]:"REINHARD_TONE_MAPPING",[l0]:"CINEON_TONE_MAPPING",[c0]:"ACES_FILMIC_TONE_MAPPING",[h0]:"AGX_TONE_MAPPING",[f0]:"NEUTRAL_TONE_MAPPING",[u0]:"CUSTOM_TONE_MAPPING"};function O3(e,t,n,i,s,a){let r=new ii(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,f=new Oi;f.setAttribute("position",new Pe([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Pe([0,2,0,0,2,0],2));let p=new uf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Si(f,p),d=new xc(-1,1,1,-1,0,1),v=null,b=null,_=!1,h,m=null,x=[],y=!1;this.setSize=function(E,A){r.setSize(E,A),o!==null&&o.setSize(E,A),l!==null&&l.setSize(E,A);for(let g=0;g<x.length;g++){let T=x[g];T.setSize&&T.setSize(E,A)}},this.setEffects=function(E){x=E,y=x.length>0&&x[0].isRenderPass===!0;let A=r.width,g=r.height;x.length>0&&o===null&&(o=new ii(A,g,{type:Bi,depthBuffer:!1,stencilBuffer:!1}),l=new ii(A,g,{type:Bi,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&x.some(L=>L.needsDepthTexture===!0);T!==(r.depthTexture!==null)&&(T===!0&&c===null&&(c=new Ps(A,g),a===!0&&(c.format=zs,c.type=gr)),r.dispose(),r.depthTexture=T?c:null,r.resolveDepthBuffer=T,r.storeMultisampledDepthBuffer=T);for(let L=0;L<x.length;L++){let C=x[L];C.setSize&&C.setSize(A,g),T&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(E,A){if(_||E.toneMapping===ls&&x.length===0)return!1;if(m=A,A!==null){let g=A.width,T=A.height;(r.width!==g||r.height!==T)&&this.setSize(g,T)}return y===!1&&E.setRenderTarget(r),h=E.toneMapping,E.toneMapping=ls,!0},this.hasRenderPass=function(){return y},this.end=function(E,A){E.toneMapping=h,_=!0;let g=r,T=o;for(let L=0;L<x.length;L++){let C=x[L];C.enabled!==!1&&(C.render(E,T,g,A),C.needsSwap!==!1&&(g=T,T=T===o?l:o))}if(v!==E.outputColorSpace||b!==E.toneMapping){v=E.outputColorSpace,b=E.toneMapping,p.defines={},Qt.getTransfer(v)===ae&&(p.defines.SRGB_TRANSFER="");let L=U3[b];L&&(p.defines[L]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=g.texture,E.setRenderTarget(m),E.render(u,d),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),f.dispose(),p.dispose()}}var i1=new Gn,s1=new Ps(1,1),a1=new hc(1),r1=new ac,o1=new af,l1=new uc,Pb=[],Bb=[],zb=new Float32Array(16),Fb=new Float32Array(9),Hb=new Float32Array(4);function Wo(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=Pb[s];if(a===void 0&&(a=new Float32Array(s),Pb[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function Ze(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Je(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function md(e,t){let n=Bb[t];n===void 0&&(n=new Int32Array(t),Bb[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function I3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function P3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ze(n,t))return;e.uniform2fv(this.addr,t),Je(n,t)}}function B3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ze(n,t))return;e.uniform3fv(this.addr,t),Je(n,t)}}function z3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ze(n,t))return;e.uniform4fv(this.addr,t),Je(n,t)}}function F3(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ze(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Je(n,t)}else{if(Ze(n,i))return;Hb.set(i),e.uniformMatrix2fv(this.addr,!1,Hb),Je(n,i)}}function H3(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ze(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Je(n,t)}else{if(Ze(n,i))return;Fb.set(i),e.uniformMatrix3fv(this.addr,!1,Fb),Je(n,i)}}function G3(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ze(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Je(n,t)}else{if(Ze(n,i))return;zb.set(i),e.uniformMatrix4fv(this.addr,!1,zb),Je(n,i)}}function V3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function k3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ze(n,t))return;e.uniform2iv(this.addr,t),Je(n,t)}}function X3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ze(n,t))return;e.uniform3iv(this.addr,t),Je(n,t)}}function W3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ze(n,t))return;e.uniform4iv(this.addr,t),Je(n,t)}}function q3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Y3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ze(n,t))return;e.uniform2uiv(this.addr,t),Je(n,t)}}function Z3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ze(n,t))return;e.uniform3uiv(this.addr,t),Je(n,t)}}function J3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ze(n,t))return;e.uniform4uiv(this.addr,t),Je(n,t)}}function gd(e){return e.version===0&&(e.compareFunction=b0,e.needsUpdate=!0),e}function K3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?a=gd(s1):a=i1,n.setTexture2D(t||a,s)}function Q3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||o1,s)}function j3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_CUBE_SHADOW?a=gd(a1):a=l1,n.setTextureCube(t||a,s)}function $3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||r1,s)}function t2(e){switch(e){case 5126:return I3;case 35664:return P3;case 35665:return B3;case 35666:return z3;case 35674:return F3;case 35675:return H3;case 35676:return G3;case 5124:case 35670:return V3;case 35667:case 35671:return k3;case 35668:case 35672:return X3;case 35669:case 35673:return W3;case 5125:return q3;case 36294:return Y3;case 36295:return Z3;case 36296:return J3;case 35678:case 36198:case 36298:case 36306:case 35682:return K3;case 35679:case 36299:case 36307:return Q3;case 35680:case 36300:case 36308:case 36293:return j3;case 36289:case 36303:case 36311:case 36292:return $3}}function e2(e,t){e.uniform1fv(this.addr,t)}function n2(e,t){let n=Wo(t,this.size,2);e.uniform2fv(this.addr,n)}function i2(e,t){let n=Wo(t,this.size,3);e.uniform3fv(this.addr,n)}function s2(e,t){let n=Wo(t,this.size,4);e.uniform4fv(this.addr,n)}function a2(e,t){let n=Wo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function r2(e,t){let n=Wo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function o2(e,t){let n=Wo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function l2(e,t){e.uniform1iv(this.addr,t)}function c2(e,t){e.uniform2iv(this.addr,t)}function u2(e,t){e.uniform3iv(this.addr,t)}function h2(e,t){e.uniform4iv(this.addr,t)}function f2(e,t){e.uniform1uiv(this.addr,t)}function d2(e,t){e.uniform2uiv(this.addr,t)}function p2(e,t){e.uniform3uiv(this.addr,t)}function m2(e,t){e.uniform4uiv(this.addr,t)}function g2(e,t,n){let i=this.cache,s=t.length,a=md(n,s);Ze(i,a)||(e.uniform1iv(this.addr,a),Je(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=gd(s1):r=i1;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function _2(e,t,n){let i=this.cache,s=t.length,a=md(n,s);Ze(i,a)||(e.uniform1iv(this.addr,a),Je(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||o1,a[r])}function v2(e,t,n){let i=this.cache,s=t.length,a=md(n,s);Ze(i,a)||(e.uniform1iv(this.addr,a),Je(i,a));let r;this.type===e.SAMPLER_CUBE_SHADOW?r=gd(a1):r=l1;for(let o=0;o!==s;++o)n.setTextureCube(t[o]||r,a[o])}function y2(e,t,n){let i=this.cache,s=t.length,a=md(n,s);Ze(i,a)||(e.uniform1iv(this.addr,a),Je(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||r1,a[r])}function x2(e){switch(e){case 5126:return e2;case 35664:return n2;case 35665:return i2;case 35666:return s2;case 35674:return a2;case 35675:return r2;case 35676:return o2;case 5124:case 35670:return l2;case 35667:case 35671:return c2;case 35668:case 35672:return u2;case 35669:case 35673:return h2;case 5125:return f2;case 36294:return d2;case 36295:return p2;case 36296:return m2;case 35678:case 36198:case 36298:case 36306:case 35682:return g2;case 35679:case 36299:case 36307:return _2;case 35680:case 36300:case 36308:case 36293:return v2;case 36289:case 36303:case 36311:case 36292:return y2}}var U0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=t2(n.type)}},O0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=x2(n.type)}},I0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},D0=/(\w+)(\])?(\[|\.)?/g;function Gb(e,t){e.seq.push(t),e.map[t.id]=t}function S2(e,t,n){let i=e.name,s=i.length;for(D0.lastIndex=0;;){let a=D0.exec(i),r=D0.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Gb(n,c===void 0?new U0(o,e,t):new O0(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new I0(o),Gb(n,p)),n=p}}}var Xo=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);S2(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function Vb(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var M2=37297,b2=0;function T2(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var kb=new Ut;function E2(e){Qt._getMatrix(kb,Qt.workingColorSpace,e);let t=`mat3( ${kb.elements.map(n=>n.toFixed(4))} )`;switch(Qt.getTransfer(e)){case ic:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Xb(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+T2(e.getShaderSource(t),o)}else return a}function A2(e,t){let n=E2(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var w2={[r0]:"Linear",[o0]:"Reinhard",[l0]:"Cineon",[c0]:"ACESFilmic",[h0]:"AgX",[f0]:"Neutral",[u0]:"Custom"};function C2(e,t){let n=w2[t];return n===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var fd=new F;function R2(){Qt.getLuminanceCoefficients(fd);let e=fd.x.toFixed(4),t=fd.y.toFixed(4),n=fd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N2(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lc).join(`
`)}function D2(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function L2(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Lc(e){return e!==""}function Wb(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function qb(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var U2=/^[ \t]*#include +<([\w\d./]+)>/gm;function P0(e){return e.replace(U2,O2)}function O2(e,t){let n=Gt[t];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return P0(n)}var I2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yb(e){return e.replace(I2,P2)}function P2(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Zb(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var B2={[Mc]:"SHADOWMAP_TYPE_PCF",[Ho]:"SHADOWMAP_TYPE_VSM"};function z2(e){return B2[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var F2={[Vo]:"ENVMAP_MODE_REFRACTION"};function H2(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":F2[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var G2={[a0]:"ENVMAP_BLENDING_MULTIPLY",[hb]:"ENVMAP_BLENDING_MIX",[fb]:"ENVMAP_BLENDING_ADD"};function V2(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":G2[e.combine]||"ENVMAP_BLENDING_NONE"}function k2(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=z2(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=H2(n),p=V2(n),u=N2(n),d=D2(a),v=s.createProgram(),b,_,h=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(b=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d].filter(Lc).join(`
`),b.length>0&&(b+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d].filter(Lc).join(`
`),_.length>0&&(_+=`
`)):(b=[Zb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lc).join(`
`),_=[Zb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ls?"#define TONE_MAPPING":"",n.toneMapping!==ls?Gt.tonemapping_pars_fragment:"",n.toneMapping!==ls?C2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,A2("linearToOutputTexel",n.outputColorSpace),R2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Lc).join(`
`)),r=P0(r),r=Wb(r,n),r=qb(r,n),o=P0(o),o=Wb(o,n),o=qb(o,n),r=Yb(r),o=Yb(o),n.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,b=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,_=["#define varying in",n.glslVersion===T0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===T0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let m=h+b+r,x=h+_+o,y=Vb(s,s.VERTEX_SHADER,m),E=Vb(s,s.FRAGMENT_SHADER,x);s.attachShader(v,y),s.attachShader(v,E),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(C){if(e.debug.checkShaderErrors){let U=s.getProgramInfoLog(v)||"",I=s.getShaderInfoLog(y)||"",k=s.getShaderInfoLog(E)||"",N=U.trim(),G=I.trim(),Y=k.trim(),V=!0,et=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(V=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,v,y,E);else{let X=Xb(s,y,"vertex"),$=Xb(s,E,"fragment");Lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+X+`
`+$)}else N!==""?Rt("WebGLProgram: Program Info Log:",N):(G===""||Y==="")&&(et=!1);et&&(C.diagnostics={runnable:V,programLog:N,vertexShader:{log:G,prefix:b},fragmentShader:{log:Y,prefix:_}})}s.deleteShader(y),s.deleteShader(E),g=new Xo(s,v),T=L2(s,v)}let g;this.getUniforms=function(){return g===void 0&&A(this),g};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(v,M2)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=b2++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=E,this}var X2=0,B0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new z0(t),n.set(t,i)),i}},z0=class{constructor(t){this.id=X2++,this.code=t,this.usedTimes=0}};function W2(e){return e===Ua||e===Cc||e===Rc}function q2(e,t,n,i,s,a){let r=new rc,o=new B0,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g){return l.add(g),g===0?"uv":`uv${g}`}function v(g,T,L,C,U,I){let k=C.fog,N=U.geometry,G=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,Y=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,V=t.get(g.envMap||G,Y),et=u[g.type],X=i.precision;g.precision!==null&&(X=i.getMaxPrecision(g.precision),X!==g.precision&&Rt("WebGLProgram.getParameters:",g.precision,"not supported, using",X,"instead."));let $=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,tt=$!==void 0?$.length:0,yt=0;N.morphAttributes.position!==void 0&&(yt=1),N.morphAttributes.normal!==void 0&&(yt=2),N.morphAttributes.color!==void 0&&(yt=3);let Nt,W,ct,vt;if(et){let pt=us[et];Nt=pt.vertexShader,W=pt.fragmentShader}else{Nt=g.vertexShader,W=g.fragmentShader;let pt=o.getVertexShaderStage(g),oe=o.getFragmentShaderStage(g);o.update(g,pt,oe),ct=pt.id,vt=oe.id}let Et=e.getRenderTarget(),gt=e.state.buffers.depth.getReversed(),Bt=U.isInstancedMesh===!0,Be=U.isBatchedMesh===!0,Ct=!!g.map,re=!!g.matcap,de=!!V,Yt=de&&V.isPMREMTexture===!0,rn=!!g.aoMap,ke=!!g.lightMap,Un=!!g.bumpMap&&g.wireframe===!1,Ne=!!g.normalMap,Fi=!!g.displacementMap,Ke=!!g.emissiveMap,ai=!!g.metalnessMap,ri=!!g.roughnessMap,oi=g.anisotropy>0,O=g.clearcoat>0,li=g.diffuseRoughness>0,be=g.dispersion>0,Te=g.retroreflectivity>0,dt=g.iridescence>0,Xe=g.sheen>0,wt=g.transmission>0,Ot=oi&&!!g.anisotropyMap,w=O&&!!g.clearcoatMap,S=O&&!!g.clearcoatNormalMap,B=O&&!!g.clearcoatRoughnessMap,nt=li&&!!g.diffuseRoughnessMap,j=dt&&!!g.iridescenceMap,at=dt&&!!g.iridescenceThicknessMap,ht=Xe&&!!g.sheenColorMap,Z=Xe&&!!g.sheenRoughnessMap,J=!!g.specularMap,ot=!!g.specularColorMap,R=!!g.specularIntensityMap,K=wt&&!!g.transmissionMap,q=wt&&!!g.thicknessMap,lt=!!g.gradientMap,st=!!g.alphaMap,rt=g.alphaTest>0,Tt=!!g.alphaHash,Ht=!!g.extensions,it=ls;g.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(it=e.toneMapping);let At=Yt?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Ft={shaderID:et,shaderType:g.type,shaderName:g.name,vertexShader:Nt,fragmentShader:W,defines:g.defines,customVertexShaderID:ct,customFragmentShaderID:vt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:X,batching:Be,batchingColor:Be&&U._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&U.instanceColor!==null,instancingMorph:Bt&&U.morphTexture!==null,outputColorSpace:Et===null?e.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ct,matcap:re,envMap:de,envMapMode:de&&V.mapping,envMapPMREM:Yt,envMapMaxLod:Yt?At.length-1:null,envMapSize:Yt?At[0].width:null,aoMap:rn,lightMap:ke,bumpMap:Un,normalMap:Ne,displacementMap:Fi,emissiveMap:Ke,normalMapObjectSpace:Ne&&g.normalMapType===mb,normalMapTangentSpace:Ne&&g.normalMapType===ud,packedNormalMap:Ne&&g.normalMapType===ud&&W2(g.normalMap.format),metalnessMap:ai,roughnessMap:ri,anisotropy:oi,anisotropyMap:Ot,clearcoat:O,clearcoatMap:w,clearcoatNormalMap:S,clearcoatRoughnessMap:B,diffuseRoughness:li,diffuseRoughnessMap:nt,dispersion:be,retroreflection:Te,iridescence:dt,iridescenceMap:j,iridescenceThicknessMap:at,sheen:Xe,sheenColorMap:ht,sheenRoughnessMap:Z,specularMap:J,specularColorMap:ot,specularIntensityMap:R,transmission:wt,transmissionMap:K,thicknessMap:q,gradientMap:lt,opaque:g.transparent===!1&&g.blending===Go&&g.alphaToCoverage===!1,alphaMap:st,alphaTest:rt,alphaHash:Tt,combine:g.combine,mapUv:Ct&&d(g.map.channel),aoMapUv:rn&&d(g.aoMap.channel),lightMapUv:ke&&d(g.lightMap.channel),bumpMapUv:Un&&d(g.bumpMap.channel),normalMapUv:Ne&&d(g.normalMap.channel),displacementMapUv:Fi&&d(g.displacementMap.channel),emissiveMapUv:Ke&&d(g.emissiveMap.channel),metalnessMapUv:ai&&d(g.metalnessMap.channel),roughnessMapUv:ri&&d(g.roughnessMap.channel),anisotropyMapUv:Ot&&d(g.anisotropyMap.channel),clearcoatMapUv:w&&d(g.clearcoatMap.channel),clearcoatNormalMapUv:S&&d(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&d(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:nt&&d(g.diffuseRoughnessMap.channel),iridescenceMapUv:j&&d(g.iridescenceMap.channel),iridescenceThicknessMapUv:at&&d(g.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&d(g.sheenColorMap.channel),sheenRoughnessMapUv:Z&&d(g.sheenRoughnessMap.channel),specularMapUv:J&&d(g.specularMap.channel),specularColorMapUv:ot&&d(g.specularColorMap.channel),specularIntensityMapUv:R&&d(g.specularIntensityMap.channel),transmissionMapUv:K&&d(g.transmissionMap.channel),thicknessMapUv:q&&d(g.thicknessMap.channel),alphaMapUv:st&&d(g.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ne||oi),vertexNormals:!!N.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!N.attributes.uv&&(Ct||st),fog:!!k,useFog:g.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||N.attributes.normal===void 0&&Ne===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:gt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:yt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:I.filter(pt=>pt.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:e.shadowMap.enabled&&L.length>0,shadowMapType:e.shadowMap.type,toneMapping:it,decodeVideoTexture:Ct&&g.map.isVideoTexture===!0&&Qt.getTransfer(g.map.colorSpace)===ae,decodeVideoTextureEmissive:Ke&&g.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(g.emissiveMap.colorSpace)===ae,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Mi,flipSided:g.side===Ln,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ht&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&g.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function b(g){let T=[];if(g.shaderID?T.push(g.shaderID):(T.push(g.customVertexShaderID),T.push(g.customFragmentShaderID)),g.defines!==void 0)for(let L in g.defines)T.push(L),T.push(g.defines[L]);return g.isRawShaderMaterial===!1&&(_(T,g),h(T,g),T.push(e.outputColorSpace)),T.push(g.customProgramCacheKey),T.join()}function _(g,T){g.push(T.precision),g.push(T.outputColorSpace),g.push(T.envMapMode),g.push(T.envMapPMREM),g.push(T.envMapMaxLod),g.push(T.envMapSize),g.push(T.mapUv),g.push(T.alphaMapUv),g.push(T.lightMapUv),g.push(T.aoMapUv),g.push(T.bumpMapUv),g.push(T.normalMapUv),g.push(T.displacementMapUv),g.push(T.emissiveMapUv),g.push(T.metalnessMapUv),g.push(T.roughnessMapUv),g.push(T.anisotropyMapUv),g.push(T.clearcoatMapUv),g.push(T.clearcoatNormalMapUv),g.push(T.clearcoatRoughnessMapUv),g.push(T.diffuseRoughnessMapUv),g.push(T.iridescenceMapUv),g.push(T.iridescenceThicknessMapUv),g.push(T.sheenColorMapUv),g.push(T.sheenRoughnessMapUv),g.push(T.specularMapUv),g.push(T.specularColorMapUv),g.push(T.specularIntensityMapUv),g.push(T.transmissionMapUv),g.push(T.thicknessMapUv),g.push(T.combine),g.push(T.fogExp2),g.push(T.sizeAttenuation),g.push(T.morphTargetsCount),g.push(T.numSunLights),g.push(T.numDirLights),g.push(T.numPointLights),g.push(T.numSpotLights),g.push(T.numSpotLightMaps),g.push(T.numHemiLights),g.push(T.numRectAreaLights),g.push(T.numSunLightShadows),g.push(T.numDirLightShadows),g.push(T.numPointLightShadows),g.push(T.numSpotLightShadows),g.push(T.numSpotLightShadowsWithMaps),g.push(T.numLightProbes),g.push(T.numLightProbeGrids),g.push(T.shadowMapType),g.push(T.toneMapping),g.push(T.numClippingPlanes),g.push(T.numClipIntersection),g.push(T.depthPacking)}function h(g,T){r.disableAll(),T.instancing&&r.enable(0),T.instancingColor&&r.enable(1),T.instancingMorph&&r.enable(2),T.matcap&&r.enable(3),T.envMap&&r.enable(4),T.normalMapObjectSpace&&r.enable(5),T.normalMapTangentSpace&&r.enable(6),T.clearcoat&&r.enable(7),T.iridescence&&r.enable(8),T.alphaTest&&r.enable(9),T.vertexColors&&r.enable(10),T.vertexAlphas&&r.enable(11),T.vertexUv1s&&r.enable(12),T.vertexUv2s&&r.enable(13),T.vertexUv3s&&r.enable(14),T.vertexTangents&&r.enable(15),T.anisotropy&&r.enable(16),T.alphaHash&&r.enable(17),T.batching&&r.enable(18),T.dispersion&&r.enable(19),T.retroreflection&&r.enable(24),T.diffuseRoughness&&r.enable(25),T.batchingColor&&r.enable(20),T.gradientMap&&r.enable(21),T.packedNormalMap&&r.enable(22),T.vertexNormals&&r.enable(23),g.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.reversedDepthBuffer&&r.enable(4),T.skinning&&r.enable(5),T.morphTargets&&r.enable(6),T.morphNormals&&r.enable(7),T.morphColors&&r.enable(8),T.premultipliedAlpha&&r.enable(9),T.shadowMapEnabled&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),T.decodeVideoTextureEmissive&&r.enable(20),T.alphaToCoverage&&r.enable(21),T.numLightProbeGrids>0&&r.enable(22),T.hasPositionAttribute&&r.enable(23),g.push(r.mask)}function m(g){let T=u[g.type],L;if(T){let C=us[T];L=Rb.clone(C.uniforms)}else L=g.uniforms;return L}function x(g,T){let L=f.get(T);return L!==void 0?++L.usedTimes:(L=new k2(e,T,g,s),c.push(L),f.set(T,L)),L}function y(g){if(--g.usedTimes===0){let T=c.indexOf(g);c[T]=c[c.length-1],c.pop(),f.delete(g.cacheKey),g.destroy()}}function E(g){o.remove(g)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:b,getUniforms:m,acquireProgram:x,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:A}}function Y2(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function Z2(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Jb(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Kb(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,v,b,_,h){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:v,materialVariant:r(u),groupOrder:b,renderOrder:u.renderOrder,z:_,group:h},e[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=v,m.materialVariant=r(u),m.groupOrder=b,m.renderOrder=u.renderOrder,m.z=_,m.group=h),t++,m}function l(u,d,v,b,_,h,m){m.reversedDepth===!0&&(_=-_);let x=o(u,d,v,b,_,h);v.transmission>0?i.push(x):v.transparent===!0?s.push(x):n.push(x)}function c(u,d,v,b,_,h){let m=o(u,d,v,b,_,h);v.transmission>0?i.unshift(m):v.transparent===!0?s.unshift(m):n.unshift(m)}function f(u,d){n.length>1&&n.sort(u||Z2),i.length>1&&i.sort(d||Jb),s.length>1&&s.sort(d||Jb)}function p(){for(let u=t,d=e.length;u<d;u++){let v=e[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:p,sort:f}}function J2(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new Kb,e.set(i,[r])):s>=a.length?(r=new Kb,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function K2(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new F,color:new kt};break;case"SpotLight":n={position:new F,direction:new F,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new kt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":n={color:new kt,position:new F,halfWidth:new F,halfHeight:new F};break}return e[t.id]=n,n}}}function Q2(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var j2=0;function $2(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function tN(e){let t=new K2,n=Q2(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,a=new we,r=new we;function o(c){let f=0,p=0,u=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let d=0,v=0,b=0,_=0,h=0,m=0,x=0,y=0,E=0,A=0,g=0,T=0,L=0,C=0;c.sort($2);for(let I=0,k=c.length;I<k;I++){let N=c[I],G=N.color,Y=N.intensity,V=N.distance,et=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ua?et=N.shadow.map.texture:et=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)f+=G.r*Y,p+=G.g*Y,u+=G.b*Y;else if(N.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(N.sh.coefficients[X],Y);C++}else if(N.isSunLight){let X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let $=N.shadow,tt=n.get(N);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[v]=tt,i.sunShadowMap[v]=et;let yt=$.getViewportCount();for(let Nt=0;Nt<yt;Nt++)i.sunShadowMatrix[b+Nt]=$.getMatrix(Nt),i.sunShadowCascade[b+Nt]=$._cascadeData[Nt];b+=yt,v++}i.sun[d]=X,d++}else if(N.isDirectionalLight){let X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let $=N.shadow,tt=n.get(N);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,i.directionalShadow[_]=tt,i.directionalShadowMap[_]=et,i.directionalShadowMatrix[_]=N.shadow.matrix,E++}i.directional[_]=X,_++}else if(N.isSpotLight){let X=t.get(N);X.position.setFromMatrixPosition(N.matrixWorld),X.color.copy(G).multiplyScalar(Y),X.distance=V,X.coneCos=Math.cos(N.angle),X.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),X.decay=N.decay,i.spot[m]=X;let $=N.shadow;if(N.map&&(i.spotLightMap[T]=N.map,T++,$.updateMatrices(N),N.castShadow&&L++),i.spotLightMatrix[m]=$.matrix,N.castShadow){let tt=n.get(N);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,i.spotShadow[m]=tt,i.spotShadowMap[m]=et,g++}m++}else if(N.isRectAreaLight){let X=t.get(N);X.color.copy(G).multiplyScalar(Y),X.halfWidth.set(N.width*.5,0,0),X.halfHeight.set(0,N.height*.5,0),i.rectArea[x]=X,x++}else if(N.isPointLight){let X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),X.distance=N.distance,X.decay=N.decay,N.castShadow){let $=N.shadow,tt=n.get(N);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,tt.shadowCameraNear=$.camera.near,tt.shadowCameraFar=$.camera.far,i.pointShadow[h]=tt,i.pointShadowMap[h]=et,i.pointShadowMatrix[h]=N.shadow.matrix,A++}i.point[h]=X,h++}else if(N.isHemisphereLight){let X=t.get(N);X.skyColor.copy(N.color).multiplyScalar(Y),X.groundColor.copy(N.groundColor).multiplyScalar(Y),i.hemi[y]=X,y++}}x>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=u;let U=i.hash;(U.sunLength!==d||U.directionalLength!==_||U.pointLength!==h||U.spotLength!==m||U.rectAreaLength!==x||U.hemiLength!==y||U.numSunShadows!==v||U.numDirectionalShadows!==E||U.numPointShadows!==A||U.numSpotShadows!==g||U.numSpotMaps!==T||U.numLightProbes!==C)&&(i.sun.length=d,i.directional.length=_,i.spot.length=m,i.rectArea.length=x,i.point.length=h,i.hemi.length=y,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+T-L,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=C,U.sunLength=d,U.directionalLength=_,U.pointLength=h,U.spotLength=m,U.rectAreaLength=x,U.hemiLength=y,U.numSunShadows=v,U.numDirectionalShadows=E,U.numPointShadows=A,U.numSpotShadows=g,U.numSpotMaps=T,U.numLightProbes=C,i.version=j2++)}function l(c,f){let p=0,u=0,d=0,v=0,b=0,_=0,h=f.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){let y=c[m];if(y.isSunLight){let E=i.sun[p];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(h),p++}else if(y.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),u++}else if(y.isSpotLight){let E=i.spot[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),v++}else if(y.isRectAreaLight){let E=i.rectArea[b];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),r.identity(),a.copy(y.matrixWorld),a.premultiply(h),r.extractRotation(a),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),b++}else if(y.isPointLight){let E=i.point[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),d++}else if(y.isHemisphereLight){let E=i.hemi[_];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(h),_++}}}return{setup:o,setupView:l,state:i}}function Qb(e){let t=new tN(e),n=[],i=[],s=[];function a(p){f.camera=p,n.length=0,i.length=0,s.length=0}function r(p){p.isLightProbeGrid?s.push(p):n.push(p)}function o(p){i.push(p)}function l(){t.setup(n),s.sort((p,u)=>p.priority-u.priority||p.id-u.id)}function c(p){t.setupView(n,p)}let f={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:f,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function eN(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new Qb(e),t.set(s,[o])):a>=r.length?(o=new Qb(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var nN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,sN=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],aN=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],jb=new we,Dc=new F,L0=new F;function rN(e,t,n){let i=new Ca,s=new qt,a=new qt,r=new Ce,o=new hf,l=new ff,c={},f=n.maxTextureSize,p={[La]:Ln,[Ln]:La,[Mi]:Mi},u=new os({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:nN,fragmentShader:iN}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let v=new Oi;v.setAttribute("position",new ss(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Si(v,u),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mc;let h=this.type;this.render=function(A,g,T){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;this.type===qM&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Mc);let L=e.getRenderTarget(),C=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),I=e.state;I.setBlending(dr),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let k=h!==this.type;k&&g.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(G=>G.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,G=A.length;N<G;N++){let Y=A[N],V=Y.shadow;if(V===void 0){Rt("WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let et=V.getFrameExtents();s.multiply(et),a.copy(V.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(a.x=Math.floor(f/et.x),s.x=a.x*et.x,V.mapSize.x=a.x),s.y>f&&(a.y=Math.floor(f/et.y),s.y=a.y*et.y,V.mapSize.y=a.y));let X=e.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||k===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ho){if(Y.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ii(s.x,s.y,{format:Ua,type:Bi,minFilter:Dn,magFilter:Dn,generateMipmaps:!1}),V.map.texture.name=Y.name+".shadowMap",V.map.depthTexture=new Ps(s.x,s.y,Pi),V.map.depthTexture.name=Y.name+".shadowMapDepth",V.map.depthTexture.format=Os,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=an,V.map.depthTexture.magFilter=an}else Y.isPointLight?(V.map=new Uc(s.x),V.map.depthTexture=new hc(s.x,Ii)):(V.map=new ii(s.x,s.y),V.map.depthTexture=new Ps(s.x,s.y,Ii)),V.map.depthTexture.name=Y.name+".shadowMap",V.map.depthTexture.format=Os,this.type===Mc?(V.map.depthTexture.compareFunction=X?M0:S0,V.map.depthTexture.minFilter=Dn,V.map.depthTexture.magFilter=Dn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=an,V.map.depthTexture.magFilter=an);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let $=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Y.isPointLight!==!0&&V.updateMatrices(Y,T);let tt=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:T.layers;for(let yt=0;yt<$;yt++){let Nt=V.getCamera(yt);if(Y.isPointLight){let W=V.camera,ct=V.matrix,vt=Y.distance||W.far;vt!==W.far&&(W.far=vt,W.updateProjectionMatrix()),Dc.setFromMatrixPosition(Y.matrixWorld),W.position.copy(Dc),L0.copy(W.position),L0.add(sN[yt]),W.up.copy(aN[yt]),W.lookAt(L0),W.updateMatrixWorld(),ct.makeTranslation(-Dc.x,-Dc.y,-Dc.z),jb.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),V._frustum.setFromProjectionMatrix(jb,W.coordinateSystem,W.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)e.setRenderTarget(V.map,yt),e.clear();else{yt===0&&(e.setRenderTarget(V.map),e.clear());let W=V.getViewport(yt);r.set(a.x*W.x,a.y*W.y,a.x*W.z,a.y*W.w),I.viewport(r)}i=V.getFrustum(yt),y(g,T,Nt,Y,tt,this.type)}V.isPointLightShadow!==!0&&this.type===Ho&&m(V,T),V.needsUpdate=!1}h=this.type,_.needsUpdate=!1,e.setRenderTarget(L,C,U)};function m(A,g){let T=t.update(b);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new ii(s.x,s.y,{format:Ua,type:Bi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(g,null,T,u,b,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(g,null,T,d,b,null)}function x(A,g,T,L){let C=null,U=T.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)C=U;else if(C=T.isPointLight===!0?l:o,e.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let I=C.uuid,k=g.uuid,N=c[I];N===void 0&&(N={},c[I]=N);let G=N[k];G===void 0&&(G=C.clone(),N[k]=G,g.addEventListener("dispose",E)),C=G}if(C.visible=g.visible,C.wireframe=g.wireframe,L===Ho?C.side=g.shadowSide!==null?g.shadowSide:g.side:C.side=g.shadowSide!==null?g.shadowSide:p[g.side],C.alphaMap=g.alphaMap,C.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,C.map=g.map,C.clipShadows=g.clipShadows,C.clippingPlanes=g.clippingPlanes,C.clipIntersection=g.clipIntersection,C.displacementMap=g.displacementMap,C.displacementScale=g.displacementScale,C.displacementBias=g.displacementBias,C.wireframeLinewidth=g.wireframeLinewidth,C.linewidth=g.linewidth,T.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let I=e.properties.get(C);I.light=T}return C}function y(A,g,T,L,C,U){if(A.visible===!1)return;if(A.layers.test(C)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&U===Ho)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,A.matrixWorld);let N=t.update(A),G=A.material;if(Array.isArray(G)){let Y=N.groups;for(let V=0,et=Y.length;V<et;V++){let X=Y[V],$=G[X.materialIndex];if($&&$.visible){let tt=x(A,$,L,U);A.onBeforeShadow(e,A,g,T,N,tt,X),e.renderBufferDirect(T,null,N,tt,A,X),A.onAfterShadow(e,A,g,T,N,tt,X)}}}else if(G.visible){let Y=x(A,G,L,U);A.onBeforeShadow(e,A,g,T,N,Y,null),e.renderBufferDirect(T,null,N,Y,A,null),A.onAfterShadow(e,A,g,T,N,Y,null)}}let k=A.children;for(let N=0,G=k.length;N<G;N++)y(k[N],g,T,L,C,U)}function E(A){A.target.removeEventListener("dispose",E);for(let T in c){let L=c[T],C=A.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}function oN(e,t){function n(){let R=!1,K=new Ce,q=null,lt=new Ce(0,0,0,0);return{setMask:function(st){q!==st&&!R&&(e.colorMask(st,st,st,st),q=st)},setLocked:function(st){R=st},setClear:function(st,rt,Tt,Ht,it){it===!0&&(st*=Ht,rt*=Ht,Tt*=Ht),K.set(st,rt,Tt,Ht),lt.equals(K)===!1&&(e.clearColor(st,rt,Tt,Ht),lt.copy(K))},reset:function(){R=!1,q=null,lt.set(-1,0,0,0)}}}function i(){let R=!1,K=!1,q=null,lt=null,st=null;return{setReversed:function(rt){if(K!==rt){let Tt=t.get("EXT_clip_control");rt?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),K=rt;let Ht=st;st=null,this.setClear(Ht)}},getReversed:function(){return K},setTest:function(rt){rt?gt(e.DEPTH_TEST):Bt(e.DEPTH_TEST)},setMask:function(rt){q!==rt&&!R&&(e.depthMask(rt),q=rt)},setFunc:function(rt){if(K&&(rt=Ab[rt]),lt!==rt){switch(rt){case Wh:e.depthFunc(e.NEVER);break;case qh:e.depthFunc(e.ALWAYS);break;case Yh:e.depthFunc(e.LESS);break;case Do:e.depthFunc(e.LEQUAL);break;case Zh:e.depthFunc(e.EQUAL);break;case Jh:e.depthFunc(e.GEQUAL);break;case Kh:e.depthFunc(e.GREATER);break;case Qh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}lt=rt}},setLocked:function(rt){R=rt},setClear:function(rt){st!==rt&&(st=rt,K&&(rt=1-rt),e.clearDepth(rt))},reset:function(){R=!1,q=null,lt=null,st=null,K=!1}}}function s(){let R=!1,K=null,q=null,lt=null,st=null,rt=null,Tt=null,Ht=null,it=null;return{setTest:function(At){R||(At?gt(e.STENCIL_TEST):Bt(e.STENCIL_TEST))},setMask:function(At){K!==At&&!R&&(e.stencilMask(At),K=At)},setFunc:function(At,Ft,pt){(q!==At||lt!==Ft||st!==pt)&&(e.stencilFunc(At,Ft,pt),q=At,lt=Ft,st=pt)},setOp:function(At,Ft,pt){(rt!==At||Tt!==Ft||Ht!==pt)&&(e.stencilOp(At,Ft,pt),rt=At,Tt=Ft,Ht=pt)},setLocked:function(At){R=At},setClear:function(At){it!==At&&(e.clearStencil(At),it=At)},reset:function(){R=!1,K=null,q=null,lt=null,st=null,rt=null,Tt=null,Ht=null,it=null}}}let a=new n,r=new i,o=new s,l={},c=new WeakMap,f={},p={},u={},d=new WeakMap,v=[],b=null,_=!1,h=null,m=null,x=null,y=null,E=null,A=null,g=null,T=new kt(0,0,0),L=0,C=!1,U=null,I=null,k=null,N=null,G=null,Y=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,et=0,X=e.getParameter(e.VERSION);X.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=et>=1):X.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=et>=2);let $=null,tt={},yt=e.getParameter(e.SCISSOR_BOX),Nt=e.getParameter(e.VIEWPORT),W=new Ce().fromArray(yt),ct=new Ce().fromArray(Nt);function vt(R,K,q,lt){let st=new Uint8Array(4),rt=e.createTexture();e.bindTexture(R,rt),e.texParameteri(R,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(R,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Tt=0;Tt<q;Tt++)R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY?e.texImage3D(K,0,e.RGBA,1,1,lt,0,e.RGBA,e.UNSIGNED_BYTE,st):e.texImage2D(K+Tt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,st);return rt}let Et={};Et[e.TEXTURE_2D]=vt(e.TEXTURE_2D,e.TEXTURE_2D,1),Et[e.TEXTURE_CUBE_MAP]=vt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[e.TEXTURE_2D_ARRAY]=vt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Et[e.TEXTURE_3D]=vt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),gt(e.DEPTH_TEST),r.setFunc(Do),Un(!1),Ne($g),gt(e.CULL_FACE),rn(dr);function gt(R){f[R]!==!0&&(e.enable(R),f[R]=!0)}function Bt(R){f[R]!==!1&&(e.disable(R),f[R]=!1)}function Be(R,K){return u[R]!==K?(e.bindFramebuffer(R,K),u[R]=K,R===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=K),R===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=K),!0):!1}function Ct(R,K){let q=v,lt=!1;if(R){q=d.get(K),q===void 0&&(q=[],d.set(K,q));let st=R.textures;if(q.length!==st.length||q[0]!==e.COLOR_ATTACHMENT0){for(let rt=0,Tt=st.length;rt<Tt;rt++)q[rt]=e.COLOR_ATTACHMENT0+rt;q.length=st.length,lt=!0}}else q[0]!==e.BACK&&(q[0]=e.BACK,lt=!0);lt&&e.drawBuffers(q)}function re(R){return b!==R?(e.useProgram(R),b=R,!0):!1}let de={[pr]:e.FUNC_ADD,[ZM]:e.FUNC_SUBTRACT,[JM]:e.FUNC_REVERSE_SUBTRACT};de[KM]=e.MIN,de[QM]=e.MAX;let Yt={[jM]:e.ZERO,[$M]:e.ONE,[tb]:e.SRC_COLOR,[i0]:e.SRC_ALPHA,[rb]:e.SRC_ALPHA_SATURATE,[sb]:e.DST_COLOR,[nb]:e.DST_ALPHA,[eb]:e.ONE_MINUS_SRC_COLOR,[s0]:e.ONE_MINUS_SRC_ALPHA,[ab]:e.ONE_MINUS_DST_COLOR,[ib]:e.ONE_MINUS_DST_ALPHA,[ob]:e.CONSTANT_COLOR,[lb]:e.ONE_MINUS_CONSTANT_COLOR,[cb]:e.CONSTANT_ALPHA,[ub]:e.ONE_MINUS_CONSTANT_ALPHA};function rn(R,K,q,lt,st,rt,Tt,Ht,it,At){if(R===dr){_===!0&&(Bt(e.BLEND),_=!1);return}if(_===!1&&(gt(e.BLEND),_=!0),R!==YM){if(R!==h||At!==C){if((m!==pr||E!==pr)&&(e.blendEquation(e.FUNC_ADD),m=pr,E=pr),At)switch(R){case Go:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case t0:e.blendFunc(e.ONE,e.ONE);break;case e0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case n0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Lt("WebGLState: Invalid blending: ",R);break}else switch(R){case Go:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case t0:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case e0:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case n0:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",R);break}x=null,y=null,A=null,g=null,T.set(0,0,0),L=0,h=R,C=At}return}st=st||K,rt=rt||q,Tt=Tt||lt,(K!==m||st!==E)&&(e.blendEquationSeparate(de[K],de[st]),m=K,E=st),(q!==x||lt!==y||rt!==A||Tt!==g)&&(e.blendFuncSeparate(Yt[q],Yt[lt],Yt[rt],Yt[Tt]),x=q,y=lt,A=rt,g=Tt),(Ht.equals(T)===!1||it!==L)&&(e.blendColor(Ht.r,Ht.g,Ht.b,it),T.copy(Ht),L=it),h=R,C=!1}function ke(R,K){R.side===Mi?Bt(e.CULL_FACE):gt(e.CULL_FACE);let q=R.side===Ln;K&&(q=!q),Un(q),R.blending===Go&&R.transparent===!1?rn(dr):rn(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),r.setFunc(R.depthFunc),r.setTest(R.depthTest),r.setMask(R.depthWrite),a.setMask(R.colorWrite);let lt=R.stencilWrite;o.setTest(lt),lt&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ke(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?gt(e.SAMPLE_ALPHA_TO_COVERAGE):Bt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Un(R){U!==R&&(R?e.frontFace(e.CW):e.frontFace(e.CCW),U=R)}function Ne(R){R!==XM?(gt(e.CULL_FACE),R!==I&&(R===$g?e.cullFace(e.BACK):R===WM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Bt(e.CULL_FACE),I=R}function Fi(R){R!==k&&(V&&e.lineWidth(R),k=R)}function Ke(R,K,q){R?(gt(e.POLYGON_OFFSET_FILL),(N!==K||G!==q)&&(N=K,G=q,r.getReversed()&&(K=-K,q=-q),e.polygonOffset(K,q))):Bt(e.POLYGON_OFFSET_FILL)}function ai(R){R?gt(e.SCISSOR_TEST):Bt(e.SCISSOR_TEST)}function ri(R){R===void 0&&(R=e.TEXTURE0+Y-1),$!==R&&(e.activeTexture(R),$=R)}function oi(R,K,q){q===void 0&&($===null?q=e.TEXTURE0+Y-1:q=$);let lt=tt[q];lt===void 0&&(lt={type:void 0,texture:void 0},tt[q]=lt),(lt.type!==R||lt.texture!==K)&&($!==q&&(e.activeTexture(q),$=q),e.bindTexture(R,K||Et[R]),lt.type=R,lt.texture=K)}function O(){let R=tt[$];R!==void 0&&R.type!==void 0&&(e.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function li(){try{e.compressedTexImage2D(...arguments)}catch(R){Lt("WebGLState:",R)}}function be(){try{e.compressedTexImage3D(...arguments)}catch(R){Lt("WebGLState:",R)}}function Te(){try{e.texSubImage2D(...arguments)}catch(R){Lt("WebGLState:",R)}}function dt(){try{e.texSubImage3D(...arguments)}catch(R){Lt("WebGLState:",R)}}function Xe(){try{e.compressedTexSubImage2D(...arguments)}catch(R){Lt("WebGLState:",R)}}function wt(){try{e.compressedTexSubImage3D(...arguments)}catch(R){Lt("WebGLState:",R)}}function Ot(){try{e.texStorage2D(...arguments)}catch(R){Lt("WebGLState:",R)}}function w(){try{e.texStorage3D(...arguments)}catch(R){Lt("WebGLState:",R)}}function S(){try{e.texImage2D(...arguments)}catch(R){Lt("WebGLState:",R)}}function B(){try{e.texImage3D(...arguments)}catch(R){Lt("WebGLState:",R)}}function nt(R){return p[R]!==void 0?p[R]:e.getParameter(R)}function j(R,K){p[R]!==K&&(e.pixelStorei(R,K),p[R]=K)}function at(R){W.equals(R)===!1&&(e.scissor(R.x,R.y,R.z,R.w),W.copy(R))}function ht(R){ct.equals(R)===!1&&(e.viewport(R.x,R.y,R.z,R.w),ct.copy(R))}function Z(R,K){let q=c.get(K);q===void 0&&(q=new WeakMap,c.set(K,q));let lt=q.get(R);lt===void 0&&(lt=e.getUniformBlockIndex(K,R.name),e.uniformBlockBinding(K,lt,lt),q.set(R,lt))}function J(R,K,q){let st=c.get(K).get(R);l[st]!==q&&(e.bindBufferBase(e.UNIFORM_BUFFER,st,q),l[st]=q)}function ot(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),f={},p={},$=null,tt={},u={},l={},d=new WeakMap,v=[],b=null,_=!1,h=null,m=null,x=null,y=null,E=null,A=null,g=null,T=new kt(0,0,0),L=0,C=!1,U=null,I=null,k=null,N=null,G=null,W.set(0,0,e.canvas.width,e.canvas.height),ct.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:gt,disable:Bt,bindFramebuffer:Be,drawBuffers:Ct,useProgram:re,setBlending:rn,setMaterial:ke,setFlipSided:Un,setCullFace:Ne,setLineWidth:Fi,setPolygonOffset:Ke,setScissorTest:ai,activeTexture:ri,bindTexture:oi,unbindTexture:O,compressedTexImage2D:li,compressedTexImage3D:be,texImage2D:S,texImage3D:B,pixelStorei:j,getParameter:nt,updateUBOMapping:Z,uniformBlockBinding:J,texStorage2D:Ot,texStorage3D:w,texSubImage2D:Te,texSubImage3D:dt,compressedTexSubImage2D:Xe,compressedTexSubImage3D:wt,scissor:at,viewport:ht,reset:ot}}function lN(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qt,f=new WeakMap,p=new Set,u,d=new WeakMap,v=new Set,b=new FinalizationRegistry(w=>v.delete(w)),_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(w,S){return _?new OffscreenCanvas(w,S):sc("canvas")}function m(w,S,B){let nt=1,j=Ot(w);if((j.width>B||j.height>B)&&(nt=B/Math.max(j.width,j.height)),nt<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let at=Math.floor(nt*j.width),ht=Math.floor(nt*j.height);u===void 0&&(u=h(at,ht));let Z=S?h(at,ht):u;return Z.width=at,Z.height=ht,Z.getContext("2d").drawImage(w,0,0,at,ht),Rt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+at+"x"+ht+")."),Z}else return"data"in w&&Rt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function x(w){return w.generateMipmaps}function y(w){e.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?e.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(w,S,B,nt,j,at=!1){if(w!==null){if(e[w]!==void 0)return e[w];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ht;nt&&(ht=t.get("EXT_texture_norm16"),ht||Rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=S;if(S===e.RED&&(B===e.FLOAT&&(Z=e.R32F),B===e.HALF_FLOAT&&(Z=e.R16F),B===e.UNSIGNED_BYTE&&(Z=e.R8),B===e.UNSIGNED_SHORT&&ht&&(Z=ht.R16_EXT),B===e.SHORT&&ht&&(Z=ht.R16_SNORM_EXT)),S===e.RED_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.R8UI),B===e.UNSIGNED_SHORT&&(Z=e.R16UI),B===e.UNSIGNED_INT&&(Z=e.R32UI),B===e.BYTE&&(Z=e.R8I),B===e.SHORT&&(Z=e.R16I),B===e.INT&&(Z=e.R32I)),S===e.RG&&(B===e.FLOAT&&(Z=e.RG32F),B===e.HALF_FLOAT&&(Z=e.RG16F),B===e.UNSIGNED_BYTE&&(Z=e.RG8),B===e.UNSIGNED_SHORT&&ht&&(Z=ht.RG16_EXT),B===e.SHORT&&ht&&(Z=ht.RG16_SNORM_EXT)),S===e.RG_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.RG8UI),B===e.UNSIGNED_SHORT&&(Z=e.RG16UI),B===e.UNSIGNED_INT&&(Z=e.RG32UI),B===e.BYTE&&(Z=e.RG8I),B===e.SHORT&&(Z=e.RG16I),B===e.INT&&(Z=e.RG32I)),S===e.RGB_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.RGB8UI),B===e.UNSIGNED_SHORT&&(Z=e.RGB16UI),B===e.UNSIGNED_INT&&(Z=e.RGB32UI),B===e.BYTE&&(Z=e.RGB8I),B===e.SHORT&&(Z=e.RGB16I),B===e.INT&&(Z=e.RGB32I)),S===e.RGBA_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.RGBA8UI),B===e.UNSIGNED_SHORT&&(Z=e.RGBA16UI),B===e.UNSIGNED_INT&&(Z=e.RGBA32UI),B===e.BYTE&&(Z=e.RGBA8I),B===e.SHORT&&(Z=e.RGBA16I),B===e.INT&&(Z=e.RGBA32I)),S===e.RGB&&(B===e.UNSIGNED_SHORT&&ht&&(Z=ht.RGB16_EXT),B===e.SHORT&&ht&&(Z=ht.RGB16_SNORM_EXT),B===e.UNSIGNED_INT_5_9_9_9_REV&&(Z=e.RGB9_E5),B===e.UNSIGNED_INT_10F_11F_11F_REV&&(Z=e.R11F_G11F_B10F)),S===e.RGBA){let J=at?ic:Qt.getTransfer(j);B===e.FLOAT&&(Z=e.RGBA32F),B===e.HALF_FLOAT&&(Z=e.RGBA16F),B===e.UNSIGNED_BYTE&&(Z=J===ae?e.SRGB8_ALPHA8:e.RGBA8),B===e.UNSIGNED_SHORT&&ht&&(Z=ht.RGBA16_EXT),B===e.SHORT&&ht&&(Z=ht.RGBA16_SNORM_EXT),B===e.UNSIGNED_SHORT_4_4_4_4&&(Z=e.RGBA4),B===e.UNSIGNED_SHORT_5_5_5_1&&(Z=e.RGB5_A1)}return(Z===e.R16F||Z===e.R32F||Z===e.RG16F||Z===e.RG32F||Z===e.RGBA16F||Z===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function g(w,S){let B;return w?S===null||S===Ii||S===gr?B=e.DEPTH24_STENCIL8:S===Pi?B=e.DEPTH32F_STENCIL8:S===ko&&(B=e.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ii||S===gr?B=e.DEPTH_COMPONENT24:S===Pi?B=e.DEPTH_COMPONENT32F:S===ko&&(B=e.DEPTH_COMPONENT16),B}function T(w,S){return x(w)===!0||w.isFramebufferTexture&&w.minFilter!==an&&w.minFilter!==Dn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function L(w){let S=new WeakRef(w);i.get(w).__ref=S,v.add(S),b.register(w,S,S)}function C(w){let S=i.get(w).__ref;S!==void 0&&(v.delete(S),b.unregister(S))}function U(w){k(w.target)}function I(w){N(w.target)}function k(w){w.removeEventListener("dispose",U),C(w),Y(w),w.isVideoTexture&&f.delete(w),w.isHTMLTexture&&p.delete(w)}function N(w){w.removeEventListener("dispose",I),C(w),et(w)}function G(){for(let w of v){let S=w.deref();S!==void 0&&(S.isRenderTarget===!0?N(S):k(S))}v.clear(),p.clear()}function Y(w){let S=i.get(w);if(S.__webglInit===void 0)return;let B=w.source,nt=d.get(B);if(nt){let j=nt[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&V(w),Object.keys(nt).length===0&&d.delete(B)}i.remove(w)}function V(w){let S=i.get(w);e.deleteTexture(S.__webglTexture);let B=w.source,nt=d.get(B);delete nt[S.__cacheKey],r.memory.textures--}function et(w){let S=i.get(w);S.__depthDisposeCallback&&S.__depthDisposeCallback();let B=w.depthTexture;if(B&&B.renderTarget===w&&k(B),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let at=0;at<S.__webglFramebuffer[j].length;at++)e.deleteFramebuffer(S.__webglFramebuffer[j][at]);else e.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)e.deleteFramebuffer(S.__webglFramebuffer[j]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let nt=w.textures;for(let j=0,at=nt.length;j<at;j++){let ht=i.get(nt[j]);ht.__webglTexture&&(e.deleteTexture(ht.__webglTexture),r.memory.textures--),i.remove(nt[j])}i.remove(w)}let X=0;function $(){X=0}function tt(){return X}function yt(w){X=w}function Nt(){let w=X;return w>=s.maxTextures&&Rt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,w}function W(w){let S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.mipmapsAutoUpdate),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function ct(w,S){let B=i.get(w);if(w.isVideoTexture&&Xe(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){let nt=w.image;if(nt===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{ke(B,w,S);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,B.__webglTexture,e.TEXTURE0+S)}function vt(w,S){let B=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){ke(B,w,S);return}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,B.__webglTexture,e.TEXTURE0+S)}function Et(w,S){let B=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){ke(B,w,S);return}n.bindTexture(e.TEXTURE_3D,B.__webglTexture,e.TEXTURE0+S)}function gt(w,S){let B=i.get(w);if(w.version>0&&B.__version!==w.version){Un(B,w,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture,e.TEXTURE0+S)}let Bt={[jh]:e.REPEAT,[ns]:e.CLAMP_TO_EDGE,[$h]:e.MIRRORED_REPEAT},Be={[an]:e.NEAREST,[db]:e.NEAREST_MIPMAP_NEAREST,[bc]:e.NEAREST_MIPMAP_LINEAR,[Dn]:e.LINEAR,[wf]:e.LINEAR_MIPMAP_NEAREST,[Bs]:e.LINEAR_MIPMAP_LINEAR},Ct={[_b]:e.NEVER,[b0]:e.ALWAYS,[vb]:e.LESS,[S0]:e.LEQUAL,[yb]:e.EQUAL,[M0]:e.GEQUAL,[xb]:e.GREATER,[Sb]:e.NOTEQUAL};function re(w,S){if(S.type===Pi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Dn||S.magFilter===wf||S.magFilter===bc||S.magFilter===Bs||S.minFilter===Dn||S.minFilter===wf||S.minFilter===bc||S.minFilter===Bs)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(w,e.TEXTURE_WRAP_S,Bt[S.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,Bt[S.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,Bt[S.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,Be[S.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,Be[S.minFilter]),S.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,Ct[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===an||S.minFilter!==bc&&S.minFilter!==Bs||S.type===Pi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");e.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function de(w,S){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",U),L(S));let nt=S.source,j=d.get(nt);j===void 0&&(j={},d.set(nt,j));let at=W(S);if(at!==w.__cacheKey){j[at]===void 0&&(j[at]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,B=!0),j[at].usedTimes++;let ht=j[w.__cacheKey];ht!==void 0&&(j[w.__cacheKey].usedTimes--,ht.usedTimes===0&&V(S)),w.__cacheKey=at,w.__webglTexture=j[at].texture}return B}function Yt(w,S,B){return Math.floor(Math.floor(w/B)/S)}function rn(w,S,B,nt){let at=w.updateRanges;if(at.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,B,nt,S.data);else{at.sort((R,K)=>R.start-K.start);let ht=0;for(let R=1;R<at.length;R++){let K=at[ht],q=at[R],lt=K.start+K.count,st=Yt(q.start,S.width,4),rt=Yt(K.start,S.width,4);q.start<=lt+1&&st===rt&&Yt(q.start+q.count-1,S.width,4)===st?K.count=Math.max(K.count,q.start+q.count-K.start):(++ht,at[ht]=q)}at.length=ht+1;let Z=n.getParameter(e.UNPACK_ROW_LENGTH),J=n.getParameter(e.UNPACK_SKIP_PIXELS),ot=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let R=0,K=at.length;R<K;R++){let q=at[R],lt=Math.floor(q.start/4),st=Math.ceil(q.count/4),rt=lt%S.width,Tt=Math.floor(lt/S.width),Ht=st,it=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,rt),n.pixelStorei(e.UNPACK_SKIP_ROWS,Tt),n.texSubImage2D(e.TEXTURE_2D,0,rt,Tt,Ht,it,B,nt,S.data)}w.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,Z),n.pixelStorei(e.UNPACK_SKIP_PIXELS,J),n.pixelStorei(e.UNPACK_SKIP_ROWS,ot)}}function ke(w,S,B){let nt=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(nt=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(nt=e.TEXTURE_3D);let j=de(w,S),at=S.source;n.bindTexture(nt,w.__webglTexture,e.TEXTURE0+B);let ht=i.get(at);if(at.version!==ht.__version||j===!0){if(n.activeTexture(e.TEXTURE0+B),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let it=Qt.getPrimaries(Qt.workingColorSpace),At=S.colorSpace===Fs?null:Qt.getPrimaries(S.colorSpace),Ft=S.colorSpace===Fs||it===At?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft)}n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment);let J=m(S.image,!1,s.maxTextureSize);J=wt(S,J);let ot=a.convert(S.format,S.colorSpace),R=a.convert(S.type),K=A(S.internalFormat,ot,R,S.normalized,S.colorSpace,S.isVideoTexture);re(nt,S);let q,lt=S.mipmaps,st=S.isVideoTexture!==!0,rt=ht.__version===void 0||j===!0,Tt=at.dataReady,Ht=T(S,J);if(S.isDepthTexture)K=g(S.format===zs,S.type),rt&&(st?n.texStorage2D(e.TEXTURE_2D,1,K,J.width,J.height):n.texImage2D(e.TEXTURE_2D,0,K,J.width,J.height,0,ot,R,null));else if(S.isDataTexture)if(lt.length>0){st&&rt&&n.texStorage2D(e.TEXTURE_2D,Ht,K,lt[0].width,lt[0].height);for(let it=0,At=lt.length;it<At;it++)q=lt[it],st?Tt&&n.texSubImage2D(e.TEXTURE_2D,it,0,0,q.width,q.height,ot,R,q.data):n.texImage2D(e.TEXTURE_2D,it,K,q.width,q.height,0,ot,R,q.data);S.generateMipmaps=!1}else st?(rt&&n.texStorage2D(e.TEXTURE_2D,Ht,K,J.width,J.height),Tt&&rn(S,J,ot,R)):n.texImage2D(e.TEXTURE_2D,0,K,J.width,J.height,0,ot,R,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){st&&rt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Ht,K,lt[0].width,lt[0].height,J.depth);for(let it=0,At=lt.length;it<At;it++)if(q=lt[it],S.format!==zi)if(ot!==null)if(st){if(Tt)if(S.layerUpdates.size>0){let Ft=N0(q.width,q.height,S.format,S.type);for(let pt of S.layerUpdates){let oe=q.data.subarray(pt*Ft/q.data.BYTES_PER_ELEMENT,(pt+1)*Ft/q.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,pt,q.width,q.height,1,ot,oe)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,0,q.width,q.height,J.depth,ot,q.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,it,K,q.width,q.height,J.depth,0,q.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?Tt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,0,q.width,q.height,J.depth,ot,R,q.data):n.texImage3D(e.TEXTURE_2D_ARRAY,it,K,q.width,q.height,J.depth,0,ot,R,q.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{st&&rt&&n.texStorage2D(e.TEXTURE_2D,Ht,K,lt[0].width,lt[0].height);for(let it=0,At=lt.length;it<At;it++)q=lt[it],S.format!==zi?ot!==null?st?Tt&&n.compressedTexSubImage2D(e.TEXTURE_2D,it,0,0,q.width,q.height,ot,q.data):n.compressedTexImage2D(e.TEXTURE_2D,it,K,q.width,q.height,0,q.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?Tt&&n.texSubImage2D(e.TEXTURE_2D,it,0,0,q.width,q.height,ot,R,q.data):n.texImage2D(e.TEXTURE_2D,it,K,q.width,q.height,0,ot,R,q.data)}else if(S.isDataArrayTexture)if(st){if(rt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Ht,K,J.width,J.height,J.depth),Tt)if(S.layerUpdates.size>0){let it=N0(J.width,J.height,S.format,S.type);for(let At of S.layerUpdates){let Ft=J.data.subarray(At*it/J.data.BYTES_PER_ELEMENT,(At+1)*it/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,At,J.width,J.height,1,ot,R,Ft)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ot,R,J.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,K,J.width,J.height,J.depth,0,ot,R,J.data);else if(S.isData3DTexture)st?(rt&&n.texStorage3D(e.TEXTURE_3D,Ht,K,J.width,J.height,J.depth),Tt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ot,R,J.data)):n.texImage3D(e.TEXTURE_3D,0,K,J.width,J.height,J.depth,0,ot,R,J.data);else if(S.isFramebufferTexture){if(rt)if(st)n.texStorage2D(e.TEXTURE_2D,Ht,K,J.width,J.height);else{let it=J.width,At=J.height;for(let Ft=0;Ft<Ht;Ft++)n.texImage2D(e.TEXTURE_2D,Ft,K,it,At,0,ot,R,null),it>>=1,At>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in e){let it=e.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),J.parentNode!==it){it.appendChild(J),p.add(S),it.onpaint=At=>{let Ft=At.changedElements;for(let pt of p)Ft.includes(pt.image)&&(pt.needsUpdate=!0)},it.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,J);else{let Ft=e.RGBA,pt=e.RGBA,oe=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Ft,pt,oe,J)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(lt.length>0){if(st&&rt){let it=Ot(lt[0]);n.texStorage2D(e.TEXTURE_2D,Ht,K,it.width,it.height)}for(let it=0,At=lt.length;it<At;it++)q=lt[it],st?Tt&&n.texSubImage2D(e.TEXTURE_2D,it,0,0,ot,R,q):n.texImage2D(e.TEXTURE_2D,it,K,ot,R,q);S.generateMipmaps=!1}else if(st){if(rt){let it=Ot(J);n.texStorage2D(e.TEXTURE_2D,Ht,K,it.width,it.height)}Tt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ot,R,J)}else n.texImage2D(e.TEXTURE_2D,0,K,ot,R,J);x(S)&&S.mipmapsAutoUpdate===!0&&y(nt),ht.__version=at.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Un(w,S,B){if(S.image.length!==6)return;let nt=de(w,S),j=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+B);let at=i.get(j);if(j.version!==at.__version||nt===!0){n.activeTexture(e.TEXTURE0+B);let ht=Qt.getPrimaries(Qt.workingColorSpace),Z=S.colorSpace===Fs?null:Qt.getPrimaries(S.colorSpace),J=S.colorSpace===Fs||ht===Z?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ot=S.isCompressedTexture||S.image[0].isCompressedTexture,R=S.image[0]&&S.image[0].isDataTexture,K=[];for(let pt=0;pt<6;pt++)!ot&&!R?K[pt]=m(S.image[pt],!0,s.maxCubemapSize):K[pt]=R?S.image[pt].image:S.image[pt],K[pt]=wt(S,K[pt]);let q=K[0],lt=a.convert(S.format,S.colorSpace),st=a.convert(S.type),rt=A(S.internalFormat,lt,st,S.normalized,S.colorSpace),Tt=S.isVideoTexture!==!0,Ht=at.__version===void 0||nt===!0,it=j.dataReady,At=T(S,q);re(e.TEXTURE_CUBE_MAP,S);let Ft;if(S.isDepthTexture){if(rt=g(S.format===zs,S.type),Ht)if(Tt)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,rt,q.width,q.height);else for(let pt=0;pt<6;pt++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,rt,q.width,q.height,0,lt,st,null)}else if(ot){Tt&&Ht&&n.texStorage2D(e.TEXTURE_CUBE_MAP,At,rt,q.width,q.height);for(let pt=0;pt<6;pt++){Ft=K[pt].mipmaps;for(let oe=0;oe<Ft.length;oe++){let Qe=Ft[oe];S.format!==zi?lt!==null?Tt?it&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,oe,0,0,Qe.width,Qe.height,lt,Qe.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,oe,rt,Qe.width,Qe.height,0,Qe.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,oe,0,0,Qe.width,Qe.height,lt,st,Qe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,oe,rt,Qe.width,Qe.height,0,lt,st,Qe.data)}}}else{if(Ft=S.mipmaps,Tt&&Ht){Ft.length>0&&At++;let pt=Ot(K[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,At,rt,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(R){Tt?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,K[pt].width,K[pt].height,lt,st,K[pt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,rt,K[pt].width,K[pt].height,0,lt,st,K[pt].data);for(let oe=0;oe<Ft.length;oe++){let Hs=Ft[oe].image[pt].image;Tt?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,oe+1,0,0,Hs.width,Hs.height,lt,st,Hs.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,oe+1,rt,Hs.width,Hs.height,0,lt,st,Hs.data)}}else{Tt?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,lt,st,K[pt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,rt,lt,st,K[pt]);for(let oe=0;oe<Ft.length;oe++){let Qe=Ft[oe];Tt?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,oe+1,0,0,lt,st,Qe.image[pt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,oe+1,rt,lt,st,Qe.image[pt])}}}x(S)&&S.mipmapsAutoUpdate===!0&&y(e.TEXTURE_CUBE_MAP),at.__version=j.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Ne(w,S,B,nt,j,at){let ht=a.convert(B.format,B.colorSpace),Z=a.convert(B.type),J=A(B.internalFormat,ht,Z,B.normalized,B.colorSpace),ot=i.get(S),R=i.get(B);if(R.__renderTarget=S,!ot.__hasExternalTextures){let K=Math.max(1,S.width>>at),q=Math.max(1,S.height>>at);j===e.TEXTURE_3D||j===e.TEXTURE_2D_ARRAY?n.texImage3D(j,at,J,K,q,S.depth,0,ht,Z,null):n.texImage2D(j,at,J,K,q,0,ht,Z,null)}n.bindFramebuffer(e.FRAMEBUFFER,w),dt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,nt,j,R.__webglTexture,0,Te(S)):(j===e.TEXTURE_2D||j>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,nt,j,R.__webglTexture,at),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Fi(w,S,B){if(e.bindRenderbuffer(e.RENDERBUFFER,w),S.depthBuffer){let nt=S.depthTexture,j=nt&&nt.isDepthTexture?nt.type:null,at=g(S.stencilBuffer,j),ht=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;dt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Te(S),at,S.width,S.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,Te(S),at,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,at,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ht,e.RENDERBUFFER,w)}else{let nt=S.textures;for(let j=0;j<nt.length;j++){let at=nt[j],ht=a.convert(at.format,at.colorSpace),Z=a.convert(at.type),J=A(at.internalFormat,ht,Z,at.normalized,at.colorSpace);dt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Te(S),J,S.width,S.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,Te(S),J,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,J,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ke(w,S,B){let nt=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(S.depthTexture);j.__renderTarget=S;let at=nt?S.depthTexture.image[0]:S.depthTexture.image;(!j.__webglTexture||at.width!==S.width||at.height!==S.height)&&(at.width=S.width,at.height=S.height,S.depthTexture.needsUpdate=!0),nt?gt(S.depthTexture,0):ct(S.depthTexture,0);let ht=j.__webglTexture,Z=Te(S),J=nt?e.TEXTURE_CUBE_MAP_POSITIVE_X+B:e.TEXTURE_2D,ot=S.depthTexture.format===zs?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(S.depthTexture.format===Os)dt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ot,J,ht,0,Z):e.framebufferTexture2D(e.FRAMEBUFFER,ot,J,ht,0);else if(S.depthTexture.format===zs)dt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ot,J,ht,0,Z):e.framebufferTexture2D(e.FRAMEBUFFER,ot,J,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ai(w){let S=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){let nt=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),nt){let j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,nt.removeEventListener("dispose",j)};nt.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=nt}if(w.depthTexture&&!S.__autoAllocateDepthBuffer)if(B)for(let nt=0;nt<6;nt++)Ke(S.__webglFramebuffer[nt],w,nt);else w.texture.mipmaps.length>0?Ke(S.__webglFramebuffer[0],w,0):Ke(S.__webglFramebuffer,w,0);else if(B){S.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[nt]),S.__webglDepthbuffer[nt]===void 0)S.__webglDepthbuffer[nt]=e.createRenderbuffer(),Fi(S.__webglDepthbuffer[nt],w,!1);else{let j=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=S.__webglDepthbuffer[nt];e.bindRenderbuffer(e.RENDERBUFFER,at),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,at)}}else if(w.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),Fi(S.__webglDepthbuffer,w,!1);else{let j=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,at),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,at)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ri(w,S,B){let nt=i.get(w);S!==void 0&&Ne(nt.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),B!==void 0&&ai(w)}function oi(w){let S=w.texture,B=i.get(w),nt=i.get(S);w.addEventListener("dispose",I),L(w);let j=w.textures,at=w.isWebGLCubeRenderTarget===!0,ht=j.length>1;if(ht||(nt.__webglTexture===void 0&&(nt.__webglTexture=e.createTexture()),nt.__version=S.version,r.memory.textures++),at){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(S.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let J=0;J<S.mipmaps.length;J++)B.__webglFramebuffer[Z][J]=e.createFramebuffer()}else B.__webglFramebuffer[Z]=e.createFramebuffer()}else{if(S.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<S.mipmaps.length;Z++)B.__webglFramebuffer[Z]=e.createFramebuffer()}else B.__webglFramebuffer=e.createFramebuffer();if(ht)for(let Z=0,J=j.length;Z<J;Z++){let ot=i.get(j[Z]);ot.__webglTexture===void 0&&(ot.__webglTexture=e.createTexture(),r.memory.textures++)}if(w.samples>0&&dt(w)===!1){B.__webglMultisampledFramebuffer=e.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<j.length;Z++){let J=j[Z];B.__webglColorRenderbuffer[Z]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);let ot=a.convert(J.format,J.colorSpace),R=a.convert(J.type),K=A(J.internalFormat,ot,R,J.normalized,J.colorSpace,w.isXRRenderTarget===!0),q=Te(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,q,K,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Z,e.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=e.createRenderbuffer(),Fi(B.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(at){n.bindTexture(e.TEXTURE_CUBE_MAP,nt.__webglTexture),re(e.TEXTURE_CUBE_MAP,S);for(let Z=0;Z<6;Z++)if(S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)Ne(B.__webglFramebuffer[Z][J],w,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else Ne(B.__webglFramebuffer[Z],w,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);x(S)?y(e.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),n.unbindTexture()}else if(ht){for(let Z=0,J=j.length;Z<J;Z++){let ot=j[Z],R=i.get(ot),K=e.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(K=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(K,R.__webglTexture),re(K,ot),Ne(B.__webglFramebuffer,w,ot,e.COLOR_ATTACHMENT0+Z,K,0),x(ot)&&y(K)}n.unbindTexture()}else{let Z=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Z=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Z,nt.__webglTexture),re(Z,S),S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)Ne(B.__webglFramebuffer[J],w,S,e.COLOR_ATTACHMENT0,Z,J);else Ne(B.__webglFramebuffer,w,S,e.COLOR_ATTACHMENT0,Z,0);x(S)?y(Z):S.mipmaps.length>0&&e.texParameteri(Z,e.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),n.unbindTexture()}w.depthBuffer&&ai(w)}function O(w){let S=w.textures;for(let B=0,nt=S.length;B<nt;B++){let j=S[B];if(x(j)&&j.mipmapsAutoUpdate===!0){let at=E(w),ht=i.get(j).__webglTexture;n.bindTexture(at,ht),y(at),n.unbindTexture()}}}let li=[];function be(w){if(w.samples>0){if(dt(w)===!1){let S=w.textures,B=w.width,nt=w.height,j=e.COLOR_BUFFER_BIT,at=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ht=i.get(w),Z=S.length>1;if(Z)for(let ot=0;ot<S.length;ot++)n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let ot=0;ot<S.length;ot++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=e.STENCIL_BUFFER_BIT)),Z){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ht.__webglColorRenderbuffer[ot]);let R=i.get(S[ot]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,R,0)}e.blitFramebuffer(0,0,B,nt,0,0,B,nt,j,e.NEAREST),l===!0&&(li.length=0,li.push(e.COLOR_ATTACHMENT0+ot),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&li.push(at),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,li))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Z)for(let ot=0;ot<S.length;ot++){n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,ht.__webglColorRenderbuffer[ot]);let R=i.get(S[ot]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,R,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let S=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function Te(w){return Math.min(s.maxSamples,w.samples)}function dt(w){let S=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Xe(w){let S=r.render.frame;f.get(w)!==S&&(f.set(w,S),w.update())}function wt(w,S){let B=w.colorSpace,nt=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==nc&&B!==Fs&&(Qt.getTransfer(B)===ae?(nt!==zi||j!==Vn)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",B)),S}function Ot(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Nt,this.resetTextureUnits=$,this.getTextureUnits=tt,this.setTextureUnits=yt,this.setTexture2D=ct,this.setTexture2DArray=vt,this.setTexture3D=Et,this.setTextureCube=gt,this.rebindTextures=ri,this.setupRenderTarget=oi,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=ai,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=dt,this.dispose=G}function cN(e,t){function n(i,s=Fs){let a,r=Qt.getTransfer(s);if(i===Vn)return e.UNSIGNED_BYTE;if(i===Rf)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Nf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===g0)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===_0)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===p0)return e.BYTE;if(i===m0)return e.SHORT;if(i===ko)return e.UNSIGNED_SHORT;if(i===Cf)return e.INT;if(i===Ii)return e.UNSIGNED_INT;if(i===Pi)return e.FLOAT;if(i===Bi)return e.HALF_FLOAT;if(i===v0)return e.ALPHA;if(i===y0)return e.RGB;if(i===zi)return e.RGBA;if(i===Os)return e.DEPTH_COMPONENT;if(i===zs)return e.DEPTH_STENCIL;if(i===x0)return e.RED;if(i===Df)return e.RED_INTEGER;if(i===Ua)return e.RG;if(i===Lf)return e.RG_INTEGER;if(i===Uf)return e.RGBA_INTEGER;if(i===Tc||i===Ec||i===Ac||i===wc)if(r===ae)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Tc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ec)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Tc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ec)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ac)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Of||i===If||i===Pf||i===Bf)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Of)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===If)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zf||i===Ff||i===Hf||i===Gf||i===Vf||i===Cc||i===kf)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===zf||i===Ff)return r===ae?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Hf)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Gf)return a.COMPRESSED_R11_EAC;if(i===Vf)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Cc)return a.COMPRESSED_RG11_EAC;if(i===kf)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Xf||i===Wf||i===qf||i===Yf||i===Zf||i===Jf||i===Kf||i===Qf||i===jf||i===$f||i===td||i===ed||i===nd||i===id)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Xf)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wf)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qf)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yf)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zf)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jf)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kf)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qf)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jf)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$f)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===td)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ed)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nd)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===id)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sd||i===ad||i===rd)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===sd)return r===ae?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ad)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===od||i===ld||i===Rc||i===cd)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===od)return a.COMPRESSED_RED_RGTC1_EXT;if(i===ld)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gr?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var uN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,F0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new fc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new os({vertexShader:uN,fragmentShader:hN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Si(new pc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},H0=class extends as{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,f=null,p=null,u=null,d=null,v=null,b=typeof XRWebGLBinding<"u",_=new F0,h={},m=n.getContextAttributes(),x=null,y=null,E=[],A=[],g=new qt,T=null,L=null,C=new Nn;C.viewport=new Ce;let U=new Nn;U.viewport=new Ce;let I=[C,U],k=new Tf,N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ct=E[W];return ct===void 0&&(ct=new Io,E[W]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(W){let ct=E[W];return ct===void 0&&(ct=new Io,E[W]=ct),ct.getGripSpace()},this.getHand=function(W){let ct=E[W];return ct===void 0&&(ct=new Io,E[W]=ct),ct.getHandSpace()};function Y(W){let ct=A.indexOf(W.inputSource);if(ct===-1)return;let vt=E[ct];vt!==void 0&&(vt.update(W.inputSource,W.frame,c||r),vt.dispatchEvent({type:W.type,data:W.inputSource}))}function V(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",et);for(let W=0;W<E.length;W++){let ct=A[W];ct!==null&&(A[W]=null,E[W].disconnect(ct))}N=null,G=null,_.reset();for(let W in h)delete h[W];if(t.setRenderTarget(x),d=null,u=null,p=null,s=null,y=null,Nt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(g.width,g.height,!1),L!==null){let W=L.camera;W.fov=L.fov,W.zoom=L.zoom,W.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,i.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",V),s.addEventListener("inputsourceschange",et),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(g),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Et=null,gt=null;m.depth&&(gt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,vt=m.stencil?zs:Os,Et=m.stencil?gr:Ii);let Bt={colorFormat:n.RGBA8,depthFormat:gt,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(Bt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new ii(u.textureWidth,u.textureHeight,{format:zi,type:Vn,depthTexture:new Ps(u.textureWidth,u.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let vt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,n,vt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new ii(d.framebufferWidth,d.framebufferHeight,{format:zi,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Nt.setContext(s),Nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function et(W){for(let ct=0;ct<W.removed.length;ct++){let vt=W.removed[ct],Et=A.indexOf(vt);Et>=0&&(A[Et]=null,E[Et].disconnect(vt))}for(let ct=0;ct<W.added.length;ct++){let vt=W.added[ct],Et=A.indexOf(vt);if(Et===-1){for(let Bt=0;Bt<E.length;Bt++)if(Bt>=A.length){A.push(vt),Et=Bt;break}else if(A[Bt]===null){A[Bt]=vt,Et=Bt;break}if(Et===-1)break}let gt=E[Et];gt&&gt.connect(vt)}}function X(W,ct){ct===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ct.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let ct=W.near,vt=W.far;_.texture!==null&&(_.depthNear>0&&(ct=_.depthNear),_.depthFar>0&&(vt=_.depthFar)),k.near=U.near=C.near=ct,k.far=U.far=C.far=vt,(N!==k.near||G!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),N=k.near,G=k.far),k.layers.mask=W.layers.mask|6,C.layers.mask=k.layers.mask&-5,U.layers.mask=k.layers.mask&-3;let Et=W.parent,gt=k.cameras;X(k,Et);for(let Bt=0;Bt<gt.length;Bt++)X(gt[Bt],Et);k.projectionMatrix.copy(C.projectionMatrix),k.projectionMatrixInverse.copy(C.projectionMatrixInverse),L===null&&W.isPerspectiveCamera&&(L={camera:W,fov:W.fov,zoom:W.zoom}),$(W,k,Et)};function $(W,ct,vt){vt===null?W.matrix.copy(ct.matrixWorld):(W.matrix.copy(vt.matrixWorld),W.matrix.invert(),W.matrix.multiply(ct.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ct.projectionMatrix),W.projectionMatrixInverse.copy(ct.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ef*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(k)},this.getCameraTexture=function(W){return h[W]};let tt=null;function yt(W,ct){if(f=ct.getViewerPose(c||r),v=ct,f!==null){let vt=f.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Et=!1;vt.length!==k.cameras.length&&(k.cameras.length=0,Et=!0);for(let Ct=0;Ct<vt.length;Ct++){let re=vt[Ct],de=null;if(d!==null)de=d.getViewport(re);else{let rn=p.getViewSubImage(u,re);de=rn.viewport,Ct===0&&(t.setRenderTargetTextures(y,rn.colorTexture,rn.depthStencilTexture),t.setRenderTarget(y))}let Yt=I[Ct];Yt===void 0&&(Yt=new Nn,Yt.layers.enable(Ct),Yt.viewport=new Ce,I[Ct]=Yt),Yt.matrix.fromArray(re.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(re.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(de.x,de.y,de.width,de.height),Ct===0&&(k.matrix.copy(Yt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Et===!0&&k.cameras.push(Yt)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){p=i.getBinding();let Ct=p.getDepthInformation(vt[0]);Ct&&Ct.isValid&&Ct.texture&&_.init(Ct,s.renderState)}if(gt&&gt.includes("camera-access")&&b){t.state.unbindTexture(),p=i.getBinding();for(let Ct=0;Ct<vt.length;Ct++){let re=vt[Ct].camera;if(re){let de=h[re];de||(de=new fc,h[re]=de);let Yt=p.getCameraImage(re);de.sourceTexture=Yt}}}}for(let vt=0;vt<E.length;vt++){let Et=A[vt],gt=E[vt];Et!==null&&gt!==void 0&&gt.update(Et,ct,c||r)}tt&&tt(W,ct),ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ct}),v=null}let Nt=new $b;Nt.setAnimationLoop(yt),this.setAnimationLoop=function(W){tt=W},this.dispose=function(){}}},fN=new we,c1=new Ut;c1.set(-1,0,0,0,1,0,0,0,1);function dN(e,t){function n(_,h){_.matrixAutoUpdate===!0&&_.updateMatrix(),h.value.copy(_.matrix)}function i(_,h){h.color.getRGB(_.fogColor.value,w0(e)),h.isFog?(_.fogNear.value=h.near,_.fogFar.value=h.far):h.isFogExp2&&(_.fogDensity.value=h.density)}function s(_,h,m,x,y){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?a(_,h):h.isMeshLambertMaterial?(a(_,h),h.envMap&&(_.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(a(_,h),p(_,h)):h.isMeshPhongMaterial?(a(_,h),f(_,h),h.envMap&&(_.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(a(_,h),u(_,h),h.isMeshPhysicalMaterial&&d(_,h,y)):h.isMeshMatcapMaterial?(a(_,h),v(_,h)):h.isMeshDepthMaterial?a(_,h):h.isMeshDistanceMaterial?(a(_,h),b(_,h)):h.isMeshNormalMaterial?a(_,h):h.isLineBasicMaterial?(r(_,h),h.isLineDashedMaterial&&o(_,h)):h.isPointsMaterial?l(_,h,m,x):h.isSpriteMaterial?c(_,h):h.isShadowMaterial?(_.color.value.copy(h.color),_.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(_,h){_.opacity.value=h.opacity,h.color&&_.diffuse.value.copy(h.color),h.emissive&&_.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(_.map.value=h.map,n(h.map,_.mapTransform)),h.alphaMap&&(_.alphaMap.value=h.alphaMap,n(h.alphaMap,_.alphaMapTransform)),h.bumpMap&&(_.bumpMap.value=h.bumpMap,n(h.bumpMap,_.bumpMapTransform),_.bumpScale.value=h.bumpScale,h.side===Ln&&(_.bumpScale.value*=-1)),h.normalMap&&(_.normalMap.value=h.normalMap,n(h.normalMap,_.normalMapTransform),_.normalScale.value.copy(h.normalScale),h.side===Ln&&_.normalScale.value.negate()),h.displacementMap&&(_.displacementMap.value=h.displacementMap,n(h.displacementMap,_.displacementMapTransform),_.displacementScale.value=h.displacementScale,_.displacementBias.value=h.displacementBias),h.emissiveMap&&(_.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,_.emissiveMapTransform)),h.specularMap&&(_.specularMap.value=h.specularMap,n(h.specularMap,_.specularMapTransform)),h.alphaTest>0&&(_.alphaTest.value=h.alphaTest);let m=t.get(h),x=m.envMap,y=m.envMapRotation;x&&(_.envMap.value=x,_.envMapRotation.value.setFromMatrix4(fN.makeRotationFromEuler(y)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(c1),_.reflectivity.value=h.reflectivity,_.ior.value=h.ior,_.refractionRatio.value=h.refractionRatio),h.lightMap&&(_.lightMap.value=h.lightMap,_.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,_.lightMapTransform)),h.aoMap&&(_.aoMap.value=h.aoMap,_.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,_.aoMapTransform))}function r(_,h){_.diffuse.value.copy(h.color),_.opacity.value=h.opacity,h.map&&(_.map.value=h.map,n(h.map,_.mapTransform))}function o(_,h){_.dashSize.value=h.dashSize,_.totalSize.value=h.dashSize+h.gapSize,_.scale.value=h.scale}function l(_,h,m,x){_.diffuse.value.copy(h.color),_.opacity.value=h.opacity,_.size.value=h.size*m,_.scale.value=x*.5,h.map&&(_.map.value=h.map,n(h.map,_.uvTransform)),h.alphaMap&&(_.alphaMap.value=h.alphaMap,n(h.alphaMap,_.alphaMapTransform)),h.alphaTest>0&&(_.alphaTest.value=h.alphaTest)}function c(_,h){_.diffuse.value.copy(h.color),_.opacity.value=h.opacity,_.rotation.value=h.rotation,h.map&&(_.map.value=h.map,n(h.map,_.mapTransform)),h.alphaMap&&(_.alphaMap.value=h.alphaMap,n(h.alphaMap,_.alphaMapTransform)),h.alphaTest>0&&(_.alphaTest.value=h.alphaTest)}function f(_,h){_.specular.value.copy(h.specular),_.shininess.value=Math.max(h.shininess,1e-4)}function p(_,h){h.gradientMap&&(_.gradientMap.value=h.gradientMap)}function u(_,h){_.metalness.value=h.metalness,h.metalnessMap&&(_.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,_.metalnessMapTransform)),_.roughness.value=h.roughness,h.roughnessMap&&(_.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,_.roughnessMapTransform)),h.envMap&&(_.envMapIntensity.value=h.envMapIntensity)}function d(_,h,m){_.ior.value=h.ior,h.diffuseRoughness>0&&(_.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap&&(_.diffuseRoughnessMap.value=h.diffuseRoughnessMap,n(h.diffuseRoughnessMap,_.diffuseRoughnessMapTransform))),h.sheen>0&&(_.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),_.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(_.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,_.sheenColorMapTransform)),h.sheenRoughnessMap&&(_.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,_.sheenRoughnessMapTransform))),h.clearcoat>0&&(_.clearcoat.value=h.clearcoat,_.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(_.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,_.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(_.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ln&&_.clearcoatNormalScale.value.negate())),h.dispersion>0&&(_.dispersion.value=h.dispersion),h.retroreflectivity>0&&(_.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(_.iridescence.value=h.iridescence,_.iridescenceIOR.value=h.iridescenceIOR,_.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,_.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap&&(_.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,_.iridescenceMapTransform)),h.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),h.transmission>0&&(_.transmission.value=h.transmission,_.transmissionSamplerMap.value=m.texture,_.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(_.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,_.transmissionMapTransform)),_.thickness.value=h.thickness,h.thicknessMap&&(_.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=h.attenuationDistance,_.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(_.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(_.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=h.specularIntensity,_.specularColor.value.copy(h.specularColor),h.specularColorMap&&(_.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,_.specularColorMapTransform)),h.specularIntensityMap&&(_.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,h){h.matcap&&(_.matcap.value=h.matcap)}function b(_,h){let m=t.get(h).light;_.referencePosition.value.setFromMatrixPosition(m.matrixWorld),_.nearDistance.value=m.shadow.camera.near,_.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function pN(e,t,n,i){let s={},a={};function r(m,x){let y=x.program;i.uniformBlockBinding(m,y,s[m.id])}function o(m,x){let y=s[m.id];y===void 0&&(v(m),y=l(m),s[m.id]=y,m.addEventListener("dispose",_));let E=x.program;i.updateUBOMapping(m,E);let A=t.render.frame;a[m.id]!==A&&(c(m),a[m.id]=A)}function l(m){let x=e.createBuffer(),y=m.__size,E=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,y,E),e.bindBuffer(e.UNIFORM_BUFFER,null),x}function c(m){let x=s[m.id],y=m.uniforms,E=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,x);for(let A=0,g=y.length;A<g;A++){let T=y[A];if(Array.isArray(T))for(let L=0,C=T.length;L<C;L++)f(T[L],A,L,E);else f(T,A,0,E)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(m,x,y,E){if(u(m,x,y,E)===!0){let A=m.__offset,g=m.value;if(Array.isArray(g)){let T=0;for(let L=0;L<g.length;L++){let C=g[L],U=b(C,!0);p(C,m.__data,T),T+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else p(g,m.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,A,m.__data)}}function p(m,x,y){typeof m=="number"||typeof m=="boolean"?x[y]=m:m.isMatrix3?(x[y]=m.elements[0],x[y+1]=m.elements[1],x[y+2]=m.elements[2],x[y+3]=0,x[y+4]=m.elements[3],x[y+5]=m.elements[4],x[y+6]=m.elements[5],x[y+7]=0,x[y+8]=m.elements[6],x[y+9]=m.elements[7],x[y+10]=m.elements[8],x[y+11]=0):ArrayBuffer.isView(m)?x.set(m.subarray(0,x.length-y),y):m.toArray(x,y)}function u(m,x,y,E){let A=m.value,g=x+"_"+y;if(Array.isArray(A)){E[g]===void 0&&(E[g]=[]);let T=E[g],L=!1;for(let C=0;C<A.length;C++)d(A[C],T,C)===!0&&(L=!0);return L}return d(A,E,g)}function d(m,x,y){if(x[y]===void 0)return typeof m=="number"||typeof m=="boolean"?x[y]=m:ArrayBuffer.isView(m)?x[y]=m.slice():x[y]=m.clone(),!0;{let E=x[y];if(typeof m=="number"||typeof m=="boolean"){if(E!==m)return x[y]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(E.equals(m)===!1)return E.copy(m),!0}}return!1}function v(m){let x=m.uniforms,y=0,E=16;for(let g=0,T=x.length;g<T;g++){let L=Array.isArray(x[g])?x[g]:[x[g]];for(let C=0,U=L.length;C<U;C++){let I=L[C],k=Array.isArray(I.value)?I.value:[I.value],N=Array.isArray(x[g])||Array.isArray(I.value),G=y;for(let V=0,et=k.length;V<et;V++){let X=k[V],$=b(X,N),tt=y%E,yt=tt%$.boundary,Nt=tt+yt;y+=yt,Nt!==0&&E-Nt<$.storage&&(y+=E-Nt),V===0&&(G=y),y+=$.storage}let Y=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new Y((y-G)/Float32Array.BYTES_PER_ELEMENT),I.__offset=G}}let A=y%E;return A>0&&(y+=E-A),m.__size=y,m.__cache={},this}function b(m,x){let y={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(y.boundary=4,y.storage=4):m.isVector2?(y.boundary=8,y.storage=8):m.isVector3||m.isColor?(y.boundary=16,y.storage=12):m.isVector4?(y.boundary=16,y.storage=16):m.isMatrix3?(y.boundary=16,y.storage=48):m.isMatrix4?(y.boundary=16,y.storage=64):m.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(y.boundary=16,y.storage=m.byteLength):Rt("WebGLRenderer: Unsupported uniform value type.",m),x===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function _(m){let x=m.target;x.removeEventListener("dispose",_),e.deleteBuffer(s[x.id]),delete s[x.id],delete a[x.id]}function h(){for(let m in s)e.deleteBuffer(s[m]);s={},a={}}return{bind:r,update:o,dispose:h}}var mN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),cs=null;function gN(){return cs===null&&(cs=new lf(mN,16,16,Ua,Bi),cs.name="DFG_LUT",cs.minFilter=Dn,cs.magFilter=Dn,cs.wrapS=ns,cs.wrapT=ns,cs.generateMipmaps=!1,cs.needsUpdate=!0),cs}var pd=class{constructor(t={}){let{canvas:n=bb(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Vn}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=r;let b=d,_=new Set([Uf,Lf,Df]),h=new Set([Vn,Ii,ko,gr,Rf,Nf]),m=new Uint32Array(4),x=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},E=null,A=null,g=[],T=[],L=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ls,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,U=!1,I=null,k=null,N=null,G=null;this._outputColorSpace=ni;let Y=0,V=0,et=null,X=-1,$=null,tt=new Ce,yt=new Ce,Nt=null,W=new kt(0),ct=0,vt=n.width,Et=n.height,gt=1,Bt=null,Be=null,Ct=new Ce(0,0,vt,Et),re=new Ce(0,0,vt,Et),de=!1,Yt=new Ca,rn=new cf,ke=!1,Un=!1,Ne=new we,Fi=new F,Ke=new Ce,ai={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ri=!1;function oi(){return et===null?gt:1}let O=i;function li(M,D){return n.getContext(M,D)}let be,Te,dt,Xe,wt,Ot,w,S,B,nt,j,at,ht,Z,J,ot,R,K,q,lt,st,rt,Tt;try{let M={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"187"}`),n.addEventListener("webglcontextlost",At,!1),n.addEventListener("webglcontextrestored",Ft,!1),n.addEventListener("webglcontextcreationerror",pt,!1),O===null){let D="webgl2";if(O=li(D,M),O===null)throw li(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(M){throw n.removeEventListener("webglcontextlost",At,!1),n.removeEventListener("webglcontextrestored",Ft,!1),n.removeEventListener("webglcontextcreationerror",pt,!1),Lt("WebGLRenderer: "+M.message),M}function Ht(){be=new w3(O),be.init(),st=new cN(O,be),Te=new g3(O,be,t,st),dt=new oN(O,be),Te.reversedDepthBuffer&&u&&dt.buffers.depth.setReversed(!0),k=O.createFramebuffer(),N=O.createFramebuffer(),G=O.createFramebuffer(),Xe=new N3(O),wt=new Y2,Ot=new lN(O,be,dt,wt,Te,st,Xe),w=new A3(C),S=new Lw(O),rt=new p3(O,S),B=new C3(O,S,Xe,rt),nt=new L3(O,B,S,rt,Xe),K=new D3(O,Te,Ot),J=new _3(wt),j=new q2(C,w,be,Te,rt,J),at=new dN(C,wt),ht=new J2,Z=new eN(be),R=new d3(C,w,dt,nt,v,l),ot=new rN(C,nt,Te),Tt=new pN(O,Xe,Te,dt),q=new m3(O,be,Xe),lt=new R3(O,be,Xe),Xe.programs=j.programs,C.capabilities=Te,C.extensions=be,C.properties=wt,C.renderLists=ht,C.shadowMap=ot,C.state=dt,C.info=Xe}b!==Vn&&(L=new O3(b,n.width,n.height,o,s,a));let it=new H0(C,O);this.xr=it,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let M=be.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=be.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(M){M!==void 0&&(gt=M,this.setSize(vt,Et,!1))},this.getSize=function(M){return M.set(vt,Et)},this.setSize=function(M,D,H=!0){if(it.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=M,Et=D,n.width=Math.floor(M*gt),n.height=Math.floor(D*gt),H===!0&&(n.style.width=M+"px",n.style.height=D+"px"),L!==null&&L.setSize(n.width,n.height),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(vt*gt,Et*gt).floor()},this.setDrawingBufferSize=function(M,D,H){vt=M,Et=D,gt=H,n.width=Math.floor(M*H),n.height=Math.floor(D*H),this.setViewport(0,0,M,D)},this.setEffects=function(M){if(b===Vn){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let D=0;D<M.length;D++)if(M[D].isOutputPass===!0){Rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(tt)},this.getViewport=function(M){return M.copy(Ct)},this.setViewport=function(M,D,H,P){M.isVector4?Ct.set(M.x,M.y,M.z,M.w):Ct.set(M,D,H,P),dt.viewport(tt.copy(Ct).multiplyScalar(oi()).round())},this.getScissor=function(M){return M.copy(re)},this.setScissor=function(M,D,H,P){M.isVector4?re.set(M.x,M.y,M.z,M.w):re.set(M,D,H,P),dt.scissor(yt.copy(re).multiplyScalar(oi()).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(M){dt.setScissorTest(de=M)},this.setOpaqueSort=function(M){Bt=M},this.setTransparentSort=function(M){Be=M},this.getClearColor=function(M){return M.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(M=!0,D=!0,H=!0){let P=0;if(M){let z=!1;if(et!==null){let ft=et.texture.format;z=_.has(ft)}if(z){let ft=et.texture.type,xt=h.has(ft),ut=R.getClearColor(),_t=R.getClearAlpha(),bt=ut.r,Pt=ut.g,Zt=ut.b;xt?(m[0]=bt,m[1]=Pt,m[2]=Zt,m[3]=_t,O.clearBufferuiv(O.COLOR,0,m)):(x[0]=bt,x[1]=Pt,x[2]=Zt,x[3]=_t,O.clearBufferiv(O.COLOR,0,x))}else P|=O.COLOR_BUFFER_BIT}D&&(P|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(P|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P!==0&&O.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),I=M},this.dispose=function(){n.removeEventListener("webglcontextlost",At,!1),n.removeEventListener("webglcontextrestored",Ft,!1),n.removeEventListener("webglcontextcreationerror",pt,!1),R.dispose(),ht.dispose(),Z.dispose(),Ot.dispose(),wt.dispose(),w.dispose(),nt.dispose(),B.dispose(),rt.dispose(),Tt.dispose(),j.dispose(),it.dispose(),it.removeEventListener("sessionstart",k0),it.removeEventListener("sessionend",X0),Oa.stop()};function At(M){M.preventDefault(),E0("WebGLRenderer: Context Lost."),U=!0}function Ft(){E0("WebGLRenderer: Context Restored."),U=!1;let M=Xe.autoReset,D=ot.enabled,H=ot.autoUpdate,P=ot.needsUpdate,z=ot.type;Ht(),Xe.autoReset=M,ot.enabled=D,ot.autoUpdate=H,ot.needsUpdate=P,ot.type=z}function pt(M){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function oe(M){let D=M.target;D.removeEventListener("dispose",oe),Qe(D)}function Qe(M){Hs(M),wt.remove(M)}function Hs(M){let D=wt.get(M).programs;D!==void 0&&(D.forEach(function(H){j.releaseProgram(H)}),M.isShaderMaterial&&j.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,H,P,z,ft){D===null&&(D=ai);let xt=z.isMesh&&z.matrixWorld.determinantAffine()<0,ut=m1(M,D,H,P,z);dt.setMaterial(P,xt);let _t=H.index,bt=1;if(P.wireframe===!0){if(_t=B.getWireframeAttribute(H),_t===void 0)return;bt=2}let Pt=H.drawRange,Zt=H.attributes.position,St=Pt.start*bt,Jt=(Pt.start+Pt.count)*bt;ft!==null&&(St=Math.max(St,ft.start*bt),Jt=Math.min(Jt,(ft.start+ft.count)*bt)),_t!==null?(St=Math.max(St,0),Jt=Math.min(Jt,_t.count)):Zt!=null&&(St=Math.max(St,0),Jt=Math.min(Jt,Zt.count));let ze=Jt-St;if(ze<0||ze===1/0)return;rt.setup(z,P,ut,H,_t);let _e,pe=q;if(_t!==null&&(_e=S.get(_t),pe=lt,pe.setIndex(_e)),z.isMesh)P.wireframe===!0?(dt.setLineWidth(P.wireframeLinewidth*oi()),pe.setMode(O.LINES)):pe.setMode(O.TRIANGLES);else if(z.isLine){let mn=P.linewidth;mn===void 0&&(mn=1),dt.setLineWidth(mn*oi()),z.isLineSegments?pe.setMode(O.LINES):z.isLineLoop?pe.setMode(O.LINE_LOOP):pe.setMode(O.LINE_STRIP)}else z.isPoints?pe.setMode(O.POINTS):z.isSprite&&pe.setMode(O.TRIANGLES);if(z.isBatchedMesh)if(be.get("WEBGL_multi_draw"))pe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let mn=z._multiDrawStarts,Mt=z._multiDrawCounts,Tn=z._multiDrawCount,ee=_t?S.get(_t).bytesPerElement:1,Ia=wt.get(P).currentProgram.getUniforms();for(let gn=0;gn<Tn;gn++)Ia.setValue(O,"_gl_DrawID",gn),pe.render(mn[gn]/ee,Mt[gn])}else if(z.isInstancedMesh)pe.renderInstances(St,ze,z.count);else if(H.isInstancedBufferGeometry){let mn=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Mt=Math.min(H.instanceCount,mn);pe.renderInstances(St,ze,Mt)}else pe.render(St,ze)};function V0(M,D,H,P){I!==null&&M.isNodeMaterial&&I.setObject(P,M),ke===!0&&J.setState(M,H,!1),M.transparent===!0&&M.side===Mi&&M.forceSinglePass===!1?(M.side=Ln,M.needsUpdate=!0,qo(M,D,P),M.side=La,M.needsUpdate=!0,qo(M,D,P),M.side=Mi):qo(M,D,P)}this.compile=function(M,D,H=null){H===null&&(H=M),I!==null&&I.renderStart(M,D,H),A=Z.get(H),A.init(D),T.push(A),H.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(A.pushLight(z),z.castShadow&&A.pushShadow(z))}),M!==H&&M.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(A.pushLight(z),z.castShadow&&A.pushShadow(z))}),A.setupLights(),I!==null&&I.updateLights(A.state.lightsArray),Un=this.localClippingEnabled,ke=J.init(this.clippingPlanes,Un),ke===!0&&J.setGlobalState(this.clippingPlanes,D),I!==null&&ot.render(A.state.shadowsArray,H,D);let P=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ft=z.material;if(ft)if(Array.isArray(ft))for(let xt=0;xt<ft.length;xt++){let ut=ft[xt];V0(ut,H,D,z),P.add(ut)}else V0(ft,H,D,z),P.add(ft)}),A=T.pop(),I!==null&&I.renderEnd(),P},this.compileAsync=function(M,D,H=null){let P=this.compile(M,D,H);return new Promise(z=>{function ft(){if(P.forEach(function(xt){let _t=wt.get(xt).currentProgram;(_t===void 0||_t.isReady())&&P.delete(xt)}),P.size===0){z(M);return}setTimeout(ft,10)}be.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let vd=null;function d1(M){vd&&vd(M)}function k0(){Oa.stop()}function X0(){Oa.start()}let Oa=new $b;Oa.setAnimationLoop(d1),typeof self<"u"&&Oa.setContext(self),this.setAnimationLoop=function(M){vd=M,it.setAnimationLoop(M),M===null?Oa.stop():Oa.start()},it.addEventListener("sessionstart",k0),it.addEventListener("sessionend",X0),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;I!==null&&I.renderStart(M,D);let H=it.enabled===!0&&it.isPresenting===!0,P=L!==null&&(et===null||H)&&L.begin(C,et);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(D),D=it.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,D,et),A=Z.get(M,T.length),A.init(D),A.state.textureUnits=Ot.getTextureUnits(),T.push(A),Ne.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?rn.setFromArrayCamera(D):Yt.setFromProjectionMatrix(Ne,xi,D.reversedDepth),Un=this.localClippingEnabled,ke=J.init(this.clippingPlanes,Un),E=ht.get(M,g.length),E.init(),g.push(E),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let xt=C.xr.getDepthSensingMesh();xt!==null&&yd(xt,D,-1/0,C.sortObjects)}yd(M,D,0,C.sortObjects),E.finish(),I!==null&&I.updateLights(A.state.lightsArray),C.sortObjects===!0&&E.sort(Bt,Be),ri=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,ri&&R.addToRenderList(E,M),this.info.autoReset===!0&&this.info.reset(),ke===!0&&J.beginShadows();let z=A.state.shadowsArray;if(ot.render(z,M,D),ke===!0&&J.endShadows(),(P&&L.hasRenderPass())===!1){let xt=E.opaque,ut=E.transmissive;if(A.setupLights(),D.isArrayCamera){let _t=D.cameras;if(ut.length>0)for(let bt=0,Pt=_t.length;bt<Pt;bt++){let Zt=_t[bt];q0(xt,ut,M,Zt)}ri&&R.render(M);for(let bt=0,Pt=_t.length;bt<Pt;bt++){let Zt=_t[bt];W0(E,M,Zt,Zt.viewport)}}else ut.length>0&&q0(xt,ut,M,D),ri&&R.render(M),W0(E,M,D)}et!==null&&V===0&&(Ot.updateMultisampleRenderTarget(et),Ot.updateRenderTargetMipmap(et)),P&&L.end(C),M.isScene===!0&&M.onAfterRender(C,M,D),rt.resetDefaultState(),X=-1,$=null,T.pop(),T.length>0?(A=T[T.length-1],Ot.setTextureUnits(A.state.textureUnits),ke===!0&&J.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,g.pop(),g.length>0?E=g[g.length-1]:E=null,I!==null&&I.renderEnd()};function yd(M,D,H,P){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){let xt=D.isArrayCamera?rn:Yt;if(!M.frustumCulled||M.intersectsFrustum(xt)){P&&Ke.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ne);let ut=nt.update(M),_t=M.material;_t.visible&&E.push(M,ut,_t,H,Ke.z,null,D)}}else if(M.isMesh||M.isLine||M.isPoints){let xt=D.isArrayCamera?rn:Yt;if(!M.frustumCulled||M.intersectsFrustum(xt)){let ut=nt.update(M),_t=M.material;if(P&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ke.copy(M.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Ke.copy(ut.boundingSphere.center)),Ke.applyMatrix4(M.matrixWorld).applyMatrix4(Ne)),Array.isArray(_t)){let bt=ut.groups;for(let Pt=0,Zt=bt.length;Pt<Zt;Pt++){let St=bt[Pt],Jt=_t[St.materialIndex];Jt&&Jt.visible&&E.push(M,ut,Jt,H,Ke.z,St,D)}}else _t.visible&&E.push(M,ut,_t,H,Ke.z,null,D)}}}let ft=M.children;for(let xt=0,ut=ft.length;xt<ut;xt++)yd(ft[xt],D,H,P)}function W0(M,D,H,P){let{opaque:z,transmissive:ft,transparent:xt}=M;A.setupLightsView(H),ke===!0&&J.setGlobalState(C.clippingPlanes,H),P&&dt.viewport(tt.copy(P)),z.length>0&&Ic(z,D,H),ft.length>0&&Ic(ft,D,H),xt.length>0&&Ic(xt,D,H),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function q0(M,D,H,P){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[P.id]===void 0){let St=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[P.id]=new ii(1,1,{generateMipmaps:!0,type:St?Bi:Vn,minFilter:Bs,samples:Math.max(4,Te.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}let ft=A.state.transmissionRenderTarget[P.id],xt=P.viewport||tt;ft.setSize(xt.z*C.transmissionResolutionScale,xt.w*C.transmissionResolutionScale);let ut=C.getRenderTarget(),_t=C.getActiveCubeFace(),bt=C.getActiveMipmapLevel();C.setRenderTarget(ft),C.getClearColor(W),ct=C.getClearAlpha(),ct<1&&C.setClearColor(16777215,.5),C.clear(),ri&&R.render(H);let Pt=C.toneMapping;C.toneMapping=ls;let Zt=P.viewport;if(P.viewport!==void 0&&(P.viewport=void 0),A.setupLightsView(P),ke===!0&&J.setGlobalState(C.clippingPlanes,P),Ic(M,H,P),Ot.updateMultisampleRenderTarget(ft),Ot.updateRenderTargetMipmap(ft),be.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let Jt=0,ze=D.length;Jt<ze;Jt++){let _e=D[Jt],{object:pe,geometry:mn,material:Mt,group:Tn}=_e;if(Mt.side===Mi&&pe.layers.test(P.layers)){let ee=Mt.side;Mt.side=Ln,Mt.needsUpdate=!0,Y0(pe,H,P,mn,Mt,Tn),Mt.side=ee,Mt.needsUpdate=!0,St=!0}}St===!0&&(Ot.updateMultisampleRenderTarget(ft),Ot.updateRenderTargetMipmap(ft))}C.setRenderTarget(ut,_t,bt),C.setClearColor(W,ct),Zt!==void 0&&(P.viewport=Zt),C.toneMapping=Pt}function Ic(M,D,H){let P=D.isScene===!0?D.overrideMaterial:null;for(let z=0,ft=M.length;z<ft;z++){let xt=M[z],{object:ut,geometry:_t,group:bt}=xt,Pt=xt.material;Pt.allowOverride===!0&&P!==null&&(Pt=P),ut.layers.test(H.layers)&&Y0(ut,D,H,_t,Pt,bt)}}function Y0(M,D,H,P,z,ft){I!==null&&z.isNodeMaterial&&I.setObject(M,z),M.onBeforeRender(C,D,H,P,z,ft),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(C,D,H,P,M,ft),z.transparent===!0&&z.side===Mi&&z.forceSinglePass===!1?(z.side=Ln,z.needsUpdate=!0,C.renderBufferDirect(H,D,P,z,M,ft),z.side=La,z.needsUpdate=!0,C.renderBufferDirect(H,D,P,z,M,ft),z.side=Mi):C.renderBufferDirect(H,D,P,z,M,ft),M.onAfterRender(C,D,H,P,z,ft)}function Z0(M){let D=0;for(let H of M)H.texture!==null&&D++;return D}function qo(M,D,H){D.isScene!==!0&&(D=ai);let P=wt.get(M),z=A.state.lights,ft=A.state.shadowsArray,xt=z.state.version,ut=j.getParameters(M,z.state,ft,D,H,A.state.lightProbeGridArray),_t=j.getProgramCacheKey(ut),bt=P.programs;P.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?D.environment:null,P.fog=D.fog;let Pt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;P.envMap=w.get(M.envMap||P.environment,Pt),P.envMapRotation=P.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,bt===void 0&&(M.addEventListener("dispose",oe),bt=new Map,P.programs=bt,P.programVariants=new Map);let Zt=bt.get(_t);if(Zt!==void 0){if(P.currentProgram===Zt&&P.lightsStateVersion===xt)return K0(M,ut),Zt}else ut.uniforms=j.getUniforms(M),I!==null&&M.isNodeMaterial&&I.build(M,H,ut),M.onBeforeCompile(ut,C),Zt=j.acquireProgram(ut,_t),bt.set(_t,Zt),P.uniforms=ut.uniforms;let St=P.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(St.clippingPlanes=J.uniform),K0(M,ut),P.needsLights=_1(M),P.lightsStateVersion=xt,P.needsLights&&(St.ambientLightColor.value=z.state.ambient,St.lightProbe.value=z.state.probe,St.sunLights.value=z.state.sun,St.sunLightShadows.value=z.state.sunShadow,St.directionalLights.value=z.state.directional,St.directionalLightShadows.value=z.state.directionalShadow,St.spotLights.value=z.state.spot,St.spotLightShadows.value=z.state.spotShadow,St.rectAreaLights.value=z.state.rectArea,St.ltc_1.value=z.state.rectAreaLTC1,St.ltc_2.value=z.state.rectAreaLTC2,St.pointLights.value=z.state.point,St.pointLightShadows.value=z.state.pointShadow,St.hemisphereLights.value=z.state.hemi,St.sunShadowMatrix.value=z.state.sunShadowMatrix,St.sunShadowCascade.value=z.state.sunShadowCascade,St.directionalShadowMatrix.value=z.state.directionalShadowMatrix,St.spotLightMatrix.value=z.state.spotLightMatrix,St.spotLightMap.value=z.state.spotLightMap,St.pointShadowMatrix.value=z.state.pointShadowMatrix),P.numLightProbeGrids=Z0(A.state.lightProbeGridArray),P.currentProgram=Zt,P.uniformsList=null,Zt}function p1(M,D,H,P,z){let ft=wt.get(M),xt=ft.currentProgram.id+","+P+","+z,ut=ft.programVariants.get(xt);return ut===void 0?(ut=qo(M,D,H),ft.programVariants.set(xt,ut)):(ft.currentProgram=ut,ft.uniformsList=null,ft.outputColorSpace=P,ft.toneMapping=z),ut}function J0(M){if(M.uniformsList===null){let D=M.currentProgram.getUniforms();M.uniformsList=Xo.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function K0(M,D){let H=wt.get(M);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.batchingColor=D.batchingColor,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.instancingMorph=D.instancingMorph,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function m1(M,D,H,P,z){D.isScene!==!0&&(D=ai),Ot.resetTextureUnits();let ft=D.fog,xt=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?D.environment:null,ut=et===null?C.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Qt.workingColorSpace,_t=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap,bt=w.get(P.envMap||xt,_t),Pt=P.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Zt=!!H.attributes.tangent&&(!!P.normalMap||P.anisotropy>0),St=!!H.morphAttributes.position,Jt=!!H.morphAttributes.normal,ze=!!H.morphAttributes.color,_e=ls;P.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(_e=C.toneMapping);let pe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,mn=pe!==void 0?pe.length:0,Mt=wt.get(P),Tn=A.state.lights;if(ke===!0&&(Un===!0||M!==$)){let De=M===$&&P.id===X;J.setState(P,M,De)}let ee=!1,Ia=!1;P.version===Mt.__version?Mt.needsLights&&Mt.lightsStateVersion!==Tn.state.version||z.isBatchedMesh&&Mt.batching===!1||!z.isBatchedMesh&&Mt.batching===!0||z.isBatchedMesh&&Mt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Mt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Mt.instancing===!1||!z.isInstancedMesh&&Mt.instancing===!0||z.isSkinnedMesh&&Mt.skinning===!1||!z.isSkinnedMesh&&Mt.skinning===!0||z.isInstancedMesh&&Mt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Mt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Mt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Mt.instancingMorph===!1&&z.morphTexture!==null||Mt.envMap!==bt||P.fog===!0&&Mt.fog!==ft||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==J.numPlanes||Mt.numIntersection!==J.numIntersection)||Mt.vertexAlphas!==Pt||Mt.vertexTangents!==Zt||Mt.morphTargets!==St||Mt.morphNormals!==Jt||Mt.morphColors!==ze||Mt.morphTargetsCount!==mn||Mt.numLightProbeGrids!==Z0(A.state.lightProbeGridArray)?ee=!0:(Mt.outputColorSpace!==ut||Mt.toneMapping!==_e)&&(Ia=!0):(ee=!0,Mt.__version=P.version);let gn=Mt.currentProgram;(ee===!0||Ia===!0)&&(gn=Ia===!0?p1(P,D,z,ut,_e):qo(P,D,z),I&&P.isNodeMaterial&&I.onUpdateProgram(P,gn,Mt));let Pc=!1,Gs=!1,Pa=!1,$t=gn.getUniforms(),on=Mt.uniforms;if(dt.useProgram(gn.program)&&(Pc=!0,Gs=!0,Pa=!0),P.id!==X&&(X=P.id,Gs=!0),Pc||$!==M){dt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),$t.setValue(O,"projectionMatrix",M.projectionMatrix),$t.setValue(O,"viewMatrix",M.matrixWorldInverse);let je=$t.map.cameraPosition;je!==void 0&&je.setValue(O,Fi.setFromMatrixPosition(M.matrixWorld)),Te.logarithmicDepthBuffer&&$t.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&$t.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),$!==M&&($=M,Gs=!0,Pa=!0)}if(Mt.needsLights&&(Tn.state.sunShadowMap.length>0&&$t.setValue(O,"sunShadowMap",Tn.state.sunShadowMap,Ot),Tn.state.directionalShadowMap.length>0&&$t.setValue(O,"directionalShadowMap",Tn.state.directionalShadowMap,Ot),Tn.state.spotShadowMap.length>0&&$t.setValue(O,"spotShadowMap",Tn.state.spotShadowMap,Ot),Tn.state.pointShadowMap.length>0&&$t.setValue(O,"pointShadowMap",Tn.state.pointShadowMap,Ot)),z.isSkinnedMesh){$t.setOptional(O,z,"bindMatrix"),$t.setOptional(O,z,"bindMatrixInverse");let De=z.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),$t.setValue(O,"boneTexture",De.boneTexture,Ot))}z.isBatchedMesh&&($t.setOptional(O,z,"batchingTexture"),$t.setValue(O,"batchingTexture",z._matricesTexture,Ot),$t.setOptional(O,z,"batchingIdTexture"),$t.setValue(O,"batchingIdTexture",z._indirectTexture,Ot),$t.setOptional(O,z,"batchingColorTexture"),z._colorsTexture!==null&&$t.setValue(O,"batchingColorTexture",z._colorsTexture,Ot));let bi=H.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&K.update(z,H,gn),(Gs||Mt.receiveShadow!==z.receiveShadow)&&(Mt.receiveShadow=z.receiveShadow,$t.setValue(O,"receiveShadow",z.receiveShadow)),(P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial)&&P.envMap===null&&D.environment!==null&&(on.envMapIntensity.value=D.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=gN()),Gs){if($t.setValue(O,"toneMappingExposure",C.toneMappingExposure),Mt.needsLights&&g1(on,Pa),ft&&P.fog===!0&&at.refreshFogUniforms(on,ft),at.refreshMaterialUniforms(on,P,gt,Et,A.state.transmissionRenderTarget[M.id]),Mt.needsLights&&Mt.numLightProbeGrids>0){let De=y,je=0;for(let hs of A.state.lightProbeGridArray)hs.texture!==null&&(De.textures[je]=hs.texture,De.min[je]=hs.boundingBox.min,De.max[je]=hs.boundingBox.max,De.resolution[je]=hs.resolution,je++);for(let hs in De)De[hs].length=je;on.probesSH.value=De.textures,on.probesMin.value=De.min,on.probesMax.value=De.max,on.probesResolution.value=De.resolution}Xo.upload(O,J0(Mt),on,Ot)}if(P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(Xo.upload(O,J0(Mt),on,Ot),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&$t.setValue(O,"center",z.center),$t.setValue(O,"modelViewMatrix",z.modelViewMatrix),$t.setValue(O,"normalMatrix",z.normalMatrix),$t.setValue(O,"modelMatrix",z.matrixWorld),P.uniformsGroups!==void 0){let De=P.uniformsGroups;for(let je=0,hs=De.length;je<hs;je++){let j0=De[je];Tt.update(j0,gn),Tt.bind(j0,gn)}}return gn}function g1(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.sunLights.needsUpdate=D,M.sunLightShadows.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function _1(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(M,D,H){let P=wt.get(M);P.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,P.__autoAllocateDepthBuffer===!1&&(P.__useRenderToTexture=!1),wt.get(M.texture).__webglTexture=D,wt.get(M.depthTexture).__webglTexture=P.__autoAllocateDepthBuffer?void 0:H,P.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,D){let H=wt.get(M);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,H=0){et=M,Y=D,V=H;let P=null,z=!1,ft=!1;if(M){let ut=wt.get(M);if(ut.__useDefaultFramebuffer!==void 0){dt.bindFramebuffer(O.FRAMEBUFFER,ut.__webglFramebuffer),tt.copy(M.viewport),yt.copy(M.scissor),Nt=M.scissorTest,dt.viewport(tt),dt.scissor(yt),dt.setScissorTest(Nt),X=-1;return}else if(ut.__webglFramebuffer===void 0)Ot.setupRenderTarget(M);else if(ut.__hasExternalTextures)Ot.rebindTextures(M,wt.get(M.texture).__webglTexture,wt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Pt=M.depthTexture;if(ut.__boundDepthTexture!==Pt){if(Pt!==null&&wt.has(Pt)&&(M.width!==Pt.image.width||M.height!==Pt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ot.setupDepthRenderbuffer(M)}}let _t=M.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(ft=!0);let bt=wt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(bt[D])?P=bt[D][H]:P=bt[D],z=!0):M.samples>0&&Ot.useMultisampledRTT(M)===!1?P=wt.get(M).__webglMultisampledFramebuffer:Array.isArray(bt)?P=bt[H]:P=bt,tt.copy(M.viewport),yt.copy(M.scissor),Nt=M.scissorTest}else tt.copy(Ct).multiplyScalar(gt).floor(),yt.copy(re).multiplyScalar(gt).floor(),Nt=de;if(H!==0&&(P=k),dt.bindFramebuffer(O.FRAMEBUFFER,P)&&dt.drawBuffers(M,P),dt.viewport(tt),dt.scissor(yt),dt.setScissorTest(Nt),z){let ut=wt.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,ut.__webglTexture,H)}else if(ft){let ut=D;for(let _t=0;_t<M.textures.length;_t++){let bt=wt.get(M.textures[_t]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+_t,bt.__webglTexture,H,ut)}}else if(M!==null&&H!==0){let ut=wt.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ut.__webglTexture,H)}X=-1};function Q0(M){let D=wt.get(M);return(D.__readFormat!==M.format||D.__readType!==M.type)&&(D.__readFormat=M.format,D.__readType=M.type,D.__formatReadable=Te.textureFormatReadable(M.format),D.__typeReadable=Te.textureTypeReadable(M.type)),D}this.readRenderTargetPixels=function(M,D,H,P,z,ft,xt,ut=0){if(!(M&&M.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=wt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(_t=_t[xt],Array.isArray(_t)&&(_t=_t[0])),_t){dt.bindFramebuffer(O.FRAMEBUFFER,_t);try{let bt=M.textures[ut],Pt=bt.format,Zt=bt.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ut);let St=Q0(bt);if(St.__formatReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-P&&H>=0&&H<=M.height-z&&O.readPixels(D,H,P,z,st.convert(Pt),st.convert(Zt),ft)}finally{let bt=et!==null?wt.get(et).__webglFramebuffer:null;dt.bindFramebuffer(O.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(M,D,H,P,z,ft,xt,ut=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=wt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(_t=_t[xt],Array.isArray(_t)&&(_t=_t[0])),_t)if(D>=0&&D<=M.width-P&&H>=0&&H<=M.height-z){dt.bindFramebuffer(O.FRAMEBUFFER,_t);let bt=M.textures[ut],Pt=bt.format,Zt=bt.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ut);let St=Q0(bt);if(St.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Jt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Jt),O.bufferData(O.PIXEL_PACK_BUFFER,ft.byteLength,O.STREAM_READ),O.readPixels(D,H,P,z,st.convert(Pt),st.convert(Zt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let ze=et!==null?wt.get(et).__webglFramebuffer:null;dt.bindFramebuffer(O.FRAMEBUFFER,ze);let _e=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Eb(O,_e,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Jt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ft),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Jt),O.deleteSync(_e),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,D=null,H=0){let P=Math.pow(2,-H),z=Math.floor(M.image.width*P),ft=Math.floor(M.image.height*P),xt=D!==null?D.x:0,ut=D!==null?D.y:0;Ot.setTexture2D(M,0),O.copyTexSubImage2D(O.TEXTURE_2D,H,0,0,xt,ut,z,ft),dt.unbindTexture()},this.copyTextureToTexture=function(M,D,H=null,P=null,z=0,ft=0){let xt,ut,_t,bt,Pt,Zt,St,Jt,ze,_e=M.isCompressedTexture?M.mipmaps[ft]:M.image;if(H!==null)xt=H.max.x-H.min.x,ut=H.max.y-H.min.y,_t=H.isBox3?H.max.z-H.min.z:1,bt=H.min.x,Pt=H.min.y,Zt=H.isBox3?H.min.z:0;else{let $t=Math.pow(2,-z);xt=Math.floor(_e.width*$t),ut=Math.floor(_e.height*$t),M.isDataArrayTexture?_t=_e.depth:M.isData3DTexture?_t=Math.floor(_e.depth*$t):_t=1,bt=0,Pt=0,Zt=0}P!==null?(St=P.x,Jt=P.y,ze=P.z):(St=0,Jt=0,ze=0);let pe=st.convert(D.format),mn=st.convert(D.type),Mt;D.isData3DTexture?(Ot.setTexture3D(D,0),Mt=O.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Ot.setTexture2DArray(D,0),Mt=O.TEXTURE_2D_ARRAY):(Ot.setTexture2D(D,0),Mt=O.TEXTURE_2D),dt.activeTexture(O.TEXTURE0),dt.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,D.flipY),dt.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),dt.pixelStorei(O.UNPACK_ALIGNMENT,D.unpackAlignment);let Tn=dt.getParameter(O.UNPACK_ROW_LENGTH),ee=dt.getParameter(O.UNPACK_IMAGE_HEIGHT),Ia=dt.getParameter(O.UNPACK_SKIP_PIXELS),gn=dt.getParameter(O.UNPACK_SKIP_ROWS),Pc=dt.getParameter(O.UNPACK_SKIP_IMAGES);dt.pixelStorei(O.UNPACK_ROW_LENGTH,_e.width),dt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_e.height),dt.pixelStorei(O.UNPACK_SKIP_PIXELS,bt),dt.pixelStorei(O.UNPACK_SKIP_ROWS,Pt),dt.pixelStorei(O.UNPACK_SKIP_IMAGES,Zt);let Gs=M.isDataArrayTexture||M.isData3DTexture,Pa=D.isDataArrayTexture||D.isData3DTexture;if(M.isDepthTexture){let $t=wt.get(M),on=wt.get(D),bi=wt.get($t.__renderTarget),De=wt.get(on.__renderTarget);dt.bindFramebuffer(O.READ_FRAMEBUFFER,bi.__webglFramebuffer),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let je=0;je<_t;je++)Gs&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,wt.get(M).__webglTexture,z,Zt+je),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,wt.get(D).__webglTexture,ft,ze+je)),O.blitFramebuffer(bt,Pt,bt+xt,Pt+ut,St,Jt,St+xt,Jt+ut,O.DEPTH_BUFFER_BIT,O.NEAREST);dt.bindFramebuffer(O.READ_FRAMEBUFFER,null),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||wt.has(M)){let $t=wt.get(M),on=wt.get(D);dt.bindFramebuffer(O.READ_FRAMEBUFFER,N),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,G);for(let bi=0;bi<_t;bi++)Gs?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$t.__webglTexture,z,Zt+bi):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,$t.__webglTexture,z),Pa?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,on.__webglTexture,ft,ze+bi):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,on.__webglTexture,ft),z!==0?O.blitFramebuffer(bt,Pt,bt+xt,Pt+ut,St,Jt,St+xt,Jt+ut,O.COLOR_BUFFER_BIT,O.NEAREST):Pa?O.copyTexSubImage3D(Mt,ft,St,Jt,ze+bi,bt,Pt,xt,ut):O.copyTexSubImage2D(Mt,ft,St,Jt,bt,Pt,xt,ut);dt.bindFramebuffer(O.READ_FRAMEBUFFER,null),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Pa?M.isDataTexture||M.isData3DTexture?O.texSubImage3D(Mt,ft,St,Jt,ze,xt,ut,_t,pe,mn,_e.data):D.isCompressedArrayTexture?O.compressedTexSubImage3D(Mt,ft,St,Jt,ze,xt,ut,_t,pe,_e.data):O.texSubImage3D(Mt,ft,St,Jt,ze,xt,ut,_t,pe,mn,_e):M.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ft,St,Jt,xt,ut,pe,mn,_e.data):M.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ft,St,Jt,_e.width,_e.height,pe,_e.data):O.texSubImage2D(O.TEXTURE_2D,ft,St,Jt,xt,ut,pe,mn,_e);dt.pixelStorei(O.UNPACK_ROW_LENGTH,Tn),dt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ee),dt.pixelStorei(O.UNPACK_SKIP_PIXELS,Ia),dt.pixelStorei(O.UNPACK_SKIP_ROWS,gn),dt.pixelStorei(O.UNPACK_SKIP_IMAGES,Pc),ft===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&O.generateMipmap(Mt),dt.unbindTexture()},this.initRenderTarget=function(M){wt.get(M).__webglFramebuffer===void 0&&Ot.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ot.setTextureCube(M,0):M.isData3DTexture?Ot.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ot.setTexture2DArray(M,0):Ot.setTexture2D(M,0),dt.unbindTexture()},this.resetState=function(){Y=0,V=0,et=null,dt.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Qt._getUnpackColorSpace()}};var _d="(prefers-reduced-motion: reduce)",vN={width:"100%",maxWidth:320,aspectRatio:"1",position:"relative",margin:"0 auto",borderRadius:24,overflow:"hidden",background:"#e9e9e4"};function yN(){return Re.default.createElement("svg",{viewBox:"0 0 320 320",role:"img","aria-label":"Decorative Pok\xE9 Ball (static)",style:{display:"block",width:"100%",height:"100%"}},Re.default.createElement("ellipse",{cx:"160",cy:"259",rx:"83",ry:"12",fill:"#d0d0cb"}),Re.default.createElement("circle",{cx:"160",cy:"153",r:"94",fill:"#fafaf7",stroke:"#222b34",strokeWidth:"8"}),Re.default.createElement("path",{d:"M66 153a94 94 0 0 1 188 0Z",fill:"#d83f47"}),Re.default.createElement("path",{d:"M67 153h186",stroke:"#222b34",strokeWidth:"13"}),Re.default.createElement("circle",{cx:"160",cy:"153",r:"24",fill:"#fafaf7",stroke:"#222b34",strokeWidth:"10"}),Re.default.createElement("circle",{cx:"160",cy:"153",r:"11",fill:"#e1e4e3"}))}function G0({motionAllowed:e,suspended:t,activity:n}){let i=(0,Re.useRef)(null),s=(0,Re.useRef)(!1),[a,r]=(0,Re.useState)(!1),[o,l]=(0,Re.useState)(!1),[c,f]=(0,Re.useState)(()=>({hidden:typeof document>"u"||document.hidden,reduced:typeof window>"u"||!window.matchMedia||window.matchMedia(_d).matches}));(0,Re.useEffect)(()=>{let d=window.matchMedia?.(_d),v=()=>f({hidden:document.hidden,reduced:!d||d.matches});return v(),document.addEventListener("visibilitychange",v),d?.addEventListener?d.addEventListener("change",v):d?.addListener(v),()=>{document.removeEventListener("visibilitychange",v),d?.removeEventListener?d.removeEventListener("change",v):d?.removeListener(v)}},[]);let p=e&&!t&&n==="idle"&&!c.hidden&&!c.reduced&&!o;return(0,Re.useEffect)(()=>{if(!p||!i.current)return;let d=i.current,v,b,_=!1,h=new Set,m=new Set,x=()=>{_||(_=!0,b?.disconnect(),v&&(v.domElement.removeEventListener("webglcontextlost",E),v.setAnimationLoop(null)),h.forEach(A=>A.dispose()),m.forEach(A=>A.dispose()),v?.dispose(),v?.domElement.remove())},y=()=>{x(),l(!0)};function E(A){A.preventDefault(),y()}try{v=new pd({antialias:!0,alpha:!1,powerPreference:"low-power"}),v.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),v.domElement.setAttribute("aria-hidden","true"),v.domElement.style.cssText="display:block;width:100%;height:100%;",v.domElement.addEventListener("webglcontextlost",E),d.append(v.domElement);let A=new oc;A.background=new kt("#e9e9e4");let g=new Nn(38,1,.1,30);g.position.set(0,1.4,5.8),g.lookAt(0,.1,0),A.add(new vc(16777215,6844796,2.5));let T=new Sc(16777215,3);T.position.set(-3,5,4),A.add(T);let L=new is;A.add(L);let C=W=>{let ct=new mc({color:W,roughness:.42,metalness:.08,side:Mi});return m.add(ct),ct},U=C("#d83f47"),I=C("#fafaf7"),k=C("#222b34"),N=(W,ct,vt=L)=>{h.add(W);let Et=new Si(W,ct);return vt.add(Et),Et},G=new is;G.position.set(0,.025,-.94),L.add(G);let Y=N(new zo(1,40,20,0,Math.PI*2,0,Math.PI/2),U,G);Y.position.z=.94;let V=N(new dc(.99,40),k,G);V.rotation.x=Math.PI/2,V.position.z=.94;let et=N(new zo(1,40,20,0,Math.PI*2,Math.PI/2,Math.PI/2),I);et.position.y=-.025,N(new fr(1.005,1.005,.085,40),k);let X=N(new fr(.235,.235,.13,32),k);X.rotation.x=Math.PI/2,X.position.z=1;let $=N(new fr(.16,.16,.145,32),I);$.rotation.x=Math.PI/2,$.position.z=1.04;let tt=()=>{if(!_)try{let W=Math.max(1,Math.min(d.getBoundingClientRect().width||320,320));v.setSize(W,W,!1),g.aspect=1,g.updateProjectionMatrix(),v.render(A,g)}catch{y()}};typeof ResizeObserver<"u"&&(b=new ResizeObserver(tt),b.observe(d)),tt();let yt,Nt=s.current?-1.65:0;_||v.setAnimationLoop(W=>{if(!_){if(document.hidden||window.matchMedia?.(_d).matches){x(),f({hidden:document.hidden,reduced:!!window.matchMedia?.(_d).matches});return}try{let ct=yt===void 0?0:Math.min(Math.max((W-yt)/1e3,0),.05);yt=W;let vt=s.current?-1.65:0;Nt+=(vt-Nt)*(1-Math.exp(-7*ct)),G.rotation.x=Nt,L.rotation.y+=ct*.13,v.render(A,g)}catch{y()}}})}catch{y()}return x},[p]),Re.default.createElement("section",{"aria-label":"Decorative Pok\xE9 Ball",style:{textAlign:"center"}},Re.default.createElement("div",{style:vN},Re.default.createElement("div",{ref:i,role:p?"img":void 0,"aria-label":p?"Decorative three-dimensional Pok\xE9 Ball":void 0,style:{position:"absolute",inset:0,display:p?"block":"none"}}),!p&&Re.default.createElement(yN,null)),Re.default.createElement("p",{style:{fontSize:"0.85rem"}},"Decorative only \u2014 not a migration or model control."),p&&Re.default.createElement("button",{type:"button",onClick:()=>{s.current=!s.current,r(s.current)},"aria-expanded":a},a?"Close Pok\xE9 Ball":"Open Pok\xE9 Ball"))}function u1(e,t,n){let i=!0,s=!1,a=()=>{if(!i)return;s||=!!t();let o=!!e.querySelector("#load-model:disabled, #model-select:disabled, .migrate-target:disabled");n({model:e.querySelector("#model-status")?.textContent||"",migration:e.querySelector("#migration-status")?.textContent||"",busy:o,suspended:o||s})},r=new MutationObserver(a);for(let o of[".model-panel",".migration-panel","#model-status","#migration-status","#load-model","#model-select",".migrate-target"])for(let l of e.querySelectorAll(o))r.observe(l,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:["disabled"]});return queueMicrotask(a),()=>{i=!1,r.disconnect()}}function xN({readEngine:e}){let[t,n]=(0,fe.useState)({model:"",migration:"",busy:!1,suspended:!0}),[i,s]=(0,fe.useState)(!1),[a,r]=(0,fe.useState)(document.hidden);return(0,fe.useEffect)(()=>u1(document,e,n),[e]),(0,fe.useEffect)(()=>{let o=window.matchMedia("(prefers-reduced-motion: reduce)"),l=f=>s(!f.matches),c=()=>r(document.hidden);return l(o),o.addEventListener("change",l),document.addEventListener("visibilitychange",c),()=>{o.removeEventListener("change",l),document.removeEventListener("visibilitychange",c)}},[]),fe.default.createElement("section",{className:"workspace-hero","aria-label":"Migration workspace"},fe.default.createElement("div",{className:"hero-copy"},fe.default.createElement("p",{className:"eyebrow"},"LOCAL WORKSPACE / SQLITE \u2192 YOUR DATABASE"),fe.default.createElement("h2",null,"Small dataset.",fe.default.createElement("br",null),fe.default.createElement("span",null,"Real migration discipline.")),fe.default.createElement("p",null,"Explore the fixture, test without writes, then migrate explicitly. Python validates the model's output before persistence."),fe.default.createElement("ol",{className:"workflow"},fe.default.createElement("li",null,"Load a model"),fe.default.createElement("li",null,"Run a no-write pilot"),fe.default.createElement("li",null,"Migrate & verify readback")),fe.default.createElement("details",{className:"status-context"},fe.default.createElement("summary",null,"Current controller messages"),fe.default.createElement("p",null,t.model),fe.default.createElement("p",null,t.migration),fe.default.createElement("small",null,"Messages mirror the controls below; they are not independent verification."))),fe.default.createElement("div",{className:"hero-decoration"},fe.default.createElement(G0,{motionAllowed:i,suspended:a||t.suspended,activity:t.busy?"busy":"idle"}),fe.default.createElement("p",{className:"decoration-caption"},"A little exploration. No database actions.")))}var h1=document.getElementById("interface-root");h1&&import("/static/model_loader.js").then(({getLoadedEngine:t})=>{(0,f1.createRoot)(h1).render(fe.default.createElement(xN,{readEngine:t}))});export{xN as App};
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
