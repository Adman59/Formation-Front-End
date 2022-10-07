// Rappel des types de données

let string = "chaîne";
let number = 25;
let boolean = true;
let maVariable; // undefined

// Tableaux

let array = ["Bordeaux", "Toulouse", "Nantes"];

// console.log(array[0][3]);

let objet = {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
};

// objet.adresse = "22 rue du code";
// console.log(objet);

let data = [
    {
        pseudo: "Denis",
        age: 33,
        technos: ["Javascript", "React", "NodeJs"],
        admin: false,
    },
    {
        pseudo: "Samia",
        age: 24,
        technos: ["Javascript", "React", "NodeJs"],
        admin: false,
    },
    {
        pseudo: "Nikola",
        age: 42,
        technos: ["NodeJs", "React", "PHP"],
        admin: true,
    },
];

// console.log(data[2]);


//------------------------------------------//
// Les structures de contrôle
// -----------------------------------------//

// if (data[0].age > data[1].age) {
//     console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
// } else {
//     //valeur si faux

// }


// while
let w =0;

// while (w < 10) {
//     w++
//     console.log("la valeur de w est de : " + w);
// }

// Do while

let d = 0;
// do {
//     d++;
//     console.log(d);
// } while (d < 5);

// Les boucles for
for(const user of data) {
    // document.body.innerHTML += `<li>${user.pseudo} - ${user.age}</li>`;
}

// on déclare la valeur de i | jusqu'ou on boucle | on incrémente i  si la condition 2 n'est pas remplie
for (i=0; i < data.length; i++) {
    // console.log(data[i].technos[0]);
    // document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
}

// Le swicth

document.body.addEventListener('click', (e) => {
    console.log(e.target.id);

    switch (e.target.id) {
        case "javascript" :
        document.body.style.background = "yellow";
        break;

        case "php":
        document.body.style.background = "violet";
        break;

        case "python":
        document.body.style.background = "blue";
        break;
        default:
            null;
    }
});






//------------------------------------------//
// Méthodes String
//------------------------------------------//






// parseInt permet de transformer une châine de caractère en nombre

let string2 = "Javascript est un langage orienté objet";

// console.log(typeof "42");
// console.log(eval(parseInt("1") + 2));
// console.log(isNaN(string));

// console.log(string2.length);
// console.log(string2[string2.length - 1]); 
// -1 car l'index commence a 0 donc la dernière lettre de string2 est "t"

// console.log(string2.indexOf("x"));
// retourne -1 s'il ne le connaît pas

// let newString = string2.slice(5, 17);
// console.log(newString);

// console.log(string2.split(" "));

// console.log(string2.toLowerCase());
// console.log(string2.toUpperCase());

// console.log(string2.replace("Javascript", "PHP"));






//------------------------------------------//
// Méthodes Numbers
//------------------------------------------//





let number2 = 42.1234;
let numberString = "42.12 est un chiffre";

// console.log(number2.toFixed(2));
// console.log(parseInt("43"));
// console.log(parseInt(numberString));
// console.log(parseFloat(numberString));

// Math

// console.log(Math.PI);
// console.log(Math.round(4.5)); // arrondi au plus proche
// console.log(Math.floor(4.9)); // arrondi au plus bas
// console.log(Math.ceil(4.1)); // arrondi au plus haut
// console.log(Math.pow(2, 7)); // 2 puissance 7
// console.log(Math.sqrt(16)); // racine carré

// console.log(Math.floor(Math.random() * 50));





//------------------------------------------//
// Méthodes Tableaux
//------------------------------------------//




let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

// let newArray = array3.concat(array4);
// console.log(newArray);

let newArray = [...array3, ...array4]; // pour fusionner des tableaux
// console.log(newArray);

// console.log(array3.join('-'));

// console.log(array3.slice(2));
// console.log(newArray.slice(3, 5));

// console.log(array3.indexOf("Python"));

// array3.forEach((languages) => console.log(languages)); // chaque élément du tableau est renomé en languages

// console.log(array3.every((language) => language === "Php")); // est ce que dans chacun des éléments du tableau array il y a l'élément "php", non donc false

// console.log(array3.some((language) => language === "Php")); // y'a t'il parmi le tableau array3 un élément qui contient "php"

let shift = array3.shift(); // permet d'enlever le premier élément du tableau

// console.log(array3.pop()); // on retire le dernier élément du tableau

// const restArray = array3.splice(1, 1, "c++"); // a partir de l'evénement 1 tu m'en enlèves 1 et tu remplace par "c++"

// const restArray = array3.splice(0, 2, ...array4);
// console.log(array3);

// IMPORTANT // 

let arrayNumber = [4, 74, 28, 12, 1];
// console.log(arrayNumber.reduce((x, y) => x + y)); // prendre toutes les données du tableau et les additioner ensemble

arrayNumber.push(17); // ajoute un élément dans le tableau
// console.log(arrayNumber);


// FILTER, SORT, MAP //

// console.log(arrayNumber.filter((number) => number > 10)); // filtre le tableau pour n'afficher que les nombres supérieur à 10
// console.log(arrayNumber.sort());
// console.log(arrayNumber.sort((a, b) => a - b)); // trier par ordre

// document.body.innerHTML = arrayNumber
//     .map((number) => `<li> ${number} </li>`)
//     .join("");




//------------------------------------------//
// Méthodes Objets
//------------------------------------------//



// document.body.innerHTML = data
//     .filter((user) => user.admin === false)
//     .filter((user) => user.pseudo.includes("i"))
//     .sort((a,b) => b.age - a.age) // ranger par age
//     .map(
//         (user) => 
//         `
//         <div class="user-card">
//             <h2> ${user.pseudo} </h2>
//             <p>${user.age} ans</p>
//             <p>status : ${user.admin ? "Modérateur" : "Membre"}</p>
//         </div>
//         `
//         )
//     .join("");




//------------------------------------------//
// Les dates
//------------------------------------------//





// Date classique

let date = new Date();

// Timestamp
let timestamp = Date.parse(date);
console.log(timestamp);

// IsoString
let iso = date.toISOString();
console.log(date.toISOString());

function dateParser(chaine) {
    let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    });
    return newDate;
};

// console.log(dateParser(date));
// console.log(dateParser(timestamp));
// console.log(dateParser(iso));






//------------------------------------------//
// Le destucturing
//------------------------------------------//



let moreData = {
    destVar: ["Element 1", "Element 2"]
}

const { destVar } = moreData;

// console.log(moreData.destVar);
// console.log(destVar);

let array5 = [70, 80, 90];

let [x, y, z] = array5;
// console.log(x, y ,z);

// console.log(iso);

const dateDestructuring = (chaine) => {
    let newDate = chaine.split('T')[0];
    let [y, m, d] = newDate.split("-");
    return [d, m, y].join("/");
};

console.log(dateDestructuring(iso));





//------------------------------------------//
// Les Datasets
//------------------------------------------//



const h3js = document.getElementById('javascript');

// console.log(h3js.dataset.lang);

const h3 = document.querySelectorAll("h3");

// h3.forEach((language) => console.log(language.dataset.lang))





//------------------------------------------//
// Les Regex
//------------------------------------------//



let mail = "adman59@hotmail.fr";

// console.log(mail.search(/adrien/));

// console.log(mail.replace(/adrien/, "de")); // remplace adrien

// console.log(mail.match(/ADrien/i));
// console.log(mail.match(/[ad]/));
// console.log(mail.match(/[12]/));

// tous les chiffres
// console.log(mail.match(/\d/)); // est ce qu'il y a un chiffre

//Matcher toutes les lettres
// console.log(mail.match(/[a-z]/));

// console.log(mail.match(/[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));

let separator = 2648964;

console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
