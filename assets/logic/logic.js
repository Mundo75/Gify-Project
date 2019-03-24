$(document).ready(function() {

    //call API and make sure return correct JSON data before configuring rest of page
    var apiKeyParameter =   "aEI26EVtx20kHGGHabgtZjXbZwtnPvot";
    var mainURL =           "https://api.giphy.com/v1/gifs/search?api_key=aEI26EVtx20kHGGHabgtZjXbZwtnPvot&q=mascots&limit=10&offset=0&rating=PG-13&lang=en"
    var searchParameter =   

    $.ajax({

        url:    "https://api.giphy.com/v1/gifs/search?api_key=aEI26EVtx20kHGGHabgtZjXbZwtnPvot&q=mascots&limit=10&offset=0&rating=PG-13&lang=en",
        method: "GET"

    }).then(function(response) {

        console.log(response);
    })
    //set up array of baseball teams to use as starting set-up for page
    //loop through baseball array, adding buttons to html using jquery
    //set up event listener on button click to and new buttons form team names added via the html form field submit button
    //write cote to parse JSON data and append the gif images to the HTML
    //set up code to play/pause gifs as clicked

});