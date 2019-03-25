$(document).ready(function() {

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
    $(document).on("click", ".teamName", function() {

        var apiKeyParameter =   "aEI26EVtx20kHGGHabgtZjXbZwtnPvot";
        var mainURL =           "https://api.giphy.com/v1/gifs/search?"
        var searchParameter =   $(this).attr("data-name");
        var queryURL =          mainURL + "api_key=" + apiKeyParameter + "&q=" + searchParameter + "&limit=9&offset=0&rating=PG-13&lang=en"

        $.ajax({

            url:    queryURL,
            method: "GET"

        }).then(function(response) {

            console.log(response);
            var teamInfo = response.data;

            for (var i = 0; i < teamInfo.length; i++) {

                var teamCard = $("<div>");
            
                var url1 = teamInfo[i].images.fixed_height.url;
                var url2 = teamInfo[i].images.fixed_height_still.url;
                
                //Look at pausing gifs activity for adding attributes to image elements to control animation
                var teamGif = $("<img>");
                teamGif.attr("src", url2);
                teamGif.attr("data-still", url2);
                teamGif.attr("data-animate", url1);
                teamGif.attr("data-state", "still");
                teamGif.addClass("teamImage");
    
                teamCard.append(teamGif);
                $("#gifSpace1").append(teamCard);

            

            };

            //look at pausing gifs activity for conditional code for animating gifs

            $(document).on("click", ".teamImage", function() {
                var state = $(this).attr("data-state");
  
                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                }
                else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }

            });

        });

    });

        
        
    //set up code to play/pause gifs as clicked

});