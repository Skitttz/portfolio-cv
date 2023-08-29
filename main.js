(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?e(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(s=o.key,r=void 0,r=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(s),"symbol"===i(r)?r:String(r)),o)}var s,r}function s(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var r=function(){function e(t,i,o,s,r,a){n(this,e),this.menuHamburguer=document.querySelector(t),this.menu=document.querySelector(i),this.navMenu=document.querySelector(o),this.itemMenus=document.querySelectorAll(s),this.activeClass="active",this.bar=document.querySelector(r),this.eventos=void 0===a?["click","touchstart"]:a,this.openMenu=this.openMenu.bind(this)}return s(e,[{key:"animationOpacity",value:function(){var e=document.querySelector(".logo");e.style.display="none";var t=0,n=setInterval((function(){t+=.1,e.style.opacity=t,t>=.1&&(e.style.display="flex"),t>=1&&clearInterval(n)}),200)}},{key:"openMenu",value:function(e){var n=this;e.cancelable&&e.preventDefault(),this.menu.classList.toggle(this.activeClass),this.menuHamburguer.classList.toggle(this.activeClass),this.navMenu.classList.toggle(this.activeClass),this.bar.classList.toggle(this.activeClass),function(e,t,i){var o=document.documentElement,s="data-outside";function r(i){e.contains(i.target)||(e.removeAttribute(s),t.forEach((function(e){o.removeEventListener(e,r)})),n.animationOpacity(),n.menuHamburguer.classList.remove(n.activeClass),n.navMenu.classList.remove(n.activeClass),n.menu.classList.remove(n.activeClass),n.bar.classList.remove(n.activeClass))}e.hasAttribute(s)||(t.forEach((function(e){setTimeout((function(){o.addEventListener(e,r)}))})),e.setAttribute(s,""))}(this.menu,this.eventos);var i=t(this.itemMenus);this.eventos.forEach((function(e){i.forEach((function(t){t.addEventListener(e,(function(){n.animationOpacity(),n.menuHamburguer.classList.remove(n.activeClass),n.navMenu.classList.remove(n.activeClass),n.menu.classList.remove(n.activeClass),n.bar.classList.remove(n.activeClass)}))}))}))}},{key:"addMenuMobileEvents",value:function(){var e=this;this.eventos.forEach((function(t){return e.menuHamburguer.addEventListener(t,e.openMenu)}))}},{key:"init",value:function(){return this.menuHamburguer&&this.menu&&this.addMenuMobileEvents(),this}}]),e}();function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function c(e,t){var n;return function(){for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];n&&clearTimeout(n),n=setTimeout((function(){e.apply(void 0,o),n=null}),t)}}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=l(e);if(t){var s=l(this).constructor;n=Reflect.construct(o,arguments,s)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}var h=function(){function e(t,i){n(this,e),this.slide=document.querySelector(t),this.wrap=document.querySelector(i),this.dist={finalPosition:0,startX:0,movement:0},this.activeClass="active",this.changeEvent=new Event("changeEvent"),this.project=document.querySelector(".projects-bg")}return s(e,[{key:"mouseUpOut",value:function(){var e=this;this.project.addEventListener("mouseup",(function(t){if(!e.wrap.contains(t.target)){var n="mouseup"===t.type?"mousemove":"touchmove";e.wrap.removeEventListener(n,e.onMove),e.dist.finalPosition=e.dist.movePosition,e.transition(!0),e.changeSlideOnEnd()}}))}},{key:"transition",value:function(e){this.slide.style.transition=e?"transform .6s":""}},{key:"moveSlide",value:function(e){this.dist.movePosition=e,this.slide.style.transform="translate3d(".concat(e,"px,0,0)")}},{key:"updatePosition",value:function(e){return this.dist.movement=1.5*(this.dist.startX-e),this.dist.finalPosition-this.dist.movement}},{key:"onStart",value:function(e){var t;"mousedown"===e.type?(e.preventDefault(),this.dist.startX=e.clientX,t="mousemove"):(this.dist.startX=e.changedTouches[0].clientX,t="touchmove"),this.wrap.addEventListener(t,this.onMove),this.transition(!1)}},{key:"onMove",value:function(e){var t="mousemove"===e.type?e.clientX:e.changedTouches[0].clientX,n=this.updatePosition(t);this.moveSlide(n)}},{key:"onEnd",value:function(e){var t="mouseup"===e.type?"mousemove":"touchmove";this.wrap.removeEventListener(t,this.onMove),this.dist.finalPosition=this.dist.movePosition,this.transition(!0),this.changeSlideOnEnd()}},{key:"changeSlideOnEnd",value:function(){this.dist.movement>120&&void 0!==this.index.next?this.activeNextSlide():this.dist.movement<-120&&void 0!==this.index.prev?this.activePrevSlide():this.changeSlide(this.index.active)}},{key:"addSlideEvent",value:function(){this.wrap.addEventListener("mousedown",this.onStart),this.wrap.addEventListener("touchstart",this.onStart),this.wrap.addEventListener("mouseup",this.onEnd),this.wrap.addEventListener("touchend",this.onEnd)}},{key:"slidePosition",value:function(e){var t=(this.wrap.offsetWidth-e.offsetWidth)/2;return-(e.offsetLeft-t)}},{key:"slideConfig",value:function(){var e=this;this.slideArray=t(this.slide.children).map((function(t){return{position:e.slidePosition(t),element:t}}))}},{key:"slidesIndexNav",value:function(e){var t=this.slideArray.length-1;this.index={prev:e?e-1:void 0,active:e,next:e===t?void 0:e+1}}},{key:"changeSlide",value:function(e){var t=this.slideArray[e];this.moveSlide(t.position),this.slidesIndexNav(e),this.dist.finalPosition=t.position,this.changeActiveClass(),this.wrap.dispatchEvent(this.changeEvent)}},{key:"changeActiveClass",value:function(){var e=this;this.slideArray.forEach((function(t){return t.element.classList.remove(e.activeClass)})),this.slideArray[this.index.active].element.classList.add(this.activeClass)}},{key:"activePrevSlide",value:function(){void 0!==this.index.prev&&this.changeSlide(this.index.prev)}},{key:"activeNextSlide",value:function(){void 0!==this.index.next&&this.changeSlide(this.index.next)}},{key:"onResize",value:function(){var e=this;setTimeout((function(){e.slideConfig(),e.changeSlide(e.index.active)}),1e3)}},{key:"addResizeEvent",value:function(){window.addEventListener("resize",this.onResize)}},{key:"bindEvents",value:function(){this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this),this.onResize=c(this.onResize.bind(this),200),this.activeNextSlide=this.activeNextSlide.bind(this),this.activePrevSlide=this.activePrevSlide.bind(this)}},{key:"init",value:function(){return this.bindEvents(),this.transition(!0),this.mouseUpOut(),this.addSlideEvent(),this.slideConfig(),this.changeSlide(0),this.addResizeEvent(),this}}]),e}(),d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(o,e);var i=u(o);function o(e,t){var s;return n(this,o),(s=i.call(this,e,t)).bindControlEvents(),s}return s(o,[{key:"addArrow",value:function(e,t){this.prevElement=document.querySelector(e),this.nextElement=document.querySelector(t),this.addArrowEvent()}},{key:"addArrowEvent",value:function(){this.prevElement.addEventListener("click",this.activePrevSlide),this.nextElement.addEventListener("click",this.activeNextSlide)}},{key:"createControl",value:function(){var e=document.createElement("ul");return this.slideArray.forEach((function(t,n){e.innerHTML+="<li><a href='#slide".concat(n+1,"'>").concat(n+1,"</a></li>")})),this.wrap.appendChild(e),e.dataset.control="slide",e}},{key:"eventControl",value:function(e,t){var n=this;e.addEventListener("click",(function(e){e.preventDefault(),n.changeSlide(t)})),this.wrap.addEventListener("changeEvent",this.activeControlItem)}},{key:"activeControlItem",value:function(){var e=this;this.controlArray.forEach((function(t){return t.classList.remove(e.activeClass)})),this.controlArray[this.index.active].classList.add(this.activeClass)}},{key:"addControl",value:function(e){this.control=document.querySelector(e)||this.createControl(),this.controlArray=t(this.control.children),this.controlArray.forEach(this.eventControl),this.activeControlItem()}},{key:"bindControlEvents",value:function(){this.eventControl=this.eventControl.bind(this),this.activeControlItem=this.activeControlItem.bind(this)}}]),o}(h),f=function(){function e(t){n(this,e),this.sections=document.querySelectorAll(t),this.windowScreenSplit=.5*window.innerHeight,this.checkDistance=c(this.checkDistance.bind(this),50)}return s(e,[{key:"getDistance",value:function(){var e=this;this.distance=t(this.sections).map((function(t){var n=t.offsetTop;return{element:t,offset:Math.floor(n-e.windowScreenSplit)}}))}},{key:"checkDistance",value:function(){this.distance.forEach((function(e){window.pageYOffset>e.offset?e.element.classList.add("ativo"):e.element.classList.contains("ativo")&&e.element.classList.remove("ativo")}))}},{key:"init",value:function(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}},{key:"stop",value:function(){window.removeEventListener("scroll",this.checkDistance)}}]),e}(),v=function(){function e(t,i){n(this,e),this.linksInternos=document.querySelectorAll(t),this.logo=document.querySelector(i),this.scrollToSection=this.scrollToSection.bind(this)}return s(e,[{key:"scrollToSection",value:function(e,t){e.preventDefault();var n=e.currentTarget.getAttribute("href"),i=document.querySelector(n).offsetTop;"#home"===n?i=0:"#about"===n&&(i*=.8),void 0===t?t={top:i,behavior:"smooth"}:this.options=t,window.scrollTo(t)}},{key:"addLinkEvent",value:function(){var e=this,t=["click","touchstart"];t.forEach((function(t){e.linksInternos.forEach((function(n){n.addEventListener(t,e.scrollToSection)}))})),t.forEach((function(t){return e.logo.addEventListener(t,e.scrollToSection)}))}},{key:"init",value:function(){return this.linksInternos.length&&this.addLinkEvent(),this}}]),e}();const m=e=>Array.isArray(e),y=e=>m(e)?e:[e],p=e=>Array.from(e),g=e=>document.createTextNode(e);let b=e=>([...e.childNodes].forEach((e=>{if(e.nodeValue)return[...e.nodeValue].forEach((t=>{e.parentNode.insertBefore(g(t),e)})),void e.remove();b(e)})),e);const E=e=>{let t=document.implementation.createHTMLDocument();return t.body.innerHTML=e,b(t.body)},S="data-typeit-id",k="ti-cursor",w={started:!1,completed:!1,frozen:!1,destroyed:!1},L={breakLines:!0,cursor:{autoPause:!0,autoPauseDelay:500,animation:{frames:[0,0,1].map((e=>({opacity:e}))),options:{iterations:1/0,easing:"steps(2, start)",fill:"forwards"}}},cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}},C=`[${S}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`;function T(e,t=!1,n=!1){let i,o=e.querySelector(`.${k}`),s=document.createTreeWalker(e,NodeFilter.SHOW_ALL,{acceptNode:e=>{if(o&&n){if(e.classList?.contains(k))return NodeFilter.FILTER_ACCEPT;if(o.contains(e))return NodeFilter.FILTER_REJECT}return e.classList?.contains(k)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),r=[];for(;i=s.nextNode();)i.originalParent||(i.originalParent=i.parentNode),r.push(i);return t?r.reverse():r}const A=e=>document.createElement(e),x=(e,t="")=>{let n=A("style");n.id=t,n.appendChild(g(e)),document.head.appendChild(n)},M=e=>(m(e)||(e=[e/2,e/2]),e),P=(e,t)=>Math.abs(Math.random()*(e+t-(e-t))+(e-t));let D=e=>e/2;const I=e=>"value"in e;let O=e=>"function"==typeof e?e():e;const q=e=>Number.isInteger(e);let N=(e,t=document,n=!1)=>t["querySelector"+(n?"All":"")](e);const R=(e,t)=>Object.assign({},e,t);let j={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"",transform:"translateX(-.125em)"};const H=(e,t)=>new Array(t).fill(e),z=({queueItems:e,selector:t,cursorPosition:n,to:i})=>{if(q(t))return-1*t;let o=new RegExp("END","i").test(i),s=t?[...e].reverse().findIndex((({char:e})=>{let n=e.parentElement,i=n.matches(t);return!(!o||!i)||i&&n.firstChild.isSameNode(e)})):-1;return s<0&&(s=o?0:e.length-1),s-n+(o?0:1)};let $=e=>new Promise((t=>{requestAnimationFrame((async()=>{t(await e())}))})),_=e=>e?.getAnimations().find((t=>t.id===e.dataset.tiAnimationId)),F=({cursor:e,frames:t,options:n})=>{let i=e.animate(t,n);return i.pause(),i.id=e.dataset.tiAnimationId,$((()=>{$((()=>{i.play()}))})),i},G=e=>e.func?.call(null);const X=function(e,t={}){let n=async(e,t,n=!1)=>{Y.frozen&&await new Promise((e=>{this.unfreeze=()=>{Y.frozen=!1,e()}})),n||await Z.beforeStep(this),await((e,t,n)=>new Promise((i=>{n.push(setTimeout((async()=>{await e(),i()}),t||0))})))(e,t,Q),n||await Z.afterStep(this)},i=(e,t)=>(async({index:e,queueItems:t,wait:n,cursor:i,cursorOptions:o})=>{let s=t[e][1],r=[],a=e,l=s,c=()=>l&&!l.delay,u=s.shouldPauseCursor()&&o.autoPause;for(;c();)r.push(l),c()&&a++,l=t[a]?t[a][1]:null;if(r.length)return await $((async()=>{for(let e of r)await G(e)})),a-1;let h,d=_(i);return d&&(h={...d.effect.getComputedTiming(),delay:u?o.autoPauseDelay:0}),await n((async()=>{d&&u&&d.cancel(),await $((()=>{G(s)}))}),s.delay),await(({cursor:e,options:t,cursorOptions:n})=>{if(!e||!n)return;let i,o=_(e);o&&(t.delay=o.effect.getComputedTiming().delay,i=o.currentTime,o.cancel());let s=F({cursor:e,frames:n.animation.frames,options:t});return i&&(s.currentTime=i),s})({cursor:i,options:h,cursorOptions:o}),e})({index:e,queueItems:t,wait:n,cursor:ie,cursorOptions:Z.cursor}),o=e=>((e,t)=>{if(!e)return;let n=e.parentNode;(n.childNodes.length>1||n.isSameNode(t)?e:n).remove()})(e,V),s=()=>I(V),r=(e=0)=>function(e){let{speed:t,deleteSpeed:n,lifeLike:i}=e;return n=null!==n?n:t/3,i?[P(t,D(t)),P(n,D(n))]:[t,n]}(Z)[e],a=()=>(e=>I(e)?p(e.value):T(e,!0).filter((e=>!(e.childNodes.length>0))))(V),l=(e,t)=>(te.add(e),((e={})=>{let t=e.delay;t&&te.add({delay:t})})(t),this),c=()=>K??J,u=(e={})=>[{func:()=>X(e)},{func:()=>X(Z)}],h=e=>{let t=Z.nextStringDelay;te.add([{delay:t[0]},...e,{delay:t[1]}])},d=async()=>{if(!s()&&ie&&V.appendChild(ie),ne){((e,t)=>{let n=`[${S}='${e}'] .${k}`,i=getComputedStyle(t),o=Object.entries(j).reduce(((e,[t,n])=>`${e} ${t}: var(--ti-cursor-${t}, ${n||i[t]});`),"");x(`${n} { display: inline-block; width: 0; ${o} }`,e)})(ee,V),ie.dataset.tiAnimationId=ee;let{animation:e}=Z.cursor,{frames:t,options:n}=e;F({frames:t,cursor:ie,options:{duration:Z.cursorSpeed,...n}})}},f=async(e=!0)=>{Y.started=!0;let t=t=>{te.done(t,!e)};try{let o=[...te.getQueue()];for(let e=0;e<o.length;e++){let[n,s]=o[e];if(!s.done){if(!s.deletable||s.deletable&&a().length){let n=await i(e,o);Array(n-e).fill(e+1).map(((e,t)=>e+t)).forEach((e=>{let[n]=o[e];t(n)})),e=n}t(n)}}if(!e)return this;if(Y.completed=!0,await Z.afterComplete(this),!Z.loop)throw"";let s=Z.loopDelay;n((async()=>{await(async e=>{let t=c();t&&await v({value:t});let n=a().map((e=>[Symbol(),{func:U,delay:r(1),deletable:!0,shouldPauseCursor:()=>!0}]));for(let e=0;e<n.length;e++)await i(e,n);te.reset(),te.set(0,{delay:e})})(s[0]),f()}),s[1])}catch(e){}return this},v=async e=>{var t,n,i;t=e,n=J,i=a(),J=Math.min(Math.max(n+t,0),i.length),((e,t,n)=>{let i=t[n-1],o=N(`.${k}`,e);(e=i?.parentNode||e).insertBefore(o,i||null)})(V,a(),J)},m=e=>((e,t)=>{if(I(e))return void(e.value=`${e.value}${t.textContent}`);t.innerHTML="";let n=(i=t.originalParent,/body/i.test(i?.tagName)?e:t.originalParent||e);var i;n.insertBefore(t,N("."+k,n)||null)})(V,e),X=async e=>Z=R(Z,e),B=async()=>{s()?V.value="":a().forEach(o)},U=()=>{let e=a();e.length&&(s()?V.value=V.value.slice(0,-1):o(e[J]))};this.break=function(e){return l({func:()=>m(A("BR")),typeable:!0},e)},this.delete=function(e=null,t={}){e=O(e);let n=u(t),i=e,{instant:o,to:s}=t,a=te.getTypeable(),h=null===i?a.length:q(i)?i:z({queueItems:a,selector:i,cursorPosition:c(),to:s});return l([n[0],...H({func:U,delay:o?0:r(1),deletable:!0},h),n[1]],t)},this.empty=function(e={}){return l({func:B},e)},this.exec=function(e,t={}){let n=u(t);return l([n[0],{func:()=>e(this)},n[1]],t)},this.move=function(e,t={}){e=O(e);let n=u(t),{instant:i,to:o}=t,s=z({queueItems:te.getTypeable(),selector:null===e?"":e,to:o,cursorPosition:c()}),a=s<0?-1:1;return K=c()+s,l([n[0],...H({func:()=>v(a),delay:i?0:r(),cursorable:!0},Math.abs(s)),n[1]],t)},this.options=function(e,t={}){return e=O(e),X(e),l({},t)},this.pause=function(e,t={}){return l({delay:O(e)},t)},this.type=function(e,t={}){e=O(e);let{instant:n}=t,i=u(t),o=function(e,t=!0){return t?T(E(e)):p(e).map(g)}(e,Z.html).map((e=>{return{func:()=>m(e),char:e,delay:n||(t=e,/<(.+)>(.*?)<\/(.+)>/.test(t.outerHTML))?0:r(),typeable:e.nodeType===Node.TEXT_NODE};var t})),s=[i[0],{func:async()=>await Z.beforeString(e,this)},...o,{func:async()=>await Z.afterString(e,this)},i[1]];return l(s,t)},this.is=function(e){return Y[e]},this.destroy=function(e=!0){Q.forEach(clearTimeout),Q=[],O(e)&&ie&&o(ie),Y.destroyed=!0},this.freeze=function(){Y.frozen=!0},this.unfreeze=()=>{},this.reset=function(e){!this.is("destroyed")&&this.destroy(),e?(te.wipe(),e(this)):te.reset(),J=0;for(let e in Y)Y[e]=!1;return V[s()?"value":"innerHTML"]="",this},this.go=function(){return Y.started?this:(d(),Z.waitUntilVisible?(((e,t)=>{new IntersectionObserver(((n,i)=>{n.forEach((n=>{n.isIntersecting&&(t(),i.unobserve(e))}))}),{threshold:1}).observe(e)})(V,f.bind(this)),this):(f(),this))},this.flush=function(e=(()=>{})){return d(),f(!1).then(e),this},this.getQueue=()=>te,this.getOptions=()=>Z,this.updateOptions=e=>X(e),this.getElement=()=>V;let V="string"==typeof(W=e)?N(W):W;var W;let Q=[],J=0,K=null,Y=R({},w);t.cursor=(e=>{if("object"==typeof e){let t={},{frames:n,options:i}=L.cursor.animation;return t.animation=e.animation||{},t.animation.frames=e.animation?.frames||n,t.animation.options=R(i,e.animation?.options||{}),t.autoPause=e.autoPause??L.cursor.autoPause,t.autoPauseDelay=e.autoPauseDelay||L.cursor.autoPauseDelay,t}return!0===e?L.cursor:e})(t.cursor??L.cursor);let Z=R(L,t);Z=R(Z,{html:!s()&&Z.html,nextStringDelay:M(Z.nextStringDelay),loopDelay:M(Z.loopDelay)});let ee=Math.random().toString().substring(2,9),te=function(e){let t=function(e){return y(e).forEach((e=>o.set(Symbol(e.char?.innerText),n({...e})))),this},n=e=>(e.shouldPauseCursor=function(){return Boolean(this.typeable||this.cursorable||this.deletable)},e),i=()=>Array.from(o.values()),o=new Map;return t(e),{add:t,set:function(e,t){let i=[...o.keys()];o.set(i[e],n(t))},wipe:function(){o=new Map,t(e)},reset:function(){o.forEach((e=>delete e.done))},destroy:e=>o.delete(e),done:(e,t=!1)=>t?o.delete(e):o.get(e).done=!0,getItems:(e=!1)=>e?i():i().filter((e=>!e.done)),getQueue:()=>o,getTypeable:()=>i().filter((e=>e.typeable))}}([{delay:Z.startDelay}]);V.dataset.typeitId=ee,x(C);let ne=!!Z.cursor&&!s(),ie=(()=>{if(s())return;let e=A("span");return e.className=k,ne?(e.innerHTML=E(Z.cursorChar).innerHTML,e):(e.style.visibility="hidden",e)})();Z.strings=(e=>{let t=V.innerHTML;return t?(V.innerHTML="",Z.startDelete?(V.innerHTML=t,b(V),h(H({func:U,delay:r(1),deletable:!0},a().length)),e):t.replace(/<!--(.+?)-->/g,"").trim().split(/<br(?:\s*?)(?:\/)?>/).concat(e)):e})(y(Z.strings)),Z.strings.length&&(()=>{let e=Z.strings.filter((e=>!!e));e.forEach(((t,n)=>{if(this.type(t),n+1===e.length)return;let i=Z.breakLines?[{func:()=>m(A("BR")),typeable:!0}]:H({func:U,delay:r(1)},te.getTypeable().length);h(i)}))})()};var B,U=function(){function e(){n(this,e);var t=document.querySelector(".panelSection"),i=document.querySelector(".textArea"),o=document.querySelector(".loading"),s=document.querySelector("html");this.loading=o,this.panel=t,this.textArea=i,this.html=s,this.Aparecer=this.Aparecer.bind(this)}return s(e,[{key:"Aparecer",value:function(){var e=this;this.panel.classList.toggle("ativo"),this.loading.classList.toggle("ativo"),setTimeout((function(){e.loading.classList.toggle("ativo"),e.textArea.style.display="block"}),1e3)}},{key:"Desaparecer",value:function(){this.panel.classList.remove("ativo")}},{key:"pressKey",value:function(e){var t=this;this.html.addEventListener("keydown",(function(n){n.key==e&&t.Desaparecer()}))}},{key:"animarTransicao",value:function(){panelElement.style.transform="translateY(100px)"}}]),e}(),V=function(){function e(t,i,o,s){n(this,e),this.moon=document.querySelector(t),this.sections=document.querySelector(i),this.homeGif=document.querySelector(o),this.logo=document.querySelector(s),this.eventos=["click","touchstart"],this.moon.style.fontSize="1.2rem",this.changeIcon=this.changeIcon.bind(this)}return s(e,[{key:"changeMode",value:function(){var e;e="light"===this.sections.getAttribute("data-theme")?"dark":"light",this.sections.setAttribute("data-theme",e),this.setLocalDarkMode(e)}},{key:"initCheckLocal",value:function(){var e=localStorage.getItem("theme");"light"===e?(this.moon.innerText="🌕",this.logo.src="./img/logo.svg",this.homeGif.src="./img/home.gif"):"dark"===e&&(this.moon.innerText="🌑",this.logo.src="./img/logoDark.svg",this.homeGif.src="./img/homeDark.gif")}},{key:"changeIcon",value:function(e){var t=this;e.cancelable&&e.preventDefault(),"🌕"===this.moon.innerText?(this.moon.innerText="🌑",this.logo.src="./img/logoDark.svg",this.homeGif.style.opacity="0",setTimeout((function(){t.homeGif.src="./img/homeDark.gif",t.homeGif.style.opacity="1",t.homeGif.style.transition="opacity 0.5s ease-in-out;"}),250)):"🌑"===this.moon.innerText&&(this.moon.innerText="🌕",this.logo.src="./img/logo.svg",this.homeGif.style.opacity="0",setTimeout((function(){t.homeGif.src="./img/home.gif",t.homeGif.style.opacity="1"}),250)),this.changeMode()}},{key:"addEventDarkMode",value:function(){var e=this;this.eventos.forEach((function(t){e.moon.addEventListener(t,e.changeIcon)}))}},{key:"setLocalDarkMode",value:function(e){localStorage.setItem("theme",e)}},{key:"checkLocalDarkMode",value:function(){var e;e=null==localStorage.getItem("theme")?document.documentElement.getAttribute("data-theme"):localStorage.getItem("theme"),document.documentElement.setAttribute("data-theme",e)}},{key:"init",value:function(){this.moon&&this.sections&&(this.checkLocalDarkMode(),this.initCheckLocal(),this.addEventDarkMode())}}]),e}(),W=function(){function e(t,i){n(this,e),this.target=document.querySelector(t),this.icon=document.querySelector(i),this.move=this.move.bind(this),this.disapear=this.disapear.bind(this)}return s(e,[{key:"move",value:function(){this.icon.style.transform="translate3d(0, 8px, 0)"}},{key:"disapear",value:function(){this.icon.style.transform="translate3d(0, 0px, 0)"}},{key:"addEventMove",value:function(){var e=this;this.target.addEventListener("mouseover",this.move),this.target.addEventListener("mouseout",(function(){e.disapear()}))}},{key:"init",value:function(){this.addEventMove()}}]),e}();new r(".hMenu",".header",".header-menu",'.link[href^="#"]',".last").init(),B=new U,new X("#text",{lifeLike:!1,speed:50,startDelay:900,afterComplete:function(e){e.destroy(),B.Aparecer()}}).type("olá",{delay:100}).type(", sou ").pause(448).move(null,{to:"START",instant:!0,delay:300}).move(1,{delay:200}).delete(1).type("O",{delay:225}).pause(200).move(7,{instant:!0}).pause(348).type(" C").pause(1e3).delete(1).type("<p></p>").type(" <span class='myName'>Carlos Vinicius,</span>").pause(348).break().pause(200).type(" ").pause(116).type(" ").pause(135).type("programad").delete(1).pause(164).delete(1).pause(157).delete(1).pause(132).delete(1).pause(148).delete(1).pause(160).delete(1).pause(168).delete(1).pause(169).delete(1).pause(167).delete(1).pause(132).type("console.log('").pause(200).type("d").pause(64).type("e").pause(150).type("v").pause(200).delete(1).pause(194).delete(1).pause(183).delete(1).pause(284).type("D").pause(93).type("e").pause(150).type("s").pause(300).type("envolvedor ",{delay:500}).pause(150).type("Front-End",{delay:300}).pause(200).type(".").type("');").pause(1e3).delete(40,{instant:!0}).pause(100).type("<section class='panelSection'></section>").go(),new X("#consoleType",{cursorChar:"▍",strings:"Desenvolvedor Front-End.",lifeLike:!1,speed:50,startDelay:900,afterComplete:function(e){B.pressKey("Enter")}}).go(),new W(".btn-contact",".i-download").init(),new v('[data-menu="smooth"] a[href^="#"]',".logo").init(),new f("[data-animation='scroll']").init();var Q=new d(".slide",".wrap");Q.onResize(),Q.init(),Q.addControl(".controls"),new V(".btnDarkMode","[data-theme]",".homeGif img","#ImagemLogo").init()})();