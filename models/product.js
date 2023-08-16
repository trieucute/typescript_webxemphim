

var db=require('./database'); 
exports.list = function( callback) { 
    let sql = `select * from products`;
    db.query(sql, function(err, d) {
    if (err) throw err;
        
        callback(d); }  );
}
exports.listTop5 = function( callback) { 
    let sql = `SELECT * FROM products ORDER BY views DESC LIMIT 5 `;
    db.query(sql, function(err, d) {
    if (err) throw err;
        
        callback(d); }  );
}
exports.listDate = function( callback) { 
    let sql = `SELECT * FROM  products ORDER BY date DESC LIMIT 6 `;
    db.query(sql, function(err, d) {
    if (err) throw err;
        
        callback(d); }  );
}
exports.listSpecial = function( callback) { 
    let sql = `SELECT * FROM products WHERE special=1`;
    db.query(sql, function(err, d) {
    if (err) throw err;
        
        callback(d); }  );
}
exports.avatar = function( callback) { 
    let sql = `SELECT * FROM  products WHERE id_pro =5`;
    db.query(sql, function(err, d) {
    if (err) throw err;
        
        callback(d); }  );
}
exports.create = function(data, callback ) { //hàm chèn user mới vào table 
    let sql = 'INSERT INTO products SET ?';
   
    db.query(sql, data, function(err, d) { 
        db.query(sql, data, function(err, dcate) { 
            if (err) throw err;
            callback(d) }  );    
        })

} 
exports.createcate = function(data, callback ) { //hàm chèn user mới vào table 
    // let values = req.body.categories.map((categoryId) => {
    //     return `(${lastInsertId}, ${categoryId})`;
    //   }).join(',');
      
      let sqlCate = `INSERT INTO product_category (product_id, category_id) VALUES ${data}`;
      
      db.query(sqlCate, (err, result) => {
        if (err) throw err;
      
        callback(result);
      });

} 
//tăng views
exports.update = function(id, data,callback) { 
    let sql = 'UPDATE products SET ? WHERE id_pro=?';
    db.query(sql, [data,id], (err, d) => {
        if (err) throw err;
        callback();
    });    
} 
exports.read= function(id, callback) {
    let sql = 'SELECT * FROM products  join category on category.id_cate= products.cate_id where id_pro=? ORDER by id_pro'    
    db.query(sql, id, (err, d) => {
        data = d[0]; 
        callback(data);
    });
} 
// exports.readcate= function(id, callback) {
//     // join product_category on category.id_cate= product_category.category_id
//     let sql = `SELECT *,GROUP_CONCAT(category.id_cate SEPARATOR ', ') AS id_cate, GROUP_CONCAT(category.name_cate SEPARATOR ', ') AS categories FROM products JOIN product_category ON products.id_pro = product_category.product_id JOIN category ON category.id_cate = product_category.category_id WHERE products.id_pro = ${id} GROUP BY products.id_pro `;   
//     db.query(sql, id, (err, d) => { 
//         data = d; 
//         callback(data);
//     });
// } 
// exports.list_Admin= function( callback) { 
//     let sql = `SELECT *, GROUP_CONCAT(category.name_cate SEPARATOR ', ') AS categories FROM products JOIN product_category ON products.id_pro = product_category.product_id JOIN category ON category.id_cate = product_category.category_id  GROUP BY products.id_pro`;
//     db.query(sql, function(err, d) {
//     if (err) throw err;
//         callback(d); }  );
// }
exports.taothu= async function (req, res,next){
    try{
        var data={
            id:id,
            name:req.body.name,
            price:req.body.price,
            description:req.body.description,
            image:req.file.filename
        }       
        console.log(data)    
        let result= await db.query('insert into product set ?', [data], function(err,rows){
            if(err) {
                res.send({message:"lỗi",err})
                
            }else{
                res.send({
                    message:"thanhcong"+id,
                })
            }
        });
    }catch(err){
        res.send({message:"lỗi",err})
    }
}
exports.delete = function(id,  callback) { 
    let sql = 'DELETE FROM products WHERE id_pro = ?';
    db.query(sql, id, (err, d) => {
        if (err) throw err;
        callback();
    });    
} 