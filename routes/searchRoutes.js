var express = require('express');
var searchRouter = express.Router();

/* GET Search page. */
searchRouter.route('/')
    .get(function(req, res) {
        res.render('Search', {
            title: 'INSTAR Wiki Search',
          });
      });

module.exports = searchRouter;
