document.addEventListener('DOMContentLoaded', function() {
    var imageLinks = document.querySelectorAll('.inspiration a');
  
    imageLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        var target = this.getAttribute('href');
        document.querySelector(target).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  