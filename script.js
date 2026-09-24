const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  const icon = menuIcon.querySelector("i");

  if(navMenu.classList.contains("active")){
    icon.classList.remove("ri-menu-3-line");
    icon.classList.add("ri-close-line");
  } else {
    icon.classList.remove("ri-close-line");
    icon.classList.add("ri-menu-3-line");
  }
});

// close menu when clicking link
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");

    const icon = menuIcon.querySelector("i");
    icon.classList.remove("ri-close-line");
    icon.classList.add("ri-menu-3-line");
  });
});

// CLOSE MENU AFTER CLICK

document.querySelectorAll(".nav-menu a").forEach((link) => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("active");

    const icon = menuIcon.querySelector("i");

    icon.classList.remove("ri-close-line");
    icon.classList.add("ri-menu-3-line");

  });

});

// ================= TABS =================

const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");

tabLinks.forEach((tab) => {

  tab.addEventListener("click", () => {

    tabLinks.forEach((link) => {
      link.classList.remove("active-link");
    });

    tabContents.forEach((content) => {
      content.classList.remove("active-tab");
    });

    tab.classList.add("active-link");

    const tabName = tab.dataset.tab;

    document
      .getElementById(tabName)
      .classList.add("active-tab");

  });

});

// CONTACT FORM

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.target.reset();
  e.preventDefault();

  alert("Contact functionality will be added soon!");

});