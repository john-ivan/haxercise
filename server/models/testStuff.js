const Sequelize = require('sequelize');
//string below contains db name, pw, username, etc
const connection = new Sequelize('postgres://mewibmsh:H5G1N1dKdCT8rS4S0hSisdmG160Y3Jbv@stampy.db.elephantsql.com:5432/mewibmsh');

// connection.authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });

const Puzzle = connection.define('puzzle', {
    name: Sequelize.STRING,
    description: Sequelize.TEXT
})

const Test = connection.define('test', {
    description: Sequelize.TEXT,
    input: Sequelize.JSON,
    expOutput: Sequelize.JSON,
})

//one to many relation
Puzzle.hasMany(Test);

//If the force argument is true, will DELETE existing table and overwrite
//No need to sync if adding to existing
// connection.sync(
//     { force: true }
// )
//     .then(() => {
//         Puzzle.create({
//             name: "Fizzbuzz",
//             description: `Write a function that returns an array containing the numbers 1 to NUM. 
//             Put fizz in place of numbers divisble by 3, buzz in place of numbers divisble by 5, and 
//             fizzbuzz in place of numbers divisble by both 3 and 5. fizzbuzz(16);  -> [ 1, 2, fizz, 4,
//              buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz, 16 ]`,
//             tests: [
//                 {
//                     description: 'should return empty array if 0 passed in...',
//                     input: 0,
//                     expOutput: []
//                 },
//                 {
//                     description: 'should work for multiple of 3 ....',
//                     input: 9,
//                     expOutput: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz']
//                 },
//                 {
//                     description: 'should work for multiple of 5 ....',
//                     input: 5,
//                     expOutput: [1, 2, 'fizz', 4, 'buzz']
//                 },
//                 {
//                     description: 'should work for multiple of 5 ....',
//                     input: 5,
//                     expOutput: [1, 2, 'fizz', 4, 'buzz']
//                 },
//                 {
//                     description: 'should work for multiple of 5 & 3',
//                     input: 15,
//                     expOutput: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz']
//                 },
//                 {
//                     description: 'should work for number not divisble by 3 or 5...',
//                     input: 7,
//                     expOutput: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7]
//                 },
//             ]
//             //include 2nd arg below to create associated rows in second table
//         }, {
//                 include: [Test]
//             })
//     })

//Simple creation of row on single table
// Puzzle.create({
//     name: "test",
//     description: "testing testing"
// })

// Puzzle.findAll({
//     include: [{ model: Test }]
// })
    // .then(puzzle => {
    //     //have to dig through items to find values 
    //     puzzle.forEach(puzzle => {
    //         console.log('pid:', puzzle.id)
    //         puzzle.tests.forEach(test => {
    //             console.log('tid:', test.id)
    //         })
    //     })

