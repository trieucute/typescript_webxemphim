var db=require('./database'); 
const bcrypt = require('bcrypt');
exports.list = function( callback) { 
    let sql = `SELECT *  FROM users`;
    db.query(sql, function(err, d) { callback(d); }  );
}
exports.create = function(data, password, callback) {
    if (typeof password === "string" && password.length > 0) {
      // Tạo salt ngẫu nhiên
      const salt = bcrypt.genSaltSync(10);
      // Hash password với salt
      const hashedPassword = bcrypt.hashSync(password, salt);
      // Thêm hashedPassword vào đối tượng data
      data.password = hashedPassword;
    }
    let sql = 'INSERT INTO users SET ? '; 
    db.query(sql, data, function(err, d) {   
      if (err) throw err;
      callback(d);
    });    
  }
  
//   exports.login = function(username, password, callback) {
//     let sql = 'SELECT * FROM users WHERE username = ?';
//     db.query(sql, username, function(err, result) {
//       if (err) throw err;
//       if (result.length > 0) {
//         const user = result[0];
//         bcrypt.compare(password, user.password, function(err, res) {
//           if (err) throw err;
//           if (res) {
//             // Nếu password đúng, trả về đối tượng user
//             console.log(user.username);
//             callback(user);
//           } else {
//             // Nếu password sai, trả về giá trị null
//             callback(null);
//           }
//         });
//       } else {
//         // Nếu username không tồn tại, trả về giá trị null
//         callback(null);
//       }
//     });
//   }
exports.readUser = function(username, callback) {
    const sql = 'SELECT * FROM users WHERE username = ?';
    db.query(sql, [username], (error, results) => {
      if (error) return callback(error);
      const user = results[0];
      callback(null, user);
    });
  }
  
exports.update = function(id, data, callback) { 
    let sql = 'UPDATE users  SET ? WHERE id_user = ?';
    db.query(sql, [data, id], (err, d) => {
        if (err) throw err;
        callback();
    });    
} 
exports.read= function(id, callback) {
    let sql = 'SELECT * FROM users WHERE id_user = ?'    
    db.query(sql, id, (err, d) => {
        data = d[0]; 
        callback(data);
    });
} 
exports.readfogot= function([user,email], callback) {
    let sql = 'SELECT * FROM users WHERE username = ? AND email=?'    
    db.query(sql, [user, email], (err, d) => {
        data = d[0]; 
        callback(data);
    });
} 
exports.updatePass = function(user, newPassword, callback) {
    let saltRounds = 10;
    let hashedNewPassword = bcrypt.hashSync(newPassword, saltRounds);
    let sql = 'UPDATE users SET password = ? WHERE username = ? ';
    db.query(sql, [hashedNewPassword, user], (err, d) => {
      if (err) throw err;
      callback();
    });
  }
// router.post('/update', function(req, res) {
//     let p = req.body.password;
//     let p2 = req.body.password2;
//     let p3= req.body.password3;
    
    
//     const bcrypt = require("bcrypt");        
//     var salt = bcrypt.genSaltSync(10);
//     // var pass1_mahoa = bcrypt.hashSync(p, salt);
   
//     var pass2_mahoa = bcrypt.hashSync(p2, salt);
//     let old_password= req.session.password
//     if(bcrypt.compareSync(p, old_password)){
//         if(p2==p3){
//             let sql ='UPDATE users  SET password= ? WHERE username = ? '
//         db.query(sql, [pass2_mahoa,req.session.username] , (err, pass) => {   
//             if(err) throw err;  
//             req.session.password = pass2_mahoa;
//             console.log(pass2_mahoa);  
//         // alert("message")
//         alert('Đã đổi mật khẩu thành công');
//             res.redirect("/thanhvien/download");
            
//         })
//         }else{
//             alert('Sai xác nhận mật khẩu');
//             res.redirect("/thanhvien/doipass");

//         }
        
//     }else{
//         alert('Sai mật khẩu cũ mời nhập lại');

//         console.log('Old password is incorrect.');
//         // alert('Đổi mật khẩu thành công')
//         res.redirect("/thanhvien/doipass");

//     }
  
// });



exports.delete = function(id,  callback) { 
    let sql = 'DELETE FROM users WHERE id_user = ?';   
    db.query(sql, id, (err, d) => {
        if (err) throw err;
        callback(); 
    });      
} 