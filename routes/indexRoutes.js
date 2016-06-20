var express = require('express');
var indexRouter = express.Router();

/* GET home page. */
indexRouter.route('/')
    .get(function(req, res) {
        res.render('index', {
            title: 'INSTAR Wiki',
          });
      });

module.exports = indexRouter;
