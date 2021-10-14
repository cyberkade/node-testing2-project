const express = require("express");
const Songs = require("./songs-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const songs = await Songs.get();
    res.status(200).json(songs);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newSong = await Songs.insert(req.body);
    res.status(201).json(newSong);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
