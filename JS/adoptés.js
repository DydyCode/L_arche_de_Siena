let containerAdopted = document.getElementById('containerAdoptants');
let containerDogs = document.getElementById('containerDogs');
const url = "https://larchedesiena.herokuapp.com";
let adopted = [];

getAdopted();

function getAdopted() {
  fetch(`${url}/adopteds`)
  .then( data => data.json())
  .then (res => {
    adopted = res;
    maxPages = (Math.ceil(adopted.length / numberOfItems))
    showAdopted();
  })
}
let btnNext = document.getElementById('btnNext');
let btnPrevious = document.getElementById('btnPrevious');

btnNext.addEventListener('click', (e) => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})
btnPrevious.addEventListener('click', (e) => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})

let numberOfItems = 8;
let first = 0;
let acutalPage = 1;
let maxPages;



function showAdopted() {

  let listOfAdopted = "";

  for (var i = first; i < first + numberOfItems; i++) {
        if (i < adopted.length) {
            listOfAdopted+= 
          `
          <div class="card">
            <img class="imageCard" src="${url}${adopted[i].image[0].url}" alt="photo d'adoptants">
            <p class="nameCard">${adopted[i].name} <i class="fas ${adopted[i].logoSexe} ${adopted[i].sexeSymbol} symbol size"></i></p>
            <div class="descriptionCard">
                <p class="infocard">
                    Belle douce et longue vie petit chou <i class="fas fa-heart"></i>
                </p>
                <p class="dateOfAdoption">
                ${adopted[i].date}
                </p>
            </div>
        </div>
          ` 
          containerAdopted.innerHTML = listOfAdopted;
          showPageInfo();
        }

  }
}

function next() {
  if(first + numberOfItems <= adopted.length) {
    first += numberOfItems;
    acutalPage++;
    showAdopted();
  }
}
function previous() {
  if(first - numberOfItems >=0) {
    first -= numberOfItems;
    acutalPage--;
    showAdopted();
  }
}
function showPageInfo() {
  document.getElementById('pageInfo').innerHTML = `
  Page ${acutalPage} / ${maxPages}
  `
}
