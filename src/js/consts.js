const h1 = document.createElement('h1');
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


/* const h2Favs = document.createElement('h2');
const h2Favstitle = document.createTextNode('Series favoritas');
h2Favs.appendChild(h2Favstitle);
const favSection = document.querySelector('.js-fav-section');
favSection.appendChild(h2Favs);
const favsContainer = document.querySelector('js-favsList');

const h2Results = document.createElement('h2');
const h2ResultsText = document.createTextNode('Resultados');
h2Results.appendChild(h2ResultsText);
const resultsSection = document.querySelector('.js-results-section');
resultsSection.appendChild(h2Results); */








