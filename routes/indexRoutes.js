var express = require('express');
var indexRouter = express.Router();
var appdata = require('../views/partials/data/gallery.json');

/* GET home page. */
indexRouter.get('/', function(req, res) {

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

module.exports = indexRouter;
