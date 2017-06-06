var express = require('express');
var indexRouter = express.Router();

/* GET home page. */
indexRouter.route('/')
    .get(function(req, res) {
        res.render('Index', {
            title: 'INSTAR Wiki',
            ampimg: '/images/Search/QI_SearchThumb_SetupWizard.jpg',
            headline: 'INSTAR IP Camera and Network Technology Knowledgebase',
            canonical: '/',
          });
      });

module.exports = indexRouter;
