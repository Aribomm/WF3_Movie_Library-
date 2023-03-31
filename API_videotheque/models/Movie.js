const { v4: uuidv4 } = require('uuid');

const movies = [
    {
      "_id" : uuidv4(), 
      "title" : "13: Game of Death",
      "producer" : "Chookiat Sakveerakul",
      "description" : "After losing his job, his car and his money, Phuchit, Krissada Sukosol, races against time to complete 13 tasks ordered by an anonymous caller who promised 100,000,000 Thai Baht upon completion.",
      "time" : 114,
      "imageUrl" : "13_game_of_death.jpg",
      "video" : "/API_videotheque/videos/13 Game of Death UK trailer.mp4",
      "boxoffice" : "13 Beloved was number one in Thai cinemas on opening weekend, earning US$266,218 and edging out the previous week's number one film, Rob-B-Hood.[16]",
    },
    {
        "_id" : uuidv4(),
      "title" : "Alien",
      "producer" : "Ridley Scott",
      "description" : "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
      "time" : 117,
      "imageUrl" : "alien.jpg",
      "video" : "/API_videotheque/videos/Alien Trailer HD (Original 1979 Ridley Scott Film) Sigourney Weaver.mp4",
      "boxoffice" : "The film was a commercial success, opening in 90 theatres across the United States (plus 1 in Canada), setting 51 house records and grossing $3,527,881 over the 4-day Memorial Day."
    },
    {
        "_id" : uuidv4(),
      "title" : "Magnolia",
      "producer" : "Paul Thomas Anderson",
      "description" : "An epic mosaic of interrelated characters in search of love, forgiveness and meaning in the San Fernando Valley.",
      "time" : 188,
      "imageUrl" : "magnolia.jpg",
      "video" : "/API_videotheque/videos/Magnolia (1999) Official Trailer .mp4",
      "boxoffice" : "Magnolia initially opened in a limited release on December 17, 1999, in seven theaters grossing $193,604. The film was given a wide release on January 7, 2000, in 1,034 theaters grossing $5.7 million on its opening weekend."
    },
    {
        "_id" : uuidv4(),
      "title" : "Donnie Darko",
      "producer" : "Richard Kelly",
      "description" : "After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a man in a large rabbit suit who manipulates him to commit a series of crimes.",
      "time" : 113,
      "imageUrl" : "donnie_darko.jpg",
      "video" : "/API_videotheque/videos/Donnie Darko - TRAILER (2001) [HD].mp4",
      "boxoffice" : "In October 2002, the film was released in the UK, which generated renewed critical and commercial interest in the film. It sold 300,000 tickets within the first six weeks of its release."
    },
    {
        "_id" : uuidv4(),
      "title" : "Dobermann",
      "producer" : "Jan Kounen",
      "description" : "Dobermann is the world's most ruthless bank robber and with his gang rob bank after bank, now in Paris. What can the police do but to let the mad, morally bankrupt police commissioner loose on him?",
      "time" : 94,
      "imageUrl" : "dobermann.jpg",
      "video" : "/API_videotheque/videos/Doberman (1997) - Official Trailer.mp4",
      "boxoffice" : "The movie won 800 000 $ ."
    },
    {
        "_id" : uuidv4(),
      "title" : "Starship Troopers",
      "producer" : "Paul Verhoeven",
      "description" : "Humans in a fascist, militaristic future wage war with giant alien bugs.",
      "time" : 129,
      "imageUrl" : "starship_troopers.jpg",
      "video" : "/API_videotheque/videos/STARSHIP TROOPERS [1997]– Official Trailer (HD) Get the 25th Anniversary 4K Ultra HD SteelBook Now.mp4",
      "boxoffice" : "The premiere of Starship Troopers took place on November 4, 1997 in Westwood, Los Angeles, with an afterparty at the Museum of Flying.[41] In the United States and Canada, the film was released on November 7, 1997, earning approximately $22.1 million from 2,971 theaters, an average of $7,424 per theater."
    //   "bgUrl" : "starship_troopers.jpg"
    },
];

exports.find = () => {
  return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(movies))));
}

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(movies)).find(movie =>
      movie._id == id)
    )
  );
}




