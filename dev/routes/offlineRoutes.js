var express = require('express');
var indexRouter = express.Router();

/* GET home page. */
indexRouter.route('/')
    .get(function(req, res) {
        res.render('Ofline', {
            title: 'INSTAR Wiki - Offline Page',
            ampimg: '/images/Search/QI_SearchThumb_SetupWizard.jpg',
            headline: 'INSTAR IP Camera and Network Technology Knowledgebase',
            canonical: '/You_Are_Offline/',
          });
      });

module.exports = indexRouter;
