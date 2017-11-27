var hamburger = document.querySelector(".hamburger");
var ul = document.querySelector(".nav__list");
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  ul.classList.toggle("is-visible");
});
