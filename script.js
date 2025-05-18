document.addEventListener('DOMContentLoaded', function() {

    var mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    mobileNavLinks.forEach(function(click_nav_link) {
      click_nav_link.addEventListener('click', function() {
        if (window.getComputedStyle(document.querySelector('.navbar-toggler')).display !== 'none') {
         
          if (document.querySelector('.navbar-collapse.show')) {
            document.querySelector('.navbar-toggler').click();
          }
        }
      });
    });
});