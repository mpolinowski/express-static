var express = require('express');
var testRouter = express.Router();

testRouter.route('/Test')
  .get(function(req, res) {
      res.render('./Test/Test', {
          title: 'Test Range',
          uplink: '/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Safety_Warnings/">Safety Warnings</a></li>',
        });
    });

testRouter.route('/ampHome')
  .get(function(req, res) {
      res.render('./Test/ampHome', {
          title: 'AMP Homepage',
          uplink: '/Test/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Safety_Warnings/">Safety Warnings</a></li>',
        });
    });

testRouter.route('/Glide')
  .get(function(req, res) {
      res.render('./Test/Glide', {
          title: 'Glide Template',
          uplink: '/Test/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Safety_Warnings/">Safety Warnings</a></li>',
        });
    });

testRouter.route('/AMP_Gallery')
  .get(function(req, res) {
      res.render('./Test/AMP_Gallery', {
          title: 'AMP Gallery Template',
          uplink: '/Test/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Safety_Warnings/">Safety Warnings</a></li>',
        });
    });


module.exports = testRouter;
