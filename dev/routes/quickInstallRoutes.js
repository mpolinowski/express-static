var express = require('express');
var quickInstallRouter = express.Router();
var appdata = require('../views/_partials/data/quickInstall.json');

/* GET quickInstall page. */
quickInstallRouter.route('/')
    .get(function(req, res) {
    res.render('./Quick_Installation/Quick_Installation', {
        title: 'Quick Installation',
        ampimg: '/images/Search/QI_SearchThumb_HowDoesAnIPCameraWork.jpg',
        headline: 'Quick Installation',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Quick_Installation/">Quick Installation</a></li>',
      });
  });

/* GET How Does An IP Camera Work? /How_Does_An_IP_Camera_Work */
quickInstallRouter.route('/How_Does_An_IP_Camera_Work')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_Does_An_IP_Camera_Work', {
            title: 'How Does An IP Camera Work?',
            uplink: '/Quick_Installation/',
            ampimg: '/images/Search/QI_SearchThumb_HowDoesAnIPCameraWork.jpg',
            headline: 'How Does An IP Camera Work?',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/How_Does_An_IP_Camera_Work/">How Does it Work?</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET First Steps to get your IP camera working /First_Steps */
quickInstallRouter.route('/First_Steps')
    .get(function(req, res) {
        res.render('./Quick_Installation/First_Steps', {
            title: 'First Steps to get your IP camera working',
            uplink: '/Quick_Installation/',
            ampimg: '/images/Search/QI_SearchThumb_FirstStepsWithYourIPCamera.jpg',
            headline: 'First Steps to get your IP camera working',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/First_Steps/">First Steps</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET After unpacking your INSTAR IP Camera /After_Unpacking */
quickInstallRouter.route('/After_Unpacking')
    .get(function(req, res) {
        res.render('./Quick_Installation/After_Unpacking', {
            title: 'After unpacking your INSTAR IP Camera',
            uplink: '/Quick_Installation/',
            ampimg: '/images/Search/QI_SearchThumb_AfterUnpackingYourIPCamera.jpg',
            headline: 'After unpacking your INSTAR IP Camera',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/After_Unpacking/">After Unpacking</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Direct connection with a PC or Notebook /Direct_LAN_Connection */
quickInstallRouter.route('/Direct_LAN_Connection')
    .get(function(req, res) {
        res.render('./Quick_Installation/Direct_LAN_Connection', {
            title: 'Direct connection with a PC or Notebook',
            uplink: '/Quick_Installation/',
            ampimg: '/images/Search/QI_SearchThumb_DirectConnectionWithYourPC.jpg',
            headline: 'Direct connection with a PC or Notebook',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/Direct_LAN_Connection/">Direct Connection with your PC</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Find your IP Camera with an IP Scanner /Alternative_IP_Scanner */
quickInstallRouter.route('/Alternative_IP_Scanner')
    .get(function(req, res) {
        res.render('./Quick_Installation/Alternative_IP_Scanner', {
            title: 'How to find your IP Camera with an alternative IP Scanner',
            uplink: '/Quick_Installation/',
            ampimg: '/images/Search/QI_SearchThumb_AlternativeIPScanner_eng.jpg',
            headline: 'How to find your IP Camera with an alternative IP Scanner',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/Alternative_IP_Scanner/">Alternative IP Scanner</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Angry IP Scanner /Angry_IP_Scanner */
quickInstallRouter.route('/Alternative_IP_Scanner/Angry_IP_Scanner')
    .get(function(req, res) {
        res.render('./Quick_Installation/Angry_IP_Scanner', {
            title: 'Angry IP Scanner',
            uplink: '/Quick_Installation/Alternative_IP_Scanner/',
            ampimg: '/images/Search/QI_SearchThumb_AlternativeIPScanner_eng.jpg',
            headline: 'Angry IP Scanner',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/Alternative_IP_Scanner/">Alternative IP Scanner</a></li><li><a href="/Quick_Installation/Alternative_IP_Scanner/Angry_IP_Scanner/">Angry IP Scanner</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Fing CLI /Fing_CLI */
quickInstallRouter.route('/Alternative_IP_Scanner/Fing_CLI')
    .get(function(req, res) {
        res.render('./Quick_Installation/Fing_CLI', {
            title: 'Fing IP Scanner - Command Line Interface',
            uplink: '/Quick_Installation/Alternative_IP_Scanner/',
            ampimg: '/images/Search/QI_SearchThumb_AlternativeIPScanner_eng.jpg',
            headline: 'Fing CLI',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/Alternative_IP_Scanner/">Alternative IP Scanner</a></li><li><a href="/Quick_Installation/Alternative_IP_Scanner/Fing_CLI/">Fing CLI</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Fing Mobile /Fing_Mobile */
quickInstallRouter.route('/Alternative_IP_Scanner/Fing_Mobile')
    .get(function(req, res) {
        res.render('./Quick_Installation/Fing_Mobile', {
            title: 'Fing IP Scanner - Mobile App',
            uplink: '/Quick_Installation/Alternative_IP_Scanner/',
            ampimg: '/images/Search/QI_SearchThumb_AlternativeIPScanner_eng.jpg',
            headline: 'Fing Mobile',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/Alternative_IP_Scanner/">Alternative IP Scanner</a></li><li><a href="/Quick_Installation/Alternative_IP_Scanner/Fing_Mobile/">Fing Mobile</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Language Selection /Language_Selection */
quickInstallRouter.route('/Language_Selection')
    .get(function(req, res) {
        res.render('./Quick_Installation/Language_Selection', {
            title: 'Language Selection',
            uplink: '/Quick_Installation/',
            ampimg: '/images/Search/QI_SearchThumb_LanguageSettings.jpg',
            headline: 'Language Selection',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/Language_Selection/">Language Selection</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallRouter.route('/Live_Video')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video', {
            title: 'Live Video',
            uplink: '/Quick_Installation/',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo.jpg',
            headline: 'Live Video',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/Live_Video/">Live Video</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallRouter.route('/Live_Video/ActiveX')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_ActiveX', {
            title: 'Live Video ActiveX',
            uplink: '/Quick_Installation/Live_Video/',
            ampimg: '/images/Search/QI_SearchThumb_ActiveXPluginSetup.jpg',
            headline: 'Live Video ActiveX',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/Live_Video/">Live Video</a></li><li><a href="/Quick_Installation/Live_Video/ActiveX/">ActiveX</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallRouter.route('/Live_Video/QuickTime')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_QuickTime', {
            title: 'Live Video QuickTime',
            uplink: '/Quick_Installation/Live_Video/',
            ampimg: '/images/Search/QI_SearchThumb_QuickTimePluginSetup.jpg',
            headline: 'Live Video Quicktime',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/Live_Video/">Live Video</a></li><li><a href="/Quick_Installation/Live_Video/QuickTime/">QuickTime</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallRouter.route('/Live_Video/MJPEG')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_MJPEG', {
            title: 'Live Video MJPEG',
            uplink: '/Quick_Installation/Live_Video/',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideoInMicrosoftEdge.jpg',
            headline: 'Live Video MJPEG',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/Live_Video/">Live Video</a></li><li><a href="/Quick_Installation/Live_Video/MJPEG/">MJPEG</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallRouter.route('/Live_Video/Troubleshooting/Avast')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_Avast', {
            title: 'Live Video Avast',
            uplink: '/Quick_Installation/Live_Video/',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo.jpg',
            headline: 'Live Video Troubleshooting Avast',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/Live_Video/">Live Video</a></li><li><a href="/Quick_Installation/Live_Video/Troubleshooting/Avast/">AVAST</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallRouter.route('/Live_Video/Troubleshooting/Kaspersky_2013')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_Kaspersky_2013', {
            title: 'Live Video Kaspersky 2013',
            uplink: '/Quick_Installation/Live_Video/',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo.jpg',
            headline: 'Live Video Troubleshooting Kaspersky 2013',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/Live_Video/">Live Video</a></li><li><a href="/Quick_Installation/Live_Video/Troubleshooting/Kaspersky_2013/">Kaspersky 2013</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallRouter.route('/Live_Video/Troubleshooting/Kaspersky_2014')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_Kaspersky_2014', {
            title: 'Live Video Kaspersky 2014',
            uplink: '/Quick_Installation/Live_Video/',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo.jpg',
            headline: 'Live Video TroubleshootingKaspersky 2014',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/Live_Video/">Live Video</a></li><li><a href="/Quick_Installation/Live_Video/Troubleshooting/Kaspersky_2014/">Kaspersky 2014</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallRouter.route('/Live_Video/Troubleshooting/Kaspersky_2017')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_Kaspersky_2017', {
            title: 'Live Video Kaspersky 2017',
            uplink: '/Quick_Installation/Live_Video/',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo.jpg',
            headline: 'Live Video Troubleshooting Kaspersky 2017',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/Live_Video/">Live Video</a></li><li><a href="/Quick_Installation/Live_Video/Troubleshooting/Kaspersky_2017/">Kaspersky 2017</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallRouter.route('/Live_Video/Troubleshooting/AVG')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_AVG', {
            title: 'Live Video AVG',
            uplink: '/Quick_Installation/Live_Video/',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo.jpg',
            headline: 'Live Video Troubleshooting AVG',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/Live_Video/">Live Video</a></li><li><a href="/Quick_Installation/Live_Video/Troubleshooting/AVG/">AVG</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallRouter.route('/Live_Video/Troubleshooting/GDATA')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_GDATA', {
            title: 'Live Video GDATA',
            uplink: '/Quick_Installation/Live_Video/',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo.jpg',
            headline: 'Live Video Troubleshooting GDATA',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/Live_Video/">Live Video</a></li><li><a href="/Quick_Installation/Live_Video/Troubleshooting/GDATA/">GDATA</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallRouter.route('/Live_Video/Troubleshooting/AVIRA')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_AVIRA', {
            title: 'Live Video AVIRA',
            uplink: '/Quick_Installation/Live_Video/',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo.jpg',
            headline: 'Live Video Troubleshooting AVIRA',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/Live_Video/">Live Video</a></li><li><a href="/Quick_Installation/Live_Video/Troubleshooting/Avira/">Avira</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallRouter.route('/Live_Video/Troubleshooting/F-Secure')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_F-Secure', {
            title: 'Live Video F-Secure',
            uplink: '/Quick_Installation/Live_Video/',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo.jpg',
            headline: 'Live Video Troubleshooting F-Secure',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/Live_Video/">Live Video</a></li><li><a href="/Quick_Installation/Live_Video/Troubleshooting/F-Secure/">F-Secure</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Creating user accounts on your camera /Creating_User_Accounts */
quickInstallRouter.route('/Creating_User_Accounts')
    .get(function(req, res) {
        res.render('./Quick_Installation/Creating_User_Accounts', {
            title: 'Creating user accounts on your camera',
            uplink: '/Quick_Installation/',
            ampimg: '/images/Search/QI_SearchThumb_CreatingUserAccounts.jpg',
            headline: 'Creating user accounts on your camera',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/Creating_User_Accounts/">Creating user accounts on your camera</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET WebUI and Firmware Upgrade /WebUI_And_Firmware_Upgrade */
quickInstallRouter.route('/WebUI_And_Firmware_Upgrade')
    .get(function(req, res) {
        res.render('./Quick_Installation/WebUI_And_Firmware_Upgrade', {
            title: 'WebUI and Firmware Upgrade',
            uplink: '/Quick_Installation/',
            ampimg: '/images/Search/QI_SearchThumb_WebUIFirmwareUpgrade.jpg',
            headline: 'WebUI and Firmware Upgrade',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/WebUI_And_Firmware_Upgrade/">Software Upgrade</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET /WebUI_And_Firmware_Upgrade_HD */
quickInstallRouter.route('/WebUI_And_Firmware_Upgrade/720p_Cameras')
    .get(function(req, res) {
        res.render('./Quick_Installation/WebUI_And_Firmware_Upgrade_HD', {
            title: 'WebUI and Firmware Upgrade for HD Cameras',
            uplink: '/Quick_Installation/WebUI_And_Firmware_Upgrade/',
            ampimg: '/images/Search/QI_SearchThumb_WebUIFirmwareUpgrade.jpg',
            headline: 'VGA WebUI and Firmware Upgrade',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/WebUI_And_Firmware_Upgrade/">Software Upgrade</a></li><li><a href="/Quick_Installation/WebUI_And_Firmware_Upgrade/HD_Cameras/">HD Cameras</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET /WebUI_And_Firmware_Upgrade_VGA */
quickInstallRouter.route('/WebUI_And_Firmware_Upgrade/VGA_Cameras')
    .get(function(req, res) {
        res.render('./Quick_Installation/WebUI_And_Firmware_Upgrade_VGA', {
            title: 'WebUI and Firmware Upgrade for VGA Cameras',
            uplink: '/Quick_Installation/WebUI_And_Firmware_Upgrade/',
            ampimg: '/images/Search/QI_SearchThumb_WebUIFirmwareUpgrade.jpg',
            headline: 'HD WebUI and Firmware Upgrade',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/WebUI_And_Firmware_Upgrade/">Software Upgrade</a></li><li><a href="/Quick_Installation/WebUI_And_Firmware_Upgrade/VGA_Cameras/">VGA Cameras</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET /How_To_Clear_Your_Browsing_History */
quickInstallRouter.route('/How_To_Clear_Your_Browsing_History')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History', {
            title: 'How to clear your Browsing History',
            uplink: '/Quick_Installation/',
            ampimg: '/images/Search/QI_SearchThumb_ClearBrowsingHistory.jpg',
            headline: 'How to clear your Browsing History',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/How_To_Clear_Your_Browsing_History/">How to clear your Browsing History</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET /Internet_Explorer */
quickInstallRouter.route('/How_To_Clear_Your_Browsing_History/Internet_Explorer')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Internet_Explorer', {
            title: 'How to clear your Browsing History Internet Explorer',
            uplink: '/Quick_Installation/How_To_Clear_Your_Browsing_History/',
            ampimg: '/images/Search/QI_SearchThumb_ClearBrowsingHistory.jpg',
            headline: 'How to clear your Browsing History Internet Explorer',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/How_To_Clear_Your_Browsing_History/">Browsing History</a></li><li><a href="/Quick_Installation/How_To_Clear_Your_Browsing_History/Internet_Explorer/">Internet Explorer</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET /Mozilla_Firefox */
quickInstallRouter.route('/How_To_Clear_Your_Browsing_History/Mozilla_Firefox')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Mozilla_Firefox', {
            title: 'How to clear your Browsing History Mozilla Firefox',
            uplink: '/Quick_Installation/How_To_Clear_Your_Browsing_History/',
            ampimg: '/images/Search/QI_SearchThumb_ClearBrowsingHistory.jpg',
            headline: 'How to clear your Browsing History Mozilla Firefox',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/How_To_Clear_Your_Browsing_History/">Browsing History</a></li><li><a href="/Quick_Installation/How_To_Clear_Your_Browsing_History/Mozilla_Firefox/">Mozilla Firefox</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET /Google_Chromium */
quickInstallRouter.route('/How_To_Clear_Your_Browsing_History/Google_Chromium')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Google_Chromium', {
            title: 'How to clear your Browsing History Google Chromium',
            uplink: '/Quick_Installation/How_To_Clear_Your_Browsing_History/',
            ampimg: '/images/Search/QI_SearchThumb_ClearBrowsingHistory.jpg',
            headline: 'How to clear your Browsing History Google Chromium',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/How_To_Clear_Your_Browsing_History/">Browsing History</a></li><li><a href="/Quick_Installation/How_To_Clear_Your_Browsing_History/Google_Chromium/">Google Chromium</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET /Opera */
quickInstallRouter.route('/How_To_Clear_Your_Browsing_History/Opera')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Opera', {
            title: 'How to clear your Browsing History Opera',
            uplink: '/Quick_Installation/How_To_Clear_Your_Browsing_History/',
            ampimg: '/images/Search/QI_SearchThumb_ClearBrowsingHistory.jpg',
            headline: 'How to clear your Browsing History Opera',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/How_To_Clear_Your_Browsing_History/">Browsing History</a></li><li><a href="/Quick_Installation/How_To_Clear_Your_Browsing_History/Opera/">Opera</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET /Microsoft_Edge */
quickInstallRouter.route('/How_To_Clear_Your_Browsing_History/Microsoft_Edge')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Microsoft_Edge', {
            title: 'How to clear your Browsing History Microsoft Edge',
            uplink: '/Quick_Installation/How_To_Clear_Your_Browsing_History/',
            ampimg: '/images/Search/QI_SearchThumb_ClearBrowsingHistory.jpg',
            headline: 'How to clear your Browsing History Microsoft Edge',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/How_To_Clear_Your_Browsing_History/">Browsing History</a></li><li><a href="/Quick_Installation/How_To_Clear_Your_Browsing_History/Microsoft_Edge/">Microsoft Edge</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET /Vivaldi */
quickInstallRouter.route('/How_To_Clear_Your_Browsing_History/Vivaldi')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Vivaldi', {
            title: 'How to clear your Browsing History Vivaldi',
            uplink: '/Quick_Installation/How_To_Clear_Your_Browsing_History/',
            ampimg: '/images/Search/QI_SearchThumb_ClearBrowsingHistory.jpg',
            headline: 'How to clear your Browsing History Vivaldi',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/How_To_Clear_Your_Browsing_History/">Browsing History</a></li><li><a href="/Quick_Installation/How_To_Clear_Your_Browsing_History/Vivaldi/">Vivaldi</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET How to set up a Wireless Connection /Set_Up_A_Wireless_Connection */
quickInstallRouter.route('/Set_Up_A_Wireless_Connection')
    .get(function(req, res) {
        res.render('./Quick_Installation/Set_Up_A_Wireless_Connection', {
            title: 'How to set up a Wireless Connection',
            uplink: '/Quick_Installation/',
            ampimg: '/images/Search/QI_SearchThumb_WLAN.jpg',
            headline: 'How to set up a Wireless Connection',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/Set_Up_A_Wireless_Connection/">How to set up a Wireless Connection</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET /ONVIF */
quickInstallRouter.route('/ONVIF')
    .get(function(req, res) {
        res.render('./Quick_Installation/ONVIF', {
            title: 'ONVIF',
            uplink: '/Quick_Installation/',
            ampimg: '/images/Search/QI_SearchThumb_QuickInstallation.jpg',
            headline: 'ONVIF',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Quick Installation</a></li><li><a href="/Quick_Installation/ONVIF/">ONVIF</a></li>',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
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
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

module.exports = quickInstallRouter;
