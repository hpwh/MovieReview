let movieData = require("./Data");
let $ = require("jquery");

function renderMovie(data){

  ui.title.text(data.title);
  ui.plot.text(data.plot);
  ui.img.attr("src", data.img);
    
   
    ui.cast.empty();
    
    for(let i=0; i<data.cast.length; i++){
      ui.cast.append("<li>" + data.cast[i] + "</li>");
    }

}

//------------------------------------------------------------------------

function changeStarRating(rating){
  $(".filled").removeClass("filled");
  for(let i=1; i<=rating; i++){
    ui.stars[i-1].addClass("filled");
  }
}

let ui = {
  title: $("#txt h1"),
  plot: $("#txt p"),
  img: $("#img"),
  cast: $("#txt ul"),
  rating: $("#stars"),
  stars: [
    $("[id='1']"),
    $("[id='2']"),
    $("[id='3']"),
    $("[id='4']"),
    $("[id='5']")
  ]
};
  

ui.rating.on("click", "span", function(e){
  let star = $(e.target);
  let rating = parseInt(star.attr("id"));
  changeStarRating(rating);
});

let currentRating;

for (let i=1; i<=5; i++){
  let star = document.getElementById(i);
 
  star.addEventListener("click", function(){
    currentRating = i;
    changeStarRating(i);
  });

 star.addEventListener("mouseover", function(){
   changeStarRating(i);
 });

 star.addEventListener("mouseout", function(){
    changeStarRating(currentRating);
 });

}

renderMovie(movieData);

