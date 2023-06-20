function sortItemsLowToHigh(category) {
    var restaurantList = document.querySelector("#" + category + " .restaurant-list");
    var places = Array.from(restaurantList.querySelectorAll(".place"));
  
    places.sort(function(a, b) {
      var priceA = parseInt(a.querySelector(".price").textContent.replace("₹", ""));
      var priceB = parseInt(b.querySelector(".price").textContent.replace("₹", ""));
      return priceA - priceB;
    });
  
    places.forEach(function(place) {
      restaurantList.appendChild(place);
    });
  }
  
  var sortLowToHighLinkPizza = document.querySelector("#sort-low-to-high");
  sortLowToHighLinkPizza.addEventListener("click", function(event) {
    event.preventDefault();
    sortItemsLowToHigh("pizza");
  
    var pizzaList = document.querySelector("#pizza .restaurant-list");
    pizzaList.scrollIntoView({ behavior: "smooth" });
  });
  
  var sortLowToHighLinkIceCream = document.querySelector("#sort-low-to-high");
  sortLowToHighLinkIceCream.addEventListener("click", function(event) {
    event.preventDefault();
    sortItemsLowToHigh("icecream");
  
    var iceCreamList = document.querySelector("#icecream .restaurant-list");
    iceCreamList.scrollIntoView({ behavior: "smooth" });
  });
  
  var sortLowToHighLinkHotDog = document.querySelector("#sort-low-to-high");
  sortLowToHighLinkHotDog.addEventListener("click", function(event) {
    event.preventDefault();
    sortItemsLowToHigh("hotdog");
  
    var hotDogList = document.querySelector("#hotdog .restaurant-list");
    hotDogList.scrollIntoView({ behavior: "smooth" });
  });
  
  
  var sortLowToHighLinkHotDog = document.querySelector("#sort-low-to-high");
  sortLowToHighLinkHotDog.addEventListener("click", function(event) {
    event.preventDefault();
    sortItemsLowToHigh("drinks");
  
    var hotDogList = document.querySelector("#drinks .restaurant-list");
    hotDogList.scrollIntoView({ behavior: "smooth" });
  });
  var sortLowToHighLinkHotDog = document.querySelector("#sort-low-to-high");
  sortLowToHighLinkHotDog.addEventListener("click", function(event) {
    event.preventDefault();
    sortItemsLowToHigh("burger");
  
    var hotDogList = document.querySelector("#pizza .restaurant-list");
    hotDogList.scrollIntoView({ behavior: "smooth" });
  });
  
  
  var sortLowToHighLinkHotDog = document.querySelector("#sort-low-to-high");
  sortLowToHighLinkHotDog.addEventListener("click", function(event) {
    event.preventDefault();
    sortItemsLowToHigh("combo");
  
    var hotDogList = document.querySelector("#pizza .restaurant-list");
    hotDogList.scrollIntoView({ behavior: "smooth" });
  });
  
  
  
  
  
  function sortItemsHighToLow(category) {
    var restaurantList = document.querySelector("#" + category + " .restaurant-list");
    var places = Array.from(restaurantList.querySelectorAll(".place"));
  
    places.sort(function(a, b) {
      var priceA = parseInt(a.querySelector(".price").textContent.replace("₹", ""));
      var priceB = parseInt(b.querySelector(".price").textContent.replace("₹", ""));
      return priceB - priceA;
    });
  
    places.forEach(function(place) {
      restaurantList.appendChild(place);
    });
  }
  
  var sortHighToLowLinkPizza = document.querySelector("#sort-high-to-low");
  sortHighToLowLinkPizza.addEventListener("click", function(event) {
    event.preventDefault();
    sortItemsHighToLow("pizza");
  
    var pizzaList = document.querySelector("#pizza .restaurant-list");
    pizzaList.scrollIntoView({ behavior: "smooth" });
  });
  
  var sortHighToLowLinkIceCream = document.querySelector("#sort-high-to-low");
  sortHighToLowLinkIceCream.addEventListener("click", function(event) {
    event.preventDefault();
    sortItemsHighToLow("icecream");
  
    var iceCreamList = document.querySelector("#icecream .restaurant-list");
    iceCreamList.scrollIntoView({ behavior: "smooth" });
  });
  var sortHighToLowLinkIceCream = document.querySelector("#sort-high-to-low");
  sortHighToLowLinkIceCream.addEventListener("click", function(event) {
    event.preventDefault();
    sortItemsHighToLow("pizza");
  
    var iceCreamList = document.querySelector("#pizza .restaurant-list");
    iceCreamList.scrollIntoView({ behavior: "smooth" });
  });
  var sortHighToLowLinkIceCream = document.querySelector("#sort-high-to-low");
  sortHighToLowLinkIceCream.addEventListener("click", function(event) {
    event.preventDefault();
    sortItemsHighToLow("popcorn");
  
    var iceCreamList = document.querySelector("#popcorn .restaurant-list");
    iceCreamList.scrollIntoView({ behavior: "smooth" });
  });
  
  var sortHighToLowLinkHotDog = document.querySelector("#sort-high-to-low");
  sortHighToLowLinkHotDog.addEventListener("click", function(event) {
    event.preventDefault();
    sortItemsHighToLow("hotdog");
  
    var hotDogList = document.querySelector("#hotdog .restaurant-list");
    hotDogList.scrollIntoView({ behavior: "smooth" });
  });
  
  
  var sortHighToLowLinkDrinks = document.querySelector("#sort-high-to-low");
  sortHighToLowLinkDrinks.addEventListener("click", function(event) {
    event.preventDefault();
    sortItemsHighToLow("drinks");
  
    var drinksList = document.querySelector("#drinks .restaurant-list");
    drinksList.scrollIntoView({ behavior: "smooth" });
  });
  
  var sortHighToLowLinkBurger = document.querySelector("#sort-high-to-low");
  sortHighToLowLinkBurger.addEventListener("click", function(event) {
    event.preventDefault();
    sortItemsHighToLow("burger");
  
    var burgerList = document.querySelector("#pizza .restaurant-list");
    burgerList.scrollIntoView({ behavior: "smooth" });
  });
  
  
  var sortHighToLowLinkcombo = document.querySelector("#sort-high-to-low");
  sortHighToLowLinkBurger.addEventListener("click", function(event) {
    event.preventDefault();
    sortItemsHighToLow("combo");
  
    var comboList = document.querySelector("#pizza .restaurant-list");
    burgerList.scrollIntoView({ behavior: "smooth" });
  });
  function sortItemsByRating(category) {
    var restaurantList = document.querySelector("#" + category + " .restaurant-list");
    var places = Array.from(restaurantList.querySelectorAll(".place"));
  
    places.sort(function(a, b) {
      var ratingA = parseFloat(a.querySelector(".rating").textContent);
      var ratingB = parseFloat(b.querySelector(".rating").textContent);
      return ratingB - ratingA;
    });
  
    places.forEach(function(place) {
      restaurantList.appendChild(place);
    });
  }
  
  var sortByRatingLinkPizza = document.querySelector("#sort-by-rating");
  sortByRatingLinkPizza.addEventListener("click", function(event) {
    event.preventDefault();
    sortItemsByRating("pizza");
  
    var pizzaList = document.querySelector("#pizza .restaurant-list");
    pizzaList.scrollIntoView({ behavior: "smooth" });
  });
  
  var sortByRatingLinkIceCream = document.querySelector("#sort-by-rating");
  sortByRatingLinkIceCream.addEventListener("click", function(event) {
    event.preventDefault();
    sortItemsByRating("icecream");
  
    var iceCreamList = document.querySelector("#icecream .restaurant-list");
    iceCreamList.scrollIntoView({ behavior: "smooth" });
  });
  
  var sortByRatingLinkHotDog = document.querySelector("#sort-by-rating");
  sortByRatingLinkHotDog.addEventListener("click", function(event) {
    event.preventDefault();
    sortItemsByRating("hotdog");
  
    var hotDogList = document.querySelector("#hotdog .restaurant-list");
    hotDogList.scrollIntoView({ behavior: "smooth" });
  });
  
  var sortByRatingLinkDrinks = document.querySelector("#sort-by-rating");
  sortByRatingLinkDrinks.addEventListener("click", function(event) {
    event.preventDefault();
    sortItemsByRating("drinks");
  
    var drinksList = document.querySelector("#drinks .restaurant-list");
    drinksList.scrollIntoView({ behavior: "smooth" });
  });
  
  var sortByRatingLinkBurger = document.querySelector("#sort-by-rating");
  sortByRatingLinkBurger.addEventListener("click", function(event) {
    event.preventDefault();
    sortItemsByRating("burger");
  
    var burgerList = document.querySelector("#pizza .restaurant-list");
    burgerList.scrollIntoView({ behavior: "smooth" });
  });
  var sortByRatingLinkcombo = document.querySelector("#sort-by-rating");
  sortByRatingLinkBurger.addEventListener("click", function(event) {
    event.preventDefault();
    sortItemsByRating("combo");
  
    var burgerList = document.querySelector("#pizza .restaurant-list");
    burgerList.scrollIntoView({ behavior: "smooth" });
  });
  
  
  
  
  
  
  
  
  
  
  function sortItemsByDelivery(category) {
    var restaurantList = document.querySelector("#" + category + " .restaurant-list");
    var places = Array.from(restaurantList.querySelectorAll(".place"));
  
    places.sort(function(a, b) {
      var deliveryA = parseFloat(a.querySelector(".delivery").textContent);
      var deliveryB = parseFloat(b.querySelector(".delivery").textContent);
      return deliveryB - deliveryA;
    });
  
    places.forEach(function(place) {
      restaurantList.appendChild(place);
    });
  }
  
  var sortBydeliveryLinkPizza = document.querySelector("#sort-by-delivery");
  sortBydeliveryLinkPizza.addEventListener("click", function(event) {
    event.preventDefault();
    sortItemsByDelivery("pizza");
  
    var pizzaList = document.querySelector("#pizza .restaurant-list");
    pizzaList.scrollIntoView({ behavior: "smooth" });
  });
  
  var sortBydeliveryLinkIceCream = document.querySelector("#sort-by-delivery");
  sortBydeliveryLinkIceCream.addEventListener("click", function(event) {
    event.preventDefault();
    sortItemsByDelivery("icecream");
  
    var iceCreamList = document.querySelector("#icecream .restaurant-list");
    iceCreamList.scrollIntoView({ behavior: "smooth" });
  });
  
  var sortBydeliveryLinkHotDog = document.querySelector("#sort-by-delivery");
  sortBydeliveryLinkHotDog.addEventListener("click", function(event) {
    event.preventDefault();
    sortItemsByDelivery("hotdog");
  
    var hotDogList = document.querySelector("#hotdog .restaurant-list");
    hotDogList.scrollIntoView({ behavior: "smooth" });
  });
  
  var sortBydeliveryLinkDrinks = document.querySelector("#sort-by-delivery");
  sortBydeliveryLinkDrinks.addEventListener("click", function(event) {
    event.preventDefault();
    sortItemsByDelivery("drinks");
  
    var drinksList = document.querySelector("#drinks .restaurant-list");
    drinksList.scrollIntoView({ behavior: "smooth" });
  });
  
  var sortBydeliveryLinkBurger = document.querySelector("#sort-by-delivery");
  sortBydeliveryLinkBurger.addEventListener("click", function(event) {
    event.preventDefault();
    sortItemsByDelivery("burger");
  
    var burgerList = document.querySelector("#pizza .restaurant-list");
    burgerList.scrollIntoView({ behavior: "smooth" });
  });
  var sortBydeliveryLinkcombo = document.querySelector("#sort-by-delivery");
  sortBydeliveryLinkBurger.addEventListener("click", function(event) {
    event.preventDefault();
    sortItemsByDelivery("combo");
  
    var comboList = document.querySelector("#pizza .restaurant-list");
    burgerList.scrollIntoView({ behavior: "smooth" });
  });
  
  
  function searchFoodItems() {
    var searchInput = document.querySelector(".search-input").value.toLowerCase();
    var places = document.querySelectorAll(".place");
  
    var firstMatch = null;
  
    places.forEach(function(place) {
      var foodItemName = place.querySelector(".place-link .name").textContent.toLowerCase();
      if (foodItemName.includes(searchInput)) {
        place.style.display = "block";
  
        if (!firstMatch) {
          firstMatch = place;
        }
      } else {
        place.style.display = "none";
      }
    });
  
    if (firstMatch) {
      firstMatch.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  var searchIcon = document.querySelector(".search-icon");
  searchIcon.addEventListener("click", function(event) {
    event.preventDefault();
    searchFoodItems();
  });
  
  var searchInput = document.querySelector(".search-input");
  searchInput.addEventListener("input", function() {
    searchFoodItems();
  });
  
  
  
