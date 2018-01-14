
const express = require('express');

const route = express.Router();

route.use('/', express.static(__dirname + '/../public'));

route.get('/',(req, res) => {

    res.send("mrinal");
});

//route.use('/todos', express.static(__dirname + '/public'));
exports = module.exports = route;