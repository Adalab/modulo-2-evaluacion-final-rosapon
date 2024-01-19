'use strict';

import '/search.js';


let resultAnimes = [];
let favAnimes = [];
const url = "https://api.jikan.moe/v4/anime"

function getDataApi() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        resultAnimes = data.data;
        console.log(resultAnimes);

        //aquí irá luego la función render y lo de meterlo en el localstorage

       

        
       
    })

}

getDataApi();

