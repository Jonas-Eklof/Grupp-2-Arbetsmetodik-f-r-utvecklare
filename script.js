// Daniel, Få alla nödvändiga element
const categoryButtons = document.querySelectorAll('.category-button');
const menuItems = document.querySelectorAll('.menu-item');
const searchBar = document.getElementById('search-bar');

// Daniel, Filtrera objekt baserat på kategori
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;

    // Daniel, Växla aktiva klass på knappar
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Daniel, Visa eller dölj objekt baserat på kategori
    menuItems.forEach(item => {
      if (category === 'all' || item.dataset.category === category) {
        item.style.display = 'block'; // visa
      } else {
        item.style.display = 'none'; // göm
      }
    });
  });
});

// Daniel, Sökfunktionalitet
searchBar.addEventListener('input', () => {
  const query = searchBar.value.toLowerCase();

  menuItems.forEach(item => {
    const title = item.querySelector('h2').textContent.toLowerCase();
    const description = item.querySelector('p').textContent.toLowerCase();

    if (title.includes(query) || description.includes(query)) {
      item.style.display = 'block'; // Visa
    } else {
      item.style.display = 'none'; // Göm
    }
  });
});

// Daniel, Initial load - Show all items and highlight 'All' button
categoryButtons[0].classList.add('active');
menuItems.forEach(item => item.style.display = 'block');


//Madelen Hamburger Menu Start 
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  console.log('hamburger clicked');
  navMenu.classList.toggle('active');
})
//Madelen Hamburger Menu Stop
