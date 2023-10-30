/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
let sectionsLenght = document.querySelectorAll("section").length;
let items = [];

for (let j = 1; j < sectionsLenght + 1; j++) {
    let newitem = "Section " + j;
    items.push(newitem);
}

let i = 1;
let ul = document.getElementById("navbar__list");

items.forEach(function (item) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.textContent = item;
    a.href = "#section" + i;
    a.classList.add("menu__link");
    i++;
    li.appendChild(a);
    ul.appendChild(li);
});

// Scroll to section on link click
let navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function (event) {
        event.preventDefault();
        let targetId = this.getAttribute("href");
        let targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});

// Set sections as active
let sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
    let currentSectionId = "";

    sections.forEach(function (section) {
        let sectionTop = section.offsetTop - 50;
        let sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSectionId = "#" + section.id;
        }
    });

    navLinks.forEach(function (navLink) {
        navLink.classList.remove("active");
        if (navLink.getAttribute("href") === currentSectionId) {
            navLink.classList.add("active");
        }
    });
});

// Timeout to display nav bar
let navbar = document.getElementById("navbar");
let timeout;

window.addEventListener("scroll", function () {
    clearTimeout(timeout);
    navbar.classList.remove("hidden");

    timeout = setTimeout(function () {
        navbar.classList.add("hidden");
    }, 3000);
});

// Go to Top button
let goToTop = document.getElementById('gototop');
goToTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        goToTop.style.display = 'block';
    } else {
        goToTop.style.display = 'none';
    }
});