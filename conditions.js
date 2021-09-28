// Fonction qui check les conditions d'adoption //
let checkbox = document.getElementById('checkbox');
let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    var decider = document.getElementById('switch');
    if (decider.checked) {
        document.location.href="https://docs.google.com/forms/d/e/1FAIpQLSdK5gBvj-QmyLd76KxSG-QcLnBXTHAvbtTagZL69-0SRc8Psg/viewform?usp=sf_link"
    }else {
        alert("Veuillez accepter les conditions d'adoption")
    }
})
