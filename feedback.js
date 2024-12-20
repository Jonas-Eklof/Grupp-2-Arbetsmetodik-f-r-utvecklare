// Mohammed Feedback logik§
const submitButton = document.getElementById("submitButton");
const feedbackPopup = document.getElementById("feedback-popup");
submitButton.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    console.log(`Feedback from ${name} (${email}): ${message}`);
    feedbackPopup.classList.remove("hidden"); // visa feedback pop-up
  } else {
    alert("Please fill out all fields before submitting.");
  }
});

const closeFeedbackPopupButton = document.getElementById(
  "close-feedback-popup"
);
closeFeedbackPopupButton.addEventListener("click", () => {
  feedbackPopup.classList.add("hidden"); // dölja feedback pop-up
});

//Madelen Hamburger Menu Start
const hamburger = document.getElementById("hamburger"); // Select by ID
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  // Listenes for user to interact
  console.log("hamburger clicked");
  navMenu.classList.toggle("active"); // Makes active when clicked
});
