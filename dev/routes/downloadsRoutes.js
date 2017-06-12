var express = require('express');
var downloadsRouter = express.Router();

downloadsRouter.get('/', function(req, res) {
    res.render('./Downloads/Downloads', {
        title: 'Download Area',
        ampimg: '/images/Search/P_SearchThumb_Products.jpg',
        headline: 'Download Area',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li>',
        canonical: '/Downloads/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
      });
  });

downloadsRouter.get('/Indoor_Cameras/', function(req, res) {
    res.render('./Downloads/Indoor_Cameras', {
        title: 'Download Area Indoor Cameras',
        ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras_Downloads.jpg',
        headline: 'Download Area',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Downloads/Indoor_Cameras/">Indoor Cameras</a></li>',
        canonical: '/Downloads/Indoor_Cameras/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
      });
  });

downloadsRouter.get('/Outdoor_Cameras/', function(req, res) {
    res.render('./Downloads/Outdoor_Cameras', {
        title: 'Download Area Outdoor Cameras',
        ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras_Downloads.jpg',
        headline: 'Download Area',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Downloads/Outdoor_Cameras/">Outdoor Cameras</a></li>',
        canonical: '/Downloads/Outdoor_Cameras/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
      });
  });

downloadsRouter.get('/Accessories/', function(req, res) {
    res.render('./Downloads/Accessories', {
        title: 'Download Area Accessories',
        ampimg: '/images/Search/P_SearchThumb_Products.jpg',
        headline: 'Download Area',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Downloads/Accessories/">Accessories</a></li>',
        canonical: '/Downloads/Accessories/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
      });
  });

downloadsRouter.get('/Accessories/IN-90x', function(req, res) {
    res.render('./Downloads/Accessories_IN-90x', {
        title: 'Download Area Infrared Spotlight',
        ampimg: '/images/Search/P_SearchThumb_InfraredSpotlights.jpg',
        headline: 'Download Area',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Downloads/Accessories/">Accessories</a></li><li class="breadcrumb-item"><a href="/Downloads/Accessories/IN-90x">IN-903 & IN-905</a></li>',
        canonical: '/Downloads/Accessories/IN-90x/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
      });
  });

downloadsRouter.get('/Accessories/IN-Mikro_380', function(req, res) {
    res.render('./Downloads/Accessories_IN-Mikro380', {
        title: 'Download Area IN-Mikro 380',
        ampimg: '/images/Search/P_SearchThumb_Microphones.jpg',
        headline: 'Download Area',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Downloads/Accessories/">Accessories</a></li><li class="breadcrumb-item"><a href="/Downloads/Accessories/IN-90x">IN-Mikro 380</a></li>',
        canonical: '/Downloads/Accessories/IN-Mikro_380/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
      });
  });

downloadsRouter.get('/Accessories/IN-Motion_300', function(req, res) {
    res.render('./Downloads/Accessories_IN-Motion300', {
        title: 'Download Area IN-Motion 300',
        ampimg: '/images/Search/P_SearchThumb_MotionDetector.jpg',
        headline: 'Download Area',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Downloads/Accessories/">Accessories</a></li><li class="breadcrumb-item"><a href="/Downloads/Accessories/IN-90x">IN-Motion 300</a></li>',
        canonical: '/Downloads/Accessories/IN-Motion_300/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
      });
  });

downloadsRouter.get('/Accessories/IN-Motion_500', function(req, res) {
    res.render('./Downloads/Accessories_IN-Motion500', {
        title: 'Download Area IN-Motion 500',
        ampimg: '/images/Search/P_SearchThumb_MotionDetector.jpg',
        headline: 'Download Area',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Downloads/Accessories/">Accessories</a></li><li class="breadcrumb-item"><a href="/Downloads/Accessories/IN-90x">IN-Motion 500</a></li>',
        canonical: '/Downloads/Accessories/IN-Motion_500/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
      });
  });


downloadsRouter.get('/Network_Accessories/', function(req, res) {
    res.render('./Downloads/Network_Accessories', {
        title: 'Download Area  Network Accessories',
        ampimg: '/images/Search/P_SearchThumb_Products.jpg',
        headline: 'Download Area',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Downloads/Network_Accessories/"> Network Accessories</a></li>',
        canonical: '/Downloads/Network_Accessories/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
      });
  });

downloadsRouter.get('/Network_Accessories/IN-LAN500', function(req, res) {
    res.render('./Downloads/Network_Accessories_IN-LAN500', {
        title: 'Download Area IN-LAN 500',
        ampimg: '/images/Search/P_SearchThumb_Powerline.jpg',
        headline: 'Download Area',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Downloads/Network_Accessories/"> Network Accessories</a></li><li class="breadcrumb-item"><a href="/Downloads/Network_Accessories/IN-LAN500">IN-LAN 500</a></li>',
        canonical: '/Downloads/Network_Accessories/IN-LAN500/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
      });
  });

downloadsRouter.get('/Network_Accessories/IN-PoE_1000', function(req, res) {
    res.render('./Downloads/Network_Accessories_IN-PoE1000', {
        title: 'Download Area IN-PoE1000',
        ampimg: '/images/Search/P_SearchThumb_PowerOverEthernet.jpg',
        headline: 'Download Area',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Downloads/Network_Accessories/">Network Accessories</a></li><li class="breadcrumb-item"><a href="/Downloads/Network_Accessories/IN-PoE1000">IN-PoE 1000</a></li>',
        canonical: '/Downloads/Network_Accessories/IN-PoE_1000/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
      });
  });

/* ###################################################### Mobile Apps ###################################################### */

downloadsRouter.get('/Mobile_Apps/', function(req, res) {
    res.render('./Downloads/Mobile_Apps', {
        title: 'Download Area unserer Mobilen Apps',
        ampimg: '/images/Search/P_SearchThumb_Products.jpg',
        headline: 'Download Area',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Downloads/Mobile_Apps/">Mobile Apps</a></li>',
        canonical: '/Downloads/Mobile_Apps/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
      });
  });

downloadsRouter.get('/Mobile_Apps/Android_BlackBerry/', function(req, res) {
    res.render('./Downloads/Mobile_Apps_Android_BlackBerry', {
        title: 'InstarVision Android & BlackBerry',
        ampimg: '/images/Search/P_SearchThumb_InstarVision_Android.jpg',
        headline: 'Download Area',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Downloads/Mobile_Apps/">Mobile Apps</a></li><li class="breadcrumb-item"><a href="/Downloads/Mobile_Apps/Android_BlackBerry">Android Blackberry</a></li>',
        canonical: '/Downloads/Mobile_Apps/Android_BlackBerry/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
      });
  });

downloadsRouter.get('/Mobile_Apps/iOS/', function(req, res) {
    res.render('./Downloads/Mobile_Apps_iOS', {
        title: 'InstarVision iOS',
        ampimg: '/images/Search/P_SearchThumb_Products.jpg',
        headline: 'Download Area',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Downloads/Mobile_Apps/">Mobile Apps</a></li><li class="breadcrumb-item"><a href="/Downloads/Mobile_Apps/iOS">iOS</a></li>',
        canonical: '/Downloads/Mobile_Apps/iOS/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
      });
  });

downloadsRouter.get('/Mobile_Apps/Windows_Phone/', function(req, res) {
    res.render('./Downloads/Desktop_Software_InstarVision_Metro', {
        title: 'InstarVision Windows Phone',
        ampimg: '/images/Search/P_SearchThumb_InstarVision_WP.jpg',
        headline: 'Download Area',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Downloads/Mobile_Apps/">Mobile Apps</a></li><li class="breadcrumb-item"><a href="/Downloads/Mobile_Apps/Windows_Phone/">Windows Phone</a></li>',
        canonical: '/Downloads/Mobile_Apps/Windows_Phone/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
      });
  });

/* ###################################################### Desktop Software###################################################### */

downloadsRouter.get('/Desktop_Software/', function(req, res) {
    res.render('./Downloads/Desktop_Software', {
        title: 'Download Area Desktop Software',
        ampimg: '/images/Search/P_SearchThumb_Products.jpg',
        headline: 'Download Area',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Downloads/Desktop_Software/">Desktop Software</a></li>',
        canonical: '/Downloads/Desktop_Software/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
      });
  });

downloadsRouter.get('/Desktop_Software/InstarVision', function(req, res) {
    res.render('./Downloads/Desktop_Software_InstarVision', {
        title: 'Download Area InstarVision Desktop Software',
        ampimg: '/images/Search/P_SearchThumb_InstarVision_Windows.jpg',
        headline: 'Download Area',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Downloads/Desktop_Software/">Desktop Software</a></li><li class="breadcrumb-item"><a href="/Downloads/Desktop_Software/InstarVision">InstarVision</a></li>',
        canonical: '/Downloads/Desktop_Software/InstarVision/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
      });
  });

downloadsRouter.get('/Desktop_Software/InstarVision_Metro/', function(req, res) {
    res.render('./Downloads/Desktop_Software_InstarVision_Metro', {
        title: 'Download Area InstarVision Desktop Software',
        ampimg: '/images/Search/P_SearchThumb_InstarVision_Metro.jpg',
        headline: 'Download Area',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Downloads/Desktop_Software/">Desktop Software</a></li><li class="breadcrumb-item"><a href="/Downloads/Desktop_Software/InstarVision_Metro">InstarVision Metro</a></li>',
        canonical: '/Downloads/Desktop_Software/InstarVision_Metro/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
      });
  });

downloadsRouter.get('/Desktop_Software/Instar_Camera_Tool', function(req, res) {
    res.render('./Downloads/Desktop_Software_InstarCameraTool', {
        title: 'Download Area INSTAR Camera Tools',
        ampimg: '/images/Search/P_SearchThumb_InstarVision_Metro.jpg',
        headline: 'Download Area',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Downloads/Desktop_Software/">Desktop Software</a></li><li class="breadcrumb-item"><a href="/Downloads/Desktop_Software/InstarCameraTool">Camera Tool</a></li>',
        canonical: '/Downloads/Desktop_Software/Instar_Camera_Tool/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
      });
  });

/* ###################################################### Indoor Cameras ###################################################### */

downloadsRouter.route('/Indoor_Cameras/IN-8015_HD/')
.get(function(req, res) {
  res.render('./Downloads/Indoor_Cameras_8015', {
      title: 'IN-8015 HD Downloads',
      ampimg: '/images/Search/Search/P_SearchThumb_IN-8015HD_Downloads.jpg',
      headline: 'INSTAR Products IN-8015 HD',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Indoor_Cameras">Indoor Cameras</a></li><li><a href="/Downloads/Indoor_Cameras/IN-8015_HD">IN-8015 HD</a></li>',
      canonical: '/Downloads/Indoor_Cameras/IN-8015_HD/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
    });
});

downloadsRouter.route('/Indoor_Cameras/IN-6014_HD/')
.get(function(req, res) {
  res.render('./Downloads/Indoor_Cameras_6014', {
      title: 'IN-6014 HD Downloads',
      ampimg: '/images/Search/Search/P_SearchThumb_IN-6014HD_Downloads.jpg',
      headline: 'INSTAR Products IN-6014 HD',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Indoor_Cameras">Indoor Cameras</a></li><li><a href="/Downloads/Indoor_Cameras/IN-6014_HD">IN-6014 HD</a></li>',
      canonical: '/Downloads/Indoor_Cameras/IN-6014_HD/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
    });
});

downloadsRouter.route('/Indoor_Cameras/IN-6012_HD/')
.get(function(req, res) {
  res.render('./Downloads/Indoor_Cameras_6012', {
      title: 'IN-6012 HD Downloads',
      ampimg: '/images/Search/Search/P_SearchThumb_IN-6012HD_Downloads.jpg',
      headline: 'INSTAR Products IN-6012 HD',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Indoor_Cameras">Indoor Cameras</a></li><li><a href="/Downloads/Indoor_Cameras/IN-6012_HD">IN-6012 HD</a></li>',
      canonical: '/Downloads/Indoor_Cameras/IN-6012_HD/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
    });
});

downloadsRouter.route('/Indoor_Cameras/IN-6001_HD/')
.get(function(req, res) {
  res.render('./Downloads/Indoor_Cameras_6001', {
      title: 'IN-6001 HD Downloads',
      ampimg: '/images/Search/Search/P_SearchThumb_IN-6001HD_Downloads.jpg',
      headline: 'INSTAR Products IN-6001 HD',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Indoor_Cameras">Indoor Cameras</a></li><li><a href="/Downloads/Indoor_Cameras/IN-6001_HD">IN-6001 HD</a></li>',
      canonical: '/Downloads/Indoor_Cameras/IN-6001_HD/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
    });
});

downloadsRouter.route('/Indoor_Cameras/IN-3011/')
.get(function(req, res) {
  res.render('./Downloads/Indoor_Cameras_3011', {
      title: 'IN-3011 Downloads',
      ampimg: '/images/Search/Search/P_SearchThumb_IN-3011_Downloads.jpg',
      headline: 'INSTAR Products IN-3011',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Indoor_Cameras">Indoor Cameras</a></li><li><a href="/Downloads/Indoor_Cameras/IN-3011">IN-3011</a></li>',
      canonical: '/Downloads/Indoor_Cameras/IN-3011/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
    });
});

downloadsRouter.route('/Indoor_Cameras/IN-3010/')
.get(function(req, res) {
  res.render('./Downloads/Indoor_Cameras_3010', {
      title: 'IN-3010 Downloads',
      ampimg: '/images/Search/Search/P_SearchThumb_IN-3011_Downloads.jpg',
      headline: 'INSTAR Products IN-3010',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Indoor_Cameras">Indoor Cameras</a></li><li><a href="/Downloads/Indoor_Cameras/IN-3010">IN-3010</a></li>',
      canonical: '/Downloads/Indoor_Cameras/IN-3010/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
    });
});

downloadsRouter.route('/Indoor_Cameras/IN-3003/')
.get(function(req, res) {
  res.render('./Downloads/Indoor_Cameras_3003', {
      title: 'IN-3003 Downloads',
      ampimg: '/images/Search/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products IN-3003',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Indoor_Cameras">Indoor Cameras</a></li><li><a href="/Downloads/Indoor_Cameras/IN-3003">IN-3003</a></li>',
      canonical: '/Downloads/Indoor_Cameras/IN-3003/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
    });
});

downloadsRouter.route('/Indoor_Cameras/IN-3001/')
.get(function(req, res) {
  res.render('./Downloads/Indoor_Cameras_3001', {
      title: 'IN-3001 Downloads',
      ampimg: '/images/Search/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Products IN-3001',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Indoor_Cameras">Indoor Cameras</a></li><li><a href="/Downloads/Indoor_Cameras/IN-3001">IN-3001</a></li>',
      canonical: '/Downloads/Indoor_Cameras/IN-3001/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
    });
});

/* ###################################################### Outdoor Cameras ###################################################### */

downloadsRouter.route('/Outdoor_Cameras/IN-9008_HD/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_9008', {
      title: 'IN-9008 HD Downloads',
      ampimg: '/images/Search/Search/P_SearchThumb_IN-9008HD_Downloads.jpg',
      headline: 'INSTAR Products IN-9008 HD',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Outdoor Cameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-9008_HD/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
    });
});

downloadsRouter.route('/Outdoor_Cameras/IN-7011_HD/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_7011', {
      title: 'IN-7011 HD Downloads',
      ampimg: '/images/Search/Search/P_SearchThumb_IN-7011HD_Downloads.jpg',
      headline: 'INSTAR Products IN-7011 HD',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Outdoor Cameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-7011_HD/">IN-7011 HD</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-7011_HD/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
    });
});

downloadsRouter.route('/Outdoor_Cameras/IN-5907_HD/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_5907', {
      title: 'IN-5907 HD Downloads',
      ampimg: '/images/Search/Search/P_SearchThumb_IN-5907HD_Downloads.jpg',
      headline: 'INSTAR Products IN-5907 HD',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Outdoor Cameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-5907_HD/">IN-5907 HD</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-5907_HD/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
    });
});

downloadsRouter.route('/Outdoor_Cameras/IN-5905_HD/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_5905', {
      title: 'IN-5905 HD Downloads',
      ampimg: '/images/Search/Search/P_SearchThumb_IN-5905HD_Downloads.jpg',
      headline: 'INSTAR Products IN-5905 HD',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Outdoor Cameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-5905_HD/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
    });
});


downloadsRouter.route('/Outdoor_Cameras/IN-4011/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_4011', {
      title: 'IN-4011 Downloads',
      ampimg: '/images/Search/Search/P_SearchThumb_IN-4011_Downloads.jpg',
      headline: 'INSTAR Products IN-4011',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Outdoor Cameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-4011/">IN-4011</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-4011/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
    });
});

downloadsRouter.route('/Outdoor_Cameras/IN-4010_V2/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_4010', {
      title: 'IN-4010 V2 Downloads',
      ampimg: '/images/Search/Search/P_SearchThumb_IN-4010_Downloads.jpg',
      headline: 'INSTAR Products IN-4010 V2',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Outdoor Cameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-4010_V2/">IN-4010 V2</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-4010_V2/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
    });
});

downloadsRouter.route('/Outdoor_Cameras/IN-4009/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_4009', {
      title: 'IN-4009 Downloads',
      ampimg: '/images/Search/Search/P_SearchThumb_IN-4010_Downloads.jpg',
      headline: 'INSTAR Products IN-4009',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Outdoor Cameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-4009/">IN-4009</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-4009/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
    });
});

downloadsRouter.route('/Outdoor_Cameras/IN-2908/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_2908', {
      title: 'IN-2908 Downloads',
      ampimg: '/images/Search/Search/P_SearchThumb_IN-2908_Downloads.jpg',
      headline: 'INSTAR Products IN-2908',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Outdoor Cameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-2908/">IN-2908</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-2908/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
    });
});

downloadsRouter.route('/Outdoor_Cameras/IN-2905_V2/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_2905', {
      title: 'IN-2905 V2 Downloads',
      ampimg: '/images/Search/Search/P_SearchThumb_IN-2905_Downloads.jpg',
      headline: 'INSTAR Products IN-2905 V2',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Outdoor Cameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-2905_V2/">IN-2905 V2</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-2905_V2/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
    });
});

downloadsRouter.route('/Outdoor_Cameras/IN-2904/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_2904', {
      title: 'IN-2904 Downloads',
      ampimg: '/images/Search/Search/P_SearchThumb_OutdoorCams.jpg',
      headline: 'INSTAR Products IN-2904',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Outdoor Cameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-2904/">IN-2904</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-2904/',
		pacc: '',
		ptab: 'hidden',
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
		dlacc: '',
		dltab: '',
    });
});

module.exports = downloadsRouter;
