const urlFetch = "http://localhost:3000/api/movies";
const urlFetchId = "http://localhost:3000/api/movies/${movie._id}";


const movieContainer = document.querySelector(".movie-container");

// Fetch les films
fetch(urlFetch)
  .then((response) => response.json())
  .then((movies) => {
    // loop dans le films et cree pour chacque film un card 
    movies.forEach((movie) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.id = movie._id; // j'ai ajoute le id de movies sur mon div avec class card

      // ajouter le tile dans le card
      const title = document.createElement("h2");
      title.textContent = movie.title;
      card.appendChild(title);

       // ajouter le image dans le movie card
       const image = document.createElement("img");
       image.src = movie.imageUrl;//image.src prend le source de movie image par le API
       image.width = "200" // le image width
       image.height = "300" // le image height
       card.appendChild(image);

         // ajouter le producer dans le movie card
      const producer = document.createElement("p");
      producer.textContent =  movie.producer;
      producer.setAttribute("class", "producer");// jai mis le class pour selecter et styler avec css
      card.appendChild(producer);

      // ajouter le duree de film dans le movie card
      const time = document.createElement("p");
      let durationInMinutes = movie.time; // convertir les duree en min => en heure et min
      let hours = Math.floor(durationInMinutes / 60);
      let minutes = durationInMinutes % 60;
      time.textContent = "Duration: " + hours + "h " + minutes + "minutes";
      time.setAttribute("class", "duration");//jai mis le class pour selecter et styler avec css
      card.appendChild(time);


      // ajouter le fim description  dans le movie card
      const desc = document.createElement("p");
      desc.textContent = movie.description;
      desc.setAttribute("class", "description");
      card.appendChild(desc);

      // ajouter le card dans la div
      movieContainer.appendChild(card);
      
      // cree "Go Watch" button et on ajoute un EventListener
      const button = document.createElement("button");
      button.textContent = "Go Watch";
      //ajouter un function qui prend le location origin et la route du html avec les details plus pour les films,avec les id's de films
      button.addEventListener("click", function () {
        //cree URL qui prend le ID de film qui est clique et le path de mon html
        const url = window.location.origin + "/My Projet Library/HTML/movie.html?id=" + movie._id;
        window.location.href = url;
      });
      
      // ajouter le button dans le card
      card.appendChild(button);
    });
  })
  // error si le fetch ne marche pas
  .catch((error) => {
    console.log(error);
  });