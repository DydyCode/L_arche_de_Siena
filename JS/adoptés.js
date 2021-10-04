let containerAdopted = document.getElementById('containerAdoptants');
let containerDogs = document.getElementById('containerDogs');
let requestURL = "https://dydycode.github.io/L_arche_de_Siena/BDD/bdd.json";
let request = new XMLHttpRequest();
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
let bdd = JSON.parse(localStorage.getItem('Animals'));
let adopted = bdd.adopted;
let maxPages = Math.ceil(adopted.length / numberOfItems);



function showAdopted() {
  let listOfAdopted = "";

  for (var i = first; i < first + numberOfItems; i++) {
        if (i < adopted.length) {
            listOfAdopted+= 
          `
          <div class="card">
            <img class="imageCard" src="${adopted[i].image}" alt="photo d'adoptants">
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

// function showAdopted(allAdopted) {
//   var adopted = allAdopted['adopted'];

//   for (var i = 0; i < adopted.length; i++) {

//         // Création de la div //
//         let card = document.createElement("div");
//         card.classList.add('card');

//         // Création balise img //
//         let img = document.createElement('img');
//         img.setAttribute('src', adopted[i].image);
//         img.classList.add("imageCard");
    
//         // Création name //
//         let name = document.createElement('p');
//         name.classList.add('nameCard');
//         name.innerHTML = 
//         `
//         ${adopted[i].name} <i class="fas ${adopted[i].logoSexe} ${adopted[i].sexeSymbol} symbol size"></i>
//         `
    
//         // Création description //
//         let description = document.createElement('div');
//         description.classList.add('descriptionCard');

//         // Création info //
//         let info = document.createElement('p');
//         info.classList.add('infocard');
//         info.innerHTML = 
//         `
//         ${adopted[i].description} <i class="fas fa-heart"></i>
//         `

//         // Création date //
//         let date = document.createElement('p');
//         date.classList.add('dateOfAdoption');
//         date.textContent = adopted[i].date;

//         // Montage de la div //
//         card.appendChild(img);
//         card.appendChild(name);
//         card.appendChild(description);
//         card.appendChild(info);
//         card.appendChild(date);
//         containerAdopted.appendChild(card);
//   }
// }

request.responseType = 'json';
request.open('GET', requestURL);
request.responseType = 'text'; // now we're getting a string!
request.send();

request.onload = function () {
  var allAnimalsText = request.response; // get the string from the response
  var allAnimals = JSON.parse(allAnimalsText); // convert it to an object
  showAdopted(allAnimals);
  localStorage.setItem("Animals", JSON.stringify(allAnimals));
}
function next() {
  let animals = JSON.parse(localStorage.getItem('Animals'))
  let adopted = animals.adopted;
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
