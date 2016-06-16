$(document).ready( function() {
  $("#inputs").on("keydown", function(e){
    if(e.keyCode === 13){
      var searchTerm = $("input#word").val();
      var searchURL = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&rating=pg&limit=10&q="+searchTerm;
      $.ajax({
        url: searchURL,
        type: "GET",
        dataType: "json"
      }).done(function(response){
        console.log(response);
        var image = response.data[0].images.original.url;
        console.log(image);
        $("#background").css("background-image", "url('" + image + "')")

      }).fail(function(response){
        console.log("Nah girl!")
      });
    }
  });





});
