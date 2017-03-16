var express = require('express');
var indexRouter = express.Router();

/* GET home page. */
indexRouter.route('/')
    .get(function(req, res) {
        res.render('Index', {
            title: 'INSTAR Wiki',
            ampimg: '/images/Search/AU_SearchThumb_WebsiteIntegration.jpg',
            headline: 'INSTAR IP Camera and Network Technology Knowledgebase',
          });
      });

module.exports = indexRouter;
