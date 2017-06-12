var movieDB = [
  {
    title: "In Bruges",
    hasWatched: false,
    rating: 5
  },
  {
    title: "Frozen",
    hasWatched: true,
    rating: 4.5
  },
  {
    title: "Max Fury Road",
    hasWatched: true,
    rating: 5
  },
];

movieDB.forEach(function(movie){
  console.log(buildString(movie));
});

function buildString(movie){
  var result = "You have ";

  if(movie.hasWatched){
    result += "watched ";
  }else {
    result += "not sceen ";
  }

  result += "\""+movie.title+"\" - ";
  result += movie.rating + " stares";
  return result;

}
