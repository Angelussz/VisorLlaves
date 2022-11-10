//import {fs} from "./node_modules/fs/package.json";
//import rsaPemToJwk from "rsa-pem-to-jwk";
// function caracteristicas(file) {

//const { urlencoded } = require("express");

//     var pem = fs.readFileSync(file,'ascii');
//     //var jwk = rsaPemToJwk(pem);
//     //console.log(jwkPublic)
//     console.log("hola");

// }

const pempublic = document.getElementById("file");
const pemprivate = document.getElementById("file2");
const img = document.getElementById("img");
const boton = document.getElementById("prueba");
// let text = null

// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "no-cors", // no-cors, *cors, same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: "follow", // manual, *follow, error
    // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData("http://localhost:3001", { answer: 42 }).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});

// boton.addEventListener("click", () => {

// });

pempublic.addEventListener("change", (e) => {
  const file = e.target.files[0];
  //console.log(file.name);
  const fileReader = new FileReader();
  fileReader.readAsText(file);
  fileReader.addEventListener("load", (e) => {
    console.log(typeof e.target.result);
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
  });
});
