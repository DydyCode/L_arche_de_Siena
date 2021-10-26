let containerCats = document.getElementById('containerCats');
let containerDogs = document.getElementById('containerDogs');
const url = "https://larchedesiena.herokuapp.com";
let cats = [];
let dogs = [];

getCats();
getDogs();

function getCats() {
  fetch(`${url}/cats`)
  .then(data => data.json())
  .then(res => {
    cats = res;
    showCats();
  })
  .catch(err => {
    console.log(err)
  });
}

function getDogs() {
  fetch(`${url}/dogs`)
  .then(data => data.json())
  .then(res => {
    dogs = res;
    showDogs();
  })
  .catch( err => {
    console.log(err);
  })
}

function showCats() {
  for (var i = 0; i < 4; i++) {


        let link = document.createElement('a');
        link.setAttribute('href', "./Cards/cardCat.html?id=" + cats[i].id);
    
        let card = document.createElement("div");
        card.classList.add('card');
    
        let img = document.createElement('img');
        img.setAttribute('src', url + cats[i].image[i].url );
        img.classList.add("imageCard");
    
        let name = document.createElement('p');
        name.classList.add('nameCard');
        name.textContent = cats[i].nom;
    
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

function showDogs() {
  for (var i = 0; i < dogs.length; i++) {

        let link = document.createElement('a');
        link.setAttribute('href', "./Cards/cardDog.html?id=" + dogs[i].id);
    
        let card = document.createElement("div");
        card.classList.add('card','cardDog');
    
        let img = document.createElement('img');
        img.setAttribute('src', url + dogs[i].image[i].url );
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



