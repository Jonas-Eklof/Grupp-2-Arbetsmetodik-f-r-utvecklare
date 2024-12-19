// Madelen Todays Special Start
if (
  document.querySelector(".special-name") &&
  document.querySelector(".special-price") &&
  document.querySelector(".special-image")
) {
  const specialName = document.querySelector(".special-name");
  const specialPrice = document.querySelector(".special-price");
  const specialImage = document.querySelector(".special-image");

  // Today's date
  const today = new Date();

  // Get random index based on current day
  const randomIndex = today.getDate() % db.bbqs.length;

  // Today's special dish
  const special = db.bbqs[randomIndex];

  // Set the content for today's special
  specialName.textContent = special.name;
  specialPrice.textContent = `$${special.price}`;
  specialImage.src = special.img;
  specialImage.alt = special.name;
}
//Madelen Specials Stop


//Madelen Hamburger Menu Start 
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  console.log('hamburger clicked');
  navMenu.classList.toggle('active');
})


//Madelen Seating Map Start
document.querySelectorAll('.table').forEach((table) => { // Selects all elements whitin the table class and loops through them
  // Single click to reserve or clear reservation
  table.addEventListener('click', () => { // Adds an eventlistener to table elements that listenes for a click
      if (table.classList.contains('reserved')) {
          // If the table is reserved, clear the reservation
          table.classList.remove('reserved');
          showNotificationTable(`${table.textContent} reservation has been cleared`);
      } else {
          // If the table is not reserved, reserve it
          table.classList.add('reserved');
          showNotificationTable(`${table.textContent} has been reserved`);
      }
  });
});

// Function to show notifications
function showNotificationTable(message) {
  const notification = document.getElementById('notification'); // Selects element with the ID notification
  if (notification) { // Checks if the notification element exists in the DOM, if it does the code inside if will run
      notification.textContent = message;
      notification.style.display = 'block'; // Show the notification

      setTimeout(() => {
          notification.style.display = 'none'; // Hide after 3 seconds
      }, 4000);
  }
}
// Globala variabler ------------------------------------------

// Order Summary variabler -------------------
let orderList = document.getElementById("order-list");
let totalPriceElement = document.getElementById("total-price");
let totalPrice = 0;

if (
document.querySelector(".special-name") &&
document.querySelector(".special-price") &&
document.querySelector(".special-image")
) {
const specialName = document.querySelector(".special-name");
const specialPrice = document.querySelector(".special-price");
const specialImage = document.querySelector(".special-image");

// Today's date
const today = new Date();

// Get random index based on current day
const randomIndex = today.getDate() % db.bbqs.length;

// Today's special dish
const special = db.bbqs[randomIndex];

// Set the content for today's special
specialName.textContent = special.name;
specialPrice.textContent = `$${special.price}`;
specialImage.src = special.img;
specialImage.alt = special.name;
}
//Madelen Specials Stop

// Jonas Order summary -------------------------------

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
// slut Jonas Order summary

// Daniel, Få alla nödvändiga element
const categoryButtons = document.querySelectorAll(".category-button");
const menuItems = document.querySelectorAll(".menu-item");
const searchBar = document.getElementById("search-bar");

// Daniel, Filtrera objekt baserat på kategori
categoryButtons.forEach((button) => {
button.addEventListener("click", () => {
  const category = button.dataset.category;

  // Daniel, Växla aktiva klass på knappar
  categoryButtons.forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");

  // Daniel, Visa eller dölj objekt baserat på kategori
  menuItems.forEach((item) => {
    if (category === "all" || item.dataset.category === category) {
      item.style.display = "block"; // visa
    } else {
      item.style.display = "none"; // göm
    }
  });
});
});

// Daniel, Sökfunktionalitet
searchBar.addEventListener("input", () => {
const query = searchBar.value.toLowerCase();

menuItems.forEach((item) => {
  const title = item.querySelector("h2").textContent.toLowerCase();
  const description = item.querySelector("p").textContent.toLowerCase();

  if (title.includes(query) || description.includes(query)) {
    item.style.display = "block"; // Visa
  } else {
    item.style.display = "none"; // Göm
  }
});
});

// Daniel, Initial load - Show all items and highlight 'All' button
categoryButtons[0].classList.add("active");
menuItems.forEach((item) => (item.style.display = "block"));
