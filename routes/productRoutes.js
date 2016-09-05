var express = require('express');
var productRouter = express.Router();
var appdata = require('../views/_partials/data/cameras.json');

/* GET /Products */
productRouter.route('/')
  .get(function(req, res) {
      res.render('./Products/Products', {
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

    res.render('./Products/Indoor_Cameras', {
        title: 'INSTAR Indoor IP Cameras',
        indoorPic: indoorPicture,
        indoorPicAlt: indoorPictureAlt,
        indoorUrl: indoorHref,
      });
  });

productRouter.route('/Indoor_Cameras/IN-6014_HD')
.get(function(req, res) {
  res.render('./Products/IN-6014_Overview', {
      title: 'IN-6014 HD Overview',
    });
});

productRouter.route('/Indoor_Cameras/IN-6014_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-6014_Tech_Specs', {
      title: 'IN-6014 HD Technical Specifications',
    });
});

productRouter.route('/Indoor_Cameras/IN-6014_HD/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-6014_Downloads', {
      title: 'IN-6014 HD Downloads',
    });
});

productRouter.route('/Indoor_Cameras/IN-6012_HD')
.get(function(req, res) {
  res.render('./Products/IN-6012_Overview', {
      title: 'IN-6012 HD Overview',
    });
});

productRouter.route('/Indoor_Cameras/IN-6012_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-6012_Tech_Specs', {
      title: 'IN-6012 HD Technical Specifications',
    });
});

productRouter.route('/Indoor_Cameras/IN-6012_HD/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-6012_Downloads', {
      title: 'IN-6012 HD Downloads',
    });
});

productRouter.route('/Indoor_Cameras/IN-6001_HD')
.get(function(req, res) {
  res.render('./Products/IN-6001_Overview', {
      title: 'IN-6001 HD Overview',
    });
});

productRouter.route('/Indoor_Cameras/IN-6001_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-6001_Tech_Specs', {
      title: 'IN-6001 HD Technical Specifications',
    });
});

productRouter.route('/Indoor_Cameras/IN-6001_HD/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-6001_Downloads', {
      title: 'IN-6001 HD Downloads',
    });
});

productRouter.route('/Indoor_Cameras/IN-3011')
.get(function(req, res) {
  res.render('./Products/IN-3011_Overview', {
      title: 'IN-3011 Overview',
    });
});

productRouter.route('/Indoor_Cameras/IN-3011/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-3011_Tech_Specs', {
      title: 'IN-3011 Technical Specifications',
    });
});

productRouter.route('/Indoor_Cameras/IN-3011/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-3011_Downloads', {
      title: 'IN-3011 Downloads',
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

  res.render('./Products/Outdoor_Cameras', {
      title: 'INSTAR Outdoor IP Cameras',
      outdoorPic: outdoorPicture,
      outdoorPicAlt: outdoorPictureAlt,
      outdoorUrl: outdoorHref,
    });
});

productRouter.route('/Outdoor_Cameras/IN-7011_HD')
.get(function(req, res) {
  res.render('./Products/IN-7011_Overview', {
      title: 'IN-7011 HD Overview',
    });
});

productRouter.route('/Outdoor_Cameras/IN-7011_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-7011_Tech_Specs', {
      title: 'IN-7011 HD Technical Specifications',
    });
});

productRouter.route('/Outdoor_Cameras/IN-7011_HD/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-7011_Downloads', {
      title: 'IN-7011 HD Downloads',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5907_HD')
.get(function(req, res) {
  res.render('./Products/IN-5907_Overview', {
      title: 'IN-5907 HD Overview',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5907_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-5907_Tech_Specs', {
      title: 'IN-5907 HD Technical Specifications',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5907_HD/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-5907_Downloads', {
      title: 'IN-5907 HD Downloads',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5905_HD')
.get(function(req, res) {
  res.render('./Products/IN-5905_Overview', {
      title: 'IN-5905 HD Overview',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5905_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-5905_Tech_Specs', {
      title: 'IN-5905 HD Technical Specifications',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5905_HD/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-5905_Downloads', {
      title: 'IN-5905 HD Downloads',
    });
});

productRouter.route('/Outdoor_Cameras/IN-4011')
.get(function(req, res) {
  res.render('./Products/IN-4011_Overview', {
      title: 'IN-4011 Overview',
    });
});

productRouter.route('/Outdoor_Cameras/IN-4011/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-4011_Tech_Specs', {
      title: 'IN-4011 Technical Specifications',
    });
});

productRouter.route('/Outdoor_Cameras/IN-4011/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-4011_Downloads', {
      title: 'IN-4011 Downloads',
    });
});

productRouter.route('/Outdoor_Cameras/IN-4010_V2')
.get(function(req, res) {
  res.render('./Products/IN-4010_V2_Overview', {
      title: 'IN-4010 V2 Overview',
    });
});

productRouter.route('/Outdoor_Cameras/IN-4010_V2/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-4010_V2_Tech_Specs', {
      title: 'IN-4010 V2 Technical Specifications',
    });
});

productRouter.route('/Outdoor_Cameras/IN-4010_V2/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-4010_V2_Downloads', {
      title: 'IN-4010 V2 Downloads',
    });
});

productRouter.route('/Outdoor_Cameras/IN-2908')
.get(function(req, res) {
  res.render('./Products/IN-2908_Overview', {
      title: 'IN-2908 Overview',
    });
});

productRouter.route('/Outdoor_Cameras/IN-2908/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-2908_Tech_Specs', {
      title: 'IN-2908 Technical Specifications',
    });
});

productRouter.route('/Outdoor_Cameras/IN-2908/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-2908_Downloads', {
      title: 'IN-2908 Downloads',
    });
});

productRouter.route('/Outdoor_Cameras/IN-2905_V2')
.get(function(req, res) {
  res.render('./Products/IN-2905_V2_Overview', {
      title: 'IN-2905 V2 Overview',
    });
});

productRouter.route('/Outdoor_Cameras/IN-2905_V2/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-2905_V2_Tech_Specs', {
      title: 'IN-2905 V2 Technical Specifications',
    });
});

productRouter.route('/Outdoor_Cameras/IN-2905_V2/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-2905_V2_Downloads', {
      title: 'IN-2905 V2 Downloads',
    });
});

productRouter.route('/SMA_RP-SMA_Antenna_Connector')
.get(function(req, res) {
  res.render('./Products/SMA_RP-SMA_Antenna_Connector', {
      title: 'SMA or RP-SMA Antenna Connector',
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

  res.render('./Products/Software', {
      title: 'INSTAR Software',
      Pic: softwarePicture,
      PicAlt: softwarePictureAlt,
      url: softwareHref,
    });
});

/* GET Camera Lenses */
productRouter.route('/Lenses')
.get(function(req, res) {
  res.render('./Products/Lenses', {
      title: 'Camera Lenses',
    });
});

/* GET InstarVision for Windows /Windows */
productRouter.route('/Software/Windows')
.get(function(req, res) {
  res.render('./Products/Windows', {
      title: 'Software for Windows',
    });
});

/* GET InstarVision for macOS /macOS */
productRouter.route('/Software/macOS')
.get(function(req, res) {
  res.render('./Products/MacOS', {
      title: 'Software for macOS',
    });
});

/* GET InstarVision for Android /Android */
productRouter.route('/Software/Android')
.get(function(req, res) {
  res.render('./Products/Android', {
      title: 'Software for Android',
    });
});

/* GET InstarVision for iOS /iOS */
productRouter.route('/Software/iOS')
.get(function(req, res) {
  res.render('./Products/iOS', {
      title: 'Software for iOS',
    });
});

/* GET InstarVision for Windows Phone /Other_Platforms */
productRouter.route('/Software/Other_Platforms')
.get(function(req, res) {
  res.render('./Products/Other_Platforms', {
      title: 'Other Platforms',
    });
});

module.exports = productRouter;
