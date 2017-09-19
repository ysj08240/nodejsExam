var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// GET ALL BOOKS
router.get('/api/books', function(req,res){
    res.end();
});

// GET SINGLE BOOK
router.get('/api/books/:book_id', function(req, res){
    res.end();
});

// GET BOOK BY AUTHOR
router.get('/api/books/author/:author', function(req, res){
    res.end();
});

// CREATE BOOK
router.post('/api/books', function(req, res){
    res.end();
});

// UPDATE THE BOOK
router.put('/api/books/:book_id', function(req, res){
    res.end();
});

// DELETE BOOK
router.delete('/api/books/:book_id', function(req, res){
    res.end();
});

module.exports = router;
