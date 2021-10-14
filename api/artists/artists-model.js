const db = require("../../data/dbConfig");

function get() {
  return db("artists as ar");
}

function getById(id) {
  return db("artists").where("artist_id", id).first();
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
