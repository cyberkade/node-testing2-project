exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("albums")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("albums").insert([
        { album_id: 1, album_title: "K.I.D.S", artist_id: 1 },
        {
          album_id: 2,
          album_title: "Watching Movies With The Sound Off",
          artist_id: 1,
        },
        { album_id: 3, album_title: "GO:OD AM", artist_id: 1 },
        { album_id: 4, album_title: "Faces", artist_id: 1 },
        { album_id: 5, album_title: "Circles", artist_id: 1 },
        { album_id: 6, album_title: "Swimming", artist_id: 1 },
        { album_id: 7, album_title: "Plastic Beach", artist_id: 2 },
        { album_id: 8, album_title: "Gorillaz", artist_id: 2 },
        { album_id: 9, album_title: "Demon Days", artist_id: 2 },
        { album_id: 10, album_title: "The Fall", artist_id: 2 },
        { album_id: 11, album_title: "The Now Now", artist_id: 2 },
        { album_id: 12, album_title: "Song Machine", artist_id: 2 },
      ]);
    });
};
