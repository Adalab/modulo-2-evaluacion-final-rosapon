const h1 = document.createElement('h1');
const h1Title = document.createTextNode('Buscador de series de anime');
h1.appendChild(h1Title);
h1.setAttribute('class', 'title')
const searchSection = document.querySelector('.js-search-section');
searchSection.appendChild(h1);


const inputSearch = document.createElement('input')
inputSearch.type = 'text';
searchSection.appendChild(inputSearch);
inputSearch.setAttribute('class', 'inputSection--input')

const btnSearch = document.createElement('button');
btnSearch.setAttribute('class', 'inputSection--button')
const btnSearchText = document.createTextNode('Buscar');
btnSearch.appendChild(btnSearchText);
searchSection.appendChild(btnSearch);
const btnReset = document.createElement('button');
btnReset.setAttribute('class', 'inputSection--button')
const btnResetText = document.createTextNode('Reset');
btnReset.appendChild(btnResetText);
searchSection.appendChild(btnReset);










