'use strict';

import './consts.js';

console.log('hola');

/* let resultContainer = document.querySelector('.js-allAnimes'); */

let resultAnimes = [];
let favAnimes = [];
const url = "https://api.jikan.moe/v4/anime?q="






function getDataApi() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        resultAnimes = data.data;
        console.log('jajaja');
       

        //aquí irá luego lo de meterlo en el localstorage  
    })

}
inputSearch.addEventListener('click', getDataApi, renderAnime);


function renderAnime() {

    
    let inputSearchValue = inputSearch.value;
    
    
    let userSearch = resultAnimes.filter((item) => item.title.toLowerCase().includes(inputSearchValue.toLowerCase()));
    const noImageImage = "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"
    for (const eachAnime of userSearch) {
        let resultContainer = document.querySelector('.js-allAnimes');
        resultContainer.innerHTML = "";
    
        if (eachAnime.images.jpg.image_url === null) {

        resultContainer.innerHTML += ` 
        <li class="js-animeCard" id=${eachAnime.mal_id}>
            <h3 class="js-animeTitle">${eachAnime.title}</h3>
            <img src="${noImageImage}" alt="cartel de ${eachAnime.title}" class="js-animeImage">
        </li>`

        } else {
    
        resultContainer.innerHTML += `
        <li class="js-animeCard" id=${eachAnime.mal_id}>
            <h3 class="js-animeTitle">${eachAnime.title}</h3>
            <img src="${eachAnime.images.jpg.image_url}" alt="cartel de ${eachAnime.title}" class="js-animeImage">
        </li>`
    }
}
    
};
            

btnSearch.addEventListener('click',renderAnime)
/* inputSearch.addEventListener('input', renderAnime); */