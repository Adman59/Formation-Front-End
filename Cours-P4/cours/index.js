//  XMLHttpRequest

function reqListener() {
  // console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
// req.open("get", "data.txt", true);
// req.open('get', "data.json", true);
req.open("get", "https://api.blablagues.net/?rub=blagues", true);
req.send();

// -------------------------------
// FETCH --> va chercher
// -------------------------------

// fetch("monLien", "object d'options")
//     .then((response) => {
//         // response console.log(response);
//     })
//     .catch((err) => console.log(err));

fetch("data.txt").then((res) => res.text());
//   .then((data) => console.log(data));

fetch("data.json")
  .then((res) => res.json())
  // .then((data) => console.log(data));

  const myHeaders = new Headers();

  const init = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
  };

  // fetch("data.json", init).then((res) => console.log(res));

  // -------------------------------------------------------

  // CRUD = Create (POST), Read (GET), Update (PUT), Delete (DELETE)