"use strict";

import "./consts.js";

let resultAnimes = [];
let favAnimes = [];

const url = "https://api.jikan.moe/v4/anime?q=";
let resultContainer = document.querySelector(".js-animeList");
const favsContainer = document.querySelector(".js-favsList");

function getDataApi() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      resultAnimes = data.data;
      renderAnime();
    });
}

getDataLocal();

function handleFavAnimes(event) {
  const idAnimeClicked = event.currentTarget.id;

  const foundAnime = resultAnimes.find(
    (anime) => idAnimeClicked == anime.mal_id
  );

  const indexAnimesInFav = favAnimes.findIndex(
    (anime) => anime.mal_id === idAnimeClicked
  );

  if (indexAnimesInFav === -1) {
    favAnimes.push(foundAnime);
    let localAnimes = localStorage.getItem("Series favoritas");
    localAnimes = localAnimes ? JSON.parse(localAnimes) : [];

    const indexInLocalStorage = localAnimes.findIndex(
      (anime) => anime.mal_id === idAnimeClicked
    );

    if (indexInLocalStorage === -1) {
      localAnimes.push(foundAnime);
      localStorage.setItem("Series favoritas", JSON.stringify(localAnimes));
    }
  }

  renderFav();
}

function getDataLocal() {
  let localAnimes = localStorage.getItem("Series favoritas");
  localAnimes = JSON.parse(localAnimes) || [];
  for (const eachLocal of localAnimes) {
    favsContainer.innerHTML += ` 
        <li  class="js-animeCard favs" id=${eachLocal.mal_id}>
        <div class= "card-title">
            <h3 class="js-animeTitle">${eachLocal.title} </h3>
            <i class="fa-solid fa-circle-xmark js-deleteCard" id=${eachLocal.mal_id}></i>
        </div>
            <img src="${eachLocal.images.jpg.image_url}" alt="cartel de ${eachLocal.title}" class="js-animeImage">
        </li>`;
  }
}

function listenerAnimes() {
  const allAnimes = document.querySelectorAll(".js-animeCard");

  for (const oneAnime of allAnimes) {
    oneAnime.addEventListener("click", handleFavAnimes);
    oneAnime.classList.add("favourite");
  }
}

function renderAnime() {
  resultContainer.innerHTML = "";
  let inputSearchValue = inputSearch.value;

  let userSearch = resultAnimes.filter((item) =>
    item.title.toLowerCase().includes(inputSearchValue.toLowerCase())
  );

  const noImageImage =
    "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg";

  for (const eachAnime of userSearch) {
    let localAnimes = localStorage.getItem("Series favoritas");
    localAnimes = JSON.parse(localAnimes) || [];
    const isFav = localAnimes.some(
      (localAnimes) => localAnimes.mal_id === eachAnime.mal_id
    );

    if (eachAnime.images.jpg.image_url === null) {
      resultContainer.innerHTML += ` 
        <li  class="js-animeCard ${isFav ? "favs" : ""}" id=${eachAnime.mal_id}>
         <div class= "card-title">
     
            <h3 class="js-animeTitle">${eachAnime.title} </h3>
           
         </div>
            <img src="${noImageImage}" alt="cartel de ${
        eachAnime.title
      }" class="js-animeImage">
        </li>`;
    } else {
      resultContainer.innerHTML += `
        <li class="js-animeCard ${isFav ? "favs" : ""}" id=${eachAnime.mal_id}>
          <div class= "card-title">
            <h3 class="js-animeTitle">${eachAnime.title} </h3>
         </div>
            <img src="${eachAnime.images.jpg.image_url}" alt="cartel de ${
        eachAnime.title
      }" class="js-animeImage">
        </li>`;
    }
  }
  listenerAnimes();
}

const renderFav = () => {
  for (const eachFav of favAnimes) {
    const renderedFavAnimes = favsContainer.querySelector(
      `[id="${eachFav.mal_id}"]`
    );

    if (!renderedFavAnimes) {
      favsContainer.innerHTML += `<li class="js-animeCard favs" id=${eachFav.mal_id}>
            <div class= "card-title">
            <h3 class="js-animeTitle">${eachFav.title} </h3>
            <i class="fa-solid fa-circle-xmark js-deleteCard" id=${eachFav.mal_id}></i>
         </div>
                <img src="${eachFav.images.jpg.image_url}" alt="cartel de ${eachFav.title}" class="js-animeImage">
            </li>`;
    }
  }
};

const handleReset = () => {
  localStorage.clear();
  favsContainer.innerHTML = "";
  resultContainer.innerHTML = "";
  inputSearch.Value = "";
};

const deleteCard = (event) => {
  const clickedFavAnime = event.target;
  const clickedFavAnimeId = clickedFavAnime.id;

  let localAnimes = localStorage.getItem("Series favoritas");
  localAnimes = JSON.parse(localAnimes) || [];

  const indexOfAnimeToDelete = localAnimes.findIndex(
    (anime) => anime.mal_id === clickedFavAnimeId
  );

  localAnimes.splice(indexOfAnimeToDelete, 1);
  localStorage.setItem("Series favoritas", JSON.stringify(localAnimes));

  console.log(localAnimes);
};

const deleteButtons = document.querySelectorAll(".js-deleteCard");

const listenerDeleteBtn = () => {
  for (const eachButton of deleteButtons) {
    eachButton.addEventListener("click", deleteCard);
  }
};

listenerDeleteBtn();

const deleteFavs = () => {
  favsContainer.innerHTML = "";
  console.log("borrar");
};

const deleteFavsBtn = document.querySelector(".favourites--deleteBtn");

deleteFavsBtn.addEventListener("click", deleteFavs);
btnSearch.addEventListener("click", getDataApi);
btnReset.addEventListener("click", handleReset);
