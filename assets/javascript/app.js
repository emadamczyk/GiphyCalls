var queryURL = "http://api.giphy.com/v1/gifs/search?q=bikes&api_key=r5ZdfHEr7DRl96jWYp47eXbkjeMiiH8f&limit=10"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(data) {
        console.log(data);

var topics = ["Bicycles", "Unicycles", "Tandems", "BMX", "Tricycles"];

function displayGifs() {
    var gifs = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gifs + "&api_key=r5ZdfHEr7DRl96jWYp47eXbkjeMiiH8f&limit=10"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(data) {
        console.log(data);
        
        var gifImage = $("<img>");

        gifImage.attr("src", queryURL);
        gifImage.attr("alt", "bike image");

        $(".gifs-view").prepend(gifImage);

    });
}

function renderButtons() {

    // Deletes the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#gif-buttons").empty();
    // Loops through the array of movies
    for (var i = 0; i < topics.length; i++) {

      // Then dynamicaly generates buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      // Adds a class of movie to our button
      a.addClass("newTopic");
      // Added a data-attribute
      a.attr("data-name", topics[i]);
      // Provided the initial button text
      a.text(topics[i]);
      // Added the button to the buttons-view div
      $("#gif-buttons").append(a);
    }
  }



//var getGiphy = $.get("http://api.giphy.com/v1/gifs/search?q=bicycles&api_key=r5ZdfHEr7DRl96jWYp47eXbkjeMiiH8f&limit=10");
//getGiphy.done(function(data) { console.log("success got data", data); });