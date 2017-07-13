const Puzzle = require('../models/Puzzle');
const Test = require('../models/Test');

Puzzle.hasMany(Test);

const puzzleController = {};

puzzleController.sendPuzzle = (req, res, next) => {
    console.log('trying to send puzzle.....')
    Puzzle.findAll({
        include: [{ model: Test }]
    })
        .then(puzzle => {
            console.log('found puzzle data! crafting.....')
            let x = puzzle.map(puzzle => {
                return Object.assign({}, {
                    pId: puzzle.id,
                    name: puzzle.name,
                    pDesc: puzzle.description,
                    tests: puzzle.tests.map(test => {
                        return Object.assign({}, {
                            tId: test.id,
                            tDesc: test.description,
                            input: test.input,
                            expOutput: test.expOutput
                        })
                    })
                })
            })
            console.log('returning puzzle data.....')
            res.json((x[0]));
        });
}

module.exports = puzzleController;
