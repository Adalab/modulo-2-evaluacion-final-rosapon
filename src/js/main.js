'use strict';

import '/search.js';


let resultAnimes = [];
let favAnimes = [];
const url = "https://api.jikan.moe/v4/anime"
let resultContainer = document.querySelector('.js-allAnimes');

function getDataApi() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        resultAnimes = data.data;
        console.log(resultAnimes);
        renderAnime();

        //aquí irá luego la función render y lo de meterlo en el localstorage  
    })

}

getDataApi();

function renderAnime() {
    let inputSearchValue = inputSearch.value;
    
    resultContainer.innerHTML = "";

    let userSearch = resultAnimes.filter((item) => item.title.toLowerCase().includes(inputSearchValue.toLowerCase()));
    
    for (const eachAnime of userSearch) {
    
        resultContainer.innerHTML += ` <div class="js-allAnimes">
        <div class="js-animeCard">
            <h3 class="js-animeTitle">${eachAnime.title}</h3>
            <img src="${eachAnime.images.jpg.image_url}" alt="cartel de ${eachAnime.title}" class="js-animeImage">
        </div>
    </div>`
    }
   
    
};
            
        


inputSearch.addEventListener('input', renderAnime);