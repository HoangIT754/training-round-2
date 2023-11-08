// Build menu 
let sectionLenght = document.querySelectorAll("section").length;
let items = [];

for (let j = 1; j < sectionLenght + 1; j++) {
    let newItem = "Section " + j;
    items.push(newItem);
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