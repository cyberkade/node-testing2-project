const db = require("../../data/dbConfig");

function get() {
  // select a.*, album_title, song_title from artists as a
  // join albums as al on a.artist_id = al.artist_id
  // join songs as s where s.album_id = al.album_id
  return db("artists as ar")
    .join("albums as al", "al.artist_id", "ar.artist_id")
    .select("ar.*", "album_title");
}

function getById(id) {
  return db("albums").where("id", id).first();
}

async function insert(album) {
  const [id] = await db("albums").insert(album);
  return getById(id);
}

module.exports = {
  get,
  getById,
  insert,
};
