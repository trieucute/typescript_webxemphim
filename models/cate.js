var db=require('./database'); 
exports.list = function( callback) { 
    let sql = `select * from category`;
    db.query(sql, function(err, d) {
    if (err) throw err;
        
        callback(d); }  );
}
// exports.listPro = function( callback) { 
//     let sql = `select * from products where special ='1' limit 5`;
//     db.query(sql, function(err, d) {
//     if (err) throw err;
        
//         callback(d); }  );
// }
// exports.create = function(data, callback ) { 
//     let sql = 'INSERT INTO category SET ?';
    
//     db.query(sql, data, function(err, d) { 
//     if (err) throw err;
//     callback(d) }  );    
// } 
exports.create = function(data, callback ) { //hàm chèn user mới vào table 
    let sql = 'INSERT INTO category SET ?';
    
    db.query(sql, data, function(err, d) { 
    if (err) throw err;
    callback(d) }  );    
} 
exports.update = function(id, data, callback) { 
    let sql = 'UPDATE category  SET ? WHERE id_cate = ?';
    db.query(sql, [data, id], (err, d) => {
        if (err) throw err;
        callback();
    });    
} 
exports.read= function(id, callback) {
    // join product_category on category.id_cate= product_category.category_id
    let sql = `SELECT * FROM category  WHERE id_cate=? `;   
    db.query(sql, id, (err, d) => {
        data = d; 
        callback(data);
    });
} 

exports.readCate= function(id, callback) {
    let sql = `select * from products join category on category.id_cate= products.cate_id  where cate_id =${id} `;   
    db.query(sql, id, (err, d) => {
        data = d; 
        callback(data);
    });
}  
exports.delete = function(id,  callback) { 
    let sql = 'DELETE FROM category WHERE id_cate = ?';
    db.query(sql, id, (err, d) => {
        if (err) throw err;
        callback();
    });    
} 