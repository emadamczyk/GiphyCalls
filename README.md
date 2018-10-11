# GiphyCalls

For this application, there will be a variety of buttons on a topic that I selected. When the user clicks on any of these buttons, the page will grab 10 static, non-animated gif images from the GIPHY API and place them on the page. Underneath each gif, the data for the rating (as provided by the GIPHY API) is displayed. When the user clicks on any one of the still GIPHY images, the gif will  animate. If the user clicks the gif again, it will stop playing.

There is also an input box to take in the value from a user on any other topic. The page will create a button labeled with the text from the user input that when clicked will generate more gifs (as the other buttons do).  

In the coding for this app, I initially struggled with the best way to animate/pause the gifs. I used a suggestion from a TA to run the pause/animate click within the for loop, on click of the imageDiv created for each gif rather than in a separate function.

This app is mobile responsive.