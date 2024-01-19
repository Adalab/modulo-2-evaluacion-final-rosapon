'use strict';



const h1 = document.createElement('h3');
const h1Title = document.createTextNode('Buscador de series de anime');
h1.appendChild(h1Title);

const searchSection = document.querySelector('.js-search-section');

searchSection.appendChild(h1);

const inputSearch = document.createElement('input')
inputSearch.type = 'text';
searchSection.appendChild(inputSearch);

const btnSearch = document.createElement('button');
const btnSearchText = document.createTextNode('Buscar');
btnSearch.appendChild(btnSearchText);

searchSection.appendChild(btnSearch);

const btnReset = document.createElement('button');
const btnResetText = document.createTextNode('Reset');
btnReset.appendChild(btnResetText);

searchSection.appendChild(btnReset);

