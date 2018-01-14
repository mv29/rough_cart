
const express = require('express');

const route = express.Router();

route.use('/', express.static(__dirname + '/../public/'));

let products = [
    {
      name:'Jacket',
      price:100,
        quantitiy:0
    },
    {
        name:'Shirt',
        price:200,
        quantitiy:0
    },

    {
        name:'Jeans',
        price:300,
        quantitiy:0
    },

    {
        name:'Trousers',
        price:400,
        quantitiy:0
    },
    {
        name:'Shoes',
        price:500,
        quantitiy:0
    },
    {
        name:'Sweat Shirt',
        price:600,
        quantitiy:0
    }
];
/*
route.get('/mv',(req, res) => {
 res.send(products);
});/*
route.get("/", (req, res) => {
 res.send(products);
})*/
route.get('/id',(req, res) => {
 products[req.query.x].quantitiy+=1;
 res.send(products);
});
exports = module.exports = route;