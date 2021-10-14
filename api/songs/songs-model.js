const db = require("../../data/dbConfig");

function get() {
  // select a.*, album_title, song_title from artists as a
  // join albums as al on a.artist_id = al.artist_id
  // join songs as s where s.album_id = al.album_id
  return db("artists as ar")
    .join("albums as al", "al.artist_id", "ar.artist_id")
    .join("songs as s", "s.album_id", "al.album_id")
    .select("ar.*", "album_title", "song_title");
}

function getById(id) {
  return db("songs").where("song_id", id).first();
}

async function insert(song) {
  const [id] = await db("songs").insert(song);
  return getById(id);
}

module.exports = {
  get,
  getById,
  insert,
};
