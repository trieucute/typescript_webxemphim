var express = require('express');
const bcrypt = require('bcrypt');

var router = express.Router();
const nodemailer = require('nodemailer');

// create transporter
const transport = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 465,
  secure: true,
  auth: {
    user: 'trieutbps24977@fpt.edu.vn',
    pass: 'your-password'
  }
});
var db = require('./../models/database');
var modelUsers = require('./../models/users'); 

router.get('/',  (req, res) => { 
    modelUsers.list( function(listusers) { res.json(listusers)} ); 
});
router.post('/', (req, res) => {
    let data = req.body; 
  let password = req.body.password;
	  modelUsers.create(data,password, function(){  
        res.json({thongbao:"Đã thêm xong một user mới"});
    });
 });
 router.get('/dangnhap', function(req, res) {
  var sess = req.session;  //initialize session variable
  sess.daDangNhap = false;
  let tb= '';  

res.render("dangnhap",{dn:req.session.daDangNhap ,tb:tb});
});
router.post('/dangnhap_', async function(req, res) { 
  let u = req.body.username;  
  let p = req.body.password;
  let sql = 'SELECT * FROM users WHERE username = ?';
  db.query(sql, [u] , (err, rows) => {   
      if (rows.length<=0) {    
          var sess = req.session;  //initialize session variable
  sess.daDangNhap = false;
          // alert('Không tồn tại username, mời bạn nhập lại');
          let tb= 'Không tồn tại username, mời bạn nhập lại';  
          console.log(tb);
          // res.locals.tb = tb;
          // if(err) throw err
          // res.send(tb);
          // res.redirect('/thanhvien/dangnhap')
          res.render("dangnhap", {dn:req.session.daDangNhap ,tb}); 
          return;
      }
      let user = rows[0];        
      let pass_fromdb = user.password;        
      const bcrypt = require("bcrypt");        
      var kq = bcrypt.compareSync(p, pass_fromdb);
      if (kq){ 
          console.log("OK");                    
          var sess = req.session;  //initialize session variable
          sess.daDangNhap = true;
          sess.username = user.username;   
          sess.password= user.password;
          // var pass= sess.password;
          // sess.passwordmahoa = bcrypt.compareSync(p, pass);
          // res.redirect("/thanhvien/thanhcong");
          if (sess.back){ 
              console.log(sess.back);
              res.redirect(sess.back);
          }
          else {
              res.redirect("/thanhvien/download");
          }
      }   
      else {
          console.log("Not OK");
          let tb= 'Sai mật khẩu';  
          console.log(tb);
          res.render("dangnhap", {dn:req.session.daDangNhap ,tb}); 

      }
  });   
});
// router.post('/:username/:password', (req, res) => {  
//   let u = req.params.username;    
//   let p = req.params.password;    
//   modelUsers.login(u,p, function(d){
//     var sess = req.session;  //initialize session variable
//     sess.daDangNhap = true;
//     // sess.username = d.username;   
//     // sess.password= d.password;
//     console.log( sess.daDangNhap );
//     res.json(d);
//   });
// });
// router.get('/:user', (req, res) => {  
//   let user = req.params.user;    
//   modelUsers.readusername(user, function(u){
//     res.json(u);
//   });
// });
router.post('/:user', (req, res) => {  
  const username = req.params.user;
  const password = req.body.password;
  modelUsers.readUser(username, function(error, user) {
    if (error) throw error;
    if (!user) {
      res.status(401).json({ message: 'Tên đăng nhập hoặc mật khẩu không đúng' });
    } else {
      bcrypt.compare(password, user.password, function(error, result) {
        if (error) throw error;
        if (result) {
          // Trả về thông tin người dùng nếu đăng nhập thành công
          req.session.user = { username: user.username, fullname: user.fullname, password:password, password_mahoa:user.password, role: user.role };
          // let pass_fromdb = req.session.user.password;        
          
          // var kq = bcrypt.compareSync(p, pass_fromdb);
          console.log(req.session.user);
          res.json(req.session.user);

        } else {
          res.status(401).json({ message: 'Tên đăng nhập hoặc mật khẩu không đúng' });
        }
      });
    }
  });
});
 router.get('/:id', (req, res) => {  
    let id = req.params.id;    
    modelUsers.read(id, function(u){
      res.json(u);
    });
 });
 router.put('/:id', (req, res)=> {
      let data = req.body;
      let id = req.params.id;
      modelUsers.update(id, data, function(){
        res.json({thongbao: 'Đã cập nhật user '});
        
      })
 });
 router.patch('/:user', (req, res)=> {
  let pass = req.body.password;
  let user = req.params.user;
  modelUsers.updatePass(user, pass, function(){     
    req.session.destroy();

    res.json({thongbao: 'Đã cập nhật '});
    
  })
});
 router.delete('/:id', (req, res) => {
  let id = req.params.id;    
  modelUsers.delete(id, function(u){
    // alert('có chắc là xoá');
    res.json({thongbao: 'Đã xoá user '});

  });
});

router.post ('/forgot/:user', (req, res) => {  
  let user = req.params.user; 
  let email = req.body.email;    

  modelUsers.readfogot([user, email], function(u){

    res.json(u);

  });
});

router.get('/thoat', function(req, res) {
  req.session.destroy();
  res.redirect("/login/signup");
});
 module.exports = router; 