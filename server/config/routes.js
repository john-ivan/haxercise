const express = require('express');
const puzzleRouter = express.Router();
const scoreRouter = express.Router();
const puzzleController = require('../controllers/puzzles');

puzzleRouter.route('/')
  .get(puzzleController.sendPuzzle)

module.exports = {
  puzzles: puzzleRouter  
}