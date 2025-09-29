var express = require('express');
var router = express.Router();
var products = require('../data/product.json');

// /* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', {
//     title: 'Toko Online Sederhana',
//     products: products
//   });
// });
router.get("/", maincontroller.index);

//selesaikan fungsi route pencarian, pisahkan dengan controller

module.exports = router;