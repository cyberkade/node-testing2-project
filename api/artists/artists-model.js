const db = require("../../data/dbConfig");

function get() {
  // select a.*, album_title, song_title from artists as a
  // join albums as al on a.artist_id = al.artist_id
  // join songs as s where s.album_id = al.album_id
  return db("artists as ar");
}

function getById(id) {
  return db("artists").where("id", id).first();
}

async function insert(artist) {
  const [id] = await db("artists").insert(artist);
  return getById(id);
}

module.exports = {
  get,
  getById,
  insert,
};
