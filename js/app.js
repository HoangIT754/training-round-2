// Get all the section elements
const sections = document.querySelectorAll("section");
// Get the navbar__list element
const navbarList = document.getElementById("navbar__list");

// Build the navigation menu
sections.forEach((section) => {
  const sectionId = section.getAttribute("id");
  const sectionName = section.getAttribute("data-nav");
  const listItem = document.createElement("li");
  listItem.innerHTML = `<a href="#${sectionId}" class="menu__link">${sectionName}</a>`; // Set the HTML content of the `listItem` element
  navbarList.appendChild(listItem);
});

// Scroll to section on link click
navbarList.addEventListener("click", (event) => {
  event.preventDefault();
  const targetSectionId = event.target.getAttribute("href").slice(1); // Get the target section ID
  const targetSection = document.getElementById(targetSectionId);
  const navbarHeight = navbarList.offsetHeight;
  const scrollToOffset = targetSection.offsetTop - navbarHeight;
  window.scrollTo({
    top: scrollToOffset,
    behavior: "smooth",
  });
  history.replaceState(null, null, `#${targetSectionId}`); // Update the browser's history state by updating the URL hash fragment
  setActiveMenuItem();
});

// Set sections as active and hide/show navbar
let isNavbarVisible = true;
let timeoutId;

function showNavbar() {
  const navbar = document.querySelector(".navbar__menu");
  navbar.style.display = "block"; // Display navbar
  isNavbarVisible = true;
}

function hideNavbar() {
  const navbar = document.querySelector(".navbar__menu");
  navbar.style.display = "none"; // Hide navbar
  isNavbarVisible = false;
}

window.addEventListener("scroll", () => {
  clearTimeout(timeoutId); // Clear timeout
  if (!isNavbarVisible) {
    showNavbar();
  }
  timeoutId = setTimeout(hideNavbar, 2000); // Set time out 2s to hide the navbar
  setActiveMenuItem();
});

// Active menu item
function setActiveMenuItem() {
  const navLinks = document.querySelectorAll(".menu__link");
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect(); // Retrieve the position and size information of the section element
    if (rect.top >= 0 && rect.top <= window.innerHeight * 0.5) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      navLinks[index].classList.add("active");
      section.classList.add("active");
    } else {
      navLinks[index].classList.remove("active");
      section.classList.remove("active");
    }
  });
}

// Scroll to top button
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Show/hide the button based on scroll position
window.addEventListener("scroll", function() {
  var backToTopButton = document.getElementById("backToTopButton");
  var footer = document.querySelector("footer");
  var scrollPosition = window.scrollY;
  if (scrollPosition > footer.offsetTop - window.innerHeight) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});