const menuIcon = document.querySelector('[name="menu-outline"]');
const closeIcon = document.querySelector('[name="close-outline"]');
const navMenu = document.querySelector(".nav-menu");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuIcon.classList.toggle("active");
  closeIcon.classList.toggle("active");
});

closeIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuIcon.classList.toggle("active");
  closeIcon.classList.toggle("active");
});
