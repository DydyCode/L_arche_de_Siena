const urlParams = new URLSearchParams(window.location.search);
const animal_id = urlParams.get('id');
const container = document.getElementById('containerCardDog');
let requestURL = "https://dydycode.github.io/L_arche_de_Siena/BDD/bdd.json";
let btnNext = document.getElementById('btnNext');

var request = new XMLHttpRequest();

function searchGoodDog() {
    let getAnimals = localStorage.getItem("Animals");
    let animals = JSON.parse(getAnimals);
    for (let i = 0; i != animal_id; i++) {
        if (animals.dogs[i].id == animal_id) {

            // Création de la div //
            let div = document.createElement('div');
            div.classList.add('containerCat');
            container.appendChild(div);

            if(animals.dogs[i].image2) {
                let containerCatV2 = document.createElement('div');
                containerCatV2.classList.add('containerCatV2');

                let containerAllImg = document.createElement('div');
                containerAllImg.classList.add('containerAllImg');

                containerCatV2.appendChild(containerAllImg);

                let linkMain = document.createElement('a');
                linkMain.classList.add('containerImgMain');
                linkMain.setAttribute('href', animals.dogs[i].image);
                linkMain.setAttribute('data-lightbox', 'galerie');
                linkMain.setAttribute('data-title', animals.dogs[i].name + ` - L'arche de Siena`);
                containerAllImg.appendChild(linkMain);

                let imageMain = document.createElement('img');
                imageMain.classList.add('imageCat');
                imageMain.setAttribute('src', animals.dogs[i].image);
                linkMain.appendChild(imageMain);

                let containerImgNoMain = document.createElement('div');
                containerImgNoMain.classList.add('containerImgNoMain');
                containerAllImg.appendChild(containerImgNoMain);

                let linkImage2 = document.createElement('a');
                linkImage2.classList.add('containerIMG');
                linkImage2.setAttribute('href', animals.dogs[i].image2);
                linkImage2.setAttribute('data-lightbox', 'galerie');
                linkImage2.setAttribute('data-title', animals.dogs[i].name + ` - L'arche de Siena`);
                containerImgNoMain.appendChild(linkImage2);

                let image2 = document.createElement('img');
                image2.setAttribute('src', animals.dogs[i].image2);
                image2.classList.add("imageCat", "imgMain");
                linkImage2.appendChild(image2);

                div.appendChild(containerCatV2);
                
                if (animals.dogs[i].image3) {
        
                    let linkImage3 = document.createElement('a');
                    linkImage3.classList.add('containerIMG');
                    linkImage3.setAttribute('href', animals.dogs[i].image3);
                    linkImage3.setAttribute('data-lightbox', 'galerie');
                    linkImage3.setAttribute('data-title', animals.dogs[i].name + ` - L'arche de Siena`);
                    containerImgNoMain.appendChild(linkImage3);
    
                    let image3 = document.createElement('img');
                    image3.setAttribute('src', animals.dogs[i].image3);
                    image3.classList.add("imageCat", "imgMain");
                    linkImage3.appendChild(image3);
    
                    div.appendChild(containerCatV2);
                }
                if (animals.dogs[i].image4) {
        
                    let linkImage4 = document.createElement('a');
                    linkImage4.classList.add('containerIMG');
                    linkImage4.setAttribute('href', animals.dogs[i].image4);
                    linkImage4.setAttribute('data-lightbox', 'galerie');
                    linkImage4.setAttribute('data-title', animals.dogs[i].name + ` - L'arche de Siena`);
                    containerImgNoMain.appendChild(linkImage4);
    
                    let image4 = document.createElement('img');
                    image4.setAttribute('src', animals.dogs[i].image4);
                    image4.classList.add("imageCat", "imgMain");
                    linkImage4.appendChild(image4);
    
                    div.appendChild(containerCatV2);
                }

            }else {
            // Création de la balise img //
            let img = document.createElement('img');
            img.setAttribute('src', animals.dogs[i].image);
            img.classList.add('imageCat', 'imgSolo');
            div.appendChild(img);
            }
            // Création div Text //
            let divText = document.createElement('div');
            divText.classList.add('textCat', 'cardDog');
            div.appendChild(divText);

            // Création Name //
            let name = document.createElement('p');
            name.classList.add("catName", "bold");
            name.textContent = animals.dogs[i].name + " ";
            divText.appendChild(name);

            // Création sexe logo  //
            let sexeLogo = document.createElement('i');
            sexeLogo.classList.add('fas', animals.dogs[i].logoSexe, animals.dogs[i].sexeSymbol, 'symbol');
            name.appendChild(sexeLogo);

            if (animals.dogs[i].statut) {
                // Création statut //
                let statut = document.createElement('span');
                statut.classList.add('reserved');
                statut.textContent = animals.dogs[i].statut;
                divText.appendChild(statut);
            }

            // Création Age //
            let age = document.createElement('p');
            age.classList.add('catage');
            age.textContent = animals.dogs[i].age;
            divText.appendChild(age);

            // Création Description //
            let description = document.createElement('p')
            description.classList.add('descriptionCat');
            description.textContent = animals.dogs[i].description;
            divText.appendChild(description);

            if (animals.dogs[i].statut) {

            }else {
                // Création P container pub & btn //
            let p = document.createElement('p');
            p.innerHTML =
                `
            <p>
            <span class="bold fontStyle">${animals.dogs[i].name}</span> vous intéresse ?
            </p>
            <br>
            <a href="../Conditions/Conditions_adoption.html" class="btn btnresa"> Lire les conditions d'adoption</a>
            `
            description.appendChild(p);
            }

        }

    }
}

// function searchGoodDog() {
//     let getDogs = localStorage.getItem("Animals");
//     let animals = JSON.parse(getDogs);
//     for (let i = 0; i != animal_id; i++) {
//         if (animals.dogs[i].id = animal_id) {

//             // Création de la div //
//             let div = document.createElement('div');
//             div.classList.add('containerCat');
//             container.appendChild(div);


//             if(animals.dogs[i].image2) {
//                 let containerCatV2 = document.createElement('div');
//                 containerCatV2.classList.add('containerCatV2');

//                 let containerAllImg = document.createElement('div');
//                 containerAllImg.classList.add('containerAllImg');

//                 containerCatV2.appendChild(containerAllImg);

//                 let linkMain = document.createElement('a');
//                 linkMain.classList.add('containerImgMain');
//                 linkMain.setAttribute('href', animals.dogs[i].image);
//                 linkMain.setAttribute('data-lightbox', 'galerie');
//                 linkMain.setAttribute('data-title', animals.dogs[i].name + ` - L'arche de Siena`);
//                 containerAllImg.appendChild(linkMain);

//                 let imageMain = document.createElement('img');
//                 imageMain.classList.add('imageCat');
//                 imageMain.setAttribute('src',animals.dogs[i].image);
//                 linkMain.appendChild(imageMain);

//                 let containerImgNoMain = document.createElement('div');
//                 containerImgNoMain.classList.add('containerImgNoMain');
//                 containerAllImg.appendChild(containerImgNoMain);

//                 let linkImage2 = document.createElement('a');
//                 linkImage2.classList.add('containerIMG');
//                 linkImage2.setAttribute('href', animals.dogs[i].image2);
//                 linkImage2.setAttribute('data-lightbox', 'galerie');
//                 linkImage2.setAttribute('data-title', animals.dogs[i].name + ` - L'arche de Siena`);
//                 containerImgNoMain.appendChild(linkImage2);

//                 let image2 = document.createElement('img');
//                 image2.setAttribute('src', animals.dogs[i].image2);
//                 image2.classList.add("imageCat", "imgMain");
//                 linkImage2.appendChild(image2);

//                 div.appendChild(containerCatV2);
                
//                 if (animals.dogs[i].image3) {
        
//                     let linkImage3 = document.createElement('a');
//                     linkImage3.classList.add('containerIMG');
//                     linkImage3.setAttribute('href', animals.dogs[i].image3);
//                     linkImage3.setAttribute('data-lightbox', 'galerie');
//                     linkImage3.setAttribute('data-title', animals.dogs[i].name + ` - L'arche de Siena`);
//                     containerImgNoMain.appendChild(linkImage3);
    
//                     let image3 = document.createElement('img');
//                     image3.setAttribute('src', animals.dogs[i].image3);
//                     image3.classList.add("imageCat", "imgMain");
//                     linkImage3.appendChild(image3);
    
//                     div.appendChild(containerCatV2);
//                 }
//                 if (animals.dogs[i].image4) {
        
//                     let linkImage4 = document.createElement('a');
//                     linkImage4.classList.add('containerIMG');
//                     linkImage4.setAttribute('href', animals.dogs[i].image4);
//                     linkImage4.setAttribute('data-lightbox', 'galerie');
//                     linkImage4.setAttribute('data-title', animals.dogs[i].name + ` - L'arche de Siena`);
//                     containerImgNoMain.appendChild(linkImage4);
    
//                     let image4 = document.createElement('img');
//                     image4.setAttribute('src', animals.dogs[i].image4);
//                     image4.classList.add("imageCat", "imgMain");
//                     linkImage4.appendChild(image4);
    
//                     div.appendChild(containerCatV2);
//                 }

//             }else {
//                   // Création de la balise img //
//             let img = document.createElement('img');
//             img.setAttribute('src', animals.dogs[i].image);
//             img.classList.add('imageCat');
//             div.appendChild(img);
//             }

//             // Création div Text //
//             let divText = document.createElement('div');
//             divText.classList.add('textCat', 'textDog');
//             div.appendChild(divText);

//             // Création Name //
//             let name = document.createElement('p');
//             name.classList.add("catName", "bold");
//             name.textContent = animals.dogs[i].name + " ";
//             divText.appendChild(name);

//             // Création sexe logo  //
//             let sexeLogo = document.createElement('i');
//             sexeLogo.classList.add('fas', animals.dogs[i].logoSexe, animals.dogs[i].sexeSymbol, 'symbol');
//             name.appendChild(sexeLogo);

//             if (animals.dogs[i].statut) {
//                 // Création statut //
//                 let statut = document.createElement('span');
//                 statut.classList.add('reserved');
//                 statut.textContent = animals.dogs[i].statut;
//                 divText.appendChild(statut);
//             }

//             // Création Age //
//             let age = document.createElement('p');
//             age.classList.add('catage');
//             age.textContent = animals.dogs[i].age;
//             divText.appendChild(age);

//             // Création Description //
//             let description = document.createElement('p')
//             description.classList.add('descriptionCat');
//             description.textContent = animals.dogs[i].description;
//             divText.appendChild(description);

//             if (animals.dogs[i].statut) {

//             }else {
//                 // Création P container pub & btn //
//             let p = document.createElement('p');
//             p.innerHTML =
//                 `
//             <p>
//             <span class="bold fontStyle">${animals.dogs[i].name}</span> vous intéresse ?
//             </p>
//             <br>
//             <a href="../Conditions/Conditions_adoption.html" class="btn btnresa"> Lire les conditions d'adoption</a>
//             `
//             description.appendChild(p);
//             }

//         }

//     }
// }


request.responseType = 'json';
request.open('GET', requestURL);
request.responseType = 'text'; // now we're getting a string!
request.send();

request.onload = function () {
    var catsText = request.response; // get the string from the response
    var allCats = JSON.parse(catsText); // convert it to an object
    searchGoodDog(allCats);
}
