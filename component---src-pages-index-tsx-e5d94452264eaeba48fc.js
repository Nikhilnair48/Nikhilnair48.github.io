"use strict";(self.webpackChunknikhil_nair=self.webpackChunknikhil_nair||[]).push([[691],{3723:function(e,t,a){a.d(t,{L:function(){return h},M:function(){return E},P:function(){return v},S:function(){return z},_:function(){return s},a:function(){return o},b:function(){return c},g:function(){return d},h:function(){return l}});var r=a(7294),i=(a(2369),a(5697)),n=a.n(i);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(i[a]=e[a]);return i}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a,r,i){return void 0===i&&(i={}),o({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},i,{opacity:t?1:0})})}function d(e,t,a,r,i,n,s,l){const c={};n&&(c.backgroundColor=n,"fixed"===a?(c.width=r,c.height=i,c.backgroundColor=n,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],p=function(e){let{layout:t,width:a,height:i}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+i+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=s(e,u);return r.createElement(r.Fragment,null,r.createElement(p,o({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],m=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:i,alt:n="",shouldLoad:l}=e,c=s(e,g);return r.createElement("img",o({},c,{decoding:"async",loading:i,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:n}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:i=!0}=e,n=s(e,m);const l=n.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,o({},n,t,{sizes:l,shouldLoad:i}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,sizes:l})})),c):c};var b;f.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},y.displayName="Picture",y.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const w=["fallback"],v=function(e){let{fallback:t}=e,a=s(e,w);return t?r.createElement(y,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},a))};v.displayName="Placeholder",v.propTypes={fallback:i.string,sources:null==(b=y.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const E=function(e){return r.createElement(r.Fragment,null,r.createElement(y,o({},e)),r.createElement("noscript",null,r.createElement(y,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;const x=function(e,t,a){for(var r=arguments.length,i=new Array(r>3?r-3:0),o=3;o<r;o++)i[o-3]=arguments[o];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(i)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:n().object.isRequired,alt:x},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],N=new Set;let S,_;const T=function(e){let{as:t="div",image:i,style:n,backgroundColor:c,className:d,class:u,onStartLoad:p,onLoad:h,onError:g}=e,m=s(e,k);const{width:f,height:y,layout:b}=i,w=function(e,t,a){const r={};let i="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:r}}(f,y,b),{style:v,className:E}=w,x=s(w,L),C=(0,r.useRef)(),T=(0,r.useMemo)((()=>JSON.stringify(i.images)),[i.images]);u&&(d=u);const I=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,f,y);return(0,r.useEffect)((()=>{S||(S=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return _=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==h||h({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==h||h({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void N.add(T);if(_&&N.has(T))return;let t,r;return S.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;C.current&&(C.current.innerHTML=a(o({isLoading:!0,isLoaded:N.has(T),image:i},m)),N.has(T)||(t=requestAnimationFrame((()=>{C.current&&(r=s(C.current,T,N,n,p,h,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[i]),(0,r.useLayoutEffect)((()=>{N.has(T)&&_&&(C.current.innerHTML=_(o({isLoading:N.has(T),isLoaded:N.has(T),image:i},m)),null==p||p({wasCached:!0}),null==h||h({wasCached:!0}))}),[i]),(0,r.createElement)(t,o({},x,{style:o({},v,n,{backgroundColor:c}),className:E+(d?" "+d:""),ref:C,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},I=(0,r.memo)((function(e){return e.image?(0,r.createElement)(T,e):null}));I.propTypes=C,I.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],j=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),i=2;i<a;i++)r[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},q=new Set(["fixed","fullWidth","constrained"]),A={src:n().string.isRequired,alt:x,width:j,height:j,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!q.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},z=(R=I,function(e){let{src:t,__imageData:a,__error:i}=e,n=s(e,O);return i&&console.warn(i),a?r.createElement(R,o({image:a},n)):(console.warn("Image not loaded",t),null)});var R;z.displayName="StaticImage",z.propTypes=A},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let i=0;i<e.length;i++){const n=e[i];t&&/[a-zA-Z]/.test(n)&&n.toUpperCase()===n?(e=e.slice(0,i)+"-"+e.slice(i),t=!1,r=a,a=!0,i++):a&&r&&/[a-zA-Z]/.test(n)&&n.toLowerCase()===n?(e=e.slice(0,i-1)+"-"+e.slice(i-1),r=a,a=!1,t=!0):(t=n.toLowerCase()===n&&n.toUpperCase()!==n,r=a,a=n.toUpperCase()===n&&n.toLowerCase()!==n)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},7200:function(e,t,a){a.r(t),a.d(t,{Head:function(){return f}});var r=a(7294),i=a(3723),n=a(2788);const o=(0,n.createGlobalStyle)(["body{padding:0;margin:0;width:100%;height:100vh;}"]),s=n.default.div.withConfig({displayName:"pages__HomeBackgroundContainer",componentId:"sc-1a00g4u-0"})(["width:100%;height:100vh;position:absolute;top:0;left:0;background:#272727;opacity:.5;"]),l=(0,n.keyframes)(["from{width:0;}to{width:250px;}"]),c=(0,n.keyframes)(["from{border-right-color:hsl(0,0%,80%);}to{border-right-color:transparent;}"]),d=n.default.span.withConfig({displayName:"pages__NameContainer",componentId:"sc-1a00g4u-1"})(["position:absolute;top:50%;left:50%;margin-right:-50%;transform:translate(-50%,-50%);"]),u=n.default.h1.withConfig({displayName:"pages__HomeNameStyle",componentId:"sc-1a00g4u-2"})(['position:relative;color:hsl(0,0%,68%);font-weight:bold;font-family:"Anonymous Pro",monospace;letter-spacing:7px;overflow:hidden;border-right:2px solid hsl(0,0%,80%);white-space:nowrap;animation:'," 4s steps(44) 1s 1 normal both,"," 500ms infinite;"],l,c),p=n.default.nav.withConfig({displayName:"pages__NavBarContainer",componentId:"sc-1a00g4u-3"})(['z-index:15;position:absolute;top:2%;right:0;left:auto;width:319px;display:table;margin:0 auto;transform:translateY(-50%);a{position:relative;width:33.333%;display:table-cell;text-align:center;color:#949494;text-decoration:none;font-family:Verdana,Geneva,Tahoma,sans-serif;font-weight:bold;padding:10px 20px;transition:0.2s ease color;}a:before,a:after{content:"";position:absolute;border-radius:50%;transform:scale(0);transition:0.2s ease transform;}a:before{top:0;left:10px;width:6px;height:6px;}a:after{top:5px;left:18px;width:4px;height:4px;}#indicator{position:absolute;left:5%;bottom:0;width:30px;height:3px;background-color:#fff;border-radius:5px;transition:0.2s ease left;}a:hover{color:#fff;}a:hover:before,a:hover:after{transform:scale(1);}a:active{color:#fff;}']),h=e=>{let{children:t}=e;return r.createElement(r.Fragment,null,r.createElement(o,{theme:"purple"}),t)},g=n.default.div.withConfig({displayName:"pages__BackgroundContainer",componentId:"sc-1a00g4u-4"})(["width:100%;height:100vh;"]),m=()=>r.createElement(p,null,r.createElement("a",{href:"#"},"Home"),r.createElement("a",{href:"#"},"About"),r.createElement("a",{href:"#"},"Resume"),r.createElement("a",{href:"#"},"Contact"),r.createElement("div",{id:"indicator"}));t.default=()=>r.createElement(h,null,r.createElement("main",null,r.createElement(m,null),r.createElement("section",{id:"home-page"},r.createElement(g,null,r.createElement(i.S,{src:"../images/home.jpg",quality:90,style:{height:"100%",maxHeight:"100vh",width:"100%",objectFit:"cover"},alt:"",__imageData:a(2553)}),r.createElement(s,null)),r.createElement(d,{style:{display:"inline-flex"}},r.createElement(u,null,"Nikhil Nair")))));const f=()=>r.createElement("title",null,"Home Page")},2553:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/Nikhilnair48.github.io/static/1d2f7f398b2ad6d7167b426ae16e3e45/f098b/home.jpg","srcSet":"/Nikhilnair48.github.io/static/1d2f7f398b2ad6d7167b426ae16e3e45/c2317/home.jpg 326w,\\n/Nikhilnair48.github.io/static/1d2f7f398b2ad6d7167b426ae16e3e45/cbeec/home.jpg 652w,\\n/Nikhilnair48.github.io/static/1d2f7f398b2ad6d7167b426ae16e3e45/f098b/home.jpg 1304w","sizes":"(min-width: 1304px) 1304px, 100vw"},"sources":[{"srcSet":"/Nikhilnair48.github.io/static/1d2f7f398b2ad6d7167b426ae16e3e45/0ca64/home.webp 326w,\\n/Nikhilnair48.github.io/static/1d2f7f398b2ad6d7167b426ae16e3e45/771e6/home.webp 652w,\\n/Nikhilnair48.github.io/static/1d2f7f398b2ad6d7167b426ae16e3e45/776ba/home.webp 1304w","type":"image/webp","sizes":"(min-width: 1304px) 1304px, 100vw"}]},"width":1304,"height":871}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-e5d94452264eaeba48fc.js.map