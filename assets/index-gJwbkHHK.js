import{j as e,r as l,S as O,i as v,a as q,R as B,b as D}from"./vendor-DFFd52SQ.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const M=()=>e.jsx("div",{className:"fixed inset-0 bg-white flex items-center justify-center z-50",children:e.jsx("p",{className:"text-xl",children:"Loading images, please wait..."})}),_="11263184-2511e204268bc5cc29e1c41a8",k="https://pixabay.com/api/",z=()=>{const[g,i]=l.useState(""),[n,d]=l.useState([]),[r,o]=l.useState(!1),[u,p]=l.useState(1),[H,w]=l.useState(0),[S,L]=l.useState(""),[y,N]=l.useState(!1),R=l.useRef(null),a=l.useRef(null);l.useEffect(()=>{const t=()=>{try{if(a.current&&(a.current.destroy(),a.current=null),document.querySelectorAll(".gallery a").length===0)return;const m=new O(".gallery a",{captionsData:"data-caption",captionDelay:250,showCounter:!0,enableKeyboard:!0,docClose:!0,animationSpeed:250,preloading:!0,widthRatio:.8,heightRatio:.8,scaleImageToRatio:!0,disableRightClick:!0,closeOnOverlayClick:!0,loop:!0});a.current=m}catch(s){console.error("SimpleLightbox initialization error:",s)}};if(n.length>0){const s=setTimeout(t,300);return()=>clearTimeout(s)}return()=>{try{a.current&&(a.current.destroy(),a.current=null)}catch(s){console.error("SimpleLightbox cleanup error:",s)}}},[n]);const I=t=>{t.preventDefault()},C=()=>{const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})},b=async(t,s)=>{o(!0);try{const m=await q.get(k,{params:{key:_,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:s}}),{hits:h,totalHits:j}=m.data;s===1?(d(h),w(j)):d(c=>{const f=new Set(c.map(x=>x.id)),T=h.filter(x=>!f.has(x.id));return[...c,...T]});const E=s===1?h.length:n.length+h.length;if(N(E<j),a.current&&document.querySelectorAll(".gallery a").length>0){const c=setTimeout(()=>{try{a.current.refresh()}catch(f){console.error("SimpleLightbox refresh error:",f)}},300);return()=>clearTimeout(c)}if(s>1&&h.length>0){const c=setTimeout(C,300);return()=>clearTimeout(c)}}catch{v.error({title:"Error",message:"An error occurred while fetching images. Please try again.",position:"topRight"})}finally{o(!1)}},P=async t=>{t.preventDefault();const s=g.trim();if(!s){v.warning({title:"Warning",message:"Please enter a search term",position:"topRight"});return}p(1),L(s),await b(s,1),i("")},A=async()=>{const t=u+1;p(t),await b(S,t)};return e.jsxs("div",{className:"w-full px-4",children:[e.jsx("form",{onSubmit:P,className:"mb-8 pt-8",children:e.jsxs("div",{className:"flex gap-2 justify-center",children:[e.jsx("input",{type:"text",name:"searchQuery",value:g,onChange:t=>i(t.target.value),placeholder:"Search images...",className:"p-2 border border-gray-300 rounded",required:!0}),e.jsx("button",{type:"submit",className:"px-6 py-2 bg-blue-500 text-white rounded",children:"Search"})]})}),e.jsx("div",{ref:R,className:"gallery grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",children:n.map(t=>e.jsxs("div",{className:"border-2 border-black rounded-lg bg-white overflow-hidden flex flex-col",children:[e.jsx("a",{href:t.largeImageURL,"data-caption":t.tags,className:"block flex-grow gallery-item",onClick:I,children:e.jsx("img",{src:t.webformatURL,alt:t.tags,className:"w-full h-full object-cover",loading:"lazy"})}),e.jsxs("div",{className:"grid grid-cols-4 text-center text-xs py-3 mt-auto",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-bold",children:"Likes"}),e.jsx("div",{children:t.likes})]}),e.jsxs("div",{children:[e.jsx("div",{className:"font-bold",children:"Views"}),e.jsx("div",{children:t.views})]}),e.jsxs("div",{children:[e.jsx("div",{className:"font-bold",children:"Comments"}),e.jsx("div",{children:t.comments})]}),e.jsxs("div",{children:[e.jsx("div",{className:"font-bold",children:"Downloads"}),e.jsx("div",{children:t.downloads})]})]})]},t.id))}),y&&!r&&e.jsx("div",{className:"text-center mt-8",children:e.jsx("button",{onClick:A,className:"px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"Load more"})}),!y&&n.length>0&&e.jsx("p",{className:"text-center mt-8 text-gray-600",children:"We're sorry, but you've reached the end of search results"}),r&&e.jsx("div",{className:"mt-8",children:e.jsx(M,{})})]})};function Q(){return e.jsx(z,{})}B.createRoot(document.getElementById("root")).render(e.jsx(D.StrictMode,{children:e.jsx(Q,{})}));
//# sourceMappingURL=index-gJwbkHHK.js.map