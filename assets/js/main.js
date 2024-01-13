/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*=============== MENU SHOW===============*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*=============== MENU HIIDDEN===============*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  opacity: 1,
  scale: 1.1,
  duration: 2500,
  delay: 300,
});

sr.reveal(`.home-data, .about-img, .about-data, .visit-data .footer`);
sr.reveal(`.home-image, .footer-img-1, .footer-img-2`, { rotate: { z: -15 } });
sr.reveal(`.home-bread, .about-bread`, { rotate: { z: 15 } });
sr.reveal(`.home-footer`, { scale: 1, origin: "bottom" });
sr.reveal(`.new-card:nth-child(1) img`, { rotate: { z: -30 }, distance: 0 });
sr.reveal(`.new-card:nth-child(2) img`, {
  rotate: { z: 15 },
  distance: 0,
  delay: 600,
});
sr.reveal(`.new-card:nth-child(3) img`, {
  rotate: { z: 15 },
  distance: 0,
  delay: 900,
});
sr.reveal(`.favorite-card img`, {
  interval: 100,
  rotate: { z: 15 },
  distance: 0,
});
sr.reveal(`.footer-container`, {
  scale: 1,
});
