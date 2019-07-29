// Mobile Nav toggler
// I kept this one vanilla javascript for practice
// set variables for nav elements
const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');

// click event for class activation nav open/close toggle
burger.addEventListener('click', () => {
  nav.classList.add('nav--transitioning');
  nav.classList.toggle('nav--toggled');
});

// prevent glitch nav transition when media query kicks in from resizing screen
nav.addEventListener('transitionend', () => {
  nav.classList.remove('nav--transitioning');
});


// animate scrolling with jQuery
const scrollAnimate = $('html, body');

$('.nav__item-link').on('click', e => {
  e.preventDefault();

  const scrollTarget = e.target.hash;
  const scrollLocation = $(scrollTarget).offset().top - 80;
  
  scrollAnimate.stop().animate({
    scrollTop: scrollLocation
  }, 500, 'swing');
});

// change nav link active when scrolled to section that match the nav link
const links = $('.nav__item-link');

window.onscroll = () => {
  let wScroll = window.scrollY;

  links.each((index, link) => {
    const navLink = $(link);
    const section = $(link.hash);
    const sectionTop = section.offset().top - 81;

    if (wScroll >= sectionTop && wScroll < sectionTop + section.height()) {
      navLink.addClass('nav__item-link--active');
    } else {
      navLink.removeClass('nav__item-link--active');
    }
  });
}

// Google Maps API
function initMap() {
  // The location of Uluru
  const uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  const map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({position: uluru, map: map});
}