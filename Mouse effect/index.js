// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

// const mousemove = document.querySelector('.mousemove');
// const mousemoveSmall = document.querySelector('.mousemoveSmall');

// window.addEventListener('mousemove', (e) => {
//     mousemove.style.left = e.pageX + "px";
//     mousemove.style.top = e.pageY + "px";
// });

// window.addEventListener('mousemoveSmall', (e) => {
//     mousemoveSmall.style.left = e.pageX + "px";
//     mousemoveSmall.style.top = e.pageY + "px";
// });

//


// const mousemove = document.querySelector('.mouse');

// window.addEventListener('mousemove', (e) => {
//     smallCircle.style.left = e.pageX + "px";
//     smallCircle.style.top = e.pageY + "px";

//     mediumCircle.style.left = e.pageX + "px";
//     mediumCircle.style.top = e.pageY + "px";

//     bigCircle.style.left = e.pageX + "px";
//     bigCircle.style.top = e.pageY + "px";
// });

//

// const mouses = document.querySelectorAll(".mouse");

// window.addEventListener('mousemove', (e) => {
//     mouses.forEach((mouse) => {
//         mouse.style.left = e.pageX + "px";
//         mouse.style.top = e.pageY + "px";
//     });
// });


const mouses = document.querySelectorAll('.mouse');

window.addEventListener('mousemove', (e) => {
    mouses.forEach((mouse) => {
        mouse.style.left = e.pageX + "px";
        mouse.style.top = e.pageY + "px";
    });
});