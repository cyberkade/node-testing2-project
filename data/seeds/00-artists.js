exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("artists")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("artists").insert([
        { artist_id: 1, artist_name: "Mac Miller" },
        { artist_id: 2, artist_name: "Gorillaz" },
      ]);
    });
};
