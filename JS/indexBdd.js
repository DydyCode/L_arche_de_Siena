let containerCats = document.getElementById('containerCats');
let containerDogs = document.getElementById('containerDogs');
let requestURL = "https://dydycode.github.io/L_arche_de_Siena/BDD/bdd.json";
let request = new XMLHttpRequest();

request.responseType = 'json';
request.open('GET', requestURL);
request.responseType = 'text'; // now we're getting a string!
request.send();

request.onload = function () {
  var allAnimalsText = request.response; // get the string from the response
  var allAnimals = JSON.parse(allAnimalsText); // convert it to an object
  showCats(allAnimals);
  showDogs(allAnimals);
  localStorage.setItem("Animals", JSON.stringify(allAnimals));
}

function showCats(allCats) {
  var cats = allCats['cats'];

  for (var i = 0; i < 4; i++) {
        let link = document.createElement('a');
        link.setAttribute('href', "./Cards/cardCat.html?id=" + cats[i].id);
    
        let card = document.createElement("div");
        card.classList.add('card');
    
        let img = document.createElement('img');
        img.setAttribute('src', cats[i].image);
        img.classList.add("imageCard");
    
        let name = document.createElement('p');
        name.classList.add('nameCard');
        name.textContent = cats[i].name;
    
        if (cats[i].statut) {
          let statut = document.createElement('span');
          statut.classList.add('reserved', 'popup');
          statut.textContent = cats[i].statut;
          card.appendChild(statut);
        }
    
        let description = document.createElement('div');
        description.classList.add('descriptionCard');
        description.textContent = cats[i].genre + ", " + cats[i].sexe + " ";
    
        let info = document.createElement('p');
        info.classList.add('infocard');
    
        let sex = document.createElement('i');
        sex.classList.add("fas", cats[i].logoSexe, cats[i].sexeSymbol, "symbolIndex");
    
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(description);
        description.appendChild(sex);
        card.appendChild(info);
    
        link.appendChild(card);
    
        containerCats.appendChild(link);
  }
}
function showDogs(allAnimals) {
  var dogs = allAnimals['dogs'];

  for (var i = 0; i < 4; i++) {
        let link = document.createElement('a');
        link.setAttribute('href', "./Cards/cardDog.html?id=" + dogs[i].id);
    
        let card = document.createElement("div");
        card.classList.add('card','cardDog');
    
        let img = document.createElement('img');
        img.setAttribute('src', dogs[i].image);
        img.classList.add("imageCard");
    
        let name = document.createElement('p');
        name.classList.add('nameCard');
        name.textContent = dogs[i].name;
    
        if (dogs[i].statut) {
          let statut = document.createElement('span');
          statut.classList.add('reserved', 'popup');
          statut.textContent = dogs[i].statut;
          card.appendChild(statut);
        }
    
        let description = document.createElement('div');
        description.classList.add('descriptionCard');
        description.textContent = dogs[i].genre + ", " + dogs[i].sexe + " ";
    
        let info = document.createElement('p');
        info.classList.add('infocard');
    
        let sex = document.createElement('i');
        sex.classList.add("fas", dogs[i].logoSexe, dogs[i].sexeSymbol, "symbolIndex");
    
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(description);
        description.appendChild(sex);
        card.appendChild(info);
    
        link.appendChild(card);
    
        containerDogs.appendChild(link);
  }
}



