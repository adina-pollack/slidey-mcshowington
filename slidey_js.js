$(document).ready( function(){
    $("#inputs").on("keydown", function(e){
      if(e.keyCode === 13){
        var searchTerm = $("#word").val();
        var searchURL = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&rating=pg&limit=10&q="+searchTerm;
        $.ajax({
          url: searchURL,
          type: "GET",
          dataType: "json",
          cache: false
        }).done(function(response){
          var counter = 0
          var newSearch;
          function makeBackground(){
            if (counter < response.data.length){
              var image = response.data[counter].images.original.url;
              $("#background").css("background-image", "url('" + image + "')")
              console.log(image);
              counter++
            }
          }
          makeBackground();
          gifTimer = setInterval(makeBackground, 5000)


        }).fail(function(response){
          console.log("Nah girl!")
        });
      }
    });






});
