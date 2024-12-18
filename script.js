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