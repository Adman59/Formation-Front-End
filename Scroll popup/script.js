// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const nav = document.querySelector('#navbar');
const image = document.querySelector('#imgImprovise');
const popup = document.querySelector('#popup');

let playOnce = true;

window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        nav.style.height = "50px"
    } else {
        nav.style.height = "90px"
    }

    let scrollValue = (window.scrollY + innerHeight) / document.body.offsetHeight;

    // image
    if (scrollValue > 0.45) {
        imgImprovise.style.opacity = "1";
        imgImprovise.style.transform = "none";
    };

    // popup
    if (scrollValue > 0.85 && playOnce) {
        popup.style.opacity = "1";
        popup.style.transform = "none";
        playOnce = false;
    }
});

closeBtn.addEventListener("click", () => {
    popup.style.opacity = "0";
    popup.style.transform = "translateX(500px)"
});

// window.addEventListener('scroll', () => {
//     if(window.scrollY > 290) {
//         image.style.transform = "translateX(0px)";
//         image.style.opacity = "1";
//     } else {
//         image.style.transform = "translateX(-200px)";
//         image.style.opacity = "0";
//     }
// });

// window.addEventListener('scroll', () => {
//     var lastScrollPosition = window.scrollY;
//     var maxScrollPosition = Math.max(lastScrollPosition);
    
//     if (lastScrollPosition == maxScrollPosition) {
//         popup.style.transform = "translateX(0px)";
//         popup.style.opacity = "1";
//     } else {
//         popup.style.transfom = "translateX(400px)";
//         popup.style.opacity = "0";
//     }
// });



