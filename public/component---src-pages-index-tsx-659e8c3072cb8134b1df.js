"use strict";(self.webpackChunknikhil_nair=self.webpackChunknikhil_nair||[]).push([[691],{3723:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return E},P:function(){return v},S:function(){return z},_:function(){return s},a:function(){return o},b:function(){return c},g:function(){return d},h:function(){return l}});var r=a(7294),n=(a(2369),a(5697)),i=a.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a,r,n){return void 0===n&&(n={}),o({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,s,l){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=s(e,u);return r.createElement(r.Fragment,null,r.createElement(p,o({},a)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:l}=e,c=s(e,m);return r.createElement("img",o({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:i}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=s(e,h);const l=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,o({},i,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),c):c};var w;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const b=["fallback"],v=function(e){let{fallback:t}=e,a=s(e,b);return t?r.createElement(y,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},a))};v.displayName="Placeholder",v.propTypes={fallback:n.string,sources:null==(w=y.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const E=function(e){return r.createElement(r.Fragment,null,r.createElement(y,o({},e)),r.createElement("noscript",null,r.createElement(y,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;const x=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),o=3;o<r;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:i().object.isRequired,alt:x},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],_=new Set;let N,S;const T=function(e){let{as:t="div",image:n,style:i,backgroundColor:c,className:d,class:u,onStartLoad:p,onLoad:g,onError:m}=e,h=s(e,k);const{width:f,height:y,layout:w}=n,b=function(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(f,y,w),{style:v,className:E}=b,x=s(b,L),C=(0,r.useRef)(),T=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);u&&(d=u);const I=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,f,y);return(0,r.useEffect)((()=>{N||(N=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return S=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(T);if(S&&_.has(T))return;let t,r;return N.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;C.current&&(C.current.innerHTML=a(o({isLoading:!0,isLoaded:_.has(T),image:n},h)),_.has(T)||(t=requestAnimationFrame((()=>{C.current&&(r=s(C.current,T,_,i,p,g,m))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{_.has(T)&&S&&(C.current.innerHTML=S(o({isLoading:_.has(T),isLoaded:_.has(T),image:n},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,o({},x,{style:o({},v,i,{backgroundColor:c}),className:E+(d?" "+d:""),ref:C,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},I=(0,r.memo)((function(e){return e.image?(0,r.createElement)(T,e):null}));I.propTypes=C,I.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],q=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},A=new Set(["fixed","fullWidth","constrained"]),P={src:i().string.isRequired,alt:x,width:q,height:q,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!A.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},z=(R=I,function(e){let{src:t,__imageData:a,__error:n}=e,i=s(e,O);return n&&console.warn(n),a?r.createElement(R,o({image:a},i)):(console.warn("Image not loaded",t),null)});var R;z.displayName="StaticImage",z.propTypes=P},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},7200:function(e,t,a){a.r(t),a.d(t,{Head:function(){return f}});var r=a(7294),n=a(3723),i=a(2788);const o=(0,i.createGlobalStyle)(["body{padding:0;margin:0;width:100%;height:100vh;}"]),s=i.default.div.withConfig({displayName:"pages__HomeBackgroundContainer",componentId:"sc-1a00g4u-0"})(["width:100%;height:100vh;position:absolute;top:0;left:0;background:#272727;opacity:.5;"]),l=(0,i.keyframes)(["from{width:0;}to{width:250px;}"]),c=(0,i.keyframes)(["from{border-right-color:hsl(0,0%,80%);}to{border-right-color:transparent;}"]),d=i.default.span.withConfig({displayName:"pages__NameContainer",componentId:"sc-1a00g4u-1"})(["position:absolute;top:50%;left:50%;margin-right:-50%;transform:translate(-50%,-50%);"]),u=i.default.h1.withConfig({displayName:"pages__HomeNameStyle",componentId:"sc-1a00g4u-2"})(['position:relative;color:hsl(0,0%,68%);font-weight:bold;font-family:"Anonymous Pro",monospace;letter-spacing:7px;overflow:hidden;border-right:2px solid hsl(0,0%,80%);white-space:nowrap;animation:'," 4s steps(44) 1s 1 normal both,"," 500ms infinite;"],l,c),p=i.default.nav.withConfig({displayName:"pages__NavBarContainer",componentId:"sc-1a00g4u-3"})(['z-index:15;position:absolute;top:2%;right:0;left:auto;width:319px;display:table;margin:0 auto;transform:translateY(-50%);a{position:relative;width:33.333%;display:table-cell;text-align:center;color:#949494;text-decoration:none;font-family:Verdana,Geneva,Tahoma,sans-serif;font-weight:bold;padding:10px 20px;transition:0.2s ease color;}a:before,a:after{content:"";position:absolute;border-radius:50%;transform:scale(0);transition:0.2s ease transform;}a:before{top:0;left:10px;width:6px;height:6px;}a:after{top:5px;left:18px;width:4px;height:4px;}#indicator{position:absolute;left:5%;bottom:0;width:30px;height:3px;background-color:#fff;border-radius:5px;transition:0.2s ease left;}a:hover{color:#fff;}a:hover:before,a:hover:after{transform:scale(1);}a:active{color:#fff;}']),g=e=>{let{children:t}=e;return r.createElement(r.Fragment,null,r.createElement(o,{theme:"purple"}),t)},m=i.default.div.withConfig({displayName:"pages__BackgroundContainer",componentId:"sc-1a00g4u-4"})(["width:100%;height:100vh;"]),h=()=>r.createElement(p,null,r.createElement("a",{href:"#"},"Home"),r.createElement("a",{href:"#"},"About"),r.createElement("a",{href:"#"},"Resume"),r.createElement("a",{href:"#"},"Contact"),r.createElement("div",{id:"indicator"}));t.default=()=>r.createElement(g,null,r.createElement("main",null,r.createElement(h,null),r.createElement("section",{id:"home-page"},r.createElement(m,null,r.createElement(n.S,{src:"../images/home.webp",quality:90,style:{height:"100%",maxHeight:"100vh",width:"100%",objectFit:"cover"},alt:"",__error:'No data found for image "../images/home.webp"\n              undefinedCould not read image data file "/Users/nammazhwar/Documents/Personal/learning/tech/2022/gatsby/Nikhilnair48.github.io/.cache/caches/gatsby-plugin-image/3290038169.json". \nThis may mean that the images in "/Users/nammazhwar/Documents/Personal/learning/tech/2022/gatsby/Nikhilnair48.github.io/src/pages/index.tsx" were not processed.\nPlease ensure that your gatsby version is at least 2.24.78.'}),r.createElement(s,null)),r.createElement(d,{style:{display:"inline-flex"}},r.createElement(u,null,"Nikhil Nair")))));const f=()=>r.createElement("title",null,"Home Page")}}]);
//# sourceMappingURL=component---src-pages-index-tsx-659e8c3072cb8134b1df.js.map