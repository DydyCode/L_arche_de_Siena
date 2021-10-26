const urlParams = new URLSearchParams(window.location.search);
const animal_id = urlParams.get('id');
const container = document.getElementById('containerCardCat');
const url = "https://larchedesiena.herokuapp.com";
let cats = [];

getCats();

function getCats() {
  fetch(`${url}/cats`)
  .then(data => data.json())
  .then(res => {
    cats = res;
    searchGoodCat();
  })
  .catch(err => {
    console.log(err)
  });
}


function searchGoodCat() {
    console.log(cats[0].image)

    for (let i = 0; i != animal_id; i++) {
        if (cats[i].id == animal_id) {
            // Création de la div //
            let div = document.createElement('div');
            div.classList.add('containerCat');
            container.appendChild(div);

            if(cats[i].image[1]) {
                let containerCatV2 = document.createElement('div');
                containerCatV2.classList.add('containerCatV2');

                let containerAllImg = document.createElement('div');
                containerAllImg.classList.add('containerAllImg');

                containerCatV2.appendChild(containerAllImg);

                let linkMain = document.createElement('a');
                linkMain.classList.add('containerImgMain');
                linkMain.setAttribute('href', url + cats[i].image[i].url);
                linkMain.setAttribute('data-lightbox', 'galerie');
                linkMain.setAttribute('data-title', cats[i].nom + ` - L'arche de Siena`);
                containerAllImg.appendChild(linkMain);

                let imageMain = document.createElement('img');
                imageMain.classList.add('imageCat');
                imageMain.setAttribute('src', url + cats[i].image[i].url);
                linkMain.appendChild(imageMain);

                let containerImgNoMain = document.createElement('div');
                containerImgNoMain.classList.add('containerImgNoMain');
                containerAllImg.appendChild(containerImgNoMain);

                let linkImage2 = document.createElement('a');
                linkImage2.classList.add('containerIMG');
                linkImage2.setAttribute('href',url + cats[i].image[1].url);
                linkImage2.setAttribute('data-lightbox', 'galerie');
                linkImage2.setAttribute('data-title', cats[i].nom + ` - L'arche de Siena`);
                containerImgNoMain.appendChild(linkImage2);

                let image2 = document.createElement('img');
                image2.setAttribute('src', url + cats[i].image[1].url);
                image2.classList.add("imageCat", "imgMain");
                linkImage2.appendChild(image2);

                div.appendChild(containerCatV2);

                if (cats[i].image[2]) {

                    let linkImage3 = document.createElement('a');
                    linkImage3.classList.add('containerIMG');
                    linkImage3.setAttribute('href', url + cats[i].image[2].url);
                    linkImage3.setAttribute('data-lightbox', 'galerie');
                    linkImage3.setAttribute('data-title', cats[i].nom + ` - L'arche de Siena`);
                    containerImgNoMain.appendChild(linkImage3);

                    let image3 = document.createElement('img');
                    image3.setAttribute('src',url + cats[i].image[2].url);
                    image3.classList.add("imageCat", "imgMain");
                    linkImage3.appendChild(image3);

                    div.appendChild(containerCatV2);
                }
                if (cats[i].image[3]) {

                    let linkImage4 = document.createElement('a');
                    linkImage4.classList.add('containerIMG');
                    linkImage4.setAttribute('href', url + cats[i].image[3].url);
                    linkImage4.setAttribute('data-lightbox', 'galerie');
                    linkImage4.setAttribute('data-title', cats[i].nom + ` - L'arche de Siena`);
                    containerImgNoMain.appendChild(linkImage4);

                    let image4 = document.createElement('img');
                    image4.setAttribute('src', url + cats[i].image[3].url);
                    image4.classList.add("imageCat", "imgMain");
                    linkImage4.appendChild(image4);

                    div.appendChild(containerCatV2);
                }

            }else {
            // Création de la balise img //
            let img = document.createElement('img');
            img.setAttribute('src', url + cats[0].image[0].url);
            img.classList.add('imageCat', 'imgSolo');
            div.appendChild(img);
            }
            // Création div Text //
            let divText = document.createElement('div');
            divText.classList.add('textCat');
            div.appendChild(divText);

            // container anim //
            let containerAnim = document.createElement('div');
            containerAnim.classList.add('containerAnim')
            divText.appendChild(containerAnim);

            // Création Name //
            let name = document.createElement('p');
            name.classList.add("catName", "bold");
            name.textContent = cats[i].nom + " ";
            containerAnim.appendChild(name);

            // Création sexe logo  //
            let sexeLogo = document.createElement('i');
            sexeLogo.classList.add('fas', cats[i].logoSexe, cats[i].sexeSymbol, 'symbol');
            name.appendChild(sexeLogo);

            if (cats[i].statut) {

                // Création statut //
                let statut = document.createElement('span');
                statut.classList.add('reservedCard');
                statut.textContent = cats[i].statut;
                containerAnim.appendChild(statut);
            }

            // Création race //
            if (cats[i].race) {
                let race = document.createElement('span');
                race.classList.add('race');
                race.textContent = cats[i].race;
                divText.appendChild(race);
            }

            // Création Age //
            let age = document.createElement('p');
            age.classList.add('catage');
            age.textContent = cats[i].age;
            containerAnim.appendChild(age);

            // Création Description //
            let description = document.createElement('p')
            description.classList.add('descriptionCat');
            description.textContent = cats[i].description;
            divText.appendChild(description);

            if (cats[i].statut) {

            }else {
                // Création P container pub & btn //
            let p = document.createElement('p');
            p.innerHTML =
                `
            <p>
            <span class="bold fontStyle">${cats[i].nom}</span> vous intéresse ?
            </p>
            <br>
            <a href="../Conditions/Conditions_adoption.html" class=" btn btnresa">Lire les conditions d'adoption</a>
            `
            description.appendChild(p);
            }

        }

    }
}

