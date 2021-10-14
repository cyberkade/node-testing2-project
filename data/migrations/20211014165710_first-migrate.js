exports.up = function (knex) {
  return knex.schema
    .createTable("artists", (tbl) => {
      tbl.increments("artist_id");
      tbl.string("artist_name", 128).unique().notNullable();
    })
    .createTable("albums", (tbl) => {
      tbl.increments("album_id");
      tbl.string("album_title", 128).notNullable();
      tbl
        .integer("artist_id")
        .unsigned()
        .notNullable()
        .references("artist_id")
        .inTable("artists")
        .onDelete("CASCADE");
    })
    .createTable("songs", (tbl) => {
      tbl.increments("song_id");
      tbl.string("song_title", 128).notNullable();
      tbl
        .integer("album_id")
        .unsigned()
        .notNullable()
        .references("album_id")
        .inTable("albums")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("songs")
    .dropTableIfExists("albums")
    .dropTableIfExists("artists");
};
