// Globala variabler ------------------------------------------

// Order Summary variabler -------------------
let orderList = document.getElementById("order-list");
let totalPriceElement = document.getElementById("total-price");
let totalPrice = 0;

// Sid-content --------------------------------------------------

// Todays Special content ----------------------

if (
  document.querySelector(".special-name") &&
  document.querySelector(".special-price") &&
  document.querySelector(".special-image")
) {
  let specialName = document.querySelector(".special-name");
  let specialPrice = document.querySelector(".special-price");
  let specialImage = document.querySelector(".special-image");

  specialName.textContent = `${db.bbqs[0].name}`;
  specialPrice.textContent = `$${db.bbqs[0].price}`;
  specialImage.src = `${db.bbqs[0].img}`;
}

//Madelen Hamburger Menu Start
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  console.log("hamburger clicked");
  navMenu.classList.toggle("active");
});

// Order summary -------------------------------

// Funktion för att lägga till en beställning
function addToOrder(name, price) {
  // Skapa ett nytt list-element för beställningen
  let listItem = document.createElement("li");
  listItem.textContent = `${name} - $${price}`;

  //   skapa en "Remove"-knapp
  let removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.classList.add("remove-button");

  removeButton.addEventListener("click", () => {
    orderList.removeChild(listItem);

    totalPrice -= price;
    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
  });

  // lägg till "remove"-knappen till listItem
  listItem.appendChild(removeButton);

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
