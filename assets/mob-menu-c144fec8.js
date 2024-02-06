import{a as V,i as y,e as ne,b as re}from"./vendor-322b39ab.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();const X=document.querySelector(".modal-give-rating"),O=document.querySelector(".give-rating-form"),le=document.querySelector(".give-rating-close"),F=O.querySelector('button[type="submit"]'),ce=document.querySelector(".give-rating-p1"),j=document.querySelector(".backdrop"),Z=document.querySelector(".modal-window"),C=document.querySelector(".give-rating-stars"),de="https://energyflow.b.goit.study/api",ue=5,me=new URL("/js_96_Iva02vi/assets/sprite-a657f742.svg#icon-Star-2",self.location);let x,q;const ge=(e,i)=>{x=e.currentTarget.querySelector("input").value,ee(i)},ve=(e,i)=>{ee(i)},ee=e=>{const i=event.currentTarget.querySelector("input").value;e.forEach((s,o)=>{const t=o<i;s.classList.toggle("li-selected",t),s.classList.toggle("li-unselected",!t)})},pe=async e=>{var i,s;F.disabled=!0,e.preventDefault();try{if(!x)throw Error("Please select rating! Make sure to click!");await V.patch(`${de}/exercises/${q}/rating`,{rate:+x,email:e.target.email.value,review:e.target.comment.value}),y.success({message:"Thanks for your review!",position:"topRight",icon:"",zindex:9999999999,messageColor:"var(--white)",backgroundColor:"var(--dark-gray)",position:"topRight"}),O.reset(),te(),await H(q)}catch(o){y.error({message:((s=(i=o.response)==null?void 0:i.data)==null?void 0:s.message)||o.message,position:"topRight",icon:"",zindex:9999999999})}finally{F.disabled=!1}return!1},fe=(e,i)=>{j.appendChild(X),j.classList.remove("visually-hidden"),Z.style.display="none",C.innerHTML="",x=void 0,q=e,ce.innerHTML=i;const s=`
    <svg
      class="icon-Star-2"
      width="24"
      height="24"
      aria-label="modal rating star icon"
    >
      <use href="${me}"></use>
    </svg>`,o=Array.from({length:ue},(a,n)=>{const c=document.createElement("li");c.classList.add("li-star");const r=document.createElement("label");r.innerHTML=s,r.style.pointerEvents="none";const d=document.createElement("input");return d.setAttribute("type","checkbox"),d.style.display="none",d.setAttribute("value",`${n+1}`),c.append(r,d),c});C.append(...o);const t=C.querySelectorAll("li");t.forEach(a=>{a.addEventListener("click",n=>ge(n,t)),a.addEventListener("mouseover",n=>ve(n,t))}),O.addEventListener("submit",pe)};le.addEventListener("click",async e=>{e.stopImmediatePropagation(),await H(q),te()});const te=()=>{X.classList.add("hidden"),Z.style.display="block"},J=new URL("/js_96_Iva02vi/assets/sprite-a657f742.svg#icon-Star-2",self.location),B=document.querySelector(".backdrop");async function he(e){return B.classList.add("is-open"),H(e)}const ye=document.querySelector(".modal-give-rating"),W=document.querySelector(".modal-btn-rating"),be=document.querySelector(".modal-window");async function H(e){try{let r=function(l){l.stopImmediatePropagation(),l.preventDefault();let E=JSON.parse(localStorage.getItem("favorites"))||[];const D=E.findIndex(ae=>ae._id===s._id);D!==-1?(E.splice(D,1),a.innerText="Add to favorites",y.show({message:"Exercise removed from favorites",messageColor:"var(--black)",backgroundColor:"var(--dark-gray)",position:"topRight",zindex:9999999999})):(E.push(s),a.innerText="Remove from favorites",y.show({message:"Exercise added to favorites",messageColor:"var(--white-smoke)",backgroundColor:"var(--dark-gray)",position:"topRight",zindex:9999999999})),localStorage.setItem("favorites",JSON.stringify(E))},$=function(){location.pathname.includes("favorites.html")&&oe(),B.classList.remove("is-open"),t.removeEventListener("click",r),d.removeEventListener("click",$),document.removeEventListener("keydown",P),W.removeEventListener("click",U)},P=function(l){l.key==="Escape"&&$()};const s=(await V.get(`https://energyflow.b.goit.study/api/exercises/${e}`)).data;localStorage.setItem("exerciseModalData",JSON.stringify(s));const o=document.getElementsByClassName("modal-rating-stars")[0];o.innerHTML=s.rating;for(let l=1;l<=5;l++)l<=Math.round(+s.rating)?o.innerHTML+=`<li>
          <svg class="modal-rating-stars-svg-active" width="18" height="18">
            <use href=${J}></use>
          </svg>
        </li>`:o.innerHTML+=`<li>
          <svg class="modal-rating-stars-svg" width="18" height="18">
            <use href=${J}></use>
          </svg>
        </li>`;document.getElementsByClassName("img-gif")[0].src=s.gifUrl,document.getElementsByClassName("modal-title")[0].innerHTML=s.name,document.getElementsByClassName("modal-info-list-title-value")[0].innerHTML=s.target,document.getElementsByClassName("modal-info-list-title-value")[1].innerHTML=s.bodyPart,document.getElementsByClassName("modal-info-list-title-value")[2].innerHTML=s.equipment,document.getElementsByClassName("modal-info-list-title-value")[3].innerHTML=s.popularity,document.getElementsByClassName("modal-info-list-title-value")[4].innerHTML=s.burnedCalories,document.getElementsByClassName("descr")[0].innerHTML=s.description;const t=document.querySelector(".modal-btn-favorites"),a=document.querySelector(".modal-btn-favorites-text"),c=(JSON.parse(localStorage.getItem("favorites"))||[]).findIndex(l=>l._id===s._id);a.innerText=c!==-1?"Remove from favorites":"Add to favorites",t.addEventListener("click",r);const d=document.querySelector(".modal-btn-close");d.addEventListener("click",$);const U=l=>{B.classList.remove("visually-hidden"),be.classList.add("hidden"),fe(e,JSON.parse(localStorage.getItem("exerciseModalData")).rating),ye.classList.remove("hidden"),l.stopImmediatePropagation(),localStorage.removeItem("exerciseModalData")};W.addEventListener("click",U),document.addEventListener("keydown",P)}catch(i){y.error({message:i.message,zindex:9999999999})}}const N=document.querySelector(".favorites-page-items-not-found"),u=document.querySelector(".favorites-page-items-gallery"),se=document.querySelector(".favorites-page-items"),h=document.querySelector(".favorites-mobile-pagination"),Le=new URL("/js_96_Iva02vi/assets/sprite-a657f742.svg#icon-arrow",self.location),w="favorites",Se=localStorage.getItem(w);let p=JSON.parse(Se);const we=new URL("/js_96_Iva02vi/assets/sprite-a657f742.svg#icon-lighticon",self.location),ke=new URL("/js_96_Iva02vi/assets/sprite-a657f742.svg#icon-trash",self.location),v=8;let k=1,m=k*v,b=m-v,g="",M,T,z,L;function I(e){e.style.display="none",e===u&&innerWidth>768&&(se.style.paddingRight="48px")}function _(e){e.style.display="flex",e===u&&innerWidth>768&&(se.style.paddingRight="0")}function S(e){u.innerHTML="";const i=e.reduce((s,o)=>s+`<li class="gallery-list-item">
        <div class="workout-box" id=${o._id}>
          <div class="workout-header">
              <div class="workout-header-wrap">
                  <span class="workout-title">WORKOUT</span>
                  <button type="button" class="delete-workout-btn" id="${o._id}">                            
                      <svg class="trash-icon" id="${o._id}" width="16" height="16" aria-label="trash-icon">
                        <use href=${ke} id="${o._id}"></use>
                      </svg>
                  </button>
              </div>
              <div class="start-button-wrap">Start
                  <svg class="start-arrow-icon" id=${o._id} width="14" height="14" aria-label="start-arrow">
                    <use href=${Le}></use>
                  </svg>
              </div>
          </div>
          <div class="workout-type">
              <svg class="run-man-icon" width="24" height="24" aria-label="run-man">
                  <use href="${we}"></use>
              </svg>
              <h3 class="workout-name">${o.name}</h3>
          </div>
          <div class="workout-description">
              <p class="description-item-name">Burned calories:
                  <span class="description-item-value">${o.burnedCalories} / ${o.time} min</span>
              </p>
              <p class="description-item-name">Body part:
                  <span class="description-item-value">${o.bodyPart}</span>
              </p>
              <p class="description-item-name">Target:
                  <span class="description-item-value">${o.target}</span>
              </p>
          </div>
        </div>
      </li>`,"");u.innerHTML=i,u.addEventListener("click",async s=>{let o;const t=s.target;t.className!=="delete-workout-btn"&&t&&t.closest(".workout-box")&&(o=t.closest(".workout-box").getAttribute("id"),await he(o))}),u.addEventListener("click",s=>{if(s.preventDefault(),s.target.className==="delete-workout-btn"){M=localStorage.getItem(w),T=JSON.parse(M);const o=T.filter(t=>t._id!==s.target.id);if(localStorage.setItem(w,JSON.stringify(o)),o.length===0)I(u),_(N),window.scrollBy({top:700,behavior:"smooth"}),window.innerWidth<768&&I(h);else if(window.innerWidth<768){L=Math.ceil(o.length/v),g="";for(let t=1;t<=L;t++)t===Number(k)?g+=`
                <li>
                  <button class="favorites-pagination-button fav-active-page" type="button" id="${t}">${t}</button>
                </li>`:g+=`
                <li>
                  <button class="favorites-pagination-button" type="button" id="${t}">${t}</button>
                </li>`;h.innerHTML=g,m=k*v,b=m-v,S(o.slice(b,m)),window.scrollBy({top:700,behavior:"smooth"})}else S(o)}})}const oe=()=>{if(window.innerWidth<768&&_(h),window.innerWidth<768){g="",h.innerHTML="",L=Math.ceil(p.length/v);for(let e=1;e<=L;e++)e===1?g+=`
          <li>
            <button class="favorites-pagination-button fav-active-page" type="button" id="${e}">${e}</button>
          </li>`:g+=`
          <li>
            <button class="favorites-pagination-button" type="button" id="${e}">${e}</button>
          </li>`;h.innerHTML=g,S(p.slice(b,m)),h.addEventListener("click",e=>{if(e.preventDefault(),e.target.classList.value.includes("favorites-pagination-button")){k=e.target.id,m=k*v,b=m-v,M=localStorage.getItem(w),T=JSON.parse(M),S(T.slice(b,m));const i=e.target.closest(".favorites-pagination-button");z=document.querySelectorAll(".favorites-pagination-button"),z.forEach(s=>{s.id===i.id?s.classList.add("fav-active-page"):s.classList.remove("fav-active-page")}),window.scrollBy({top:700,behavior:"smooth"})}})}p=JSON.parse(localStorage.getItem(w))||{},!p||p.length===0?(I(u),_(N)):(I(N),S(p)),L=Math.ceil(p.length/3)},G=document.querySelector(".header-navigation-home"),K=document.querySelector(".header-navigation-favorites"),Q=document.querySelector(".menu-list-link-home"),Y=document.querySelector(".menu-list-link-favorites"),f=location.pathname;f==="/team-02-jsproject/index.html"||f==="/team-02-jsproject/"||f==="/index.html"||f==="/"?(K.classList.remove("is-active"),Y.classList.remove("is-active"),G.classList.add("is-active"),Q.classList.add("is-active")):(f==="/team-02-jsproject/favorites.html"||f==="/favorites.html")&&(oe(),G.classList.remove("is-active"),Q.classList.remove("is-active"),K.classList.add("is-active"),Y.classList.add("is-active"));document.addEventListener("DOMContentLoaded",function(){const e="https://energyflow.b.goit.study/api/quote",i="quoteData",s=new Date().toISOString().split("T")[0],o=document.getElementById("quote"),t=JSON.parse(localStorage.getItem(i));t&&t.date===s?a(t.quote,t.author):fetch(e).then(n=>n.json()).then(n=>{const c=n.quote,r=n.author;a(c,r),localStorage.setItem(i,JSON.stringify({quote:c,author:r,date:s}))}).catch(n=>{console.error("Error fetching quote:",n),t&&a(t.quote,t.author)});function a(n,c){const r=o.querySelector(".quote-text"),d=o.querySelector(".quote-author");n.length<100&&(r.style.marginTop="30px",d.style.marginTop="15px"),r.textContent=n,d.textContent=c}});const ie=document.querySelector(".mobile-menu"),R=document.querySelector(".header-burger"),Ee=document.querySelector(".menu-close-button"),xe=document.querySelectorAll(".social-links-link"),A=()=>{const e=R.getAttribute("aria-expanded")==="true"||!1;R.setAttribute("aria-expanded",!e),ie.classList.toggle("is-open"),re[e?"enableBodyScroll":"disableBodyScroll"](document.body)};xe.forEach(e=>e.addEventListener("click",A));R.addEventListener("click",A);Ee.addEventListener("click",A);window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(ie.classList.remove("is-open"),R.setAttribute("aria-expanded",!1),ne(document.body))});export{he as o};
//# sourceMappingURL=mob-menu-c144fec8.js.map
