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

        var baseballTeam = $("#teamInput").eq(0).val().trim();
        
        if (baseballTeam.length > 2) {
            teams.push(baseballTeam);
        }
    
        //teamInput.val(" ");
        initialSetup();
    })
    
    //write cote to parse JSON data and append the gif images to the HTML
    $(document).on("click", ".teamName", function() {

        $("#gifSpace1").empty();

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
                teamCard.addClass("card");
                teamCard.attr("style", "width: 18rem");
                
            
                var url1 = teamInfo[i].images.fixed_height.url;
                var url2 = teamInfo[i].images.fixed_height_still.url;
                var text = teamInfo[i].slug;
                
                //Look at pausing gifs activity for adding attributes to image elements to control animation
                var teamGif = $("<img>");
                teamGif.addClass("card-img-top");
                teamGif.attr("src", url2);
                teamGif.attr("data-still", url2);
                teamGif.attr("data-animate", url1);
                teamGif.attr("data-state", "still");
                teamGif.addClass("teamImage");
    
                teamCard.append(teamGif);
                $("#gifSpace1").append(teamCard);
                var teamCardBody = $("<div>")
                teamCardBody.addClass("card-body");
                teamCard.append(teamCardBody);
                var teamCardText = $("<p>");
                teamCardText.addClass("card-text");
                teamCardText.text("Caption:  " + teamCardText);
                teamCard.append(teamCardText);
                teamCardText.append(text.slice(0, 24));
                

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

        
        
    

});