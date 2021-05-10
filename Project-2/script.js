/*jshint esversion: 6 */

//Animated hamburger menu toggle function
var burgerToggle = function () {
  //Declare Variables for hamburger menu
  var burger = document.querySelector(".burger-menu");
  var navLinks = document.querySelector(".nav-links");
  var navLinkText = document.querySelectorAll(".nav-links li");
  //Add Event Handlers for navigation links and burger menu
  burger.addEventListener("click", function () {
    navLinks.classList.toggle("nav-links-toggle");
    burger.classList.toggle("burger-toggle");
    //Loop through nav-links and apply animation to each element
    navLinkText.forEach(function (link, index) {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
  });
};

//Call Toggle function
burgerToggle();
