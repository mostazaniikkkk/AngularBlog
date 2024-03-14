var lx=Object.defineProperty,ux=Object.defineProperties;var dx=Object.getOwnPropertyDescriptors;var Ap=Object.getOwnPropertySymbols;var hx=Object.prototype.hasOwnProperty,fx=Object.prototype.propertyIsEnumerable;var Dp=(n,e,t)=>e in n?lx(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,pe=(n,e)=>{for(var t in e||={})hx.call(e,t)&&Dp(n,t,e[t]);if(Ap)for(var t of Ap(e))fx.call(e,t)&&Dp(n,t,e[t]);return n},wt=(n,e)=>ux(n,dx(e));var Jl=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});function px(n,e){return Object.is(n,e)}var Ut=null,Ma=!1,Sa=1,Kl=Symbol("SIGNAL");function tn(n){let e=Ut;return Ut=n,e}var Ql={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Ip(n){if(Ma)throw new Error("");if(Ut===null)return;Ut.consumerOnSignalRead(n);let e=Ut.nextProducerIndex++;if(Wr(Ut),e<Ut.producerNode.length&&Ut.producerNode[e]!==n&&uo(Ut)){let t=Ut.producerNode[e];ba(t,Ut.producerIndexOfThis[e])}Ut.producerNode[e]!==n&&(Ut.producerNode[e]=n,Ut.producerIndexOfThis[e]=uo(Ut)?Op(n,Ut,e):0),Ut.producerLastReadVersion[e]=n.version}function mx(){Sa++}function gx(n){if(!(uo(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Sa)){if(!n.producerMustRecompute(n)&&!eu(n)){n.dirty=!1,n.lastCleanEpoch=Sa;return}n.producerRecomputeValue(n),n.dirty=!1,n.lastCleanEpoch=Sa}}function Rp(n){if(n.liveConsumerNode===void 0)return;let e=Ma;Ma=!0;try{for(let t of n.liveConsumerNode)t.dirty||yx(t)}finally{Ma=e}}function vx(){return Ut?.consumerAllowSignalWrites!==!1}function yx(n){n.dirty=!0,Rp(n),n.consumerMarkedDirty?.(n)}function Pp(n){return n&&(n.nextProducerIndex=0),tn(n)}function Np(n,e){if(tn(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(uo(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)ba(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function eu(n){Wr(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(gx(t),i!==t.version))return!0}return!1}function Lp(n){if(Wr(n),uo(n))for(let e=0;e<n.producerNode.length;e++)ba(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function Op(n,e,t){if(Fp(n),Wr(n),n.liveConsumerNode.length===0)for(let i=0;i<n.producerNode.length;i++)n.producerIndexOfThis[i]=Op(n.producerNode[i],n,i);return n.liveConsumerIndexOfThis.push(t),n.liveConsumerNode.push(e)-1}function ba(n,e){if(Fp(n),Wr(n),n.liveConsumerNode.length===1)for(let i=0;i<n.producerNode.length;i++)ba(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];Wr(r),r.producerIndexOfThis[i]=e}}function uo(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function Wr(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function Fp(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function _x(){throw new Error}var Up=_x;function xx(){Up()}function kp(n){Up=n}var Mx=null;function Bp(n,e){vx()||xx(),n.equal(n.value,e)||(n.value=e,Sx(n))}var Vp=wt(pe({},Ql),{equal:px,value:void 0});function Sx(n){n.version++,mx(),Rp(n),Mx?.()}function Pe(n){return typeof n=="function"}function jr(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var wa=jr(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function ho(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Rt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Pe(i))try{i()}catch(s){e=s instanceof wa?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{zp(s)}catch(o){e=e??[],o instanceof wa?e=[...e,...o.errors]:e.push(o)}}if(e)throw new wa(e)}}add(e){var t;if(e&&e!==this)if(this.closed)zp(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&ho(t,e)}remove(e){let{_finalizers:t}=this;t&&ho(t,e),e instanceof n&&e._removeParent(this)}};Rt.EMPTY=(()=>{let n=new Rt;return n.closed=!0,n})();var tu=Rt.EMPTY;function Ea(n){return n instanceof Rt||n&&"closed"in n&&Pe(n.remove)&&Pe(n.add)&&Pe(n.unsubscribe)}function zp(n){Pe(n)?n():n.unsubscribe()}var Un={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var $r={setTimeout(n,e,...t){let{delegate:i}=$r;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=$r;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function Ta(n){$r.setTimeout(()=>{let{onUnhandledError:e}=Un;if(e)e(n);else throw n})}function fo(){}var Hp=nu("C",void 0,void 0);function Gp(n){return nu("E",void 0,n)}function Wp(n){return nu("N",n,void 0)}function nu(n,e,t){return{kind:n,value:e,error:t}}var sr=null;function qr(n){if(Un.useDeprecatedSynchronousErrorHandling){let e=!sr;if(e&&(sr={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=sr;if(sr=null,t)throw i}}else n()}function jp(n){Un.useDeprecatedSynchronousErrorHandling&&sr&&(sr.errorThrown=!0,sr.error=n)}var or=class extends Rt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Ea(e)&&e.add(this)):this.destination=Ex}static create(e,t,i){return new Xr(e,t,i)}next(e){this.isStopped?ru(Wp(e),this):this._next(e)}error(e){this.isStopped?ru(Gp(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?ru(Hp,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},bx=Function.prototype.bind;function iu(n,e){return bx.call(n,e)}var su=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){Ca(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){Ca(i)}else Ca(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){Ca(t)}}},Xr=class extends or{constructor(e,t,i){super();let r;if(Pe(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Un.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&iu(e.next,s),error:e.error&&iu(e.error,s),complete:e.complete&&iu(e.complete,s)}):r=e}this.destination=new su(r)}};function Ca(n){Un.useDeprecatedSynchronousErrorHandling?jp(n):Ta(n)}function wx(n){throw n}function ru(n,e){let{onStoppedNotification:t}=Un;t&&$r.setTimeout(()=>t(n,e))}var Ex={closed:!0,next:fo,error:wx,complete:fo};var Yr=typeof Symbol=="function"&&Symbol.observable||"@@observable";function yn(n){return n}function ou(...n){return au(n)}function au(n){return n.length===0?yn:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var ft=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=Cx(t)?t:new Xr(t,i,r);return qr(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=$p(i),new i((r,s)=>{let o=new Xr({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[Yr](){return this}pipe(...t){return au(t)(this)}toPromise(t){return t=$p(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function $p(n){var e;return(e=n??Un.Promise)!==null&&e!==void 0?e:Promise}function Tx(n){return n&&Pe(n.next)&&Pe(n.error)&&Pe(n.complete)}function Cx(n){return n&&n instanceof or||Tx(n)&&Ea(n)}function cu(n){return Pe(n?.lift)}function Qe(n){return e=>{if(cu(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function et(n,e,t,i,r){return new lu(n,e,t,i,r)}var lu=class extends or{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function Zr(){return Qe((n,e)=>{let t=null;n._refCount++;let i=et(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var Jr=class extends ft{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,cu(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Rt;let t=this.getSubject();e.add(this.source.subscribe(et(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Rt.EMPTY)}return e}refCount(){return Zr()(this)}};var qp=jr(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var nn=(()=>{class n extends ft{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new Aa(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new qp}next(t){qr(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){qr(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){qr(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?tu:(this.currentObservers=null,s.push(t),new Rt(()=>{this.currentObservers=null,ho(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new ft;return t.source=this,t}}return n.create=(e,t)=>new Aa(e,t),n})(),Aa=class extends nn{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:tu}};var jt=class extends nn{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var En=new ft(n=>n.complete());function Xp(n){return n&&Pe(n.schedule)}function Yp(n){return n[n.length-1]}function Zp(n){return Pe(Yp(n))?n.pop():void 0}function Oi(n){return Xp(Yp(n))?n.pop():void 0}function Kp(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function Jp(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function ar(n){return this instanceof ar?(this.v=n,this):new ar(n)}function Qp(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(h){i[h]&&(r[h]=function(m){return new Promise(function(g,_){s.push([h,m,g,_])>1||a(h,m)})})}function a(h,m){try{c(i[h](m))}catch(g){d(s[0][3],g)}}function c(h){h.value instanceof ar?Promise.resolve(h.value.v).then(l,u):d(s[0][2],h)}function l(h){a("next",h)}function u(h){a("throw",h)}function d(h,m){h(m),s.shift(),s.length&&a(s[0][0],s[0][1])}}function em(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Jp=="function"?Jp(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var Da=n=>n&&typeof n.length=="number"&&typeof n!="function";function Ia(n){return Pe(n?.then)}function Ra(n){return Pe(n[Yr])}function Pa(n){return Symbol.asyncIterator&&Pe(n?.[Symbol.asyncIterator])}function Na(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Ax(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var La=Ax();function Oa(n){return Pe(n?.[La])}function Fa(n){return Qp(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield ar(t.read());if(r)return yield ar(void 0);yield yield ar(i)}}finally{t.releaseLock()}})}function Ua(n){return Pe(n?.getReader)}function kt(n){if(n instanceof ft)return n;if(n!=null){if(Ra(n))return Dx(n);if(Da(n))return Ix(n);if(Ia(n))return Rx(n);if(Pa(n))return tm(n);if(Oa(n))return Px(n);if(Ua(n))return Nx(n)}throw Na(n)}function Dx(n){return new ft(e=>{let t=n[Yr]();if(Pe(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Ix(n){return new ft(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function Rx(n){return new ft(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,Ta)})}function Px(n){return new ft(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function tm(n){return new ft(e=>{Lx(n,e).catch(t=>e.error(t))})}function Nx(n){return tm(Fa(n))}function Lx(n,e){var t,i,r,s;return Kp(this,void 0,void 0,function*(){try{for(t=em(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function cn(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function ka(n,e=0){return Qe((t,i)=>{t.subscribe(et(i,r=>cn(i,n,()=>i.next(r),e),()=>cn(i,n,()=>i.complete(),e),r=>cn(i,n,()=>i.error(r),e)))})}function Ba(n,e=0){return Qe((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function nm(n,e){return kt(n).pipe(Ba(e),ka(e))}function im(n,e){return kt(n).pipe(Ba(e),ka(e))}function rm(n,e){return new ft(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function sm(n,e){return new ft(t=>{let i;return cn(t,e,()=>{i=n[La](),cn(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Pe(i?.return)&&i.return()})}function Va(n,e){if(!n)throw new Error("Iterable cannot be null");return new ft(t=>{cn(t,e,()=>{let i=n[Symbol.asyncIterator]();cn(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function om(n,e){return Va(Fa(n),e)}function am(n,e){if(n!=null){if(Ra(n))return nm(n,e);if(Da(n))return rm(n,e);if(Ia(n))return im(n,e);if(Pa(n))return Va(n,e);if(Oa(n))return sm(n,e);if(Ua(n))return om(n,e)}throw Na(n)}function Pt(n,e){return e?am(n,e):kt(n)}function Oe(...n){let e=Oi(n);return Pt(n,e)}function Kr(n,e){let t=Pe(n)?n:()=>n,i=r=>r.error(t());return new ft(e?r=>e.schedule(i,0,r):i)}function uu(n){return!!n&&(n instanceof ft||Pe(n.lift)&&Pe(n.subscribe))}var fi=jr(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function tt(n,e){return Qe((t,i)=>{let r=0;t.subscribe(et(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:Ox}=Array;function Fx(n,e){return Ox(e)?n(...e):n(e)}function cm(n){return tt(e=>Fx(n,e))}var{isArray:Ux}=Array,{getPrototypeOf:kx,prototype:Bx,keys:Vx}=Object;function lm(n){if(n.length===1){let e=n[0];if(Ux(e))return{args:e,keys:null};if(zx(e)){let t=Vx(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function zx(n){return n&&typeof n=="object"&&kx(n)===Bx}function um(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function za(...n){let e=Oi(n),t=Zp(n),{args:i,keys:r}=lm(n);if(i.length===0)return Pt([],e);let s=new ft(Hx(i,e,r?o=>um(r,o):yn));return t?s.pipe(cm(t)):s}function Hx(n,e,t=yn){return i=>{dm(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)dm(e,()=>{let l=Pt(n[c],e),u=!1;l.subscribe(et(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function dm(n,e,t){n?cn(t,n,e):e()}function hm(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,h=()=>{d&&!c.length&&!l&&e.complete()},m=_=>l<i?g(_):c.push(_),g=_=>{s&&e.next(_),l++;let p=!1;kt(t(_,u++)).subscribe(et(e,f=>{r?.(f),s?m(f):e.next(f)},()=>{p=!0},void 0,()=>{if(p)try{for(l--;c.length&&l<i;){let f=c.shift();o?cn(e,o,()=>g(f)):g(f)}h()}catch(f){e.error(f)}}))};return n.subscribe(et(e,m,()=>{d=!0,h()})),()=>{a?.()}}function Nt(n,e,t=1/0){return Pe(e)?Nt((i,r)=>tt((s,o)=>e(i,s,r,o))(kt(n(i,r))),t):(typeof e=="number"&&(t=e),Qe((i,r)=>hm(i,r,n,t)))}function du(n=1/0){return Nt(yn,n)}function fm(){return du(1)}function Qr(...n){return fm()(Pt(n,Oi(n)))}function Ha(n){return new ft(e=>{kt(n()).subscribe(e)})}function kn(n,e){return Qe((t,i)=>{let r=0;t.subscribe(et(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Fi(n){return Qe((e,t)=>{let i=null,r=!1,s;i=e.subscribe(et(t,void 0,void 0,o=>{s=kt(n(o,Fi(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function pm(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(et(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function es(n,e){return Pe(e)?Nt(n,e,1):Nt(n,1)}function Ui(n){return Qe((e,t)=>{let i=!1;e.subscribe(et(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function pi(n){return n<=0?()=>En:Qe((e,t)=>{let i=0;e.subscribe(et(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function hu(n){return tt(()=>n)}function Ga(n=Gx){return Qe((e,t)=>{let i=!1;e.subscribe(et(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function Gx(){return new fi}function po(n){return Qe((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function Kn(n,e){let t=arguments.length>=2;return i=>i.pipe(n?kn((r,s)=>n(r,s,i)):yn,pi(1),t?Ui(e):Ga(()=>new fi))}function ts(n){return n<=0?()=>En:Qe((e,t)=>{let i=[];e.subscribe(et(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function fu(n,e){let t=arguments.length>=2;return i=>i.pipe(n?kn((r,s)=>n(r,s,i)):yn,ts(1),t?Ui(e):Ga(()=>new fi))}function pu(n,e){return Qe(pm(n,e,arguments.length>=2,!0))}function mu(...n){let e=Oi(n);return Qe((t,i)=>{(e?Qr(n,t,e):Qr(n,t)).subscribe(i)})}function Bn(n,e){return Qe((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(et(i,c=>{r?.unsubscribe();let l=0,u=s++;kt(n(c,u)).subscribe(r=et(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function gu(n){return Qe((e,t)=>{kt(n).subscribe(et(t,()=>t.complete(),fo)),!t.closed&&e.subscribe(t)})}function Bt(n,e,t){let i=Pe(n)||e||t?{next:n,error:e,complete:t}:n;return i?Qe((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(et(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):yn}var Zm="https://g.co/ng/security#xss",Ae=class extends Error{constructor(e,t){super(md(e,t)),this.code=e}};function md(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}var Jm=Symbol("InputSignalNode#UNSET"),Wx=wt(pe({},Vp),{transformFn:void 0,applyValueToInputSignal(n,e){Bp(n,e)}});function Km(n,e){let t=Object.create(Wx);t.value=n,t.transformFn=e?.transform;function i(){if(Ip(t),t.value===Jm)throw new Ae(-950,!1);return t.value}return i[Kl]=t,i}var Iu=class extends nn{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=vu(s),r&&(r=vu(r)),o&&(o=vu(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Rt&&e.add(a),a}};function vu(n){return e=>{setTimeout(n,void 0,e)}}var Cn=Iu;function mm(n,e){return Km(n,e)}function jx(n){return Km(Jm,n)}var dn=(mm.required=jx,mm),qe=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(qe||{});function ln(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(ln).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function gm(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var Qm=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(Qm||{}),ti=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(ti||{});function gd(n){return{toString:n}.toString()}var mo=globalThis;var _o={},lr=[];function gt(n){for(let e in n)if(n[e]===gt)return e;throw Error("Could not find renamed property on target object.")}var $x=gt({\u0275cmp:gt}),qx=gt({\u0275dir:gt}),Xx=gt({\u0275pipe:gt}),Yx=gt({\u0275mod:gt}),Ja=gt({\u0275fac:gt}),go=gt({__NG_ELEMENT_ID__:gt}),vm=gt({__NG_ENV_ID__:gt}),Et=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(Et||{});function eg(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}function Ru(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];Jx(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function Zx(n){return n===3||n===4||n===6}function Jx(n){return n.charCodeAt(0)===64}function vd(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?ym(n,t,r,null,e[++i]):ym(n,t,r,null,null))}}return n}function ym(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var tg="ng-template";function Kx(n,e,t){let i=0,r=!0;for(;i<n.length;){let s=n[i++];if(typeof s=="string"&&r){let o=n[i++];if(t&&s==="class"&&eg(o.toLowerCase(),e,0)!==-1)return!0}else if(s===1){for(;i<n.length&&typeof(s=n[i++])=="string";)if(s.toLowerCase()===e)return!0;return!1}else typeof s=="number"&&(r=!1)}return!1}function ng(n){return n.type===4&&n.value!==tg}function Qx(n,e,t){let i=n.type===4&&!t?tg:n.value;return e===i}function eM(n,e,t){let i=4,r=n.attrs||[],s=iM(r),o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!Vn(i)&&!Vn(c))return!1;if(o&&Vn(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!Qx(n,c,t)||c===""&&e.length===1){if(Vn(i))return!1;o=!0}}else{let l=i&8?c:e[++a];if(i&8&&n.attrs!==null){if(!Kx(n.attrs,l,t)){if(Vn(i))return!1;o=!0}continue}let u=i&8?"class":c,d=tM(u,r,ng(n),t);if(d===-1){if(Vn(i))return!1;o=!0;continue}if(l!==""){let h;d>s?h="":h=r[d+1].toLowerCase();let m=i&8?h:null;if(m&&eg(m,l,0)!==-1||i&2&&l!==h){if(Vn(i))return!1;o=!0}}}}return Vn(i)||o}function Vn(n){return(n&1)===0}function tM(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return rM(e,n)}function nM(n,e,t=!1){for(let i=0;i<e.length;i++)if(eM(n,e[i],t))return!0;return!1}function iM(n){for(let e=0;e<n.length;e++){let t=n[e];if(Zx(t))return e}return n.length}function rM(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function _m(n,e){return n?":not("+e.trim()+")":e}function sM(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!Vn(o)&&(e+=_m(s,r),r=""),i=o,s=s||!Vn(i);t++}return r!==""&&(e+=_m(s,r)),e}function oM(n){return n.map(sM).join(",")}function aM(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!Vn(r))break;r=s}i++}return{attrs:e,classes:t}}function Vt(n){return gd(()=>{let e=ag(n),t=wt(pe({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===Qm.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||ti.Emulated,styles:n.styles||lr,_:null,schemas:n.schemas||null,tView:null,id:""});cg(t);let i=n.dependencies;return t.directiveDefs=Mm(i,!1),t.pipeDefs=Mm(i,!0),t.id=uM(t),t})}function cM(n){return ur(n)||ig(n)}function lM(n){return n!==null}function xm(n,e){if(n==null)return _o;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a=Et.None;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s):(s=r,o=r),e?(t[s]=a!==Et.None?[i,a]:i,e[s]=o):t[s]=i}return t}function yd(n){return gd(()=>{let e=ag(n);return cg(e),e})}function ur(n){return n[$x]||null}function ig(n){return n[qx]||null}function rg(n){return n[Xx]||null}function sg(n){let e=ur(n)||ig(n)||rg(n);return e!==null?e.standalone:!1}function og(n,e){let t=n[Yx]||null;if(!t&&e===!0)throw new Error(`Type ${ln(n)} does not have '\u0275mod' property.`);return t}function ag(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||_o,exportAs:n.exportAs||null,standalone:n.standalone===!0,signals:n.signals===!0,selectors:n.selectors||lr,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:xm(n.inputs,e),outputs:xm(n.outputs),debugInfo:null}}function cg(n){n.features?.forEach(e=>e(n))}function Mm(n,e){if(!n)return null;let t=e?rg:cM;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(lM)}function uM(n){let e=0,t=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,n.consts,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery].join("|");for(let r of t)e=Math.imul(31,e)+r.charCodeAt(0)<<0;return e+=2147483648,"c"+e}var _i=0,He=1,Te=2,$t=3,zn=4,Gn=5,Ka=6,xo=7,Hn=8,as=9,mi=10,rn=11,Mo=12,Sm=13,fs=14,ni=15,Po=16,ns=17,gi=18,mc=19,lg=20,vo=21,yu=22,dr=23,ii=25,ug=1;var hr=7,Qa=8,cs=9,un=10,_d=function(n){return n[n.None=0]="None",n[n.HasTransplantedViews=2]="HasTransplantedViews",n}(_d||{});function ss(n){return Array.isArray(n)&&typeof n[ug]=="object"}function xi(n){return Array.isArray(n)&&n[ug]===!0}function dg(n){return(n.flags&4)!==0}function gc(n){return n.componentOffset>-1}function xd(n){return(n.flags&1)===1}function No(n){return!!n.template}function dM(n){return(n[Te]&512)!==0}var hM="svg",fM="math",pM=!1;function mM(){return pM}function ri(n){for(;Array.isArray(n);)n=n[_i];return n}function hg(n,e){return ri(e[n])}function Wn(n,e){return ri(e[n.index])}function Md(n,e){return n.data[e]}function vr(n,e){let t=e[n];return ss(t)?t:t[_i]}function gM(n){return(n[Te]&4)===4}function Sd(n){return(n[Te]&128)===128}function vM(n){return xi(n[$t])}function ec(n,e){return e==null?null:n[e]}function fg(n){n[ns]=0}function yM(n){n[Te]&1024||(n[Te]|=1024,Sd(n)&&So(n))}function _M(n,e){for(;n>0;)e=e[fs],n--;return e}function bd(n){return!!(n[Te]&9216||n[dr]?.dirty)}function Pu(n){bd(n)?So(n):n[Te]&64&&(mM()?(n[Te]|=1024,So(n)):n[mi].changeDetectionScheduler?.notify())}function So(n){n[mi].changeDetectionScheduler?.notify();let e=bo(n);for(;e!==null&&!(e[Te]&8192||(e[Te]|=8192,!Sd(e)));)e=bo(e)}function xM(n,e){if((n[Te]&256)===256)throw new Ae(911,!1);n[vo]===null&&(n[vo]=[]),n[vo].push(e)}function bo(n){let e=n[$t];return xi(e)?e[$t]:e}var Ke={lFrame:xg(null),bindingsEnabled:!0,skipHydrationRootTNode:null};function MM(){return Ke.lFrame.elementDepthCount}function SM(){Ke.lFrame.elementDepthCount++}function bM(){Ke.lFrame.elementDepthCount--}function pg(){return Ke.bindingsEnabled}function wM(){return Ke.skipHydrationRootTNode!==null}function EM(n){return Ke.skipHydrationRootTNode===n}function TM(){Ke.skipHydrationRootTNode=null}function Tt(){return Ke.lFrame.lView}function si(){return Ke.lFrame.tView}function oi(){let n=mg();for(;n!==null&&n.type===64;)n=n.parent;return n}function mg(){return Ke.lFrame.currentTNode}function CM(){let n=Ke.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Lo(n,e){let t=Ke.lFrame;t.currentTNode=n,t.isParent=e}function gg(){return Ke.lFrame.isParent}function AM(){Ke.lFrame.isParent=!1}function DM(n){return Ke.lFrame.bindingIndex=n}function wd(){return Ke.lFrame.bindingIndex++}function IM(n){let e=Ke.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function RM(){return Ke.lFrame.inI18n}function PM(n,e){let t=Ke.lFrame;t.bindingIndex=t.bindingRootIndex=n,Nu(e)}function NM(){return Ke.lFrame.currentDirectiveIndex}function Nu(n){Ke.lFrame.currentDirectiveIndex=n}function LM(n){let e=Ke.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function vg(){return Ke.lFrame.currentQueryIndex}function Ed(n){Ke.lFrame.currentQueryIndex=n}function OM(n){let e=n[He];return e.type===2?e.declTNode:e.type===1?n[Gn]:null}function yg(n,e,t){if(t&qe.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&qe.Host);)if(r=OM(s),r===null||(s=s[fs],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=Ke.lFrame=_g();return i.currentTNode=e,i.lView=n,!0}function Td(n){let e=_g(),t=n[He];Ke.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function _g(){let n=Ke.lFrame,e=n===null?null:n.child;return e===null?xg(n):e}function xg(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function Mg(){let n=Ke.lFrame;return Ke.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var Sg=Mg;function Cd(){let n=Mg();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function FM(n){return(Ke.lFrame.contextLView=_M(n,Ke.lFrame.contextLView))[Hn]}function ps(){return Ke.lFrame.selectedIndex}function fr(n){Ke.lFrame.selectedIndex=n}function UM(){let n=Ke.lFrame;return Md(n.tView,n.selectedIndex)}function kM(){return Ke.lFrame.currentNamespace}var bg=!0;function Ad(){return bg}function Dd(n){bg=n}function BM(){return ms(oi(),Tt())}function ms(n,e){return new yr(Wn(n,e))}var yr=(()=>{let e=class e{constructor(i){this.nativeElement=i}};e.__NG_ELEMENT_ID__=BM;let n=e;return n})();function VM(n){return n instanceof yr?n.nativeElement:n}function zM(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function HM(n){return n.flat(Number.POSITIVE_INFINITY)}function Id(n,e){n.forEach(t=>Array.isArray(t)?Id(t,e):e(t))}function wg(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function tc(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function GM(n,e,t,i){let r=n.length;if(r==e)n.push(t,i);else if(r===1)n.push(i,n[0]),n[0]=t;else{for(r--,n.push(n[r-1],n[r]);r>e;){let s=r-2;n[r]=n[s],r--}n[e]=t,n[e+1]=i}}function WM(n,e,t){let i=Oo(n,e);return i>=0?n[i|1]=t:(i=~i,GM(n,i,e,t)),i}function _u(n,e){let t=Oo(n,e);if(t>=0)return n[t|1]}function Oo(n,e){return jM(n,e,1)}function jM(n,e,t){let i=0,r=n.length>>t;for(;r!==i;){let s=i+(r-i>>1),o=n[s<<t];if(e===o)return s<<t;o>e?r=s:i=s+1}return~(r<<t)}function $M(){return this._results[Symbol.iterator]()}var Lu=class n{get changes(){return this._changes??=new Cn}constructor(e=!1){this._emitDistinctChangesOnly=e,this.dirty=!0,this._onDirty=void 0,this._results=[],this._changesDetected=!1,this._changes=void 0,this.length=0,this.first=void 0,this.last=void 0;let t=n.prototype;t[Symbol.iterator]||(t[Symbol.iterator]=$M)}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=HM(e);(this._changesDetected=!zM(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}};function Eg(n){return(n.flags&128)===128}var Ou;function Tg(n){Ou=n}function qM(){if(Ou!==void 0)return Ou;if(typeof document<"u")return document;throw new Ae(210,!1)}function Ne(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function vc(n){return bm(n,Ag)||bm(n,Dg)}function Cg(n){return vc(n)!==null}function bm(n,e){return n.hasOwnProperty(e)?n[e]:null}function XM(n){let e=n&&(n[Ag]||n[Dg]);return e||null}function wm(n){return n&&(n.hasOwnProperty(Em)||n.hasOwnProperty(YM))?n[Em]:null}var Ag=gt({\u0275prov:gt}),Em=gt({\u0275inj:gt}),Dg=gt({ngInjectableDef:gt}),YM=gt({ngInjectorDef:gt}),nt=class{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Ne({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}},Rd=new nt("",{providedIn:"root",factory:()=>ZM}),ZM="ng",Pd=new nt(""),gs=new nt("",{providedIn:"platform",factory:()=>"unknown"});var Nd=new nt("",{providedIn:"root",factory:()=>qM().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var JM=gt({__forward_ref__:gt});function Ig(n){return n.__forward_ref__=Ig,n.toString=function(){return ln(this())},n}function An(n){return Rg(n)?n():n}function Rg(n){return typeof n=="function"&&n.hasOwnProperty(JM)&&n.__forward_ref__===Ig}function Pg(n){return n&&!!n.\u0275providers}function Ld(n){return typeof n=="string"?n:n==null?"":String(n)}function KM(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():Ld(n)}function QM(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new Ae(-200,n)}function Od(n,e){throw new Ae(-201,!1)}var Fu;function eS(){return Fu}function Tn(n){let e=Fu;return Fu=n,e}function Ng(n,e,t){let i=vc(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&qe.Optional)return null;if(e!==void 0)return e;Od(n,"Injector")}var tS={},wo=tS,nS="__NG_DI_FLAG__",nc="ngTempTokenPath",iS="ngTokenPath",rS=/\n/gm,sS="\u0275",Tm="__source",yo;function ki(n){let e=yo;return yo=n,e}function oS(n,e=qe.Default){if(yo===void 0)throw new Ae(-203,!1);return yo===null?Ng(n,void 0,e):yo.get(n,e&qe.Optional?null:void 0,e)}function it(n,e=qe.Default){return(eS()||oS)(An(n),e)}function ue(n,e=qe.Default){return it(n,yc(e))}function yc(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function Uu(n){let e=[];for(let t=0;t<n.length;t++){let i=An(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Ae(900,!1);let r,s=qe.Default;for(let o=0;o<i.length;o++){let a=i[o],c=aS(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(it(r,s))}else e.push(it(i))}return e}function aS(n){return n[nS]}function cS(n,e,t,i){let r=n[nc];throw e[Tm]&&r.unshift(e[Tm]),n.message=lS(`
`+n.message,r,t,i),n[iS]=r,n[nc]=null,n}function lS(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==sS?n.slice(2):n;let r=ln(e);if(Array.isArray(e))r=e.map(ln).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):ln(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(rS,`
  `)}`}var uS="h",dS="b";var hS=()=>null;function Fd(n,e,t=!1){return hS(n,e,t)}function ls(n,e){let t=n.hasOwnProperty(Ja);return t?n[Ja]:null}var us=new nt(""),Lg=new nt("",-1),Og=new nt(""),ic=class{get(e,t=wo){if(t===wo){let i=new Error(`NullInjectorError: No provider for ${ln(e)}!`);throw i.name="NullInjectorError",i}return t}};function _c(n){return{\u0275providers:n}}function fS(...n){return{\u0275providers:Fg(!0,n),\u0275fromNgModule:!0}}function Fg(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return Id(e,o=>{let a=o;ku(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Ug(r,s),t}function Ug(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];Ud(r,s=>{e(s,i)})}}function ku(n,e,t,i){if(n=An(n),!n)return!1;let r=null,s=wm(n),o=!s&&ur(n);if(!s&&!o){let c=n.ngModule;if(s=wm(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)ku(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{Id(s.imports,u=>{ku(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&Ug(l,e)}if(!a){let l=ls(r)||(()=>new r);e({provide:r,useFactory:l,deps:lr},r),e({provide:Og,useValue:r,multi:!0},r),e({provide:us,useValue:()=>it(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;Ud(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function Ud(n,e){for(let t of n)Pg(t)&&(t=t.\u0275providers),Array.isArray(t)?Ud(t,e):e(t)}var pS=gt({provide:String,useValue:gt});function kg(n){return n!==null&&typeof n=="object"&&pS in n}function mS(n){return!!(n&&n.useExisting)}function gS(n){return!!(n&&n.useFactory)}function Bu(n){return typeof n=="function"}var xc=new nt(""),ja={},vS={},xu;function kd(){return xu===void 0&&(xu=new ic),xu}var Dn=class{},Eo=class extends Dn{get destroyed(){return this._destroyed}constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,zu(e,o=>this.processProvider(o)),this.records.set(Lg,is(void 0,this)),r.has("environment")&&this.records.set(Dn,is(void 0,this));let s=this.records.get(xc);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(Og,lr,qe.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(let t of this._ngOnDestroyHooks)t.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let t of e)t()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear()}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let t=ki(this),i=Tn(void 0),r;try{return e()}finally{ki(t),Tn(i)}}get(e,t=wo,i=qe.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(vm))return e[vm](this);i=yc(i);let r,s=ki(this),o=Tn(void 0);try{if(!(i&qe.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=bS(e)&&vc(e);l&&this.injectableDefInScope(l)?c=is(Vu(e),ja):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&qe.Self?kd():this.parent;return t=i&qe.Optional&&t===wo?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[nc]=a[nc]||[]).unshift(ln(e)),s)throw a;return cS(a,e,"R3InjectorError",this.source)}else throw a}finally{Tn(o),ki(s)}}resolveInjectorInitializers(){let e=ki(this),t=Tn(void 0),i;try{let r=this.get(us,lr,qe.Self);for(let s of r)s()}finally{ki(e),Tn(t)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(ln(i));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Ae(205,!1)}processProvider(e){e=An(e);let t=Bu(e)?e:An(e&&e.provide),i=_S(e);if(!Bu(e)&&e.multi===!0){let r=this.records.get(t);r||(r=is(void 0,ja,!0),r.factory=()=>Uu(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){return t.value===ja&&(t.value=vS,t.value=t.factory()),typeof t.value=="object"&&t.value&&SS(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}injectableDefInScope(e){if(!e.providedIn)return!1;let t=An(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function Vu(n){let e=vc(n),t=e!==null?e.factory:ls(n);if(t!==null)return t;if(n instanceof nt)throw new Ae(204,!1);if(n instanceof Function)return yS(n);throw new Ae(204,!1)}function yS(n){if(n.length>0)throw new Ae(204,!1);let t=XM(n);return t!==null?()=>t.factory(n):()=>new n}function _S(n){if(kg(n))return is(void 0,n.useValue);{let e=xS(n);return is(e,ja)}}function xS(n,e,t){let i;if(Bu(n)){let r=An(n);return ls(r)||Vu(r)}else if(kg(n))i=()=>An(n.useValue);else if(gS(n))i=()=>n.useFactory(...Uu(n.deps||[]));else if(mS(n))i=()=>it(An(n.useExisting));else{let r=An(n&&(n.useClass||n.provide));if(MS(n))i=()=>new r(...Uu(n.deps));else return ls(r)||Vu(r)}return i}function is(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function MS(n){return!!n.deps}function SS(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function bS(n){return typeof n=="function"||typeof n=="object"&&n instanceof nt}function zu(n,e){for(let t of n)Array.isArray(t)?zu(t,e):t&&Pg(t)?zu(t.\u0275providers,e):e(t)}function _r(n,e){n instanceof Eo&&n.assertNotDestroyed();let t,i=ki(n),r=Tn(void 0);try{return e()}finally{ki(i),Tn(r)}}function wS(n){return typeof n=="function"}var Hu=class{constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function Bg(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}function Mc(){return Vg}function Vg(n){return n.type.prototype.ngOnChanges&&(n.setInput=TS),ES}Mc.ngInherit=!0;function ES(){let n=Hg(this),e=n?.current;if(e){let t=n.previous;if(t===_o)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function TS(n,e,t,i,r){let s=this.declaredInputs[i],o=Hg(n)||CS(n,{previous:_o,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new Hu(l&&l.currentValue,t,c===_o),Bg(n,e,r,t)}var zg="__ngSimpleChanges__";function Hg(n){return n[zg]||null}function CS(n,e){return n[zg]=e}var Cm=null;var Qn=function(n,e,t){Cm?.(n,e,t)};function AS(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=Vg(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function Bd(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function $a(n,e,t){Gg(n,e,3,t)}function qa(n,e,t,i){(n[Te]&3)===t&&Gg(n,e,t,i)}function Mu(n,e){let t=n[Te];(t&3)===e&&(t&=16383,t+=1,n[Te]=t)}function Gg(n,e,t,i){let r=i!==void 0?n[ns]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[ns]+=65536),(a<s||s==-1)&&(DS(n,t,e,c),n[ns]=(n[ns]&4294901760)+c+2),c++}function Am(n,e){Qn(4,n,e);let t=tn(null);try{e.call(n)}finally{tn(t),Qn(5,n,e)}}function DS(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Te]>>14<n[ns]>>16&&(n[Te]&3)===e&&(n[Te]+=16384,Am(a,s)):Am(a,s)}var os=-1,To=class{constructor(e,t,i){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=i}};function IS(n){return n instanceof To}function RS(n){return(n.flags&8)!==0}function PS(n){return(n.flags&16)!==0}function Wg(n){return n!==os}function rc(n){return n&32767}function NS(n){return n>>16}function sc(n,e){let t=NS(n),i=e;for(;t>0;)i=i[fs],t--;return i}var Gu=!0;function Dm(n){let e=Gu;return Gu=n,e}var LS=256,jg=LS-1,$g=5,OS=0,ei={};function FS(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(go)&&(i=t[go]),i==null&&(i=t[go]=OS++);let r=i&jg,s=1<<r;e.data[n+(r>>$g)]|=s}function qg(n,e){let t=Xg(n,e);if(t!==-1)return t;let i=e[He];i.firstCreatePass&&(n.injectorIndex=e.length,Su(i.data,n),Su(e,null),Su(i.blueprint,null));let r=Vd(n,e),s=n.injectorIndex;if(Wg(r)){let o=rc(r),a=sc(r,e),c=a[He].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function Su(n,e){n.push(0,0,0,0,0,0,0,0,e)}function Xg(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function Vd(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=Qg(r),i===null)return os;if(t++,r=r[fs],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return os}function US(n,e,t){FS(n,e,t)}function Yg(n,e,t){if(t&qe.Optional||n!==void 0)return n;Od(e,"NodeInjector")}function Zg(n,e,t,i){if(t&qe.Optional&&i===void 0&&(i=null),!(t&(qe.Self|qe.Host))){let r=n[as],s=Tn(void 0);try{return r?r.get(e,i,t&qe.Optional):Ng(e,i,t&qe.Optional)}finally{Tn(s)}}return Yg(i,e,t)}function Jg(n,e,t,i=qe.Default,r){if(n!==null){if(e[Te]&2048&&!(i&qe.Self)){let o=zS(n,e,t,i,ei);if(o!==ei)return o}let s=Kg(n,e,t,i,ei);if(s!==ei)return s}return Zg(e,t,i,r)}function Kg(n,e,t,i,r){let s=BS(t);if(typeof s=="function"){if(!yg(e,n,i))return i&qe.Host?Yg(r,t,i):Zg(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&qe.Optional))Od(t);else return o}finally{Sg()}}else if(typeof s=="number"){let o=null,a=Xg(n,e),c=os,l=i&qe.Host?e[ni][Gn]:null;for((a===-1||i&qe.SkipSelf)&&(c=a===-1?Vd(n,e):e[a+8],c===os||!Rm(i,!1)?a=-1:(o=e[He],a=rc(c),e=sc(c,e)));a!==-1;){let u=e[He];if(Im(s,a,u.data)){let d=kS(a,e,t,o,i,l);if(d!==ei)return d}c=e[a+8],c!==os&&Rm(i,e[He].data[a+8]===l)&&Im(s,a,e)?(o=u,a=rc(c),e=sc(c,e)):a=-1}}return r}function kS(n,e,t,i,r,s){let o=e[He],a=o.data[n+8],c=i==null?gc(a)&&Gu:i!=o&&(a.type&3)!==0,l=r&qe.Host&&s===a,u=Xa(a,o,t,c,l);return u!==null?ds(e,o,u,a):ei}function Xa(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,h=r?a+u:l;for(let m=d;m<h;m++){let g=o[m];if(m<c&&t===g||m>=c&&g.type===t)return m}if(r){let m=o[c];if(m&&No(m)&&m.type===t)return c}return null}function ds(n,e,t,i){let r=n[t],s=e.data;if(IS(r)){let o=r;o.resolving&&QM(KM(s[t]));let a=Dm(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?Tn(o.injectImpl):null,u=yg(n,i,qe.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&AS(t,s[t],e)}finally{l!==null&&Tn(l),Dm(a),o.resolving=!1,Sg()}}return r}function BS(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(go)?n[go]:void 0;return typeof e=="number"?e>=0?e&jg:VS:e}function Im(n,e,t){let i=1<<n;return!!(t[e+(n>>$g)]&i)}function Rm(n,e){return!(n&qe.Self)&&!(n&qe.Host&&e)}var cr=class{constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return Jg(this._tNode,this._lView,e,yc(i),t)}};function VS(){return new cr(oi(),Tt())}function zd(n){return gd(()=>{let e=n.prototype.constructor,t=e[Ja]||Wu(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[Ja]||Wu(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function Wu(n){return Rg(n)?()=>{let e=Wu(An(n));return e&&e()}:ls(n)}function zS(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Te]&2048&&!(o[Te]&512);){let a=Kg(s,o,t,i|qe.Self,ei);if(a!==ei)return a;let c=s.parent;if(!c){let l=o[lg];if(l){let u=l.get(t,ei,i);if(u!==ei)return u}c=Qg(o),o=o[fs]}s=c}return r}function Qg(n){let e=n[He],t=e.type;return t===2?e.declTNode:t===1?n[Gn]:null}function Pm(n,e=null,t=null,i){let r=ev(n,e,t,i);return r.resolveInjectorInitializers(),r}function ev(n,e=null,t=null,i,r=new Set){let s=[t||lr,fS(n)];return i=i||(typeof n=="object"?void 0:ln(n)),new Eo(s,e||kd(),i||null,r)}var Fo=(()=>{let e=class e{static create(i,r){if(Array.isArray(i))return Pm({name:""},r,i,"");{let s=i.name??"";return Pm({name:s},i.parent,i.providers,s)}}};e.THROW_IF_NOT_FOUND=wo,e.NULL=new ic,e.\u0275prov=Ne({token:e,providedIn:"any",factory:()=>it(Lg)}),e.__NG_ELEMENT_ID__=-1;let n=e;return n})(),HS="ngOriginalError";function bu(n){return n[HS]}var vi=class{constructor(){this._console=console}handleError(e){let t=this._findOriginalError(e);this._console.error("ERROR",e),t&&this._console.error("ORIGINAL ERROR",t)}_findOriginalError(e){let t=e&&bu(e);for(;t&&bu(t);)t=bu(t);return t||null}},tv=new nt("",{providedIn:"root",factory:()=>ue(vi).handleError.bind(void 0)});var nv=!1,GS=new nt("",{providedIn:"root",factory:()=>nv});var oc=class{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Zm})`}};function Sc(n){return n instanceof oc?n.changingThisBreaksApplicationSecurity:n}function iv(n,e){let t=WS(n);if(t!=null&&t!==e){if(t==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${t} (see ${Zm})`)}return t===e}function WS(n){return n instanceof oc&&n.getTypeName()||null}var jS=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function rv(n){return n=String(n),n.match(jS)?n:"unsafe:"+n}var Hd=function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n}(Hd||{});function bc(n){let e=$S();return e?e.sanitize(Hd.URL,n)||"":iv(n,"URL")?Sc(n):rv(Ld(n))}function $S(){let n=Tt();return n&&n[mi].sanitizer}var sv=new Map,qS=0;function XS(){return qS++}function YS(n){sv.set(n[mc],n)}function ZS(n){sv.delete(n[mc])}var Nm="__ngContext__";function pr(n,e){ss(e)?(n[Nm]=e[mc],YS(e)):n[Nm]=e}function ov(n){return n instanceof Function?n():n}var yi=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(yi||{}),JS;function Gd(n,e){return JS(n,e)}function rs(n,e,t,i,r){if(i!=null){let s,o=!1;xi(i)?s=i:ss(i)&&(o=!0,i=i[_i]);let a=ri(i);n===0&&t!==null?r==null?uv(e,t,a):cc(e,t,a,r||null,!0):n===1&&t!==null?cc(e,t,a,r||null,!0):n===2?pb(e,a,o):n===3&&e.destroyNode(a),s!=null&&gb(e,n,s,t,r)}}function KS(n,e){return n.createText(e)}function QS(n,e,t){n.setValue(e,t)}function av(n,e,t){return n.createElement(e,t)}function eb(n,e){cv(n,e),e[_i]=null,e[Gn]=null}function tb(n,e,t,i,r,s){i[_i]=r,i[Gn]=e,wc(n,i,t,1,r,s)}function cv(n,e){wc(n,e,e[rn],2,null,null)}function nb(n){let e=n[Mo];if(!e)return wu(n[He],n);for(;e;){let t=null;if(ss(e))t=e[Mo];else{let i=e[un];i&&(t=i)}if(!t){for(;e&&!e[zn]&&e!==n;)ss(e)&&wu(e[He],e),e=e[$t];e===null&&(e=n),ss(e)&&wu(e[He],e),t=e&&e[zn]}e=t}}function ib(n,e,t,i){let r=un+i,s=t.length;i>0&&(t[r-1][zn]=e),i<s-un?(e[zn]=t[r],wg(t,un+i,e)):(t.push(e),e[zn]=null),e[$t]=t;let o=e[Po];o!==null&&t!==o&&rb(o,e);let a=e[gi];a!==null&&a.insertView(n),Pu(e),e[Te]|=128}function rb(n,e){let t=n[cs],r=e[$t][$t][ni];e[ni]!==r&&(n[Te]|=_d.HasTransplantedViews),t===null?n[cs]=[e]:t.push(e)}function lv(n,e){let t=n[cs],i=t.indexOf(e);t.splice(i,1)}function ac(n,e){if(n.length<=un)return;let t=un+e,i=n[t];if(i){let r=i[Po];r!==null&&r!==n&&lv(r,i),e>0&&(n[t-1][zn]=i[zn]);let s=tc(n,un+e);eb(i[He],i);let o=s[gi];o!==null&&o.detachView(s[He]),i[$t]=null,i[zn]=null,i[Te]&=-129}return i}function Wd(n,e){if(!(e[Te]&256)){let t=e[rn];t.destroyNode&&wc(n,e,t,3,null,null),nb(e)}}function wu(n,e){if(!(e[Te]&256)){e[Te]&=-129,e[Te]|=256,e[dr]&&Lp(e[dr]),ob(n,e),sb(n,e),e[He].type===1&&e[rn].destroy();let t=e[Po];if(t!==null&&xi(e[$t])){t!==e[$t]&&lv(t,e);let i=e[gi];i!==null&&i.detachView(n)}ZS(e)}}function sb(n,e){let t=n.cleanup,i=e[xo];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let o=t[s+3];o>=0?i[o]():i[-o].unsubscribe(),s+=2}else{let o=i[t[s+1]];t[s].call(o)}i!==null&&(e[xo]=null);let r=e[vo];if(r!==null){e[vo]=null;for(let s=0;s<r.length;s++){let o=r[s];o()}}}function ob(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof To)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];Qn(4,a,c);try{c.call(a)}finally{Qn(5,a,c)}}else{Qn(4,r,s);try{s.call(r)}finally{Qn(5,r,s)}}}}}function ab(n,e,t){return cb(n,e.parent,t)}function cb(n,e,t){let i=e;for(;i!==null&&i.type&40;)e=i,i=e.parent;if(i===null)return t[_i];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===ti.None||s===ti.Emulated)return null}return Wn(i,t)}}function cc(n,e,t,i,r){n.insertBefore(e,t,i,r)}function uv(n,e,t){n.appendChild(e,t)}function Lm(n,e,t,i,r){i!==null?cc(n,e,t,i,r):uv(n,e,t)}function lb(n,e,t,i){n.removeChild(e,t,i)}function jd(n,e){return n.parentNode(e)}function ub(n,e){return n.nextSibling(e)}function db(n,e,t){return fb(n,e,t)}function hb(n,e,t){return n.type&40?Wn(n,t):null}var fb=hb,Om;function $d(n,e,t,i){let r=ab(n,i,e),s=e[rn],o=i.parent||e[Gn],a=db(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)Lm(s,r,t[c],a,!1);else Lm(s,r,t,a,!1);Om!==void 0&&Om(s,i,e,t,r)}function Ya(n,e){if(e!==null){let t=e.type;if(t&3)return Wn(e,n);if(t&4)return ju(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return Ya(n,i);{let r=n[e.index];return xi(r)?ju(-1,r):ri(r)}}else{if(t&32)return Gd(e,n)()||ri(n[e.index]);{let i=dv(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=bo(n[ni]);return Ya(r,i)}else return Ya(n,e.next)}}}return null}function dv(n,e){if(e!==null){let i=n[ni][Gn],r=e.projection;return i.projection[r]}return null}function ju(n,e){let t=un+n+1;if(t<e.length){let i=e[t],r=i[He].firstChild;if(r!==null)return Ya(i,r)}return e[hr]}function pb(n,e,t){let i=jd(n,e);i&&lb(n,i,e,t)}function qd(n,e,t,i,r,s,o){for(;t!=null;){let a=i[t.index],c=t.type;if(o&&e===0&&(a&&pr(ri(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)qd(n,e,t.child,i,r,s,!1),rs(e,n,r,a,s);else if(c&32){let l=Gd(t,i),u;for(;u=l();)rs(e,n,r,u,s);rs(e,n,r,a,s)}else c&16?mb(n,e,i,t,r,s):rs(e,n,r,a,s);t=o?t.projectionNext:t.next}}function wc(n,e,t,i,r,s){qd(t,i,n.firstChild,e,r,s,!1)}function mb(n,e,t,i,r,s){let o=t[ni],c=o[Gn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];rs(e,n,r,u,s)}else{let l=c,u=o[$t];Eg(i)&&(l.flags|=128),qd(n,e,l,u,r,s,!0)}}function gb(n,e,t,i,r){let s=t[hr],o=ri(t);s!==o&&rs(e,n,i,s,r);for(let a=un;a<t.length;a++){let c=t[a];wc(c[He],c,n,e,i,s)}}function vb(n,e,t,i,r){if(e)r?n.addClass(t,i):n.removeClass(t,i);else{let s=i.indexOf("-")===-1?void 0:yi.DashCase;r==null?n.removeStyle(t,i,s):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),s|=yi.Important),n.setStyle(t,i,r,s))}}function yb(n,e,t){n.setAttribute(e,"style",t)}function hv(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function fv(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&Ru(n,e,i),r!==null&&hv(n,e,r),s!==null&&yb(n,e,s)}var vs={};function ke(n=1){pv(si(),Tt(),ps()+n,!1)}function pv(n,e,t,i){if(!i)if((e[Te]&3)===3){let s=n.preOrderCheckHooks;s!==null&&$a(e,s,t)}else{let s=n.preOrderHooks;s!==null&&qa(e,s,0,t)}fr(t)}function xr(n,e=qe.Default){let t=Tt();if(t===null)return it(n,e);let i=oi();return Jg(i,t,An(n),e)}function mv(n,e,t,i,r,s){let o=tn(null);try{let a=null;r&Et.SignalBased&&(a=e[i][Kl]),a!==null&&a.transformFn!==void 0&&(s=a.transformFn(s)),r&Et.HasDecoratorInputTransform&&(s=n.inputTransforms[i].call(e,s)),n.setInput!==null?n.setInput(e,a,s,t,i):Bg(e,a,i,s)}finally{tn(o)}}function _b(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)fr(~r);else{let s=r,o=t[++i],a=t[++i];PM(o,s);let c=e[s];a(2,c)}}}finally{fr(-1)}}function Ec(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[_i]=r,d[Te]=i|4|128|8|64,(l!==null||n&&n[Te]&2048)&&(d[Te]|=2048),fg(d),d[$t]=d[fs]=n,d[Hn]=t,d[mi]=o||n&&n[mi],d[rn]=a||n&&n[rn],d[as]=c||n&&n[as]||null,d[Gn]=s,d[mc]=XS(),d[Ka]=u,d[lg]=l,d[ni]=e.type==2?n[ni]:d,d}function Tc(n,e,t,i,r){let s=n.data[e];if(s===null)s=xb(n,e,t,i,r),RM()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=CM();s.injectorIndex=o===null?-1:o.injectorIndex}return Lo(s,!0),s}function xb(n,e,t,i,r){let s=mg(),o=gg(),a=o?s:s&&s.parent,c=n.data[e]=Tb(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function gv(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function vv(n,e,t,i,r){let s=ps(),o=i&2;try{fr(-1),o&&e.length>ii&&pv(n,e,ii,!1),Qn(o?2:0,r),t(i,r)}finally{fr(s),Qn(o?3:1,r)}}function yv(n,e,t){if(dg(e)){let i=tn(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{tn(i)}}}function _v(n,e,t){pg()&&(Nb(n,e,t,Wn(t,e)),(t.flags&64)===64&&wv(n,e,t))}function xv(n,e,t=Wn){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function Mv(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=Xd(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function Xd(n,e,t,i,r,s,o,a,c,l,u){let d=ii+i,h=d+r,m=Mb(d,h),g=typeof l=="function"?l():l;return m[He]={type:n,blueprint:m,template:t,queries:null,viewQuery:a,declTNode:e,data:m.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function Mb(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:vs);return t}function Sb(n,e,t,i){let s=i.get(GS,nv)||t===ti.ShadowDom,o=n.selectRootElement(e,s);return bb(o),o}function bb(n){wb(n)}var wb=()=>null;function Eb(n,e,t,i){let r=Cv(e);r.push(t),n.firstCreatePass&&Av(n).push(i,r.length-1)}function Tb(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return wM()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Fm(n,e,t,i,r){for(let s in e){if(!e.hasOwnProperty(s))continue;let o=e[s];if(o===void 0)continue;i??={};let a,c=Et.None;Array.isArray(o)?(a=o[0],c=o[1]):a=o;let l=s;if(r!==null){if(!r.hasOwnProperty(s))continue;l=r[s]}n===0?Um(i,t,l,a,c):Um(i,t,l,a)}return i}function Um(n,e,t,i,r){let s;n.hasOwnProperty(t)?(s=n[t]).push(e,i):s=n[t]=[e,i],r!==void 0&&s.push(r)}function Cb(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],h=t?t.get(d):null,m=h?h.inputs:null,g=h?h.outputs:null;c=Fm(0,d.inputs,u,c,m),l=Fm(1,d.outputs,u,l,g);let _=c!==null&&o!==null&&!ng(e)?Hb(c,u,o):null;a.push(_)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function Ab(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function Db(n,e,t,i,r,s,o,a){let c=Wn(e,t),l=e.inputs,u;!a&&l!=null&&(u=l[i])?(Yd(n,t,u,i,r),gc(e)&&Ib(t,e.index)):e.type&3?(i=Ab(i),r=o!=null?o(r,e.value||"",i):r,s.setProperty(c,i,r)):e.type&12}function Ib(n,e){let t=vr(e,n);t[Te]&16||(t[Te]|=64)}function Sv(n,e,t,i){if(pg()){let r=i===null?null:{"":-1},s=Ob(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&bv(n,e,t,o,r,a),r&&Fb(t,i,r)}t.mergedAttrs=vd(t.mergedAttrs,t.attrs)}function bv(n,e,t,i,r,s){for(let l=0;l<i.length;l++)US(qg(t,e),n,i[l].type);kb(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=gv(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=vd(t.mergedAttrs,u.hostAttrs),Bb(n,t,e,c,u),Ub(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}Cb(n,t,s)}function Rb(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;Pb(o)!=a&&o.push(a),o.push(t,i,s)}}function Pb(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function Nb(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;gc(t)&&Vb(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||qg(t,e),pr(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=ds(e,n,a,t);if(pr(l,e),o!==null&&zb(e,a-r,l,c,t,o),No(c)){let u=vr(t.index,e);u[Hn]=ds(e,n,a,t)}}}function wv(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=NM();try{fr(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];Nu(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&Lb(c,l)}}finally{fr(-1),Nu(o)}}function Lb(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function Ob(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if(nM(e,o.selectors,!1))if(i||(i=[]),No(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;$u(n,e,c)}else i.unshift(o),$u(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function $u(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function Fb(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Ae(-301,!1);i.push(e[r],s)}}}function Ub(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;No(e)&&(t[""]=n)}}function kb(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function Bb(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=ls(r.type,!0)),o=new To(s,No(r),xr);n.blueprint[i]=o,t[i]=o,Rb(n,e,i,gv(n,t,r.hostVars,vs),r)}function Vb(n,e,t){let i=Wn(e,n),r=Mv(t),s=n[mi].rendererFactory,o=16;t.signals?o=4096:t.onPush&&(o=64);let a=Cc(n,Ec(n,r,null,o,i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=a}function zb(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++],d=o[a++];mv(i,t,c,l,u,d)}}function Hb(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=3)if(o[a]===e){i.push(s,o[a+1],o[a+2],t[r+1]);break}}r+=2}return i}function Ev(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function Tv(n,e){let t=n.contentQueries;if(t!==null){let i=tn(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];Ed(s),a.contentQueries(2,e[o],o)}}}finally{tn(i)}}}function Cc(n,e){return n[Mo]?n[Sm][zn]=e:n[Mo]=e,n[Sm]=e,e}function qu(n,e,t){Ed(0);let i=tn(null);try{e(n,t)}finally{tn(i)}}function Cv(n){return n[xo]||(n[xo]=[])}function Av(n){return n.cleanup||(n.cleanup=[])}function Dv(n,e){let t=n[as],i=t?t.get(vi,null):null;i&&i.handleError(e)}function Yd(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=t[s++],l=e[o],u=n.data[o];mv(u,l,i,a,c,r)}}function Gb(n,e,t){let i=hg(e,n);QS(n[rn],i,t)}function Wb(n,e){let t=vr(e,n),i=t[He];jb(i,t);let r=t[_i];r!==null&&t[Ka]===null&&(t[Ka]=Fd(r,t[as])),Zd(i,t,t[Hn])}function jb(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function Zd(n,e,t){Td(e);try{let i=n.viewQuery;i!==null&&qu(1,i,t);let r=n.template;r!==null&&vv(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[gi]?.finishViewCreation(n),n.staticContentQueries&&Tv(n,e),n.staticViewQueries&&qu(2,n.viewQuery,t);let s=n.components;s!==null&&$b(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Te]&=-5,Cd()}}function $b(n,e){for(let t=0;t<e.length;t++)Wb(n,e[t])}function Iv(n,e,t,i){let r=e.tView,o=n[Te]&4096?4096:16,a=Ec(n,r,t,o,null,e,null,null,null,i?.injector??null,i?.dehydratedView??null),c=n[e.index];a[Po]=c;let l=n[gi];return l!==null&&(a[gi]=l.createEmbeddedView(r)),Zd(r,a,t),a}function qb(n,e){let t=un+e;if(t<n.length)return n[t]}function Xu(n,e){return!e||e.firstChild===null||Eg(n)}function Rv(n,e,t,i=!0){let r=e[He];if(ib(r,e,n,t),i){let o=ju(t,n),a=e[rn],c=jd(a,n[hr]);c!==null&&tb(r,n[Gn],a,e,c,o)}let s=e[Ka];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function Xb(n,e){let t=ac(n,e);return t!==void 0&&Wd(t[He],t),t}function lc(n,e,t,i,r=!1){for(;t!==null;){let s=e[t.index];s!==null&&i.push(ri(s)),xi(s)&&Yb(s,i);let o=t.type;if(o&8)lc(n,e,t.child,i);else if(o&32){let a=Gd(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=dv(e,t);if(Array.isArray(a))i.push(...a);else{let c=bo(e[ni]);lc(c[He],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function Yb(n,e){for(let t=un;t<n.length;t++){let i=n[t],r=i[He].firstChild;r!==null&&lc(i[He],i,r,e)}n[hr]!==n[_i]&&e.push(n[hr])}var Pv=[];function Zb(n){return n[dr]??Jb(n)}function Jb(n){let e=Pv.pop()??Object.create(Qb);return e.lView=n,e}function Kb(n){n.lView[dr]!==n&&(n.lView=null,Pv.push(n))}var Qb=wt(pe({},Ql),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{So(n.lView)},consumerOnSignalRead(){this.lView[dr]=this}});function Nv(n){return Ov(n[Mo])}function Lv(n){return Ov(n[zn])}function Ov(n){for(;n!==null&&!xi(n);)n=n[zn];return n}var Fv=100;function Uv(n,e=!0,t=0){let i=n[mi],r=i.rendererFactory,s=!1;s||r.begin?.();try{ew(n,t)}catch(o){throw e&&Dv(n,o),o}finally{s||(r.end?.(),i.inlineEffectRunner?.flush())}}function ew(n,e){Yu(n,e);let t=0;for(;bd(n);){if(t===Fv)throw new Ae(103,!1);t++,Yu(n,1)}}function tw(n,e,t,i){let r=e[Te];if((r&256)===256)return;let s=!1;!s&&e[mi].inlineEffectRunner?.flush(),Td(e);let o=null,a=null;!s&&nw(n)&&(a=Zb(e),o=Pp(a));try{fg(e),DM(n.bindingStartIndex),t!==null&&vv(n,e,t,2,i);let c=(r&3)===3;if(!s)if(c){let d=n.preOrderCheckHooks;d!==null&&$a(e,d,null)}else{let d=n.preOrderHooks;d!==null&&qa(e,d,0,null),Mu(e,0)}if(iw(e),kv(e,0),n.contentQueries!==null&&Tv(n,e),!s)if(c){let d=n.contentCheckHooks;d!==null&&$a(e,d)}else{let d=n.contentHooks;d!==null&&qa(e,d,1),Mu(e,1)}_b(n,e);let l=n.components;l!==null&&Vv(e,l,0);let u=n.viewQuery;if(u!==null&&qu(2,u,i),!s)if(c){let d=n.viewCheckHooks;d!==null&&$a(e,d)}else{let d=n.viewHooks;d!==null&&qa(e,d,2),Mu(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[yu]){for(let d of e[yu])d();e[yu]=null}s||(e[Te]&=-73)}catch(c){throw So(e),c}finally{a!==null&&(Np(a,o),Kb(a)),Cd()}}function nw(n){return n.type!==2}function kv(n,e){for(let t=Nv(n);t!==null;t=Lv(t))for(let i=un;i<t.length;i++){let r=t[i];Bv(r,e)}}function iw(n){for(let e=Nv(n);e!==null;e=Lv(e)){if(!(e[Te]&_d.HasTransplantedViews))continue;let t=e[cs];for(let i=0;i<t.length;i++){let r=t[i],s=r[$t];yM(r)}}}function rw(n,e,t){let i=vr(e,n);Bv(i,t)}function Bv(n,e){Sd(n)&&Yu(n,e)}function Yu(n,e){let i=n[He],r=n[Te],s=n[dr],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&eu(s)),s&&(s.dirty=!1),n[Te]&=-9217,o)tw(i,n,i.template,n[Hn]);else if(r&8192){kv(n,1);let a=i.components;a!==null&&Vv(n,a,1)}}function Vv(n,e,t){for(let i=0;i<e.length;i++)rw(n,e[i],t)}function Jd(n){for(n[mi].changeDetectionScheduler?.notify();n;){n[Te]|=64;let e=bo(n);if(dM(n)&&!e)return n;n=e}return null}var mr=class{get rootNodes(){let e=this._lView,t=e[He];return lc(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[Hn]}set context(e){this._lView[Hn]=e}get destroyed(){return(this._lView[Te]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[$t];if(xi(e)){let t=e[Qa],i=t?t.indexOf(this):-1;i>-1&&(ac(e,i),tc(t,i))}this._attachedToViewContainer=!1}Wd(this._lView[He],this._lView)}onDestroy(e){xM(this._lView,e)}markForCheck(){Jd(this._cdRefInjectingView||this._lView)}detach(){this._lView[Te]&=-129}reattach(){Pu(this._lView),this._lView[Te]|=128}detectChanges(){this._lView[Te]|=1024,Uv(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Ae(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,cv(this._lView[He],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Ae(902,!1);this._appRef=e,Pu(this._lView)}},Co=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=aw;let n=e;return n})(),sw=Co,ow=class extends sw{constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=Iv(this._declarationLView,this._declarationTContainer,e,{injector:t,dehydratedView:i});return new mr(r)}};function aw(){return Kd(oi(),Tt())}function Kd(n,e){return n.type&4?new ow(e,n,ms(n,e)):null}var tk=new RegExp(`^(\\d+)*(${dS}|${uS})*(.*)`);var cw=()=>null;function Zu(n,e){return cw(n,e)}var Ju=class{},Ku=class{},uc=class{};function lw(n){let e=Error(`No component factory found for ${ln(n)}.`);return e[uw]=n,e}var uw="ngComponent";var Qu=class{resolveComponentFactory(e){throw lw(e)}},Ac=(()=>{let e=class e{};e.NULL=new Qu;let n=e;return n})(),Ao=class{};var dw=(()=>{let e=class e{};e.\u0275prov=Ne({token:e,providedIn:"root",factory:()=>null});let n=e;return n})(),Eu={};var Uo=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=hw;let n=e;return n})();function hw(n){return fw(oi(),Tt(),(n&16)===16)}function fw(n,e,t){if(gc(n)&&!t){let i=vr(n.index,e);return new mr(i,i)}else if(n.type&47){let i=e[ni];return new mr(i,e)}return null}var km=new Set;function Qd(n){km.has(n)||(km.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}function Bm(...n){}function pw(){let n=typeof mo.requestAnimationFrame=="function",e=mo[n?"requestAnimationFrame":"setTimeout"],t=mo[n?"cancelAnimationFrame":"clearTimeout"];if(typeof Zone<"u"&&e&&t){let i=e[Zone.__symbol__("OriginalDelegate")];i&&(e=i);let r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}var Dt=class n{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1,shouldCoalesceRunChangeDetection:i=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Cn(!1),this.onMicrotaskEmpty=new Cn(!1),this.onStable=new Cn(!1),this.onError=new Cn(!1),typeof Zone>"u")throw new Ae(908,!1);Zone.assertZonePatched();let r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!i&&t,r.shouldCoalesceRunChangeDetection=i,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=pw().nativeRequestAnimationFrame,vw(r)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Ae(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Ae(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,mw,Bm,Bm);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},mw={};function eh(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function gw(n){n.isCheckStableRunning||n.lastRequestAnimationFrameId!==-1||(n.lastRequestAnimationFrameId=n.nativeRequestAnimationFrame.call(mo,()=>{n.fakeTopEventTask||(n.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{n.lastRequestAnimationFrameId=-1,ed(n),n.isCheckStableRunning=!0,eh(n),n.isCheckStableRunning=!1},void 0,()=>{},()=>{})),n.fakeTopEventTask.invoke()}),ed(n))}function vw(n){let e=()=>{gw(n)};n._inner=n._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(t,i,r,s,o,a)=>{if(yw(a))return t.invokeTask(r,s,o,a);try{return Vm(n),t.invokeTask(r,s,o,a)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),zm(n)}},onInvoke:(t,i,r,s,o,a,c)=>{try{return Vm(n),t.invoke(r,s,o,a,c)}finally{n.shouldCoalesceRunChangeDetection&&e(),zm(n)}},onHasTask:(t,i,r,s)=>{t.hasTask(r,s),i===r&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,ed(n),eh(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(t,i,r,s)=>(t.handleError(r,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function ed(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.lastRequestAnimationFrameId!==-1?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function Vm(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function zm(n){n._nesting--,eh(n)}function yw(n){return!Array.isArray(n)||n.length!==1?!1:n[0].data?.__ignore_ng_zone__===!0}var zv=(()=>{let e=class e{constructor(){this.handler=null,this.internalCallbacks=[]}execute(){let i=[...this.internalCallbacks];this.internalCallbacks.length=0;for(let r of i)r();this.handler?.execute()}ngOnDestroy(){this.handler?.destroy(),this.handler=null,this.internalCallbacks.length=0}};e.\u0275prov=Ne({token:e,providedIn:"root",factory:()=>new e});let n=e;return n})();function td(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=gm(r,a);else if(s==2){let c=a,l=e[++o];i=gm(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}var dc=class extends Ac{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=ur(e);return new Do(t,this.ngModule)}};function Hm(n){let e=[];for(let t in n){if(!n.hasOwnProperty(t))continue;let i=n[t];i!==void 0&&e.push({propName:Array.isArray(i)?i[0]:i,templateName:t})}return e}function _w(n){let e=n.toLowerCase();return e==="svg"?hM:e==="math"?fM:null}var nd=class{constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=yc(i);let r=this.injector.get(e,Eu,i);return r!==Eu||t===Eu?r:this.parentInjector.get(e,t,i)}},Do=class extends uc{get inputs(){let e=this.componentDef,t=e.inputTransforms,i=Hm(e.inputs);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return Hm(this.componentDef.outputs)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=oM(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){r=r||this.ngModule;let s=r instanceof Dn?r:r?.injector;s&&this.componentDef.getStandaloneInjector!==null&&(s=this.componentDef.getStandaloneInjector(s)||s);let o=s?new nd(e,s):e,a=o.get(Ao,null);if(a===null)throw new Ae(407,!1);let c=o.get(dw,null),l=o.get(zv,null),u=o.get(Ju,null),d={rendererFactory:a,sanitizer:c,inlineEffectRunner:null,afterRenderEventManager:l,changeDetectionScheduler:u},h=a.createRenderer(null,this.componentDef),m=this.componentDef.selectors[0][0]||"div",g=i?Sb(h,i,this.componentDef.encapsulation,o):av(h,m,_w(m)),_=512;this.componentDef.signals?_|=4096:this.componentDef.onPush||(_|=16);let p=null;g!==null&&(p=Fd(g,o,!0));let f=Xd(0,null,null,1,0,null,null,null,null,null,null),E=Ec(null,f,null,_,null,null,d,h,o,null,p);Td(E);let S,w;try{let I=this.componentDef,A,C=null;I.findHostDirectiveDefs?(A=[],C=new Map,I.findHostDirectiveDefs(I,A,C),A.push(I)):A=[I];let G=xw(E,g),ie=Mw(G,g,I,A,E,d,h);w=Md(f,ii),g&&ww(h,I,g,i),t!==void 0&&Ew(w,this.ngContentSelectors,t),S=bw(ie,I,A,C,E,[Tw]),Zd(f,E,null)}finally{Cd()}return new id(this.componentType,S,ms(w,E),E,w)}},id=class extends Ku{constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.previousInputValues=null,this.instance=t,this.hostView=this.changeDetectorRef=new mr(r,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;Yd(s[He],s,r,e,t),this.previousInputValues.set(e,t);let o=vr(this._tNode.index,s);Jd(o)}}get injector(){return new cr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function xw(n,e){let t=n[He],i=ii;return n[i]=e,Tc(t,i,2,"#host",null)}function Mw(n,e,t,i,r,s,o){let a=r[He];Sw(i,n,e,o);let c=null;e!==null&&(c=Fd(e,r[as]));let l=s.rendererFactory.createRenderer(e,t),u=16;t.signals?u=4096:t.onPush&&(u=64);let d=Ec(r,Mv(t),null,u,r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&$u(a,n,i.length-1),Cc(r,d),r[n.index]=d}function Sw(n,e,t,i){for(let r of n)e.mergedAttrs=vd(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(td(e,e.mergedAttrs,!0),t!==null&&fv(i,t,e))}function bw(n,e,t,i,r,s){let o=oi(),a=r[He],c=Wn(o,r);bv(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let d=o.directiveStart+u,h=ds(r,a,d,o);pr(h,r)}wv(a,r,o),c&&pr(c,r);let l=ds(r,a,o.directiveStart+o.componentOffset,o);if(n[Hn]=r[Hn]=l,s!==null)for(let u of s)u(l,e);return yv(a,o,r),l}function ww(n,e,t,i){if(i)Ru(n,t,["ng-version","17.2.2"]);else{let{attrs:r,classes:s}=aM(e.selectors[0]);r&&Ru(n,t,r),s&&s.length>0&&hv(n,t,s.join(" "))}}function Ew(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null?Array.from(s):null)}}function Tw(){let n=oi();Bd(Tt()[He],n)}var ys=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=Cw;let n=e;return n})();function Cw(){let n=oi();return Gv(n,Tt())}var Aw=ys,Hv=class extends Aw{constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return ms(this._hostTNode,this._hostLView)}get injector(){return new cr(this._hostTNode,this._hostLView)}get parentInjector(){let e=Vd(this._hostTNode,this._hostLView);if(Wg(e)){let t=sc(e,this._hostLView),i=rc(e),r=t[He].data[i+8];return new cr(r,t)}else return new cr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=Gm(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-un}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=Zu(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,Xu(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!wS(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new Do(ur(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let _=(o?l:this.parentInjector).get(Dn,null);_&&(s=_)}let u=ur(c.componentType??{}),d=Zu(this._lContainer,u?.id??null),h=d?.firstChild??null,m=c.create(l,r,h,s);return this.insertImpl(m.hostView,a,Xu(this._hostTNode,d)),m}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(vM(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[$t],l=new Hv(c,c[Gn],c[$t]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return Rv(o,r,s,i),e.attachToViewContainerRef(),wg(Tu(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=Gm(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=ac(this._lContainer,t);i&&(tc(Tu(this._lContainer),t),Wd(i[He],i))}detach(e){let t=this._adjustIndex(e,-1),i=ac(this._lContainer,t);return i&&tc(Tu(this._lContainer),t)!=null?new mr(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function Gm(n){return n[Qa]}function Tu(n){return n[Qa]||(n[Qa]=[])}function Gv(n,e){let t,i=e[n.index];return xi(i)?t=i:(t=Ev(i,e,null,n),e[n.index]=t,Cc(e,t)),Iw(t,e,n,i),new Hv(t,n,e)}function Dw(n,e){let t=n[rn],i=t.createComment(""),r=Wn(e,n),s=jd(t,r);return cc(t,s,i,ub(t,r),!1),i}var Iw=Nw,Rw=()=>!1;function Pw(n,e,t){return Rw(n,e,t)}function Nw(n,e,t,i){if(n[hr])return;let r;t.type&8?r=ri(i):r=Dw(e,t),n[hr]=r}var rd=class n{constructor(e){this.queryList=e,this.matches=null}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},sd=class n{constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)th(e,t).matches!==null&&this.queries[t].setDirty()}},od=class{constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=zw(e):this.predicate=e}},ad=class n{constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},cd=class n{constructor(e,t=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,Lw(t,s)),this.matchTNodeWithReadOption(e,t,Xa(t,e,s,!1,!1))}else i===Co?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,Xa(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===yr||r===ys||r===Co&&t.type&4)this.addMatch(t.index,-2);else{let s=Xa(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function Lw(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function Ow(n,e){return n.type&11?ms(n,e):n.type&4?Kd(n,e):null}function Fw(n,e,t,i){return t===-1?Ow(e,n):t===-2?Uw(n,e,i):ds(n,n[He],t,e)}function Uw(n,e,t){if(t===yr)return ms(e,n);if(t===Co)return Kd(e,n);if(t===ys)return Gv(e,n)}function Wv(n,e,t,i){let r=e[gi].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(Fw(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function ld(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=Wv(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=un;d<u.length;d++){let h=u[d];h[Po]===h[$t]&&ld(h[He],h,l,i)}if(u[cs]!==null){let d=u[cs];for(let h=0;h<d.length;h++){let m=d[h];ld(m[He],m,l,i)}}}}}return i}function kw(n,e){return n[gi].queries[e].queryList}function Bw(n,e,t){let i=new Lu((t&4)===4);return Eb(n,e,i,i.destroy),(e[gi]??=new sd).queries.push(new rd(i))-1}function Vw(n,e,t){let i=si();return i.firstCreatePass&&(Hw(i,new od(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),Bw(i,Tt(),e)}function zw(n){return n.split(",").map(e=>e.trim())}function Hw(n,e,t){n.queries===null&&(n.queries=new ad),n.queries.track(new cd(e,t))}function th(n,e){return n.queries.getByIndex(e)}function Gw(n,e){let t=n[He],i=th(t,e);return i.crossesNgTemplate?ld(t,n,e,[]):Wv(t,n,i,e)}var Bi=class{},Io=class{};var ud=class extends Bi{constructor(e,t,i){super(),this._parent=t,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new dc(this);let r=og(e);this._bootstrapComponents=ov(r.bootstrap),this._r3Injector=ev(e,t,[{provide:Bi,useValue:this},{provide:Ac,useValue:this.componentFactoryResolver},...i],ln(e),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(e)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},dd=class extends Io{constructor(e){super(),this.moduleType=e}create(e){return new ud(this.moduleType,e,[])}};var hc=class extends Bi{constructor(e){super(),this.componentFactoryResolver=new dc(this),this.instance=null;let t=new Eo([...e.providers,{provide:Bi,useValue:this},{provide:Ac,useValue:this.componentFactoryResolver}],e.parent||kd(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function nh(n,e,t=null){return new hc({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var Dc=(()=>{let e=class e{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new jt(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let i=this.taskId++;return this.pendingTasks.add(i),i}remove(i){this.pendingTasks.delete(i),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function Ic(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function Ww(n,e,t,i,r,s,o,a,c){let l=e.consts,u=Tc(e,n,4,o||null,ec(l,a));Sv(e,t,u,ec(l,c)),Bd(e,u);let d=u.tView=Xd(2,u,i,r,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,l,null);return e.queries!==null&&(e.queries.template(e,u),d.queries=e.queries.embeddedTView(u)),u}function Mi(n,e,t,i,r,s,o,a){let c=Tt(),l=si(),u=n+ii,d=l.firstCreatePass?Ww(u,l,c,e,t,i,r,s,o):l.data[u];Lo(d,!1);let h=jw(l,c,d,n);Ad()&&$d(l,c,h,d),pr(h,c);let m=Ev(h,c,h,d);return c[u]=m,Cc(c,m),Pw(m,d,c),xd(d)&&_v(l,c,d),o!=null&&xv(c,d,a),Mi}var jw=$w;function $w(n,e,t,i){return Dd(!0),e[rn].createComment("")}function qw(n,e,t,i){return Ic(n,wd(),t)?e+Ld(t)+i:vs}function Wa(n,e){return n<<17|e<<2}function gr(n){return n>>17&32767}function Xw(n){return(n&2)==2}function Yw(n,e){return n&131071|e<<17}function hd(n){return n|2}function hs(n){return(n&131068)>>2}function Cu(n,e){return n&-131069|e<<2}function Zw(n){return(n&1)===1}function fd(n){return n|1}function Jw(n,e,t,i,r,s){let o=s?e.classBindings:e.styleBindings,a=gr(o),c=hs(o);n[i]=t;let l=!1,u;if(Array.isArray(t)){let d=t;u=d[1],(u===null||Oo(d,u)>0)&&(l=!0)}else u=t;if(r)if(c!==0){let h=gr(n[a+1]);n[i+1]=Wa(h,a),h!==0&&(n[h+1]=Cu(n[h+1],i)),n[a+1]=Yw(n[a+1],i)}else n[i+1]=Wa(a,0),a!==0&&(n[a+1]=Cu(n[a+1],i)),a=i;else n[i+1]=Wa(c,0),a===0?a=i:n[c+1]=Cu(n[c+1],i),c=i;l&&(n[i+1]=hd(n[i+1])),Wm(n,u,i,!0),Wm(n,u,i,!1),Kw(e,u,n,i,s),o=Wa(a,c),s?e.classBindings=o:e.styleBindings=o}function Kw(n,e,t,i,r){let s=r?n.residualClasses:n.residualStyles;s!=null&&typeof e=="string"&&Oo(s,e)>=0&&(t[i+1]=fd(t[i+1]))}function Wm(n,e,t,i){let r=n[t+1],s=e===null,o=i?gr(r):hs(r),a=!1;for(;o!==0&&(a===!1||s);){let c=n[o],l=n[o+1];Qw(c,e)&&(a=!0,n[o+1]=i?fd(l):hd(l)),o=i?gr(l):hs(l)}a&&(n[t+1]=i?hd(r):fd(r))}function Qw(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?Oo(n,e)>=0:!1}function Je(n,e,t){let i=Tt(),r=wd();if(Ic(i,r,e)){let s=si(),o=UM();Db(s,o,i,n,e,i[rn],t,!1)}return Je}function jm(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";Yd(n,t,s[o],o,i)}function Rc(n,e,t){return eE(n,e,t,!1),Rc}function eE(n,e,t,i){let r=Tt(),s=si(),o=IM(2);if(s.firstUpdatePass&&nE(s,n,o,i),e!==vs&&Ic(r,o,e)){let a=s.data[ps()];aE(s,a,r,r[rn],n,r[o+1]=cE(e,t),i,o)}}function tE(n,e){return e>=n.expandoStartIndex}function nE(n,e,t,i){let r=n.data;if(r[t+1]===null){let s=r[ps()],o=tE(n,t);lE(s,i)&&e===null&&!o&&(e=!1),e=iE(r,s,e,i),Jw(r,s,e,t,o,i)}}function iE(n,e,t,i){let r=LM(n),s=i?e.residualClasses:e.residualStyles;if(r===null)(i?e.classBindings:e.styleBindings)===0&&(t=Au(null,n,e,t,i),t=Ro(t,e.attrs,i),s=null);else{let o=e.directiveStylingLast;if(o===-1||n[o]!==r)if(t=Au(r,n,e,t,i),s===null){let c=rE(n,e,i);c!==void 0&&Array.isArray(c)&&(c=Au(null,n,e,c[1],i),c=Ro(c,e.attrs,i),sE(n,e,i,c))}else s=oE(n,e,i)}return s!==void 0&&(i?e.residualClasses=s:e.residualStyles=s),t}function rE(n,e,t){let i=t?e.classBindings:e.styleBindings;if(hs(i)!==0)return n[gr(i)]}function sE(n,e,t,i){let r=t?e.classBindings:e.styleBindings;n[gr(r)]=i}function oE(n,e,t){let i,r=e.directiveEnd;for(let s=1+e.directiveStylingLast;s<r;s++){let o=n[s].hostAttrs;i=Ro(i,o,t)}return Ro(i,e.attrs,t)}function Au(n,e,t,i,r){let s=null,o=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<o&&(s=e[a],i=Ro(i,s.hostAttrs,r),s!==n);)a++;return n!==null&&(t.directiveStylingLast=a),i}function Ro(n,e,t){let i=t?1:2,r=-1;if(e!==null)for(let s=0;s<e.length;s++){let o=e[s];typeof o=="number"?r=o:r===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),WM(n,o,t?!0:e[++s]))}return n===void 0?null:n}function aE(n,e,t,i,r,s,o,a){if(!(e.type&3))return;let c=n.data,l=c[a+1],u=Zw(l)?$m(c,e,t,r,hs(l),o):void 0;if(!fc(u)){fc(s)||Xw(l)&&(s=$m(c,null,t,r,a,o));let d=hg(ps(),t);vb(i,o,d,r,s)}}function $m(n,e,t,i,r,s){let o=e===null,a;for(;r>0;){let c=n[r],l=Array.isArray(c),u=l?c[1]:c,d=u===null,h=t[r+1];h===vs&&(h=d?lr:void 0);let m=d?_u(h,i):u===i?h:void 0;if(l&&!fc(m)&&(m=_u(c,i)),fc(m)&&(a=m,o))return a;let g=n[r+1];r=o?gr(g):hs(g)}if(e!==null){let c=s?e.residualClasses:e.residualStyles;c!=null&&(a=_u(c,i))}return a}function fc(n){return n!==void 0}function cE(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=ln(Sc(n)))),n}function lE(n,e){return(n.flags&(e?8:16))!==0}function Vi(n,e,t){Qd("NgControlFlow");let i=Tt(),r=wd(),s=uE(i,ii+n),o=0;if(Ic(i,r,e)){let a=tn(null);try{if(Xb(s,o),e!==-1){let c=dE(i[He],ii+e),l=Zu(s,c.tView.ssrId),u=Iv(i,c,t,{dehydratedView:l});Rv(s,u,o,Xu(c,l))}}finally{tn(a)}}else{let a=qb(s,o);a!==void 0&&(a[Hn]=t)}}function uE(n,e){return n[e]}function dE(n,e){return Md(n,e)}function hE(n,e,t,i,r,s){let o=e.consts,a=ec(o,r),c=Tc(e,n,2,i,a);return Sv(e,t,c,ec(o,s)),c.attrs!==null&&td(c,c.attrs,!1),c.mergedAttrs!==null&&td(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function _e(n,e,t,i){let r=Tt(),s=si(),o=ii+n,a=r[rn],c=s.firstCreatePass?hE(o,s,r,e,t,i):s.data[o],l=fE(s,r,c,a,e,n);r[o]=l;let u=xd(c);return Lo(c,!0),fv(a,l,c),(c.flags&32)!==32&&Ad()&&$d(s,r,l,c),MM()===0&&pr(l,r),SM(),u&&(_v(s,r,c),yv(s,c,r)),i!==null&&xv(r,c),_e}function ve(){let n=oi();gg()?AM():(n=n.parent,Lo(n,!1));let e=n;EM(e)&&TM(),bM();let t=si();return t.firstCreatePass&&(Bd(t,n),dg(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&RS(e)&&jm(t,e,Tt(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&PS(e)&&jm(t,e,Tt(),e.stylesWithoutHost,!1),ve}function st(n,e,t,i){return _e(n,e,t,i),ve(),st}var fE=(n,e,t,i,r,s)=>(Dd(!0),av(i,r,kM()));var pc="en-US";var pE=pc;function mE(n){typeof n=="string"&&(pE=n.toLowerCase().replace(/_/g,"-"))}function Mr(n,e,t,i){let r=Tt(),s=si(),o=oi();return vE(s,r,r[rn],o,n,e,i),Mr}function gE(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[xo],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function vE(n,e,t,i,r,s,o){let a=xd(i),l=n.firstCreatePass&&Av(n),u=e[Hn],d=Cv(e),h=!0;if(i.type&3||o){let _=Wn(i,e),p=o?o(_):_,f=d.length,E=o?w=>o(ri(w[i.index])):i.index,S=null;if(!o&&a&&(S=gE(n,e,r,i.index)),S!==null){let w=S.__ngLastListenerFn__||S;w.__ngNextListenerFn__=s,S.__ngLastListenerFn__=s,h=!1}else{s=Xm(i,e,u,s,!1);let w=t.listen(p,r,s);d.push(s,w),l&&l.push(r,E,f,f+1)}}else s=Xm(i,e,u,s,!1);let m=i.outputs,g;if(h&&m!==null&&(g=m[r])){let _=g.length;if(_)for(let p=0;p<_;p+=2){let f=g[p],E=g[p+1],I=e[f][E].subscribe(s),A=d.length;if(d.push(s,I),l){let C=typeof I=="function"?A+1:-(A+1);l.push(r,i.index,A,C)}}}}function qm(n,e,t,i){try{return Qn(6,e,t),t(i)!==!1}catch(r){return Dv(n,r),!1}finally{Qn(7,e,t)}}function Xm(n,e,t,i,r){return function s(o){if(o===Function)return i;let a=n.componentOffset>-1?vr(n.index,e):e;Jd(a);let c=qm(e,t,i,o),l=s.__ngNextListenerFn__;for(;l;)c=qm(e,t,l,o)&&c,l=l.__ngNextListenerFn__;return r&&c===!1&&o.preventDefault(),c}}function ai(n=1){return FM(n)}function jv(n,e,t){Vw(n,e,t)}function ih(n){let e=Tt(),t=si(),i=vg();Ed(i+1);let r=th(t,i);if(n.dirty&&gM(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let s=Gw(e,i);n.reset(s,VM),n.notifyOnChanges()}return!0}return!1}function rh(){return kw(Tt(),vg())}function ot(n,e=""){let t=Tt(),i=si(),r=n+ii,s=i.firstCreatePass?Tc(i,r,1,e,null):i.data[r],o=yE(i,t,s,e,n);t[r]=o,Ad()&&$d(i,t,o,s),Lo(s,!1)}var yE=(n,e,t,i,r)=>(Dd(!0),KS(e[rn],i));function _s(n){return $v("",n,""),_s}function $v(n,e,t){let i=Tt(),r=qw(i,n,e,t);return r!==vs&&Gb(i,ps(),r),$v}var _E=(()=>{let e=class e{constructor(i){this._injector=i,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(i){if(!i.standalone)return null;if(!this.cachedInjectors.has(i)){let r=Fg(!1,i.type),s=r.length>0?nh([r],this._injector,`Standalone[${i.type.name}]`):null;this.cachedInjectors.set(i,s)}return this.cachedInjectors.get(i)}ngOnDestroy(){try{for(let i of this.cachedInjectors.values())i!==null&&i.destroy()}finally{this.cachedInjectors.clear()}}};e.\u0275prov=Ne({token:e,providedIn:"environment",factory:()=>new e(it(Dn))});let n=e;return n})();function zt(n){Qd("NgStandalone"),n.getStandaloneInjector=e=>e.get(_E).getOrCreateStandaloneInjector(n)}var Pc=(()=>{let e=class e{log(i){console.log(i)}warn(i){console.warn(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"platform"});let n=e;return n})();var qv=new nt("");function ko(n){return!!n&&typeof n.then=="function"}function Xv(n){return!!n&&typeof n.subscribe=="function"}var Yv=new nt(""),Zv=(()=>{let e=class e{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((i,r)=>{this.resolve=i,this.reject=r}),this.appInits=ue(Yv,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let i=[];for(let s of this.appInits){let o=s();if(ko(o))i.push(o);else if(Xv(o)){let a=new Promise((c,l)=>{o.subscribe({complete:c,error:l})});i.push(a)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(i).then(()=>{r()}).catch(s=>{this.reject(s)}),i.length===0&&r(),this.initialized=!0}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),sh=new nt("");function xE(){kp(()=>{throw new Ae(600,!1)})}function ME(n){return n.isBoundToModule}function SE(n,e,t){try{let i=t();return ko(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var Bo=(()=>{let e=class e{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=ue(tv),this.afterRenderEffectManager=ue(zv),this.componentTypes=[],this.components=[],this.isStable=ue(Dc).hasPendingTasks.pipe(tt(i=>!i)),this._injector=ue(Dn)}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(i,r){let s=i instanceof uc;if(!this._injector.get(Zv).done){let m=!s&&sg(i),g=!1;throw new Ae(405,g)}let a;s?a=i:a=this._injector.get(Ac).resolveComponentFactory(i),this.componentTypes.push(a.componentType);let c=ME(a)?void 0:this._injector.get(Bi),l=r||a.selector,u=a.create(Fo.NULL,[],l,c),d=u.location.nativeElement,h=u.injector.get(qv,null);return h?.registerApplication(d),u.onDestroy(()=>{this.detachView(u.hostView),Du(this.components,u),h?.unregisterApplication(d)}),this._loadComponent(u),u}tick(){if(this._runningTick)throw new Ae(101,!1);try{this._runningTick=!0,this.detectChangesInAttachedViews()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1}}detectChangesInAttachedViews(){let i=0;do{if(i===Fv)throw new Ae(103,!1);let r=i===0;for(let{_lView:s,notifyErrorHandler:o}of this._views)!r&&!Ym(s)||this.detectChangesInView(s,o,r);this.afterRenderEffectManager.execute(),i++}while(this._views.some(({_lView:r})=>Ym(r)))}detectChangesInView(i,r,s){let o;s?(o=0,i[Te]|=1024):i[Te]&64?o=0:o=1,Uv(i,r,o)}attachView(i){let r=i;this._views.push(r),r.attachToAppRef(this)}detachView(i){let r=i;Du(this._views,r),r.detachFromAppRef()}_loadComponent(i){this.attachView(i.hostView),this.tick(),this.components.push(i);let r=this._injector.get(sh,[]);[...this._bootstrapListeners,...r].forEach(s=>s(i))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(i=>i()),this._views.slice().forEach(i=>i.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(i){return this._destroyListeners.push(i),()=>Du(this._destroyListeners,i)}destroy(){if(this._destroyed)throw new Ae(406,!1);let i=this._injector;i.destroy&&!i.destroyed&&i.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function Du(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Ym(n){return bd(n)}var pd=class{constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},oh=(()=>{let e=class e{compileModuleSync(i){return new dd(i)}compileModuleAsync(i){return Promise.resolve(this.compileModuleSync(i))}compileModuleAndAllComponentsSync(i){let r=this.compileModuleSync(i),s=og(i),o=ov(s.declarations).reduce((a,c)=>{let l=ur(c);return l&&a.push(new Do(l)),a},[]);return new pd(r,o)}compileModuleAndAllComponentsAsync(i){return Promise.resolve(this.compileModuleAndAllComponentsSync(i))}clearCache(){}clearCacheFor(i){}getModuleId(i){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var bE=(()=>{let e=class e{constructor(){this.zone=ue(Dt),this.applicationRef=ue(Bo)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function wE(n){return[{provide:Dt,useFactory:n},{provide:us,multi:!0,useFactory:()=>{let e=ue(bE,{optional:!0});return()=>e.initialize()}},{provide:us,multi:!0,useFactory:()=>{let e=ue(AE);return()=>{e.initialize()}}},{provide:tv,useFactory:EE}]}function EE(){let n=ue(Dt),e=ue(vi);return t=>n.runOutsideAngular(()=>e.handleError(t))}function TE(n){let e=wE(()=>new Dt(CE(n)));return _c([[],e])}function CE(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var AE=(()=>{let e=class e{constructor(){this.subscription=new Rt,this.initialized=!1,this.zone=ue(Dt),this.pendingTasks=ue(Dc)}initialize(){if(this.initialized)return;this.initialized=!0;let i=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(i=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{Dt.assertNotInAngularZone(),queueMicrotask(()=>{i!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(i),i=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{Dt.assertInAngularZone(),i??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function DE(){return typeof $localize<"u"&&$localize.locale||pc}var ah=new nt("",{providedIn:"root",factory:()=>ue(ah,qe.Optional|qe.SkipSelf)||DE()});var Jv=new nt("");var Za=null;function IE(n=[],e){return Fo.create({name:e,providers:[{provide:xc,useValue:"platform"},{provide:Jv,useValue:new Set([()=>Za=null])},...n]})}function RE(n=[]){if(Za)return Za;let e=IE(n);return Za=e,xE(),PE(e),e}function PE(n){n.get(Pd,null)?.forEach(t=>t())}function Kv(n){try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=RE(i),s=[TE(),...t||[]],a=new hc({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1}).injector,c=a.get(Dt);return c.run(()=>{a.resolveInjectorInitializers();let l=a.get(vi,null),u;c.runOutsideAngular(()=>{u=c.onError.subscribe({next:m=>{l.handleError(m)}})});let d=()=>a.destroy(),h=r.get(Jv);return h.add(d),a.onDestroy(()=>{u.unsubscribe(),h.delete(d)}),SE(l,c,()=>{let m=a.get(Zv);return m.runInitializers(),m.donePromise.then(()=>{let g=a.get(ah,pc);mE(g||pc);let _=a.get(Bo);return e!==void 0&&_.bootstrap(e),_})})})}catch(e){return Promise.reject(e)}}var sy=null;function xs(){return sy}function oy(n){sy??=n}var Nc=class{};var Rn=new nt(""),ay=(()=>{let e=class e{historyGo(i){throw new Error("")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:()=>ue(FE),providedIn:"platform"});let n=e;return n})();var FE=(()=>{let e=class e extends ay{constructor(){super(),this._doc=ue(Rn),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return xs().getBaseHref(this._doc)}onPopState(i){let r=xs().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",i,!1),()=>r.removeEventListener("popstate",i)}onHashChange(i){let r=xs().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",i,!1),()=>r.removeEventListener("hashchange",i)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(i){this._location.pathname=i}pushState(i,r,s){this._history.pushState(i,r,s)}replaceState(i,r,s){this._history.replaceState(i,r,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(i=0){this._history.go(i)}getState(){return this._history.state}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:()=>new e,providedIn:"platform"});let n=e;return n})();function cy(n,e){if(n.length==0)return e;if(e.length==0)return n;let t=0;return n.endsWith("/")&&t++,e.startsWith("/")&&t++,t==2?n+e.substring(1):t==1?n+e:n+"/"+e}function Qv(n){let e=n.match(/#|\?|$/),t=e&&e.index||n.length,i=t-(n[t-1]==="/"?1:0);return n.slice(0,i)+n.slice(t)}function Sr(n){return n&&n[0]!=="?"?"?"+n:n}var Oc=(()=>{let e=class e{historyGo(i){throw new Error("")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:()=>ue(ly),providedIn:"root"});let n=e;return n})(),UE=new nt(""),ly=(()=>{let e=class e extends Oc{constructor(i,r){super(),this._platformLocation=i,this._removeListenerFns=[],this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??ue(Rn).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(i){this._removeListenerFns.push(this._platformLocation.onPopState(i),this._platformLocation.onHashChange(i))}getBaseHref(){return this._baseHref}prepareExternalUrl(i){return cy(this._baseHref,i)}path(i=!1){let r=this._platformLocation.pathname+Sr(this._platformLocation.search),s=this._platformLocation.hash;return s&&i?`${r}${s}`:r}pushState(i,r,s,o){let a=this.prepareExternalUrl(s+Sr(o));this._platformLocation.pushState(i,r,a)}replaceState(i,r,s,o){let a=this.prepareExternalUrl(s+Sr(o));this._platformLocation.replaceState(i,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(i=0){this._platformLocation.historyGo?.(i)}};e.\u0275fac=function(r){return new(r||e)(it(ay),it(UE,8))},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var Vo=(()=>{let e=class e{constructor(i){this._subject=new Cn,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=i;let r=this._locationStrategy.getBaseHref();this._basePath=VE(Qv(ey(r))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(i=!1){return this.normalize(this._locationStrategy.path(i))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(i,r=""){return this.path()==this.normalize(i+Sr(r))}normalize(i){return e.stripTrailingSlash(BE(this._basePath,ey(i)))}prepareExternalUrl(i){return i&&i[0]!=="/"&&(i="/"+i),this._locationStrategy.prepareExternalUrl(i)}go(i,r="",s=null){this._locationStrategy.pushState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+Sr(r)),s)}replaceState(i,r="",s=null){this._locationStrategy.replaceState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+Sr(r)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(i=0){this._locationStrategy.historyGo?.(i)}onUrlChange(i){return this._urlChangeListeners.push(i),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(i);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(i="",r){this._urlChangeListeners.forEach(s=>s(i,r))}subscribe(i,r,s){return this._subject.subscribe({next:i,error:r,complete:s})}};e.normalizeQueryParams=Sr,e.joinWithSlash=cy,e.stripTrailingSlash=Qv,e.\u0275fac=function(r){return new(r||e)(it(Oc))},e.\u0275prov=Ne({token:e,factory:()=>kE(),providedIn:"root"});let n=e;return n})();function kE(){return new Vo(it(Oc))}function BE(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function ey(n){return n.replace(/\/index.html$/,"")}function VE(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function uy(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var dy="browser",zE="server";function ch(n){return n===zE}var Lc=class{};var dh=class extends Nc{constructor(){super(...arguments),this.supportsDOMEvents=!0}},hh=class n extends dh{static makeCurrent(){oy(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=GE();return t==null?null:WE(t)}resetBaseElement(){zo=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return uy(document.cookie,e)}},zo=null;function GE(){return zo=zo||document.querySelector("base"),zo?zo.getAttribute("href"):null}function WE(n){return new URL(n,document.baseURI).pathname}var jE=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac});let n=e;return n})(),fh=new nt(""),my=(()=>{let e=class e{constructor(i,r){this._zone=r,this._eventNameToPlugin=new Map,i.forEach(s=>{s.manager=this}),this._plugins=i.slice().reverse()}addEventListener(i,r,s){return this._findPluginFor(r).addEventListener(i,r,s)}getZone(){return this._zone}_findPluginFor(i){let r=this._eventNameToPlugin.get(i);if(r)return r;if(r=this._plugins.find(o=>o.supports(i)),!r)throw new Ae(5101,!1);return this._eventNameToPlugin.set(i,r),r}};e.\u0275fac=function(r){return new(r||e)(it(fh),it(Dt))},e.\u0275prov=Ne({token:e,factory:e.\u0275fac});let n=e;return n})(),Fc=class{constructor(e){this._doc=e}},lh="ng-app-id",gy=(()=>{let e=class e{constructor(i,r,s,o={}){this.doc=i,this.appId=r,this.nonce=s,this.platformId=o,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=ch(o),this.resetHostNodes()}addStyles(i){for(let r of i)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(i){for(let r of i)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let i=this.styleNodesInDOM;i&&(i.forEach(r=>r.remove()),i.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(i){this.hostNodes.add(i);for(let r of this.getAllStyles())this.addStyleToHost(i,r)}removeHost(i){this.hostNodes.delete(i)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(i){for(let r of this.hostNodes)this.addStyleToHost(r,i)}onStyleRemoved(i){let r=this.styleRef;r.get(i)?.elements?.forEach(s=>s.remove()),r.delete(i)}collectServerRenderedStyles(){let i=this.doc.head?.querySelectorAll(`style[${lh}="${this.appId}"]`);if(i?.length){let r=new Map;return i.forEach(s=>{s.textContent!=null&&r.set(s.textContent,s)}),r}return null}changeUsageCount(i,r){let s=this.styleRef;if(s.has(i)){let o=s.get(i);return o.usage+=r,o.usage}return s.set(i,{usage:r,elements:[]}),r}getStyleElement(i,r){let s=this.styleNodesInDOM,o=s?.get(r);if(o?.parentNode===i)return s.delete(r),o.removeAttribute(lh),o;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=r,this.platformIsServer&&a.setAttribute(lh,this.appId),i.appendChild(a),a}}addStyleToHost(i,r){let s=this.getStyleElement(i,r),o=this.styleRef,a=o.get(r)?.elements;a?a.push(s):o.set(r,{elements:[s],usage:1})}resetHostNodes(){let i=this.hostNodes;i.clear(),i.add(this.doc.head)}};e.\u0275fac=function(r){return new(r||e)(it(Rn),it(Rd),it(Nd,8),it(gs))},e.\u0275prov=Ne({token:e,factory:e.\u0275fac});let n=e;return n})(),uh={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},mh=/%COMP%/g,vy="%COMP%",$E=`_nghost-${vy}`,qE=`_ngcontent-${vy}`,XE=!0,YE=new nt("",{providedIn:"root",factory:()=>XE});function ZE(n){return qE.replace(mh,n)}function JE(n){return $E.replace(mh,n)}function yy(n,e){return e.map(t=>t.replace(mh,n))}var hy=(()=>{let e=class e{constructor(i,r,s,o,a,c,l,u=null){this.eventManager=i,this.sharedStylesHost=r,this.appId=s,this.removeStylesOnCompDestroy=o,this.doc=a,this.platformId=c,this.ngZone=l,this.nonce=u,this.rendererByCompId=new Map,this.platformIsServer=ch(c),this.defaultRenderer=new Ho(i,a,l,this.platformIsServer)}createRenderer(i,r){if(!i||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===ti.ShadowDom&&(r=wt(pe({},r),{encapsulation:ti.Emulated}));let s=this.getOrCreateRenderer(i,r);return s instanceof Uc?s.applyToHost(i):s instanceof Go&&s.applyStyles(),s}getOrCreateRenderer(i,r){let s=this.rendererByCompId,o=s.get(r.id);if(!o){let a=this.doc,c=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,h=this.platformIsServer;switch(r.encapsulation){case ti.Emulated:o=new Uc(l,u,r,this.appId,d,a,c,h);break;case ti.ShadowDom:return new ph(l,u,i,r,a,c,this.nonce,h);default:o=new Go(l,u,r,d,a,c,h);break}s.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(r){return new(r||e)(it(my),it(gy),it(Rd),it(YE),it(Rn),it(gs),it(Dt),it(Nd))},e.\u0275prov=Ne({token:e,factory:e.\u0275fac});let n=e;return n})(),Ho=class{constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS(uh[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(fy(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(fy(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Ae(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=uh[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=uh[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(yi.DashCase|yi.Important)?e.style.setProperty(t,i,r&yi.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&yi.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=xs().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function fy(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var ph=class extends Ho{constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=yy(r.id,r.styles);for(let u of l){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=u,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Go=class extends Ho{constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?yy(c,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},Uc=class extends Go{constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=ZE(l),this.hostAttr=JE(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},KE=(()=>{let e=class e extends Fc{constructor(i){super(i)}supports(i){return!0}addEventListener(i,r,s){return i.addEventListener(r,s,!1),()=>this.removeEventListener(i,r,s)}removeEventListener(i,r,s){return i.removeEventListener(r,s)}};e.\u0275fac=function(r){return new(r||e)(it(Rn))},e.\u0275prov=Ne({token:e,factory:e.\u0275fac});let n=e;return n})(),py=["alt","control","meta","shift"],QE={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},eT={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},tT=(()=>{let e=class e extends Fc{constructor(i){super(i)}supports(i){return e.parseEventName(i)!=null}addEventListener(i,r,s){let o=e.parseEventName(r),a=e.eventCallback(o.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>xs().onAndCancel(i,o.domEventName,a))}static parseEventName(i){let r=i.toLowerCase().split("."),s=r.shift();if(r.length===0||!(s==="keydown"||s==="keyup"))return null;let o=e._normalizeKey(r.pop()),a="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),a="code."),py.forEach(u=>{let d=r.indexOf(u);d>-1&&(r.splice(d,1),a+=u+".")}),a+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=s,l.fullKey=a,l}static matchEventFullKeyCode(i,r){let s=QE[i.key]||i.key,o="";return r.indexOf("code.")>-1&&(s=i.code,o="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),py.forEach(a=>{if(a!==s){let c=eT[a];c(i)&&(o+=a+".")}}),o+=s,o===r)}static eventCallback(i,r,s){return o=>{e.matchEventFullKeyCode(o,i)&&s.runGuarded(()=>r(o))}}static _normalizeKey(i){return i==="esc"?"escape":i}};e.\u0275fac=function(r){return new(r||e)(it(Rn))},e.\u0275prov=Ne({token:e,factory:e.\u0275fac});let n=e;return n})();function _y(n,e){return Kv(pe({rootComponent:n},nT(e)))}function nT(n){return{appProviders:[...aT,...n?.providers??[]],platformProviders:oT}}function iT(){hh.makeCurrent()}function rT(){return new vi}function sT(){return Tg(document),document}var oT=[{provide:gs,useValue:dy},{provide:Pd,useValue:iT,multi:!0},{provide:Rn,useFactory:sT,deps:[]}];var aT=[{provide:xc,useValue:"root"},{provide:vi,useFactory:rT,deps:[]},{provide:fh,useClass:KE,multi:!0,deps:[Rn,Dt,gs]},{provide:fh,useClass:tT,multi:!0,deps:[Rn]},hy,gy,my,{provide:Ao,useExisting:hy},{provide:Lc,useClass:jE,deps:[]},[]];var xy=(()=>{let e=class e{constructor(i){this._doc=i}getTitle(){return this._doc.title}setTitle(i){this._doc.title=i||""}};e.\u0275fac=function(r){return new(r||e)(it(Rn))},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var Be="primary",ra=Symbol("RouteTitle"),xh=class{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Es(n){return new xh(n)}function lT(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o.startsWith(":"))r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function uT(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!ci(n[t],e[t]))return!1;return!0}function ci(n,e){let t=n?Mh(n):void 0,i=e?Mh(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!Ty(n[r],e[r]))return!1;return!0}function Mh(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Ty(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function Cy(n){return n.length>0?n[n.length-1]:null}function Gi(n){return uu(n)?n:ko(n)?Pt(Promise.resolve(n)):Oe(n)}var dT={exact:Dy,subset:Iy},Ay={exact:hT,subset:fT,ignored:()=>!0};function My(n,e,t){return dT[t.paths](n.root,e.root,t.matrixParams)&&Ay[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function hT(n,e){return ci(n,e)}function Dy(n,e,t){if(!wr(n.segments,e.segments)||!Vc(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!Dy(n.children[i],e.children[i],t))return!1;return!0}function fT(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>Ty(n[t],e[t]))}function Iy(n,e,t){return Ry(n,e,e.segments,t)}function Ry(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!wr(r,t)||e.hasChildren()||!Vc(r,t,i))}else if(n.segments.length===t.length){if(!wr(n.segments,t)||!Vc(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!Iy(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!wr(n.segments,r)||!Vc(n.segments,r,i)||!n.children[Be]?!1:Ry(n.children[Be],e,s,i)}}function Vc(n,e,t){return e.every((i,r)=>Ay[t](n[r].parameters,i.parameters))}var zi=class{constructor(e=new at([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Es(this.queryParams),this._queryParamMap}toString(){return gT.serialize(this)}},at=class{constructor(e,t){this.segments=e,this.children=t,this.parent=null,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return zc(this)}},br=class{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=Es(this.parameters),this._parameterMap}toString(){return Ny(this)}};function pT(n,e){return wr(n,e)&&n.every((t,i)=>ci(t.parameters,e[i].parameters))}function wr(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function mT(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Be&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Be&&(t=t.concat(e(r,i)))}),t}var qh=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:()=>new Gc,providedIn:"root"});let n=e;return n})(),Gc=class{parse(e){let t=new bh(e);return new zi(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Wo(e.root,!0)}`,i=_T(e.queryParams),r=typeof e.fragment=="string"?`#${vT(e.fragment)}`:"";return`${t}${i}${r}`}},gT=new Gc;function zc(n){return n.segments.map(e=>Ny(e)).join("/")}function Wo(n,e){if(!n.hasChildren())return zc(n);if(e){let t=n.children[Be]?Wo(n.children[Be],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==Be&&i.push(`${r}:${Wo(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=mT(n,(i,r)=>r===Be?[Wo(n.children[Be],!1)]:[`${r}:${Wo(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Be]!=null?`${zc(n)}/${t[0]}`:`${zc(n)}/(${t.join("//")})`}}function Py(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function kc(n){return Py(n).replace(/%3B/gi,";")}function vT(n){return encodeURI(n)}function Sh(n){return Py(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Hc(n){return decodeURIComponent(n)}function Sy(n){return Hc(n.replace(/\+/g,"%20"))}function Ny(n){return`${Sh(n.path)}${yT(n.parameters)}`}function yT(n){return Object.entries(n).map(([e,t])=>`;${Sh(e)}=${Sh(t)}`).join("")}function _T(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${kc(t)}=${kc(r)}`).join("&"):`${kc(t)}=${kc(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var xT=/^[^\/()?;#]+/;function gh(n){let e=n.match(xT);return e?e[0]:""}var MT=/^[^\/()?;=#]+/;function ST(n){let e=n.match(MT);return e?e[0]:""}var bT=/^[^=?&#]+/;function wT(n){let e=n.match(bT);return e?e[0]:""}var ET=/^[^&#]+/;function TT(n){let e=n.match(ET);return e?e[0]:""}var bh=class{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new at([],{}):new at([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[Be]=new at(e,t)),i}parseSegment(){let e=gh(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Ae(4009,!1);return this.capture(e),new br(Hc(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=ST(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=gh(this.remaining);r&&(i=r,this.capture(i))}e[Hc(t)]=Hc(i)}parseQueryParam(e){let t=wT(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=TT(this.remaining);o&&(i=o,this.capture(i))}let r=Sy(t),s=Sy(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=gh(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new Ae(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Be);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[Be]:new at([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Ae(4011,!1)}};function Ly(n){return n.segments.length>0?new at([],{[Be]:n}):n}function Oy(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=Oy(r);if(i===Be&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new at(n.segments,e);return CT(t)}function CT(n){if(n.numberOfChildren===1&&n.children[Be]){let e=n.children[Be];return new at(n.segments.concat(e.segments),e.children)}return n}function Ts(n){return n instanceof zi}function AT(n,e,t=null,i=null){let r=Fy(n);return Uy(r,e,t,i)}function Fy(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new at(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=Ly(i);return e??r}function Uy(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return vh(r,r,r,t,i);let s=DT(e);if(s.toRoot())return vh(r,r,new at([],{}),t,i);let o=IT(s,r,n),a=o.processChildren?qo(o.segmentGroup,o.index,s.commands):By(o.segmentGroup,o.index,s.commands);return vh(r,o.segmentGroup,a,t,i)}function Wc(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Zo(n){return typeof n=="object"&&n!=null&&n.outlets}function vh(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=ky(n,e,t);let a=Ly(Oy(o));return new zi(a,s,r)}function ky(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=ky(s,e,t)}),new at(n.segments,i)}var jc=class{constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&Wc(i[0]))throw new Ae(4003,!1);let r=i.find(Zo);if(r&&r!==Cy(i))throw new Ae(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function DT(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new jc(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new jc(t,e,i)}var bs=class{constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function IT(n,e,t){if(n.isAbsolute)return new bs(e,!0,0);if(!t)return new bs(e,!1,NaN);if(t.parent===null)return new bs(t,!0,0);let i=Wc(n.commands[0])?0:1,r=t.segments.length-1+i;return RT(t,r,n.numberOfDoubleDots)}function RT(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new Ae(4005,!1);r=i.segments.length}return new bs(i,!1,r-s)}function PT(n){return Zo(n[0])?n[0].outlets:{[Be]:n}}function By(n,e,t){if(n??=new at([],{}),n.segments.length===0&&n.hasChildren())return qo(n,e,t);let i=NT(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new at(n.segments.slice(0,i.pathIndex),{});return s.children[Be]=new at(n.segments.slice(i.pathIndex),n.children),qo(s,0,r)}else return i.match&&r.length===0?new at(n.segments,{}):i.match&&!n.hasChildren()?wh(n,e,t):i.match?qo(n,0,r):wh(n,e,t)}function qo(n,e,t){if(t.length===0)return new at(n.segments,{});{let i=PT(t),r={};if(Object.keys(i).some(s=>s!==Be)&&n.children[Be]&&n.numberOfChildren===1&&n.children[Be].segments.length===0){let s=qo(n.children[Be],e,t);return new at(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=By(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new at(n.segments,r)}}function NT(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(Zo(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!wy(c,l,o))return s;i+=2}else{if(!wy(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function wh(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(Zo(s)){let c=LT(s.outlets);return new at(i,c)}if(r===0&&Wc(t[0])){let c=n.segments[e];i.push(new br(c.path,by(t[0]))),r++;continue}let o=Zo(s)?s.outlets[Be]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&Wc(a)?(i.push(new br(o,by(a))),r+=2):(i.push(new br(o,{})),r++)}return new at(i,{})}function LT(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=wh(new at([],{}),0,i))}),e}function by(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function wy(n,e,t){return n==t.path&&ci(e,t.parameters)}var Xo="imperative",qt=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(qt||{}),Nn=class{constructor(e,t){this.id=e,this.url=t}},Jo=class extends Nn{constructor(e,t,i="imperative",r=null){super(e,t),this.type=qt.NavigationStart,this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Er=class extends Nn{constructor(e,t,i){super(e,t),this.urlAfterRedirects=i,this.type=qt.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Pn=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(Pn||{}),Eh=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(Eh||{}),Hi=class extends Nn{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=qt.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Tr=class extends Nn{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=qt.NavigationSkipped}},Ko=class extends Nn{constructor(e,t,i,r){super(e,t),this.error=i,this.target=r,this.type=qt.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},$c=class extends Nn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=qt.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Th=class extends Nn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=qt.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ch=class extends Nn{constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s,this.type=qt.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Ah=class extends Nn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=qt.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Dh=class extends Nn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=qt.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ih=class{constructor(e){this.route=e,this.type=qt.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Rh=class{constructor(e){this.route=e,this.type=qt.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Ph=class{constructor(e){this.snapshot=e,this.type=qt.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Nh=class{constructor(e){this.snapshot=e,this.type=qt.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Lh=class{constructor(e){this.snapshot=e,this.type=qt.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Oh=class{constructor(e){this.snapshot=e,this.type=qt.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Qo=class{},ea=class{constructor(e){this.url=e}};var Fh=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new Kc,this.attachRef=null}},Kc=(()=>{let e=class e{constructor(){this.contexts=new Map}onChildOutletCreated(i,r){let s=this.getOrCreateContext(i);s.outlet=r,this.contexts.set(i,s)}onChildOutletDestroyed(i){let r=this.getContext(i);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let i=this.contexts;return this.contexts=new Map,i}onOutletReAttached(i){this.contexts=i}getOrCreateContext(i){let r=this.getContext(i);return r||(r=new Fh,this.contexts.set(i,r)),r}getContext(i){return this.contexts.get(i)||null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),qc=class{constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=Uh(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=Uh(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=kh(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return kh(e,this._root).map(t=>t.value)}};function Uh(n,e){if(n===e.value)return e;for(let t of e.children){let i=Uh(n,t);if(i)return i}return null}function kh(n,e){if(n===e.value)return[e];for(let t of e.children){let i=kh(n,t);if(i.length)return i.unshift(e),i}return[]}var _n=class{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Ss(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var Xc=class extends qc{constructor(e,t){super(e),this.snapshot=t,Yh(this,e)}toString(){return this.snapshot.toString()}};function Vy(n){let e=OT(n),t=new jt([new br("",{})]),i=new jt({}),r=new jt({}),s=new jt({}),o=new jt(""),a=new Cs(t,i,s,o,r,Be,n,e.root);return a.snapshot=e.root,new Xc(new _n(a,[]),e)}function OT(n){let e={},t={},i={},r="",s=new ta([],e,i,r,t,Be,n,null,{});return new Yc("",new _n(s,[]))}var Cs=class{constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(tt(l=>l[ra]))??Oe(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(tt(e=>Es(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(tt(e=>Es(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Xh(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:pe(pe({},e.params),n.params),data:pe(pe({},e.data),n.data),resolve:pe(pe(pe(pe({},n.data),e.data),r?.data),n._resolvedData)}:i={params:pe({},n.params),data:pe({},n.data),resolve:pe(pe({},n.data),n._resolvedData??{})},r&&Hy(r)&&(i.resolve[ra]=r.title),i}var ta=class{get title(){return this.data?.[ra]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Es(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Es(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},Yc=class extends qc{constructor(e,t){super(t),this.url=e,Yh(this,t)}toString(){return zy(this._root)}};function Yh(n,e){e.value._routerState=n,e.children.forEach(t=>Yh(n,t))}function zy(n){let e=n.children.length>0?` { ${n.children.map(zy).join(", ")} } `:"";return`${n.value}${e}`}function yh(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,ci(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),ci(e.params,t.params)||n.paramsSubject.next(t.params),uT(e.url,t.url)||n.urlSubject.next(t.url),ci(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Bh(n,e){let t=ci(n.params,e.params)&&pT(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||Bh(n.parent,e.parent))}function Hy(n){return typeof n.title=="string"||n.title===null}var Zh=(()=>{let e=class e{constructor(){this.activated=null,this._activatedRoute=null,this.name=Be,this.activateEvents=new Cn,this.deactivateEvents=new Cn,this.attachEvents=new Cn,this.detachEvents=new Cn,this.parentContexts=ue(Kc),this.location=ue(ys),this.changeDetector=ue(Uo),this.environmentInjector=ue(Dn),this.inputBinder=ue(Jh,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(i){if(i.name){let{firstChange:r,previousValue:s}=i.name;if(r)return;this.isTrackedInParentContexts(s)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(s)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(i){return this.parentContexts.getContext(i)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let i=this.parentContexts.getContext(this.name);i?.route&&(i.attachRef?this.attach(i.attachRef,i.route):this.activateWith(i.route,i.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Ae(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Ae(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Ae(4012,!1);this.location.detach();let i=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(i.instance),i}attach(i,r){this.activated=i,this._activatedRoute=r,this.location.insert(i.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(i.instance)}deactivate(){if(this.activated){let i=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(i)}}activateWith(i,r){if(this.isActivated)throw new Ae(4013,!1);this._activatedRoute=i;let s=this.location,a=i.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,l=new Vh(i,c,s.injector);this.activated=s.createComponent(a,{index:s.length,injector:l,environmentInjector:r??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=yd({type:e,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[Mc]});let n=e;return n})(),Vh=class{constructor(e,t,i){this.route=e,this.childContexts=t,this.parent=i}get(e,t){return e===Cs?this.route:e===Kc?this.childContexts:this.parent.get(e,t)}},Jh=new nt("");function FT(n,e,t){let i=na(n,e._root,t?t._root:void 0);return new Xc(i,e)}function na(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=UT(n,e,t);return new _n(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>na(n,a)),o}}let i=kT(e.value),r=e.children.map(s=>na(n,s));return new _n(i,r)}}function UT(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return na(n,i,r);return na(n,i)})}function kT(n){return new Cs(new jt(n.url),new jt(n.params),new jt(n.queryParams),new jt(n.fragment),new jt(n.data),n.outlet,n.component,n)}var Gy="ngNavigationCancelingError";function Wy(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=Ts(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=jy(!1,Pn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function jy(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[Gy]=!0,t.cancellationCode=e,t}function BT(n){return $y(n)&&Ts(n.url)}function $y(n){return!!n&&n[Gy]}var VT=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Vt({type:e,selectors:[["ng-component"]],standalone:!0,features:[zt],decls:1,vars:0,template:function(r,s){r&1&&st(0,"router-outlet")},dependencies:[Zh],encapsulation:2});let n=e;return n})();function zT(n,e){return n.providers&&!n._injector&&(n._injector=nh(n.providers,e,`Route: ${n.path}`)),n._injector??e}function Kh(n){let e=n.children&&n.children.map(Kh),t=e?wt(pe({},n),{children:e}):pe({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Be&&(t.component=VT),t}function li(n){return n.outlet||Be}function HT(n,e){let t=n.filter(i=>li(i)===e);return t.push(...n.filter(i=>li(i)!==e)),t}function sa(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var GT=(n,e,t,i)=>tt(r=>(new zh(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),zh=class{constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),yh(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=Ss(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Ss(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Ss(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=Ss(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new Oh(s.value.snapshot))}),e.children.length&&this.forwardEvent(new Nh(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(yh(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),yh(a.route.value),this.activateChildRoutes(e,null,o.children)}else{let a=sa(r.snapshot);o.attachRef=null,o.route=r,o.injector=a,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}}else this.activateChildRoutes(e,null,i)}},Zc=class{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},ws=class{constructor(e,t){this.component=e,this.route=t}};function WT(n,e,t){let i=n._root,r=e?e._root:null;return jo(i,r,t,[i.value])}function jT(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function Ds(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!Cg(n)?n:e.get(n):i}function jo(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=Ss(e);return n.children.forEach(o=>{$T(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>Yo(a,t.getContext(o),r)),r}function $T(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=qT(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Zc(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?jo(n,e,a?a.children:null,i,r):jo(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new ws(a.outlet.component,o))}else o&&Yo(e,a,r),r.canActivateChecks.push(new Zc(i)),s.component?jo(n,null,a?a.children:null,i,r):jo(n,null,t,i,r);return r}function qT(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!wr(n.url,e.url);case"pathParamsOrQueryParamsChange":return!wr(n.url,e.url)||!ci(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Bh(n,e)||!ci(n.queryParams,e.queryParams);case"paramsChange":default:return!Bh(n,e)}}function Yo(n,e,t){let i=Ss(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?Yo(o,e.children.getContext(s),t):Yo(o,null,t):Yo(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new ws(e.outlet.component,r)):t.canDeactivateChecks.push(new ws(null,r)):t.canDeactivateChecks.push(new ws(null,r))}function oa(n){return typeof n=="function"}function XT(n){return typeof n=="boolean"}function YT(n){return n&&oa(n.canLoad)}function ZT(n){return n&&oa(n.canActivate)}function JT(n){return n&&oa(n.canActivateChild)}function KT(n){return n&&oa(n.canDeactivate)}function QT(n){return n&&oa(n.canMatch)}function qy(n){return n instanceof fi||n?.name==="EmptyError"}var Bc=Symbol("INITIAL_VALUE");function As(){return Bn(n=>za(n.map(e=>e.pipe(pi(1),mu(Bc)))).pipe(tt(e=>{for(let t of e)if(t!==!0){if(t===Bc)return Bc;if(t===!1||t instanceof zi)return t}return!0}),kn(e=>e!==Bc),pi(1)))}function eC(n,e){return Nt(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Oe(wt(pe({},t),{guardsResult:!0})):tC(o,i,r,n).pipe(Nt(a=>a&&XT(a)?nC(i,s,n,e):Oe(a)),tt(a=>wt(pe({},t),{guardsResult:a})))})}function tC(n,e,t,i){return Pt(n).pipe(Nt(r=>aC(r.component,r.route,t,e,i)),Kn(r=>r!==!0,!0))}function nC(n,e,t,i){return Pt(e).pipe(es(r=>Qr(rC(r.route.parent,i),iC(r.route,i),oC(n,r.path,t),sC(n,r.route,t))),Kn(r=>r!==!0,!0))}function iC(n,e){return n!==null&&e&&e(new Lh(n)),Oe(!0)}function rC(n,e){return n!==null&&e&&e(new Ph(n)),Oe(!0)}function sC(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Oe(!0);let r=i.map(s=>Ha(()=>{let o=sa(e)??t,a=Ds(s,o),c=ZT(a)?a.canActivate(e,n):_r(o,()=>a(e,n));return Gi(c).pipe(Kn())}));return Oe(r).pipe(As())}function oC(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>jT(o)).filter(o=>o!==null).map(o=>Ha(()=>{let a=o.guards.map(c=>{let l=sa(o.node)??t,u=Ds(c,l),d=JT(u)?u.canActivateChild(i,n):_r(l,()=>u(i,n));return Gi(d).pipe(Kn())});return Oe(a).pipe(As())}));return Oe(s).pipe(As())}function aC(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Oe(!0);let o=s.map(a=>{let c=sa(e)??r,l=Ds(a,c),u=KT(l)?l.canDeactivate(n,e,t,i):_r(c,()=>l(n,e,t,i));return Gi(u).pipe(Kn())});return Oe(o).pipe(As())}function cC(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Oe(!0);let s=r.map(o=>{let a=Ds(o,n),c=YT(a)?a.canLoad(e,t):_r(n,()=>a(e,t));return Gi(c)});return Oe(s).pipe(As(),Xy(i))}function Xy(n){return ou(Bt(e=>{if(Ts(e))throw Wy(n,e)}),tt(e=>e===!0))}function lC(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Oe(!0);let s=r.map(o=>{let a=Ds(o,n),c=QT(a)?a.canMatch(e,t):_r(n,()=>a(e,t));return Gi(c)});return Oe(s).pipe(As(),Xy(i))}var ia=class{constructor(e){this.segmentGroup=e||null}},Jc=class extends Error{constructor(e){super(),this.urlTree=e}};function Ms(n){return Kr(new ia(n))}function uC(n){return Kr(new Ae(4e3,!1))}function dC(n){return Kr(jy(!1,Pn.GuardRejected))}var Hh=class{constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Oe(i);if(r.numberOfChildren>1||!r.children[Be])return uC(e.redirectTo);r=r.children[Be]}}applyRedirectCommands(e,t,i){let r=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t.startsWith("/"))throw new Jc(r);return r}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new zi(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s.startsWith(":")){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new at(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path.startsWith(":")?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new Ae(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},Gh={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function hC(n,e,t,i,r){let s=Qh(n,e,t);return s.matched?(i=zT(e,i),lC(i,e,t,r).pipe(tt(o=>o===!0?s:pe({},Gh)))):Oe(s)}function Qh(n,e,t){if(e.path==="**")return fC(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?pe({},Gh):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||lT)(t,n,e);if(!r)return pe({},Gh);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?pe(pe({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function fC(n){return{matched:!0,parameters:n.length>0?Cy(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function Ey(n,e,t,i){return t.length>0&&gC(n,t,i)?{segmentGroup:new at(e,mC(i,new at(t,n.children))),slicedSegments:[]}:t.length===0&&vC(n,t,i)?{segmentGroup:new at(n.segments,pC(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new at(n.segments,n.children),slicedSegments:t}}function pC(n,e,t,i){let r={};for(let s of t)if(Qc(n,e,s)&&!i[li(s)]){let o=new at([],{});r[li(s)]=o}return pe(pe({},i),r)}function mC(n,e){let t={};t[Be]=e;for(let i of n)if(i.path===""&&li(i)!==Be){let r=new at([],{});t[li(i)]=r}return t}function gC(n,e,t){return t.some(i=>Qc(n,e,i)&&li(i)!==Be)}function vC(n,e,t){return t.some(i=>Qc(n,e,i))}function Qc(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function yC(n,e,t,i){return li(n)!==i&&(i===Be||!Qc(e,t,n))?!1:Qh(e,n,t).matched}function _C(n,e,t){return e.length===0&&!n.children[t]}var Wh=class{};function xC(n,e,t,i,r,s,o="emptyOnly"){return new jh(n,e,t,i,r,o,s).recognize()}var MC=31,jh=class{constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new Hh(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(e){return new Ae(4002,`'${e.segmentGroup}'`)}recognize(){let e=Ey(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(tt(t=>{let i=new ta([],Object.freeze({}),Object.freeze(pe({},this.urlTree.queryParams)),this.urlTree.fragment,{},Be,this.rootComponentType,null,{}),r=new _n(i,t),s=new Yc("",r),o=AT(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),this.inheritParamsAndData(s._root,null),{state:s,tree:o}}))}match(e){return this.processSegmentGroup(this.injector,this.config,e,Be).pipe(Fi(i=>{if(i instanceof Jc)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof ia?this.noMatchError(i):i}))}inheritParamsAndData(e,t){let i=e.value,r=Xh(i,t,this.paramsInheritanceStrategy);i.params=Object.freeze(r.params),i.data=Object.freeze(r.data),e.children.forEach(s=>this.inheritParamsAndData(s,i))}processSegmentGroup(e,t,i,r){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i):this.processSegment(e,t,i,i.segments,r,!0).pipe(tt(s=>s instanceof _n?[s]:[]))}processChildren(e,t,i){let r=[];for(let s of Object.keys(i.children))s==="primary"?r.unshift(s):r.push(s);return Pt(r).pipe(es(s=>{let o=i.children[s],a=HT(t,s);return this.processSegmentGroup(e,a,o,s)}),pu((s,o)=>(s.push(...o),s)),Ui(null),fu(),Nt(s=>{if(s===null)return Ms(i);let o=Yy(s);return SC(o),Oe(o)}))}processSegment(e,t,i,r,s,o){return Pt(t).pipe(es(a=>this.processSegmentAgainstRoute(a._injector??e,t,a,i,r,s,o).pipe(Fi(c=>{if(c instanceof ia)return Oe(null);throw c}))),Kn(a=>!!a),Fi(a=>{if(qy(a))return _C(i,r,s)?Oe(new Wh):Ms(i);throw a}))}processSegmentAgainstRoute(e,t,i,r,s,o,a){return yC(i,r,s,o)?i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o):Ms(r):Ms(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o){let{matched:a,consumedSegments:c,positionalParamSegments:l,remainingSegments:u}=Qh(t,r,s);if(!a)return Ms(t);r.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>MC&&(this.allowRedirects=!1));let d=this.applyRedirects.applyRedirectCommands(c,r.redirectTo,l);return this.applyRedirects.lineralizeSegments(r,d).pipe(Nt(h=>this.processSegment(e,i,t,h.concat(u),o,!1)))}matchSegmentAgainstRoute(e,t,i,r,s){let o=hC(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),o.pipe(Bn(a=>a.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(Bn(({routes:c})=>{let l=i._loadedInjector??e,{consumedSegments:u,remainingSegments:d,parameters:h}=a,m=new ta(u,h,Object.freeze(pe({},this.urlTree.queryParams)),this.urlTree.fragment,wC(i),li(i),i.component??i._loadedComponent??null,i,EC(i)),{segmentGroup:g,slicedSegments:_}=Ey(t,u,d,c);if(_.length===0&&g.hasChildren())return this.processChildren(l,c,g).pipe(tt(f=>f===null?null:new _n(m,f)));if(c.length===0&&_.length===0)return Oe(new _n(m,[]));let p=li(i)===s;return this.processSegment(l,c,g,_,p?Be:s,!0).pipe(tt(f=>new _n(m,f instanceof _n?[f]:[])))}))):Ms(t)))}getChildConfig(e,t,i){return t.children?Oe({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Oe({routes:t._loadedRoutes,injector:t._loadedInjector}):cC(e,t,i,this.urlSerializer).pipe(Nt(r=>r?this.configLoader.loadChildren(e,t).pipe(Bt(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):dC(t))):Oe({routes:[],injector:e})}};function SC(n){n.sort((e,t)=>e.value.outlet===Be?-1:t.value.outlet===Be?1:e.value.outlet.localeCompare(t.value.outlet))}function bC(n){let e=n.value.routeConfig;return e&&e.path===""}function Yy(n){let e=[],t=new Set;for(let i of n){if(!bC(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=Yy(i.children);e.push(new _n(i.value,r))}return e.filter(i=>!t.has(i))}function wC(n){return n.data||{}}function EC(n){return n.resolve||{}}function TC(n,e,t,i,r,s){return Nt(o=>xC(n,e,t,i,o.extractedUrl,r,s).pipe(tt(({state:a,tree:c})=>wt(pe({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function CC(n,e){return Nt(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Oe(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of Zy(c))o.add(l);let a=0;return Pt(o).pipe(es(c=>s.has(c)?AC(c,i,n,e):(c.data=Xh(c,c.parent,n).resolve,Oe(void 0))),Bt(()=>a++),ts(1),Nt(c=>a===o.size?Oe(t):En))})}function Zy(n){let e=n.children.map(t=>Zy(t)).flat();return[n,...e]}function AC(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!Hy(r)&&(s[ra]=r.title),DC(s,n,e,i).pipe(tt(o=>(n._resolvedData=o,n.data=Xh(n,n.parent,t).resolve,null)))}function DC(n,e,t,i){let r=Mh(n);if(r.length===0)return Oe({});let s={};return Pt(r).pipe(Nt(o=>IC(n[o],e,t,i).pipe(Kn(),Bt(a=>{s[o]=a}))),ts(1),hu(s),Fi(o=>qy(o)?En:Kr(o)))}function IC(n,e,t,i){let r=sa(e)??i,s=Ds(n,r),o=s.resolve?s.resolve(e,t):_r(r,()=>s(e,t));return Gi(o)}function _h(n){return Bn(e=>{let t=n(e);return t?Pt(t).pipe(tt(()=>e)):Oe(e)})}var Jy=(()=>{let e=class e{buildTitle(i){let r,s=i.root;for(;s!==void 0;)r=this.getResolvedTitleForRoute(s)??r,s=s.children.find(o=>o.outlet===Be);return r}getResolvedTitleForRoute(i){return i.data[ra]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:()=>ue(RC),providedIn:"root"});let n=e;return n})(),RC=(()=>{let e=class e extends Jy{constructor(i){super(),this.title=i}updateTitle(i){let r=this.buildTitle(i);r!==void 0&&this.title.setTitle(r)}};e.\u0275fac=function(r){return new(r||e)(it(xy))},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),ef=new nt("",{providedIn:"root",factory:()=>({})}),tf=new nt(""),PC=(()=>{let e=class e{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=ue(oh)}loadComponent(i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Oe(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=Gi(i.loadComponent()).pipe(tt(Ky),Bt(o=>{this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=o}),po(()=>{this.componentLoaders.delete(i)})),s=new Jr(r,()=>new nn).pipe(Zr());return this.componentLoaders.set(i,s),s}loadChildren(i,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Oe({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let o=NC(r,this.compiler,i,this.onLoadEndListener).pipe(po(()=>{this.childrenLoaders.delete(r)})),a=new Jr(o,()=>new nn).pipe(Zr());return this.childrenLoaders.set(r,a),a}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function NC(n,e,t,i){return Gi(n.loadChildren()).pipe(tt(Ky),Nt(r=>r instanceof Io||Array.isArray(r)?Oe(r):Pt(e.compileModuleAsync(r))),tt(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(tf,[],{optional:!0,self:!0}).flat()),{routes:o.map(Kh),injector:s}}))}function LC(n){return n&&typeof n=="object"&&"default"in n}function Ky(n){return LC(n)?n.default:n}var nf=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:()=>ue(OC),providedIn:"root"});let n=e;return n})(),OC=(()=>{let e=class e{shouldProcessUrl(i){return!0}extract(i){return i}merge(i,r){return i}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),FC=new nt("");var UC=(()=>{let e=class e{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new nn,this.transitionAbortSubject=new nn,this.configLoader=ue(PC),this.environmentInjector=ue(Dn),this.urlSerializer=ue(qh),this.rootContexts=ue(Kc),this.location=ue(Vo),this.inputBindingEnabled=ue(Jh,{optional:!0})!==null,this.titleStrategy=ue(Jy),this.options=ue(ef,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=ue(nf),this.createViewTransition=ue(FC,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>Oe(void 0),this.rootComponentType=null;let i=s=>this.events.next(new Ih(s)),r=s=>this.events.next(new Rh(s));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=i}complete(){this.transitions?.complete()}handleNavigationRequest(i){let r=++this.navigationId;this.transitions?.next(wt(pe(pe({},this.transitions.value),i),{id:r}))}setupNavigations(i,r,s){return this.transitions=new jt({id:0,currentUrlTree:r,currentRawUrl:r,extractedUrl:this.urlHandlingStrategy.extract(r),urlAfterRedirects:this.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:Xo,restoredState:null,currentSnapshot:s.snapshot,targetSnapshot:null,currentRouterState:s,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(kn(o=>o.id!==0),tt(o=>wt(pe({},o),{extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),Bn(o=>{this.currentTransition=o;let a=!1,c=!1;return Oe(o).pipe(Bt(l=>{this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?wt(pe({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),Bn(l=>{let u=!i.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=l.extras.onSameUrlNavigation??i.onSameUrlNavigation;if(!u&&d!=="reload"){let h="";return this.events.next(new Tr(l.id,this.urlSerializer.serialize(l.rawUrl),h,Eh.IgnoredSameUrlNavigation)),l.resolve(null),En}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return Oe(l).pipe(Bn(h=>{let m=this.transitions?.getValue();return this.events.next(new Jo(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),m!==this.transitions?.getValue()?En:Promise.resolve(h)}),TC(this.environmentInjector,this.configLoader,this.rootComponentType,i.config,this.urlSerializer,this.paramsInheritanceStrategy),Bt(h=>{o.targetSnapshot=h.targetSnapshot,o.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation=wt(pe({},this.currentNavigation),{finalUrl:h.urlAfterRedirects});let m=new $c(h.id,this.urlSerializer.serialize(h.extractedUrl),this.urlSerializer.serialize(h.urlAfterRedirects),h.targetSnapshot);this.events.next(m)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:h,extractedUrl:m,source:g,restoredState:_,extras:p}=l,f=new Jo(h,this.urlSerializer.serialize(m),g,_);this.events.next(f);let E=Vy(this.rootComponentType).snapshot;return this.currentTransition=o=wt(pe({},l),{targetSnapshot:E,urlAfterRedirects:m,extras:wt(pe({},p),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=m,Oe(o)}else{let h="";return this.events.next(new Tr(l.id,this.urlSerializer.serialize(l.extractedUrl),h,Eh.IgnoredByUrlHandlingStrategy)),l.resolve(null),En}}),Bt(l=>{let u=new Th(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),tt(l=>(this.currentTransition=o=wt(pe({},l),{guards:WT(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),o)),eC(this.environmentInjector,l=>this.events.next(l)),Bt(l=>{if(o.guardsResult=l.guardsResult,Ts(l.guardsResult))throw Wy(this.urlSerializer,l.guardsResult);let u=new Ch(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(u)}),kn(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",Pn.GuardRejected),!1)),_h(l=>{if(l.guards.canActivateChecks.length)return Oe(l).pipe(Bt(u=>{let d=new Ah(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}),Bn(u=>{let d=!1;return Oe(u).pipe(CC(this.paramsInheritanceStrategy,this.environmentInjector),Bt({next:()=>d=!0,complete:()=>{d||this.cancelNavigationTransition(u,"",Pn.NoDataFromResolver)}}))}),Bt(u=>{let d=new Dh(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}))}),_h(l=>{let u=d=>{let h=[];d.routeConfig?.loadComponent&&!d.routeConfig._loadedComponent&&h.push(this.configLoader.loadComponent(d.routeConfig).pipe(Bt(m=>{d.component=m}),tt(()=>{})));for(let m of d.children)h.push(...u(m));return h};return za(u(l.targetSnapshot.root)).pipe(Ui(null),pi(1))}),_h(()=>this.afterPreactivation()),Bn(()=>{let{currentSnapshot:l,targetSnapshot:u}=o,d=this.createViewTransition?.(this.environmentInjector,l.root,u.root);return d?Pt(d).pipe(tt(()=>o)):Oe(o)}),tt(l=>{let u=FT(i.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=o=wt(pe({},l),{targetRouterState:u}),this.currentNavigation.targetRouterState=u,o}),Bt(()=>{this.events.next(new Qo)}),GT(this.rootContexts,i.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),pi(1),Bt({next:l=>{a=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Er(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{a=!0}}),gu(this.transitionAbortSubject.pipe(Bt(l=>{throw l}))),po(()=>{!a&&!c&&this.cancelNavigationTransition(o,"",Pn.SupersededByNewNavigation),this.currentTransition?.id===o.id&&(this.currentNavigation=null,this.currentTransition=null)}),Fi(l=>{if(c=!0,$y(l))this.events.next(new Hi(o.id,this.urlSerializer.serialize(o.extractedUrl),l.message,l.cancellationCode)),BT(l)?this.events.next(new ea(l.url)):o.resolve(!1);else{this.events.next(new Ko(o.id,this.urlSerializer.serialize(o.extractedUrl),l,o.targetSnapshot??void 0));try{o.resolve(i.errorHandler(l))}catch(u){this.options.resolveNavigationPromiseOnError?o.resolve(!1):o.reject(u)}}return En}))}))}cancelNavigationTransition(i,r,s){let o=new Hi(i.id,this.urlSerializer.serialize(i.extractedUrl),r,s);this.events.next(o),i.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function kC(n){return n!==Xo}var BC=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:()=>ue(VC),providedIn:"root"});let n=e;return n})(),$h=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},VC=(()=>{let e=class e extends $h{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=zd(e)))(s||e)}})(),e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Qy=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:()=>ue(zC),providedIn:"root"});let n=e;return n})(),zC=(()=>{let e=class e extends Qy{constructor(){super(...arguments),this.location=ue(Vo),this.urlSerializer=ue(qh),this.options=ue(ef,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=ue(nf),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new zi,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=Vy(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(i){return this.location.subscribe(r=>{r.type==="popstate"&&i(r.url,r.state)})}handleRouterEvent(i,r){if(i instanceof Jo)this.stateMemento=this.createStateMemento();else if(i instanceof Tr)this.rawUrlTree=r.initialUrl;else if(i instanceof $c){if(this.urlUpdateStrategy==="eager"&&!r.extras.skipLocationChange){let s=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl);this.setBrowserUrl(s,r)}}else i instanceof Qo?(this.currentUrlTree=r.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl),this.routerState=r.targetRouterState,this.urlUpdateStrategy==="deferred"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,r))):i instanceof Hi&&(i.code===Pn.GuardRejected||i.code===Pn.NoDataFromResolver)?this.restoreHistory(r):i instanceof Ko?this.restoreHistory(r,!0):i instanceof Er&&(this.lastSuccessfulId=i.id,this.currentPageId=this.browserPageId)}setBrowserUrl(i,r){let s=this.urlSerializer.serialize(i);if(this.location.isCurrentPathEqualTo(s)||r.extras.replaceUrl){let o=this.browserPageId,a=pe(pe({},r.extras.state),this.generateNgRouterState(r.id,o));this.location.replaceState(s,"",a)}else{let o=pe(pe({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(s,"",o)}}restoreHistory(i,r=!1){if(this.canceledNavigationResolution==="computed"){let s=this.browserPageId,o=this.currentPageId-s;o!==0?this.location.historyGo(o):this.currentUrlTree===i.finalUrl&&o===0&&(this.resetState(i),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(i),this.resetUrlToCurrentUrlTree())}resetState(i){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,i.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(i,r){return this.canceledNavigationResolution==="computed"?{navigationId:i,\u0275routerPageId:r}:{navigationId:i}}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=zd(e)))(s||e)}})(),e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),$o=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}($o||{});function HC(n,e){n.events.pipe(kn(t=>t instanceof Er||t instanceof Hi||t instanceof Ko||t instanceof Tr),tt(t=>t instanceof Er||t instanceof Tr?$o.COMPLETE:(t instanceof Hi?t.code===Pn.Redirect||t.code===Pn.SupersededByNewNavigation:!1)?$o.REDIRECTING:$o.FAILED),kn(t=>t!==$o.REDIRECTING),pi(1)).subscribe(()=>{e()})}function GC(n){throw n}var WC={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},jC={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},e0=(()=>{let e=class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=ue(Pc),this.stateManager=ue(Qy),this.options=ue(ef,{optional:!0})||{},this.pendingTasks=ue(Dc),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=ue(UC),this.urlSerializer=ue(qh),this.location=ue(Vo),this.urlHandlingStrategy=ue(nf),this._events=new nn,this.errorHandler=this.options.errorHandler||GC,this.navigated=!1,this.routeReuseStrategy=ue(BC),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=ue(tf,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!ue(Jh,{optional:!0}),this.eventsSubscription=new Rt,this.isNgZoneEnabled=ue(Dt)instanceof Dt&&Dt.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:i=>{this.console.warn(i)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let i=this.navigationTransitions.events.subscribe(r=>{try{let s=this.navigationTransitions.currentTransition,o=this.navigationTransitions.currentNavigation;if(s!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof Hi&&r.code!==Pn.Redirect&&r.code!==Pn.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof Er)this.navigated=!0;else if(r instanceof ea){let a=this.urlHandlingStrategy.merge(r.url,s.currentRawUrl),c={info:s.extras.info,skipLocationChange:s.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||kC(s.source)};this.scheduleNavigation(a,Xo,null,c,{resolve:s.resolve,reject:s.reject,promise:s.promise})}}qC(r)&&this._events.next(r)}catch(s){this.navigationTransitions.transitionAbortSubject.next(s)}});this.eventsSubscription.add(i)}resetRootComponentType(i){this.routerState.root.component=i,this.navigationTransitions.rootComponentType=i}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Xo,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((i,r)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(i,"popstate",r)},0)})}navigateToSyncWithBrowser(i,r,s){let o={replaceUrl:!0},a=s?.navigationId?s:null;if(s){let l=pe({},s);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(i);this.scheduleNavigation(c,r,a,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(i){this.config=i.map(Kh),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(i,r={}){let{relativeTo:s,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:l}=r,u=l?this.currentUrlTree.fragment:a,d=null;switch(c){case"merge":d=pe(pe({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let h;try{let m=s?s.snapshot:this.routerState.snapshot.root;h=Fy(m)}catch{(typeof i[0]!="string"||!i[0].startsWith("/"))&&(i=[]),h=this.currentUrlTree.root}return Uy(h,i,d,u??null)}navigateByUrl(i,r={skipLocationChange:!1}){let s=Ts(i)?i:this.parseUrl(i),o=this.urlHandlingStrategy.merge(s,this.rawUrlTree);return this.scheduleNavigation(o,Xo,null,r)}navigate(i,r={skipLocationChange:!1}){return $C(i),this.navigateByUrl(this.createUrlTree(i,r),r)}serializeUrl(i){return this.urlSerializer.serialize(i)}parseUrl(i){try{return this.urlSerializer.parse(i)}catch{return this.urlSerializer.parse("/")}}isActive(i,r){let s;if(r===!0?s=pe({},WC):r===!1?s=pe({},jC):s=r,Ts(i))return My(this.currentUrlTree,i,s);let o=this.parseUrl(i);return My(this.currentUrlTree,o,s)}removeEmptyProps(i){return Object.entries(i).reduce((r,[s,o])=>(o!=null&&(r[s]=o),r),{})}scheduleNavigation(i,r,s,o,a){if(this.disposed)return Promise.resolve(!1);let c,l,u;a?(c=a.resolve,l=a.reject,u=a.promise):u=new Promise((h,m)=>{c=h,l=m});let d=this.pendingTasks.add();return HC(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:s,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:i,extras:o,resolve:c,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(h=>Promise.reject(h))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function $C(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new Ae(4008,!1)}function qC(n){return!(n instanceof Qo)&&!(n instanceof ea)}var XC=new nt("");function t0(n,...e){return _c([{provide:tf,multi:!0,useValue:n},[],{provide:Cs,useFactory:YC,deps:[e0]},{provide:sh,multi:!0,useFactory:ZC},e.map(t=>t.\u0275providers)])}function YC(n){return n.routerState.root}function ZC(){let n=ue(Fo);return e=>{let t=n.get(Bo);if(e!==t.components[0])return;let i=n.get(e0),r=n.get(JC);n.get(KC)===1&&i.initialNavigation(),n.get(QC,null,qe.Optional)?.setUpPreloading(),n.get(XC,null,qe.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var JC=new nt("",{factory:()=>new nn}),KC=new nt("",{providedIn:"root",factory:()=>1});var QC=new nt("");var n0=[];var i0={providers:[t0(n0)]};var hn={home:{banner:{title:"Habemus blog",subTitle:"Bienvenidos a mi blog, luego de un buen tiempo al fin se pudo terminar la pagina, aqui podras encontrar proyectos personales, informacion de mis videos y encontrar mi contacto :D",image:"https://pbs.twimg.com/media/Ftms4WQaAAARh7z.jpg"}},blog:[{banner:{title:"Entrada Test",subTitle:"",image:"https://pbs.twimg.com/media/Ftms4WQaAAARh7z.jpg"}},{banner:{title:"Entrada Test 2",subTitle:"",image:"https://pbs.twimg.com/media/Ftms4WQaAAARh7z.jpg"}},{banner:{title:"Entrada Test 3",subTitle:"Placeholder",image:"https://i.ytimg.com/vi/w2EEzogHcT4/maxresdefault.jpg"}}],projects:[{banner:{title:"Proyecto Test",subTitle:"",image:"https://pbs.twimg.com/media/Ftms4WQaAAARh7z.jpg"}},{banner:{title:"Proyecto Test 2",subTitle:"",image:"https://pbs.twimg.com/media/Ftms4WQaAAARh7z.jpg"}},{banner:{title:"Proyecto Test 3",subTitle:"",image:"https://pbs.twimg.com/media/Ftms4WQaAAARh7z.jpg"}}],habilities:{},contact:{}};var el=(()=>{let e=class e{constructor(){this.dataSubject=new nn}sendData(i){this.dataSubject.next(i)}getData(){return this.dataSubject.asObservable()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var s0=(()=>{let e=class e{constructor(i){this.BannerService=i}onClick(i){this.BannerService.sendData(i)}};e.\u0275fac=function(r){return new(r||e)(xr(el))},e.\u0275cmp=Vt({type:e,selectors:[["BarMenu"]],standalone:!0,features:[zt],decls:21,vars:0,consts:[[2,"background-color","rgb(226, 76, 76)"],[1,"container-fluid"],[1,"row"],[1,"col",2,"align-items","center","justify-content","center"],["src","../../assets/Icon.png","alt","","id","icon"],["id","menu",1,"col",3,"click"],["id","menu",1,"col"],[1,"col"]],template:function(r,s){r&1&&(_e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),st(4,"img",4),ve(),_e(5,"div",5),Mr("click",function(){return s.onClick("home")}),_e(6,"p"),ot(7,"Inicio"),ve()(),_e(8,"div",5),Mr("click",function(){return s.onClick("blog")}),_e(9,"p"),ot(10,"Blog"),ve()(),_e(11,"div",6)(12,"p"),ot(13,"Proyectos"),ve()(),_e(14,"div",6)(15,"p"),ot(16,"Habilidades"),ve()(),_e(17,"div",6)(18,"p"),ot(19,"Contacto"),ve()(),st(20,"div",7),ve()()())},styles:["p[_ngcontent-%COMP%]{color:#fff;font-family:Franklin Gothic;text-align:center;padding-top:25px}#icon[_ngcontent-%COMP%]{width:75px;padding:5%;border-radius:50%;display:block;margin-left:auto;margin-right:auto}#menu[_ngcontent-%COMP%]{background-color:#e24c4c;transition:background-color .2s}#menu[_ngcontent-%COMP%]:hover{background-color:#c33f3f;transition:background-color .2s;cursor:pointer}"]});let n=e;return n})();var gp="161";var tA=0,o0=1,nA=2;var R_=1,iA=2,Ci=3,er=0,gn=1,Di=2,Ji=0,Zs=1,a0=2,c0=3,l0=4,rA=5,Pr=100,sA=101,oA=102,u0=103,d0=104,aA=200,cA=201,lA=202,uA=203,Of=204,Ff=205,dA=206,hA=207,fA=208,pA=209,mA=210,gA=211,vA=212,yA=213,_A=214,xA=0,MA=1,SA=2,bl=3,bA=4,wA=5,EA=6,TA=7,P_=0,CA=1,AA=2,Ki=0,DA=1,IA=2,RA=3,PA=4,NA=5,LA=6;var h0=300,eo=301,to=302,Uf=303,kf=304,Wl=306,Bf=1e3,Xn=1001,Vf=1002,on=1003,f0=1004;var aa=1005;var pn=1006,rf=1007;var Lr=1008;var Qi=1009,OA=1010,FA=1011,vp=1012,N_=1013,Zi=1014,Ii=1015,pa=1016,L_=1017,O_=1018,Or=1020,UA=1021,Yn=1023,kA=1024,BA=1025,Fr=1026,no=1027,VA=1028,F_=1029,zA=1030,U_=1031,k_=1033,sf=33776,of=33777,af=33778,cf=33779,p0=35840,m0=35841,g0=35842,v0=35843,B_=36196,y0=37492,_0=37496,x0=37808,M0=37809,S0=37810,b0=37811,w0=37812,E0=37813,T0=37814,C0=37815,A0=37816,D0=37817,I0=37818,R0=37819,P0=37820,N0=37821,lf=36492,L0=36494,O0=36495,HA=36283,F0=36284,U0=36285,k0=36286;var wl=2300,El=2301,uf=2302,B0=2400,V0=2401,z0=2402;var V_=3e3,Ur=3001,GA=3200,WA=3201,jA=0,$A=1,On="",Xt="srgb",Ni="srgb-linear",yp="display-p3",jl="display-p3-linear",Tl="linear",xt="srgb",Cl="rec709",Al="p3";var Is=7680;var H0=519,qA=512,XA=513,YA=514,z_=515,ZA=516,JA=517,KA=518,QA=519,G0=35044;var W0="300 es",zf=1035,Ri=2e3,Dl=2001,tr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var df=Math.PI/180,Hf=180/Math.PI;function ya(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function mn(n,e,t){return Math.max(e,Math.min(t,n))}function eD(n,e){return(n%e+e)%e}function hf(n,e,t){return(1-t)*n+t*e}function j0(n){return(n&n-1)===0&&n!==0}function Gf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ca(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function fn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var lt=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xe=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],m=i[5],g=i[8],_=r[0],p=r[3],f=r[6],E=r[1],S=r[4],w=r[7],I=r[2],A=r[5],C=r[8];return s[0]=o*_+a*E+c*I,s[3]=o*p+a*S+c*A,s[6]=o*f+a*w+c*C,s[1]=l*_+u*E+d*I,s[4]=l*p+u*S+d*A,s[7]=l*f+u*w+d*C,s[2]=h*_+m*E+g*I,s[5]=h*p+m*S+g*A,s[8]=h*f+m*w+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,m=l*s-o*c,g=t*d+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(r*l-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ff.makeScale(e,t)),this}rotate(e){return this.premultiply(ff.makeRotation(-e)),this}translate(e,t){return this.premultiply(ff.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ff=new Xe;function H_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Il(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tD(){let n=Il("canvas");return n.style.display="block",n}var $0={};function Js(n){n in $0||($0[n]=!0,console.warn(n))}var q0=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),X0=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),tl={[Ni]:{transfer:Tl,primaries:Cl,toReference:n=>n,fromReference:n=>n},[Xt]:{transfer:xt,primaries:Cl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[jl]:{transfer:Tl,primaries:Al,toReference:n=>n.applyMatrix3(X0),fromReference:n=>n.applyMatrix3(q0)},[yp]:{transfer:xt,primaries:Al,toReference:n=>n.convertSRGBToLinear().applyMatrix3(X0),fromReference:n=>n.applyMatrix3(q0).convertLinearToSRGB()}},nD=new Set([Ni,jl]),pt={enabled:!0,_workingColorSpace:Ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!nD.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=tl[e].toReference,r=tl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return tl[n].primaries},getTransfer:function(n){return n===On?Tl:tl[n].transfer}};function Ks(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function pf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Rs,Rl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rs===void 0&&(Rs=Il("canvas")),Rs.width=e.width,Rs.height=e.height;let i=Rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Il("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ks(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ks(t[i]/255)*255):t[i]=Ks(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},iD=0,Pl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iD++}),this.uuid=ya(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(mf(r[o].image)):s.push(mf(r[o]))}else s=mf(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function mf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Rl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var rD=0,Gr=(()=>{class n extends tr{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Xn,s=Xn,o=pn,a=Lr,c=Yn,l=Qi,u=n.DEFAULT_ANISOTROPY,d=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rD++}),this.uuid=ya(),this.name="",this.source=new Pl(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Ur?Xt:On),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==h0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bf:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case Vf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bf:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case Vf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Xt?Ur:V_}set encoding(t){Js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ur?Xt:On}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=h0,n.DEFAULT_ANISOTROPY=1,n})(),Yt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],m=c[5],g=c[9],_=c[2],p=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,w=(m+1)/2,I=(f+1)/2,A=(u+h)/4,C=(d+_)/4,G=(g+p)/4;return S>w&&S>I?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=A/i,s=C/i):w>I?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=A/r,s=G/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=C/s,r=G/s),this.set(i,r,s,t),this}let E=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(d-_)/E,this.z=(h-u)/E,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wf=class extends tr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);let r={width:e,height:t,depth:1};i.encoding!==void 0&&(Js("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ur?Xt:On),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Gr(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Pl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Li=class extends Wf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Nl=class extends Gr{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jf=class extends Gr{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nr=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],h=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==h||l!==m||u!==g){let p=1-a,f=c*h+l*m+u*g+d*_,E=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){let I=Math.sqrt(S),A=Math.atan2(I,f*E);p=Math.sin(p*A)/I,a=Math.sin(a*A)/I}let w=a*E;if(c=c*p+h*w,l=l*p+m*w,u=u*p+g*w,d=d*p+_*w,p===1-a){let I=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=I,l*=I,u*=I,d*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*m-l*h,e[t+1]=c*g+u*h+l*d-a*m,e[t+2]=l*g+u*m+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),h=c(i/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"YZX":this._x=h*u*d+l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d-h*m*g;break;case"XZY":this._x=h*u*d-l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>d){let m=2*Math.sqrt(1+i-a-d);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>d){let m=2*Math.sqrt(1+a-i-d);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{let m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Y0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Y0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gf.copy(this).projectOnVector(e),this.sub(gf)}reflect(e){return this.sub(gf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gf=new F,Y0=new nr,kr=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(s,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nl.copy(i.boundingBox)),nl.applyMatrix4(e.matrixWorld),this.union(nl)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(la),il.subVectors(this.max,la),Ps.subVectors(e.a,la),Ns.subVectors(e.b,la),Ls.subVectors(e.c,la),Wi.subVectors(Ns,Ps),ji.subVectors(Ls,Ns),Cr.subVectors(Ps,Ls);let t=[0,-Wi.z,Wi.y,0,-ji.z,ji.y,0,-Cr.z,Cr.y,Wi.z,0,-Wi.x,ji.z,0,-ji.x,Cr.z,0,-Cr.x,-Wi.y,Wi.x,0,-ji.y,ji.x,0,-Cr.y,Cr.x,0];return!vf(t,Ps,Ns,Ls,il)||(t=[1,0,0,0,1,0,0,0,1],!vf(t,Ps,Ns,Ls,il))?!1:(rl.crossVectors(Wi,ji),t=[rl.x,rl.y,rl.z],vf(t,Ps,Ns,Ls,il))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Si=[new F,new F,new F,new F,new F,new F,new F,new F],jn=new F,nl=new kr,Ps=new F,Ns=new F,Ls=new F,Wi=new F,ji=new F,Cr=new F,la=new F,il=new F,rl=new F,Ar=new F;function vf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ar.fromArray(n,s);let a=r.x*Math.abs(Ar.x)+r.y*Math.abs(Ar.y)+r.z*Math.abs(Ar.z),c=e.dot(Ar),l=t.dot(Ar),u=i.dot(Ar);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var sD=new kr,ua=new F,yf=new F,ma=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):sD.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ua.subVectors(e,this.center);let t=ua.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ua,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ua.copy(e.center).add(yf)),this.expandByPoint(ua.copy(e.center).sub(yf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},bi=new F,_f=new F,sl=new F,$i=new F,xf=new F,ol=new F,Mf=new F,$f=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){_f.copy(e).add(t).multiplyScalar(.5),sl.copy(t).sub(e).normalize(),$i.copy(this.origin).sub(_f);let s=e.distanceTo(t)*.5,o=-this.direction.dot(sl),a=$i.dot(this.direction),c=-$i.dot(sl),l=$i.lengthSq(),u=Math.abs(1-o*o),d,h,m,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){let _=1/u;d*=_,h*=_,m=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(_f).addScaledVector(sl,h),m}intersectSphere(e,t){bi.subVectors(e.center,this.origin);let i=bi.dot(this.direction),r=bi.dot(bi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,i,r,s){xf.subVectors(t,e),ol.subVectors(i,e),Mf.crossVectors(xf,ol);let o=this.direction.dot(Mf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,e);let c=a*this.direction.dot(ol.crossVectors($i,ol));if(c<0)return null;let l=a*this.direction.dot(xf.cross($i));if(l<0||c+l>o)return null;let u=-a*$i.dot(Mf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qt=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,h,m,g,_,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,h,m,g,_,p)}set(e,t,i,r,s,o,a,c,l,u,d,h,m,g,_,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Os.setFromMatrixColumn(e,0).length(),s=1/Os.setFromMatrixColumn(e,1).length(),o=1/Os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,m=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*u,m=c*d,g=l*u,_=l*d;t[0]=h+_*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*u,m=c*d,g=l*u,_=l*d;t[0]=h-_*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*u,m=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=g*l-m,t[8]=h*l+_,t[1]=c*d,t[5]=_*l+h,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-h*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*d+g,t[10]=h-_*d}else if(e.order==="XZY"){let h=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+_,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oD,e,aD)}lookAt(e,t,i){let r=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),qi.crossVectors(i,xn),qi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),qi.crossVectors(i,xn)),qi.normalize(),al.crossVectors(xn,qi),r[0]=qi.x,r[4]=al.x,r[8]=xn.x,r[1]=qi.y,r[5]=al.y,r[9]=xn.y,r[2]=qi.z,r[6]=al.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],m=i[13],g=i[2],_=i[6],p=i[10],f=i[14],E=i[3],S=i[7],w=i[11],I=i[15],A=r[0],C=r[4],G=r[8],ie=r[12],y=r[1],T=r[5],H=r[9],K=r[13],D=r[2],V=r[6],k=r[10],$=r[14],z=r[3],W=r[7],j=r[11],Q=r[15];return s[0]=o*A+a*y+c*D+l*z,s[4]=o*C+a*T+c*V+l*W,s[8]=o*G+a*H+c*k+l*j,s[12]=o*ie+a*K+c*$+l*Q,s[1]=u*A+d*y+h*D+m*z,s[5]=u*C+d*T+h*V+m*W,s[9]=u*G+d*H+h*k+m*j,s[13]=u*ie+d*K+h*$+m*Q,s[2]=g*A+_*y+p*D+f*z,s[6]=g*C+_*T+p*V+f*W,s[10]=g*G+_*H+p*k+f*j,s[14]=g*ie+_*K+p*$+f*Q,s[3]=E*A+S*y+w*D+I*z,s[7]=E*C+S*T+w*V+I*W,s[11]=E*G+S*H+w*k+I*j,s[15]=E*ie+S*K+w*$+I*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15];return g*(+s*c*d-r*l*d-s*a*h+i*l*h+r*a*m-i*c*m)+_*(+t*c*m-t*l*h+s*o*h-r*o*m+r*l*u-s*c*u)+p*(+t*l*d-t*a*m-s*o*d+i*o*m+s*a*u-i*l*u)+f*(-r*a*u-t*c*d+t*a*h+r*o*d-i*o*h+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],E=d*p*l-_*h*l+_*c*m-a*p*m-d*c*f+a*h*f,S=g*h*l-u*p*l-g*c*m+o*p*m+u*c*f-o*h*f,w=u*_*l-g*d*l+g*a*m-o*_*m-u*a*f+o*d*f,I=g*d*c-u*_*c-g*a*h+o*_*h+u*a*p-o*d*p,A=t*E+i*S+r*w+s*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return e[0]=E*C,e[1]=(_*h*s-d*p*s-_*r*m+i*p*m+d*r*f-i*h*f)*C,e[2]=(a*p*s-_*c*s+_*r*l-i*p*l-a*r*f+i*c*f)*C,e[3]=(d*c*s-a*h*s-d*r*l+i*h*l+a*r*m-i*c*m)*C,e[4]=S*C,e[5]=(u*p*s-g*h*s+g*r*m-t*p*m-u*r*f+t*h*f)*C,e[6]=(g*c*s-o*p*s-g*r*l+t*p*l+o*r*f-t*c*f)*C,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*m+t*c*m)*C,e[8]=w*C,e[9]=(g*d*s-u*_*s-g*i*m+t*_*m+u*i*f-t*d*f)*C,e[10]=(o*_*s-g*a*s+g*i*l-t*_*l-o*i*f+t*a*f)*C,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*m-t*a*m)*C,e[12]=I*C,e[13]=(u*_*r-g*d*r+g*i*h-t*_*h-u*i*p+t*d*p)*C,e[14]=(g*a*r-o*_*r-g*i*c+t*_*c+o*i*p-t*a*p)*C,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*h+t*a*h)*C,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,m=s*u,g=s*d,_=o*u,p=o*d,f=a*d,E=c*l,S=c*u,w=c*d,I=i.x,A=i.y,C=i.z;return r[0]=(1-(_+f))*I,r[1]=(m+w)*I,r[2]=(g-S)*I,r[3]=0,r[4]=(m-w)*A,r[5]=(1-(h+f))*A,r[6]=(p+E)*A,r[7]=0,r[8]=(g+S)*C,r[9]=(p-E)*C,r[10]=(1-(h+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Os.set(r[0],r[1],r[2]).length(),o=Os.set(r[4],r[5],r[6]).length(),a=Os.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$n.copy(this);let l=1/s,u=1/o,d=1/a;return $n.elements[0]*=l,$n.elements[1]*=l,$n.elements[2]*=l,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=d,$n.elements[9]*=d,$n.elements[10]*=d,t.setFromRotationMatrix($n),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ri){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r),m,g;if(a===Ri)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Dl)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ri){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*l,m=(i+r)*u,g,_;if(a===Ri)g=(o+s)*d,_=-2*d;else if(a===Dl)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Os=new F,$n=new Qt,oD=new F(0,0,0),aD=new F(1,1,1),qi=new F,al=new F,xn=new F,Z0=new Qt,J0=new nr,cD=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],h=s[2],m=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(mn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(mn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-mn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Z0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Z0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return J0.setFromEuler(this),this.setFromQuaternion(J0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Ll=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},lD=0,K0=new F,Fs=new nr,wi=new Qt,cl=new F,da=new F,uD=new F,dD=new nr,Q0=new F(1,0,0),e_=new F(0,1,0),t_=new F(0,0,1),hD={type:"added"},fD={type:"removed"},ao=(()=>{class n extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lD++}),this.uuid=ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,i=new cD,r=new nr,s=new F(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Xe}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Fs.setFromAxisAngle(t,i),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(t,i){return Fs.setFromAxisAngle(t,i),this.quaternion.premultiply(Fs),this}rotateX(t){return this.rotateOnAxis(Q0,t)}rotateY(t){return this.rotateOnAxis(e_,t)}rotateZ(t){return this.rotateOnAxis(t_,t)}translateOnAxis(t,i){return K0.copy(t).applyQuaternion(this.quaternion),this.position.add(K0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Q0,t)}translateY(t){return this.translateOnAxis(e_,t)}translateZ(t){return this.translateOnAxis(t_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?cl.copy(t):cl.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(da,cl,this.up):wi.lookAt(cl,da,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(wi),this.quaternion.premultiply(Fs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(hD)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(fD)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(wi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,t,uD),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,dD,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++){let o=i[r];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++){let c=s[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let h=l[u];o(t.shapes,h)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),h=a(t.shapes),m=a(t.skeletons),g=a(t.animations),_=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),h.length>0&&(r.shapes=h),m.length>0&&(r.skeletons=m),g.length>0&&(r.animations=g),_.length>0&&(r.nodes=_)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new F(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),qn=new F,Ei=new F,Sf=new F,Ti=new F,Us=new F,ks=new F,n_=new F,bf=new F,wf=new F,Ef=new F,$s=class n{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qn.subVectors(e,t),r.cross(qn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){qn.subVectors(r,t),Ei.subVectors(i,t),Sf.subVectors(e,t);let o=qn.dot(qn),a=qn.dot(Ei),c=qn.dot(Sf),l=Ei.dot(Ei),u=Ei.dot(Sf),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let h=1/d,m=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ti.x),c.addScaledVector(o,Ti.y),c.addScaledVector(a,Ti.z),c)}static isFrontFacing(e,t,i,r){return qn.subVectors(i,t),Ei.subVectors(e,t),qn.cross(Ei).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),qn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Us.subVectors(r,i),ks.subVectors(s,i),bf.subVectors(e,i);let c=Us.dot(bf),l=ks.dot(bf);if(c<=0&&l<=0)return t.copy(i);wf.subVectors(e,r);let u=Us.dot(wf),d=ks.dot(wf);if(u>=0&&d<=u)return t.copy(r);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Us,o);Ef.subVectors(e,s);let m=Us.dot(Ef),g=ks.dot(Ef);if(g>=0&&m<=g)return t.copy(s);let _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ks,a);let p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return n_.subVectors(s,r),a=(d-u)/(d-u+(m-g)),t.copy(r).addScaledVector(n_,a);let f=1/(p+_+h);return o=_*f,a=h*f,t.copy(i).addScaledVector(Us,o).addScaledVector(ks,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},G_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},ll={h:0,s:0,l:0};function Tf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ct=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,pt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=pt.workingColorSpace){if(e=eD(e,1),t=mn(t,0,1),i=mn(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Tf(o,s,e+1/3),this.g=Tf(o,s,e),this.b=Tf(o,s,e-1/3)}return pt.toWorkingColorSpace(this,r),this}setStyle(e,t=Xt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){let i=G_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}copyLinearToSRGB(e){return this.r=pf(e.r),this.g=pf(e.g),this.b=pf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return pt.fromWorkingColorSpace(Kt.copy(this),e),Math.round(mn(Kt.r*255,0,255))*65536+Math.round(mn(Kt.g*255,0,255))*256+Math.round(mn(Kt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(Kt.copy(this),t);let i=Kt.r,r=Kt.g,s=Kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Xt){pt.fromWorkingColorSpace(Kt.copy(this),e);let t=Kt.r,i=Kt.g,r=Kt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(ll);let i=hf(Xi.h,ll.h,t),r=hf(Xi.s,ll.s,t),s=hf(Xi.l,ll.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new ct;ct.NAMES=G_;var pD=0,io=class extends tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pD++}),this.uuid=ya(),this.name="",this.type="Material",this.blending=Zs,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Of,this.blendDst=Ff,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=bl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=H0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(i.blending=this.blending),this.side!==er&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Of&&(i.blendSrc=this.blendSrc),this.blendDst!==Ff&&(i.blendDst=this.blendDst),this.blendEquation!==Pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==H0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ro=class extends io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=P_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var It=new F,ul=new lt,Fn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=G0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Js("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ul.fromBufferAttribute(this,t),ul.applyMatrix3(e),this.setXY(t,ul.x,ul.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ca(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=fn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ca(t,this.array)),t}setX(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ca(t,this.array)),t}setY(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ca(t,this.array)),t}setZ(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ca(t,this.array)),t}setW(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),i=fn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),i=fn(i,this.array),r=fn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),i=fn(i,this.array),r=fn(r,this.array),s=fn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==G0&&(e.usage=this.usage),e}};var Ol=class extends Fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Fl=class extends Fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Pi=class extends Fn{constructor(e,t,i){super(new Float32Array(e),t,i)}};var mD=0,Ln=new Qt,Cf=new ao,Bs=new F,Mn=new kr,ha=new kr,Ht=new F,Br=class n extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mD++}),this.uuid=ya(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H_(e)?Fl:Ol)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,i){return Ln.makeTranslation(e,t,i),this.applyMatrix4(Ln),this}scale(e,t,i){return Ln.makeScale(e,t,i),this.applyMatrix4(Ln),this}lookAt(e){return Cf.lookAt(e),Cf.updateMatrix(),this.applyMatrix4(Cf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ma);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ha.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(Mn.min,ha.min),Mn.expandByPoint(Ht),Ht.addVectors(Mn.max,ha.max),Mn.expandByPoint(Ht)):(Mn.expandByPoint(ha.min),Mn.expandByPoint(ha.max))}Mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ht.fromBufferAttribute(a,l),c&&(Bs.fromBufferAttribute(e,l),Ht.add(Bs)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let y=0;y<a;y++)l[y]=new F,u[y]=new F;let d=new F,h=new F,m=new F,g=new lt,_=new lt,p=new lt,f=new F,E=new F;function S(y,T,H){d.fromArray(r,y*3),h.fromArray(r,T*3),m.fromArray(r,H*3),g.fromArray(o,y*2),_.fromArray(o,T*2),p.fromArray(o,H*2),h.sub(d),m.sub(d),_.sub(g),p.sub(g);let K=1/(_.x*p.y-p.x*_.y);isFinite(K)&&(f.copy(h).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(K),E.copy(m).multiplyScalar(_.x).addScaledVector(h,-p.x).multiplyScalar(K),l[y].add(f),l[T].add(f),l[H].add(f),u[y].add(E),u[T].add(E),u[H].add(E))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let y=0,T=w.length;y<T;++y){let H=w[y],K=H.start,D=H.count;for(let V=K,k=K+D;V<k;V+=3)S(i[V+0],i[V+1],i[V+2])}let I=new F,A=new F,C=new F,G=new F;function ie(y){C.fromArray(s,y*3),G.copy(C);let T=l[y];I.copy(T),I.sub(C.multiplyScalar(C.dot(T))).normalize(),A.crossVectors(G,T);let K=A.dot(u[y])<0?-1:1;c[y*4]=I.x,c[y*4+1]=I.y,c[y*4+2]=I.z,c[y*4+3]=K}for(let y=0,T=w.length;y<T;++y){let H=w[y],K=H.start,D=H.count;for(let V=K,k=K+D;V<k;V+=3)ie(i[V+0]),ie(i[V+1]),ie(i[V+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);let r=new F,s=new F,o=new F,a=new F,c=new F,l=new F,u=new F,d=new F;if(e)for(let h=0,m=e.count;h<m;h+=3){let g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u),m=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*u;for(let f=0;f<u;f++)h[g++]=l[m++]}return new Fn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let h=l[u],m=e(h,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},i_=new Qt,Dr=new $f,dl=new ma,r_=new F,Vs=new F,zs=new F,Hs=new F,Af=new F,hl=new F,fl=new lt,pl=new lt,ml=new lt,s_=new F,o_=new F,a_=new F,gl=new F,vl=new F,Sn=class extends ao{constructor(e=new Br,t=new ro){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){hl.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(Af.fromBufferAttribute(d,e),o?hl.addScaledVector(Af,u):hl.addScaledVector(Af.sub(t),u))}t.add(hl)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),dl.copy(i.boundingSphere),dl.applyMatrix4(s),Dr.copy(e.ray).recast(e.near),!(dl.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(dl,r_)===null||Dr.origin.distanceToSquared(r_)>(e.far-e.near)**2))&&(i_.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(i_),!(i.boundingBox!==null&&Dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Dr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){let p=h[g],f=o[p.materialIndex],E=Math.max(p.start,m.start),S=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let w=E,I=S;w<I;w+=3){let A=a.getX(w),C=a.getX(w+1),G=a.getX(w+2);r=yl(this,f,e,i,l,u,d,A,C,G),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){let E=a.getX(p),S=a.getX(p+1),w=a.getX(p+2);r=yl(this,o,e,i,l,u,d,E,S,w),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){let p=h[g],f=o[p.materialIndex],E=Math.max(p.start,m.start),S=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let w=E,I=S;w<I;w+=3){let A=w,C=w+1,G=w+2;r=yl(this,f,e,i,l,u,d,A,C,G),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){let E=p,S=p+1,w=p+2;r=yl(this,o,e,i,l,u,d,E,S,w),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}};function gD(n,e,t,i,r,s,o,a){let c;if(e.side===gn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===er,a),c===null)return null;vl.copy(a),vl.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(vl);return l<t.near||l>t.far?null:{distance:l,point:vl.clone(),object:n}}function yl(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Vs),n.getVertexPosition(c,zs),n.getVertexPosition(l,Hs);let u=gD(n,e,t,i,Vs,zs,Hs,gl);if(u){r&&(fl.fromBufferAttribute(r,a),pl.fromBufferAttribute(r,c),ml.fromBufferAttribute(r,l),u.uv=$s.getInterpolation(gl,Vs,zs,Hs,fl,pl,ml,new lt)),s&&(fl.fromBufferAttribute(s,a),pl.fromBufferAttribute(s,c),ml.fromBufferAttribute(s,l),u.uv1=$s.getInterpolation(gl,Vs,zs,Hs,fl,pl,ml,new lt),u.uv2=u.uv1),o&&(s_.fromBufferAttribute(o,a),o_.fromBufferAttribute(o,c),a_.fromBufferAttribute(o,l),u.normal=$s.getInterpolation(gl,Vs,zs,Hs,s_,o_,a_,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new F,materialIndex:0};$s.getNormal(Vs,zs,Hs,d.normal),u.face=d}return u}var Vr=class n extends Br{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],h=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Pi(l,3)),this.setAttribute("normal",new Pi(u,3)),this.setAttribute("uv",new Pi(d,2));function g(_,p,f,E,S,w,I,A,C,G,ie){let y=w/C,T=I/G,H=w/2,K=I/2,D=A/2,V=C+1,k=G+1,$=0,z=0,W=new F;for(let j=0;j<k;j++){let Q=j*T-K;for(let re=0;re<V;re++){let De=re*y-H;W[_]=De*E,W[p]=Q*S,W[f]=D,l.push(W.x,W.y,W.z),W[_]=0,W[p]=0,W[f]=A>0?1:-1,u.push(W.x,W.y,W.z),d.push(re/C),d.push(1-j/G),$+=1}}for(let j=0;j<G;j++)for(let Q=0;Q<C;Q++){let re=h+Q+V*j,De=h+Q+V*(j+1),B=h+(Q+1)+V*(j+1),Y=h+(Q+1)+V*j;c.push(re,De,Y),c.push(De,B,Y),z+=6}a.addGroup(m,z,ie),m+=z,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function so(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function sn(n){let e={};for(let t=0;t<n.length;t++){let i=so(n[t]);for(let r in i)e[r]=i[r]}return e}function vD(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function W_(n){return n.getRenderTarget()===null?n.outputColorSpace:pt.workingColorSpace}var yD={clone:so,merge:sn},_D=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,di=class extends io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_D,this.fragmentShader=xD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=vD(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ul=class extends ao{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Yi=new F,c_=new lt,l_=new lt,an=class extends Ul{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Hf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(df*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hf*2*Math.atan(Math.tan(df*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,c_,l_),t.subVectors(l_,c_)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(df*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Gs=-90,Ws=1,qf=class extends ao{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new an(Gs,Ws,e,t);r.layers=this.layers,this.add(r);let s=new an(Gs,Ws,e,t);s.layers=this.layers,this.add(s);let o=new an(Gs,Ws,e,t);o.layers=this.layers,this.add(o);let a=new an(Gs,Ws,e,t);a.layers=this.layers,this.add(a);let c=new an(Gs,Ws,e,t);c.layers=this.layers,this.add(c);let l=new an(Gs,Ws,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Dl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},kl=class extends Gr{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:eo,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xf=class extends Li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Js("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ur?Xt:On),this.texture=new kl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vr(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:so(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:Ji});s.uniforms.tEquirect.value=t;let o=new Sn(r,s),a=t.minFilter;return t.minFilter===Lr&&(t.minFilter=pn),new qf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},Df=new F,MD=new F,SD=new Xe,Ai=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Df.subVectors(i,t).cross(MD.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Df),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||SD.getNormalMatrix(e),r=this.coplanarPoint(Df).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ir=new ma,_l=new F,Bl=class{constructor(e=new Ai,t=new Ai,i=new Ai,r=new Ai,s=new Ai,o=new Ai){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ri){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],m=r[8],g=r[9],_=r[10],p=r[11],f=r[12],E=r[13],S=r[14],w=r[15];if(i[0].setComponents(c-s,h-l,p-m,w-f).normalize(),i[1].setComponents(c+s,h+l,p+m,w+f).normalize(),i[2].setComponents(c+o,h+u,p+g,w+E).normalize(),i[3].setComponents(c-o,h-u,p-g,w-E).normalize(),i[4].setComponents(c-a,h-d,p-_,w-S).normalize(),t===Ri)i[5].setComponents(c+a,h+d,p+_,w+S).normalize();else if(t===Dl)i[5].setComponents(a,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){return Ir.center.set(0,0,0),Ir.radius=.7071067811865476,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(_l.x=r.normal.x>0?e.max.x:e.min.x,_l.y=r.normal.y>0?e.max.y:e.min.y,_l.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function j_(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function bD(n,e){let t=e.isWebGL2,i=new WeakMap;function r(l,u){let d=l.array,h=l.usage,m=d.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,d,h),l.onUploadCallback();let _;if(d instanceof Float32Array)_=n.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=n.SHORT;else if(d instanceof Uint32Array)_=n.UNSIGNED_INT;else if(d instanceof Int32Array)_=n.INT;else if(d instanceof Int8Array)_=n.BYTE;else if(d instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,u,d){let h=u.array,m=u._updateRange,g=u.updateRanges;if(n.bindBuffer(d,l),m.count===-1&&g.length===0&&n.bufferSubData(d,0,h),g.length!==0){for(let _=0,p=g.length;_<p;_++){let f=g[_];t?n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let d=i.get(l);if(d===void 0)i.set(l,r(l,u));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,l,u),d.version=l.version}}return{get:o,remove:a,update:c}}var Vl=class n extends Br{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,m=[],g=[],_=[],p=[];for(let f=0;f<u;f++){let E=f*h-o;for(let S=0;S<l;S++){let w=S*d-s;g.push(w,-E,0),_.push(0,0,1),p.push(S/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<a;E++){let S=E+l*f,w=E+l*(f+1),I=E+1+l*(f+1),A=E+1+l*f;m.push(S,w,A),m.push(w,I,A)}this.setIndex(m),this.setAttribute("position",new Pi(g,3)),this.setAttribute("normal",new Pi(_,3)),this.setAttribute("uv",new Pi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},wD=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ED=`#ifdef USE_ALPHAHASH
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
#endif`,TD=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CD=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AD=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DD=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ID=`#ifdef USE_AOMAP
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
#endif`,RD=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PD=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,ND=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,LD=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OD=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FD=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,UD=`#ifdef USE_IRIDESCENCE
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
#endif`,kD=`#ifdef USE_BUMPMAP
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
#endif`,BD=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,VD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HD=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GD=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WD=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jD=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$D=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qD=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,XD=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,YD=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ZD=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JD=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KD=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QD=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eI="gl_FragColor = linearToOutputTexel( gl_FragColor );",tI=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,nI=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,iI=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rI=`#ifdef USE_ENVMAP
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
#endif`,sI=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oI=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,aI=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cI=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lI=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uI=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dI=`#ifdef USE_GRADIENTMAP
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
}`,hI=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fI=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pI=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mI=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gI=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,vI=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yI=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_I=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xI=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,MI=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,SI=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,bI=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wI=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,EI=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,TI=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CI=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AI=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DI=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,II=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,RI=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PI=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NI=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LI=`#if defined( USE_POINTS_UV )
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
#endif`,OI=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FI=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UI=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kI=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,BI=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,VI=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zI=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,HI=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,GI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jI=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$I=`#ifdef USE_NORMALMAP
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
#endif`,qI=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XI=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YI=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZI=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JI=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KI=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,QI=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,a1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,c1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,l1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u1=`#ifdef USE_SKINNING
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
#endif`,d1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h1=`#ifdef USE_SKINNING
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
#endif`,f1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g1=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v1=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,y1=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,b1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w1=`uniform sampler2D t2D;
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
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`#include <common>
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
}`,I1=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,R1=`#define DISTANCE
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
}`,P1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F1=`uniform vec3 diffuse;
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
}`,U1=`#include <common>
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
}`,k1=`uniform vec3 diffuse;
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
}`,B1=`#define LAMBERT
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
}`,V1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,z1=`#define MATCAP
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
}`,H1=`#define MATCAP
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
}`,G1=`#define NORMAL
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
}`,W1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,j1=`#define PHONG
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
}`,$1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,q1=`#define STANDARD
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
}`,X1=`#define STANDARD
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Y1=`#define TOON
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
}`,Z1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,J1=`uniform float size;
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
}`,K1=`uniform vec3 diffuse;
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
}`,Q1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,eR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,tR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,nR=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:wD,alphahash_pars_fragment:ED,alphamap_fragment:TD,alphamap_pars_fragment:CD,alphatest_fragment:AD,alphatest_pars_fragment:DD,aomap_fragment:ID,aomap_pars_fragment:RD,batching_pars_vertex:PD,batching_vertex:ND,begin_vertex:LD,beginnormal_vertex:OD,bsdfs:FD,iridescence_fragment:UD,bumpmap_pars_fragment:kD,clipping_planes_fragment:BD,clipping_planes_pars_fragment:VD,clipping_planes_pars_vertex:zD,clipping_planes_vertex:HD,color_fragment:GD,color_pars_fragment:WD,color_pars_vertex:jD,color_vertex:$D,common:qD,cube_uv_reflection_fragment:XD,defaultnormal_vertex:YD,displacementmap_pars_vertex:ZD,displacementmap_vertex:JD,emissivemap_fragment:KD,emissivemap_pars_fragment:QD,colorspace_fragment:eI,colorspace_pars_fragment:tI,envmap_fragment:nI,envmap_common_pars_fragment:iI,envmap_pars_fragment:rI,envmap_pars_vertex:sI,envmap_physical_pars_fragment:vI,envmap_vertex:oI,fog_vertex:aI,fog_pars_vertex:cI,fog_fragment:lI,fog_pars_fragment:uI,gradientmap_pars_fragment:dI,lightmap_fragment:hI,lightmap_pars_fragment:fI,lights_lambert_fragment:pI,lights_lambert_pars_fragment:mI,lights_pars_begin:gI,lights_toon_fragment:yI,lights_toon_pars_fragment:_I,lights_phong_fragment:xI,lights_phong_pars_fragment:MI,lights_physical_fragment:SI,lights_physical_pars_fragment:bI,lights_fragment_begin:wI,lights_fragment_maps:EI,lights_fragment_end:TI,logdepthbuf_fragment:CI,logdepthbuf_pars_fragment:AI,logdepthbuf_pars_vertex:DI,logdepthbuf_vertex:II,map_fragment:RI,map_pars_fragment:PI,map_particle_fragment:NI,map_particle_pars_fragment:LI,metalnessmap_fragment:OI,metalnessmap_pars_fragment:FI,morphcolor_vertex:UI,morphnormal_vertex:kI,morphtarget_pars_vertex:BI,morphtarget_vertex:VI,normal_fragment_begin:zI,normal_fragment_maps:HI,normal_pars_fragment:GI,normal_pars_vertex:WI,normal_vertex:jI,normalmap_pars_fragment:$I,clearcoat_normal_fragment_begin:qI,clearcoat_normal_fragment_maps:XI,clearcoat_pars_fragment:YI,iridescence_pars_fragment:ZI,opaque_fragment:JI,packing:KI,premultiplied_alpha_fragment:QI,project_vertex:e1,dithering_fragment:t1,dithering_pars_fragment:n1,roughnessmap_fragment:i1,roughnessmap_pars_fragment:r1,shadowmap_pars_fragment:s1,shadowmap_pars_vertex:o1,shadowmap_vertex:a1,shadowmask_pars_fragment:c1,skinbase_vertex:l1,skinning_pars_vertex:u1,skinning_vertex:d1,skinnormal_vertex:h1,specularmap_fragment:f1,specularmap_pars_fragment:p1,tonemapping_fragment:m1,tonemapping_pars_fragment:g1,transmission_fragment:v1,transmission_pars_fragment:y1,uv_pars_fragment:_1,uv_pars_vertex:x1,uv_vertex:M1,worldpos_vertex:S1,background_vert:b1,background_frag:w1,backgroundCube_vert:E1,backgroundCube_frag:T1,cube_vert:C1,cube_frag:A1,depth_vert:D1,depth_frag:I1,distanceRGBA_vert:R1,distanceRGBA_frag:P1,equirect_vert:N1,equirect_frag:L1,linedashed_vert:O1,linedashed_frag:F1,meshbasic_vert:U1,meshbasic_frag:k1,meshlambert_vert:B1,meshlambert_frag:V1,meshmatcap_vert:z1,meshmatcap_frag:H1,meshnormal_vert:G1,meshnormal_frag:W1,meshphong_vert:j1,meshphong_frag:$1,meshphysical_vert:q1,meshphysical_frag:X1,meshtoon_vert:Y1,meshtoon_frag:Z1,points_vert:J1,points_frag:K1,shadow_vert:Q1,shadow_frag:eR,sprite_vert:tR,sprite_frag:nR},ne={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},ui={basic:{uniforms:sn([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:sn([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new ct(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:sn([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:sn([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:sn([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new ct(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:sn([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:sn([ne.points,ne.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:sn([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:sn([ne.common,ne.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:sn([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:sn([ne.sprite,ne.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:sn([ne.common,ne.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:sn([ne.lights,ne.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};ui.physical={uniforms:sn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var xl={r:0,b:0,g:0};function iR(n,e,t,i,r,s,o){let a=new ct(0),c=s===!0?0:1,l,u,d=null,h=0,m=null;function g(p,f){let E=!1,S=f.isScene===!0?f.background:null;S&&S.isTexture&&(S=(f.backgroundBlurriness>0?t:e).get(S)),S===null?_(a,c):S&&S.isColor&&(_(S,1),E=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Wl)?(u===void 0&&(u=new Sn(new Vr(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:so(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=pt.getTransfer(S.colorSpace)!==xt,(d!==S||h!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=S,h=S.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Sn(new Vl(2,2),new di({name:"BackgroundMaterial",uniforms:so(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=pt.getTransfer(S.colorSpace)!==xt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=S,h=S.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,f){p.getRGB(xl,W_(n)),i.buffers.color.setClear(xl.r,xl.g,xl.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),c=f,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(a,c)},render:g}}function rR(n,e,t,i){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=p(null),l=c,u=!1;function d(D,V,k,$,z){let W=!1;if(o){let j=_($,k,V);l!==j&&(l=j,m(l.object)),W=f(D,$,k,z),W&&E(D,$,k,z)}else{let j=V.wireframe===!0;(l.geometry!==$.id||l.program!==k.id||l.wireframe!==j)&&(l.geometry=$.id,l.program=k.id,l.wireframe=j,W=!0)}z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,G(D,V,k,$),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,V,k){let $=k.wireframe===!0,z=a[D.id];z===void 0&&(z={},a[D.id]=z);let W=z[V.id];W===void 0&&(W={},z[V.id]=W);let j=W[$];return j===void 0&&(j=p(h()),W[$]=j),j}function p(D){let V=[],k=[],$=[];for(let z=0;z<r;z++)V[z]=0,k[z]=0,$[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:k,attributeDivisors:$,object:D,attributes:{},index:null}}function f(D,V,k,$){let z=l.attributes,W=V.attributes,j=0,Q=k.getAttributes();for(let re in Q)if(Q[re].location>=0){let B=z[re],Y=W[re];if(Y===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor)),B===void 0||B.attribute!==Y||Y&&B.data!==Y.data)return!0;j++}return l.attributesNum!==j||l.index!==$}function E(D,V,k,$){let z={},W=V.attributes,j=0,Q=k.getAttributes();for(let re in Q)if(Q[re].location>=0){let B=W[re];B===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(B=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(B=D.instanceColor));let Y={};Y.attribute=B,B&&B.data&&(Y.data=B.data),z[re]=Y,j++}l.attributes=z,l.attributesNum=j,l.index=$}function S(){let D=l.newAttributes;for(let V=0,k=D.length;V<k;V++)D[V]=0}function w(D){I(D,0)}function I(D,V){let k=l.newAttributes,$=l.enabledAttributes,z=l.attributeDivisors;k[D]=1,$[D]===0&&(n.enableVertexAttribArray(D),$[D]=1),z[D]!==V&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,V),z[D]=V)}function A(){let D=l.newAttributes,V=l.enabledAttributes;for(let k=0,$=V.length;k<$;k++)V[k]!==D[k]&&(n.disableVertexAttribArray(k),V[k]=0)}function C(D,V,k,$,z,W,j){j===!0?n.vertexAttribIPointer(D,V,k,z,W):n.vertexAttribPointer(D,V,k,$,z,W)}function G(D,V,k,$){if(i.isWebGL2===!1&&(D.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();let z=$.attributes,W=k.getAttributes(),j=V.defaultAttributeValues;for(let Q in W){let re=W[Q];if(re.location>=0){let De=z[Q];if(De===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(De=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(De=D.instanceColor)),De!==void 0){let B=De.normalized,Y=De.itemSize,ae=t.get(De);if(ae===void 0)continue;let Se=ae.buffer,be=ae.type,he=ae.bytesPerElement,rt=i.isWebGL2===!0&&(be===n.INT||be===n.UNSIGNED_INT||De.gpuType===N_);if(De.isInterleavedBufferAttribute){let Fe=De.data,P=Fe.stride,Gt=De.offset;if(Fe.isInstancedInterleavedBuffer){for(let xe=0;xe<re.locationSize;xe++)I(re.location+xe,Fe.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let xe=0;xe<re.locationSize;xe++)w(re.location+xe);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let xe=0;xe<re.locationSize;xe++)C(re.location+xe,Y/re.locationSize,be,B,P*he,(Gt+Y/re.locationSize*xe)*he,rt)}else{if(De.isInstancedBufferAttribute){for(let Fe=0;Fe<re.locationSize;Fe++)I(re.location+Fe,De.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let Fe=0;Fe<re.locationSize;Fe++)w(re.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let Fe=0;Fe<re.locationSize;Fe++)C(re.location+Fe,Y/re.locationSize,be,B,Y*he,Y/re.locationSize*Fe*he,rt)}}else if(j!==void 0){let B=j[Q];if(B!==void 0)switch(B.length){case 2:n.vertexAttrib2fv(re.location,B);break;case 3:n.vertexAttrib3fv(re.location,B);break;case 4:n.vertexAttrib4fv(re.location,B);break;default:n.vertexAttrib1fv(re.location,B)}}}}A()}function ie(){H();for(let D in a){let V=a[D];for(let k in V){let $=V[k];for(let z in $)g($[z].object),delete $[z];delete V[k]}delete a[D]}}function y(D){if(a[D.id]===void 0)return;let V=a[D.id];for(let k in V){let $=V[k];for(let z in $)g($[z].object),delete $[z];delete V[k]}delete a[D.id]}function T(D){for(let V in a){let k=a[V];if(k[D.id]===void 0)continue;let $=k[D.id];for(let z in $)g($[z].object),delete $[z];delete k[D.id]}}function H(){K(),u=!0,l!==c&&(l=c,m(l.object))}function K(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:H,resetDefaultState:K,dispose:ie,releaseStatesOfGeometry:y,releaseStatesOfProgram:T,initAttributes:S,enableAttribute:w,disableUnusedAttributes:A}}function sR(n,e,t,i){let r=i.isWebGL2,s;function o(u){s=u}function a(u,d){n.drawArrays(s,u,d),t.update(d,s,1)}function c(u,d,h){if(h===0)return;let m,g;if(r)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,u,d,h),t.update(d,s,h)}function l(u,d,h){if(h===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h;g++)this.render(u[g],d[g]);else{m.multiDrawArraysWEBGL(s,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=d[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function oR(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=h>0,w=o||e.has("OES_texture_float"),I=S&&w,A=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:E,vertexTextures:S,floatFragmentTextures:w,floatVertexTextures:I,maxSamples:A}}function aR(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Ai,a=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,f=n.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{let E=s?0:i,S=E*4,w=f.clippingState||null;c.value=w,w=u(g,h,S,m);for(let I=0;I!==S;++I)w[I]=t[I];f.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=c.value,g!==!0||p===null){let f=m+_*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let S=0,w=m;S!==_;++S,w+=4)o.copy(d[S]).applyMatrix4(E,a),o.normal.toArray(p,w),p[w+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function cR(n){let e=new WeakMap;function t(o,a){return a===Uf?o.mapping=eo:a===kf&&(o.mapping=to),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Uf||a===kf)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Xf(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Yf=class extends Ul{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qs=4,u_=[.125,.215,.35,.446,.526,.582],Nr=20,If=new Yf,d_=new ct,Rf=null,Pf=0,Nf=0,Rr=(1+Math.sqrt(5))/2,js=1/Rr,h_=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Rr,js),new F(0,Rr,-js),new F(js,0,Rr),new F(-js,0,Rr),new F(Rr,js,0),new F(-Rr,js,0)],zl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Rf=this._renderer.getRenderTarget(),Pf=this._renderer.getActiveCubeFace(),Nf=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rf,Pf,Nf),e.scissorTest=!1,Ml(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===eo||e.mapping===to?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rf=this._renderer.getRenderTarget(),Pf=this._renderer.getActiveCubeFace(),Nf=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:pa,format:Yn,colorSpace:Ni,depthBuffer:!1},r=f_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=f_(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lR(s)),this._blurMaterial=uR(s,e,t)}return r}_compileMaterial(e){let t=new Sn(this._lodPlanes[0],e);this._renderer.compile(t,If)}_sceneToCubeUV(e,t,i,r){let a=new an(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(d_),u.toneMapping=Ki,u.autoClear=!1;let m=new ro({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new Sn(new Vr,m),_=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(d_),_=!0);for(let f=0;f<6;f++){let E=f%3;E===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):E===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let S=this._cubeSize;Ml(r,E*S,f>2?S:0,S,S),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===eo||e.mapping===to;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=m_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=p_());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Sn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Ml(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,If)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=h_[(r-1)%h_.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Sn(this._lodPlanes[r],l),h=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Nr-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Nr;p>Nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Nr}`);let f=[],E=0;for(let C=0;C<Nr;++C){let G=C/_,ie=Math.exp(-G*G/2);f.push(ie),C===0?E+=ie:C<p&&(E+=2*ie)}for(let C=0;C<f.length;C++)f[C]=f[C]/E;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-i;let w=this._sizeLods[r],I=3*w*(r>S-qs?r-S+qs:0),A=4*(this._cubeSize-w);Ml(t,I,A,3*w,2*w),c.setRenderTarget(t),c.render(d,If)}};function lR(n){let e=[],t=[],i=[],r=n,s=n-qs+1+u_.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-qs?c=u_[o-n+qs-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,_=3,p=2,f=1,E=new Float32Array(_*g*m),S=new Float32Array(p*g*m),w=new Float32Array(f*g*m);for(let A=0;A<m;A++){let C=A%3*2/3-1,G=A>2?0:-1,ie=[C,G,0,C+2/3,G,0,C+2/3,G+1,0,C,G,0,C+2/3,G+1,0,C,G+1,0];E.set(ie,_*g*A),S.set(h,p*g*A);let y=[A,A,A,A,A,A];w.set(y,f*g*A)}let I=new Br;I.setAttribute("position",new Fn(E,_)),I.setAttribute("uv",new Fn(S,p)),I.setAttribute("faceIndex",new Fn(w,f)),e.push(I),r>qs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function f_(n,e,t){let i=new Li(n,e,t);return i.texture.mapping=Wl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ml(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function uR(n,e,t){let i=new Float32Array(Nr),r=new F(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function p_(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function m_(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function _p(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dR(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Uf||c===kf,u=c===eo||c===to;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new zl(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(l&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new zl(n));let h=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function hR(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function fR(n,e,t,i){let r={},s=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let _=h.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}h.removeEventListener("dispose",o),delete r[h.id];let m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let g in h)e.update(h[g],n.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let _=m[g];for(let p=0,f=_.length;p<f;p++)e.update(_[p],n.ARRAY_BUFFER)}}function l(d){let h=[],m=d.index,g=d.attributes.position,_=0;if(m!==null){let E=m.array;_=m.version;for(let S=0,w=E.length;S<w;S+=3){let I=E[S+0],A=E[S+1],C=E[S+2];h.push(I,A,A,C,C,I)}}else if(g!==void 0){let E=g.array;_=g.version;for(let S=0,w=E.length/3-1;S<w;S+=3){let I=S+0,A=S+1,C=S+2;h.push(I,A,A,C,C,I)}}else return;let p=new(H_(h)?Fl:Ol)(h,1);p.version=_;let f=s.get(d);f&&e.remove(f),s.set(d,p)}function u(d){let h=s.get(d);if(h){let m=d.index;m!==null&&h.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function pR(n,e,t,i){let r=i.isWebGL2,s;function o(m){s=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function u(m,g){n.drawElements(s,g,a,m*c),t.update(g,s,1)}function d(m,g,_){if(_===0)return;let p,f;if(r)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,g,a,m*c,_),t.update(g,s,_)}function h(m,g,_){if(_===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<_;f++)this.render(m[f]/c,g[f]);else{p.multiDrawElementsWEBGL(s,g,0,a,m,0,_);let f=0;for(let E=0;E<_;E++)f+=g[E];t.update(f,s,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function mR(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function gR(n,e){return n[0]-e[0]}function vR(n,e){return Math.abs(e[1])-Math.abs(n[1])}function yR(n,e,t){let i={},r=new Float32Array(8),s=new WeakMap,o=new Yt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,d){let h=l.morphTargetInfluences;if(e.isWebGL2===!0){let g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0,p=s.get(u);if(p===void 0||p.count!==_){let V=function(){K.dispose(),s.delete(u),u.removeEventListener("dispose",V)};var m=V;p!==void 0&&p.texture.dispose();let S=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,I=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],G=u.morphAttributes.color||[],ie=0;S===!0&&(ie=1),w===!0&&(ie=2),I===!0&&(ie=3);let y=u.attributes.position.count*ie,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let H=new Float32Array(y*T*4*_),K=new Nl(H,y,T,_);K.type=Ii,K.needsUpdate=!0;let D=ie*4;for(let k=0;k<_;k++){let $=A[k],z=C[k],W=G[k],j=y*T*4*k;for(let Q=0;Q<$.count;Q++){let re=Q*D;S===!0&&(o.fromBufferAttribute($,Q),H[j+re+0]=o.x,H[j+re+1]=o.y,H[j+re+2]=o.z,H[j+re+3]=0),w===!0&&(o.fromBufferAttribute(z,Q),H[j+re+4]=o.x,H[j+re+5]=o.y,H[j+re+6]=o.z,H[j+re+7]=0),I===!0&&(o.fromBufferAttribute(W,Q),H[j+re+8]=o.x,H[j+re+9]=o.y,H[j+re+10]=o.z,H[j+re+11]=W.itemSize===4?o.w:1)}}p={count:_,texture:K,size:new lt(y,T)},s.set(u,p),u.addEventListener("dispose",V)}let f=0;for(let S=0;S<h.length;S++)f+=h[S];let E=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",E),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{let g=h===void 0?0:h.length,_=i[u.id];if(_===void 0||_.length!==g){_=[];for(let w=0;w<g;w++)_[w]=[w,0];i[u.id]=_}for(let w=0;w<g;w++){let I=_[w];I[0]=w,I[1]=h[w]}_.sort(vR);for(let w=0;w<8;w++)w<g&&_[w][1]?(a[w][0]=_[w][0],a[w][1]=_[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(gR);let p=u.morphAttributes.position,f=u.morphAttributes.normal,E=0;for(let w=0;w<8;w++){let I=a[w],A=I[0],C=I[1];A!==Number.MAX_SAFE_INTEGER&&C?(p&&u.getAttribute("morphTarget"+w)!==p[A]&&u.setAttribute("morphTarget"+w,p[A]),f&&u.getAttribute("morphNormal"+w)!==f[A]&&u.setAttribute("morphNormal"+w,f[A]),r[w]=C,E+=C):(p&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),f&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),r[w]=0)}let S=u.morphTargetsRelative?1:1-E;d.getUniforms().setValue(n,"morphTargetBaseInfluence",S),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function _R(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var Hl=class extends Gr{constructor(e,t,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:Fr,u!==Fr&&u!==no)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Fr&&(i=Zi),i===void 0&&u===no&&(i=Or),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:on,this.minFilter=c!==void 0?c:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},$_=new Gr,q_=new Hl(1,1);q_.compareFunction=z_;var X_=new Nl,Y_=new jf,Z_=new kl,g_=[],v_=[],y_=new Float32Array(16),__=new Float32Array(9),x_=new Float32Array(4);function co(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=g_[r];if(s===void 0&&(s=new Float32Array(r),g_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $l(n,e){let t=v_[e];t===void 0&&(t=new Int32Array(e),v_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function xR(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function MR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function SR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function bR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function wR(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Lt(t,i))return;x_.set(i),n.uniformMatrix2fv(this.addr,!1,x_),Ot(t,i)}}function ER(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Lt(t,i))return;__.set(i),n.uniformMatrix3fv(this.addr,!1,__),Ot(t,i)}}function TR(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Lt(t,i))return;y_.set(i),n.uniformMatrix4fv(this.addr,!1,y_),Ot(t,i)}}function CR(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function AR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function DR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function IR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function RR(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function PR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function NR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function LR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function OR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s=this.type===n.SAMPLER_2D_SHADOW?q_:$_;t.setTexture2D(e||s,r)}function FR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Y_,r)}function UR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Z_,r)}function kR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||X_,r)}function BR(n){switch(n){case 5126:return xR;case 35664:return MR;case 35665:return SR;case 35666:return bR;case 35674:return wR;case 35675:return ER;case 35676:return TR;case 5124:case 35670:return CR;case 35667:case 35671:return AR;case 35668:case 35672:return DR;case 35669:case 35673:return IR;case 5125:return RR;case 36294:return PR;case 36295:return NR;case 36296:return LR;case 35678:case 36198:case 36298:case 36306:case 35682:return OR;case 35679:case 36299:case 36307:return FR;case 35680:case 36300:case 36308:case 36293:return UR;case 36289:case 36303:case 36311:case 36292:return kR}}function VR(n,e){n.uniform1fv(this.addr,e)}function zR(n,e){let t=co(e,this.size,2);n.uniform2fv(this.addr,t)}function HR(n,e){let t=co(e,this.size,3);n.uniform3fv(this.addr,t)}function GR(n,e){let t=co(e,this.size,4);n.uniform4fv(this.addr,t)}function WR(n,e){let t=co(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function jR(n,e){let t=co(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $R(n,e){let t=co(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function qR(n,e){n.uniform1iv(this.addr,e)}function XR(n,e){n.uniform2iv(this.addr,e)}function YR(n,e){n.uniform3iv(this.addr,e)}function ZR(n,e){n.uniform4iv(this.addr,e)}function JR(n,e){n.uniform1uiv(this.addr,e)}function KR(n,e){n.uniform2uiv(this.addr,e)}function QR(n,e){n.uniform3uiv(this.addr,e)}function eP(n,e){n.uniform4uiv(this.addr,e)}function tP(n,e,t){let i=this.cache,r=e.length,s=$l(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||$_,s[o])}function nP(n,e,t){let i=this.cache,r=e.length,s=$l(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Y_,s[o])}function iP(n,e,t){let i=this.cache,r=e.length,s=$l(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Z_,s[o])}function rP(n,e,t){let i=this.cache,r=e.length,s=$l(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||X_,s[o])}function sP(n){switch(n){case 5126:return VR;case 35664:return zR;case 35665:return HR;case 35666:return GR;case 35674:return WR;case 35675:return jR;case 35676:return $R;case 5124:case 35670:return qR;case 35667:case 35671:return XR;case 35668:case 35672:return YR;case 35669:case 35673:return ZR;case 5125:return JR;case 36294:return KR;case 36295:return QR;case 36296:return eP;case 35678:case 36198:case 36298:case 36306:case 35682:return tP;case 35679:case 36299:case 36307:return nP;case 35680:case 36300:case 36308:case 36293:return iP;case 36289:case 36303:case 36311:case 36292:return rP}}var Zf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=BR(t.type)}},Jf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sP(t.type)}},Kf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Lf=/(\w+)(\])?(\[|\.)?/g;function M_(n,e){n.seq.push(e),n.map[e.id]=e}function oP(n,e,t){let i=n.name,r=i.length;for(Lf.lastIndex=0;;){let s=Lf.exec(i),o=Lf.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){M_(t,l===void 0?new Zf(a,n,e):new Jf(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Kf(a),M_(t,d)),t=d}}}var Qs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);oP(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function S_(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var aP=37297,cP=0;function lP(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function uP(n){let e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(n),i;switch(e===t?i="":e===Al&&t===Cl?i="LinearDisplayP3ToLinearSRGB":e===Cl&&t===Al&&(i="LinearSRGBToLinearDisplayP3"),n){case Ni:case jl:return[i,"LinearTransferOETF"];case Xt:case yp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function b_(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+lP(n.getShaderSource(e),o)}else return r}function dP(n,e){let t=uP(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function hP(n,e){let t;switch(e){case DA:t="Linear";break;case IA:t="Reinhard";break;case RA:t="OptimizedCineon";break;case PA:t="ACESFilmic";break;case LA:t="AgX";break;case NA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function fP(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xs).join(`
`)}function pP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function mP(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gP(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Xs(n){return n!==""}function w_(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function E_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var vP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qf(n){return n.replace(vP,_P)}var yP=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _P(n,e){let t=Ge[e];if(t===void 0){let i=yP.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qf(t)}var xP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function T_(n){return n.replace(xP,MP)}function MP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function C_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(e+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function SP(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===R_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===iA?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function bP(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case eo:case to:e="ENVMAP_TYPE_CUBE";break;case Wl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wP(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case to:e="ENVMAP_MODE_REFRACTION";break}return e}function EP(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case P_:e="ENVMAP_BLENDING_MULTIPLY";break;case CA:e="ENVMAP_BLENDING_MIX";break;case AA:e="ENVMAP_BLENDING_ADD";break}return e}function TP(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function CP(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=SP(t),l=bP(t),u=wP(t),d=EP(t),h=TP(t),m=t.isWebGL2?"":fP(t),g=pP(t),_=mP(s),p=r.createProgram(),f,E,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Xs).join(`
`),f.length>0&&(f+=`
`),E=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Xs).join(`
`),E.length>0&&(E+=`
`)):(f=[C_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),E=[m,C_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Ki?hP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,dP("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),o=Qf(o),o=w_(o,t),o=E_(o,t),a=Qf(a),a=w_(a,t),a=E_(a,t),o=T_(o),a=T_(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===W0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===W0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);let w=S+f+o,I=S+E+a,A=S_(r,r.VERTEX_SHADER,w),C=S_(r,r.FRAGMENT_SHADER,I);r.attachShader(p,A),r.attachShader(p,C),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function G(H){if(n.debug.checkShaderErrors){let K=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(A).trim(),V=r.getShaderInfoLog(C).trim(),k=!0,$=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,A,C);else{let z=b_(r,A,"vertex"),W=b_(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+K+`
`+z+`
`+W)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(D===""||V==="")&&($=!1);$&&(H.diagnostics={runnable:k,programLog:K,vertexShader:{log:D,prefix:f},fragmentShader:{log:V,prefix:E}})}r.deleteShader(A),r.deleteShader(C),ie=new Qs(r,p),y=gP(r,p)}let ie;this.getUniforms=function(){return ie===void 0&&G(this),ie};let y;this.getAttributes=function(){return y===void 0&&G(this),y};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(p,aP)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cP++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=C,this}var AP=0,ep=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new tp(e),t.set(e,i)),i}},tp=class{constructor(e){this.id=AP++,this.code=e,this.usedTimes=0}};function DP(n,e,t,i,r,s,o){let a=new Ll,c=new ep,l=new Set,u=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,m=r.vertexTextures,g=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function f(y,T,H,K,D){let V=K.fog,k=D.geometry,$=y.isMeshStandardMaterial?K.environment:null,z=(y.isMeshStandardMaterial?t:e).get(y.envMap||$),W=z&&z.mapping===Wl?z.image.height:null,j=_[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let Q=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,re=Q!==void 0?Q.length:0,De=0;k.morphAttributes.position!==void 0&&(De=1),k.morphAttributes.normal!==void 0&&(De=2),k.morphAttributes.color!==void 0&&(De=3);let B,Y,ae,Se;if(j){let vt=ui[j];B=vt.vertexShader,Y=vt.fragmentShader}else B=y.vertexShader,Y=y.fragmentShader,c.update(y),ae=c.getVertexShaderID(y),Se=c.getFragmentShaderID(y);let be=n.getRenderTarget(),he=D.isInstancedMesh===!0,rt=D.isBatchedMesh===!0,Fe=!!y.map,P=!!y.matcap,Gt=!!z,xe=!!y.aoMap,Ie=!!y.lightMap,ge=!!y.bumpMap,Mt=!!y.normalMap,Ve=!!y.displacementMap,M=!!y.emissiveMap,v=!!y.metalnessMap,N=!!y.roughnessMap,J=y.anisotropy>0,q=y.clearcoat>0,Z=y.iridescence>0,fe=y.sheen>0,se=y.transmission>0,ce=J&&!!y.anisotropyMap,Ee=q&&!!y.clearcoatMap,We=q&&!!y.clearcoatNormalMap,X=q&&!!y.clearcoatRoughnessMap,ht=Z&&!!y.iridescenceMap,Ye=Z&&!!y.iridescenceThicknessMap,Re=fe&&!!y.sheenColorMap,ye=fe&&!!y.sheenRoughnessMap,le=!!y.specularMap,ze=!!y.specularColorMap,ut=!!y.specularIntensityMap,_t=se&&!!y.transmissionMap,Ze=se&&!!y.thicknessMap,mt=!!y.gradientMap,b=!!y.alphaMap,ee=y.alphaTest>0,te=!!y.alphaHash,de=!!y.extensions,Me=Ki;y.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Me=n.toneMapping);let dt={isWebGL2:d,shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:B,fragmentShader:Y,defines:y.defines,customVertexShaderID:ae,customFragmentShaderID:Se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:rt,instancing:he,instancingColor:he&&D.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:be===null?n.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Ni,alphaToCoverage:!!y.alphaToCoverage,map:Fe,matcap:P,envMap:Gt,envMapMode:Gt&&z.mapping,envMapCubeUVHeight:W,aoMap:xe,lightMap:Ie,bumpMap:ge,normalMap:Mt,displacementMap:m&&Ve,emissiveMap:M,normalMapObjectSpace:Mt&&y.normalMapType===$A,normalMapTangentSpace:Mt&&y.normalMapType===jA,metalnessMap:v,roughnessMap:N,anisotropy:J,anisotropyMap:ce,clearcoat:q,clearcoatMap:Ee,clearcoatNormalMap:We,clearcoatRoughnessMap:X,iridescence:Z,iridescenceMap:ht,iridescenceThicknessMap:Ye,sheen:fe,sheenColorMap:Re,sheenRoughnessMap:ye,specularMap:le,specularColorMap:ze,specularIntensityMap:ut,transmission:se,transmissionMap:_t,thicknessMap:Ze,gradientMap:mt,opaque:y.transparent===!1&&y.blending===Zs&&y.alphaToCoverage===!1,alphaMap:b,alphaTest:ee,alphaHash:te,combine:y.combine,mapUv:Fe&&p(y.map.channel),aoMapUv:xe&&p(y.aoMap.channel),lightMapUv:Ie&&p(y.lightMap.channel),bumpMapUv:ge&&p(y.bumpMap.channel),normalMapUv:Mt&&p(y.normalMap.channel),displacementMapUv:Ve&&p(y.displacementMap.channel),emissiveMapUv:M&&p(y.emissiveMap.channel),metalnessMapUv:v&&p(y.metalnessMap.channel),roughnessMapUv:N&&p(y.roughnessMap.channel),anisotropyMapUv:ce&&p(y.anisotropyMap.channel),clearcoatMapUv:Ee&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:We&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:ye&&p(y.sheenRoughnessMap.channel),specularMapUv:le&&p(y.specularMap.channel),specularColorMapUv:ze&&p(y.specularColorMap.channel),specularIntensityMapUv:ut&&p(y.specularIntensityMap.channel),transmissionMapUv:_t&&p(y.transmissionMap.channel),thicknessMapUv:Ze&&p(y.thicknessMap.channel),alphaMapUv:b&&p(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Mt||J),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!k.attributes.uv&&(Fe||b),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:De,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:Me,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Fe&&y.map.isVideoTexture===!0&&pt.getTransfer(y.map.colorSpace)===xt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Di,flipSided:y.side===gn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:de&&y.extensions.derivatives===!0,extensionFragDepth:de&&y.extensions.fragDepth===!0,extensionDrawBuffers:de&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:de&&y.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function E(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let H in y.defines)T.push(H),T.push(y.defines[H]);return y.isRawShaderMaterial===!1&&(S(T,y),w(T,y),T.push(n.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function S(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function w(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),y.push(a.mask)}function I(y){let T=_[y.type],H;if(T){let K=ui[T];H=yD.clone(K.uniforms)}else H=y.uniforms;return H}function A(y,T){let H;for(let K=0,D=u.length;K<D;K++){let V=u[K];if(V.cacheKey===T){H=V,++H.usedTimes;break}}return H===void 0&&(H=new CP(n,T,y,s),u.push(H)),H}function C(y){if(--y.usedTimes===0){let T=u.indexOf(y);u[T]=u[u.length-1],u.pop(),y.destroy()}}function G(y){c.remove(y)}function ie(){c.dispose()}return{getParameters:f,getProgramCacheKey:E,getUniforms:I,acquireProgram:A,releaseProgram:C,releaseShaderCache:G,programs:u,dispose:ie}}function IP(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function RP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function A_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function D_(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,m,g,_,p){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=p),e++,f}function a(d,h,m,g,_,p){let f=o(d,h,m,g,_,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function c(d,h,m,g,_,p){let f=o(d,h,m,g,_,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function l(d,h){t.length>1&&t.sort(d||RP),i.length>1&&i.sort(h||A_),r.length>1&&r.sort(h||A_)}function u(){for(let d=e,h=n.length;d<h;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function PP(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new D_,n.set(i,[o])):r>=s.length?(o=new D_,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function NP(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new ct};break;case"SpotLight":t={position:new F,direction:new F,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function LP(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var OP=0;function FP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function UP(n,e){let t=new NP,i=LP(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new F);let s=new F,o=new Qt,a=new Qt;function c(u,d){let h=0,m=0,g=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let _=0,p=0,f=0,E=0,S=0,w=0,I=0,A=0,C=0,G=0,ie=0;u.sort(FP);let y=d===!0?Math.PI:1;for(let H=0,K=u.length;H<K;H++){let D=u[H],V=D.color,k=D.intensity,$=D.distance,z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=V.r*k*y,m+=V.g*k*y,g+=V.b*k*y;else if(D.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(D.sh.coefficients[W],k);ie++}else if(D.isDirectionalLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*y),D.castShadow){let j=D.shadow,Q=i.get(D);Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,r.directionalShadow[_]=Q,r.directionalShadowMap[_]=z,r.directionalShadowMatrix[_]=D.shadow.matrix,w++}r.directional[_]=W,_++}else if(D.isSpotLight){let W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(V).multiplyScalar(k*y),W.distance=$,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,r.spot[f]=W;let j=D.shadow;if(D.map&&(r.spotLightMap[C]=D.map,C++,j.updateMatrices(D),D.castShadow&&G++),r.spotLightMatrix[f]=j.matrix,D.castShadow){let Q=i.get(D);Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,r.spotShadow[f]=Q,r.spotShadowMap[f]=z,A++}f++}else if(D.isRectAreaLight){let W=t.get(D);W.color.copy(V).multiplyScalar(k),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),r.rectArea[E]=W,E++}else if(D.isPointLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*y),W.distance=D.distance,W.decay=D.decay,D.castShadow){let j=D.shadow,Q=i.get(D);Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,Q.shadowCameraNear=j.camera.near,Q.shadowCameraFar=j.camera.far,r.pointShadow[p]=Q,r.pointShadowMap[p]=z,r.pointShadowMatrix[p]=D.shadow.matrix,I++}r.point[p]=W,p++}else if(D.isHemisphereLight){let W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(k*y),W.groundColor.copy(D.groundColor).multiplyScalar(k*y),r.hemi[S]=W,S++}}E>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;let T=r.hash;(T.directionalLength!==_||T.pointLength!==p||T.spotLength!==f||T.rectAreaLength!==E||T.hemiLength!==S||T.numDirectionalShadows!==w||T.numPointShadows!==I||T.numSpotShadows!==A||T.numSpotMaps!==C||T.numLightProbes!==ie)&&(r.directional.length=_,r.spot.length=f,r.rectArea.length=E,r.point.length=p,r.hemi.length=S,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=A+C-G,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=ie,T.directionalLength=_,T.pointLength=p,T.spotLength=f,T.rectAreaLength=E,T.hemiLength=S,T.numDirectionalShadows=w,T.numPointShadows=I,T.numSpotShadows=A,T.numSpotMaps=C,T.numLightProbes=ie,r.version=OP++)}function l(u,d){let h=0,m=0,g=0,_=0,p=0,f=d.matrixWorldInverse;for(let E=0,S=u.length;E<S;E++){let w=u[E];if(w.isDirectionalLight){let I=r.directional[h];I.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(f),h++}else if(w.isSpotLight){let I=r.spot[g];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(f),I.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(f),g++}else if(w.isRectAreaLight){let I=r.rectArea[_];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(f),a.identity(),o.copy(w.matrixWorld),o.premultiply(f),a.extractRotation(o),I.halfWidth.set(w.width*.5,0,0),I.halfHeight.set(0,w.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){let I=r.point[m];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(f),m++}else if(w.isHemisphereLight){let I=r.hemi[p];I.direction.setFromMatrixPosition(w.matrixWorld),I.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:r}}function I_(n,e){let t=new UP(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function c(d){t.setup(i,d)}function l(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function kP(n,e){let t=new WeakMap;function i(s,o=0){let a=t.get(s),c;return a===void 0?(c=new I_(n,e),t.set(s,[c])):o>=a.length?(c=new I_(n,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}var np=class extends io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ip=class extends io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},BP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zP(n,e,t){let i=new Bl,r=new lt,s=new lt,o=new Yt,a=new np({depthPacking:WA}),c=new ip,l={},u=t.maxTextureSize,d={[er]:gn,[gn]:er,[Di]:Di},h=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:BP,fragmentShader:VP}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let g=new Br;g.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Sn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=R_;let f=this.type;this.render=function(A,C,G){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;let ie=n.getRenderTarget(),y=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Ji),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let K=f!==Ci&&this.type===Ci,D=f===Ci&&this.type!==Ci;for(let V=0,k=A.length;V<k;V++){let $=A[V],z=$.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);let W=z.getFrameExtents();if(r.multiply(W),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,z.mapSize.y=s.y)),z.map===null||K===!0||D===!0){let Q=this.type!==Ci?{minFilter:on,magFilter:on}:{};z.map!==null&&z.map.dispose(),z.map=new Li(r.x,r.y,Q),z.map.texture.name=$.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();let j=z.getViewportCount();for(let Q=0;Q<j;Q++){let re=z.getViewport(Q);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),H.viewport(o),z.updateMatrices($,Q),i=z.getFrustum(),w(C,G,z.camera,$,this.type)}z.isPointLightShadow!==!0&&this.type===Ci&&E(z,G),z.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(ie,y,T)};function E(A,C){let G=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Li(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,G,h,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,G,m,_,null)}function S(A,C,G,ie){let y=null,T=G.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)y=T;else if(y=G.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let H=y.uuid,K=C.uuid,D=l[H];D===void 0&&(D={},l[H]=D);let V=D[K];V===void 0&&(V=y.clone(),D[K]=V,C.addEventListener("dispose",I)),y=V}if(y.visible=C.visible,y.wireframe=C.wireframe,ie===Ci?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:d[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,G.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let H=n.properties.get(y);H.light=G}return y}function w(A,C,G,ie,y){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Ci)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld);let K=e.update(A),D=A.material;if(Array.isArray(D)){let V=K.groups;for(let k=0,$=V.length;k<$;k++){let z=V[k],W=D[z.materialIndex];if(W&&W.visible){let j=S(A,W,ie,y);A.onBeforeShadow(n,A,C,G,K,j,z),n.renderBufferDirect(G,null,K,j,A,z),A.onAfterShadow(n,A,C,G,K,j,z)}}}else if(D.visible){let V=S(A,D,ie,y);A.onBeforeShadow(n,A,C,G,K,V,null),n.renderBufferDirect(G,null,K,V,A,null),A.onAfterShadow(n,A,C,G,K,V,null)}}let H=A.children;for(let K=0,D=H.length;K<D;K++)w(H[K],C,G,ie,y)}function I(A){A.target.removeEventListener("dispose",I);for(let G in l){let ie=l[G],y=A.target.uuid;y in ie&&(ie[y].dispose(),delete ie[y])}}}function HP(n,e,t){let i=t.isWebGL2;function r(){let b=!1,ee=new Yt,te=null,de=new Yt(0,0,0,0);return{setMask:function(Me){te!==Me&&!b&&(n.colorMask(Me,Me,Me,Me),te=Me)},setLocked:function(Me){b=Me},setClear:function(Me,dt,vt,Wt,bn){bn===!0&&(Me*=Wt,dt*=Wt,vt*=Wt),ee.set(Me,dt,vt,Wt),de.equals(ee)===!1&&(n.clearColor(Me,dt,vt,Wt),de.copy(ee))},reset:function(){b=!1,te=null,de.set(-1,0,0,0)}}}function s(){let b=!1,ee=null,te=null,de=null;return{setTest:function(Me){Me?he(n.DEPTH_TEST):rt(n.DEPTH_TEST)},setMask:function(Me){ee!==Me&&!b&&(n.depthMask(Me),ee=Me)},setFunc:function(Me){if(te!==Me){switch(Me){case xA:n.depthFunc(n.NEVER);break;case MA:n.depthFunc(n.ALWAYS);break;case SA:n.depthFunc(n.LESS);break;case bl:n.depthFunc(n.LEQUAL);break;case bA:n.depthFunc(n.EQUAL);break;case wA:n.depthFunc(n.GEQUAL);break;case EA:n.depthFunc(n.GREATER);break;case TA:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=Me}},setLocked:function(Me){b=Me},setClear:function(Me){de!==Me&&(n.clearDepth(Me),de=Me)},reset:function(){b=!1,ee=null,te=null,de=null}}}function o(){let b=!1,ee=null,te=null,de=null,Me=null,dt=null,vt=null,Wt=null,bn=null;return{setTest:function(yt){b||(yt?he(n.STENCIL_TEST):rt(n.STENCIL_TEST))},setMask:function(yt){ee!==yt&&!b&&(n.stencilMask(yt),ee=yt)},setFunc:function(yt,en,Jn){(te!==yt||de!==en||Me!==Jn)&&(n.stencilFunc(yt,en,Jn),te=yt,de=en,Me=Jn)},setOp:function(yt,en,Jn){(dt!==yt||vt!==en||Wt!==Jn)&&(n.stencilOp(yt,en,Jn),dt=yt,vt=en,Wt=Jn)},setLocked:function(yt){b=yt},setClear:function(yt){bn!==yt&&(n.clearStencil(yt),bn=yt)},reset:function(){b=!1,ee=null,te=null,de=null,Me=null,dt=null,vt=null,Wt=null,bn=null}}}let a=new r,c=new s,l=new o,u=new WeakMap,d=new WeakMap,h={},m={},g=new WeakMap,_=[],p=null,f=!1,E=null,S=null,w=null,I=null,A=null,C=null,G=null,ie=new ct(0,0,0),y=0,T=!1,H=null,K=null,D=null,V=null,k=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,W=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(j)[1]),z=W>=1):j.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),z=W>=2);let Q=null,re={},De=n.getParameter(n.SCISSOR_BOX),B=n.getParameter(n.VIEWPORT),Y=new Yt().fromArray(De),ae=new Yt().fromArray(B);function Se(b,ee,te,de){let Me=new Uint8Array(4),dt=n.createTexture();n.bindTexture(b,dt),n.texParameteri(b,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(b,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let vt=0;vt<te;vt++)i&&(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)?n.texImage3D(ee,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(ee+vt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return dt}let be={};be[n.TEXTURE_2D]=Se(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=Se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(be[n.TEXTURE_2D_ARRAY]=Se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=Se(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),he(n.DEPTH_TEST),c.setFunc(bl),Ve(!1),M(o0),he(n.CULL_FACE),ge(Ji);function he(b){h[b]!==!0&&(n.enable(b),h[b]=!0)}function rt(b){h[b]!==!1&&(n.disable(b),h[b]=!1)}function Fe(b,ee){return m[b]!==ee?(n.bindFramebuffer(b,ee),m[b]=ee,i&&(b===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ee),b===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ee)),!0):!1}function P(b,ee){let te=_,de=!1;if(b)if(te=g.get(ee),te===void 0&&(te=[],g.set(ee,te)),b.isWebGLMultipleRenderTargets){let Me=b.texture;if(te.length!==Me.length||te[0]!==n.COLOR_ATTACHMENT0){for(let dt=0,vt=Me.length;dt<vt;dt++)te[dt]=n.COLOR_ATTACHMENT0+dt;te.length=Me.length,de=!0}}else te[0]!==n.COLOR_ATTACHMENT0&&(te[0]=n.COLOR_ATTACHMENT0,de=!0);else te[0]!==n.BACK&&(te[0]=n.BACK,de=!0);de&&(t.isWebGL2?n.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function Gt(b){return p!==b?(n.useProgram(b),p=b,!0):!1}let xe={[Pr]:n.FUNC_ADD,[sA]:n.FUNC_SUBTRACT,[oA]:n.FUNC_REVERSE_SUBTRACT};if(i)xe[u0]=n.MIN,xe[d0]=n.MAX;else{let b=e.get("EXT_blend_minmax");b!==null&&(xe[u0]=b.MIN_EXT,xe[d0]=b.MAX_EXT)}let Ie={[aA]:n.ZERO,[cA]:n.ONE,[lA]:n.SRC_COLOR,[Of]:n.SRC_ALPHA,[mA]:n.SRC_ALPHA_SATURATE,[fA]:n.DST_COLOR,[dA]:n.DST_ALPHA,[uA]:n.ONE_MINUS_SRC_COLOR,[Ff]:n.ONE_MINUS_SRC_ALPHA,[pA]:n.ONE_MINUS_DST_COLOR,[hA]:n.ONE_MINUS_DST_ALPHA,[gA]:n.CONSTANT_COLOR,[vA]:n.ONE_MINUS_CONSTANT_COLOR,[yA]:n.CONSTANT_ALPHA,[_A]:n.ONE_MINUS_CONSTANT_ALPHA};function ge(b,ee,te,de,Me,dt,vt,Wt,bn,yt){if(b===Ji){f===!0&&(rt(n.BLEND),f=!1);return}if(f===!1&&(he(n.BLEND),f=!0),b!==rA){if(b!==E||yt!==T){if((S!==Pr||A!==Pr)&&(n.blendEquation(n.FUNC_ADD),S=Pr,A=Pr),yt)switch(b){case Zs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case a0:n.blendFunc(n.ONE,n.ONE);break;case c0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case l0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case Zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case a0:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case c0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case l0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}w=null,I=null,C=null,G=null,ie.set(0,0,0),y=0,E=b,T=yt}return}Me=Me||ee,dt=dt||te,vt=vt||de,(ee!==S||Me!==A)&&(n.blendEquationSeparate(xe[ee],xe[Me]),S=ee,A=Me),(te!==w||de!==I||dt!==C||vt!==G)&&(n.blendFuncSeparate(Ie[te],Ie[de],Ie[dt],Ie[vt]),w=te,I=de,C=dt,G=vt),(Wt.equals(ie)===!1||bn!==y)&&(n.blendColor(Wt.r,Wt.g,Wt.b,bn),ie.copy(Wt),y=bn),E=b,T=!1}function Mt(b,ee){b.side===Di?rt(n.CULL_FACE):he(n.CULL_FACE);let te=b.side===gn;ee&&(te=!te),Ve(te),b.blending===Zs&&b.transparent===!1?ge(Ji):ge(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),c.setFunc(b.depthFunc),c.setTest(b.depthTest),c.setMask(b.depthWrite),a.setMask(b.colorWrite);let de=b.stencilWrite;l.setTest(de),de&&(l.setMask(b.stencilWriteMask),l.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),l.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),N(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(b){H!==b&&(b?n.frontFace(n.CW):n.frontFace(n.CCW),H=b)}function M(b){b!==tA?(he(n.CULL_FACE),b!==K&&(b===o0?n.cullFace(n.BACK):b===nA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):rt(n.CULL_FACE),K=b}function v(b){b!==D&&(z&&n.lineWidth(b),D=b)}function N(b,ee,te){b?(he(n.POLYGON_OFFSET_FILL),(V!==ee||k!==te)&&(n.polygonOffset(ee,te),V=ee,k=te)):rt(n.POLYGON_OFFSET_FILL)}function J(b){b?he(n.SCISSOR_TEST):rt(n.SCISSOR_TEST)}function q(b){b===void 0&&(b=n.TEXTURE0+$-1),Q!==b&&(n.activeTexture(b),Q=b)}function Z(b,ee,te){te===void 0&&(Q===null?te=n.TEXTURE0+$-1:te=Q);let de=re[te];de===void 0&&(de={type:void 0,texture:void 0},re[te]=de),(de.type!==b||de.texture!==ee)&&(Q!==te&&(n.activeTexture(te),Q=te),n.bindTexture(b,ee||be[b]),de.type=b,de.texture=ee)}function fe(){let b=re[Q];b!==void 0&&b.type!==void 0&&(n.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ce(){try{n.compressedTexImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ee(){try{n.texSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function We(){try{n.texSubImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function X(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ht(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ye(){try{n.texStorage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Re(){try{n.texStorage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function le(){try{n.texImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ze(b){Y.equals(b)===!1&&(n.scissor(b.x,b.y,b.z,b.w),Y.copy(b))}function ut(b){ae.equals(b)===!1&&(n.viewport(b.x,b.y,b.z,b.w),ae.copy(b))}function _t(b,ee){let te=d.get(ee);te===void 0&&(te=new WeakMap,d.set(ee,te));let de=te.get(b);de===void 0&&(de=n.getUniformBlockIndex(ee,b.name),te.set(b,de))}function Ze(b,ee){let de=d.get(ee).get(b);u.get(ee)!==de&&(n.uniformBlockBinding(ee,de,b.__bindingPointIndex),u.set(ee,de))}function mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Q=null,re={},m={},g=new WeakMap,_=[],p=null,f=!1,E=null,S=null,w=null,I=null,A=null,C=null,G=null,ie=new ct(0,0,0),y=0,T=!1,H=null,K=null,D=null,V=null,k=null,Y.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:he,disable:rt,bindFramebuffer:Fe,drawBuffers:P,useProgram:Gt,setBlending:ge,setMaterial:Mt,setFlipSided:Ve,setCullFace:M,setLineWidth:v,setPolygonOffset:N,setScissorTest:J,activeTexture:q,bindTexture:Z,unbindTexture:fe,compressedTexImage2D:se,compressedTexImage3D:ce,texImage2D:ye,texImage3D:le,updateUBOMapping:_t,uniformBlockBinding:Ze,texStorage2D:Ye,texStorage3D:Re,texSubImage2D:Ee,texSubImage3D:We,compressedTexSubImage2D:X,compressedTexSubImage3D:ht,scissor:ze,viewport:ut,reset:mt}}function GP(n,e,t,i,r,s,o){let a=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,d,h=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,v){return m?new OffscreenCanvas(M,v):Il("canvas")}function _(M,v,N,J){let q=1;if((M.width>J||M.height>J)&&(q=J/Math.max(M.width,M.height)),q<1||v===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){let Z=v?Gf:Math.floor,fe=Z(q*M.width),se=Z(q*M.height);d===void 0&&(d=g(fe,se));let ce=N?g(fe,se):d;return ce.width=fe,ce.height=se,ce.getContext("2d").drawImage(M,0,0,fe,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+fe+"x"+se+")."),ce}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function p(M){return j0(M.width)&&j0(M.height)}function f(M){return a?!1:M.wrapS!==Xn||M.wrapT!==Xn||M.minFilter!==on&&M.minFilter!==pn}function E(M,v){return M.generateMipmaps&&v&&M.minFilter!==on&&M.minFilter!==pn}function S(M){n.generateMipmap(M)}function w(M,v,N,J,q=!1){if(a===!1)return v;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Z=v;if(v===n.RED&&(N===n.FLOAT&&(Z=n.R32F),N===n.HALF_FLOAT&&(Z=n.R16F),N===n.UNSIGNED_BYTE&&(Z=n.R8)),v===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(Z=n.R8UI),N===n.UNSIGNED_SHORT&&(Z=n.R16UI),N===n.UNSIGNED_INT&&(Z=n.R32UI),N===n.BYTE&&(Z=n.R8I),N===n.SHORT&&(Z=n.R16I),N===n.INT&&(Z=n.R32I)),v===n.RG&&(N===n.FLOAT&&(Z=n.RG32F),N===n.HALF_FLOAT&&(Z=n.RG16F),N===n.UNSIGNED_BYTE&&(Z=n.RG8)),v===n.RGBA){let fe=q?Tl:pt.getTransfer(J);N===n.FLOAT&&(Z=n.RGBA32F),N===n.HALF_FLOAT&&(Z=n.RGBA16F),N===n.UNSIGNED_BYTE&&(Z=fe===xt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function I(M,v,N){return E(M,N)===!0||M.isFramebufferTexture&&M.minFilter!==on&&M.minFilter!==pn?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function A(M){return M===on||M===f0||M===aa?n.NEAREST:n.LINEAR}function C(M){let v=M.target;v.removeEventListener("dispose",C),ie(v),v.isVideoTexture&&u.delete(v)}function G(M){let v=M.target;v.removeEventListener("dispose",G),T(v)}function ie(M){let v=i.get(M);if(v.__webglInit===void 0)return;let N=M.source,J=h.get(N);if(J){let q=J[v.__cacheKey];q.usedTimes--,q.usedTimes===0&&y(M),Object.keys(J).length===0&&h.delete(N)}i.remove(M)}function y(M){let v=i.get(M);n.deleteTexture(v.__webglTexture);let N=M.source,J=h.get(N);delete J[v.__cacheKey],o.memory.textures--}function T(M){let v=M.texture,N=i.get(M),J=i.get(v);if(J.__webglTexture!==void 0&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(N.__webglFramebuffer[q]))for(let Z=0;Z<N.__webglFramebuffer[q].length;Z++)n.deleteFramebuffer(N.__webglFramebuffer[q][Z]);else n.deleteFramebuffer(N.__webglFramebuffer[q]);N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[q])}else{if(Array.isArray(N.__webglFramebuffer))for(let q=0;q<N.__webglFramebuffer.length;q++)n.deleteFramebuffer(N.__webglFramebuffer[q]);else n.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let q=0;q<N.__webglColorRenderbuffer.length;q++)N.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[q]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let q=0,Z=v.length;q<Z;q++){let fe=i.get(v[q]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),o.memory.textures--),i.remove(v[q])}i.remove(v),i.remove(M)}let H=0;function K(){H=0}function D(){let M=H;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),H+=1,M}function V(M){let v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function k(M,v){let N=i.get(M);if(M.isVideoTexture&&Mt(M),M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){let J=M.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(N,M,v);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+v)}function $(M,v){let N=i.get(M);if(M.version>0&&N.__version!==M.version){Y(N,M,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+v)}function z(M,v){let N=i.get(M);if(M.version>0&&N.__version!==M.version){Y(N,M,v);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+v)}function W(M,v){let N=i.get(M);if(M.version>0&&N.__version!==M.version){ae(N,M,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+v)}let j={[Bf]:n.REPEAT,[Xn]:n.CLAMP_TO_EDGE,[Vf]:n.MIRRORED_REPEAT},Q={[on]:n.NEAREST,[f0]:n.NEAREST_MIPMAP_NEAREST,[aa]:n.NEAREST_MIPMAP_LINEAR,[pn]:n.LINEAR,[rf]:n.LINEAR_MIPMAP_NEAREST,[Lr]:n.LINEAR_MIPMAP_LINEAR},re={[qA]:n.NEVER,[QA]:n.ALWAYS,[XA]:n.LESS,[z_]:n.LEQUAL,[YA]:n.EQUAL,[KA]:n.GEQUAL,[ZA]:n.GREATER,[JA]:n.NOTEQUAL};function De(M,v,N){if(v.type===Ii&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===pn||v.magFilter===rf||v.magFilter===aa||v.magFilter===Lr||v.minFilter===pn||v.minFilter===rf||v.minFilter===aa||v.minFilter===Lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),N?(n.texParameteri(M,n.TEXTURE_WRAP_S,j[v.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,j[v.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,j[v.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,Q[v.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,Q[v.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==Xn||v.wrapT!==Xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,A(v.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,A(v.minFilter)),v.minFilter!==on&&v.minFilter!==pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,re[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let J=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===on||v.minFilter!==aa&&v.minFilter!==Lr||v.type===Ii&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===pa&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(M,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function B(M,v){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",C));let J=v.source,q=h.get(J);q===void 0&&(q={},h.set(J,q));let Z=V(v);if(Z!==M.__cacheKey){q[Z]===void 0&&(q[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),q[Z].usedTimes++;let fe=q[M.__cacheKey];fe!==void 0&&(q[M.__cacheKey].usedTimes--,fe.usedTimes===0&&y(v)),M.__cacheKey=Z,M.__webglTexture=q[Z].texture}return N}function Y(M,v,N){let J=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=n.TEXTURE_3D);let q=B(M,v),Z=v.source;t.bindTexture(J,M.__webglTexture,n.TEXTURE0+N);let fe=i.get(Z);if(Z.version!==fe.__version||q===!0){t.activeTexture(n.TEXTURE0+N);let se=pt.getPrimaries(pt.workingColorSpace),ce=v.colorSpace===On?null:pt.getPrimaries(v.colorSpace),Ee=v.colorSpace===On||se===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let We=f(v)&&p(v.image)===!1,X=_(v.image,We,!1,r.maxTextureSize);X=Ve(v,X);let ht=p(X)||a,Ye=s.convert(v.format,v.colorSpace),Re=s.convert(v.type),ye=w(v.internalFormat,Ye,Re,v.colorSpace,v.isVideoTexture);De(J,v,ht);let le,ze=v.mipmaps,ut=a&&v.isVideoTexture!==!0&&ye!==B_,_t=fe.__version===void 0||q===!0,Ze=Z.dataReady,mt=I(v,X,ht);if(v.isDepthTexture)ye=n.DEPTH_COMPONENT,a?v.type===Ii?ye=n.DEPTH_COMPONENT32F:v.type===Zi?ye=n.DEPTH_COMPONENT24:v.type===Or?ye=n.DEPTH24_STENCIL8:ye=n.DEPTH_COMPONENT16:v.type===Ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Fr&&ye===n.DEPTH_COMPONENT&&v.type!==vp&&v.type!==Zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Zi,Re=s.convert(v.type)),v.format===no&&ye===n.DEPTH_COMPONENT&&(ye=n.DEPTH_STENCIL,v.type!==Or&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Or,Re=s.convert(v.type))),_t&&(ut?t.texStorage2D(n.TEXTURE_2D,1,ye,X.width,X.height):t.texImage2D(n.TEXTURE_2D,0,ye,X.width,X.height,0,Ye,Re,null));else if(v.isDataTexture)if(ze.length>0&&ht){ut&&_t&&t.texStorage2D(n.TEXTURE_2D,mt,ye,ze[0].width,ze[0].height);for(let b=0,ee=ze.length;b<ee;b++)le=ze[b],ut?Ze&&t.texSubImage2D(n.TEXTURE_2D,b,0,0,le.width,le.height,Ye,Re,le.data):t.texImage2D(n.TEXTURE_2D,b,ye,le.width,le.height,0,Ye,Re,le.data);v.generateMipmaps=!1}else ut?(_t&&t.texStorage2D(n.TEXTURE_2D,mt,ye,X.width,X.height),Ze&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,X.width,X.height,Ye,Re,X.data)):t.texImage2D(n.TEXTURE_2D,0,ye,X.width,X.height,0,Ye,Re,X.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ut&&_t&&t.texStorage3D(n.TEXTURE_2D_ARRAY,mt,ye,ze[0].width,ze[0].height,X.depth);for(let b=0,ee=ze.length;b<ee;b++)le=ze[b],v.format!==Yn?Ye!==null?ut?Ze&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,b,0,0,0,le.width,le.height,X.depth,Ye,le.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,b,ye,le.width,le.height,X.depth,0,le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?Ze&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,b,0,0,0,le.width,le.height,X.depth,Ye,Re,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,b,ye,le.width,le.height,X.depth,0,Ye,Re,le.data)}else{ut&&_t&&t.texStorage2D(n.TEXTURE_2D,mt,ye,ze[0].width,ze[0].height);for(let b=0,ee=ze.length;b<ee;b++)le=ze[b],v.format!==Yn?Ye!==null?ut?Ze&&t.compressedTexSubImage2D(n.TEXTURE_2D,b,0,0,le.width,le.height,Ye,le.data):t.compressedTexImage2D(n.TEXTURE_2D,b,ye,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?Ze&&t.texSubImage2D(n.TEXTURE_2D,b,0,0,le.width,le.height,Ye,Re,le.data):t.texImage2D(n.TEXTURE_2D,b,ye,le.width,le.height,0,Ye,Re,le.data)}else if(v.isDataArrayTexture)ut?(_t&&t.texStorage3D(n.TEXTURE_2D_ARRAY,mt,ye,X.width,X.height,X.depth),Ze&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,Ye,Re,X.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,X.width,X.height,X.depth,0,Ye,Re,X.data);else if(v.isData3DTexture)ut?(_t&&t.texStorage3D(n.TEXTURE_3D,mt,ye,X.width,X.height,X.depth),Ze&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,Ye,Re,X.data)):t.texImage3D(n.TEXTURE_3D,0,ye,X.width,X.height,X.depth,0,Ye,Re,X.data);else if(v.isFramebufferTexture){if(_t)if(ut)t.texStorage2D(n.TEXTURE_2D,mt,ye,X.width,X.height);else{let b=X.width,ee=X.height;for(let te=0;te<mt;te++)t.texImage2D(n.TEXTURE_2D,te,ye,b,ee,0,Ye,Re,null),b>>=1,ee>>=1}}else if(ze.length>0&&ht){ut&&_t&&t.texStorage2D(n.TEXTURE_2D,mt,ye,ze[0].width,ze[0].height);for(let b=0,ee=ze.length;b<ee;b++)le=ze[b],ut?Ze&&t.texSubImage2D(n.TEXTURE_2D,b,0,0,Ye,Re,le):t.texImage2D(n.TEXTURE_2D,b,ye,Ye,Re,le);v.generateMipmaps=!1}else ut?(_t&&t.texStorage2D(n.TEXTURE_2D,mt,ye,X.width,X.height),Ze&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ye,Re,X)):t.texImage2D(n.TEXTURE_2D,0,ye,Ye,Re,X);E(v,ht)&&S(J),fe.__version=Z.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ae(M,v,N){if(v.image.length!==6)return;let J=B(M,v),q=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+N);let Z=i.get(q);if(q.version!==Z.__version||J===!0){t.activeTexture(n.TEXTURE0+N);let fe=pt.getPrimaries(pt.workingColorSpace),se=v.colorSpace===On?null:pt.getPrimaries(v.colorSpace),ce=v.colorSpace===On||fe===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let Ee=v.isCompressedTexture||v.image[0].isCompressedTexture,We=v.image[0]&&v.image[0].isDataTexture,X=[];for(let b=0;b<6;b++)!Ee&&!We?X[b]=_(v.image[b],!1,!0,r.maxCubemapSize):X[b]=We?v.image[b].image:v.image[b],X[b]=Ve(v,X[b]);let ht=X[0],Ye=p(ht)||a,Re=s.convert(v.format,v.colorSpace),ye=s.convert(v.type),le=w(v.internalFormat,Re,ye,v.colorSpace),ze=a&&v.isVideoTexture!==!0,ut=Z.__version===void 0||J===!0,_t=q.dataReady,Ze=I(v,ht,Ye);De(n.TEXTURE_CUBE_MAP,v,Ye);let mt;if(Ee){ze&&ut&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ze,le,ht.width,ht.height);for(let b=0;b<6;b++){mt=X[b].mipmaps;for(let ee=0;ee<mt.length;ee++){let te=mt[ee];v.format!==Yn?Re!==null?ze?_t&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+b,ee,0,0,te.width,te.height,Re,te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+b,ee,le,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?_t&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+b,ee,0,0,te.width,te.height,Re,ye,te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+b,ee,le,te.width,te.height,0,Re,ye,te.data)}}}else{mt=v.mipmaps,ze&&ut&&(mt.length>0&&Ze++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ze,le,X[0].width,X[0].height));for(let b=0;b<6;b++)if(We){ze?_t&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,0,0,X[b].width,X[b].height,Re,ye,X[b].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,le,X[b].width,X[b].height,0,Re,ye,X[b].data);for(let ee=0;ee<mt.length;ee++){let de=mt[ee].image[b].image;ze?_t&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+b,ee+1,0,0,de.width,de.height,Re,ye,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+b,ee+1,le,de.width,de.height,0,Re,ye,de.data)}}else{ze?_t&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,0,0,Re,ye,X[b]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,le,Re,ye,X[b]);for(let ee=0;ee<mt.length;ee++){let te=mt[ee];ze?_t&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+b,ee+1,0,0,Re,ye,te.image[b]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+b,ee+1,le,Re,ye,te.image[b])}}}E(v,Ye)&&S(n.TEXTURE_CUBE_MAP),Z.__version=q.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function Se(M,v,N,J,q,Z){let fe=s.convert(N.format,N.colorSpace),se=s.convert(N.type),ce=w(N.internalFormat,fe,se,N.colorSpace);if(!i.get(v).__hasExternalTextures){let We=Math.max(1,v.width>>Z),X=Math.max(1,v.height>>Z);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?t.texImage3D(q,Z,ce,We,X,v.depth,0,fe,se,null):t.texImage2D(q,Z,ce,We,X,0,fe,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),ge(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,q,i.get(N).__webglTexture,0,Ie(v)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,q,i.get(N).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function be(M,v,N){if(n.bindRenderbuffer(n.RENDERBUFFER,M),v.depthBuffer&&!v.stencilBuffer){let J=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(N||ge(v)){let q=v.depthTexture;q&&q.isDepthTexture&&(q.type===Ii?J=n.DEPTH_COMPONENT32F:q.type===Zi&&(J=n.DEPTH_COMPONENT24));let Z=Ie(v);ge(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Z,J,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,J,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,J,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(v.depthBuffer&&v.stencilBuffer){let J=Ie(v);N&&ge(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,v.width,v.height):ge(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{let J=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let q=0;q<J.length;q++){let Z=J[q],fe=s.convert(Z.format,Z.colorSpace),se=s.convert(Z.type),ce=w(Z.internalFormat,fe,se,Z.colorSpace),Ee=Ie(v);N&&ge(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,ce,v.width,v.height):ge(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,ce,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ce,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),k(v.depthTexture,0);let J=i.get(v.depthTexture).__webglTexture,q=Ie(v);if(v.depthTexture.format===Fr)ge(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(v.depthTexture.format===no)ge(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function rt(M){let v=i.get(M),N=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");he(v.__webglFramebuffer,M)}else if(N){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]=n.createRenderbuffer(),be(v.__webglDepthbuffer[J],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),be(v.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(M,v,N){let J=i.get(M);v!==void 0&&Se(J.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&rt(M)}function P(M){let v=M.texture,N=i.get(M),J=i.get(v);M.addEventListener("dispose",G),M.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=v.version,o.memory.textures++);let q=M.isWebGLCubeRenderTarget===!0,Z=M.isWebGLMultipleRenderTargets===!0,fe=p(M)||a;if(q){N.__webglFramebuffer=[];for(let se=0;se<6;se++)if(a&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[se]=[];for(let ce=0;ce<v.mipmaps.length;ce++)N.__webglFramebuffer[se][ce]=n.createFramebuffer()}else N.__webglFramebuffer[se]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)N.__webglFramebuffer[se]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(Z)if(r.drawBuffers){let se=M.texture;for(let ce=0,Ee=se.length;ce<Ee;ce++){let We=i.get(se[ce]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&ge(M)===!1){let se=Z?v:[v];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ce=0;ce<se.length;ce++){let Ee=se[ce];N.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ce]);let We=s.convert(Ee.format,Ee.colorSpace),X=s.convert(Ee.type),ht=w(Ee.internalFormat,We,X,Ee.colorSpace,M.isXRRenderTarget===!0),Ye=Ie(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,ht,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,N.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),be(N.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),De(n.TEXTURE_CUBE_MAP,v,fe);for(let se=0;se<6;se++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let ce=0;ce<v.mipmaps.length;ce++)Se(N.__webglFramebuffer[se][ce],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ce);else Se(N.__webglFramebuffer[se],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);E(v,fe)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Z){let se=M.texture;for(let ce=0,Ee=se.length;ce<Ee;ce++){let We=se[ce],X=i.get(We);t.bindTexture(n.TEXTURE_2D,X.__webglTexture),De(n.TEXTURE_2D,We,fe),Se(N.__webglFramebuffer,M,We,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),E(We,fe)&&S(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?se=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,J.__webglTexture),De(se,v,fe),a&&v.mipmaps&&v.mipmaps.length>0)for(let ce=0;ce<v.mipmaps.length;ce++)Se(N.__webglFramebuffer[ce],M,v,n.COLOR_ATTACHMENT0,se,ce);else Se(N.__webglFramebuffer,M,v,n.COLOR_ATTACHMENT0,se,0);E(v,fe)&&S(se),t.unbindTexture()}M.depthBuffer&&rt(M)}function Gt(M){let v=p(M)||a,N=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let J=0,q=N.length;J<q;J++){let Z=N[J];if(E(Z,v)){let fe=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,se=i.get(Z).__webglTexture;t.bindTexture(fe,se),S(fe),t.unbindTexture()}}}function xe(M){if(a&&M.samples>0&&ge(M)===!1){let v=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],N=M.width,J=M.height,q=n.COLOR_BUFFER_BIT,Z=[],fe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(M),ce=M.isWebGLMultipleRenderTargets===!0;if(ce)for(let Ee=0;Ee<v.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let Ee=0;Ee<v.length;Ee++){Z.push(n.COLOR_ATTACHMENT0+Ee),M.depthBuffer&&Z.push(fe);let We=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(We===!1&&(M.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),ce&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[Ee]),We===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[fe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[fe])),ce){let X=i.get(v[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,X,0)}n.blitFramebuffer(0,0,N,J,0,0,N,J,q,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Z)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let Ee=0;Ee<v.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,se.__webglColorRenderbuffer[Ee]);let We=i.get(v[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,We,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function Ie(M){return Math.min(r.maxSamples,M.samples)}function ge(M){let v=i.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Mt(M){let v=o.render.frame;u.get(M)!==v&&(u.set(M,v),M.update())}function Ve(M,v){let N=M.colorSpace,J=M.format,q=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===zf||N!==Ni&&N!==On&&(pt.getTransfer(N)===xt?a===!1?e.has("EXT_sRGB")===!0&&J===Yn?(M.format=zf,M.minFilter=pn,M.generateMipmaps=!1):v=Rl.sRGBToLinear(v):(J!==Yn||q!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}this.allocateTextureUnit=D,this.resetTextureUnits=K,this.setTexture2D=k,this.setTexture2DArray=$,this.setTexture3D=z,this.setTextureCube=W,this.rebindTextures=Fe,this.setupRenderTarget=P,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ge}function WP(n,e,t){let i=t.isWebGL2;function r(s,o=On){let a,c=pt.getTransfer(o);if(s===Qi)return n.UNSIGNED_BYTE;if(s===L_)return n.UNSIGNED_SHORT_4_4_4_4;if(s===O_)return n.UNSIGNED_SHORT_5_5_5_1;if(s===OA)return n.BYTE;if(s===FA)return n.SHORT;if(s===vp)return n.UNSIGNED_SHORT;if(s===N_)return n.INT;if(s===Zi)return n.UNSIGNED_INT;if(s===Ii)return n.FLOAT;if(s===pa)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===UA)return n.ALPHA;if(s===Yn)return n.RGBA;if(s===kA)return n.LUMINANCE;if(s===BA)return n.LUMINANCE_ALPHA;if(s===Fr)return n.DEPTH_COMPONENT;if(s===no)return n.DEPTH_STENCIL;if(s===zf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===VA)return n.RED;if(s===F_)return n.RED_INTEGER;if(s===zA)return n.RG;if(s===U_)return n.RG_INTEGER;if(s===k_)return n.RGBA_INTEGER;if(s===sf||s===of||s===af||s===cf)if(c===xt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===sf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===of)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===af)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===cf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===sf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===of)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===af)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===cf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===p0||s===m0||s===g0||s===v0)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===p0)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===m0)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===g0)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===v0)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===B_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===y0||s===_0)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===y0)return c===xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===_0)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===x0||s===M0||s===S0||s===b0||s===w0||s===E0||s===T0||s===C0||s===A0||s===D0||s===I0||s===R0||s===P0||s===N0)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===x0)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===M0)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===S0)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===b0)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===w0)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===E0)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===T0)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===C0)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===A0)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===D0)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===I0)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===R0)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===P0)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===N0)return c===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===lf||s===L0||s===O0)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===lf)return c===xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===L0)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===O0)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===HA||s===F0||s===U0||s===k0)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===lf)return a.COMPRESSED_RED_RGTC1_EXT;if(s===F0)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===U0)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===k0)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Or?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}var rp=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ys=class extends ao{constructor(){super(),this.isGroup=!0,this.type="Group"}},jP={type:"move"},fa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,i),f=this._getHandJoint(l,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&h>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jP)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ys;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},$P=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,sp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Gr,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){let i=t.cameras[0].viewport,r=new di({extensions:{fragDepth:!0},vertexShader:$P,fragmentShader:qP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Sn(new Vl(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},op=class extends tr{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,m=null,g=null,_=new sp,p=t.getContextAttributes(),f=null,E=null,S=[],w=[],I=new lt,A=null,C=new an;C.layers.enable(1),C.viewport=new Yt;let G=new an;G.layers.enable(2),G.viewport=new Yt;let ie=[C,G],y=new rp;y.layers.enable(1),y.layers.enable(2);let T=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Y=S[B];return Y===void 0&&(Y=new fa,S[B]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(B){let Y=S[B];return Y===void 0&&(Y=new fa,S[B]=Y),Y.getGripSpace()},this.getHand=function(B){let Y=S[B];return Y===void 0&&(Y=new fa,S[B]=Y),Y.getHandSpace()};function K(B){let Y=w.indexOf(B.inputSource);if(Y===-1)return;let ae=S[Y];ae!==void 0&&(ae.update(B.inputSource,B.frame,l||o),ae.dispatchEvent({type:B.type,data:B.inputSource}))}function D(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",V);for(let B=0;B<S.length;B++){let Y=w[B];Y!==null&&(w[B]=null,S[B].disconnect(Y))}T=null,H=null,_.reset(),e.setRenderTarget(f),m=null,h=null,d=null,r=null,E=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(B){return Jl(this,null,function*(){if(r=B,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",D),r.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&(yield t.makeXRCompatible()),A=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Y={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Li(m.framebufferWidth,m.framebufferHeight,{format:Yn,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Y=null,ae=null,Se=null;p.depth&&(Se=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=p.stencil?no:Fr,ae=p.stencil?Or:Zi);let be={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(be),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new Li(h.textureWidth,h.textureHeight,{format:Yn,type:Qi,depthTexture:new Hl(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});let he=e.properties.get(E);he.__ignoreDepthValues=h.ignoreDepthValues}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function V(B){for(let Y=0;Y<B.removed.length;Y++){let ae=B.removed[Y],Se=w.indexOf(ae);Se>=0&&(w[Se]=null,S[Se].disconnect(ae))}for(let Y=0;Y<B.added.length;Y++){let ae=B.added[Y],Se=w.indexOf(ae);if(Se===-1){for(let he=0;he<S.length;he++)if(he>=w.length){w.push(ae),Se=he;break}else if(w[he]===null){w[he]=ae,Se=he;break}if(Se===-1)break}let be=S[Se];be&&be.connect(ae)}}let k=new F,$=new F;function z(B,Y,ae){k.setFromMatrixPosition(Y.matrixWorld),$.setFromMatrixPosition(ae.matrixWorld);let Se=k.distanceTo($),be=Y.projectionMatrix.elements,he=ae.projectionMatrix.elements,rt=be[14]/(be[10]-1),Fe=be[14]/(be[10]+1),P=(be[9]+1)/be[5],Gt=(be[9]-1)/be[5],xe=(be[8]-1)/be[0],Ie=(he[8]+1)/he[0],ge=rt*xe,Mt=rt*Ie,Ve=Se/(-xe+Ie),M=Ve*-xe;Y.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(M),B.translateZ(Ve),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();let v=rt+Ve,N=Fe+Ve,J=ge-M,q=Mt+(Se-M),Z=P*Fe/N*v,fe=Gt*Fe/N*v;B.projectionMatrix.makePerspective(J,q,Z,fe,v,N),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function W(B,Y){Y===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Y.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;_.texture!==null&&(B.near=_.depthNear,B.far=_.depthFar),y.near=G.near=C.near=B.near,y.far=G.far=C.far=B.far,(T!==y.near||H!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,H=y.far,C.near=T,C.far=H,G.near=T,G.far=H,C.updateProjectionMatrix(),G.updateProjectionMatrix(),B.updateProjectionMatrix());let Y=B.parent,ae=y.cameras;W(y,Y);for(let Se=0;Se<ae.length;Se++)W(ae[Se],Y);ae.length===2?z(y,C,G):y.projectionMatrix.copy(C.projectionMatrix),j(B,y,Y)};function j(B,Y,ae){ae===null?B.matrix.copy(Y.matrixWorld):(B.matrix.copy(ae.matrixWorld),B.matrix.invert(),B.matrix.multiply(Y.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Y.projectionMatrix),B.projectionMatrixInverse.copy(Y.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Hf*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(B){c=B,h!==null&&(h.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.hasDepthSensing=function(){return _.texture!==null};let Q=null;function re(B,Y){if(u=Y.getViewerPose(l||o),g=Y,u!==null){let ae=u.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Se=!1;ae.length!==y.cameras.length&&(y.cameras.length=0,Se=!0);for(let he=0;he<ae.length;he++){let rt=ae[he],Fe=null;if(m!==null)Fe=m.getViewport(rt);else{let Gt=d.getViewSubImage(h,rt);Fe=Gt.viewport,he===0&&(e.setRenderTargetTextures(E,Gt.colorTexture,h.ignoreDepthValues?void 0:Gt.depthStencilTexture),e.setRenderTarget(E))}let P=ie[he];P===void 0&&(P=new an,P.layers.enable(he),P.viewport=new Yt,ie[he]=P),P.matrix.fromArray(rt.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(rt.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),he===0&&(y.matrix.copy(P.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Se===!0&&y.cameras.push(P)}let be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){let he=d.getDepthInformation(ae[0]);he&&he.isValid&&he.texture&&_.init(e,he,r.renderState)}}for(let ae=0;ae<S.length;ae++){let Se=w[ae],be=S[ae];Se!==null&&be!==void 0&&be.update(Se,Y,l||o)}_.render(e,y),Q&&Q(B,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}let De=new j_;De.setAnimationLoop(re),this.setAnimationLoop=function(B){Q=B},this.dispose=function(){}}};function XP(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,W_(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,E,S,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,w)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),_(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,E,S):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===gn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===gn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let E=e.get(f).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let S=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*S,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,E,S){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=S*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===gn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){let E=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function YP(n,e,t,i){let r={},s={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(E,S){let w=S.program;i.uniformBlockBinding(E,w)}function l(E,S){let w=r[E.id];w===void 0&&(g(E),w=u(E),r[E.id]=w,E.addEventListener("dispose",p));let I=S.program;i.updateUBOMapping(E,I);let A=e.render.frame;s[E.id]!==A&&(h(E),s[E.id]=A)}function u(E){let S=d();E.__bindingPointIndex=S;let w=n.createBuffer(),I=E.__size,A=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,I,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,w),w}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){let S=r[E.id],w=E.uniforms,I=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let A=0,C=w.length;A<C;A++){let G=Array.isArray(w[A])?w[A]:[w[A]];for(let ie=0,y=G.length;ie<y;ie++){let T=G[ie];if(m(T,A,ie,I)===!0){let H=T.__offset,K=Array.isArray(T.value)?T.value:[T.value],D=0;for(let V=0;V<K.length;V++){let k=K[V],$=_(k);typeof k=="number"||typeof k=="boolean"?(T.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,H+D,T.__data)):k.isMatrix3?(T.__data[0]=k.elements[0],T.__data[1]=k.elements[1],T.__data[2]=k.elements[2],T.__data[3]=0,T.__data[4]=k.elements[3],T.__data[5]=k.elements[4],T.__data[6]=k.elements[5],T.__data[7]=0,T.__data[8]=k.elements[6],T.__data[9]=k.elements[7],T.__data[10]=k.elements[8],T.__data[11]=0):(k.toArray(T.__data,D),D+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,S,w,I){let A=E.value,C=S+"_"+w;if(I[C]===void 0)return typeof A=="number"||typeof A=="boolean"?I[C]=A:I[C]=A.clone(),!0;{let G=I[C];if(typeof A=="number"||typeof A=="boolean"){if(G!==A)return I[C]=A,!0}else if(G.equals(A)===!1)return G.copy(A),!0}return!1}function g(E){let S=E.uniforms,w=0,I=16;for(let C=0,G=S.length;C<G;C++){let ie=Array.isArray(S[C])?S[C]:[S[C]];for(let y=0,T=ie.length;y<T;y++){let H=ie[y],K=Array.isArray(H.value)?H.value:[H.value];for(let D=0,V=K.length;D<V;D++){let k=K[D],$=_(k),z=w%I;z!==0&&I-z<$.boundary&&(w+=I-z),H.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=w,w+=$.storage}}}let A=w%I;return A>0&&(w+=I-A),E.__size=w,E.__cache={},this}function _(E){let S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function p(E){let S=E.target;S.removeEventListener("dispose",p);let w=o.indexOf(S.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function f(){for(let E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}var ga=class{constructor(e={}){let{canvas:t=tD(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,p=null,f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this._useLegacyLights=!1,this.toneMapping=Ki,this.toneMappingExposure=1;let S=this,w=!1,I=0,A=0,C=null,G=-1,ie=null,y=new Yt,T=new Yt,H=null,K=new ct(0),D=0,V=t.width,k=t.height,$=1,z=null,W=null,j=new Yt(0,0,V,k),Q=new Yt(0,0,V,k),re=!1,De=new Bl,B=!1,Y=!1,ae=null,Se=new Qt,be=new lt,he=new F,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return C===null?$:1}let P=i;function Gt(x,R){for(let O=0;O<x.length;O++){let U=x[O],L=t.getContext(U,R);if(L!==null)return L}return null}try{let x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gp}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",b,!1),t.addEventListener("webglcontextcreationerror",ee,!1),P===null){let R=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&R.shift(),P=Gt(R,x),P===null)throw Gt(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let xe,Ie,ge,Mt,Ve,M,v,N,J,q,Z,fe,se,ce,Ee,We,X,ht,Ye,Re,ye,le,ze,ut;function _t(){xe=new hR(P),Ie=new oR(P,xe,e),xe.init(Ie),le=new WP(P,xe,Ie),ge=new HP(P,xe,Ie),Mt=new mR(P),Ve=new IP,M=new GP(P,xe,ge,Ve,Ie,le,Mt),v=new cR(S),N=new dR(S),J=new bD(P,Ie),ze=new rR(P,xe,J,Ie),q=new fR(P,J,Mt,ze),Z=new _R(P,q,J,Mt),Ye=new yR(P,Ie,M),We=new aR(Ve),fe=new DP(S,v,N,xe,Ie,ze,We),se=new XP(S,Ve),ce=new PP,Ee=new kP(xe,Ie),ht=new iR(S,v,N,ge,Z,h,c),X=new zP(S,Z,Ie),ut=new YP(P,Mt,Ie,ge),Re=new sR(P,xe,Mt,Ie),ye=new pR(P,xe,Mt,Ie),Mt.programs=fe.programs,S.capabilities=Ie,S.extensions=xe,S.properties=Ve,S.renderLists=ce,S.shadowMap=X,S.state=ge,S.info=Mt}_t();let Ze=new op(S,P);this.xr=Ze,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let x=xe.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=xe.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(x){x!==void 0&&($=x,this.setSize(V,k,!1))},this.getSize=function(x){return x.set(V,k)},this.setSize=function(x,R,O=!0){if(Ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=x,k=R,t.width=Math.floor(x*$),t.height=Math.floor(R*$),O===!0&&(t.style.width=x+"px",t.style.height=R+"px"),this.setViewport(0,0,x,R)},this.getDrawingBufferSize=function(x){return x.set(V*$,k*$).floor()},this.setDrawingBufferSize=function(x,R,O){V=x,k=R,$=O,t.width=Math.floor(x*O),t.height=Math.floor(R*O),this.setViewport(0,0,x,R)},this.getCurrentViewport=function(x){return x.copy(y)},this.getViewport=function(x){return x.copy(j)},this.setViewport=function(x,R,O,U){x.isVector4?j.set(x.x,x.y,x.z,x.w):j.set(x,R,O,U),ge.viewport(y.copy(j).multiplyScalar($).floor())},this.getScissor=function(x){return x.copy(Q)},this.setScissor=function(x,R,O,U){x.isVector4?Q.set(x.x,x.y,x.z,x.w):Q.set(x,R,O,U),ge.scissor(T.copy(Q).multiplyScalar($).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(x){ge.setScissorTest(re=x)},this.setOpaqueSort=function(x){z=x},this.setTransparentSort=function(x){W=x},this.getClearColor=function(x){return x.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor.apply(ht,arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha.apply(ht,arguments)},this.clear=function(x=!0,R=!0,O=!0){let U=0;if(x){let L=!1;if(C!==null){let oe=C.texture.format;L=oe===k_||oe===U_||oe===F_}if(L){let oe=C.texture.type,me=oe===Qi||oe===Zi||oe===vp||oe===Or||oe===L_||oe===O_,we=ht.getClearColor(),Ce=ht.getClearAlpha(),je=we.r,Le=we.g,Ue=we.b;me?(m[0]=je,m[1]=Le,m[2]=Ue,m[3]=Ce,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=je,g[1]=Le,g[2]=Ue,g[3]=Ce,P.clearBufferiv(P.COLOR,0,g))}else U|=P.COLOR_BUFFER_BIT}R&&(U|=P.DEPTH_BUFFER_BIT),O&&(U|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",b,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),ce.dispose(),Ee.dispose(),Ve.dispose(),v.dispose(),N.dispose(),Z.dispose(),ze.dispose(),ut.dispose(),fe.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",bn),Ze.removeEventListener("sessionend",yt),ae&&(ae.dispose(),ae=null),en.stop()};function mt(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function b(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let x=Mt.autoReset,R=X.enabled,O=X.autoUpdate,U=X.needsUpdate,L=X.type;_t(),Mt.autoReset=x,X.enabled=R,X.autoUpdate=O,X.needsUpdate=U,X.type=L}function ee(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function te(x){let R=x.target;R.removeEventListener("dispose",te),de(R)}function de(x){Me(x),Ve.remove(x)}function Me(x){let R=Ve.get(x).programs;R!==void 0&&(R.forEach(function(O){fe.releaseProgram(O)}),x.isShaderMaterial&&fe.releaseShaderCache(x))}this.renderBufferDirect=function(x,R,O,U,L,oe){R===null&&(R=rt);let me=L.isMesh&&L.matrixWorld.determinant()<0,we=sx(x,R,O,U,L);ge.setMaterial(U,me);let Ce=O.index,je=1;if(U.wireframe===!0){if(Ce=q.getWireframeAttribute(O),Ce===void 0)return;je=2}let Le=O.drawRange,Ue=O.attributes.position,Ct=Le.start*je,vn=(Le.start+Le.count)*je;oe!==null&&(Ct=Math.max(Ct,oe.start*je),vn=Math.min(vn,(oe.start+oe.count)*je)),Ce!==null?(Ct=Math.max(Ct,0),vn=Math.min(vn,Ce.count)):Ue!=null&&(Ct=Math.max(Ct,0),vn=Math.min(vn,Ue.count));let Ft=vn-Ct;if(Ft<0||Ft===1/0)return;ze.setup(L,U,we,O,Ce);let hi,St=Re;if(Ce!==null&&(hi=J.get(Ce),St=ye,St.setIndex(hi)),L.isMesh)U.wireframe===!0?(ge.setLineWidth(U.wireframeLinewidth*Fe()),St.setMode(P.LINES)):St.setMode(P.TRIANGLES);else if(L.isLine){let $e=U.linewidth;$e===void 0&&($e=1),ge.setLineWidth($e*Fe()),L.isLineSegments?St.setMode(P.LINES):L.isLineLoop?St.setMode(P.LINE_LOOP):St.setMode(P.LINE_STRIP)}else L.isPoints?St.setMode(P.POINTS):L.isSprite&&St.setMode(P.TRIANGLES);if(L.isBatchedMesh)St.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else if(L.isInstancedMesh)St.renderInstances(Ct,Ft,L.count);else if(O.isInstancedBufferGeometry){let $e=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,ql=Math.min(O.instanceCount,$e);St.renderInstances(Ct,Ft,ql)}else St.render(Ct,Ft)};function dt(x,R,O){x.transparent===!0&&x.side===Di&&x.forceSinglePass===!1?(x.side=gn,x.needsUpdate=!0,xa(x,R,O),x.side=er,x.needsUpdate=!0,xa(x,R,O),x.side=Di):xa(x,R,O)}this.compile=function(x,R,O=null){O===null&&(O=x),p=Ee.get(O),p.init(),E.push(p),O.traverseVisible(function(L){L.isLight&&L.layers.test(R.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),x!==O&&x.traverseVisible(function(L){L.isLight&&L.layers.test(R.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),p.setupLights(S._useLegacyLights);let U=new Set;return x.traverse(function(L){let oe=L.material;if(oe)if(Array.isArray(oe))for(let me=0;me<oe.length;me++){let we=oe[me];dt(we,O,L),U.add(we)}else dt(oe,O,L),U.add(oe)}),E.pop(),p=null,U},this.compileAsync=function(x,R,O=null){let U=this.compile(x,R,O);return new Promise(L=>{function oe(){if(U.forEach(function(me){Ve.get(me).currentProgram.isReady()&&U.delete(me)}),U.size===0){L(x);return}setTimeout(oe,10)}xe.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let vt=null;function Wt(x){vt&&vt(x)}function bn(){en.stop()}function yt(){en.start()}let en=new j_;en.setAnimationLoop(Wt),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(x){vt=x,Ze.setAnimationLoop(x),x===null?en.stop():en.start()},Ze.addEventListener("sessionstart",bn),Ze.addEventListener("sessionend",yt),this.render=function(x,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(R),R=Ze.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,R,C),p=Ee.get(x,E.length),p.init(),E.push(p),Se.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),De.setFromProjectionMatrix(Se),Y=this.localClippingEnabled,B=We.init(this.clippingPlanes,Y),_=ce.get(x,f.length),_.init(),f.push(_),Jn(x,R,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(z,W),this.info.render.frame++,B===!0&&We.beginShadows();let O=p.state.shadowsArray;if(X.render(O,x,R),B===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1)&&ht.render(_,x),p.setupLights(S._useLegacyLights),R.isArrayCamera){let U=R.cameras;for(let L=0,oe=U.length;L<oe;L++){let me=U[L];Sp(_,x,me,me.viewport)}}else Sp(_,x,R);C!==null&&(M.updateMultisampleRenderTarget(C),M.updateRenderTargetMipmap(C)),x.isScene===!0&&x.onAfterRender(S,x,R),ze.resetDefaultState(),G=-1,ie=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Jn(x,R,O,U){if(x.visible===!1)return;if(x.layers.test(R.layers)){if(x.isGroup)O=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(R);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||De.intersectsSprite(x)){U&&he.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Se);let me=Z.update(x),we=x.material;we.visible&&_.push(x,me,we,O,he.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||De.intersectsObject(x))){let me=Z.update(x),we=x.material;if(U&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),he.copy(x.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),he.copy(me.boundingSphere.center)),he.applyMatrix4(x.matrixWorld).applyMatrix4(Se)),Array.isArray(we)){let Ce=me.groups;for(let je=0,Le=Ce.length;je<Le;je++){let Ue=Ce[je],Ct=we[Ue.materialIndex];Ct&&Ct.visible&&_.push(x,me,Ct,O,he.z,Ue)}}else we.visible&&_.push(x,me,we,O,he.z,null)}}let oe=x.children;for(let me=0,we=oe.length;me<we;me++)Jn(oe[me],R,O,U)}function Sp(x,R,O,U){let L=x.opaque,oe=x.transmissive,me=x.transparent;p.setupLightsView(O),B===!0&&We.setGlobalState(S.clippingPlanes,O),oe.length>0&&rx(L,oe,R,O),U&&ge.viewport(y.copy(U)),L.length>0&&_a(L,R,O),oe.length>0&&_a(oe,R,O),me.length>0&&_a(me,R,O),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function rx(x,R,O,U){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;let oe=Ie.isWebGL2;ae===null&&(ae=new Li(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?pa:Qi,minFilter:Lr,samples:oe?4:0})),S.getDrawingBufferSize(be),oe?ae.setSize(be.x,be.y):ae.setSize(Gf(be.x),Gf(be.y));let me=S.getRenderTarget();S.setRenderTarget(ae),S.getClearColor(K),D=S.getClearAlpha(),D<1&&S.setClearColor(16777215,.5),S.clear();let we=S.toneMapping;S.toneMapping=Ki,_a(x,O,U),M.updateMultisampleRenderTarget(ae),M.updateRenderTargetMipmap(ae);let Ce=!1;for(let je=0,Le=R.length;je<Le;je++){let Ue=R[je],Ct=Ue.object,vn=Ue.geometry,Ft=Ue.material,hi=Ue.group;if(Ft.side===Di&&Ct.layers.test(U.layers)){let St=Ft.side;Ft.side=gn,Ft.needsUpdate=!0,bp(Ct,O,U,vn,Ft,hi),Ft.side=St,Ft.needsUpdate=!0,Ce=!0}}Ce===!0&&(M.updateMultisampleRenderTarget(ae),M.updateRenderTargetMipmap(ae)),S.setRenderTarget(me),S.setClearColor(K,D),S.toneMapping=we}function _a(x,R,O){let U=R.isScene===!0?R.overrideMaterial:null;for(let L=0,oe=x.length;L<oe;L++){let me=x[L],we=me.object,Ce=me.geometry,je=U===null?me.material:U,Le=me.group;we.layers.test(O.layers)&&bp(we,R,O,Ce,je,Le)}}function bp(x,R,O,U,L,oe){x.onBeforeRender(S,R,O,U,L,oe),x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),L.onBeforeRender(S,R,O,U,x,oe),L.transparent===!0&&L.side===Di&&L.forceSinglePass===!1?(L.side=gn,L.needsUpdate=!0,S.renderBufferDirect(O,R,U,L,x,oe),L.side=er,L.needsUpdate=!0,S.renderBufferDirect(O,R,U,L,x,oe),L.side=Di):S.renderBufferDirect(O,R,U,L,x,oe),x.onAfterRender(S,R,O,U,L,oe)}function xa(x,R,O){R.isScene!==!0&&(R=rt);let U=Ve.get(x),L=p.state.lights,oe=p.state.shadowsArray,me=L.state.version,we=fe.getParameters(x,L.state,oe,R,O),Ce=fe.getProgramCacheKey(we),je=U.programs;U.environment=x.isMeshStandardMaterial?R.environment:null,U.fog=R.fog,U.envMap=(x.isMeshStandardMaterial?N:v).get(x.envMap||U.environment),je===void 0&&(x.addEventListener("dispose",te),je=new Map,U.programs=je);let Le=je.get(Ce);if(Le!==void 0){if(U.currentProgram===Le&&U.lightsStateVersion===me)return Ep(x,we),Le}else we.uniforms=fe.getUniforms(x),x.onBuild(O,we,S),x.onBeforeCompile(we,S),Le=fe.acquireProgram(we,Ce),je.set(Ce,Le),U.uniforms=we.uniforms;let Ue=U.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ue.clippingPlanes=We.uniform),Ep(x,we),U.needsLights=ax(x),U.lightsStateVersion=me,U.needsLights&&(Ue.ambientLightColor.value=L.state.ambient,Ue.lightProbe.value=L.state.probe,Ue.directionalLights.value=L.state.directional,Ue.directionalLightShadows.value=L.state.directionalShadow,Ue.spotLights.value=L.state.spot,Ue.spotLightShadows.value=L.state.spotShadow,Ue.rectAreaLights.value=L.state.rectArea,Ue.ltc_1.value=L.state.rectAreaLTC1,Ue.ltc_2.value=L.state.rectAreaLTC2,Ue.pointLights.value=L.state.point,Ue.pointLightShadows.value=L.state.pointShadow,Ue.hemisphereLights.value=L.state.hemi,Ue.directionalShadowMap.value=L.state.directionalShadowMap,Ue.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Ue.spotShadowMap.value=L.state.spotShadowMap,Ue.spotLightMatrix.value=L.state.spotLightMatrix,Ue.spotLightMap.value=L.state.spotLightMap,Ue.pointShadowMap.value=L.state.pointShadowMap,Ue.pointShadowMatrix.value=L.state.pointShadowMatrix),U.currentProgram=Le,U.uniformsList=null,Le}function wp(x){if(x.uniformsList===null){let R=x.currentProgram.getUniforms();x.uniformsList=Qs.seqWithValue(R.seq,x.uniforms)}return x.uniformsList}function Ep(x,R){let O=Ve.get(x);O.outputColorSpace=R.outputColorSpace,O.batching=R.batching,O.instancing=R.instancing,O.instancingColor=R.instancingColor,O.skinning=R.skinning,O.morphTargets=R.morphTargets,O.morphNormals=R.morphNormals,O.morphColors=R.morphColors,O.morphTargetsCount=R.morphTargetsCount,O.numClippingPlanes=R.numClippingPlanes,O.numIntersection=R.numClipIntersection,O.vertexAlphas=R.vertexAlphas,O.vertexTangents=R.vertexTangents,O.toneMapping=R.toneMapping}function sx(x,R,O,U,L){R.isScene!==!0&&(R=rt),M.resetTextureUnits();let oe=R.fog,me=U.isMeshStandardMaterial?R.environment:null,we=C===null?S.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ni,Ce=(U.isMeshStandardMaterial?N:v).get(U.envMap||me),je=U.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Le=!!O.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Ue=!!O.morphAttributes.position,Ct=!!O.morphAttributes.normal,vn=!!O.morphAttributes.color,Ft=Ki;U.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ft=S.toneMapping);let hi=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,St=hi!==void 0?hi.length:0,$e=Ve.get(U),ql=p.state.lights;if(B===!0&&(Y===!0||x!==ie)){let wn=x===ie&&U.id===G;We.setState(U,x,wn)}let bt=!1;U.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==ql.state.version||$e.outputColorSpace!==we||L.isBatchedMesh&&$e.batching===!1||!L.isBatchedMesh&&$e.batching===!0||L.isInstancedMesh&&$e.instancing===!1||!L.isInstancedMesh&&$e.instancing===!0||L.isSkinnedMesh&&$e.skinning===!1||!L.isSkinnedMesh&&$e.skinning===!0||L.isInstancedMesh&&$e.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&$e.instancingColor===!1&&L.instanceColor!==null||$e.envMap!==Ce||U.fog===!0&&$e.fog!==oe||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==We.numPlanes||$e.numIntersection!==We.numIntersection)||$e.vertexAlphas!==je||$e.vertexTangents!==Le||$e.morphTargets!==Ue||$e.morphNormals!==Ct||$e.morphColors!==vn||$e.toneMapping!==Ft||Ie.isWebGL2===!0&&$e.morphTargetsCount!==St)&&(bt=!0):(bt=!0,$e.__version=U.version);let ir=$e.currentProgram;bt===!0&&(ir=xa(U,R,L));let Tp=!1,lo=!1,Xl=!1,Zt=ir.getUniforms(),rr=$e.uniforms;if(ge.useProgram(ir.program)&&(Tp=!0,lo=!0,Xl=!0),U.id!==G&&(G=U.id,lo=!0),Tp||ie!==x){Zt.setValue(P,"projectionMatrix",x.projectionMatrix),Zt.setValue(P,"viewMatrix",x.matrixWorldInverse);let wn=Zt.map.cameraPosition;wn!==void 0&&wn.setValue(P,he.setFromMatrixPosition(x.matrixWorld)),Ie.logarithmicDepthBuffer&&Zt.setValue(P,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Zt.setValue(P,"isOrthographic",x.isOrthographicCamera===!0),ie!==x&&(ie=x,lo=!0,Xl=!0)}if(L.isSkinnedMesh){Zt.setOptional(P,L,"bindMatrix"),Zt.setOptional(P,L,"bindMatrixInverse");let wn=L.skeleton;wn&&(Ie.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),Zt.setValue(P,"boneTexture",wn.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}L.isBatchedMesh&&(Zt.setOptional(P,L,"batchingTexture"),Zt.setValue(P,"batchingTexture",L._matricesTexture,M));let Yl=O.morphAttributes;if((Yl.position!==void 0||Yl.normal!==void 0||Yl.color!==void 0&&Ie.isWebGL2===!0)&&Ye.update(L,O,ir),(lo||$e.receiveShadow!==L.receiveShadow)&&($e.receiveShadow=L.receiveShadow,Zt.setValue(P,"receiveShadow",L.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(rr.envMap.value=Ce,rr.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),lo&&(Zt.setValue(P,"toneMappingExposure",S.toneMappingExposure),$e.needsLights&&ox(rr,Xl),oe&&U.fog===!0&&se.refreshFogUniforms(rr,oe),se.refreshMaterialUniforms(rr,U,$,k,ae),Qs.upload(P,wp($e),rr,M)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Qs.upload(P,wp($e),rr,M),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Zt.setValue(P,"center",L.center),Zt.setValue(P,"modelViewMatrix",L.modelViewMatrix),Zt.setValue(P,"normalMatrix",L.normalMatrix),Zt.setValue(P,"modelMatrix",L.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){let wn=U.uniformsGroups;for(let Zl=0,cx=wn.length;Zl<cx;Zl++)if(Ie.isWebGL2){let Cp=wn[Zl];ut.update(Cp,ir),ut.bind(Cp,ir)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ir}function ox(x,R){x.ambientLightColor.needsUpdate=R,x.lightProbe.needsUpdate=R,x.directionalLights.needsUpdate=R,x.directionalLightShadows.needsUpdate=R,x.pointLights.needsUpdate=R,x.pointLightShadows.needsUpdate=R,x.spotLights.needsUpdate=R,x.spotLightShadows.needsUpdate=R,x.rectAreaLights.needsUpdate=R,x.hemisphereLights.needsUpdate=R}function ax(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(x,R,O){Ve.get(x.texture).__webglTexture=R,Ve.get(x.depthTexture).__webglTexture=O;let U=Ve.get(x);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=O===void 0,U.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,R){let O=Ve.get(x);O.__webglFramebuffer=R,O.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(x,R=0,O=0){C=x,I=R,A=O;let U=!0,L=null,oe=!1,me=!1;if(x){let Ce=Ve.get(x);Ce.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(P.FRAMEBUFFER,null),U=!1):Ce.__webglFramebuffer===void 0?M.setupRenderTarget(x):Ce.__hasExternalTextures&&M.rebindTextures(x,Ve.get(x.texture).__webglTexture,Ve.get(x.depthTexture).__webglTexture);let je=x.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(me=!0);let Le=Ve.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Le[R])?L=Le[R][O]:L=Le[R],oe=!0):Ie.isWebGL2&&x.samples>0&&M.useMultisampledRTT(x)===!1?L=Ve.get(x).__webglMultisampledFramebuffer:Array.isArray(Le)?L=Le[O]:L=Le,y.copy(x.viewport),T.copy(x.scissor),H=x.scissorTest}else y.copy(j).multiplyScalar($).floor(),T.copy(Q).multiplyScalar($).floor(),H=re;if(ge.bindFramebuffer(P.FRAMEBUFFER,L)&&Ie.drawBuffers&&U&&ge.drawBuffers(x,L),ge.viewport(y),ge.scissor(T),ge.setScissorTest(H),oe){let Ce=Ve.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+R,Ce.__webglTexture,O)}else if(me){let Ce=Ve.get(x.texture),je=R||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ce.__webglTexture,O||0,je)}G=-1},this.readRenderTargetPixels=function(x,R,O,U,L,oe,me){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ve.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&me!==void 0&&(we=we[me]),we){ge.bindFramebuffer(P.FRAMEBUFFER,we);try{let Ce=x.texture,je=Ce.format,Le=Ce.type;if(je!==Yn&&le.convert(je)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ue=Le===pa&&(xe.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Le!==Qi&&le.convert(Le)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===Ii&&(Ie.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=x.width-U&&O>=0&&O<=x.height-L&&P.readPixels(R,O,U,L,le.convert(je),le.convert(Le),oe)}finally{let Ce=C!==null?Ve.get(C).__webglFramebuffer:null;ge.bindFramebuffer(P.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(x,R,O=0){let U=Math.pow(2,-O),L=Math.floor(R.image.width*U),oe=Math.floor(R.image.height*U);M.setTexture2D(R,0),P.copyTexSubImage2D(P.TEXTURE_2D,O,0,0,x.x,x.y,L,oe),ge.unbindTexture()},this.copyTextureToTexture=function(x,R,O,U=0){let L=R.image.width,oe=R.image.height,me=le.convert(O.format),we=le.convert(O.type);M.setTexture2D(O,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment),R.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,x.x,x.y,L,oe,me,we,R.image.data):R.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,x.x,x.y,R.mipmaps[0].width,R.mipmaps[0].height,me,R.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,U,x.x,x.y,me,we,R.image),U===0&&O.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(x,R,O,U,L=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let oe=x.max.x-x.min.x+1,me=x.max.y-x.min.y+1,we=x.max.z-x.min.z+1,Ce=le.convert(U.format),je=le.convert(U.type),Le;if(U.isData3DTexture)M.setTexture3D(U,0),Le=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)M.setTexture2DArray(U,0),Le=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);let Ue=P.getParameter(P.UNPACK_ROW_LENGTH),Ct=P.getParameter(P.UNPACK_IMAGE_HEIGHT),vn=P.getParameter(P.UNPACK_SKIP_PIXELS),Ft=P.getParameter(P.UNPACK_SKIP_ROWS),hi=P.getParameter(P.UNPACK_SKIP_IMAGES),St=O.isCompressedTexture?O.mipmaps[L]:O.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,St.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,St.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,x.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,x.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,x.min.z),O.isDataTexture||O.isData3DTexture?P.texSubImage3D(Le,L,R.x,R.y,R.z,oe,me,we,Ce,je,St.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Le,L,R.x,R.y,R.z,oe,me,we,Ce,St.data)):P.texSubImage3D(Le,L,R.x,R.y,R.z,oe,me,we,Ce,je,St),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ue),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ct),P.pixelStorei(P.UNPACK_SKIP_PIXELS,vn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ft),P.pixelStorei(P.UNPACK_SKIP_IMAGES,hi),L===0&&U.generateMipmaps&&P.generateMipmap(Le),ge.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?M.setTextureCube(x,0):x.isData3DTexture?M.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?M.setTexture2DArray(x,0):M.setTexture2D(x,0),ge.unbindTexture()},this.resetState=function(){I=0,A=0,C=null,ge.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===yp?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===jl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Xt?Ur:V_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ur?Xt:Ni}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ap=class extends ga{};ap.prototype.isWebGL1Renderer=!0;var Gl=class extends ao{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};function Sl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ZP(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var oo=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},cp=class extends oo{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:B0,endingEnd:B0}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case V0:s=e,a=2*t-i;break;case z0:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case V0:o=e,c=2*i-t;break;case z0:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,m=this._weightNext,g=(i-t)/(r-t),_=g*g,p=_*g,f=-h*p+2*h*_-h*g,E=(1+h)*p+(-1.5-2*h)*_+(-.5+h)*g+1,S=(-1-m)*p+(1.5+m)*_+.5*g,w=m*p-m*_;for(let I=0;I!==a;++I)s[I]=f*o[u+I]+E*o[l+I]+S*o[c+I]+w*o[d+I];return s}},lp=class extends oo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*d+o[c+h]*u;return s}},up=class extends oo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Zn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sl(t,this.TimeBufferType),this.values=Sl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Sl(e.times,Array),values:Sl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new up(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wl:t=this.InterpolantFactoryMethodDiscrete;break;case El:t=this.InterpolantFactoryMethodLinear;break;case uf:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wl;case this.InterpolantFactoryMethodLinear:return El;case this.InterpolantFactoryMethodSmooth:return uf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&ZP(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===uf,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,h=d-i,m=d+i;for(let g=0;g!==i;++g){let _=t[d+g];if(_!==t[h+g]||_!==t[m+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let m=0;m!==i;++m)t[h+m]=t[d+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=El;var zr=class extends Zn{};zr.prototype.ValueTypeName="bool";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=wl;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;var dp=class extends Zn{};dp.prototype.ValueTypeName="color";var hp=class extends Zn{};hp.prototype.ValueTypeName="number";var fp=class extends oo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)nr.slerpFlat(s,0,o,l-a,o,l,c);return s}},va=class extends Zn{InterpolantFactoryMethodLinear(e){return new fp(this.times,this.values,this.getValueSize(),e)}};va.prototype.ValueTypeName="quaternion";va.prototype.DefaultInterpolation=El;va.prototype.InterpolantFactoryMethodSmooth=void 0;var Hr=class extends Zn{};Hr.prototype.ValueTypeName="string";Hr.prototype.ValueBufferType=Array;Hr.prototype.DefaultInterpolation=wl;Hr.prototype.InterpolantFactoryMethodLinear=void 0;Hr.prototype.InterpolantFactoryMethodSmooth=void 0;var pp=class extends Zn{};pp.prototype.ValueTypeName="vector";var xp="\\[\\]\\.:\\/",JP=new RegExp("["+xp+"]","g"),Mp="[^"+xp+"]",KP="[^"+xp.replace("\\.","")+"]",QP=/((?:WC+[\/:])*)/.source.replace("WC",Mp),eN=/(WCOD+)?/.source.replace("WCOD",KP),tN=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mp),nN=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mp),iN=new RegExp("^"+QP+eN+tN+nN+"$"),rN=["material","materials","bones","map"],mp=class{constructor(e,t,i){let r=i||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},At=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(JP,"")}static parseTrackName(t){let i=iN.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);rN.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=mp,n})();At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var F3=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gp);var oN=["canvas"];function aN(n,e){n&1&&st(0,"canvas",null,6)}function cN(n,e){if(n&1&&(_e(0,"img",7),Mr("dragstart",function(){return!1}),ve()),n&2){let t=ai();Je("src",t.image(),bc)}}var J_=(()=>{let e=class e{constructor(){this.image=dn(),this.title=dn(),this.subtitle=dn(),this.blur=dn(),this.sceneJson=dn()}createScene(){let i=new Gl,r=new an(75,window.innerWidth/window.innerHeight,.1,1e3),s=this.canvasRef.nativeElement.parentElement,o=new ga({canvas:this.canvasRef.nativeElement,antialias:!0});o.setSize(s.clientWidth,400);let a=new Vr,c=new ro({color:65280}),l=new Sn(a,c);i.add(l),r.position.z=5;let u=function(){requestAnimationFrame(u),l.rotation.x+=.01,l.rotation.y+=.01,o.render(i,r)};u()}ngAfterViewInit(){this.createScene()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Vt({type:e,selectors:[["banner"]],viewQuery:function(r,s){if(r&1&&jv(oN,5),r&2){let o;ih(o=rh())&&(s.canvasRef=o.first)}},inputs:{image:[Et.SignalBased,"image"],title:[Et.SignalBased,"title"],subtitle:[Et.SignalBased,"subtitle"],blur:[Et.SignalBased,"blur"],sceneJson:[Et.SignalBased,"sceneJson"]},standalone:!0,features:[zt],decls:11,vars:3,consts:[[1,"container-fluid"],[1,"row"],[1,"col","p-0","m-0",2,"overflow","hidden","position","relative"],[1,"col","d-flex","flex-column","justify-content-center",2,"background-image","linear-gradient(90deg,#fff, #c5ced3)"],[2,"margin","10px"],[2,"color","#5d5d5d"],["canvas",""],["id","bannerImg",2,"position","relative","z-index","1",3,"src","dragstart"]],template:function(r,s){r&1&&(_e(0,"div",0)(1,"div",1)(2,"div",2),Mi(3,aN,2,0,"canvas")(4,cN,1,1),ve(),_e(5,"div",3)(6,"div",4)(7,"h1"),ot(8),ve(),_e(9,"p",5),ot(10),ve()()()()()),r&2&&(ke(3),Vi(3,s.sceneJson()?3:4),ke(5),_s(s.title()),ke(2),_s(s.subtitle()))},styles:["#bannerImg[_ngcontent-%COMP%]{width:100%;height:400px;object-fit:cover;transform:scale(1);transition:transform .2s;background-image:linear-gradient(90deg,#fff0,#fff)}#bannerImg[_ngcontent-%COMP%]:hover{transform:scale(1.1)}"]});let n=e;return n})();var K_=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Vt({type:e,selectors:[["endPage"]],standalone:!0,features:[zt],decls:5,vars:0,consts:[[1,"container-fluid",2,"background-color","rgb(226, 76, 76)"],[1,"row",2,"text-align","center","color","white"],[1,"col",2,"margin","20px"]],template:function(r,s){r&1&&(_e(0,"div",0)(1,"div",1)(2,"div",2)(3,"p"),ot(4,'El blog de "Mostazanik" esta hecho 100% en Node.js'),ve()()()())},encapsulation:2});let n=e;return n})();var Q_=(()=>{let e=class e{constructor(){this.resources=dn()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Vt({type:e,selectors:[["entries"]],inputs:{resources:[Et.SignalBased,"resources"]},standalone:!0,features:[zt],decls:5,vars:3,consts:[["id","button"],["id","image"],["id","color"],[2,"color","rgb(93, 90, 90)","padding-left","25px","padding-top","130px"]],template:function(r,s){r&1&&(_e(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4",3),ot(4),ve()()()()),r&2&&(ke(),Rc("background-image","url("+s.resources().image+")"),ke(3),_s(s.resources().title))},styles:["#image[_ngcontent-%COMP%]{width:100%;height:175px;object-fit:cover;transform:scale(1);transition:transform .2s;background-size:cover;background-position:center}#image[_ngcontent-%COMP%]:hover{transform:scale(1.1);cursor:pointer}#button[_ngcontent-%COMP%]{width:75%;margin-left:auto;margin-right:auto;overflow:hidden;border-radius:25px}#color[_ngcontent-%COMP%]{background-color:#d9e3e764;transition:background-color .2s;width:100%;height:100%}#color[_ngcontent-%COMP%]:hover{background-color:#d5ebeda5;transition:background-color .2s}"]});let n=e;return n})();function lN(n,e){if(n&1&&(_e(0,"h1",3),ot(1,"Ultimas entradas del blog"),ve(),_e(2,"p"),ot(3," Estas son las ultimas entradas del blog, con actualizaciones sobre los proyectos que se estan desarrollando, esto no solo incluye proyectos relacionados a desarrollo de software, si no que cualquier proyecto general. "),ve(),_e(4,"div",4),st(5,"entries",5),ve(),_e(6,"div",4),st(7,"entries",5),ve(),_e(8,"div",4),st(9,"entries",5),ve()),n&2){let t=ai();ke(5),Je("resources",t.lastEntries()[0][0]),ke(2),Je("resources",t.lastEntries()[0][1]),ke(2),Je("resources",t.lastEntries()[0][2])}}function uN(n,e){if(n&1&&(_e(0,"h1",6),ot(1,"Ultimos proyectos"),ve(),_e(2,"p"),ot(3," Aqui van publicado todos los proyectos a nivel general que tengo, no van actualizaciones del blog, solo una premisa. "),ve(),_e(4,"div",4),st(5,"entries",5),ve(),_e(6,"div",4),st(7,"entries",5),ve(),_e(8,"div",4),st(9,"entries",5),ve()),n&2){let t=ai();ke(5),Je("resources",t.lastEntries()[1][0]),ke(2),Je("resources",t.lastEntries()[1][1]),ke(2),Je("resources",t.lastEntries()[1][2])}}function dN(n,e){if(n&1&&(_e(0,"h1",6),ot(1,"Canal de Youtube"),ve(),_e(2,"p"),ot(3," Por ultimo, aqui van las entradas relacionadas al canal de Youtube, estas llevan a entradas del blog relacionadas a los videos publicados. "),ve(),_e(4,"div",4),st(5,"entries",5),ve(),_e(6,"div",4),st(7,"entries",5),ve(),_e(8,"div",4),st(9,"entries",5),ve()),n&2){let t=ai();ke(5),Je("resources",t.lastEntries()[1][0]),ke(2),Je("resources",t.lastEntries()[1][1]),ke(2),Je("resources",t.lastEntries()[1][2])}}var ex=(()=>{let e=class e{constructor(){this.type=dn(),this.lastEntries=dn()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Vt({type:e,selectors:[["news"]],inputs:{type:[Et.SignalBased,"type"],lastEntries:[Et.SignalBased,"lastEntries"]},standalone:!0,features:[zt],decls:6,vars:1,consts:[[1,"container-fluid",2,"color","white","background-color","#f57b7b"],[1,"container"],[1,"row",2,"padding-bottom","20px"],[2,"margin-top","20px"],[1,"col-4"],[3,"resources"],[2,"margin-top","15px","margin-bottom","20px"]],template:function(r,s){if(r&1&&(_e(0,"div",0)(1,"div",1)(2,"div",2),Mi(3,lN,10,3)(4,uN,10,3)(5,dN,10,3),ve()()()),r&2){let o;ke(3),Vi(3,(o=s.type())==="blog"?3:o==="projects"?4:o==="youtube"?5:-1)}},dependencies:[Q_],encapsulation:2});let n=e;return n})();var tx=(()=>{let e=class e{constructor(){this.name=dn(),this.img=dn()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Vt({type:e,selectors:[["languaje"]],inputs:{name:[Et.SignalBased,"name"],img:[Et.SignalBased,"img"]},standalone:!0,features:[zt],decls:2,vars:2,consts:[["id","languaje",1,"d-inline-block",3,"title"],[3,"src"]],template:function(r,s){r&1&&(_e(0,"div",0),st(1,"img",1),ve()),r&2&&(Je("title",s.name()),ke(),Je("src",s.img(),bc))},styles:["#languaje[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;background-color:#fff;border-radius:50%;width:50px;height:50px;margin:3px}#languaje[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60%;height:60%;margin:20%}"]});let n=e;return n})();function hN(n,e){if(n&1&&(_e(0,"div",4)(1,"h6"),ot(2,"Manejo intermedio"),ve(),st(3,"languaje",5)(4,"languaje",5)(5,"languaje",5)(6,"languaje",5)(7,"languaje",5),ve(),_e(8,"div",4)(9,"h6"),ot(10,"Manejo Basico"),ve(),st(11,"languaje",5)(12,"languaje",5)(13,"languaje",5)(14,"languaje",5)(15,"languaje",5)(16,"languaje",5)(17,"languaje",5),ve(),_e(18,"div",4)(19,"h6"),ot(20,"Aprendiendo"),ve(),st(21,"languaje",5)(22,"languaje",5),ve(),st(23,"div",6)),n&2){let t=ai();ke(3),Je("name",t.python[0])("img",t.python[1]),ke(),Je("name",t.cSharp[0])("img",t.cSharp[1]),ke(),Je("name",t.unity[0])("img",t.unity[1]),ke(),Je("name",t.html[0])("img",t.html[1]),ke(),Je("name",t.js[0])("img",t.js[1]),ke(4),Je("name",t.angular[0])("img",t.angular[1]),ke(),Je("name",t.sass[0])("img",t.sass[1]),ke(),Je("name",t.ts[0])("img",t.ts[1]),ke(),Je("name",t.lua[0])("img",t.lua[1]),ke(),Je("name",t.java[0])("img",t.java[1]),ke(),Je("name",t.sql[0])("img",t.sql[1]),ke(),Je("name",t.node[0])("img",t.node[1]),ke(4),Je("name",t.zig[0])("img",t.zig[1]),ke(),Je("name",t.pl[0])("img",t.pl[1])}}var nx=(()=>{let e=class e{constructor(){this.winController=0,this.python=["Python","https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"],this.cSharp=["C#","https://static-00.iconduck.com/assets.00/c-sharp-c-icon-456x512-9sej0lrz.png"],this.unity=["Unity","https://static-00.iconduck.com/assets.00/unity-icon-249x256-ry4n8dty.png"],this.html=["HTML 5","https://cdn-icons-png.flaticon.com/512/732/732212.png"],this.js=["Javascript","https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png"],this.angular=["Angular","https://seeklogo.com/images/A/angular-icon-logo-5FC0C40EAC-seeklogo.com.png"],this.sass=["SASS","https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png"],this.ts=["Typescript","https://cdn-icons-png.freepik.com/512/5968/5968381.png"],this.lua=["LUA","https://cdn.iconscout.com/icon/free/png-256/free-lua-3772798-3146931.png"],this.java=["Java","https://static-00.iconduck.com/assets.00/java-icon-1511x2048-6ikx8301.png"],this.sql=["SQL","https://static-00.iconduck.com/assets.00/sql-database-sql-azure-icon-1955x2048-4pmty46t.png"],this.node=["Node.js","https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"],this.zig=["Zig","https://cdn.icon-icons.com/icons2/2699/PNG/512/ziglang_logo_icon_170660.png"],this.pl=["PL/SQL","https://my.trocaire.edu/wp-content/uploads/2016/12/pl-sql.png"]}hover(i){this.winController=i}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Vt({type:e,selectors:[["MainMenu"]],standalone:!0,features:[zt],decls:11,vars:1,consts:[[1,"container-fluid"],[1,"container"],[1,"row"],["id","menu",1,"col-2"],["id","section",1,"col-4"],[3,"name","img"],[1,"col-12",2,"margin-top","6px"]],template:function(r,s){if(r&1&&(_e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),ot(4,"Habilidades"),ve(),_e(5,"div",3),ot(6,"Proyectos Destacados"),ve(),_e(7,"div",3),ot(8,"Contacto"),ve()(),_e(9,"div",2),Mi(10,hN,24,28),ve()()()),r&2){let o;ke(10),Vi(10,(o=s.winController)===0?10:-1)}},dependencies:[tx],styles:["div[_ngcontent-%COMP%]{background-color:#c23636}h6[_ngcontent-%COMP%]{margin-top:5px}#menu[_ngcontent-%COMP%]{background-color:#a92d2d;height:50px;transition:background-color .2s;margin:6px 3px 3px;text-align:center;border-radius:10px;display:flex;align-items:center;justify-content:center}#menu[_ngcontent-%COMP%]:hover{background-color:#cb4444;transition:background-color .2s;cursor:pointer}#section[_ngcontent-%COMP%]{background-color:#a92d2d;border-radius:10px;width:32%;margin:3px 6px 3px 3px}#languaje[_ngcontent-%COMP%]{width:30px;margin:3px}"]});let n=e;return n})();function fN(n,e){n&1&&(_e(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),ot(4,"Software developer"),ve(),_e(5,"h1",4),ot(6,"Sergio Valle"),ve(),_e(7,"a",5)(8,"button",6),ot(9," Descargar CV "),st(10,"img",7),ve()()()()(),st(11,"MainMenu"))}function pN(n,e){if(n&1&&st(0,"banner",8)(1,"news",9)(2,"hr")(3,"news",9)(4,"hr")(5,"news",9),n&2){let t=ai();Je("image",t.home.banner.image)("title",t.home.banner.title)("subtitle",t.home.banner.subTitle),ke(),Je("type",t.requiredNews[0])("lastEntries",t.entries),ke(2),Je("type",t.requiredNews[1])("lastEntries",t.entries),ke(2),Je("type",t.requiredNews[2])("lastEntries",t.entries)}}function mN(n,e){}function gN(n,e){}function vN(n,e){}var ix=(()=>{let e=class e{constructor(i){this.BannerService=i,this.window="home",this.home=hn.home,this.blogsData=[hn.blog[hn.blog.length-1].banner,hn.blog[hn.blog.length-2].banner,hn.blog[hn.blog.length-3].banner],this.projectsData=[hn.projects[hn.projects.length-1].banner,hn.projects[hn.projects.length-2].banner,hn.projects[hn.projects.length-3].banner],this.entries=[this.blogsData,this.projectsData],this.requiredNews=["blog","projects","youtube"]}ngOnInit(){this.BannerService.getData().subscribe(i=>{this.window=i})}};e.\u0275fac=function(r){return new(r||e)(xr(el))},e.\u0275cmp=Vt({type:e,selectors:[["app-root"]],standalone:!0,features:[zt],decls:8,vars:1,consts:[[1,"container-fluid"],[1,"row",2,"background-image","url(https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080087611-800x400.jpg)","background-size","cover","background-position","0px"],[1,"col","d-flex","flex-column","justify-content-center",2,"text-align","center","color","white","height","300px","background-color","rgba(87, 17, 17, 0.79)","align-items","center"],[2,"font-family","'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif","color","#ffffff"],[2,"font-size","50px"],["href","https://drive.usercontent.google.com/u/0/uc?id=11HwZgrD-f6nD47i2kK6t8DnPyUku8eRL&export=download","target","_blank"],[2,"width","160px","margin-top","10px"],["src","https://cdn-icons-png.flaticon.com/512/189/189249.png",2,"width","20px"],[3,"image","title","subtitle"],[3,"type","lastEntries"]],template:function(r,s){if(r&1&&(st(0,"BarMenu"),Mi(1,fN,12,0)(2,pN,6,9)(3,mN,0,0)(4,gN,0,0)(5,vN,0,0),st(6,"endPage")(7,"router-outlet")),r&2){let o;ke(),Vi(1,(o=s.window)==="home"?1:o==="blog"?2:o==="projects"?3:o==="habilities"?4:o==="contact"?5:-1)}},dependencies:[Zh,s0,J_,K_,ex,nx]});let n=e;return n})();_y(ix,i0).catch(n=>console.error(n));
