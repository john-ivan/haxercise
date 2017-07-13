const Sequelize = require('sequelize');
const connection = new Sequelize('postgres://mewibmsh:H5G1N1dKdCT8rS4S0hSisdmG160Y3Jbv@stampy.db.elephantsql.com:5432/mewibmsh');
const Puzzle = connection.define('puzzle', {
    name: Sequelize.STRING,
    description: Sequelize.TEXT
})

module.exports = Puzzle;

