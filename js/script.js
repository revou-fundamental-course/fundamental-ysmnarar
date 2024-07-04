let name = prompt("Siapa nama kamu?", "");

console.log(name);

document.getElementById("name").innerHTML = name;

// Navbar Start
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  const navbarMenu = document.querySelector(".navbar-menu");
  const navbar = document.getElementById("navbar");

  mobileMenu.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
// Navbar End


// Contact Start
function setSenderUI(name, birthDate, gender, hobbies, messages) {
  document.getElementById("sender-full-name").innerHTML = name;
  document.getElementById("sender-birth-date").innerHTML = birthDate;
  document.getElementById("sender-gender").innerHTML = gender;
  document.getElementById("sender-hobbies").innerHTML = hobbies;
  document.getElementById("sender-messages").innerHTML = messages;
}

function validateForm() {
  const name = document.forms["message-form"]["full-name"].value;
  const birthDate = document.forms["message-form"]["birth-date"].value;
  const gender = document.forms["message-form"]["gender"].value;
  const hobbies = document.forms["message-form"]["hobbies"].value;
  const messages = document.forms["message-form"]["messages"].value;

  if (
    name == "" ||
    birthDate == "" ||
    gender == "" ||
    hobbies == "" ||
    messages == ""
  ) {
    alert("Please fill out all fields.");
  } else {
    alert(`Thank you for your message, ${name}!`);
  }

  setSenderUI(name, birthDate, gender, hobbies, messages);

  return false;
}
// Contact End

// Banner Autoslide Start
const slides = document.querySelectorAll(".slide");
const slidesContainer = document.querySelector(".slides");
let currentIndex = 0;

function showSlide(index) {
  const offset = -index * 100;
  slidesContainer.style.transform = `translateX(${offset}%)`;
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentIndex);
});
// Banner Autoslide End

// Footer Start
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
// Footer End
