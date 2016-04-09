var express = require('express');
var router = express.Router();
var multer = require('multer');
var mongoose = require('mongoose');
var Entry = mongoose.model('Entry');
router.get('/', function(req, res){
  Entry.find( function(err, entries) {
    res.send(entries);
  })
});
router.post('/', multer({ dest: './public/uploads/'}).single('upl'), function(req,res){
  console.log(req.body); //form fields
  /* example output:
  { title: 'abc' }
   */
  console.log(req.file); //form files
  /* example output:
            { fieldname: 'upl',
              originalname: 'grumpy.png',
              encoding: '7bit',
              mimetype: 'image/png',
              destination: './uploads/',
              filename: '436ec561793aa4dc475a88e84776b1b9',
              path: 'uploads/436ec561793aa4dc475a88e84776b1b9',
              size: 277056 }
   */

   
   new Entry({
   title: req.body.title,
   text: req.body.text,
   filename: req.file.filename
    }).save( function(err, entry, count) {
     res.redirect("/");
    });


});

module.exports = router;

