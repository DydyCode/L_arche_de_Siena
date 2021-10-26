let containerCats = document.getElementById('containerCatsArche');
const url = "https://larchedesiena.herokuapp.com";
let cats = [];

getCats();

function getCats() {
  fetch(`${url}/cats`)
  .then(data => data.json())
  .then(res => {
    cats = res;
    maxPages = Math.ceil(cats.length / numberOfItems)
    showCats();
  })
  .catch(err => {
    console.log(err)
  });
}
let numberOfItems = 8;
let first = 0;
let acutalPage = 1;

let maxPages;
let btnNext = document.getElementById('btnNext');
let btnPrevious = document.getElementById('btnPrevious');

btnNext.addEventListener('click', () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})
btnPrevious.addEventListener('click', () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})

function showCats() {
  let listOfCats = "";
  
  for (var i = first; i < first + numberOfItems; i++) {
    console.log(cats[i].image[0].url)
    if (i < cats.length) {
      if (cats[i].statut) {
        listOfCats +=
          `
            <a href="../Cards/cardCat.html?id=${cats[i].id}">
              <div class="card">
                  <img class="imageCard" src=' ${url + cats[i].image[0].url}' alt="photo de ${cats[i].nom}">
                  <p class="nameCard">${cats[i].nom}</p>
                  <div class="descriptionCard">
                  <span class="reserved popup">${cats[i].statut}</span>
                      <p class="infocard">
                          ${cats[i].genre}, ${cats[i].sexe} <i class="fas ${cats[i].sexeSymbol} ${cats[i].logoSexe} symbolIndex"></i>
                      </p>
                  </div>
              </div>
          </a>
            `
        containerCats.innerHTML = listOfCats;
      } else {
        listOfCats +=
          `
            <a href="../Cards/cardCat.html?id=${cats[i].id}">
              <div class="card">
                  <img class="imageCard" src="${url}${cats[i].image[0].url}" alt="photo de ${cats[i].nom}">
                  <p class="nameCard">${cats[i].nom}</p>
                  <div class="descriptionCard">
                      <p class="infocard">
                          ${cats[i].genre}, ${cats[i].sexe} <i class="fas ${cats[i].sexeSymbol} ${cats[i].logoSexe} symbolIndex"></i>
                      </p>
                  </div>
              </div>
          </a>
            `
        containerCats.innerHTML = listOfCats;
      }
      showPageInfo();
    }

  }
}

function next() {
  if (first + numberOfItems <= cats.length) {
    first += numberOfItems;
    acutalPage++;
    showCats();
  }
}
function previous() {
  if (first - numberOfItems >= 0) {
    first -= numberOfItems;
    acutalPage--;
    showCats();
  }
}
function showPageInfo() {
  document.getElementById('pageInfo').innerHTML = `
  Page ${acutalPage} / ${maxPages}
  `
}
