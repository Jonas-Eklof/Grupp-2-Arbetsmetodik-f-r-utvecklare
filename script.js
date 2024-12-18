// Globala variabler ------------------------------------------

// Todays Special variabler --------------------

// let specialImage = document.querySelector(".special-image");
// let specialName = document.querySelector(".special-name");
// let specialPrice = document.querySelector(".special-price");

// Dishes variabler -------------------------
let dishImage = document.querySelector(".dish-image");
let dishName = document.querySelector(".dish-name");
let dishPrice = document.querySelector(".dish-price");

// console.log(db.bbqs[0].dsc);

// Order Summary variabler -------------------
let orderList = document.getElementById("order-list");
let totalPriceElement = document.getElementById("total-price");
let totalPrice = 0;

// Sid-content --------------------------------------------------

// Todays Special content ----------------------

// specialName.textContent = `${db.bbqs[0].name}`;
// specialPrice.textContent = `${db.bbqs[0].price}`;
// specialImage.src = `${db.bbqs[0].img}`;

let specialImage = document.querySelector(".special-image");
let specialName = document.querySelector(".special-name");
let specialPrice = document.querySelector(".special-price");

specialName.textContent = `${db.bbqs[0].name}`;
specialPrice.textContent = `$${db.bbqs[0].price}`;
specialImage.src = `${db.bbqs[0].img}`;

//Madelen Hamburger Menu Start
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Order summary -------------------------------

// Funktion för att lägga till en beställning
function addToOrder(name, price) {
  // Skapa ett nytt list-element för beställningen
  let listItem = document.createElement("li");
  listItem.textContent = `${name} - $${price}`;

  // lägg till i order-listan
  orderList.appendChild(listItem);

  // uppdatera totalpriset
  totalPrice += price;
  totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// lägg till event listeners för alla "Order Now"-knappar
let orderButtons = document.querySelectorAll(".order-now");

orderButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // hitta närmaste 'menu-item' för att få data om den rätten
    let menuItem = event.target.closest(".menu-item");
    let name = menuItem.querySelector("h2").textContent;
    let price = parseFloat(
      menuItem.querySelector("span").textContent.replace("$", "")
    );

    // lägg till i beställningen
    addToOrder(name, price);
  });
});
