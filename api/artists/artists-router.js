const express = require("express");
const Artists = require("./artists-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const artists = await Artists.get();
    res.status(200).json(artists);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newArtist = await Artists.insert(req.body);
    res.status(201).json(newArtist);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
