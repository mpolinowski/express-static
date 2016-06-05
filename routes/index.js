var express = require('express');
var router = express.Router();
var appdata = require('../views/partials/data/gallery.json');

/* GET home page. */
router.get('/', function(req, res, next) {

    var qiPicture = []; /* Get all Pictures from gallery.json for the gallery */
    var qiPictureAlt = [];
    var qiHref = [];
    var iaPicture = [];
    var iaPictureAlt = [];
    var iaHref = [];
    var mdPicture = [];
    var mdPictureAlt = [];
    var mdHref = [];
    appdata.articles.forEach(function(item) {
        qiPicture = qiPicture.concat(item.qiPic);
        qiPictureAlt = qiPictureAlt.concat(item.qiPicAlt);
        qiHref = qiHref.concat(item.qiUrl);
        iaPicture = iaPicture.concat(item.iaPic);
        iaPictureAlt = iaPictureAlt.concat(item.iaPicAlt);
        iaHref = iaHref.concat(item.iaUrl);
        mdPicture = mdPicture.concat(item.mdPic);
        mdPictureAlt = mdPictureAlt.concat(item.mdPicAlt);
        mdHref = mdHref.concat(item.mdUrl);
      });

    res.render('index', {
        title: 'INSTAR Wiki',
        qiPic: qiPicture,
        qiPicAlt: qiPictureAlt,
        qiUrl: qiHref,
        iaPic: iaPicture,
        iaPicAlt: iaPictureAlt,
        iaUrl: iaHref,
        mdPic: mdPicture,
        mdPicAlt: mdPictureAlt,
        mdUrl: mdHref,
      });
  });

/* GET How Does An IP Camera Work? */
router.get('/How_Does_An_IP_Camera_Work', function(req, res, next) {
    res.render('How_Does_An_IP_Camera_Work', {
        title: 'How Does An IP Camera Work?',
      });
  });

/* After Unpacking your INSTAR IP Camera */
router.get('/After_Unpacking_Your_INSTAR_IP_Camera', function(req, res, next) {
    res.render('After_Unpacking_Your_INSTAR_IP_Camera', {
        title: 'After Unpacking your INSTAR IP Camera',
      });
  });

/* GET First Steps */
router.get('/First_Steps', function(req, res, next) {
    res.render('First_Steps', {
        title: 'First Steps to get your IP Up and Running',
      });
  });

module.exports = router;
