const express = require("express");
const Albums = require("./albums-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const albums = await Albums.get();
    res.status(200).json(albums);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deleted = await Albums.remove(req.params.id);
    res.status(200).json(deleted);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
