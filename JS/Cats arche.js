let containerCats = document.getElementById('containerCatsArche');
let requestURL = "https://dydycode.github.io/L_arche_de_Siena/BDD/bdd.json";
let request = new XMLHttpRequest();
let numberOfItems = 8;
let first = 0;
let acutalPage = 1;
let animals = JSON.parse(localStorage.getItem('Animals'));
let cats = animals.cats;
let maxPages = Math.ceil(cats.length / numberOfItems);

function showCats() {
  let listOfCats = "";

  for (var i = first; i < first + numberOfItems; i++) {
        if (i < cats.length) {       
          if(cats[i].statut) {
            listOfCats+= 
            `
            <a href="../Cards/cardCat.html?id=${cats[i].id}">
              <div class="card">
                  <img class="imageCard" src="${cats[i].image}" alt="photo de ${cats[i].name}">
                  <p class="nameCard">${cats[i].name}</p>
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
          }else {
            listOfCats+= 
            `
            <a href="../Cards/cardCat.html?id=${cats[i].id}">
              <div class="card">
                  <img class="imageCard" src="${cats[i].image}" alt="photo de ${cats[i].name}">
                  <p class="nameCard">${cats[i].name}</p>
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

request.responseType = 'json';
request.open('GET', requestURL);
request.responseType = 'text'; // now we're getting a string!
request.send();

request.onload = function () {
  var allAnimalsText = request.response; // get the string from the response
  var allAnimals = JSON.parse(allAnimalsText); // convert it to an object
  showCats(allAnimals);
  localStorage.setItem("Animals", JSON.stringify(allAnimals));
}
function next() {
  let animals = JSON.parse(localStorage.getItem('Animals'))
  let cats = animals.cats;
  if(first + numberOfItems <= cats.length) {
    first += numberOfItems;
    acutalPage++;
    showCats();
  }
}
function previous() {
  if(first - numberOfItems >=0) {
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