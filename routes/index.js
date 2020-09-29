const express = require("express")
const router = express.Router()
const wikiRouter = require('./wiki');
const userRouter = require('./user');

router.use('/wiki',wikiRouter)

router.get('/', (req, res) => {
       res.send('An alligator approaches!');
      });



module.exports = router
