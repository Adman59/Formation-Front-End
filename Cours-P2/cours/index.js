const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.toggle("show-response");
});

btn2.addEventListener("click", () => {
  response.style.visibility = "visible";
  response.style.background = "red";
});

//--------------------------
// Mouse events

const mousemove = document.querySelector(".mousemove");

window.addEventListener('mousemove', (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener('mouseenter', () => {
    questionContainer.style.background = "rgba(0, 0, 0, 0.6)";
})

questionContainer.addEventListener('mouseout', () => {
    questionContainer.style.background = "pink";
});

response.addEventListener('mouseover', () => {
    response.style.transform = "rotate(2deg)";
})

//----------------------------
//KeyPress Event

const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById("key");

const ring = (key) => {
    const audio = new Audio();
    audio.src = key + ".mp3";
    audio.play();
};

document.addEventListener('keypress', (e) => {
    key.textContent = e.key;

    if (e.key === "j") {
        keypressContainer.style.background = "pink";
    } else if (e.key === "h") {
        keypressContainer.style.background = "teal";
    } else {
        keypressContainer.style.container = "red";
    }

    if (e.key === "z") ring(e.key);
});

//----------------------------------
// Scroll Event

const nav = document.querySelector("nav");

window.addEventListener('scroll', () => {
    if (window.scrollY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px";
    }
})


//-----------------------
// Form Event

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector('select');
const form = document.querySelector('form');
let pseudo = "";
let language = "";

inputName.addEventListener('input', (e) => {
    pseudo = e.target.value;
});

select.addEventListener('input', (e) => {
    language = e.target.value;
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("yes !");

    if (cgv.checked) {
        document.querySelector('form > div').innerHTML = ` <h3>Pseudo : ${pseudo}</h3>
        <h4>Langage préféré : ${language}</h4>`
    } else {
        alert('Veuillez accepter les CGV')
    }
});

//-----------------------------------
// Load Event

window.addEventListener("load", () => {
    console.log("document chargé !");
});

//-----------------------------------
// For Each --> pour chacun d'eux applique cette logique

const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        e.target.style.transform = "scale(0.7";
    });
});

//-----------------------------------
// addEventListener Vs onclick

//Bubling => Fin (de base l'eventlistener est paramétré en mode bubling)
document.body.addEventListener('click', () => {
    console.log("click 1 !");
}, false);


// Usecapture
document.body.addEventListener('click', () => {
    console.log("click 2 !");
}, true);

//-----------------------------------
// Stop propagation

questionContainer.addEventListener('click', (e) => {
    alert('test');
    e.stopPropagation();
})

// RemoveEventListener

//-----------------------------------
// BOM

// console.log(window.innerHeight);
// console.log(window.scrollY);

//window.open("http://google.com", "cours js", "height=600", "width=800");
// window.close();

// événements adossés à window
// alert('hello');

// confirm
btn2.addEventListener('click', () => {
    confirm("voulez vous vraiment vous tromper ?")
});

let answer;

// prompt
btn1.addEventListener('click', () => {
    answer = prompt("entrez votre nom");
    questionContainer.innerHTML = "<h3>bravo " + answer + "</h3";
});


// Timer, compte a rebours
setTimeout(() => {
    // logique a executer
    questionContainer.style.borderRadius = "300px";
}, '5000');

// exécuter un bout de code toutes les x secondes (ici 1 sec)
// setInterval(() => {
//     document.body.innerHTML +=
//     `
//     <div class='box'>
//         <h2>Nouvelle boîte</h2>
//     </div>
//     `;
// },10000);

// document.body.addEventListener('click', (e) => {
//     e.target.remove();
//     clearInterval(interval);
// });

// Location

console.log(location.href);
console.log(location.host);
console.log(location.pathname);
console.log(location.search);
// location.replace("http://lequipe.fr");

// window.onload = () => {
//     location.href = "http://lequipe.fr";
// }

// Navigator
console.log(navigator.userAgent);

// Localisation

// var options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
//   };
  
//   function success(pos) {
//     var crd = pos.coords;
  
//     console.log('Votre position actuelle est :');
//     console.log(`Latitude : ${crd.latitude}`);
//     console.log(`Longitude : ${crd.longitude}`);
//     console.log(`La précision est de ${crd.accuracy} mètres.`);
//   }
  
//   function error(err) {
//     console.warn(`ERREUR (${err.code}): ${err.message}`);
//   }
  
//   navigator.geolocation.getCurrentPosition(success, error, options);


// History

//console.log(window.history);
//window.history.back();
//history.go(-2);

// -------------------------------------------
// Set property
// pour injecter du style dans des variables mises dans le css

window.addEventListener('mousemove', (e) => {
    nav.style.setProperty('--x', e.layerX + 'px');
    nav.style.setProperty('--y', e.layerY + 'px');
});

