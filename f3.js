Optional: scroll
window.addEventListener('scroll', function() {
   var navbar = document.querySelector('.navbar');
   if (window.scrollY > 0) {
     navbar.style.backgroundColor = '#555';
  } else {
     navbar.style.backgroundColor = '#333';
   } });