var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer = require('multer');
// var fileUpload = require('express-fileupload');
var session = require('express-session');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var watchRouter = require('./routes/watch');
var proRouter = require('./routes/product');
// var imgRouter = require('./routes/img');

var cateRouter = require('./routes/cate');

// var adminCateRouter = require('./routes/admin_cate');
// var adminProRouter = require('./routes/admin_pro');

var app = express();  
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname)
//   }
// });

// const upload = multer({ storage: storage });

// app.use(fileUpload());
app.use(session({
  secret: 'abcdefg',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 day
}));
// view engine setup 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', proRouter);
app.use('/category', cateRouter);
// app.use('/img', imgRouter);

app.use('/detail', watchRouter);
// app.use('/admin', adminCateRouter);
// app.use('/admin', adminProRouter);



// app.post('/upload', upload.single('file'), (req, res) => {  
//   // Neu upload thanh cong, tra ve ket qua la file da upload
//   res.json({ file: req.file });
//   res.send(req.file);
// });
// catch 404 and forward to error handler
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
// })
// app.post('/upload', upload.single('image'), (req, res) => {
//   if (!req.file) {
//     res.status(400).send('No file uploaded');
//   } else {
//     res.json({ file: req.file });
    // Lưu thông tin file vào CSDL
    // db.Products.create({
    //   name: req.body.name,
    //   description: req.body.description,
    //   price: req.body.price,
    //   image: req.file.filename,
    // }).then(product => {
    //   res.json({ message: 'Product created successfully', product });
    // }).catch(err => {
    //   res.status(500).send(err.message || 'Some errors occurred while creating the product.');
    // });
//   }
// });
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
  
module.exports = app;
