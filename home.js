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

  document.addEventListener('DOMContentLoaded', function() {
    console.log('k')

    var ratingLink = document.querySelector('.rating');
  
   
    ratingLink.addEventListener('click', function(event) {
      event.preventDefault(); 
  
    
      var restaurantList = document.querySelector('.restaurant-list');
  
      
      var placeElements = Array.from(restaurantList.querySelectorAll('.place'));
  
  
      placeElements.sort(function(a, b) {
        var ratingA = parseFloat(a.querySelector('.rating span').textContent);
        var ratingB = parseFloat(b.querySelector('.rating span').textContent);
        return ratingB - ratingA; // Sort in descending order
      });
  

      placeElements.forEach(function(place) {
        restaurantList.removeChild(place);
      });
  
      
      placeElements.forEach(function(place) {
        restaurantList.appendChild(place);
      });
    });
  });
