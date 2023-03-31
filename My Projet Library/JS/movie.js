
const urlFetch = "http://localhost:3000/api/movies"; 


// prend le div que j'ai cree dans mon deuxieme Html
const movieDetails = document.querySelector(".movie-cont");

//cree le params pour prendre le window location search 
const params = new URLSearchParams(window.location.search);
//cree un const, qui prend params.prend id en utlisant le get method 
const movieId = params.get('id');

// fetch de URL les elemntes extra que on n'a pas afiche sur la premiere page ,une video et title
fetch(urlFetch)

 .then((response) => response.json())

 .then((movies) => {
 //on utilise .find loop pour loop dans le arrayof object sur notre API et trouver le id qui correspond a l'id de notre URL
  const movie = movies.find(movie => movie._id === movieId);

   if (!movie) {
    //si on ne trouve pas ,error "Movie Not Found"
     throw new Error("Movie Not Found");

     }

     //cree un el h2 pour le title
     const title = document.createElement("h2");
     title.textContent = movie.title;
     movieDetails.appendChild(title);//append le title dans le div

     // creer le el video qui predn le source de mon API
     const video = document.createElement("video");
     video.src = movie.video;
     video.controls = true; //activer le video controls
     movieDetails.appendChild(video);//append le video dans le div


    // cree un p pour mettre dedans le extra info pour le film
     const box = document.createElement("p");
     box.textContent = movie.boxoffice;
     movieDetails.appendChild(box);//append le officebox info sur le p dans le div

})
   .catch((error) => {
      console.log(error);
});