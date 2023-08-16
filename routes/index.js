var express = require('express');
var router = express.Router();
var db=require('../models/database');
const multer = require('multer');
var modelPro = require('./../models/product'); 

/* GET home page. */
router.get('/', function(req, res, next) {

  const user = req.session.user;
  res.render('index',{user})
});
router.get('/add', function(req, res, next) {

  // const user = req.session.user;
  res.render('add')
});
// const storage = multer.diskStorage({

//   destination:'/public/images', 
//   filename:(req,file, cb)=>{  
//       return cb(null, `${file.originalname}`)
//   }
//   });

  // Khởi tạo middleware upload với multer
//   const upload = multer({ 
//     storage: storage 
// }).array('image', 'image2');
  // router.post('/thu', upload.single('image'),modelPro.taothu)
// router.post('/product/add')
router.get('/films', (req, res) => {
  const user = req.session.user;
  res.render("shop",{user});
});
router.get('/films/cate/:id', (req, res) => {
  let id= req.params.id;
  const user = req.session.user;

  res.render("shop_cate",{id:id,user:user});
});
router.get('/films/detail/:id', (req, res) => {
  let id= req.params.id;
  const user = req.session.user;

  res.render("details",{id:id,user:user});
});
router.get('/films/detail/:id/watching', (req, res) => {
  let id= req.params.id;
  const user = req.session.user;
  if(user){
    res.render("watching",{id:id,user:user});

  }else{
    res.redirect("/signUp");

  }
});
router.get('/signIn', (req, res) => {
  const user = req.session.user;
  if(user){
    res.redirect('/')
  }else{
    res.render("signIn");

  }
 
});
router.get('/signUp', (req, res) => {
  const user = req.session.user;
  if(user){
    res.redirect('/')
  }else{
    res.render("signUP");

  }
  
});
router.get('/login/thoat', function(req, res) {
  const user = req.session.user;
    if(user){
      req.session.destroy();
      res.redirect("/signUp");

    }else{
      res.status(404).render('error', { 
        title: 'Page not found', 
        message: 'The requested page cannot be found' 
      });

    }
  });
router.get('/404', (req, res)=>{
  res.status(404).render('error', { 
    title: 'Page not found', 
    message: 'YOU NOT ADMIN' 
  });
})
  router.get('/admin', (req, res) => {
    const user = req.session.user;
    if(user){
    const role= user.role;

      if(role===1){
        res.render('admin/index' , {user:user, role:role})
        console.log(role);

      }else{
        res.redirect('/404')
      }
    }else{
      res.redirect('/signUp')

    }
   
  });
  router.get('/admin/category', (req, res) => {
    const user = req.session.user;
    if(user){
    const role= user.role;

      if(role===1){
        res.render('admin/category_list' , {user:user, role:role})
        console.log(role);

      }else{
        res.redirect('/404')
      }
    }else{
      res.redirect('/signUp')

    }
   
  });

  router.get('/admin/category/add', (req, res) => {
    const user = req.session.user;
    if(user){
    const role= user.role;

      if(role===1){
        res.render('admin/category_add' , {user:user, role:role})
        console.log(role);

      }else{
        res.redirect('/404')
      }
    }else{
      res.redirect('/signUp')

    }
   
  });
  router.get('/admin/category/edit/:id', (req, res) => {
    const id= req.params.id
    const user = req.session.user;
    if(user){
    const role= user.role;

      if(role===1){
        res.render('admin/category_edit' , {user:user, role:role, id:id})
        console.log(role);

      }else{
        res.redirect('/404')
      }
    }else{
      res.redirect('/signUp')

    }
   
  });

  router.get('/admin/product', (req, res) => {
    const user = req.session.user;
    if(user){
    const role= user.role;

      if(role===1){
        res.render('admin/product_list' , {user:user, role:role})
        console.log(role);

      }else{
        res.redirect('/404')
      }
    }else{
      res.redirect('/signUp')

    }
   
  });
  router.get('/admin/product/add', (req, res) => {
    const user = req.session.user;
    if(user){
    const role= user.role;

      if(role===1){
        res.render('admin/product_add' , {user:user, role:role})
        console.log(role);

      }else{
        res.redirect('/404')
      }
    }else{
      res.redirect('/signUp')

    }
   
  });
  router.get('/admin/product/edit/:id', (req, res) => {
    const id= req.params.id

    const user = req.session.user;
    if(user){
    const role= user.role;

      if(role===1){
        res.render('admin/product_edit' , {user:user, role:role})
        console.log(role);

      }else{
        res.redirect('/404')
      }
    }else{
      res.redirect('/signUp')

    }
   
  });
  // Khai báo middleware kiểm tra role
// const checkRole = (req, res, next) => {
//   const role = req.session.user.role;
//   if (role === 1) {
//     next(); // Cho phép đi tiếp
//   } else {
//     res.status(403).send('Bạn không có quyền truy cập vào trang admin'); // Trả về thông báo lỗi
//   }
// };

// // Sử dụng middleware kiểm tra role trước khi truy cập vào trang admin
// router.get('/admin', checkRole, (req, res) => {
//   const user = req.session.user;
//   res.render('admin/index', {user});
// });
module.exports = router;
