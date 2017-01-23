var express = require('express');
var softwareRouter = express.Router();
var appdata = require('../views/_partials/data/cameras.json');



/* ****************************************** GET /Software ****************************************** */
softwareRouter.route('/')
.get(function(req, res) {
  res.render('./Software/Software', {
      title: 'INSTAR Software',
    });
});

/* ****************************  GET InstarVision for Windows /Windows ************************************* */
softwareRouter.route('/Windows')
.get(function(req, res) {
  res.render('./Software/Windows', {
      title: 'Software for Windows',
    });
});

softwareRouter.route('/Windows/InstarVision')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision', {
      title: 'InstarVision for Windows',
    });
});

softwareRouter.route('/Windows/InstarVision/Camera_List')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Camera_List', {
      title: 'InstarVision v2 Camera List',
    });
});

softwareRouter.route('/Windows/InstarVision/Layout')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Layout', {
      title: 'InstarVision v2 Layout',
    });
});

softwareRouter.route('/Windows/InstarVision/PTZ')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_PTZ', {
      title: 'InstarVision v2 Pan, Tilt & Zoom',
    });
});

softwareRouter.route('/Windows/InstarVision/Image_Adjust')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Image_Adjust', {
      title: 'InstarVision v2 Image Adjust',
    });
});

softwareRouter.route('/Windows/InstarVision/Webserver')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Webserver', {
      title: 'InstarVision v2 Webserver',
    });
});

softwareRouter.route('/Windows/InstarVision/Record')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Record', {
      title: 'InstarVision v2 Record',
    });
});

softwareRouter.route('/Windows/InstarVision/Record/General')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Record_General', {
      title: 'InstarVision v2 Record General',
    });
});

softwareRouter.route('/Windows/InstarVision/Record/Schedule')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Record_Schedule', {
      title: 'InstarVision v2 Record Schedule',
    });
});

softwareRouter.route('/Windows/InstarVision/Record/Alarm')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Record_Alarm', {
      title: 'InstarVision v2 Record Alarm',
    });
});

softwareRouter.route('/Windows/InstarVision/Record/Photoseries')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Record_Photoseries', {
      title: 'InstarVision v2 Record Photoseries',
    });
});

softwareRouter.route('/Windows/InstarVision/Record/Email')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Record_Email', {
      title: 'InstarVision v2 Record Email',
    });
});

softwareRouter.route('/Windows/InstarVision/Record/FTP')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Record_FTP', {
      title: 'InstarVision v2 Record FTP',
    });
});

softwareRouter.route('/Windows/InstarVision/System')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_System', {
      title: 'InstarVision v2 System',
    });
});

softwareRouter.route('/Windows/InstarVision/Users')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Users', {
      title: 'InstarVision v2 Users',
    });
});

softwareRouter.route('/Windows/InstarVision/Advanced')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Advanced', {
      title: 'InstarVision v2 Advanced',
    });
});

softwareRouter.route('/Windows/InstarVision/Advanced/License')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Advanced_License', {
      title: 'InstarVision v2 Advanced License',
    });
});

softwareRouter.route('/Windows/InstarVision/Advanced/Log')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Advanced_Log', {
      title: 'InstarVision v2 Advanced Log',
    });
});

softwareRouter.route('/Windows/InstarVision/Advanced/Export')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Advanced_Export', {
      title: 'InstarVision v2 Advanced Export',
    });
});

softwareRouter.route('/Windows/InstarVision/Advanced/Player')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Advanced_Player', {
      title: 'InstarVision v2 Advanced Player',
    });
});

softwareRouter.route('/Windows/InstarVision/Advanced/Explorer')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Advanced_Explorer', {
      title: 'InstarVision v2 Advanced Explorer',
    });
});

softwareRouter.route('/Windows/InstarVision/About')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_About', {
      title: 'InstarVision v2 About',
    });
});

softwareRouter.route('/Windows/InstarVision/Windows_Phone')
.get(function(req, res) {
  res.render('./Software/Windows_Phone_InstarVision', {
      title: 'InstarVision for WindowsPhone',
    });
});

softwareRouter.route('/Windows/InstarVision/Windows_Phone/DDNS')
.get(function(req, res) {
  res.render('./Software/Windows_Phone_InstarVision_DDNS', {
      title: 'InstarVision for Windows Phone - DDNS',
    });
});

softwareRouter.route('/Windows/InstarVision/Windows_Phone/P2P')
.get(function(req, res) {
  res.render('./Software/Windows_Phone_InstarVision_P2P', {
      title: 'InstarVision for Windows Phone - P2P',
    });
});

softwareRouter.route('/Windows/InstarVision/Windows_Phone/Multiview')
.get(function(req, res) {
  res.render('./Software/Windows_Phone_InstarVision_Multiview', {
      title: 'InstarVision for Windows Phone - Multiview',
    });
});

softwareRouter.route('/Windows/InstarVision/Windows_Phone/Recording')
.get(function(req, res) {
  res.render('./Software/Windows_Phone_InstarVision_Recording', {
      title: 'InstarVision for Windows Phone - Recording',
    });
});

softwareRouter.route('/Windows/InstarVision/Windows_Phone/Settings')
.get(function(req, res) {
  res.render('./Software/Windows_Phone_InstarVision_Settings', {
      title: 'InstarVision for Windows Phone - Settings',
    });
});

softwareRouter.route('/Windows/InstarVision/Metro')
.get(function(req, res) {
  res.render('./Software/Windows_Metro_InstarVision', {
      title: 'InstarVision for Windows Metro',
    });
});

softwareRouter.route('/Windows/InstarVision/Metro/DDNS')
.get(function(req, res) {
  res.render('./Software/Windows_Metro_InstarVision_DDNS', {
      title: 'InstarVision for Windows Metro - DDNS',
    });
});

softwareRouter.route('/Windows/InstarVision/Metro/P2P')
.get(function(req, res) {
  res.render('./Software/Windows_Metro_InstarVision_P2P', {
      title: 'InstarVision for Windows Metro - P2P',
    });
});

softwareRouter.route('/Windows/InstarVision/Metro/Multiview')
.get(function(req, res) {
  res.render('./Software/Windows_Metro_InstarVision_Multiview', {
      title: 'InstarVision for Windows Metro - Multiview',
    });
});

softwareRouter.route('/Windows/InstarVision/Metro/Recording')
.get(function(req, res) {
  res.render('./Software/Windows_Metro_InstarVision_Recording', {
      title: 'InstarVision for Windows Metro - Recording',
    });
});

softwareRouter.route('/Windows/InstarVision/Metro/Settings')
.get(function(req, res) {
  res.render('./Software/Windows_Metro_InstarVision_Settings', {
      title: 'InstarVision for Windows Metro - Settings',
    });
});

softwareRouter.route('/Windows/iSpy')
.get(function(req, res) {
  res.render('./Software/Windows_iSpy', {
      title: 'iSpy Connect',
	  uplink: '/Products/Software/Windows/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Windows/">Windows</a></li><li><a href="/Software/Windows/iSpy/">iSpy</a></li>',
    });
});

softwareRouter.route('/Windows/Sighthound')
.get(function(req, res) {
  res.render('./Software/Windows_Sighthound', {
      title: 'Sighthound',
	  uplink: '/Products/Software/Windows/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Windows/">Windows</a></li><li><a href="/Software/Windows/Sighthound/">Sighthound</a></li>',
    });
});

softwareRouter.route('/Windows/P2P_Client')
.get(function(req, res) {
  res.render('./Software/Windows_P2P_Client', {
      title: 'P2P Client',
	  uplink: '/Products/Software/Windows/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Windows/">Windows</a></li><li><a href="/Software/Windows/P2P_Client/">P2P Client</a></li>',
    });
});

softwareRouter.route('/Windows/go1984')
.get(function(req, res) {
  res.render('./Software/Windows_go1984', {
      title: 'Logiware go1984',
	  uplink: '/Products/Software/Windows/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Windows/">Windows</a></li><li><a href="/Software/Windows/go1984/">go1984</a></li>',
    });
});

softwareRouter.route('/Windows/VLC_Player')
.get(function(req, res) {
  res.render('./Software/Windows_VLC', {
      title: 'VLC Player',
	  uplink: '/Products/Software/Windows/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Windows/">Windows</a></li><li><a href="/Software/Windows/VLC_Player/">VLC Player</a></li>',
    });
});

softwareRouter.route('/Windows/CCTV_Chrome_Plugin')
.get(function(req, res) {
  res.render('./Software/Windows_CCTV_Plugin', {
      title: 'CCTV Plugin',
	  uplink: '/Products/Software/Windows/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Windows/">Windows</a></li><li><a href="/Software/Windows/CCTV_Chrome_Plugin/">CCTV Plugin</a></li>',
    });
});

softwareRouter.route('/Windows/Blue_Iris')
.get(function(req, res) {
  res.render('./Software/Windows_Blue_Iris', {
      title: 'Blue Iris',
	  uplink: '/Products/Software/Windows/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Windows/">Windows</a></li><li><a href="/Software/Windows/Blue_Iris/">Blue Iris</a></li>',
    });
});

softwareRouter.route('/Windows/YAW_Cam')
.get(function(req, res) {
  res.render('./Software/Windows_YAW_Cam', {
      title: 'YAW Cam',
	  uplink: '/Products/Software/Windows/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Windows/">Windows</a></li><li><a href="/Software/Windows/YAW_Cam/">YAW Cam</a></li>',
    });
});

softwareRouter.route('/Windows/Zone_Trigger')
.get(function(req, res) {
  res.render('./Software/Windows_Zone_Trigger', {
      title: 'Zone Trigger',
	  uplink: '/Products/Software/Windows/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Windows/">Windows</a></li><li><a href="/Software/Windows/Zone_Trigger/">Zone Trigger</a></li>',
    });
});

softwareRouter.route('/Windows/Webcam_XP')
.get(function(req, res) {
  res.render('./Software/Windows_Webcam_XP', {
      title: 'WebcamXP',
	  uplink: '/Products/Software/Windows/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Windows/">Windows</a></li><li><a href="/Software/Windows/Webcam_XP/">Webcam XP</a></li>',
    });
});

softwareRouter.route('/Windows/Webcam_Motion_Detector')
.get(function(req, res) {
  res.render('./Software/Windows_Webcam_Motion_Detector', {
      title: 'Webcam Motion Detector',
	  uplink: '/Products/Software/Windows/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Windows/">Windows</a></li><li><a href="/Software/Windows/Webcam_Motion_Detector/">Webcam Motion Detector</a></li>',
    });
});

softwareRouter.route('/Windows/Zebra_Surveillance')
.get(function(req, res) {
  res.render('./Software/Windows_Zebra_Surveillance', {
      title: 'Zebra Surveillance',
	  uplink: '/Products/Software/Windows/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Windows/">Windows</a></li><li><a href="/Software/Windows/Zebra_Surveillance/">Zebra Surveillance</a></li>',
    });
});

/* *************************  GET InstarVision for macOS /macOS *********************************** */
softwareRouter.route('/macOS')
.get(function(req, res) {
  res.render('./Software/MacOS', {
      title: 'Software for macOS',
    });
});

softwareRouter.route('/macOS/Sighthound')
.get(function(req, res) {
  res.render('./Software/Windows_Sighthound', {
      title: 'Sighthound',
	  uplink: '/Products/Software/macOS/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/macOS/">macOS</a></li><li><a href="/Software/macOS/Sighthound/">Sighthound</a></li>',
    });
});

softwareRouter.route('/macOS/EvoCam')
.get(function(req, res) {
  res.render('./Software/macOS_EvoCam', {
      title: 'EvoCam',
	  uplink: '/Products/Software/macOS/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/macOS/">macOS</a></li><li><a href="/Software/macOS/EvoCam/">EvoCam</a></li>',
    });
});

softwareRouter.route('/macOS/VLC_Player')
.get(function(req, res) {
  res.render('./Software/Windows_VLC', {
      title: 'VLC Player',
	  uplink: '/Products/Software/macOS/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/macOS/">macOS</a></li><li><a href="/Software/macOS/VLC_Player/">VLC Player</a></li>',
    });
});

softwareRouter.route('/macOS/SecuritySpy')
.get(function(req, res) {
  res.render('./Software/macOS_SecuritySpy', {
      title: 'SecuritySpy',
	  uplink: '/Products/Software/macOS/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/macOS/">macOS</a></li><li><a href="/Software/macOS/SecuritySpy/">SecuritySpy</a></li>',
    });
});

/* ************************************ GET InstarVision for Android /Android ************************ */
softwareRouter.route('/Android')
.get(function(req, res) {
  res.render('./Software/Android', {
      title: 'Software for Android',
    });
});

softwareRouter.route('/Android/InstarVision')
.get(function(req, res) {
  res.render('./Software/Android_InstarVision', {
      title: 'InstarVision for Android',
    });
});

softwareRouter.route('/Android/InstarVision/DDNS')
.get(function(req, res) {
  res.render('./Software/Android_InstarVision_DDNS', {
      title: 'InstarVision for Android - DDNS',
    });
});

softwareRouter.route('/Android/InstarVision/P2P')
.get(function(req, res) {
  res.render('./Software/Android_InstarVision_P2P', {
      title: 'InstarVision for Android - P2P',
    });
});

softwareRouter.route('/Android/InstarVision/Multiview')
.get(function(req, res) {
  res.render('./Software/Android_InstarVision_Multiview', {
      title: 'InstarVision for Android - Multiview',
    });
});

softwareRouter.route('/Android/InstarVision/Recording')
.get(function(req, res) {
  res.render('./Software/Android_InstarVision_Recording', {
      title: 'InstarVision for Android - Recording',
    });
});

softwareRouter.route('/Android/InstarVision/Settings')
.get(function(req, res) {
  res.render('./Software/Android_InstarVision_Settings', {
      title: 'InstarVision for Android - Settings',
    });
});

softwareRouter.route('/Android/TinyCam_Monitor')
.get(function(req, res) {
  res.render('./Software/Android_TinyCam', {
      title: 'TinyCam Monitor',
	  uplink: '/Products/Software/Android/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Android/">Android</a></li><li><a href="/Software/Android/TinyCam_Monitor/">TinyCam Monitor</a></li>',
    });
});

softwareRouter.route('/Android/IP_Cam_Viewer')
.get(function(req, res) {
  res.render('./Software/Android_IP_CamViewer', {
      title: 'IP Cam Viewer',
	  uplink: '/Products/Software/Android/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Android/">Android</a></li><li><a href="/Software/Android/IP_Cam_Viewer/">IP Cam Viewer</a></li>',
    });
});

/* *********************************** GET InstarVision for iOS /iOS ******************************* */
softwareRouter.route('/iOS')
.get(function(req, res) {
  res.render('./Software/iOS', {
      title: 'Software for iOS',
    });
});

softwareRouter.route('/iOS/InstarVision/iPhone')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPhone', {
      title: 'InstarVision for iPhone',
    });
});

softwareRouter.route('/iOS/InstarVision/iPhone/DDNS')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPhone_DDNS', {
      title: 'InstarVision for iOS - DDNS',
    });
});

softwareRouter.route('/iOS/InstarVision/iPhone/P2P')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPhone_P2P', {
      title: 'InstarVision for iOS - P2P',
    });
});

softwareRouter.route('/iOS/InstarVision/iPhone/Multiview')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPhone_Multiview', {
      title: 'InstarVision for iOS - Multiview',
    });
});

softwareRouter.route('/iOS/InstarVision/iPhone/Recording')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPhone_Recording', {
      title: 'InstarVision for iOS - Recording',
    });
});

softwareRouter.route('/iOS/InstarVision/iPhone/Settings')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPhone_Settings', {
      title: 'InstarVision for iOS - Settings',
    });
});

softwareRouter.route('/iOS/InstarVision/iPad')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPad', {
      title: 'InstarVision for iPad',
    });
});

softwareRouter.route('/iOS/InstarVision/iPad/DDNS')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPad_DDNS', {
      title: 'InstarVision for iOS - DDNS',
    });
});

softwareRouter.route('/iOS/InstarVision/iPad/P2P')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPad_P2P', {
      title: 'InstarVision for iOS - P2P',
    });
});

softwareRouter.route('/iOS/InstarVision/iPad/Multiview')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPad_Multiview', {
      title: 'InstarVision for iOS - Multiview',
    });
});

softwareRouter.route('/iOS/InstarVision/iPad/Recording')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPad_Recording', {
      title: 'InstarVision for iOS - Recording',
    });
});

softwareRouter.route('/iOS/InstarVision/iPad/Settings')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPad_Settings', {
      title: 'InstarVision for iOS - Settings',
    });
});

softwareRouter.route('/iOS/InstarVision')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision', {
      title: 'InstarVision for iOS',
    });
});

softwareRouter.route('/iOS/LiveCams')
.get(function(req, res) {
  res.render('./Software/iOS_LiveCams', {
      title: 'LiveCams',
	  uplink: '/Products/Software/iOS/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/iOS/">iOS</a></li><li><a href="/Software/iOS/LiveCams/">LiveCams</a></li>',
    });
});

softwareRouter.route('/iOS/IP_Vision_Pro')
.get(function(req, res) {
  res.render('./Software/iOS_IP_Vision_Pro', {
      title: 'IP VIsion Pro',
	  uplink: '/Products/Software/iOS/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/iOS/">iOS</a></li><li><a href="/Software/iOS/IP_Vision_Pro/">IP Vision Pro</a></li>',
    });
});

softwareRouter.route('/iOS/ICCAM')
.get(function(req, res) {
  res.render('./Software/iOS_ICCAM', {
      title: 'ICCAM',
	  uplink: '/Products/Software/iOS/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/iOS/">iOS</a></li><li><a href="/Software/iOS/ICCAM/">ICCAM</a></li>',
    });
});

softwareRouter.route('/iOS/IP_Cam_Viewer')
.get(function(req, res) {
  res.render('./Software/Android_IP_CamViewer', {
      title: 'IP Cam Viewer',
	  uplink: '/Products/Software/iOS/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/iOS/">iOS</a></li><li><a href="/Software/iOS/IP_Cam_Viewer/">IP Cam Viewer</a></li>',
    });
});

softwareRouter.route('/iOS/P2P_Cam_Live')
.get(function(req, res) {
  res.render('./Software/iOS_P2P_Cam_Live', {
      title: 'P2P Cam Live',
	  uplink: '/Products/Software/iOS/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/iOS/">iOS</a></li><li><a href="/Software/iOS/P2P_Cam_Live/">P2P Cam Live</a></li>',
    });
});

/* ************************************ GET /Other_Platforms *************** */
softwareRouter.route('/Other_Platforms')
.get(function(req, res) {
  res.render('./Software/Other_Platforms', {
      title: 'Other Platforms',
    });
});

softwareRouter.route('/Other_Platforms/InstarVision_Blackberry')
.get(function(req, res) {
  res.render('./Software/Android_InstarVision_Blackberry', {
      title: 'InstarVision Blackberry',
	  uplink: '/Products/Software/Other_Platforms/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Other_Platforms/">Other</a></li><li><a href="/Software/Other_Platforms/InstarVision_Blackberry/">InstarVisione</a></li>',
    });
});

softwareRouter.route('/Other_Platforms/QNAP')
.get(function(req, res) {
  res.render('./Software/Other_Platforms_QNAP', {
      title: 'QNAP',
	  uplink: '/Products/Software/Other_Platforms/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Other_Platforms/">Other</a></li><li><a href="/Software/Other_Platforms/QNAP/">QNAP</a></li>',
    });
});

softwareRouter.route('/Other_Platforms/Synology')
.get(function(req, res) {
  res.render('./Software/Other_Platforms_Synology', {
      title: 'Synology',
	  uplink: '/Products/Software/Other_Platforms/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Other_Platforms/">Other</a></li><li><a href="/Software/Other_Platforms/Synology/">Synology</a></li>',
    });
});

softwareRouter.route('/Other_Platforms/AVM_Fritzphone')
.get(function(req, res) {
  res.render('./Software/Other_Platforms_AVM_Fritzphone', {
      title: 'AVM Fritzphone',
	  uplink: '/Products/Software/Other_Platforms/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Other_Platforms/">Other</a></li><li><a href="/Software/Other_Platforms/AVM_Fritzphone/">AVM Fritzphone</a></li>',
    });
});

module.exports = softwareRouter;
