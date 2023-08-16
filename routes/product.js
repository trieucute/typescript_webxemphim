var express = require('express');
var router = express.Router();
var db=require('../models/database');
var modelPro = require('./../models/product'); 
const multer = require('multer');
// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, './public/images');
//   },
//   filename: function(req, file, cb) {
//     cb(null, file.originalname);
//   }
// });
// const upload = multer({ storage: storage });

/* GET home page. */
router.get('/', function(req, res, next) {
    

    modelPro.list(function(listpro){ res.json(listpro)} );



});
router.get('/top5', function(req, res, next) {
    

  modelPro.listTop5(function(list){ res.json(list)} );



});
router.get('/date', function(req, res, next) {
    

    modelPro.listDate(function(listdate){ res.json(listdate)} );
  
  
  
  });
router.get('/special', function(req, res, next) {
    

  modelPro.listSpecial(function(listspe){ res.json(listspe)} );



});   
router.get('/avatar', function(req, res, next) {
    

  modelPro.avatar(function(lista){ res.json(lista)} );



});   
router.get('/:id', (req, res) => {
    let id = req.params.id;    
    modelPro.read(id, function(u){
      res.json(u);
    }); 
 });
 router.get('/cate/:id', (req, res) => {
  let id = req.params.id;      
  modelPro.read(id, function(u){
    res.json(u);
  });
});
// router.get('/ad/cate', (req, res) => {
//   modelPro.list_Admin(function(listsad){ res.json(listsad)} );

// });
// router.post('/ad/', upload.array(['avatar', 'product_image']), (req, res, next) => {
//   let data = req.body; 
//   let files = req.files;
//   let values = [];
    
//   for (let i = 0; i < files.length; i++) {
//     let pathFile = files[i].path;    
//     let tenFile = pathFile.split('\\').pop();
//     values.push(tenFile);
//   }
  
//   data.image = values.join(','); // thêm đường dẫn của các file ảnh vào trường urlHinh
  
//   modelPro.create(data, function(result,err) {
//     if(err) throw err
//     res.json({thongbao: 'Đã thêm thành công sản phẩm mới.'});
//   });
// });
 router.put('/:id', (req, res) => {
  let data = req.body;
      let id = req.params.id;
      modelPro.update(id, data, function(){
      })
});
router.get('/ad/:id', (req, res) => {
  let id = req.params.id;    
  modelPro.readcate(id, function(u){
    res.json(u);  
  });  
}); 
// router.post('/ad/hehe', upload.single('urlHinh'),function(req, res, next) {
//   //nhận dữ liệu từ addnew để thêm record vào db
//   let ts = req.body.name_pro;
//   // let loaiId = req.body.idLoai;
//   let g = req.body.views;
//   // let mt  = req.body.description;
//   let ah  = req.body.special;
  
//   // let urlHinh_1 = "";
//   // let urlHinh_2 = "";
//   // if(req.files.length >= 1) {
//   //     let pathFile_1 = req.files[0].path;
//   //     urlHinh_1 = pathFile_1.split('\\').pop();
//   // }
//   // if(req.files.length >= 2) { 
//       // let pathFile_2 = req.files[1].path;
//       // urlHinh_2 = pathFile_2.split('\\').pop();  
//   // }    
//   let h;
//   let uploadPath;    
//   if (!req.files) {return res.status(400).send('No files were uploaded.');}
//   h = req.files.hinh;
//   uploadPath = __dirname + './public/images/' + h.name;
//   h.mv(uploadPath, function(err) {
//      if (err)return res.status(500).send(err);
//      res.send('Đã uplload xong!');
//   });

//   let pathFile = req.file.path;    
//     console.log(pathFile.split('\\'));
//   let tenFile = pathFile.split('\\').pop();
//   let sach = {
//       name_pro:ts,
//       // description:mt,
//       views:g,
//       // idLoai:loaiId,
//       special:ah,
//       // capNhat:cp,
//       // urlHinh_1: urlHinh_1,
//       image: tenFile
//   };
//   db.query('insert into products SET ?', sach, function(err, data) {
//       if (err) throw err;
//     //   db.query('insert into product_category SET product_id=LAST_INSERT_ID(), category_id=?', sach, function(err, datas) {
//     //     if (err) throw err;
//     //     res.redirect("/sach/");
//     // }); 
//       // res.redirect("/sach/");
//   });     
// });

// router.post('/ad/hehe', upload.fields([
//   { name: 'image', maxCount: 1 },
//   { name: 'image_des', maxCount: 1 }
// ]), async (req, res, next) => {
//   try {
//     const { name_pro, time, age, director, actor, date, special, country, views, video, description } = req.body;
//     const image = req.files['image'][0].filename;
//     const image_des = req.files['image_des'][0].filename;
    
//     const sql = `INSERT INTO products (name_pro, time, age, director, actor, date, special, country, views, image, image_des, video, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
//     await connection.query(sql, [name_pro, time, age, director, actor, date, special, country, views, image, image_des, video, description]);
//     console.log(req.files['image'][0]);
//     console.log(req.files['image_des'][0]);
//     // Trả về kết quả
//     res.json({ success: true });  
//     res.send('Product added successfully');
//   } catch (error) {
//     next(error);
//   }
// });  
// function handleError(error, req, res) {
//   if (error.code === 'LIMIT_FILE_SIZE') {
//     // Trả về mã lỗi trong trường hợp kích thước file vượt quá giới hạn cho phép
//     return res.status(400).json({ message: 'File vượt quá kích thước cho phép.' });
//   } else {
//     // Xử lý các mã lỗi khác
//     return res.status(400).json({ message: 'Lỗi upload file.' });
//   }
// }
// // Endpoint để xử lý upload file hình ảnh
// router.post('/upload-image', upload.single('image'), function(req, res, next) {
//   // Nếu có lỗi khi upload file thì sẽ trả về lỗi ở đây
//   if (req.fileValidationError) {
//     return res.status(400).send({message: req.fileValidationError});
//   }

//   // Nếu không có lỗi thì tiếp tục xử lý trên đây
// });

// Khởi tạo diskStorage để lưu ảnh vào thư mục public/images
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, '/public/images'));
//   },
//   filename: function (req, file, cb) {
//     const id = req.params.id;
//     const name = file.originalname;
//     const ext = path.extname(name);
//     cb(null, id + '-' + file.originalname.replace(ext, '') + ext);
//   }
// });

// Khởi tạo middleware upload bằng multer
// const upload = multer({
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//     if (
//       !file.mimetype.includes('jpeg') &&
//       !file.mimetype.includes('jpg') &&
//       !file.mimetype.includes('png')
//     ) {
//       return cb(new Error('Only images allowed'));
//     }
//     cb(null, true);
//   }
// }).single('image');

// Endpoint để xử lý upload sản phẩm
router.post('/products', (req, res) => {
  // Đối tượng sản phẩm mới
  const newProduct = new Product(req.body.name, req.body.description, req.body.price);

  // Lưu sản phẩm mới vào database
  db.query('INSERT INTO product (name, description, price) VALUES (?, ?, ?)', [newProduct.name, newProduct.description, newProduct.price], (error, results) => {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    } else {
      // Khởi tạo đường dẫn để lưu hình ảnh
      const imagePath = `/images/${results.insertId}-${req.file.originalname}`;
      db.query('UPDATE product SET image = ? WHERE id = ?', [imagePath, results.insertId], (error, results) => {
        if (error) {
          console.log(error);
          res.sendStatus(500);
        } else {
          // Upload ảnh lên server
          upload(req, res, (error) => {
            if (error) {
              console.log(error);
              res.sendStatus(400);
            } else {
              res.sendStatus(200);
            }
          });
        }
      });
    }
  });
});
router.delete('/ad/:id', (req, res) => {
  let id = req.params.id;     
  modelPro.delete(id, function(u){
    // alert('có chắc là xoá');
    res.json({thongbao: 'Đã xoá sp '});

  });
});
const storage = multer.diskStorage({

  destination:'./public/images', 
  filename:(req,file, cb)=>{  
      return cb(null, `${file.originalname}`)
  }
  });

  // Khởi tạo middleware upload với multer
  const upload = multer({ storage: storage });
  router.post('/thu', upload.single('image'),function(req,res){
    let data = {
      name_pro: req.body.name_pro,
      video: req.body.video,
      description: req.body.description,
      special: req.body.special,
      date: req.body.date,
      time:req.body.time,
      director: req.body.director,   
      actor:req.body.actor,
      country: req.body.country,
      views: req.body.views,
      age:req.body.age,
      cate_id:req.body.cate_id,
      categories:req.body.categories,
      image: req.file.filename
  };

  let sqlAdd = "INSERT INTO products SET ?";
  // let sqlCate = "INSERT INTO product_category (product_id, category_id) VALUES ?";

  db.query(sqlAdd, data, function (err, resAdd) {   
    if (err) throw err;

    console.log(resAdd);
      res.redirect('/admin/product')
   
  });
 
    
  })
  router.post('/edit/update', upload.single('image'),function(req,res){
    // let id= req.params.id
    let id=req.body.id_pro;
    let data = {
      id_pro:req.body.id_pro,
      name_pro: req.body.name_pro,
      video: req.body.video,
      description: req.body.description,
      special: req.body.special,
      date: req.body.date,
      time:req.body.time,
      director: req.body.director,   
      actor:req.body.actor,
      country: req.body.country,
      views: req.body.views,
      age:req.body.age,
      cate_id:req.body.cate_id,
      categories:req.body.categories,
      image: req.file.filename
  };

  let sqlAdd = `UPDATE products SET ? WHERE id_pro=${id}`;
  // let sqlCate = "INSERT INTO product_category (product_id, category_id) VALUES ?";

  db.query(sqlAdd, data, function (err, resAdd) {   
    if (err) throw err;

    console.log(resAdd);
      res.redirect('/admin/product')
   
  });
 
    
  })
 module.exports = router;