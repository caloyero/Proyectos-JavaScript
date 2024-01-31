const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
const toggleBtn = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
toggleBtn.addEventListener('click', () => {
    linksContainer.classList.toggle('show-links')
    //console.log(links.classList.contain)
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
    // setup back to top link

    if (scrollHeight > 500) {
        console.log("helo");

        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        // prevent default
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 82) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        // close
        linksContainer.style.height = 0;
    });
});