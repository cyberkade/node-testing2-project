const db = require("../../data/dbConfig");

function get() {
  // select a.*, album_title, song_title from artists as a
  // join albums as al on a.artist_id = al.artist_id
  // join songs as s where s.album_id = al.album_id
  return db("artists as ar")
    .join("albums as al", "al.artist_id", "ar.artist_id")
    .select("ar.artist_name", "album_title", "al.album_id");
}

function getById(id) {
  return db("albums").where("album_id", id).first();
}

async function insert(album) {
  const [id] = await db("albums").insert(album);
  return getById(id);
}

function remove(id) {
  return db("albums").where("album_id", id).del();
}

module.exports = {
  get,
  getById,
  insert,
  remove,
};
