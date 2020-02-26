var express = require('express');
var router = express.Router();

// router.all('/', (req,res,next) {
// //  do stg for all routes
// //  then go to the enxt route in this file
//   next()
//
// })

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.route('/')
    .get((req,res,next) => {
        res.render('index',
            { name: 'Athina',
            });
    })

    .post((req,res,next) => {
        const foo = JSON.parse(req.body.name)
        const bar = JSON.stringify(req.body.name)
        res.send(
            { name: req.body.name,
                breed: req.body.breed
            });
    })

module.exports = router;
