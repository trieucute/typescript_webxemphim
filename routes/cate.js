var express = require('express');
var router = express.Router();
var db=require('../models/database');
var modelCate = require('../models/cate'); 

/* GET home page. */
router.get('/', function(req, res, next) {
    

    modelCate.list(function(listpro){ res.json(listpro)} );



});
router.get('/ad/:id', (req, res) => {
  let id = req.params.id;    
  modelCate.read(id, function(u){
    res.json(u);
  });
});
router.get('/:id', (req, res) => {
    let id = req.params.id;    
    modelCate.readCate(id, function(u){
      res.json(u);
    });
 });
 router.put('/ad/:id', (req, res) => {
  let data = req.body;
      let id = req.params.id;
      modelCate.update(id, data, function(){
      res.json({thongbao:"Đã cập nhật xong một danh mục mới"});

      })
});
router.post('/ad/', (req, res) => {
  let data = req.body; 
  modelCate.create(data , function(){
      res.json({thongbao:"Đã thêm xong một danh mục mới"});
  });
});
//  router.put('/:id', (req, res) => {
//   let data = req.body;
//       let id = req.params.id;
//       modelPro.update(id, data, function(){
//       })
// });
router.delete('/ad/:id', (req, res) => {
  let id = req.params.id;    
  modelCate.delete(id, function(u){
    // alert('có chắc là xoá');
    res.json({thongbao: 'Đã xoá cate '});

  });
});

 module.exports = router;