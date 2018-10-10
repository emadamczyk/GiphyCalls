$(document).ready(function(){

var topics = ["Bicycles", "Unicycles", "Tandems", "BMX", "Tricycles"];

function displayGifs() {
  console.log(this);
  var gifs = $(this).attr("data-name");
  var resultNumber = 10;
  console.log(gifs);
  var queryURL =
    "http://api.giphy.com/v1/gifs/search?q=" +
    gifs +
    "&api_key=r5ZdfHEr7DRl96jWYp47eXbkjeMiiH8f&limit=" +
    resultNumber;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    //console.log(response);
    var gifResults = response.data;
    console.log(gifResults);
    $("#gifs-view").empty();
    $("#giphy-input").empty();
    for (var i = 0; i < gifResults.length; i++) {
      var gifDiv = $("<div>");
      var gifImage = $("<img>");
      var gifURL = gifResults[i].images.fixed_height_small_still.url;
      var gifAniURL = gifResults[i].images.fixed_height_small.url;
      var gifRating = gifResults[i].rating;
      gifImage.attr("data-still", gifURL);
      gifImage.attr("data-animate", gifAniURL);
      gifImage.attr("data-state", "still");
      gifImage.attr("src", gifURL);
      gifImage.addClass("gifView");
      gifDiv.addClass("gifBorder");
      //gifImage.attr("alt", "bike image");
      var ratingDiv = $("<div>");
      ratingDiv.addClass("rating");
      ratingDiv.text("Giphy Rating: " + gifRating);
      console.log(gifRating);
      gifDiv.append(gifImage, ratingDiv);  
      $("#gifs-view").prepend(gifDiv);
    }
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
    a.addClass("gifs");
    // Added a data-attribute
    a.attr("data-name", topics[i]);
    // Provided the initial button text
    a.text(topics[i]);
    // Added the button to the buttons-view div
    $("#gif-buttons").append(a);
  }
}

$("#add-giphy").on("click", function() {
  event.preventDefault();
  var gifs = $("#giphy-input").val().trim();
  // only add button if new topic
  for (i = 0; i < topics.length; i++) {}
  if (!topics.includes(gifs)) {
    // how to best use .toLowerCase() on array before running this if statement
    topics.push(gifs);
  }
  renderButtons();
  $("#giphy-input").val("");
});

$(document).on("click", ".gifs", displayGifs);
renderButtons();

$(".gifView").on("click", function() {
    var state = $(this).attr("data-state");
    if (state === "still") {
        console.log("state is still");
        $(this).attr("src", gifAniURL);
        //$(this).attr("data-state", "animate");
    } else {
        console.log("state is animate");
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("src", "data-state", "still");
    }

});    


//var getGiphy = $.get("http://api.giphy.com/v1/gifs/search?q=bicycles&api_key=r5ZdfHEr7DRl96jWYp47eXbkjeMiiH8f&limit=10");
//getGiphy.done(function(data) { console.log("success got data", data); });
});