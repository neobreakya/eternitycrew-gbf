document
  .querySelector('.mobile-nav-toggle')
  .addEventListener('click', function () {
    var navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'block') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'block';
    }
  });
