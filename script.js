// Madelen Todays Special Start

//Todays date
const today = new Date();

//Get random index based on current day
const randomIndex = today.getDate() % db.bbqs.length;

//Todays special dish
const special = db.bbqs[randomIndex];

let specialImage = document.querySelector(".special-image");
let specialName = document.querySelector(".special-name");
let specialPrice = document.querySelector(".special-price");

//Set the content for today's special
specialName.textContent = special.name;
specialPrice.textContent = `$${special.price}`;
specialImage.src = special.img;
specialImage.alt = special.name;

// specialName.textContent = `${db.bbqs[0].name}`;
// specialPrice.textContent = `$${db.bbqs[0].price}`;
// specialImage.src = `${db.bbqs[0].img}`;

//Madelen Todays Special Stop




//Madelen Hamburger Menu Start 
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    console.log('hamburger clicked');
    navMenu.classList.toggle('active');
})
//Madelen Hamburger Menu Stop