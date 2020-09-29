const express = require("express")
const router = express.Router()


router.get('/wiki', function(req, res, next) {
  res.send('funcionó GET /wiki/');
});
router.post('/wiki', function(req, res, next) {
  res.send('funcionó POST /wiki/');
});
router.get('/wiki/add', function(req, res) {
  res.render('addpage');
});

module.exports = router
