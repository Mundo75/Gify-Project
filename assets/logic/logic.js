$(document).ready(function() {

   
    //set up array of baseball teams to use as starting set-up for page
    var teams = ["arizona diamondbacks", "new york yankees", "seattle mariners", "cincinnati reds", "miami marlins", "tampa bay rays", "minnesota twins", "san diego padres", "texas rangers", "kansas city royals"];
    //loop through baseball array, adding buttons to html using jquery

    function initialSetup () {

        $("#teamButtons").empty();

        for (var i = 0 ; i < teams.length; i++) {

            var newButton = $("<button>");
            newButton.addClass("teamName");
            newButton.attr("data-name", teams[i]);
            newButton.text(teams[i]);
            $("#teamButtons").append(newButton);
        }
    }   initialSetup();
    
    //set up event listener on button click to and new buttons form team names added via the html form field submit button
    $("#newTeam").on("click", function(event) {

        event.preventDefault();

        var baseballTeam = $("#teamInput").val().trim();
        teams.push(baseballTeam);
        initialSetup();
    })
    
    //write cote to parse JSON data and append the gif images to the HTML
    $(".teamName").on("click")

    var apiKeyParameter =   "aEI26EVtx20kHGGHabgtZjXbZwtnPvot";
    var mainURL =           "https://api.giphy.com/v1/gifs/search?"
    var searchParameter =   $(this).attr("data-name");
    var queryURL =          mainURL + "api_key=" + apiKeyParameter + "&q=" + searchParameter + "&limit=9&offset=0&rating=PG-13&lang=en"

    $.ajax({

         url:    queryURL,
         method: "GET"

    }).then(function(response) {

         console.log(response);
         var teamData = response.data;

         for (var i = 0; i < teamData.length; i++) {

            var teamCard = $("<div class=\"card\">");
            teamCard.attr("style", "width: 18rem");

            var cardTitle = $("<div class=\"card-body\">");

            var animated = results[i].images.fixed_height.url;
            var still = results[i].images.fixed_height_still.url;

            var teamGif = $("<img>")
            teamGif.attr("src", still);
            teamGif.attr("data-still", still);
            teamGif.attr("data-animate", animated);
            teamGif.attr("data-state", "still");
            teamGif.addClass("teamImage");
  
            teamCard.append(teamGif);
            $("gifSpace1").append(teamCard);

            

        };

     })
    //set up code to play/pause gifs as clicked

});