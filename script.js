const hamburgerWrapper = document.querySelector(".header__wrapper");
const hamburger = document.querySelector(".hamburger__wrapper");
const links = document.querySelectorAll(".header__item");

hamburger.addEventListener("click", () => {
  hamburgerWrapper.classList.toggle("clicked");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
})

