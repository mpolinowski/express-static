var express = require('express');
var internetAccessRouter = express.Router();
var appdata = require('../views/partials/data/internetAccess.json');

/* GET Internet_Access page. */
internetAccessRouter.get('/', function(req, res) {

    var iaPicture = []; /* Get all Pictures from gallery.json for the gallery */
    var iaPictureAlt = [];
    var iaHref = [];
    appdata.articles.forEach(function(item) {
        iaPicture = iaPicture.concat(item.iaPic);
        iaPictureAlt = iaPictureAlt.concat(item.iaPicAlt);
        iaHref = iaHref.concat(item.iaUrl);
      });

    res.render('Internet_Access', {
        title: 'Internet Access',
        iaPic: iaPicture,
        iaPicAlt: iaPictureAlt,
        iaUrl: iaHref,
      });
  });

module.exports = internetAccessRouter;
