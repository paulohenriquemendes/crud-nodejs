const Sequilize = require('sequilize');

const sequilize = new Sequilize('mysql', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequilize;