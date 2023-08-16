var express = require('express');
var router = express.Router();
var db=require('../models/database');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('admin/index');
});
router.get('/category_list', function(req, res, next) {
    let sqlCate= `SELECT * FROM category`;
    db.query(sqlCate, function(err,loai){
        if (err) throw err;
        res.render('admin/category_list', {loai:loai});
    })
});


module.exports = router;
