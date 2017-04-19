console.log('js good to go!');

$(document).ready(onReady);

function onReady() {
  console.log('good to go');


$.ajax({
  url: 'http://www.omdbapi.com/?t=fight+club',
  success: function(response){
     console.log('in response', response);
     console.log(response.Title);
     console.log(response.Actors);
     console.log(response.Awards);

     var $moviePoster = response.Poster;
     console.log($moviePoster);


     $('.container').append('<div class= "movie-wrapper" >' + response.Title + '</div>');// adds title
     $('.info').append('<h1 class= "stars">' + "Starring: " + response.Actors + '<h1>'); //adds h1 w/ names of stars
     $('.info').append('<p class = "description">' + response.Plot + '</p>');// adds plot description
     $('.container').append('<img src="'+ $moviePoster + '">'); //appends poster
  } //end success function


});// end of ajax request

}//end onReady
