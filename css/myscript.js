window.addEventListener('scroll', function (event) {
  var myNav = document.querySelector('nav');
  if (window.scrollY >= 80) {
    myNav.classList.add('sticky');
    myNav.classList.remove('main-nav');
  } else {
    myNav.classList.add('main-nav');
    myNav.classList.remove('sticky');
  }
});


