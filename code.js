function renderMovie(data){
    
    document.querySelector("#txt h1").textContent = data.title;
    document.querySelector("#txt p").textContent = data.plot;
    document.querySelector("#img").setAttribute("src", data.img);
  
    let castList = "";
    
    for(let i=0; i<data.cast.length; i++){
      castList += "<li>" + data.cast[i] + "</li>";
    }

   document.querySelector("#txt ul").innerHTML = castList;
}

function changeStarRating(rating){
  document.querySelector("#stars").setAttribute("data-rating", rating);
}

for(let i=1; i<=5; i++){
  let star = document.querySelector("#stars :nth-child(" + i + ")");
  console.log("#stars :nth-child(" + i + ")", star)
  star.addEventListener("click", function(){
    console.log("FOOO", i)
    changeStarRating(i);
  });
}

renderMovie(movieData);