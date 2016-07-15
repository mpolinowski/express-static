var express = require('express');
var motionDetectionRouter = express.Router();
var appdata = require('../views/partials/data/motionDetection.json');

/* GET Internet_Access page. */
motionDetectionRouter.get('/', function(req, res) {

    var mdPicture = []; /* Get all Pictures from gallery.json for the gallery */
    var mdPictureAlt = [];
    var mdHref = [];
    appdata.articles.forEach(function(item) {
        mdPicture = mdPicture.concat(item.mdPic);
        mdPictureAlt = mdPictureAlt.concat(item.mdPicAlt);
        mdHref = mdHref.concat(item.mdUrl);
      });

    res.render('MD_Motion_Detection', {
        title: 'Motion Detection',
        mdPic: mdPicture,
        mdPicAlt: mdPictureAlt,
        mdUrl: mdHref,
      });
  });

module.exports = motionDetectionRouter;
