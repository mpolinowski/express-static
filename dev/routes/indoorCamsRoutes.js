var express = require('express');
var indoorCamsRouter = express.Router();



/* ****************************************** GET /Indoor_Cameras ****************************************** */
indoorCamsRouter.route('/')
  .get(function(req, res) {
      res.render('./Indoor_Cams/Indoor_Cameras', {
          title: 'INSTAR Indoor IP Cameras',
          model: '8015',
          series: '1080p',
          type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products">Products</a></li><li><a href="/Indoor_Cameras">Indoor Cams</a></li>',
          canonical: '/Indoor_Cameras/',
      		pacc: 'expanded',
      		ptab: '',
      		qiacc: '',
      		qitab: 'hidden',
      		mdacc: '',
      		mdtab: 'hidden',
      		iaacc: '',
      		iatab: 'hidden',
      		auacc: '',
      		autab: 'hidden',
      		hdacc: 'hidden',
      		hdtab: 'hidden',
      		fhdacc: 'hidden',
      		fhdtab: 'hidden',
      		sacc: 'hidden',
      		dlacc: 'hidden',
      		dltab: 'hidden',
        });
    });


/* ###################################################### IN-8015 HD ###################################################### */


indoorCamsRouter.route('/IN-8015_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-8015 HD Safety Warnings',
          model: '8015',
          series: '1080p',
          type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-8015HD_Safety_Warnings.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Safety_Warnings/">Safety Warnings</a></li>',
          canonical: '/Indoor_Cameras/IN-8015_HD/Safety_Warnings/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
        });
    });

indoorCamsRouter.route('/IN-8015_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-8015 HD Warranty & Disposal',
          model: '8015',
          series: '1080p',
          type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-8015HD_Warranty.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Warranty/">Warranty</a></li>',
          canonical: '/Indoor_Cameras/IN-8015_HD/Warranty/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
        });
    });

indoorCamsRouter.route('/IN-8015_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-8015 HD Video Streaming',
          model: '8015',
          series: '1080p',
          type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-8015HD_Video_Streaming.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Video_Streaming/">Video Streaming</a></li>',
          canonical: '/Indoor_Cameras/IN-8015_HD/Video_Streaming/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
        });
    });

indoorCamsRouter.route('/IN-8015_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-8015 HD Hardware Reset',
          model: '8015',
          series: '1080p',
          type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-8015HD_Reset.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Camera_Reset/">Camera Reset</a></li>',
          canonical: '/Indoor_Cameras/IN-8015_HD/Camera_Reset/',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: '',
    		  hdacc: 'hidden',
        });
    });


indoorCamsRouter.route('/IN-8015_HD')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-8015_Overview', {
      title: 'IN-8015 HD Overview',
      model: '8015',
      series: '1080p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-8015HD.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products">Products</a></li><li><a href="/Indoor_Cameras/">Indoor Cameras</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li>',
      canonical: '/Indoor_Cameras/IN-8015_HD/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

indoorCamsRouter.route('/IN-8015_HD/Nightvision_Graph/')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-8015_Overview_Nightvision_Graph', {
          title: 'IN-8015 HD Nightvision Comparison',
        });
    });

indoorCamsRouter.route('/IN-8015_HD/Angle_Graph/')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-8015_Overview_Angle_Graph', {
          title: 'IN-8015 HD Angle of View Comparison',
        });
    });

indoorCamsRouter.route('/IN-8015_HD/8015v6012/')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-8015_Overview_8015v6012_Graph', {
          title: 'IN-8015 HD vs IN-6012 HD',
        });
    });

indoorCamsRouter.route('/IN-8015_HD/8015v3011/')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-8015_Overview_8015v3011_Graph', {
          title: 'IN-8015 HD vs IN-3011',
        });
    });

indoorCamsRouter.route('/IN-8015_HD/Usermanual')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-8015_Usermanual', {
      title: 'IN-8015 HD Usermanual',
      model: '8015',
      series: '1080p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-8015HD.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li>',
      canonical: '/Indoor_Cameras/IN-8015_HD/Usermanual/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

indoorCamsRouter.route('/IN-8015_HD/Product_Features')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-8015_Product_Features', {
      title: 'IN-8015 HD Product Features',
      model: '8015',
      series: '1080p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-8015HD_Features.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Product_Features/">Product Features</a></li>',
      canonical: '/Indoor_Cameras/IN-8015_HD/Product_Features/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

indoorCamsRouter.route('/IN-8015_HD/Point2Point')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-8015_Point2Point', {
      title: 'IN-8015 HD Point 2 Point',
      model: '8015',
      series: '1080p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-8015HD_Quick_Installation.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Point2Point/">Point2Point</a></li>',
      canonical: '/Indoor_Cameras/IN-8015_HD/Point2Point/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

indoorCamsRouter.route('/IN-8015_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-8015_Quick_Installation', {
      title: 'IN-8015 HD Quick Installation',
      model: '8015',
      series: '1080p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-8015HD_Quick_Installation.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Quick_Installation/">Quick Installation</a></li>',
      canonical: '/Indoor_Cameras/IN-8015_HD/Quick_Installation/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

indoorCamsRouter.route('/IN-8015_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-8015_Lense_Adjustment', {
      title: 'IN-8015 HD Lense Adjustment',
      model: '8015',
      series: '1080p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-8015HD_Lense_Adjust.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Lense_Adjustment/">Lense Adjustment</a></li>',
      canonical: '/Indoor_Cameras/IN-8015_HD/Lense_Adjustment/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

indoorCamsRouter.route('/IN-8015_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-8015_Tech_Specs', {
      title: 'IN-8015 HD Technical Specifications',
      model: '8015',
      series: '1080p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-8015HD_Technical_Specifications.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Technical_Specifications/">Technical Specifications</a></li>',
      canonical: '/Indoor_Cameras/IN-8015_HD/Technical_Specifications/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

indoorCamsRouter.route('/IN-8015_HD/Technical_Specifications/Power_Graph')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-8015_Tech_Specs_Power_Graph', {
          title: 'IN-8015 HD Power Consumption',
        });
    });

indoorCamsRouter.route('/IN-8015_HD/Technical_Specifications/4-2mm_Lense_Graph')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-8015_Tech_Specs_4-2mm_Lense_Graph', {
          title: 'IN-8015 HD 4.2mm Wideangle Lense',
        });
    });

indoorCamsRouter.route('/IN-8015_HD/Technical_Specifications/Image_Width_Graph')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-8015_Tech_Specs_Image_Width_Graph', {
          title: 'IN-8015 HD Image Width Comparison',
        });
    });


/* ###################################################### IN-6014 HD ###################################################### */


indoorCamsRouter.route('/IN-6014_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
      title: 'IN-6014 HD Safety Warnings',
      model: '6014',
      series: '720p',
		  type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6014HD_Safety.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Safety_Warnings/">Safety Warnings</a></li>',
      canonical: '/Indoor_Cameras/IN-6014_HD/Safety_Warnings/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
        });
    });

indoorCamsRouter.route('/IN-6014_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-6014 HD Warranty & Disposal',
          model: '6014',
          series: '720p',
		      type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-6014HD_Warranty.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Safety_Warnings/">Safety Warnings</a></li>',
          canonical: '/Indoor_Cameras/IN-6014_HD/Warranty/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
        });
    });

indoorCamsRouter.route('/IN-6014_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-6014 HD Video Streaming',
          model: '6014',
          series: '720p',
		      type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-6014HD_Video_Streaming.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Video_Streaming/">Video Streaming</a></li>',
          canonical: '/Indoor_Cameras/IN-6014_HD/Video_Streaming/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
        });
    });

indoorCamsRouter.route('/IN-6014_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-6014 HD Hardware Reset',
          model: '6014',
          series: '720p',
		      type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-6014HD_Reset.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Camera_Reset/">Camera Reset</a></li>',
          canonical: '/Indoor_Cameras/IN-6014_HD/Camera_Reset/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
        });
    });

indoorCamsRouter.route('/IN-6014_HD')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6014_Overview', {
      title: 'IN-6014 HD Overview',
      model: '6014',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6014HD.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products">Products</a></li><li><a href="/Indoor_Cameras/">Indoor Cameras</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li>',
      canonical: '/Indoor_Cameras/IN-6014_HD/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsRouter.route('/IN-6014_HD/Nightvision_Graph/')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-6014_Overview_Nightvision_Graph', {
          title: 'IN-6014 HD Nightvision Comparison',
        });
    });

indoorCamsRouter.route('/IN-6014_HD/Angle_Graph/')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-6014_Overview_Angle_Graph', {
          title: 'IN-6014 HD Angle of View Comparison',
        });
    });

indoorCamsRouter.route('/IN-6014_HD/6014v8015/')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-6014_Overview_6014v8015_Graph', {
          title: 'IN-6014 HD vs IN-8015 HD',
        });
    });

indoorCamsRouter.route('/IN-6014_HD/6014v3011/')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-6014_Overview_6014v3011_Graph', {
          title: 'IN-6014 HD vs IN-3011',
        });
    });

indoorCamsRouter.route('/IN-6014_HD/Usermanual')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6014_Usermanual', {
      title: 'IN-6014 HD Usermanual',
      model: '6014',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6014HD.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Usermanual/">Usermanual</a></li>',
      canonical: '/Indoor_Cameras/IN-6014_HD/Usermanual/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsRouter.route('/IN-6014_HD/Product_Features')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6014_Product_Features', {
      title: 'IN-6014 HD Product Features',
      model: '6014',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6014HD_Features.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Product_Features/">Product Features</a></li>',
      canonical: '/Indoor_Cameras/IN-6014_HD/Product_Features/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsRouter.route('/IN-6014_HD/Point2Point')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6014_Point2Point', {
      title: 'IN-6014 HD Point 2 Point',
      model: '6014',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6014HD_Quick_Installation.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Point2Point/">Point2Point</a></li>',
      canonical: '/Indoor_Cameras/IN-6014_HD/Point2Point/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsRouter.route('/IN-6014_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6014_Quick_Installation', {
      title: 'IN-6014 HD Quick Installation',
      model: '6014',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6014HD_Quick_Installation.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Quick_Installation/">Quick Installation</a></li>',
      canonical: '/Indoor_Cameras/IN-6014_HD/Quick_Installation/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsRouter.route('/IN-6014_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6014_Lense_Adjustment', {
      title: 'IN-6014 HD Lense Adjustment',
      model: '6014',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6014HD_Lense_Adjust.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Lense_Adjustment/">Lense Adjustment</a></li>',
      canonical: '/Indoor_Cameras/IN-6014_HD/Lense_Adjustment/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsRouter.route('/IN-6014_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6014_Tech_Specs', {
      title: 'IN-6014 HD Technical Specifications',
      model: '6014',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6014HD_Technical_Specifications.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Technical_Specifications/">Technical Specifications</a></li>',
      canonical: '/Indoor_Cameras/IN-6014_HD/Technical_Specifications/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});


/* ###################################################### IN-6012 HD ###################################################### */


indoorCamsRouter.route('/IN-6012_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-6012 HD Safety Warnings',
          model: '6012',
          series: '720p',
		      type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-6012HD_Safety_Warnings.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Safety_Warnings/">Safety Warnings</a></li>',
          canonical: '/Indoor_Cameras/IN-6012_HD/Safety_Warnings/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
        });
    });

indoorCamsRouter.route('/IN-6012_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-6012 HD Warranty & Disposal',
          model: '6012',
          series: '720p',
		      type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-6012HD_Warranty.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Warranty/">Warranty</a></li>',
          canonical: '/Indoor_Cameras/IN-6012_HD/Warranty/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
        });
    });

indoorCamsRouter.route('/IN-6012_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-6012 HD Video Streaming',
          model: '6012',
          series: '720p',
		      type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-6012HD_Video_Streaming.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Video_Streaming/">Video Streaming</a></li>',
          canonical: '/Indoor_Cameras/IN-6012_HD/Video_Streaming/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
        });
    });

indoorCamsRouter.route('/IN-6012_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-6012 HD Hardware Reset',
          model: '6012',
          series: '720p',
		      type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-6012HD_Reset.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Camera_Reset/">Camera Reset</a></li>',
          canonical: '/Indoor_Cameras/IN-6012_HD/Camera_Reset/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
        });
    });


indoorCamsRouter.route('/IN-6012_HD')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6012_Overview', {
      title: 'IN-6012 HD Overview',
      model: '6012',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6012HD.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products">Products</a></li><li><a href="/Indoor_Cameras/">Indoor Cameras</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li>',
      canonical: '/Indoor_Cameras/IN-6012_HD/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsRouter.route('/IN-6012_HD/Nightvision_Graph/')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-6012_Overview_Nightvision_Graph', {
          title: 'IN-6012 HD Nightvision Comparison',
        });
    });

indoorCamsRouter.route('/IN-6012_HD/Angle_Graph/')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-6012_Overview_Angle_Graph', {
          title: 'IN-6012 HD Angle of View Comparison',
        });
    });

indoorCamsRouter.route('/IN-6012_HD/6012v8015/')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-6012_Overview_6012v8015_Graph', {
          title: 'IN-6012 HD vs IN-8015 HD',
        });
    });

indoorCamsRouter.route('/IN-6012_HD/6012v3011/')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-6012_Overview_6012v3011_Graph', {
          title: 'IN-6012 HD vs IN-3011',
        });
    });

indoorCamsRouter.route('/IN-6012_HD/Usermanual')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6012_Usermanual', {
      title: 'IN-6012 HD Usermanual',
      model: '6012',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6012HD.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Usermanual/">Usermanual</a></li>',
      canonical: '/Indoor_Cameras/IN-6012_HD/Usermanual/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsRouter.route('/IN-6012_HD/Product_Features')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6012_Product_Features', {
      title: 'IN-6012 HD Product Features',
      model: '6012',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6012HD_Features.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Product_Features/">Product Features</a></li>',
      canonical: '/Indoor_Cameras/IN-6012_HD/Product_Features/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsRouter.route('/IN-6012_HD/Point2Point')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6012_Point2Point', {
      title: 'IN-6012 HD Point 2 Point',
      model: '6012',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6012HD_Quick_Installation.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Point2Point/">Point2Point</a></li>',
      canonical: '/Indoor_Cameras/IN-6012_HD/Point2Point/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsRouter.route('/IN-6012_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6012_Quick_Installation', {
      title: 'IN-6012 HD Quick Installation',
      model: '6012',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6012HD_Quick_Installation.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Quick_Installation/">Quick Installation</a></li>',
      canonical: '/Indoor_Cameras/IN-6012_HD/Quick_Installation/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsRouter.route('/IN-6012_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6012_Lense_Adjustment', {
      title: 'IN-6012 HD Lense Adjustment',
      model: '6012',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6012HD_Lense_Adjust.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Quick_Installation/">Quick Installation</a></li>',
      canonical: '/Indoor_Cameras/IN-6012_HD/Lense_Adjustment/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsRouter.route('/IN-6012_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6012_Tech_Specs', {
      title: 'IN-6012 HD Technical Specifications',
      model: '6012',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6012HD_Technical_Specifications.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Technical_Specifications/">Technical Specifications</a></li>',
      canonical: '/Indoor_Cameras/IN-6012_HD/Technical_Specifications/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});


/* ###################################################### IN-6001 HD ###################################################### */


indoorCamsRouter.route('/IN-6001_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-6001 HD Safety Warnings',
          model: '6001',
          series: '720p',
		      type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-6001HD_Safety.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Safety_Warnings/">Safety Warnings</a></li>',
          canonical: '/Indoor_Cameras/IN-6001_HD/Safety_Warnings/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
        });
    });

indoorCamsRouter.route('/IN-6001_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-6001 HD Warranty & Disposal',
          model: '6001',
          series: '720p',
		      type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-6001HD_Warranty.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Warranty/">Warranty</a></li>',
          canonical: '/Indoor_Cameras/IN-6001_HD/Warranty/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
        });
    });

indoorCamsRouter.route('/IN-6001_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-6001 HD Video Streaming',
          model: '6001',
          series: '720p',
		      type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-6001HD_Video_Streaming.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Video_Streaming/">Video Streaming</a></li>',
          canonical: '/Indoor_Cameras/IN-6001_HD/Video_Streaming/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
        });
    });

indoorCamsRouter.route('/IN-6001_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-6001 HD Hardware Reset',
          model: '6001',
          series: '720p',
		      type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-6001HD_Reset.jpg',
          headline: 'INSTAR Products Indoor IP Cameras',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Camera_Reset/">Camera Reset</a></li>',
          canonical: '/Indoor_Cameras/IN-6001_HD/Camera_Reset/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
        });
    });

indoorCamsRouter.route('/IN-6001_HD')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6001_Overview', {
      title: 'IN-6001 HD Overview',
      model: '6001',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6001HD.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products">Products</a></li><li><a href="/Indoor_Cameras/">Indoor Cameras</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li>',
      canonical: '/Indoor_Cameras/IN-6001_HD/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsRouter.route('/IN-6001_HD/Nightvision_Graph/')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-6001_Overview_Nightvision_Graph', {
          title: 'IN-6001 HD Nightvision Comparison',
        });
    });

indoorCamsRouter.route('/IN-6001_HD/Angle_Graph/')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-6001_Overview_Angle_Graph', {
          title: 'IN-6001 HD Angle of View Comparison',
        });
    });

indoorCamsRouter.route('/IN-6001_HD/6001v8015/')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-6001_Overview_6001v8015_Graph', {
          title: 'IN-6001 HD vs IN-8015 HD',
        });
    });

indoorCamsRouter.route('/IN-6001_HD/6001v3011/')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-6001_Overview_6001v3011_Graph', {
          title: 'IN-6001 HD vs IN-3011',
        });
    });

indoorCamsRouter.route('/IN-6001_HD/Usermanual')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6001_Usermanual', {
      title: 'IN-6001 HD Usermanual',
      model: '6001',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6001HD.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Usermanual/">Usermanual</a></li>',
      canonical: '/Indoor_Cameras/IN-6001_HD/Usermanual/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsRouter.route('/IN-6001_HD/Product_Features')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6001_Product_Features', {
      title: 'IN-6001 HD Product Features',
      model: '6001',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6001HD_Features.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Product_Features/">Product Features</a></li>',
      canonical: '/Indoor_Cameras/IN-6001_HD/Product_Features/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsRouter.route('/IN-6001_HD/Point2Point')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6001_Point2Point', {
      title: 'IN-6001 HD Point 2 Point',
      model: '6001',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6001HD_Quick_Installation.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Point2Point/">Point2Point</a></li>',
      canonical: '/Indoor_Cameras/IN-6001_HD/Point2Point/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsRouter.route('/IN-6001_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6001_Quick_Installation', {
      title: 'IN-6001 HD Quick Installation',
      model: '6001',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6001HD_Quick_Installation.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Quick_Installation/">Quick Installation</a></li>',
      canonical: '/Indoor_Cameras/IN-6001_HD/Quick_Installation/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsRouter.route('/IN-6001_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6001_Lense_Adjustment', {
      title: 'IN-6001 HD Lense Adjustment',
      model: '6001',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6001HD_Lense_Adjust.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Quick_Installation/">Quick Installation</a></li>',
      canonical: '/Indoor_Cameras/IN-6001_HD/Lense_Adjustment/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsRouter.route('/IN-6001_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6001_Tech_Specs', {
      title: 'IN-6001 HD Technical Specifications',
      model: '6001',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6001HD_Technical_Specifications.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Indoor Cams</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Usermanual/">Usermanual</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Technical_Specifications/">Technical Specifications</a></li>',
      canonical: '/Indoor_Cameras/IN-6001_HD/Technical_Specifications/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});


/* ###################################################### VGA ###################################################### */


indoorCamsRouter.route('/IN-3011')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-3011_Overview', {
      title: 'IN-3011 Overview',
      model: '3011',
      series: 'VGA',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-3011.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products">Products</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/">Indoor Cameras</a></li><li class="breadcrumb-item active"><a href="/Indoor_Cameras/IN-3011/">IN-3011</a></li>',
      canonical: '/Indoor_Cameras/IN-3011/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsRouter.route('/IN-3011/Technical_Specifications')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-3011_Tech_Specs', {
      title: 'IN-3011 Technical Specifications',
      model: '3011',
      series: 'VGA',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-3011_Technical_Specifications.jpg',
      headline: 'INSTAR Products Indoor IP Cameras',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products">Products</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/">Indoor Cameras</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/IN-3011/">IN-3011</a></li><li class="breadcrumb-item active"><a href="/Indoor_Cameras/IN-3011/Technical_Specifications/">Technical Specifications</a></li>',
      canonical: '/Indoor_Cameras/IN-3011/Technical_Specifications/',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});


module.exports = indoorCamsRouter;
