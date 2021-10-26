let containerDogs = document.getElementById('containerDogsArche');




const url = "https://larchedesiena.herokuapp.com";
let dogs = [];

getDogs();

function getDogs() {
  fetch(`${url}/dogs`)
  .then(data => data.json())
  .then(res => {
    dogs = res;
    maxPages = Math.ceil(dogs.length / numberOfItems);
    showDogs();
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



function showDogs() {
  let listOfDogs = "";

  for (var i = first; i < first + numberOfItems; i++) {
        if (i < dogs.length) {       
          if(dogs[i].statut) {
            listOfDogs+= 
            `
            <a href="../Cards/cardDog.html?id=${dogs[i].id}">
              <div class="card cardDog">
                  <img class="imageCard" src="${url + dogs[i].image[0].url}" alt="photo de ${dogs[i].nom}">
                  <p class="nameCard">${dogs[i].nom}</p>
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
                  <img class="imageCard" src="${url + dogs[i].image[0].url}" alt="photo de ${dogs[i].nom}">
                  <p class="nameCard">${dogs[i].nom}</p>
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


function next() {
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