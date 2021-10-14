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

// router.post('/', async (req, res, next)=> {
//     try {
//         const newProject = await Projects.insert(req.body)
//         if(newProject[0].project_completed === 0) {
//             res.status(201).json({...newProject[0], project_completed: false})
//         } else if(newProject[0].project_completed === 1) {
//             res.status(201).json({...newProject[0], project_completed: true})
//         }
//     }
//     catch (err) {
//         next(err)
//     }
// })

module.exports = router;
