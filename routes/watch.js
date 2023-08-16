var express = require('express');
var router = express.Router();
var db=require('../models/database');

/* GET home page. */
router.get('/', function(req, res, next) {
    let sqlCate= `SELECT * FROM category`;
    db.query(sqlCate, function(err,loai){
        if (err) throw err;
        res.render('details',{cate:loai});
        // res.render('admin/category_list', );
    })
});
router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  let sqlCate= `SELECT * FROM category`;
  let sqlpro= `SELECT * FROM products  where id_pro=${id}`;
  let sqlcates=`SELECT name_cate FROM products join product_category on products.id_pro= product_category.product_id  join category on category.id_cate= product_category.category_id where id_pro=${id} ORDER by id_pro`
  db.query(sqlpro, function(err,product){
      if (err) throw err;
      db.query(sqlCate, function(err,loai){ 
        if (err) throw err; 
        db.query(sqlcates, function(err,cates){
          if (err) throw err; 
          res.render('details',{cate:loai,pro:product,catepro:cates});
          // res.render('admin/category_list', );
      })
    })
  })
});


router.get('/:id/watching', function(req, res, next) {
  let id = req.params.id;
  let sqlCate= `SELECT * FROM category`;
  let sqlpro= `SELECT * FROM products  where id_pro=${id}`;
  let sqlcates=`SELECT name_cate FROM products join product_category on products.id_pro= product_category.product_id  join category on category.id_cate= product_category.category_id where id_pro=${id} ORDER by id_pro`
  db.query(sqlpro, function(err,product){
      if (err) throw err;
      db.query(sqlCate, function(err,loai){ 
        if (err) throw err; 
        db.query(sqlcates, function(err,cates){
          if (err) throw err; 
          res.render('watching',{cate:loai,pro:product,catepro:cates});
          // res.render('admin/category_list', );
      })
    })
  })
  // res.render('watching');

});
module.exports = router;
