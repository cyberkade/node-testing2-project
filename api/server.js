const express = require("express");
const artistsRouter = require("./artists/artists-router");
const albumsRouter = require("./albums/albums-router");
const songsRouter = require("./songs/songs-router");
const server = express();

server.use(express.json());
server.use("/api/artists", artistsRouter);
server.use("/api/albums", albumsRouter);
server.use("/api/songs", songsRouter);

// eslint-disable-next-line
server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
  });
});

module.exports = server;
