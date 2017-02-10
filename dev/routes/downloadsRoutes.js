var express = require('express');
var downloadsRouter = express.Router();

downloadsRouter.get('/', function(req, res) {
    res.render('./Downloads/Downloads', {
        title: 'Download Area',
        ampimg: '/images/P_SearchThumb_Products.jpg',
        uplink: '/Products/',
        headline: 'Download Area',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li>',
      });
  });

downloadsRouter.get('/Indoor_Cameras/', function(req, res) {
    res.render('./Downloads/Indoor_Cameras', {
        title: 'Downloads for Indoor Cameras',
        ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
        uplink: '/Downloads/',
        headline: 'Downloads for Indoor Cameras',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Indoor_Cameras">Indoor Cameras</a></li>',
      });
  });

downloadsRouter.get('/Outdoor_Cameras/', function(req, res) {
    res.render('./Downloads/Outdoor_Cameras', {
        title: 'Downloads for Outdoor Cameras',
        ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
        uplink: '/Downloads/',
        headline: 'Downloads for Outdoor Cameras',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Outdoor Cameras</a></li>',
      });
  });

downloadsRouter.get('/Desktop_Software/', function(req, res) {
    res.render('./Downloads/Desktop_Software', {
        title: 'Downloads for Desktop Software',
        ampimg: '/images/Search/P_SearchThumb_InstarVision_Windows.jpg',
        uplink: '/Downloads/',
        headline: 'Downloads for Software',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Software/">Software</a></li>',
      });
  });

downloadsRouter.get('/Mobile_Apps/', function(req, res) {
    res.render('./Downloads/Mobile_Apps', {
        title: 'Downloads for Apps',
        ampimg: '/images/Search/P_SearchThumb_InstarVision_Android.jpg',
        uplink: '/Downloads/',
        headline: 'Downloads for Mobile Apps',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Mobile_Apps/">Mobile Apps</a></li>',
      });
  });

downloadsRouter.get('/Accessories/', function(req, res) {
    res.render('./Downloads/Accessories', {
        title: 'Downloads for Accessories',
        ampimg: '/images/Search/QI_SearchThumb_QuickInstallation.jpg',
        uplink: '/Downloads/',
        headline: 'Downloads for Accessories',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Accessories/">Accessories</a></li>',
      });
  });

downloadsRouter.get('/Network_Accessories/', function(req, res) {
    res.render('./Downloads/Network_Accessories', {
        title: 'Downloads for Network Accessories',
        ampimg: '/images/Search/QI_SearchThumb_QuickInstallation.jpg',
        uplink: '/Downloads/',
        headline: 'Downloads for Network Accessories',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Network_Accessories/">Network Accessories</a></li>',
      });
  });


/* ###################################################### Indoor Cameras ###################################################### */

downloadsRouter.route('/Indoor_Cameras/IN-8015_HD/')
.get(function(req, res) {
  res.render('./Downloads/Indoor_Cameras_8015', {
      title: 'IN-8015 HD Downloads',
      uplink: '/Downloads/Indoor_Cameras/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products IN-8015 HD',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Indoor_Cameras">Indoor Cameras</a></li><li><a href="/Downloads/Indoor_Cameras/IN-8015_HD">IN-8015 HD</a></li>',
    });
});


downloadsRouter.route('/Indoor_Cameras/IN-6014_HD/')
.get(function(req, res) {
  res.render('./Downloads/Indoor_Cameras_6014', {
      title: 'IN-6014 HD Downloads',
      uplink: '/Downloads/Indoor_Cameras/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products IN-6014 HD',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Indoor_Cameras">Indoor Cameras</a></li><li><a href="/Downloads/Indoor_Cameras/IN-6014_HD">IN-6014 HD</a></li>',
    });
});


downloadsRouter.route('/Indoor_Cameras/IN-6012_HD/')
.get(function(req, res) {
  res.render('./Downloads/Indoor_Cameras_6012', {
      title: 'IN-6012 HD Downloads',
      uplink: '/Downloads/Indoor_Cameras/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products IN-6012 HD',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Indoor_Cameras">Indoor Cameras</a></li><li><a href="/Downloads/Indoor_Cameras/IN-6012_HD">IN-6012 HD</a></li>',
    });
});


downloadsRouter.route('/Indoor_Cameras/IN-6001_HD/')
.get(function(req, res) {
  res.render('./Downloads/Indoor_Cameras_6001', {
      title: 'IN-6001 HD Downloads',
      uplink: '/Downloads/Indoor_Cameras/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products IN-6001 HD',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Indoor_Cameras">Indoor Cameras</a></li><li><a href="/Downloads/Indoor_Cameras/IN-6001_HD">IN-6001 HD</a></li>',
    });
});


downloadsRouter.route('/Indoor_Cameras/IN-3011/')
.get(function(req, res) {
  res.render('./Downloads/Indoor_Cameras_3011', {
      title: 'IN-3011 Downloads',
      uplink: '/Downloads/Indoor_Cameras/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products IN-3011',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Indoor_Cameras">Indoor Cameras</a></li><li><a href="/Downloads/Indoor_Cameras/IN-3011">IN-3011</a></li>',
    });
});


/* ###################################################### Outdoor Cameras ###################################################### */


downloadsRouter.route('/Outdoor_Cameras/IN-9008_HD/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_9008', {
      title: 'IN-9008 HD Downloads',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      uplink: '/Downloads/Outdoor_Cameras/',
      headline: 'INSTAR Products IN-9008 HD',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Outdoor Cameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li>',
    });
});


downloadsRouter.route('/Outdoor_Cameras/IN-7011_HD/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_7011', {
      title: 'IN-7011 HD Downloads',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      uplink: '/Downloads/Outdoor_Cameras/',
      headline: 'INSTAR Products IN-7011 HD',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Outdoor Cameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li>',
    });
});


downloadsRouter.route('/Outdoor_Cameras/IN-5907_HD/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_5907', {
      title: 'IN-5907 HD Downloads',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      uplink: '/Downloads/Outdoor_Cameras/',
      headline: 'INSTAR Products IN-5907 HD',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Outdoor Cameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li>',
    });
});


downloadsRouter.route('/Outdoor_Cameras/IN-5905_HD/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_5905', {
      title: 'IN-5905 HD Downloads',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      uplink: '/Downloads/Outdoor_Cameras/',
      headline: 'INSTAR Products IN-5905 HD',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Outdoor Cameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li>',
    });
});


downloadsRouter.route('/Outdoor_Cameras/IN-4011/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_4011', {
      title: 'IN-4011 Downloads',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      uplink: '/Downloads/Outdoor_Cameras/',
      headline: 'INSTAR Products IN-4011',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Outdoor Cameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-4011/">IN-4011</a></li>',
    });
});


downloadsRouter.route('/Outdoor_Cameras/IN-4010_V2/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_4010', {
      title: 'IN-4010 V2 Downloads',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      uplink: '/Downloads/Outdoor_Cameras/',
      headline: 'INSTAR Products IN-4010 V2',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Outdoor Cameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-4010_V2/">IN-4010 V2</a></li>',
    });
});


downloadsRouter.route('/Outdoor_Cameras/IN-2908/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_2908', {
      title: 'IN-2908 Downloads',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      uplink: '/Downloads/Outdoor_Cameras/',
      headline: 'INSTAR Products IN-2908',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Outdoor Cameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-2908/">IN-2908</a></li>',
    });
});


downloadsRouter.route('/Outdoor_Cameras/IN-2905_V2/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_2905', {
      title: 'IN-2905 V2 Downloads',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      uplink: '/Downloads/Outdoor_Cameras/',
      headline: 'INSTAR Products IN-2905 V2',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Outdoor Cameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-2905_V2/">IN-2905 V2</a></li>',
    });
});

module.exports = downloadsRouter;
