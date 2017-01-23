var express = require('express');
var productRouter = express.Router();
var appdata = require('../views/_partials/data/cameras.json');

/* ****************************************** GET /General Product Routes ****************************************** */
productRouter.route('/')
  .get(function(req, res) {
      res.render('./Products/Products', {
          title: 'INSTAR Products',
        });
    });
	
productRouter.route('/Usermanuals')
  .get(function(req, res) {
      res.render('./Products/Usermanuals', {
          title: 'INSTAR Products Usermanuals',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-7011_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-7011 HD Safety Warnings',
          model: 'IN-7011_HD',
		  type: 'Outdoor',
		  uplink: '/Products/Outdoor_Cameras/IN-7011_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-7011_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-7011_HD/Safety_Warnings/">Safety Warnings</a></li>',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-7011_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-7011 HD Warranty & Disposal',
          model: 'IN-7011_HD',
		  type: 'Outdoor',
		  uplink: '/Products/Outdoor_Cameras/IN-7011_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-7011_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-7011_HD/Warranty/">Warranty</a></li>',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-7011_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-7011 HD Video Streaming',
          model: 'IN-7011_HD',
		  type: 'Outdoor',
		  uplink: '/Products/Outdoor_Cameras/IN-7011_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-7011_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-7011_HD/Video_Streaming/">Video Streaming</a></li>',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-7011_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-7011 HD Hardware Reset',
          model: 'IN-7011_HD',
		  type: 'Outdoor',
		  uplink: '/Products/Outdoor_Cameras/IN-7011_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-7011_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-7011_HD/Camera_Reset/">Camera Reset</a></li>',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-9008_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-9008 HD Safety Warnings',
          model: 'IN-9008_HD',
		  type: 'Outdoor',
		  uplink: '/Products/Outdoor_Cameras/IN-9008_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Safety_Warnings/">Safety Warnings</a></li>',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-9008_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-9008 HD Warranty & Disposal',
          model: 'IN-9008_HD',
		  type: 'Outdoor',
		  uplink: '/Products/Outdoor_Cameras/IN-9008_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Warranty/">Warranty</a></li>',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-9008_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-9008 HD Video Streaming',
          model: 'IN-9008_HD',
		  type: 'Outdoor',
		  uplink: '/Products/Outdoor_Cameras/IN-9008_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Video_Streaming/">Video Streaming</a></li>',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-9008_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-9008 HD Hardware Reset',
          model: 'IN-9008_HD',
		  type: 'Outdoor',
		  uplink: '/Products/Outdoor_Cameras/IN-9008_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Camera_Reset/">Camera Reset</a></li>',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-5907_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-5907 HD Safety Warnings',
          model: 'IN-5907_HD',
		  type: 'Outdoor',
		  uplink: '/Products/Outdoor_Cameras/IN-5907_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-5907_HD/Safety_Warnings/">Safety Warnings</a></li>',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-5907_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-5907 HD Warranty & Disposal',
          model: 'IN-5907_HD',
		  type: 'Outdoor',
		  uplink: '/Products/Outdoor_Cameras/IN-5907_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-5907_HD/Warranty/">Warranty</a></li>',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-5907_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-5907 HD Video Streaming',
          model: 'IN-5907_HD',
		  type: 'Outdoor',
		  uplink: '/Products/Outdoor_Cameras/IN-5907_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-5907_HD/Video_Streaming/">Video Streaming</a></li>',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-5907_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-5907 HD Hardware Reset',
          model: 'IN-5907_HD',
		  type: 'Outdoor',
		  uplink: '/Products/Outdoor_Cameras/IN-5907_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-5907_HD/Camera_Reset/">Camera Reset</a></li>',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-5905_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-5905 HD Safety Warnings',
          model: 'IN-5905_HD',
		  type: 'Outdoor',
		  uplink: '/Products/Outdoor_Cameras/IN-5905_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/ProductsOutdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/Safety_Warnings/">Safety Warnings</a></li>',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-5905_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-5905 HD Warranty & Disposal',
          model: 'IN-5905_HD',
		  type: 'Outdoor',
		  uplink: '/Products/Outdoor_Cameras/IN-5905_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/Warranty/">Warranty</a></li>',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-5905_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-5905 HD Video Streaming',
          model: 'IN-5905_HD',
		  type: 'Outdoor',
		  uplink: '/Products/Outdoor_Cameras/IN-5905_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/Video_Streaming/">Video Streaming</a></li>',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-5905_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-5905 HD Hardware Reset',
          model: 'IN-5905_HD',
		  type: 'Outdoor',
		  uplink: '/Products/Outdoor_Cameras/IN-5905_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR Products Outdoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/Camera_Reset/">Camera Reset</a></li>',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-8015_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-8015 HD Safety Warnings',
          model: 'IN-8015_HD',
		  type: 'Indoor',
		  uplink: '/Products/Indoor_Cameras/IN-8015_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Indoor_Cameras/IN-8015_HD/Safety_Warnings/">Safety Warnings</a></li>',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-8015_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-8015 HD Warranty & Disposal',
          model: 'IN-8015_HD',
		  type: 'Indoor',
		  uplink: '/Products/Indoor_Cameras/IN-8015_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Indoor_Cameras/IN-8015_HD/Warranty/">Warranty</a></li>',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-8015_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-8015 HD Video Streaming',
          model: 'IN-8015_HD',
		  type: 'Indoor',
		  uplink: '/Products/Indoor_Cameras/IN-8015_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Indoor_Cameras/IN-8015_HD/Video_Streaming/">Video Streaming</a></li>',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-8015_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-8015 HD Hardware Reset',
          model: 'IN-8015_HD',
		  type: 'Indoor',
		  uplink: '/Products/Indoor_Cameras/IN-8015_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Indoor_Cameras/IN-8015_HD/Camera_Reset/">Camera Reset</a></li>',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-6014_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-6014 HD Safety Warnings',
          model: 'IN-6014_HD',
		  type: 'Indoor',
		  uplink: '/Products/Indoor_Cameras/IN-6014_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6014_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Indoor_Cameras/IN-6014_HD/Safety_Warnings/">Safety Warnings</a></li>',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-6014_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-6014 HD Warranty & Disposal',
          model: 'IN-6014_HD',
		  type: 'Indoor',
		  uplink: '/Products/Indoor_Cameras/IN-6014_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6014_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Indoor_Cameras/IN-6014_HD/Safety_Warnings/">Safety Warnings</a></li>',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-6014_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-6014 HD Video Streaming',
          model: 'IN-6014_HD',
		  type: 'Indoor',
		  uplink: '/Products/Indoor_Cameras/IN-6014_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6014_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Indoor_Cameras/IN-6014_HD/Video_Streaming/">Video Streaming</a></li>',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-6014_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-6014 HD Hardware Reset',
          model: 'IN-6014_HD',
		  type: 'Indoor',
		  uplink: '/Products/Indoor_Cameras/IN-6014_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6014_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Indoor_Cameras/IN-6014_HD/Camera_Reset/">Camera Reset</a></li>',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-6012_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-6012 HD Safety Warnings',
          model: 'IN-6012_HD',
		  type: 'Indoor',
		  uplink: '/Products/Indoor_Cameras/IN-6012_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6012_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Indoor_Cameras/IN-6012_HD/Safety_Warnings/">Safety Warnings</a></li>',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-6012_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-6012 HD Warranty & Disposal',
          model: 'IN-6012_HD',
		  type: 'Indoor',
		  uplink: '/Products/Indoor_Cameras/IN-6012_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6012_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Indoor_Cameras/IN-6012_HD/Warranty/">Warranty</a></li>',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-6012_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-6012 HD Video Streaming',
          model: 'IN-6012_HD',
		  type: 'Indoor',
		  uplink: '/Products/Indoor_Cameras/IN-6012_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6012_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Indoor_Cameras/IN-6012_HD/Video_Streaming/">Video Streaming</a></li>',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-6012_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-6012 HD Hardware Reset',
          model: 'IN-6012_HD',
		  type: 'Indoor',
		  uplink: '/Products/Indoor_Cameras/IN-6012_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6012_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Indoor_Cameras/IN-6012_HD/Camera_Reset/">Camera Reset</a></li>',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-6001_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-6001 HD Safety Warnings',
          model: 'IN-6001_HD',
		  type: 'Indoor',
		  uplink: '/Products/Indoor_Cameras/IN-6001_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6001_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Indoor_Cameras/IN-6001_HD/Safety_Warnings/">Safety Warnings</a></li>',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-6001_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-6001 HD Warranty & Disposal',
          model: 'IN-6001_HD',
		  type: 'Indoor',
		  uplink: '/Products/Indoor_Cameras/IN-6001_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6001_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Indoor_Cameras/IN-6001_HD/Warranty/">Warranty</a></li>',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-6001_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-6001 HD Video Streaming',
          model: 'IN-6001_HD',
		  type: 'Indoor',
		  uplink: '/Products/Indoor_Cameras/IN-6001_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6001_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Indoor_Cameras/IN-6001_HD/Video_Streaming/">Video Streaming</a></li>',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-6001_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-6001 HD Hardware Reset',
          model: 'IN-6001_HD',
		  type: 'Indoor',
		  uplink: '/Products/Indoor_Cameras/IN-6001_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Products/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6001_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Indoor_Cameras/IN-6001_HD/Camera_Reset/">Camera Reset</a></li>',
        });
    });

/* ****************************************** GET /Indoor_Cameras ****************************************** */
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

productRouter.route('/Indoor_Cameras/IN-8015_HD')
.get(function(req, res) {
  res.render('./Products/IN-8015_Overview', {
      title: 'IN-8015 HD Overview',
	  uplink: '/Products/Indoor_Cameras/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-8015_HD/Usermanual')
.get(function(req, res) {
  res.render('./Products/IN-8015_Usermanual', {
      title: 'IN-8015 HD Usermanual',
	  uplink: '/Products/Indoor_Cameras/IN-8015_HD/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-8015_HD/Product_Features')
.get(function(req, res) {
  res.render('./Products/IN-8015_Product_Features', {
      title: 'IN-8015 HD Product Features',
	  uplink: '/Products/Indoor_Cameras/IN-8015_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Product_Features/">Product Features</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-8015_HD/Point2Point')
.get(function(req, res) {
  res.render('./Products/IN-8015_Point2Point', {
      title: 'IN-8015 HD Point 2 Point',
	  uplink: '/Products/Indoor_Cameras/IN-8015_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Point2Point/">Point2Point</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-8015_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Products/IN-8015_Quick_Installation', {
      title: 'IN-8015 HD Quick Installation',
	  uplink: '/Products/Indoor_Cameras/IN-8015_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Quick_Installation/">Quick Installation</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-8015_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Products/IN-8015_Lense_Adjustment', {
      title: 'IN-8015 HD Lense Adjustment',
	  uplink: '/Products/Indoor_Cameras/IN-8015_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Lense_Adjustment/">Lense Adjustment</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-8015_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-8015_Tech_Specs', {
      title: 'IN-8015 HD Technical Specifications',
      uplink: '/Products/Indoor_Cameras/IN-8015_HD/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-8015_HD/Technical_Specifications/">Technical Specifications</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-8015_HD/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-8015_Downloads', {
      title: 'IN-8015 HD Downloads',
	  uplink: '/Products/Indoor_Cameras/IN-8015_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-8015_HD/Downloads/">Downloads</a></li>',
    });
});  
  
productRouter.route('/Indoor_Cameras/IN-6014_HD')
.get(function(req, res) {
  res.render('./Products/IN-6014_Overview', {
      title: 'IN-6014 HD Overview',
	  uplink: '/Products/Indoor_Cameras/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-6014_HD/Usermanual')
.get(function(req, res) {
  res.render('./Products/IN-6014_Usermanual', {
      title: 'IN-6014 HD Usermanual',
	  uplink: '/Products/Indoor_Cameras/IN-6014_HD/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6014_HD/Usermanual/">Usermanual</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-6014_HD/Product_Features')
.get(function(req, res) {
  res.render('./Products/IN-6014_Product_Features', {
      title: 'IN-6014 HD Product Features',
	  uplink: '/Products/Indoor_Cameras/IN-6014_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6014_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Product_Features/">Product Features</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-6014_HD/Point2Point')
.get(function(req, res) {
  res.render('./Products/IN-6014_Point2Point', {
      title: 'IN-6014 HD Point 2 Point',
	  uplink: '/Products/Indoor_Cameras/IN-6014_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6014_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Point2Point/">Point2Point</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-6014_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Products/IN-6014_Quick_Installation', {
      title: 'IN-6014 HD Quick Installation',
	  uplink: '/Products/Indoor_Cameras/IN-6014_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6014_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Quick_Installation/">Quick Installation</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-6014_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Products/IN-6014_Lense_Adjustment', {
      title: 'IN-6014 HD Lense Adjustment',
	  uplink: '/Products/Indoor_Cameras/IN-6014_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6014_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Lense_Adjustment/">Lense Adjustment</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-6014_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-6014_Tech_Specs', {
      title: 'IN-6014 HD Technical Specifications',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6014_HD/Technical_Specifications/">Technical Specifications</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-6014_HD/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-6014_Downloads', {
      title: 'IN-6014 HD Downloads',
	  uplink: '/Products/Indoor_Cameras/IN-6014_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6014_HD/Downloads/">Downloads</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-6012_HD')
.get(function(req, res) {
  res.render('./Products/IN-6012_Overview', {
      title: 'IN-6012 HD Overview',
	  uplink: '/Products/Indoor_Cameras/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-6012_HD/Usermanual')
.get(function(req, res) {
  res.render('./Products/IN-6012_Usermanual', {
      title: 'IN-6012 HD Usermanual',
	  uplink: '/Products/Indoor_Cameras/IN-6012_HD/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6012_HD/Usermanual/">Usermanual</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-6012_HD/Product_Features')
.get(function(req, res) {
  res.render('./Products/IN-6012_Product_Features', {
      title: 'IN-6012 HD Product Features',
	  uplink: '/Products/Indoor_Cameras/IN-6012_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6012_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Product_Features/">Product Features</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-6012_HD/Point2Point')
.get(function(req, res) {
  res.render('./Products/IN-6012_Point2Point', {
      title: 'IN-6012 HD Point 2 Point',
	  uplink: '/Products/Indoor_Cameras/IN-6012_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6012_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Point2Point/">Point2Point</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-6012_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Products/IN-6012_Quick_Installation', {
      title: 'IN-6012 HD Quick Installation',
	  uplink: '/Products/Indoor_Cameras/IN-6012_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6012_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Quick_Installation/">Quick Installation</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-6012_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Products/IN-6012_Lense_Adjustment', {
      title: 'IN-6012 HD Lense Adjustment',
	  uplink: '/Products/Indoor_Cameras/IN-6012_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6012_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Quick_Installation/">Quick Installation</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-6012_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-6012_Tech_Specs', {
      title: 'IN-6012 HD Technical Specifications',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6012_HD/Technical_Specifications/">Technical Specifications</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-6012_HD/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-6012_Downloads', {
      title: 'IN-6012 HD Downloads',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6012_HD/Downloads/">Downloads</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-6001_HD')
.get(function(req, res) {
  res.render('./Products/IN-6001_Overview', {
      title: 'IN-6001 HD Overview',
	  uplink: '/Products/Indoor_Cameras/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-6001_HD/Usermanual')
.get(function(req, res) {
  res.render('./Products/IN-6001_Usermanual', {
      title: 'IN-6001 HD Usermanual',
	  uplink: '/Products/Indoor_Cameras/IN-6001_HD/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6001_HD/Usermanual/">Usermanual</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-6001_HD/Product_Features')
.get(function(req, res) {
  res.render('./Products/IN-6001_Product_Features', {
      title: 'IN-6001 HD Product Features',
	  uplink: '/Products/Indoor_Cameras/IN-6001_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6001_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Product_Features/">Product Features</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-6001_HD/Point2Point')
.get(function(req, res) {
  res.render('./Products/IN-6001_Point2Point', {
      title: 'IN-6001 HD Point 2 Point',
	  uplink: '/Products/Indoor_Cameras/IN-6001_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6001_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Point2Point/">Point2Point</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-6001_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Products/IN-6001_Quick_Installation', {
      title: 'IN-6001 HD Quick Installation',
	  uplink: '/Products/Indoor_Cameras/IN-6001_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6001_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Quick_Installation/">Quick Installation</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-6001_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Products/IN-6001_Lense_Adjustment', {
      title: 'IN-6001 HD Lense Adjustment',
	  uplink: '/Products/Indoor_Cameras/IN-6001_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6001_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Quick_Installation/">Quick Installation</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-6001_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-6001_Tech_Specs', {
      title: 'IN-6001 HD Technical Specifications',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6001_HD/Technical_Specifications/">Technical Specifications</a></li>',
    });
});

productRouter.route('/Indoor_Cameras/IN-6001_HD/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-6001_Downloads', {
      title: 'IN-6001 HD Downloads',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Products/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Products/Indoor_Cameras/IN-6001_HD/Downloads/">Downloads</a></li>',
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

/* ****************************************** GET /Outdoor_Cameras ****************************************** */
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
	  uplink: '/Products/Outdoor_Cameras/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Outdoor_Cameras/">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-7011_HD/Usermanual')
.get(function(req, res) {
  res.render('./Products/IN-7011_Usermanual', {
      title: 'IN-7011 HD Usermanual',
	  uplink: '/Products/Outdoor_Cameras/IN-7011_HD/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/Outdoor_Cameras/">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-7011_HD/Usermanual/">Usermanual</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-7011_HD/Product_Features')
.get(function(req, res) {
  res.render('./Products/IN-7011_Product_Features', {
      title: 'IN-7011 HD Product Features',
	  uplink: '/Products/Outdoor_Cameras/IN-7011_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-7011_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-7011_HD/Product_Features/">Product Features</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-7011_HD/Point2Point')
.get(function(req, res) {
  res.render('./Products/IN-7011_Point2Point', {
      title: 'IN-7011 HD Point 2 Point',
	  uplink: '/Products/Outdoor_Cameras/IN-7011_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-7011_HD/Usermanual">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-7011_HD/Point2Point/">Point2Point</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-7011_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Products/IN-7011_Quick_Installation', {
      title: 'IN-7011 HD Quick Installation',
	  uplink: '/Products/Outdoor_Cameras/IN-7011_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-7011_HD/Usermanual">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-7011_HD/Quick_Installation/">Quick Installation</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-7011_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Products/IN-7011_Lense_Adjustment', {
      title: 'IN-7011 HD Lense Adjustment',
	  uplink: '/Products/Outdoor_Cameras/IN-7011_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-7011_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-7011_HD/Lense_Adjustment/">Lense Adjustment</a></li>',
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

productRouter.route('/Outdoor_Cameras/IN-9008_HD')
.get(function(req, res) {
  res.render('./Products/IN-9008_Overview', {
      title: 'IN-9008 HD Overview',
	  uplink: '/Products/Outdoor_Cameras/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Outdoor_Cameras/">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-9008_HD/Usermanual')
.get(function(req, res) {
  res.render('./Products/IN-9008_Usermanual', {
      title: 'IN-9008 HD Usermanual',
	  uplink: '/Products/Outdoor_Cameras/IN-9008_HD/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/Outdoor_Cameras/">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Usermanual/">Usermanual</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-9008_HD/Product_Features')
.get(function(req, res) {
  res.render('./Products/IN-9008_Product_Features', {
      title: 'IN-9008 HD Product Features',
	  uplink: '/Products/Outdoor_Cameras/IN-9008_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Product_Features/">Product Features</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-9008_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Products/IN-9008_Quick_Installation', {
      title: 'IN-9008 HD Quick Installation',
	  uplink: '/Products/Outdoor_Cameras/IN-9008_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Usermanual">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Quick_Installation/">Quick Installation</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi')
.get(function(req, res) {
  res.render('./Products/IN-9008_Quick_Installation_1hole', {
      title: 'IN-9008 HD Quick Installation - PoE or WiFi',
	  uplink: '/Products/Outdoor_Cameras/IN-9008_HD/Quick_Installation/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Products/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Usermanual">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Quick_Installation/">Quick Installation</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi/">WiFi or PoE</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi/Ethernet')
.get(function(req, res) {
  res.render('./Products/IN-9008_Quick_Installation_1hole_lan', {
      title: 'IN-9008 HD Quick Installation - PoE or WiFi',
	  uplink: '/Products/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Usermanual">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Quick_Installation/">Quick Installation</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi/">WiFi or PoE</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi/Ethernet/">Ethernet</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi/WPS')
.get(function(req, res) {
  res.render('./Products/IN-9008_Quick_Installation_1hole_wps', {
      title: 'IN-9008 HD Quick Installation - PoE or WiFi',
	  uplink: '/Products/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Usermanual">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Quick_Installation/">Quick Installation</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi/">WiFi or PoE</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi/WPS/">WPS</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-9008_HD/Quick_Installation/Ethernet')
.get(function(req, res) {
  res.render('./Products/IN-9008_Quick_Installation_2hole', {
      title: 'IN-9008 HD Quick Installation - Ethernet',
	  uplink: '/Products/Outdoor_Cameras/IN-9008_HD/Quick_Installation/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Products/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Usermanual">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Quick_Installation/">Quick Installation</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Quick_Installation/Ethernet/">Ethernet</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-9008_HD/Quick_Installation/Ethernet_and_Audio-Out')
.get(function(req, res) {
  res.render('./Products/IN-9008_Quick_Installation_3hole', {
      title: 'IN-9008 HD Quick Installation - Ethernet & Audio-Out',
	  uplink: '/Products/Outdoor_Cameras/IN-9008_HD/Quick_Installation/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
	  breadcrumbs: '<li><a href="/Products/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Usermanual">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Quick_Installation/">Quick Installation</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Quick_Installation/Ethernet_and_Audio-Out/">Ethernet & Audio</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-9008_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Products/IN-9008_Lense_Adjustment', {
      title: 'IN-9008 HD Lense Adjustment',
	  uplink: '/Products/Outdoor_Cameras/IN-9008_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-9008_HD/Lense_Adjustment/">Lense Adjustment</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-9008_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-9008_Tech_Specs', {
      title: 'IN-9008 HD Technical Specifications',
    });
});

productRouter.route('/Outdoor_Cameras/IN-9008_HD/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-9008_Downloads', {
      title: 'IN-9008 HD Downloads',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5907_HD')
.get(function(req, res) {
  res.render('./Products/IN-5907_Overview', {
      title: 'IN-5907 HD Overview',
	  uplink: '/Products/Outdoor_Cameras/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5907_HD/Usermanual')
.get(function(req, res) {
  res.render('./Products/IN-5907_Usermanual', {
      title: 'IN-5907 HD Usermanual',
	  uplink: '/Products/Outdoor_Cameras/IN-5907_HD/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5907_HD/Product_Features')
.get(function(req, res) {
  res.render('./Products/IN-5907_Product_Features', {
      title: 'IN-5907 HD Product Features',
	  uplink: '/Products/Outdoor_Cameras/IN-5907_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Product_Features/">Product Features</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5907_HD/Point2Point')
.get(function(req, res) {
  res.render('./Products/IN-5907_Point2Point', {
      title: 'IN-5907 HD Point 2 Point',
	  uplink: '/Products/Outdoor_Cameras/IN-5907_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Point2Point/">Point2Point</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5907_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Products/IN-5907_Quick_Installation', {
      title: 'IN-5907 HD Quick Installation',
	  uplink: '/Products/Outdoor_Cameras/IN-5907_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Quick_Installation/">Quick Installation</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5907_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Products/IN-5907_Lense_Adjustment', {
      title: 'IN-5907 HD Lense Adjustment',
	  uplink: '/Products/Outdoor_Cameras/IN-5907_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-5907_HD/Usermanual/">Usermanual</a></li><li><a href="/Outdoor_Cameras/IN-5907_HD/Lense_Adjustment/">Lense Adjustment</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5907_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-5907_Tech_Specs', {
      title: 'IN-5907 HD Technical Specifications',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-5907_HD/Technical_Specifications/">Technical Specifications</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5907_HD/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-5907_Downloads', {
      title: 'IN-5907 HD Downloads',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-5907_HD/Downloads/">Downloads</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5905_HD')
.get(function(req, res) {
  res.render('./Products/IN-5905_Overview', {
      title: 'IN-5905 HD Overview',
	  uplink: '/Products/Outdoor_Cameras/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5905_HD/Usermanual')
.get(function(req, res) {
  res.render('./Products/IN-5905_Usermanual', {
      title: 'IN-5905 HD Usermanual',
	  uplink: '/Products/Outdoor_Cameras/IN-5905_HD/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5905_HD/Product_Features')
.get(function(req, res) {
  res.render('./Products/IN-5905_Product_Features', {
      title: 'IN-5905 HD Product Features',
	  uplink: '/Products/Outdoor_Cameras/IN-5905_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/Product_Features/">Product Features</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5905_HD/Point2Point')
.get(function(req, res) {
  res.render('./Products/IN-5905_Point2Point', {
      title: 'IN-5905 HD Point 2 Point',
	  uplink: '/Products/Outdoor_Cameras/IN-5905_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/Point2Point/">Point2Point</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5905_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Products/IN-5905_Quick_Installation', {
      title: 'IN-5905 HD Quick Installation',
	  uplink: '/Products/Outdoor_Cameras/IN-5905_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/Quick_Installation/">Quick Installation</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5905_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Products/IN-5905_Lense_Adjustment', {
      title: 'IN-5905 HD Lense Adjustment',
	  uplink: '/Products/Outdoor_Cameras/IN-5905_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
      headline: 'INSTAR Products Outdoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/Usermanual/">Usermanual</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/Lense_Adjustment/">Lense Adjustment</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5905_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-5905_Tech_Specs', {
      title: 'IN-5905 HD Technical Specifications',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/Technical_Specifications/">Technical Specifications</a></li>',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5905_HD/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-5905_Downloads', {
      title: 'IN-5905 HD Downloads',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/Outdoor_Cameras">Outdoor Cams</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Products/Outdoor_Cameras/IN-5905_HD/Downloads/">Downloads</a></li>',
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

/* ****************************************** GET Camera Lenses ****************************************** */
productRouter.route('/Lenses')
.get(function(req, res) {
  res.render('./Products/Lenses', {
      title: 'Camera Lenses',
	  uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Lenses/">Lenses</a></li>',
    });
});

/* ****************************************** GET S-Mount Lenses ****************************************** */
productRouter.route('/Lenses/S-Mount/IN-0180')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0180', {
      title: 'IN-0180 Wideangle',
	  uplink: '/Products/Lenses/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Lenses/">Lenses</a></li><li><a href="/Products/Lenses/S-Mount/IN-0180/">S-Mount :: IN-0180</a></li>',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0220')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0220', {
      title: 'IN-0220 Wideangle',
	  uplink: '/Products/Lenses/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Lenses/">Lenses</a></li><li><a href="/Products/Lenses/S-Mount/IN-0220/">S-Mount :: IN-0220</a></li>',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0290')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0290', {
      title: 'IN-0290 Wideangle',
	  uplink: '/Products/Lenses/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Lenses/">Lenses</a></li><li><a href="/Products/Lenses/S-Mount/IN-0290/">S-Mount :: IN-0290</a></li>',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0360')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0360', {
      title: 'IN-0360 Wideangle',
	  uplink: '/Products/Lenses/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Lenses/">Lenses</a></li><li><a href="/Products/Lenses/S-Mount/IN-0360/">S-Mount :: IN-0360</a></li>',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0430')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0430', {
      title: 'IN-0430 Standard',
	  uplink: '/Products/Lenses/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Lenses/">Lenses</a></li><li><a href="/Products/Lenses/S-Mount/IN-0430/">S-Mount :: IN-0430</a></li>',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0600')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0600', {
      title: 'IN-0600 Default',
	  uplink: '/Products/Lenses/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Lenses/">Lenses</a></li><li><a href="/Products/Lenses/S-Mount/IN-0600/">S-Mount :: IN-0600</a></li>',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0800')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0800', {
      title: 'IN-0800 Tele',
	  uplink: '/Products/Lenses/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Lenses/">Lenses</a></li><li><a href="/Products/Lenses/S-Mount/IN-0800/">S-Mount :: IN-0800</a></li>',
    });
});

productRouter.route('/Lenses/S-Mount/IN-1200')
.get(function(req, res) {
  res.render('./Products/Lense_IN-1200', {
      title: 'IN-1200 Tele',
	  uplink: '/Products/Lenses/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Lenses/">Lenses</a></li><li><a href="/Products/Lenses/S-Mount/IN-1200/">S-Mount :: IN-1200</a></li>',
    });
});

productRouter.route('/Lenses/S-Mount/IN-1600')
.get(function(req, res) {
  res.render('./Products/Lense_IN-1600', {
      title: 'IN-1600 Tele',
	  uplink: '/Products/Lenses/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Lenses/">Lenses</a></li><li><a href="/Products/Lenses/S-Mount/IN-1600/">S-Mount :: IN-1600</a></li>',
    });
});

productRouter.route('/Lenses/S-Mount/Lense_Comparison')
.get(function(req, res) {
  res.render('./Products/Lense_Comparison', {
      title: 'S-Mount Lense Comparison',
	  uplink: '/Products/Lenses/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Lenses/">Lenses</a></li><li><a href="/Products/Lenses/S-Mount/Lense_Comparison/">Lense Comparison</a></li>',
    });
});

/* ****************************************** GET /IN-LAN ****************************************** */

productRouter.route('/IN-LAN')
.get(function(req, res) {
  res.render('./Products/IN-LAN_500', {
      title: 'IN-LAN 500 Powerline Communication',
	  uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-LAN/">IN-LAN Powerline</a></li>',
    });
});

/* ****************************************** GET /IN-Lighting ****************************************** */

productRouter.route('/IR_Lighting')
.get(function(req, res) {
  res.render('./Products/IR-Lighting', {
      title: 'INSTAR Infrared Spotlights',
    });
});

/* ****************************************** GET /IN-PoE ****************************************** */

productRouter.route('/Power_over_Ethernet')
.get(function(req, res) {
  res.render('./Products/IN-PoE_1000', {
      title: 'IN-PoE 1000 Power over Ethernet',
	  uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/Power_over_Ethernet/">Power_over_Ethernet</a></li>',
    });
});

/* ****************************************** GET /IN-Mikro ****************************************** */

productRouter.route('/IN-Mikro')
.get(function(req, res) {
  res.render('./Products/IN-Mikro', {
      title: 'IN-Mikro IP Camera Microphones',
    });
});

/* ****************************************** GET /IN-Route ****************************************** */

productRouter.route('/IN-Route')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li>',
    });
});

productRouter.route('/IN-Route/First_Steps')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">First Steps</a></li>',
    });
});

productRouter.route('/IN-Route/First_Steps/Introduction')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_Introduction', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/First_Steps/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">First Steps</a></li><li><a href="/Products/IN-Route/First_Steps/Introduction/">Introduction</a></li>',
    });
});

productRouter.route('/IN-Route/First_Steps/Charging')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_Charging', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/First_Steps/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">First Steps</a></li><li><a href="/Products/IN-Route/First_Steps/Charging/">Charging</a></li>',
    });
});

productRouter.route('/IN-Route/First_Steps/Login')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_Login', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/First_Steps/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">First Steps</a></li><li><a href="/Products/IN-Route/First_Steps/Login/">Login</a></li>',
    });
});

productRouter.route('/IN-Route/First_Steps/Wizard')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_Wizard', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/First_Steps/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">First Steps</a></li><li><a href="/Products/IN-Route/First_Steps/Wizard/">Wizard</a></li>',
    });
});

productRouter.route('/IN-Route/First_Steps/Quick_Access')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_QA', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/First_Steps/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">First Steps</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/">Quick Access</a></li>',
    });
});

productRouter.route('/IN-Route/First_Steps/Quick_Access/Router_Modes')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_QA_Router', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/First_Steps/Quick_Access/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">First Steps</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/">Quick Access</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/Router_Modes/">Router Modes</a></li>',
    });
});

productRouter.route('/IN-Route/First_Steps/Quick_Access/Repeater_Mode')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_QA_Repeater', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/First_Steps/Quick_Access/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">First Steps</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/">Quick Access</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/Repeater_Mode/">Repeater Mode</a></li>',
    });
});

productRouter.route('/IN-Route/First_Steps/Quick_Access/3G_Mode')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_QA_3G', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/First_Steps/Quick_Access/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/First_Steps/">First Steps</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/">Quick Access</a></li><li><a href="/Products/IN-Route/First_Steps/Quick_Access/3G_Mode/">3G Mode</a></li>',
    });
});

productRouter.route('/IN-Route/Overview')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Overview', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Overview/">Overview</a></li>',
    });
});

productRouter.route('/IN-Route/Overview/Status')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_O_Status', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/Overview/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Overview/">Overview</a></li><li><a href="/Products/IN-Route/Overview/Status/">Status</a></li>',
    });
});

productRouter.route('/IN-Route/Overview/WAN_Status')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_O_WAN', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/Overview/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Overview/">Overview</a></li><li><a href="/Products/IN-Route/Overview/WAN_Status/">WAN Status</a></li>',
    });
});

productRouter.route('/IN-Route/Overview/Mode')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_O_Mode', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/Overview/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Overview/">Overview</a></li><li><a href="/Products/IN-Route/Overview/Mode/">Mode</a></li>',
    });
});

productRouter.route('/IN-Route/Overview/File_Explorer')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_O_File', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/Overview/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Overview/">Overview</a></li><li><a href="/Products/IN-Route/Overview/File_Explorer/">File Explorer</a></li>',
    });
});

productRouter.route('/IN-Route/Network')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Network</a></li>',
    });
});

productRouter.route('/IN-Route/Network/LAN')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_LAN', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/Network/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Network</a></li><li><a href="/Products/IN-Route/Network/LAN/">LAN</a></li>',
    });
});

productRouter.route('/IN-Route/Network/WiFi_Settings')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_WiFi', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/Network/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Network</a></li><li><a href="/Products/IN-Route/Network/WiFi_Settings/">WiFi Settings</a></li>',
    });
});

productRouter.route('/IN-Route/Network/Repeater_Settings')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_Repeater', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/Network/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Network</a></li><li><a href="/Products/IN-Route/Network/Repeater_Settings/">Repeater Settings</a></li>',
    });
});

productRouter.route('/IN-Route/Network/3G_Settings')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_3G', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/Network/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Network</a></li><li><a href="/Products/IN-Route/Network/3G_Settings/">3G Settings</a></li>',
    });
});

productRouter.route('/IN-Route/Network/Router_Mode')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_Router', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/Network/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Network</a></li><li><a href="/Products/IN-Route/Network/Router_Mode/">Router Mode</a></li>',
    });
});

productRouter.route('/IN-Route/Network/DHCP')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_DHCP', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/Network/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Network</a></li><li><a href="/Products/IN-Route/Network/DHCP/">DHCP</a></li>',
    });
});

productRouter.route('/IN-Route/Network/DDNS')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_DDNS', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/Network/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Network</a></li><li><a href="/Products/IN-Route/Network/DDNS/">DDNS</a></li>',
    });
});

productRouter.route('/IN-Route/Network/FTP')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_FTP', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/Network/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Network/">Network</a></li><li><a href="/Products/IN-Route/Network/FTP/">FTP</a></li>',
    });
});

productRouter.route('/IN-Route/Firewall')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Firewall', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Firewall/">Firewall</a></li>',
    });
});

productRouter.route('/IN-Route/Firewall/Port_Forwarding')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Firewall_Forwarding', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/Firewall/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Firewall/">Firewall</a></li><li><a href="/Products/IN-Route/Firewall/Port_Forwarding/">Port Forwarding</a></li>',
    });
});

productRouter.route('/IN-Route/Firewall/Device_Filter')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Firewall_Filter', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/Firewall/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Firewall/">Firewall</a></li><li><a href="/Products/IN-Route/Firewall/Device_Filter/">Device Filter</a></li>',
    });
});

productRouter.route('/IN-Route/Firewall/DMZ_Host')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Firewall_DMZ', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/Firewall/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Firewall/">Firewall</a></li><li><a href="/Products/IN-Route/Firewall/DMZ_Host/">DMZ Host</a></li>',
    });
});

productRouter.route('/IN-Route/Firewall/Webfilter')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Firewall_Webfilter', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/Firewall/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Firewall/">Firewall</a></li><li><a href="/Products/IN-Route/Firewall/Webfilter/">Webfilter</a></li>',
    });
});

productRouter.route('/IN-Route/System')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li>',
    });
});

productRouter.route('/IN-Route/System/Log')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Log', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/System/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/Log/">Log</a></li>',
    });
});

productRouter.route('/IN-Route/System/Login')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Login', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/System/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/Login/">Login</a></li>',
    });
});

productRouter.route('/IN-Route/System/NTP_Setup')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_NTP', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/System/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/NTP_Setup/">NTP Setup</a></li>',
    });
});

productRouter.route('/IN-Route/System/Statistics')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Statistics', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/System/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/Statistics/">Statistics</a></li>',
    });
});

productRouter.route('/IN-Route/System/Import')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Import', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/System/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/Import/">Import</a></li>',
    });
});

productRouter.route('/IN-Route/System/Reboot')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Reboot', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/System/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/Reboot/">Reboot</a></li>',
    });
});

productRouter.route('/IN-Route/System/Upgrade')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Upgrade', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/System/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/System/">System</a></li><li><a href="/Products/IN-Route/System/Upgrade/">Upgrade</a></li>',
    });
});

productRouter.route('/IN-Route/Help')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Help', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Help/">Help</a></li>',
    });
});

productRouter.route('/IN-Route/Help/Features')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Help_Features', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/Help/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Help/">Help</a></li>li><a href="/Products/IN-Route/Help/Features/">Features</a></li>',
    });
});

productRouter.route('/IN-Route/Help/About_Us')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Help_About', {
      title: 'IN-Route P52 Travel Router',
	  uplink: '/Products/IN-Route/Help/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Route/">IN-Route P52</a></li><li><a href="/Products/IN-Route/Help/">Help</a></li>li><a href="/Products/IN-Route/Help/About_Us/">About Us</a></li>',
    });
});

/* ****************************************** GET /IN-Motion ****************************************** */

productRouter.route('/IN-Motion')
.get(function(req, res) {
  res.render('./Products/IN-Motion', {
      title: 'IN-Motion',
	  uplink: '/Products/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Motion/">IN-Motion</a></li>',
    });
});

productRouter.route('/IN-Motion/300')
.get(function(req, res) {
  res.render('./Products/IN-Motion_300', {
      title: 'IN-Motion 300',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Motion/">IN-Motion</a></li><li><a href="/Products/IN-Motion/300/">300</a></li>',
    });
});

productRouter.route('/IN-Motion/500')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500', {
      title: 'IN-Motion 500',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Motion/">IN-Motion</a></li><li><a href="/Products/IN-Motion/500/">500</a></li>',
    });
});

productRouter.route('/IN-Motion/500/Dual_Sensor')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_Dual_Sensor', {
      title: 'IN-Motion 500 - Dual Sensor',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Motion/">IN-Motion</a></li><li><a href="/Products/IN-Motion/500/">500</a></li><li><a href="/Products/IN-Motion/500/Dual_Sensor/">Dual Sensor</a></li>',
    });
});

productRouter.route('/IN-Motion/500/Setup')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_Setup', {
      title: 'IN-Motion 500 - Setup',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Motion/">IN-Motion</a></li><li><a href="/Products/IN-Motion/500/">500</a></li><li><a href="/Products/IN-Motion/500/Setup/">Setup</a></li>',
    });
});

productRouter.route('/IN-Motion/500/Wiring')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_Wiring', {
      title: 'IN-Motion 500 - Wiring',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Motion/">IN-Motion</a></li><li><a href="/Products/IN-Motion/500/">500</a></li><li><a href="/Products/IN-Motion/500/Wiring/">Wiring</a></li>',
    });
});

productRouter.route('/IN-Motion/500/User_Interface')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_User_Interface', {
      title: 'IN-Motion 500 - User Interface',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Motion/">IN-Motion</a></li><li><a href="/Products/IN-Motion/500/">500</a></li><li><a href="/Products/IN-Motion/500/User_Interface/">User Interface</a></li>',
    });
});

productRouter.route('/IN-Motion/500/Considerations')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_Considerations', {
      title: 'IN-Motion 500 - Considerations',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Motion/">IN-Motion</a></li><li><a href="/Products/IN-Motion/500/">500</a></li><li><a href="/Products/IN-Motion/500/Considerations/">Considerations</a></li>',
    });
});

productRouter.route('/IN-Motion/500/Recorder')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_Recorder', {
      title: 'IN-Motion 500 - Recorder',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Products/IN-Motion/">IN-Motion</a></li><li><a href="/Products/IN-Motion/500/">500</a></li><li><a href="/Products/IN-Motion/500/Recorder/">Recorder</a></li>',
    });
});

module.exports = productRouter;
