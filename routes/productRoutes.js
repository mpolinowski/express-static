var express = require('express');
var productRouter = express.Router();
var appdata = require('../views/partials/data/cameras.json');
var appdata = require('../views/partials/data/software.json');

/* GET /Products */
productRouter.route('/')
  .get(function(req, res) {
      res.render('Products', {
          title: 'INSTAR Products',
        });
    });

/* GET /Indoor_Cameras */
productRouter.get('/Indoor_Cameras', function(req, res) {

    /* Get all Pictures from cameras.json for the gallery */

    var indoorPicture = [];
    var indoorPictureAlt = [];
    var indoorHref = [];
    appdata.articles.forEach(function(item) {
        indoorPicture = indoorPicture.concat(item.indoorPic);
        indoorPictureAlt = indoorPictureAlt.concat(item.indoorPicAlt);
        indoorHref = indoorHref.concat(item.indoorUrl);
      });

    res.render('Indoor_Cameras', {
        title: 'INSTAR Indoor IP Cameras',
        indoorPic: indoorPicture,
        indoorPicAlt: indoorPictureAlt,
        indoorUrl: indoorHref,
      });
  });

/* GET /Outdoor_Cameras */
productRouter.get('/Outdoor_Cameras', function(req, res) {

  /* Get all Pictures from cameras.json for the gallery */

  var outdoorPicture = [];
  var outdoorPictureAlt = [];
  var outdoorHref = [];
  appdata.articles.forEach(function(item) {
      outdoorPicture = outdoorPicture.concat(item.outdoorPic);
      outdoorPictureAlt = outdoorPictureAlt.concat(item.outdoorPicAlt);
      outdoorHref = outdoorHref.concat(item.outdoorUrl);
    });

  res.render('Outdoor_Cameras', {
      title: 'INSTAR Outdoor IP Cameras',
      outdoorPic: outdoorPicture,
      outdoorPicAlt: outdoorPictureAlt,
      outdoorUrl: outdoorHref,
    });
});

/* GET /Software */
productRouter.get('/Software', function(req, res) {

  /* Get all Pictures from software.json for the gallery */

  var softwarePicture = [];
  var softwarePictureAlt = [];
  var softwareHref = [];
  appdata.articles.forEach(function(item) {
      softwarePicture = softwarePicture.concat(item.Pic);
      softwarePictureAlt = softwarePictureAlt.concat(item.PicAlt);
      softwareHref = softwareHref.concat(item.url);
    });

  res.render('Software', {
      title: 'INSTAR Software',
      Pic: softwarePicture,
      PicAlt: softwarePictureAlt,
      url: softwareHref,
    });
});

/* GET InstarVision for Windows /Windows */
productRouter.route('/Software/Windows')
.get(function(req, res) {
  res.render('Windows', {
      title: 'Software for Windows',
    });
});

/* GET InstarVision for macOS /macOS */
productRouter.route('/Software/macOS')
.get(function(req, res) {
  res.render('MacOS', {
      title: 'Software for macOS',
    });
});

/* GET InstarVision for Android /Android */
productRouter.route('/Software/Android')
.get(function(req, res) {
  res.render('Android', {
      title: 'Software for Android',
    });
});

/* GET InstarVision for iOS /iOS */
productRouter.route('/Software/iOS')
.get(function(req, res) {
  res.render('iOS', {
      title: 'Software for iOS',
    });
});

/* GET InstarVision for Windows Phone /Windows_Phone */
productRouter.route('/Software/Windows_Phone')
.get(function(req, res) {
  res.render('WindowsPhone', {
      title: 'Software for Windows Phone',
    });
});

module.exports = productRouter;
