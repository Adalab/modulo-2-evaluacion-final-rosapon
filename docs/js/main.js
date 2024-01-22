const g=document.createElement("h1"),p=document.createTextNode("Buscador de series de anime");g.appendChild(p);g.setAttribute("class","title");const o=document.querySelector(".js-search-section");o.appendChild(g);const c=document.createElement("input");c.type="text";o.appendChild(c);c.setAttribute("class","inputSection--input");const d=document.createElement("button");d.setAttribute("class","inputSection--button");const h=document.createTextNode("Buscar");d.appendChild(h);o.appendChild(d);const m=document.createElement("button");m.setAttribute("class","inputSection--button");const S=document.createTextNode("Reset");m.appendChild(S);o.appendChild(m);let v=[],f=[];const A="https://api.jikan.moe/v4/anime?q=";let r=document.querySelector(".js-animeList");const l=document.querySelector(".js-favsList");function j(){fetch(A).then(e=>e.json()).then(e=>{v=e.data,T()})}L();function C(e){const i=e.currentTarget.id,n=v.find(a=>i==a.mal_id);if(f.findIndex(a=>a.mal_id===i)===-1){f.push(n);let a=localStorage.getItem("Series favoritas");a=a?JSON.parse(a):[],a.findIndex(u=>u.mal_id===i)===-1&&(a.push(n),localStorage.setItem("Series favoritas",JSON.stringify(a)))}$()}function L(){let e=localStorage.getItem("Series favoritas");e=JSON.parse(e)||[];for(const i of e)l.innerHTML+=` 
        <li  class="js-animeCard favs" id=${i.mal_id}>
        <div class= "card-title">
            <h3 class="js-animeTitle">${i.title} </h3>
            <i class="fa-solid fa-circle-xmark js-deleteCard" id=${i.mal_id}></i>
        </div>
            <img src="${i.images.jpg.image_url}" alt="cartel de ${i.title}" class="js-animeImage">
        </li>`}function I(){const e=document.querySelectorAll(".js-animeCard");for(const i of e)i.addEventListener("click",C),i.classList.add("favourite")}function T(){r.innerHTML="";let e=c.value,i=v.filter(t=>t.title.toLowerCase().includes(e.toLowerCase()));const n="https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg";for(const t of i){let a=localStorage.getItem("Series favoritas");a=JSON.parse(a)||[];const s=a.some(u=>u.mal_id===t.mal_id);t.images.jpg.image_url===null?r.innerHTML+=` 
        <li  class="js-animeCard ${s?"favs":""}" id=${t.mal_id}>
         <div class= "card-title">
     
            <h3 class="js-animeTitle">${t.title} </h3>
           
         </div>
            <img src="${n}" alt="cartel de ${t.title}" class="js-animeImage">
        </li>`:r.innerHTML+=`
        <li class="js-animeCard ${s?"favs":""}" id=${t.mal_id}>
          <div class= "card-title">
            <h3 class="js-animeTitle">${t.title} </h3>
         </div>
            <img src="${t.images.jpg.image_url}" alt="cartel de ${t.title}" class="js-animeImage">
        </li>`}I()}const $=()=>{for(const e of f)l.querySelector(`[id="${e.mal_id}"]`)||(l.innerHTML+=`<li class="js-animeCard favs" id=${e.mal_id}>
            <div class= "card-title">
            <h3 class="js-animeTitle">${e.title} </h3>
            <i class="fa-solid fa-circle-xmark js-deleteCard" id=${e.mal_id}></i>
         </div>
                <img src="${e.images.jpg.image_url}" alt="cartel de ${e.title}" class="js-animeImage">
            </li>`)},_=()=>{localStorage.clear(),l.innerHTML="",r.innerHTML="",c.Value=""},x=e=>{const n=e.target.id;let t=localStorage.getItem("Series favoritas");t=JSON.parse(t)||[];const a=t.findIndex(s=>s.mal_id===n);t.splice(a,1),localStorage.setItem("Series favoritas",JSON.stringify(t)),console.log(t)},F=document.querySelectorAll(".js-deleteCard"),b=()=>{for(const e of F)e.addEventListener("click",x)};b();const k=()=>{l.innerHTML="",console.log("borrar")},E=document.querySelector(".favourites--deleteBtn");E.addEventListener("click",k);d.addEventListener("click",j);m.addEventListener("click",_);
//# sourceMappingURL=main.js.map
