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
