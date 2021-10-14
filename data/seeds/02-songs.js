exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("songs")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("songs").insert([
        { song_id: 1, song_title: "The Spins", album_id: 1 },
        { song_id: 2, song_title: "The Star Room", album_id: 2 },
        { song_id: 3, song_title: "Aquarium", album_id: 2 },
        { song_id: 4, song_title: "Ascension", album_id: 3 },
        { song_id: 5, song_title: "Angel Dust", album_id: 4 },
        { song_id: 6, song_title: "Woods", album_id: 5 },
        { song_id: 7, song_title: "Circles", album_id: 5 },
        { song_id: 8, song_title: "Hand Me Downs", album_id: 5 },
        { song_id: 9, song_title: "Hurt Feelings", album_id: 6 },
        { song_id: 10, song_title: "Come Back to Earth", album_id: 6 },
        { song_id: 11, song_title: "2009", album_id: 6 },
        { song_id: 12, song_title: "Empire Ants", album_id: 7 },
        { song_id: 13, song_title: "On Melancholy Hill", album_id: 7 },
        { song_id: 14, song_title: "Tommorrow Comes Today", album_id: 8 },
        { song_id: 15, song_title: "Feel Good Inc.", album_id: 9 },
        { song_id: 16, song_title: "Amarillo", album_id: 10 },
        { song_id: 17, song_title: "Fire Flies", album_id: 11 },
        { song_id: 18, song_title: "Dead Butterflies", album_id: 12 },
      ]);
    });
};
