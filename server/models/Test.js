const Sequelize = require('sequelize');
const connection = new Sequelize('postgres://mewibmsh:H5G1N1dKdCT8rS4S0hSisdmG160Y3Jbv@stampy.db.elephantsql.com:5432/mewibmsh');

const Test = connection.define('test', {
    description: Sequelize.TEXT,
    input: Sequelize.JSON,
    expOutput: Sequelize.JSON,
})

module.exports = Test;