webpackJsonp([0],{pBSs:function(t,n,e){"use strict";function l(t){return g._19(2,[(t()(),g._1(0,0,null,null,21,"article",[["class","item-view-container"]],null,null,null,null,null)),(t()(),g._17(-1,null,["\n  "])),(t()(),g._1(2,0,null,null,3,"header",[["class","item-header"]],null,null,null,null,null)),(t()(),g._17(-1,null,["\n    "])),g._12(null,0),(t()(),g._17(-1,null,["\n  "])),(t()(),g._17(-1,null,["\n  "])),(t()(),g._1(7,0,null,null,6,"div",[["class","image-outer"]],null,null,null,null,null)),(t()(),g._17(-1,null,["\n    "])),(t()(),g._1(9,0,null,null,3,"div",[["class","image-container"]],null,null,null,null,null)),(t()(),g._17(-1,null,["\n      "])),g._12(null,1),(t()(),g._17(-1,null,["\n    "])),(t()(),g._17(-1,null,["\n  "])),(t()(),g._17(-1,null,["\n  "])),(t()(),g._1(15,0,null,null,5,"div",[["class","bottom-content"]],null,null,null,null,null)),(t()(),g._17(-1,null,["\n    "])),g._12(null,2),(t()(),g._17(-1,null,["\n    "])),g._12(null,3),(t()(),g._17(-1,null,["\n  "])),(t()(),g._17(-1,null,["\n"])),(t()(),g._17(-1,null,["\n"]))],null,null)}function i(t){return Error('Unable to find icon with the name "'+t+'"')}function o(t){return Error("The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was \""+t+'".')}function r(t,n,e){return t||new et(n,e)}function s(t){return t.cloneNode(!0)}function u(t,n){return t+":"+n}function c(t){return g._19(2,[g._12(null,0)],null,null)}function a(t){let n=null,e=null;return{memoized:function(){if(!n)return e=t.apply(null,arguments),n=arguments,e;for(let l=0;l<arguments.length;l++)if(arguments[l]!==n[l])return e=t.apply(null,arguments),n=arguments,e;return e},reset:function(){n=null,e=null}}}function h(...t){let n=t;if(Array.isArray(n[0])){const[t,...e]=n;n=[...t,...e]}const e=n.slice(0,n.length-1),l=n[n.length-1],i=e.filter(t=>t.release&&"function"==typeof t.release),o=a(function(...t){return l.apply(null,t)}),r=a(function(t){const n=e.map(n=>n(t));return o.memoized.apply(null,n)});return Object.assign(r.memoized,{release:function(){r.reset(),o.reset(),i.forEach(t=>t.release())},projector:o.memoized})}function p(t){return g._19(0,[(t()(),g._1(0,0,null,null,1,"img",[["appItemViewImage",""]],[[8,"src",4],[8,"alt",0],[8,"className",0]],null,null,null,null)),g._0(1,16384,null,0,b,[],null,null)],null,function(t,n){t(n,0,0,n.parent.context.$implicit.previewImageUrl,n.parent.context.$implicit.title,g._13(n,1).classes)})}function f(t){return g._19(0,[(t()(),g._1(0,0,null,null,58,"div",[],null,null,null,null,null)),(t()(),g._17(-1,null,["\n      "])),(t()(),g._1(2,0,[["contentItem",1]],null,55,"div",[],null,null,null,null,null)),(t()(),g._17(-1,null,["\n        "])),(t()(),g._1(4,0,null,null,52,"app-item-view",[],null,null,null,l,x)),g._0(5,114688,null,0,E,[],null,null),(t()(),g._17(-1,3,["\n          "])),(t()(),g._1(7,0,null,0,8,"div",[["appItemViewAuthor",""]],[[8,"className",0]],null,null,null,null)),g._0(8,16384,null,0,y,[],null,null),(t()(),g._17(-1,null,["\n            "])),(t()(),g._1(10,0,null,null,1,"div",[],null,null,null,null,null)),(t()(),g._17(11,null,["",""])),(t()(),g._17(-1,null,["\n            "])),(t()(),g._1(13,0,null,null,1,"div",[],null,null,null,null,null)),(t()(),g._17(14,null,["",""])),(t()(),g._17(-1,null,["\n          "])),(t()(),g._17(-1,3,["\n          "])),(t()(),g.W(16777216,null,1,1,null,p)),g._0(18,16384,null,0,O.k,[g.L,g.I],{ngIf:[0,"ngIf"]},null),(t()(),g._17(-1,3,["\n          "])),(t()(),g._1(20,0,null,3,3,"div",[["appItemViewVotes",""]],[[8,"className",0]],null,null,null,null)),g._0(21,16384,null,0,S,[],null,null),(t()(),g._17(22,null,[""," upvotes"])),g._15(23,1),(t()(),g._17(-1,3,["\n          "])),(t()(),g._1(25,0,null,3,2,"div",[["appItemViewTitle",""]],[[8,"className",0]],null,null,null,null)),g._0(26,16384,null,0,w,[],null,null),(t()(),g._17(27,null,["",""])),(t()(),g._17(-1,3,["\n          "])),(t()(),g._1(29,0,null,3,2,"div",[["appItemViewComments",""]],[[8,"className",0]],null,null,null,null)),g._0(30,16384,null,0,I,[],null,null),(t()(),g._17(31,null,["View all "," comments"])),(t()(),g._17(-1,3,["\n          "])),(t()(),g._1(33,0,null,2,22,"div",[["appItemViewActions",""]],[[8,"className",0]],null,null,null,null)),g._0(34,16384,null,0,C,[],null,null),(t()(),g._17(-1,null,["\n            "])),(t()(),g._1(36,0,null,null,2,"mat-icon",[["class","mat-icon"],["role","img"]],null,null,null,c,ot)),g._0(37,638976,null,0,lt,[g.k,et,[8,null]],null,null),(t()(),g._17(-1,0,["thumb_up"])),(t()(),g._17(-1,null,["\n            "])),(t()(),g._1(40,0,null,null,2,"mat-icon",[["class","mat-icon"],["role","img"]],null,null,null,c,ot)),g._0(41,638976,null,0,lt,[g.k,et,[8,null]],null,null),(t()(),g._17(-1,0,["thumb_down"])),(t()(),g._17(-1,null,["\n            "])),(t()(),g._1(44,0,null,null,2,"mat-icon",[["class","mat-icon"],["role","img"]],null,null,null,c,ot)),g._0(45,638976,null,0,lt,[g.k,et,[8,null]],null,null),(t()(),g._17(-1,0,["comment"])),(t()(),g._17(-1,null,["\n            "])),(t()(),g._1(48,0,null,null,2,"mat-icon",[["class","mat-icon"],["role","img"]],null,[[null,"click"]],function(t,n,e){var l=!0;return"click"===n&&(l=!1!==t.component.openLink(t.context.$implicit.url)&&l),l},c,ot)),g._0(49,638976,null,0,lt,[g.k,et,[8,null]],null,null),(t()(),g._17(-1,0,["open_in_new"])),(t()(),g._17(-1,null,["\n            "])),(t()(),g._1(52,0,null,null,2,"mat-icon",[["class","mat-icon"],["role","img"]],null,[[null,"click"]],function(t,n,e){var l=!0;return"click"===n&&(l=!1!==t.component.share(t.context.$implicit)&&l),l},c,ot)),g._0(53,638976,null,0,lt,[g.k,et,[8,null]],null,null),(t()(),g._17(-1,0,["share"])),(t()(),g._17(-1,null,["\n          "])),(t()(),g._17(-1,3,["\n        "])),(t()(),g._17(-1,null,["\n      "])),(t()(),g._17(-1,null,["\n    "]))],function(t,n){t(n,5,0),t(n,18,0,n.context.$implicit.previewImageUrl),t(n,37,0),t(n,41,0),t(n,45,0),t(n,49,0),t(n,53,0)},function(t,n){t(n,7,0,g._13(n,8).classes),t(n,11,0,n.context.$implicit.subreddit),t(n,14,0,n.context.$implicit.author),t(n,20,0,g._13(n,21).classes),t(n,22,0,g._18(n,22,0,t(n,23,0,g._13(n.parent,0),n.context.$implicit.score))),t(n,25,0,g._13(n,26).classes),t(n,27,0,n.context.$implicit.title),t(n,29,0,g._13(n,30).classes),t(n,31,0,n.context.$implicit.numOfcomments),t(n,33,0,g._13(n,34).classes)})}function _(t){return g._19(0,[g._14(0,O.e,[g.s]),(t()(),g._1(1,0,null,null,6,"div",[["appScrollParasite",""],["class","listings"]],null,[[null,"reachedBottom"],[null,"scroll"]],function(t,n,e){var l=!0,i=t.component;return"scroll"===n&&(l=!1!==g._13(t,2).onScroll()&&l),"reachedBottom"===n&&(l=!1!==i.loadMore()&&l),l},null,null)),g._0(2,212992,null,0,ft,[g.k],null,{reachedBottom:"reachedBottom"}),(t()(),g._17(-1,null,["\n  "])),(t()(),g.W(16777216,null,null,2,null,f)),g._0(5,802816,null,0,O.j,[g.L,g.I,g.q],{ngForOf:[0,"ngForOf"]},null),g._14(131072,O.b,[g.h]),(t()(),g._17(-1,null,["\n"])),(t()(),g._17(-1,null,["\n"]))],function(t,n){var e=n.component;t(n,2,0),t(n,5,0,g._18(n,5,0,g._13(n,6).transform(e.listing$)))},null)}function m(t,n){switch(void 0===t&&(t=jt),n.type){case d.LIST_COMPLETE:var e=void 0;return n.payload.length&&(e=n.payload[n.payload.length-1].name),Ot({},t,{listings:t.listings.concat(n.payload),continuationToken:e});default:return t}}Object.defineProperty(n,"__esModule",{value:!0});var d,g=e("LMZF"),v=function(){},y=function(){this.classes="author"},b=function(){this.classes="image"},w=function(){this.classes="title"},S=function(){this.classes="votes"},I=function(){this.classes="comments"},C=function(){this.classes="actions"},E=function(){function t(){}return t.prototype.ngOnInit=function(){},t}(),x=g.Z({encapsulation:2,styles:[[".item-view-container{max-width:600px;width:100%;border:1px solid #fff;border-radius:3px;background:#fff}.item-header{margin:16px}.author div{font-size:14px;font-weight:700}.author div:not(:first-child){font-weight:400}.image-container{max-width:600px;max-height:600px;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100vw}.image{width:100%;height:100%}.actions>*{color:rgba(0,0,0,.3)}.actions>:hover{color:rgba(0,0,0,.8);cursor:pointer}.actions>:not(:last-child){margin-right:8px}.bottom-content{margin:16px;line-height:1.4em}.votes{font-weight:600;margin:8px 0}.comments{margin:14px 0;color:rgba(0,0,0,.55)}"]],data:{}}),O=e("Un6q"),j=new g.o("cdk-dir-doc"),k=function(){return function(t){this.value="ltr",this.change=new g.m,t&&(this.value=(t.body?t.body.dir:null)||(t.documentElement?t.documentElement.dir:null)||"ltr")}}(),F=function(){},A=e("6Xbx"),N=(e("TO51"),e("RyBE")),L=("undefined"!=typeof Intl&&Intl,new g.o("mat-sanity-checks")),R=function(){function t(t){this._sanityChecksEnabled=t,this._hasDoneGlobalChecks=!1,this._hasCheckedHammer=!1,this._document="object"==typeof document&&document?document:null,this._window="object"==typeof window&&window?window:null,this._areChecksEnabled()&&!this._hasDoneGlobalChecks&&(this._checkDoctypeIsDefined(),this._checkThemeIsPresent(),this._hasDoneGlobalChecks=!0)}return t.prototype._areChecksEnabled=function(){return this._sanityChecksEnabled&&Object(g.R)()&&!this._isTestEnv()},t.prototype._isTestEnv=function(){return this._window&&(this._window.__karma__||this._window.jasmine)},t.prototype._checkDoctypeIsDefined=function(){this._document&&!this._document.doctype&&console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.")},t.prototype._checkThemeIsPresent=function(){if(this._document&&"function"==typeof getComputedStyle){var t=this._document.createElement("div");t.classList.add("mat-theme-loaded-marker"),this._document.body.appendChild(t);var n=getComputedStyle(t);n&&"none"!==n.display&&console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"),this._document.body.removeChild(t)}},t.prototype._checkHammerIsAvailable=function(){!this._hasCheckedHammer&&this._window&&(this._areChecksEnabled()&&!this._window.Hammer&&console.warn("Could not find HammerJS. Certain Angular Material components may not work correctly."),this._hasCheckedHammer=!0)},t}(),U=e("pXwq"),M=e("wORZ"),T=e("nihM"),P=e("E9/g"),D=e("qLnt"),z=function(){function t(t){this.callback=t}return t.prototype.call=function(t,n){return n.subscribe(new B(t,this.callback))},t}(),B=function(t){function n(n,e){t.call(this,n),this.add(new D.a(e))}return Object(A.c)(n,t),n}(P.a),V=e("qqDE"),H=e("eIqN"),$=e("9iV4"),q=e("AP4T"),G=e("Ecq+"),W=e("1j/l"),Z=e("qgI0"),J=e("lI6h"),X=function(t){function n(n,e){t.call(this),this.sources=n,this.resultSelector=e}return Object(A.c)(n,t),n.create=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];if(null===t||0===arguments.length)return new G.a;var l=null;return"function"==typeof t[t.length-1]&&(l=t.pop()),1===t.length&&Object(W.a)(t[0])&&(t=t[0]),0===t.length?new G.a:new n(t,l)},n.prototype._subscribe=function(t){return new K(t,this.sources,this.resultSelector)},n}(q.a),K=function(t){function n(n,e,l){t.call(this,n),this.sources=e,this.resultSelector=l,this.completed=0,this.haveValues=0;var i=e.length;this.total=i,this.values=new Array(i);for(var o=0;o<i;o++){var r=e[o],s=Object(Z.a)(this,r,null,o);s&&(s.outerIndex=o,this.add(s))}}return Object(A.c)(n,t),n.prototype.notifyNext=function(t,n,e,l,i){this.values[e]=n,i._hasValue||(i._hasValue=!0,this.haveValues++)},n.prototype.notifyComplete=function(t){var n=this.destination,e=this.haveValues,l=this.resultSelector,i=this.values,o=i.length;if(t._hasValue){if(this.completed++,this.completed===o){if(e===o){var r=l?l.apply(this,i):i;n.next(r)}n.complete()}}else n.complete()},n}(J.a),Y=X.create,Q=e("GZB0"),tt=e("ZWUB"),nt=function(t){this.url=t,this.svgElement=null},et=function(){function t(t,n){this._httpClient=t,this._sanitizer=n,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._defaultFontSetClass="material-icons"}return t.prototype.addSvgIcon=function(t,n){return this.addSvgIconInNamespace("",t,n)},t.prototype.addSvgIconInNamespace=function(t,n,e){var l=u(t,n);return this._svgIconConfigs.set(l,new nt(e)),this},t.prototype.addSvgIconSet=function(t){return this.addSvgIconSetInNamespace("",t)},t.prototype.addSvgIconSetInNamespace=function(t,n){var e=new nt(n),l=this._iconSetConfigs.get(t);return l?l.push(e):this._iconSetConfigs.set(t,[e]),this},t.prototype.registerFontClassAlias=function(t,n){return void 0===n&&(n=t),this._fontCssClassesByAlias.set(t,n),this},t.prototype.classNameForFontAlias=function(t){return this._fontCssClassesByAlias.get(t)||t},t.prototype.setDefaultFontSetClass=function(t){return this._defaultFontSetClass=t,this},t.prototype.getDefaultFontSetClass=function(){return this._defaultFontSetClass},t.prototype.getSvgIconFromUrl=function(t){var n=this,e=this._sanitizer.sanitize(g.E.RESOURCE_URL,t);if(!e)throw o(t);var l=this._cachedIconsByUrl.get(e);return l?Object(Q.a)(s(l)):this._loadSvgIconFromConfig(new nt(t)).pipe(Object(T.a)(function(t){return n._cachedIconsByUrl.set(e,t)}),Object(V.a)(function(t){return s(t)}))},t.prototype.getNamedSvgIcon=function(t,n){void 0===n&&(n="");var e=u(n,t),l=this._svgIconConfigs.get(e);if(l)return this._getSvgFromConfig(l);var o=this._iconSetConfigs.get(n);return o?this._getSvgFromIconSetConfigs(t,o):Object(tt.a)(i(e))},t.prototype._getSvgFromConfig=function(t){return t.svgElement?Object(Q.a)(s(t.svgElement)):this._loadSvgIconFromConfig(t).pipe(Object(T.a)(function(n){return t.svgElement=n}),Object(V.a)(function(t){return s(t)}))},t.prototype._getSvgFromIconSetConfigs=function(t,n){var e=this,l=this._extractIconWithNameFromAnySet(t,n);if(l)return Object(Q.a)(l);var o=n.filter(function(t){return!t.svgElement}).map(function(t){return e._loadSvgIconSetFromConfig(t).pipe(Object(M.a)(function(n){var l=e._sanitizer.sanitize(g.E.RESOURCE_URL,t.url);return console.log("Loading icon set URL: "+l+" failed: "+n),Object(Q.a)(null)}),Object(T.a)(function(n){n&&(t.svgElement=n)}))});return Y(o).pipe(Object(V.a)(function(){var l=e._extractIconWithNameFromAnySet(t,n);if(!l)throw i(t);return l}))},t.prototype._extractIconWithNameFromAnySet=function(t,n){for(var e=n.length-1;e>=0;e--){var l=n[e];if(l.svgElement){var i=this._extractSvgIconFromSet(l.svgElement,t);if(i)return i}}return null},t.prototype._loadSvgIconFromConfig=function(t){var n=this;return this._fetchUrl(t.url).pipe(Object(V.a)(function(t){return n._createSvgElementForSingleIcon(t)}))},t.prototype._loadSvgIconSetFromConfig=function(t){var n=this;return this._fetchUrl(t.url).pipe(Object(V.a)(function(t){return n._svgElementFromString(t)}))},t.prototype._createSvgElementForSingleIcon=function(t){var n=this._svgElementFromString(t);return this._setSvgAttributes(n),n},t.prototype._extractSvgIconFromSet=function(t,n){var e=t.querySelector("#"+n);if(!e)return null;var l=e.cloneNode(!0);if(l.id="","svg"===l.nodeName.toLowerCase())return this._setSvgAttributes(l);if("symbol"===l.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(l));var i=this._svgElementFromString("<svg></svg>");return i.appendChild(l),this._setSvgAttributes(i)},t.prototype._svgElementFromString=function(t){var n=document.createElement("DIV");n.innerHTML=t;var e=n.querySelector("svg");if(!e)throw Error("<svg> tag not found");return e},t.prototype._toSvgElement=function(t){for(var n=this._svgElementFromString("<svg></svg>"),e=0;e<t.childNodes.length;e++)t.childNodes[e].nodeType===Node.ELEMENT_NODE&&n.appendChild(t.childNodes[e].cloneNode(!0));return n},t.prototype._setSvgAttributes=function(t){return t.getAttribute("xmlns")||t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),t},t.prototype._fetchUrl=function(t){var n=this;if(!this._httpClient)throw Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.");var e=this._sanitizer.sanitize(g.E.RESOURCE_URL,t);if(!e)throw o(t);var l=this._inProgressUrlFetches.get(e);if(l)return l;var i=this._httpClient.get(e,{responseType:"text"}).pipe(function(t){return function(n){return n.lift(new z(t))}}(function(){return n._inProgressUrlFetches.delete(e)}),Object(H.a)());return this._inProgressUrlFetches.set(e,i),i},t}(),lt=function(t){function n(n,e,l){var i=t.call(this,n)||this;return i._iconRegistry=e,l||n.nativeElement.setAttribute("aria-hidden","true"),i}return Object(A.c)(n,t),n.prototype._splitIconName=function(t){if(!t)return["",""];var n=t.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error('Invalid icon name: "'+t+'"')}},n.prototype.ngOnChanges=function(t){var n=this;if(t.svgIcon)if(this.svgIcon){var e=this._splitIconName(this.svgIcon);this._iconRegistry.getNamedSvgIcon(e[1],e[0]).pipe(Object(U.a)(1)).subscribe(function(t){return n._setSvgElement(t)},function(t){return console.log("Error retrieving icon: "+t.message)})}else this._clearSvgElement();this._usingFontIcon()&&this._updateFontIconClasses()},n.prototype.ngOnInit=function(){this._usingFontIcon()&&this._updateFontIconClasses()},n.prototype._usingFontIcon=function(){return!this.svgIcon},n.prototype._setSvgElement=function(t){this._clearSvgElement(),this._elementRef.nativeElement.appendChild(t)},n.prototype._clearSvgElement=function(){for(var t=this._elementRef.nativeElement,n=t.childNodes.length,e=0;e<n;e++)t.removeChild(t.childNodes[e])},n.prototype._updateFontIconClasses=function(){if(this._usingFontIcon()){var t=this._elementRef.nativeElement,n=this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet):this._iconRegistry.getDefaultFontSetClass();n!=this._previousFontSetClass&&(this._previousFontSetClass&&t.classList.remove(this._previousFontSetClass),n&&t.classList.add(n),this._previousFontSetClass=n),this.fontIcon!=this._previousFontIconClass&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}},n}(function(t,n){return function(t){function e(){for(var e=[],l=0;l<arguments.length;l++)e[l]=arguments[l];var i=t.apply(this,e)||this;return i.color=n,i}return Object(A.c)(e,t),Object.defineProperty(e.prototype,"color",{get:function(){return this._color},set:function(t){var e=t||n;e!==this._color&&(this._color&&this._elementRef.nativeElement.classList.remove("mat-"+this._color),e&&this._elementRef.nativeElement.classList.add("mat-"+e),this._color=e)},enumerable:!0,configurable:!0}),e}(function(t){this._elementRef=t})}()),it=function(){},ot=g.Z({encapsulation:2,styles:[".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}"],data:{}}),rt=function(){function t(){}return t.prototype.call=function(t,n){return n.subscribe(new st(t))},t}(),st=function(t){function n(n){t.call(this,n),this.hasPrev=!1}return Object(A.c)(n,t),n.prototype._next=function(t){this.hasPrev?this.destination.next([this.prev,t]):this.hasPrev=!0,this.prev=t},n}(P.a),ut=(e("8ofh"),e("NePw"),e("GTlS"),e("3iOE"),e("Oryw"),e("d3pa"),e("Bk5J"),e("8JPw"),e("x4z8"),e("PAZ8"),e("JDrH"),e("xIGM").a.Set||function(){return function(){function t(){this._values=[]}return t.prototype.add=function(t){this.has(t)||this._values.push(t)},t.prototype.has=function(t){return-1!==this._values.indexOf(t)},Object.defineProperty(t.prototype,"size",{get:function(){return this._values.length},enumerable:!0,configurable:!0}),t.prototype.clear=function(){this._values.length=0},t}()}()),ct=function(){function t(t,n){this.keySelector=t,this.flushes=n}return t.prototype.call=function(t,n){return n.subscribe(new at(t,this.keySelector,this.flushes))},t}(),at=function(t){function n(n,e,l){t.call(this,n),this.keySelector=e,this.values=new ut,l&&this.add(Object(Z.a)(this,l))}return Object(A.c)(n,t),n.prototype.notifyNext=function(t,n,e,l,i){this.values.clear()},n.prototype.notifyError=function(t,n){this._error(t)},n.prototype._next=function(t){this.keySelector?this._useKeySelector(t):this._finalizeNext(t,t)},n.prototype._useKeySelector=function(t){var n,e=this.destination;try{n=this.keySelector(t)}catch(t){return void e.error(t)}this._finalizeNext(n,t)},n.prototype._finalizeNext=function(t,n){var e=this.values;e.has(t)||(e.add(t),this.destination.next(n))},n}(J.a),ht=(e("GI3C"),e("2kvl"),e("D0q/"),e("ogaK"),e("LaOa")),pt=(e("Ropm"),e("2xqx"),e("IWlW"),e("xEhG"),e("nyhy"),e("tK9/"),e("8Gud"),e("bywS"),e("wP3s"),e("LHF8"),e("YRqN"),e("X9X7"),e("JHvW"),e("2yHI"),e("eoFs"),e("Gcw1"),e("Upor"),e("jaVc"),e("RWQz"),e("nAqi"),e("Ry8D"),e("8Ut3"),e("5jKg")),ft=(e("ltvI"),e("fxt9"),Error,e("Dxsx"),e("X3fp"),function(){function t(t){this.el=t,this.reachedBottom=new g.m,this.scrollBuffer=300,this.scrollEvent=new g.m}return t.prototype.onScroll=function(t){this.scrollEvent.next()},t.prototype.ngOnInit=function(){var t=this;this.scrollSub=this.scrollEvent.pipe(Object(V.a)(function(){return t.el.nativeElement.scrollTop}),function(t){return t.lift(new rt)},Object(ht.a)(function(t){return t[0]<t[1]}),Object(V.a)(function(t){return t[1]}),Object(ht.a)(function(n){return n>t.el.nativeElement.scrollHeight-2*t.el.nativeElement.clientHeight}),Object(V.a)(function(){return t.el.nativeElement.scrollHeight}),function(t){return t.lift(new ct(void 0,void 0))}).subscribe(function(n){return t.reachedBottom.next()})},t.prototype.ngOnDestroy=function(){this.scrollSub&&this.scrollSub.unsubscribe()},t}());!function(t){t.LIST="[Listing] List",t.LIST_COMPLETE="[Listing] List Complete"}(d||(d={}));var _t=function(){return function(t){this.payload=t,this.type=d.LIST}}(),mt=function(){return function(t){this.payload=t,this.type=d.LIST_COMPLETE}}(),dt=(e("2soc"),e("ADVA")),gt=(e("p5Ee"),Object(dt.C)("listingState")),vt=h(gt,function(t){return t.listings}),yt=h(gt,function(t){return t.continuationToken}),bt=function(){function t(t,n){var e=this;this.store=t,this.sharer=n,this.listing$=this.store.select(vt),this.store.select(yt).subscribe(function(t){return e.token=t})}return t.prototype.ngOnInit=function(){this.store.dispatch(new _t)},t.prototype.loadMore=function(){this.store.dispatch(new _t(this.token))},t.prototype.share=function(t){this.sharer.canShare()?this.sharer.share(t.title,void 0,t.url).subscribe():console.log("browser does not support sharing API")},t.prototype.openLink=function(t){window.open(t,"new")},t}(),wt=e("CASk"),St=function(){function t(){}return t.prototype.canShare=function(){return!!navigator.share},t.prototype.share=function(t,n,e){if(this.canShare())return Object(wt.a)(navigator.share({title:t,text:n,url:e})).pipe(Object(V.a)(function(){}));throw new Error("Navigator share API not enabled on this device")},t}(),It=g.Z({encapsulation:0,styles:[[".listings[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;overflow-y:auto;overflow-x:hidden}"]],data:{}}),Ct=g.X("app-list-view",bt,function(t){return g._19(0,[(t()(),g._1(0,0,null,null,1,"app-list-view",[],null,null,null,_,It)),g._0(1,114688,null,0,bt,[dt.n,St],null,null)],function(t,n){t(n,1,0)},null)},{},{},[]),Et=e("UHIZ"),xt=function(){},Ot=this&&this.__assign||Object.assign||function(t){for(var n,e=1,l=arguments.length;e<l;e++){n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},jt={listings:[],continuationToken:void 0},kt=function(){},Ft=function(){function t(t,n){this.baseUrl=t,this.http=n}return t.prototype.get=function(t){var n=this;return void 0===t&&(t=""),this.http.get(this.baseUrl+".json?raw_json=1&after="+t).pipe(Object(V.a)(function(t){return n.mapResponse(t)}))},t.prototype.mapResponse=function(t){var n=this;return console.log(t),t.data.children.map(function(t){return{name:t.data.name,title:t.data.title,url:t.data.url,author:t.data.author,subreddit:t.data.subreddit_name_prefixed,score:t.data.score,numOfcomments:t.data.num_comments,previewImageUrl:n.getImage(t.data)}})},t.prototype.getImage=function(t){if(t.preview&&t.preview.images&&t.preview.images.length){var n=t.preview.images[0].resolutions,e=n[Math.min(n.length-1,3)];return e?e.url:void 0}},t}(),At=e("c8o8"),Nt=e("Tl+Y"),Lt=function(){function t(t,n){var e=this;this.actions$=t,this.service=n,this.list$=this.actions$.ofType(d.LIST).pipe(Object(V.a)(Nt.d),Object(pt.a)(function(t){return e.service.get(t).pipe(Object(V.a)(function(t){return new mt(t)}))}))}return Object(A.b)([Object(Nt.b)(),Object(A.d)("design:type",q.a)],t.prototype,"list$",void 0),t}(),Rt=function(){},Ut=function(){},Mt=function(){};e.d(n,"ListingModuleNgFactory",function(){return Tt});var Tt=g.Y(v,[],function(t){return g._10([g._11(512,g.j,g.U,[[8,[Ct]],[3,g.j],g.v]),g._11(4608,O.m,O.l,[g.s,[2,O.r]]),g._11(6144,j,null,[O.d]),g._11(4608,k,k,[[2,j]]),g._11(5120,et,r,[[3,et],[2,$.c],N.c]),g._11(4608,St,St,[]),g._11(512,O.c,O.c,[]),g._11(512,Et.n,Et.n,[[2,Et.t],[2,Et.m]]),g._11(512,xt,xt,[]),g._11(1024,dt.j,function(){return[{key:"listingState",reducerFactory:dt.A,metaReducers:[],initialState:void 0}]},[]),g._11(1024,dt.r,function(){return[m]},[]),g._11(1024,dt.s,function(t){return[t]},[dt.r]),g._11(1024,dt.b,function(t,n,e){return[dt.x(t,n,e)]},[g.p,dt.r,dt.s]),g._11(131584,dt.o,dt.o,[dt.j,dt.b,dt.g]),g._11(512,kt,kt,[]),g._11(512,Ft,Ft,[At.a,$.c]),g._11(512,Lt,Lt,[Nt.a,Ft]),g._11(1024,Nt.j,function(t){return[Nt.e(t)]},[Lt]),g._11(512,Nt.h,Nt.h,[Nt.g,Nt.j,[2,dt.p]]),g._11(512,Rt,Rt,[]),g._11(512,F,F,[]),g._11(256,L,!0,[]),g._11(512,R,R,[[2,L]]),g._11(512,it,it,[]),g._11(512,Ut,Ut,[]),g._11(512,Mt,Mt,[]),g._11(512,v,v,[]),g._11(1024,Et.k,function(){return[[{path:"",component:bt}]]},[])])})}});