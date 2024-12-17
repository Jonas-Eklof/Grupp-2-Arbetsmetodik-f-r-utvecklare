import db from "./db.js";

// Globala variabler ------------------------------------------

// Todays Special variabler --------------------

let specialImage = document.querySelector(".special-image");
let specialName = document.querySelector(".special-name");
let specialPrice = document.querySelector(".special-price");

// Dishes variabler -------------------------
let dishImage = document.querySelector(".dish-image");
let dishName = document.querySelector(".dish-name");
let dishPrice = document.querySelector(".dish-price");

// console.log(db.bbqs[0].dsc);

// Sid-content --------------------------------------------------

// Todays Special content ----------------------

specialName.textContent = `${db.bbqs[0].name}`;
specialPrice.textContent = `${db.bbqs[0].price}`;
specialImage.src = `${db.bbqs[0].img}`;
