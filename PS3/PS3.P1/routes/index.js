const express = require('express');
const router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//no 1
router.get('/', function (req, res, next) {
  res.render('index',
      { name: 'Athina',
      });
})

router.post('/', (req, res, next)=> {

    res.render('index2',
        { name: req.body.name,
             len: req.body.name.length
        });
})

module.exports = router;
