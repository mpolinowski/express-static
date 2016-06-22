var express = require('express');
var productRouter = express.Router();
var appdata = require('../views/partials/data/cameras.json');

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

module.exports = productRouter;
