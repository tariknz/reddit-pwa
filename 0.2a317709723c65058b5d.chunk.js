webpackJsonp([0],{pBSs:function(t,n,e){"use strict";function i(t){return v._20(2,[(t()(),v._1(0,0,null,null,21,"article",[["class","item-view-container"]],null,null,null,null,null)),(t()(),v._18(-1,null,["\n  "])),(t()(),v._1(2,0,null,null,3,"header",[["class","item-header"]],null,null,null,null,null)),(t()(),v._18(-1,null,["\n    "])),v._12(null,0),(t()(),v._18(-1,null,["\n  "])),(t()(),v._18(-1,null,["\n  "])),(t()(),v._1(7,0,null,null,6,"div",[["class","image-outer"]],null,null,null,null,null)),(t()(),v._18(-1,null,["\n    "])),(t()(),v._1(9,0,null,null,3,"div",[["class","image-container"]],null,null,null,null,null)),(t()(),v._18(-1,null,["\n      "])),v._12(null,1),(t()(),v._18(-1,null,["\n    "])),(t()(),v._18(-1,null,["\n  "])),(t()(),v._18(-1,null,["\n  "])),(t()(),v._1(15,0,null,null,5,"div",[["class","bottom-content"]],null,null,null,null,null)),(t()(),v._18(-1,null,["\n    "])),v._12(null,2),(t()(),v._18(-1,null,["\n    "])),v._12(null,3),(t()(),v._18(-1,null,["\n  "])),(t()(),v._18(-1,null,["\n"])),(t()(),v._18(-1,null,["\n"]))],null,null)}function l(t){return Error('Unable to find icon with the name "'+t+'"')}function o(t){return Error("The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was \""+t+'".')}function r(t,n,e){return t||new lt(n,e)}function s(t){return t.cloneNode(!0)}function u(t,n){return t+":"+n}function c(t){return v._20(2,[v._12(null,0)],null,null)}function a(t){let n=null,e=null;return{memoized:function(){if(!n)return e=t.apply(null,arguments),n=arguments,e;for(let i=0;i<arguments.length;i++)if(arguments[i]!==n[i])return e=t.apply(null,arguments),n=arguments,e;return e},reset:function(){n=null,e=null}}}function h(...t){let n=t;if(Array.isArray(n[0])){const[t,...e]=n;n=[...t,...e]}const e=n.slice(0,n.length-1),i=n[n.length-1],l=e.filter(t=>t.release&&"function"==typeof t.release),o=a(function(...t){return i.apply(null,t)}),r=a(function(t){const n=e.map(n=>n(t));return o.memoized.apply(null,n)});return Object.assign(r.memoized,{release:function(){r.reset(),o.reset(),l.forEach(t=>t.release())},projector:o.memoized})}function p(t){return v._20(0,[(t()(),v._1(0,0,null,null,1,"img",[["appItemViewImage",""]],[[4,"min-width",null],[4,"min-height",null],[8,"src",4],[8,"alt",0],[8,"className",0]],null,null,null,null)),v._0(1,16384,null,0,w,[],null,null)],null,function(t,n){t(n,0,0,n.parent.context.$implicit.previewImage.width+"px",n.parent.context.$implicit.previewImage.height+"px",n.parent.context.$implicit.previewImage.url,n.parent.context.$implicit.title,v._13(n,1).classes)})}function f(t){return v._20(0,[(t()(),v._1(0,0,null,null,4,"p",[],null,null,null,null,null)),(t()(),v._18(-1,null,["\n        "])),(t()(),v._1(2,0,null,null,1,"strong",[],null,null,null,null,null)),(t()(),v._18(3,null,["",""])),(t()(),v._18(4,null,[" ","\n      "]))],null,function(t,n){t(n,3,0,n.context.$implicit.author),t(n,4,0,n.context.$implicit.body)})}function m(t){return v._20(0,[(t()(),v._1(0,0,null,null,60,"div",[["appInView",""]],null,[[null,"itemInView"]],function(t,n,e){var i=!0;return"itemInView"===n&&(i=!1!==t.component.onItemInView(t.context.$implicit)&&i),i},null,null)),v._0(1,81920,null,0,x,[v.k],null,{itemInView:"itemInView"}),(t()(),v._18(-1,null,["\n    "])),(t()(),v._1(3,0,null,null,56,"app-item-view",[],null,null,null,i,j)),v._0(4,114688,null,0,E,[],null,null),(t()(),v._18(-1,3,["\n      "])),(t()(),v._1(6,0,null,0,9,"div",[["appItemViewAuthor",""]],[[8,"className",0]],null,null,null,null)),v._0(7,16384,null,0,b,[],null,null),(t()(),v._18(-1,null,["\n        "])),(t()(),v._18(-1,null,["\n        "])),(t()(),v._1(10,0,null,null,1,"div",[],null,null,null,null,null)),(t()(),v._18(11,null,["",""])),(t()(),v._18(-1,null,["\n        "])),(t()(),v._1(13,0,null,null,1,"div",[],null,null,null,null,null)),(t()(),v._18(14,null,["",""])),(t()(),v._18(-1,null,["\n      "])),(t()(),v._18(-1,3,["\n      "])),(t()(),v.W(16777216,null,1,1,null,p)),v._0(18,16384,null,0,F.k,[v.L,v.I],{ngIf:[0,"ngIf"]},null),(t()(),v._18(-1,3,["\n      "])),(t()(),v._1(20,0,null,3,3,"div",[["appItemViewVotes",""]],[[8,"className",0]],null,null,null,null)),v._0(21,16384,null,0,S,[],null,null),(t()(),v._18(22,null,[""," upvotes"])),v._15(23,1),(t()(),v._18(-1,3,["\n      "])),(t()(),v._1(25,0,null,3,2,"p",[["appItemViewTitle",""]],[[8,"className",0]],null,null,null,null)),v._0(26,16384,null,0,I,[],null,null),(t()(),v._18(27,null,["",""])),(t()(),v._18(-1,3,["\n      "])),(t()(),v.W(16777216,null,3,1,null,f)),v._0(30,802816,null,0,F.j,[v.L,v.I,v.q],{ngForOf:[0,"ngForOf"]},null),(t()(),v._18(-1,3,["\n      "])),(t()(),v._1(32,0,null,3,2,"div",[["appItemViewComments",""]],[[8,"className",0]],null,null,null,null)),v._0(33,16384,null,0,C,[],null,null),(t()(),v._18(34,null,["View all "," comments"])),(t()(),v._18(-1,3,["\n      "])),(t()(),v._1(36,0,null,2,22,"div",[["appItemViewActions",""]],[[8,"className",0]],null,null,null,null)),v._0(37,16384,null,0,O,[],null,null),(t()(),v._18(-1,null,["\n        "])),(t()(),v._1(39,0,null,null,2,"mat-icon",[["class","mat-icon"],["role","img"]],null,null,null,c,st)),v._0(40,638976,null,0,ot,[v.k,lt,[8,null]],null,null),(t()(),v._18(-1,0,["thumb_up"])),(t()(),v._18(-1,null,["\n        "])),(t()(),v._1(43,0,null,null,2,"mat-icon",[["class","mat-icon"],["role","img"]],null,null,null,c,st)),v._0(44,638976,null,0,ot,[v.k,lt,[8,null]],null,null),(t()(),v._18(-1,0,["thumb_down"])),(t()(),v._18(-1,null,["\n        "])),(t()(),v._1(47,0,null,null,2,"mat-icon",[["class","mat-icon"],["role","img"]],null,null,null,c,st)),v._0(48,638976,null,0,ot,[v.k,lt,[8,null]],null,null),(t()(),v._18(-1,0,["comment"])),(t()(),v._18(-1,null,["\n        "])),(t()(),v._1(51,0,null,null,2,"mat-icon",[["class","mat-icon"],["role","img"]],null,[[null,"click"]],function(t,n,e){var i=!0;return"click"===n&&(i=!1!==t.component.openLink(t.context.$implicit.url)&&i),i},c,st)),v._0(52,638976,null,0,ot,[v.k,lt,[8,null]],null,null),(t()(),v._18(-1,0,["open_in_new"])),(t()(),v._18(-1,null,["\n        "])),(t()(),v._1(55,0,null,null,2,"mat-icon",[["class","mat-icon"],["role","img"]],null,[[null,"click"]],function(t,n,e){var i=!0;return"click"===n&&(i=!1!==t.component.share(t.context.$implicit)&&i),i},c,st)),v._0(56,638976,null,0,ot,[v.k,lt,[8,null]],null,null),(t()(),v._18(-1,0,["share"])),(t()(),v._18(-1,null,["\n      "])),(t()(),v._18(-1,3,["\n    "])),(t()(),v._18(-1,null,["\n  "]))],function(t,n){t(n,1,0),t(n,4,0),t(n,18,0,n.context.$implicit.previewImage),t(n,30,0,n.context.$implicit.comments),t(n,40,0),t(n,44,0),t(n,48,0),t(n,52,0),t(n,56,0)},function(t,n){t(n,6,0,v._13(n,7).classes),t(n,11,0,n.context.$implicit.subreddit),t(n,14,0,n.context.$implicit.author),t(n,20,0,v._13(n,21).classes),t(n,22,0,v._19(n,22,0,t(n,23,0,v._13(n.parent,0),n.context.$implicit.score))),t(n,25,0,v._13(n,26).classes),t(n,27,0,n.context.$implicit.title),t(n,32,0,v._13(n,33).classes),t(n,34,0,n.context.$implicit.numOfcomments),t(n,36,0,v._13(n,37).classes)})}function d(t){return v._20(0,[v._14(0,F.e,[v.s]),v._16(402653184,1,{viewport:0}),(t()(),v._1(2,0,[[1,0],["viewport",1]],null,0,"div",[["class","viewport"]],null,null,null,null,null)),(t()(),v._18(-1,null,["\n"])),(t()(),v._1(4,0,null,null,6,"div",[["appScrollParasite",""],["class","listings"]],null,[[null,"reachedBottom"],[null,"scroll"]],function(t,n,e){var i=!0,l=t.component;return"scroll"===n&&(i=!1!==v._13(t,5).onScroll()&&i),"reachedBottom"===n&&(i=!1!==l.loadMore()&&i),i},null,null)),v._0(5,212992,null,0,dt,[v.k],null,{reachedBottom:"reachedBottom"}),(t()(),v._18(-1,null,["\n  "])),(t()(),v.W(16777216,null,null,2,null,m)),v._0(8,802816,null,0,F.j,[v.L,v.I,v.q],{ngForOf:[0,"ngForOf"]},null),v._14(131072,F.b,[v.h]),(t()(),v._18(-1,null,["\n"])),(t()(),v._18(-1,null,["\n"]))],function(t,n){var e=n.component;t(n,5,0),t(n,8,0,v._19(n,8,0,v._13(n,9).transform(e.listing$)))},null)}function _(t,n){switch(void 0===t&&(t=At),n.type){case g.LIST_COMPLETE:var e=void 0;return n.payload.length&&(e=n.payload[n.payload.length-1].id),Lt({},t,{listings:t.listings.concat(n.payload),continuationToken:e});case g.LOAD_FIRST_COMMENTS_COMPLETE:var i=t.listings.findIndex(function(t){return t.id===n.payload.listingId}),l=t.listings[i];return l.comments=n.payload.comments,Lt({},t,{listings:t.listings.slice(0,i).concat([Lt({},l)],t.listings.slice(i+1))});default:return t}}Object.defineProperty(n,"__esModule",{value:!0});var g,v=e("LMZF"),y=function(){},b=function(){this.classes="author"},w=function(){this.classes="image"},I=function(){this.classes="title"},S=function(){this.classes="votes"},C=function(){this.classes="comments"},O=function(){this.classes="actions"},E=function(){function t(){}return t.prototype.ngOnInit=function(){},t}(),x=function(){function t(t){this.el=t,this.itemInView=new v.m}return t.prototype.ngOnInit=function(){var t=this;new IntersectionObserver(function(n){n[0].isIntersecting&&t.itemInView.next()},{rootMargin:"0px",threshold:1}).observe(this.el.nativeElement)},t}(),j=v.Z({encapsulation:2,styles:[[".item-view-container{max-width:600px;width:100%;border:1px solid #fff;border-radius:3px;background:#fff}.item-header{margin:16px}.author div{font-size:14px;font-weight:700}.author div:not(:first-child){font-weight:400}.image-container{max-width:600px;max-height:600px;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100vw}.image{width:100%;height:100%}.actions>*{color:rgba(0,0,0,.3)}.actions>:hover{color:rgba(0,0,0,.8);cursor:pointer}.actions>:not(:last-child){margin-right:8px}.bottom-content{margin:16px;line-height:1.4em}.votes{font-weight:600;margin:8px 0}.comments{margin:14px 0;color:rgba(0,0,0,.55)}"]],data:{}}),F=e("Un6q"),k=new v.o("cdk-dir-doc"),L=function(){return function(t){this.value="ltr",this.change=new v.m,t&&(this.value=(t.body?t.body.dir:null)||(t.documentElement?t.documentElement.dir:null)||"ltr")}}(),A=function(){},N=e("6Xbx"),M=(e("TO51"),e("RyBE")),T=("undefined"!=typeof Intl&&Intl,new v.o("mat-sanity-checks")),R=function(){function t(t){this._sanityChecksEnabled=t,this._hasDoneGlobalChecks=!1,this._hasCheckedHammer=!1,this._document="object"==typeof document&&document?document:null,this._window="object"==typeof window&&window?window:null,this._areChecksEnabled()&&!this._hasDoneGlobalChecks&&(this._checkDoctypeIsDefined(),this._checkThemeIsPresent(),this._hasDoneGlobalChecks=!0)}return t.prototype._areChecksEnabled=function(){return this._sanityChecksEnabled&&Object(v.R)()&&!this._isTestEnv()},t.prototype._isTestEnv=function(){return this._window&&(this._window.__karma__||this._window.jasmine)},t.prototype._checkDoctypeIsDefined=function(){this._document&&!this._document.doctype&&console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.")},t.prototype._checkThemeIsPresent=function(){if(this._document&&"function"==typeof getComputedStyle){var t=this._document.createElement("div");t.classList.add("mat-theme-loaded-marker"),this._document.body.appendChild(t);var n=getComputedStyle(t);n&&"none"!==n.display&&console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"),this._document.body.removeChild(t)}},t.prototype._checkHammerIsAvailable=function(){!this._hasCheckedHammer&&this._window&&(this._areChecksEnabled()&&!this._window.Hammer&&console.warn("Could not find HammerJS. Certain Angular Material components may not work correctly."),this._hasCheckedHammer=!0)},t}(),U=e("pXwq"),P=e("wORZ"),V=e("nihM"),D=e("E9/g"),$=e("qLnt"),z=function(){function t(t){this.callback=t}return t.prototype.call=function(t,n){return n.subscribe(new B(t,this.callback))},t}(),B=function(t){function n(n,e){t.call(this,n),this.add(new $.a(e))}return Object(N.c)(n,t),n}(D.a),H=e("qqDE"),q=e("eIqN"),W=e("9iV4"),G=e("AP4T"),Z=e("Ecq+"),J=e("1j/l"),X=e("qgI0"),K=e("lI6h"),Y=function(t){function n(n,e){t.call(this),this.sources=n,this.resultSelector=e}return Object(N.c)(n,t),n.create=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];if(null===t||0===arguments.length)return new Z.a;var i=null;return"function"==typeof t[t.length-1]&&(i=t.pop()),1===t.length&&Object(J.a)(t[0])&&(t=t[0]),0===t.length?new Z.a:new n(t,i)},n.prototype._subscribe=function(t){return new Q(t,this.sources,this.resultSelector)},n}(G.a),Q=function(t){function n(n,e,i){t.call(this,n),this.sources=e,this.resultSelector=i,this.completed=0,this.haveValues=0;var l=e.length;this.total=l,this.values=new Array(l);for(var o=0;o<l;o++){var r=e[o],s=Object(X.a)(this,r,null,o);s&&(s.outerIndex=o,this.add(s))}}return Object(N.c)(n,t),n.prototype.notifyNext=function(t,n,e,i,l){this.values[e]=n,l._hasValue||(l._hasValue=!0,this.haveValues++)},n.prototype.notifyComplete=function(t){var n=this.destination,e=this.haveValues,i=this.resultSelector,l=this.values,o=l.length;if(t._hasValue){if(this.completed++,this.completed===o){if(e===o){var r=i?i.apply(this,l):l;n.next(r)}n.complete()}}else n.complete()},n}(K.a),tt=Y.create,nt=e("GZB0"),et=e("ZWUB"),it=function(t){this.url=t,this.svgElement=null},lt=function(){function t(t,n){this._httpClient=t,this._sanitizer=n,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._defaultFontSetClass="material-icons"}return t.prototype.addSvgIcon=function(t,n){return this.addSvgIconInNamespace("",t,n)},t.prototype.addSvgIconInNamespace=function(t,n,e){var i=u(t,n);return this._svgIconConfigs.set(i,new it(e)),this},t.prototype.addSvgIconSet=function(t){return this.addSvgIconSetInNamespace("",t)},t.prototype.addSvgIconSetInNamespace=function(t,n){var e=new it(n),i=this._iconSetConfigs.get(t);return i?i.push(e):this._iconSetConfigs.set(t,[e]),this},t.prototype.registerFontClassAlias=function(t,n){return void 0===n&&(n=t),this._fontCssClassesByAlias.set(t,n),this},t.prototype.classNameForFontAlias=function(t){return this._fontCssClassesByAlias.get(t)||t},t.prototype.setDefaultFontSetClass=function(t){return this._defaultFontSetClass=t,this},t.prototype.getDefaultFontSetClass=function(){return this._defaultFontSetClass},t.prototype.getSvgIconFromUrl=function(t){var n=this,e=this._sanitizer.sanitize(v.E.RESOURCE_URL,t);if(!e)throw o(t);var i=this._cachedIconsByUrl.get(e);return i?Object(nt.a)(s(i)):this._loadSvgIconFromConfig(new it(t)).pipe(Object(V.a)(function(t){return n._cachedIconsByUrl.set(e,t)}),Object(H.a)(function(t){return s(t)}))},t.prototype.getNamedSvgIcon=function(t,n){void 0===n&&(n="");var e=u(n,t),i=this._svgIconConfigs.get(e);if(i)return this._getSvgFromConfig(i);var o=this._iconSetConfigs.get(n);return o?this._getSvgFromIconSetConfigs(t,o):Object(et.a)(l(e))},t.prototype._getSvgFromConfig=function(t){return t.svgElement?Object(nt.a)(s(t.svgElement)):this._loadSvgIconFromConfig(t).pipe(Object(V.a)(function(n){return t.svgElement=n}),Object(H.a)(function(t){return s(t)}))},t.prototype._getSvgFromIconSetConfigs=function(t,n){var e=this,i=this._extractIconWithNameFromAnySet(t,n);if(i)return Object(nt.a)(i);var o=n.filter(function(t){return!t.svgElement}).map(function(t){return e._loadSvgIconSetFromConfig(t).pipe(Object(P.a)(function(n){var i=e._sanitizer.sanitize(v.E.RESOURCE_URL,t.url);return console.log("Loading icon set URL: "+i+" failed: "+n),Object(nt.a)(null)}),Object(V.a)(function(n){n&&(t.svgElement=n)}))});return tt(o).pipe(Object(H.a)(function(){var i=e._extractIconWithNameFromAnySet(t,n);if(!i)throw l(t);return i}))},t.prototype._extractIconWithNameFromAnySet=function(t,n){for(var e=n.length-1;e>=0;e--){var i=n[e];if(i.svgElement){var l=this._extractSvgIconFromSet(i.svgElement,t);if(l)return l}}return null},t.prototype._loadSvgIconFromConfig=function(t){var n=this;return this._fetchUrl(t.url).pipe(Object(H.a)(function(t){return n._createSvgElementForSingleIcon(t)}))},t.prototype._loadSvgIconSetFromConfig=function(t){var n=this;return this._fetchUrl(t.url).pipe(Object(H.a)(function(t){return n._svgElementFromString(t)}))},t.prototype._createSvgElementForSingleIcon=function(t){var n=this._svgElementFromString(t);return this._setSvgAttributes(n),n},t.prototype._extractSvgIconFromSet=function(t,n){var e=t.querySelector("#"+n);if(!e)return null;var i=e.cloneNode(!0);if(i.id="","svg"===i.nodeName.toLowerCase())return this._setSvgAttributes(i);if("symbol"===i.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(i));var l=this._svgElementFromString("<svg></svg>");return l.appendChild(i),this._setSvgAttributes(l)},t.prototype._svgElementFromString=function(t){var n=document.createElement("DIV");n.innerHTML=t;var e=n.querySelector("svg");if(!e)throw Error("<svg> tag not found");return e},t.prototype._toSvgElement=function(t){for(var n=this._svgElementFromString("<svg></svg>"),e=0;e<t.childNodes.length;e++)t.childNodes[e].nodeType===Node.ELEMENT_NODE&&n.appendChild(t.childNodes[e].cloneNode(!0));return n},t.prototype._setSvgAttributes=function(t){return t.getAttribute("xmlns")||t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),t},t.prototype._fetchUrl=function(t){var n=this;if(!this._httpClient)throw Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.");var e=this._sanitizer.sanitize(v.E.RESOURCE_URL,t);if(!e)throw o(t);var i=this._inProgressUrlFetches.get(e);if(i)return i;var l=this._httpClient.get(e,{responseType:"text"}).pipe(function(t){return function(n){return n.lift(new z(t))}}(function(){return n._inProgressUrlFetches.delete(e)}),Object(q.a)());return this._inProgressUrlFetches.set(e,l),l},t}(),ot=function(t){function n(n,e,i){var l=t.call(this,n)||this;return l._iconRegistry=e,i||n.nativeElement.setAttribute("aria-hidden","true"),l}return Object(N.c)(n,t),n.prototype._splitIconName=function(t){if(!t)return["",""];var n=t.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error('Invalid icon name: "'+t+'"')}},n.prototype.ngOnChanges=function(t){var n=this;if(t.svgIcon)if(this.svgIcon){var e=this._splitIconName(this.svgIcon);this._iconRegistry.getNamedSvgIcon(e[1],e[0]).pipe(Object(U.a)(1)).subscribe(function(t){return n._setSvgElement(t)},function(t){return console.log("Error retrieving icon: "+t.message)})}else this._clearSvgElement();this._usingFontIcon()&&this._updateFontIconClasses()},n.prototype.ngOnInit=function(){this._usingFontIcon()&&this._updateFontIconClasses()},n.prototype._usingFontIcon=function(){return!this.svgIcon},n.prototype._setSvgElement=function(t){this._clearSvgElement(),this._elementRef.nativeElement.appendChild(t)},n.prototype._clearSvgElement=function(){for(var t=this._elementRef.nativeElement,n=t.childNodes.length,e=0;e<n;e++)t.removeChild(t.childNodes[e])},n.prototype._updateFontIconClasses=function(){if(this._usingFontIcon()){var t=this._elementRef.nativeElement,n=this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet):this._iconRegistry.getDefaultFontSetClass();n!=this._previousFontSetClass&&(this._previousFontSetClass&&t.classList.remove(this._previousFontSetClass),n&&t.classList.add(n),this._previousFontSetClass=n),this.fontIcon!=this._previousFontIconClass&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}},n}(function(t,n){return function(t){function e(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];var l=t.apply(this,e)||this;return l.color=n,l}return Object(N.c)(e,t),Object.defineProperty(e.prototype,"color",{get:function(){return this._color},set:function(t){var e=t||n;e!==this._color&&(this._color&&this._elementRef.nativeElement.classList.remove("mat-"+this._color),e&&this._elementRef.nativeElement.classList.add("mat-"+e),this._color=e)},enumerable:!0,configurable:!0}),e}(function(t){this._elementRef=t})}()),rt=function(){},st=v.Z({encapsulation:2,styles:[".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}"],data:{}}),ut=function(){function t(){}return t.prototype.call=function(t,n){return n.subscribe(new ct(t))},t}(),ct=function(t){function n(n){t.call(this,n),this.hasPrev=!1}return Object(N.c)(n,t),n.prototype._next=function(t){this.hasPrev?this.destination.next([this.prev,t]):this.hasPrev=!0,this.prev=t},n}(D.a),at=(e("8ofh"),e("NePw"),e("GTlS"),e("3iOE"),e("Oryw"),e("d3pa"),e("Bk5J"),e("8JPw"),e("x4z8"),e("PAZ8"),e("JDrH"),e("xIGM").a.Set||function(){return function(){function t(){this._values=[]}return t.prototype.add=function(t){this.has(t)||this._values.push(t)},t.prototype.has=function(t){return-1!==this._values.indexOf(t)},Object.defineProperty(t.prototype,"size",{get:function(){return this._values.length},enumerable:!0,configurable:!0}),t.prototype.clear=function(){this._values.length=0},t}()}()),ht=function(){function t(t,n){this.keySelector=t,this.flushes=n}return t.prototype.call=function(t,n){return n.subscribe(new pt(t,this.keySelector,this.flushes))},t}(),pt=function(t){function n(n,e,i){t.call(this,n),this.keySelector=e,this.values=new at,i&&this.add(Object(X.a)(this,i))}return Object(N.c)(n,t),n.prototype.notifyNext=function(t,n,e,i,l){this.values.clear()},n.prototype.notifyError=function(t,n){this._error(t)},n.prototype._next=function(t){this.keySelector?this._useKeySelector(t):this._finalizeNext(t,t)},n.prototype._useKeySelector=function(t){var n,e=this.destination;try{n=this.keySelector(t)}catch(t){return void e.error(t)}this._finalizeNext(n,t)},n.prototype._finalizeNext=function(t,n){var e=this.values;e.has(t)||(e.add(t),this.destination.next(n))},n}(K.a),ft=(e("GI3C"),e("2kvl"),e("D0q/"),e("ogaK"),e("LaOa")),mt=(e("Ropm"),e("2xqx"),e("IWlW"),e("xEhG"),e("nyhy"),e("tK9/"),e("8Gud"),e("bywS"),e("wP3s"),e("LHF8"),e("YRqN"),e("X9X7"),e("JHvW"),e("2yHI"),e("eoFs"),e("Gcw1"),e("Upor"),e("jaVc"),e("RWQz"),e("nAqi"),e("Ry8D"),e("8Ut3"),e("5jKg")),dt=(e("ltvI"),e("fxt9"),Error,e("Dxsx"),e("X3fp"),function(){function t(t){this.el=t,this.reachedBottom=new v.m,this.scrollBuffer=300,this.scrollEvent=new v.m}return t.prototype.onScroll=function(t){this.scrollEvent.next()},t.prototype.ngOnInit=function(){var t=this;this.scrollSub=this.scrollEvent.pipe(Object(H.a)(function(){return t.el.nativeElement.scrollTop}),function(t){return t.lift(new ut)},Object(ft.a)(function(t){return t[0]<t[1]}),Object(H.a)(function(t){return t[1]}),Object(ft.a)(function(n){return n>t.el.nativeElement.scrollHeight-2*t.el.nativeElement.clientHeight}),Object(H.a)(function(){return t.el.nativeElement.scrollHeight}),function(t){return t.lift(new ht(void 0,void 0))}).subscribe(function(n){return t.reachedBottom.next()})},t.prototype.ngOnDestroy=function(){this.scrollSub&&this.scrollSub.unsubscribe()},t}());!function(t){t.LIST="[Listing] List",t.LIST_COMPLETE="[Listing] List Complete",t.LOAD_FIRST_COMMENTS="[Listing] Load First Comments",t.LOAD_FIRST_COMMENTS_COMPLETE="[Listing] Load First Comments Complete"}(g||(g={}));var _t=function(){return function(t){this.payload=t,this.type=g.LIST}}(),gt=function(){return function(t){this.payload=t,this.type=g.LOAD_FIRST_COMMENTS}}(),vt=function(){return function(t){this.payload=t,this.type=g.LOAD_FIRST_COMMENTS_COMPLETE}}(),yt=function(){return function(t){this.payload=t,this.type=g.LIST_COMPLETE}}(),bt=(e("2soc"),e("ADVA")),wt=(e("p5Ee"),Object(bt.C)("listingState")),It=h(wt,function(t){return t.listings}),St=h(wt,function(t){return t.continuationToken}),Ct=function(){function t(t,n){var e=this;this.store=t,this.sharer=n,this.listing$=this.store.select(It),this.store.select(St).subscribe(function(t){return e.token=t})}return t.prototype.ngOnInit=function(){this.store.dispatch(new _t)},t.prototype.loadMore=function(){this.store.dispatch(new _t(this.token))},t.prototype.share=function(t){this.sharer.canShare()?this.sharer.share(t.title,void 0,t.url).subscribe():console.log("browser does not support sharing API")},t.prototype.openLink=function(t){window.open(t,"new")},t.prototype.onItemInView=function(t){t.comments.length||this.store.dispatch(new gt({listingId:t.id,subreddit:t.subreddit}))},t}(),Ot=e("CASk"),Et=function(){function t(){}return t.prototype.canShare=function(){return!!navigator.share},t.prototype.share=function(t,n,e){if(this.canShare())return Object(Ot.a)(navigator.share({title:t,text:n,url:e})).pipe(Object(H.a)(function(){}));throw new Error("Navigator share API not enabled on this device")},t}(),xt=v.Z({encapsulation:0,styles:[[".listings[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;overflow-y:auto;overflow-x:hidden}.viewport[_ngcontent-%COMP%]{position:fixed;top:0;left:0;bottom:0;right:0;z-index:-1}"]],data:{}}),jt=v.X("app-list-view",Ct,function(t){return v._20(0,[(t()(),v._1(0,0,null,null,1,"app-list-view",[],null,null,null,d,xt)),v._0(1,114688,null,0,Ct,[bt.n,Et],null,null)],function(t,n){t(n,1,0)},null)},{},{},[]),Ft=e("UHIZ"),kt=function(){},Lt=this&&this.__assign||Object.assign||function(t){for(var n,e=1,i=arguments.length;e<i;e++){n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},At={listings:[],continuationToken:void 0},Nt=function(){},Mt=function(){function t(t,n){this.baseUrl=t,this.http=n}return t.prototype.get=function(t){var n=this;return void 0===t&&(t=""),this.http.get(this.baseUrl+".json?raw_json=1&after="+t).pipe(Object(H.a)(function(t){return n.mapResponse(t)}))},t.prototype.getComments=function(t,n,e,i){var l=this;return void 0===i&&(i=""),this.http.get(this.baseUrl+"/"+n+"/comments/"+t+".json?raw_json=1&limit="+e+"&after="+i).pipe(Object(H.a)(function(t){return l.mapCommentsResponse(t)}))},t.prototype.mapResponse=function(t){var n=this;return t.data.children.map(function(t){var e={id:t.data.id,title:t.data.title,url:t.data.url,author:t.data.author,subreddit:t.data.subreddit_name_prefixed,score:t.data.score,numOfcomments:t.data.num_comments,comments:[]},i=n.getImage(t.data);return i&&(e.previewImage={url:i.url,width:i.width,height:i.height}),e})},t.prototype.getImage=function(t){if(t.preview&&t.preview.images&&t.preview.images.length){var n=t.preview.images[0].resolutions;return n[Math.min(n.length-1,3)]}},t.prototype.mapCommentsResponse=function(t){return t.length?this.mapComments(t[1]):[]},t.prototype.mapComments=function(t){var n=this;return t.data&&t.data.children&&t.data.children.length?t.data.children.filter(function(t){return"more"!==t.kind}).map(function(t){return{id:t.data.id,body:t.data.body,score:t.data.score,createdOnUtc:t.data.created_utc,author:t.data.author,replies:n.mapComments(t.data.replies)}}):[]},t}(),Tt=e("c8o8"),Rt=e("Tl+Y"),Ut=function(){function t(t,n){var e=this;this.actions$=t,this.service=n,this.list$=this.actions$.ofType(g.LIST).pipe(Object(H.a)(Rt.d),Object(mt.a)(function(t){return e.service.get(t).pipe(Object(H.a)(function(t){return new yt(t)}))})),this.loadFirstComments$=this.actions$.ofType(g.LOAD_FIRST_COMMENTS).pipe(Object(H.a)(Rt.d),Object(mt.a)(function(t){return e.service.getComments(t.listingId,t.subreddit,2).pipe(Object(H.a)(function(n){return new vt({listingId:t.listingId,comments:n})}))}))}return Object(N.b)([Object(Rt.b)(),Object(N.d)("design:type",G.a)],t.prototype,"list$",void 0),Object(N.b)([Object(Rt.b)(),Object(N.d)("design:type",G.a)],t.prototype,"loadFirstComments$",void 0),t}(),Pt=function(){},Vt=function(){},Dt=function(){},$t=function(){};e.d(n,"ListingModuleNgFactory",function(){return zt});var zt=v.Y(y,[],function(t){return v._10([v._11(512,v.j,v.U,[[8,[jt]],[3,v.j],v.v]),v._11(4608,F.m,F.l,[v.s,[2,F.r]]),v._11(6144,k,null,[F.d]),v._11(4608,L,L,[[2,k]]),v._11(5120,lt,r,[[3,lt],[2,W.c],M.c]),v._11(4608,Et,Et,[]),v._11(512,F.c,F.c,[]),v._11(512,Ft.n,Ft.n,[[2,Ft.t],[2,Ft.m]]),v._11(512,kt,kt,[]),v._11(1024,bt.j,function(){return[{key:"listingState",reducerFactory:bt.A,metaReducers:[],initialState:void 0}]},[]),v._11(1024,bt.r,function(){return[_]},[]),v._11(1024,bt.s,function(t){return[t]},[bt.r]),v._11(1024,bt.b,function(t,n,e){return[bt.x(t,n,e)]},[v.p,bt.r,bt.s]),v._11(131584,bt.o,bt.o,[bt.j,bt.b,bt.g]),v._11(512,Nt,Nt,[]),v._11(512,Mt,Mt,[Tt.a,W.c]),v._11(512,Ut,Ut,[Rt.a,Mt]),v._11(1024,Rt.j,function(t){return[Rt.e(t)]},[Ut]),v._11(512,Rt.h,Rt.h,[Rt.g,Rt.j,[2,bt.p]]),v._11(512,Pt,Pt,[]),v._11(512,A,A,[]),v._11(256,T,!0,[]),v._11(512,R,R,[[2,T]]),v._11(512,rt,rt,[]),v._11(512,Vt,Vt,[]),v._11(512,Dt,Dt,[]),v._11(512,$t,$t,[]),v._11(512,y,y,[]),v._11(1024,Ft.k,function(){return[[{path:"",component:Ct}]]},[])])})}});