let containerDogs = document.getElementById('containerDogsArche');
let requestURL = "https://dydycode.github.io/L_arche_de_Siena/BDD/bdd.json";
let request = new XMLHttpRequest();
let numberOfItems = 8;
let first = 0;
let acutalPage = 1;
let animals = JSON.parse(localStorage.getItem('Animals'));
let dogs = animals.dogs;
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

let maxPages = Math.ceil(dogs.length / numberOfItems);

function showDogs() {
  let listOfDogs = "";

  for (var i = first; i < first + numberOfItems; i++) {
        if (i < dogs.length) {       
          if(dogs[i].statut) {
            listOfDogs+= 
            `
            <a href="../Cards/cardDog.html?id=${dogs[i].id}">
              <div class="card cardDog">
                  <img class="imageCard" src="${dogs[i].image}" alt="photo de ${dogs[i].name}">
                  <p class="nameCard">${dogs[i].name}</p>
                  <div class="descriptionCard">
                  <span class="reserved popup">${dogs[i].statut}</span>
                      <p class="infocard">
                          ${dogs[i].genre}, ${dogs[i].sexe} <i class="fas ${dogs[i].sexeSymbol} ${dogs[i].logoSexe} symbolIndex"></i>
                      </p>
                  </div>
              </div>
          </a>
            `
            containerDogs.innerHTML = listOfDogs;
          }else {
            listOfDogs+= 
            `
            <a href="../Cards/cardDog.html?id=${dogs[i].id}">
              <div class="card cardDog">
                  <img class="imageCard" src="${dogs[i].image}" alt="photo de ${dogs[i].name}">
                  <p class="nameCard">${dogs[i].name}</p>
                  <div class="descriptionCard">
                      <p class="infocard">
                          ${dogs[i].genre}, ${dogs[i].sexe} <i class="fas ${dogs[i].sexeSymbol} ${dogs[i].logoSexe} symbolIndex"></i>
                      </p>
                  </div>
              </div>
          </a>
            `
            containerDogs.innerHTML = listOfDogs;
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
  showDogs(allAnimals);
  localStorage.setItem("Animals", JSON.stringify(allAnimals));
}

function next() {
  let animals = JSON.parse(localStorage.getItem('Animals'))
  let dogs = animals.dogs;
  if(first + numberOfItems <= dogs.length) {
    first += numberOfItems;
    acutalPage++;
    showDogs();
  }
}
function previous() {
  if(first - numberOfItems >=0) {
    first -= numberOfItems;
    acutalPage--;
    showDogs();
  }
}
function showPageInfo() {
  document.getElementById('pageInfo').innerHTML = `
  Page ${acutalPage} / ${maxPages}
  `
}