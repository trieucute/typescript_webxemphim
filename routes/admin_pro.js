var express = require('express');
var router = express.Router();
var db=require('../models/database');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('admin/index');
});
router.get('/product_list', function(req, res, next) {
    let sqlpro= `SELECT * FROM products`;
    db.query(sqlpro, function(err,pro){
        if (err) throw err;
        res.render('admin/product_list', {product:pro});
    })
});


module.exports = router;
