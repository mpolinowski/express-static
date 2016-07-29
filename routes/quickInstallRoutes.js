var express = require('express');
var quickInstallRouter = express.Router();
var appdata = require('../views/_partials/data/quickInstall.json');

/* GET quickInstall page. */
quickInstallRouter.get('/', function(req, res) {

    var qiPicture = []; /* Get all Pictures from gallery.json for the gallery */
    var qiPictureAlt = [];
    var qiHref = [];
    appdata.articles.forEach(function(item) {
        qiPicture = qiPicture.concat(item.qiPic);
        qiPictureAlt = qiPictureAlt.concat(item.qiPicAlt);
        qiHref = qiHref.concat(item.qiUrl);
      });

    res.render('./Quick_Installation/Quick_Installation', {
        title: 'Quick Installation',
        qiPic: qiPicture,
        qiPicAlt: qiPictureAlt,
        qiUrl: qiHref,
      });
  });

/* GET How Does An IP Camera Work? /How_Does_An_IP_Camera_Work */
quickInstallRouter.route('/How_Does_An_IP_Camera_Work')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_Does_An_IP_Camera_Work', {
            title: 'How Does An IP Camera Work?',
          });
      });

/* GET First Steps to get your IP camera working /First_Steps */
quickInstallRouter.route('/First_Steps')
    .get(function(req, res) {
        res.render('./Quick_Installation/First_Steps', {
            title: 'First Steps to get your IP camera working',
          });
      });

/* GET After unpacking your INSTAR IP Camera /After_Unpacking */
quickInstallRouter.route('/After_Unpacking')
    .get(function(req, res) {
        res.render('./Quick_Installation/After_Unpacking', {
            title: 'After unpacking your INSTAR IP Camera',
          });
      });

/* GET Direct connection with a PC or Notebook /Direct_LAN_Connection */
quickInstallRouter.route('/Direct_LAN_Connection')
    .get(function(req, res) {
        res.render('./Quick_Installation/Direct_LAN_Connection', {
            title: 'Direct connection with a PC or Notebook',
          });
      });

/* GET Find your IP Camera with an IP Scanner /Alternative_IP_Scanner */
quickInstallRouter.route('/Alternative_IP_Scanner')
    .get(function(req, res) {
        res.render('./Quick_Installation/Alternative_IP_Scanner', {
            title: 'How to find your IP Camera with an alternative IP Scanner',
          });
      });

/* GET Angry IP Scanner /Angry_IP_Scanner */
quickInstallRouter.route('/Alternative_IP_Scanner/Angry_IP_Scanner')
    .get(function(req, res) {
        res.render('./Quick_Installation/Angry_IP_Scanner', {
            title: 'Angry IP Scanner',
          });
      });

/* GET Fing CLI /Fing_CLI */
quickInstallRouter.route('/Alternative_IP_Scanner/Fing_CLI')
    .get(function(req, res) {
        res.render('./Quick_Installation/Fing_CLI', {
            title: 'Fing IP Scanner - Command Line Interface',
          });
      });

/* GET Fing Mobile /Fing_Mobile */
quickInstallRouter.route('/Alternative_IP_Scanner/Fing_Mobile')
    .get(function(req, res) {
        res.render('./Quick_Installation/Fing_Mobile', {
            title: 'Fing IP Scanner - Mobile App',
          });
      });

/* GET Language Selection /Language_Selection */
quickInstallRouter.route('/Language_Selection')
    .get(function(req, res) {
        res.render('./Quick_Installation/Language_Selection', {
            title: 'Language Selection',
          });
      });

/* GET Creating user accounts on your camera /Creating_User_Accounts */
quickInstallRouter.route('/Creating_User_Accounts')
    .get(function(req, res) {
        res.render('./Quick_Installation/Creating_User_Accounts', {
            title: 'Creating user accounts on your camera',
          });
      });

/* GET WebUI and Firmware Upgrade /WebUI_And_Firmware_Upgrade */
quickInstallRouter.route('/WebUI_And_Firmware_Upgrade')
    .get(function(req, res) {
        res.render('./Quick_Installation/WebUI_And_Firmware_Upgrade', {
            title: 'WebUI and Firmware Upgrade',
          });
      });

/* GET /WebUI_And_Firmware_Upgrade_HD */
quickInstallRouter.route('/WebUI_And_Firmware_Upgrade/HD_Cameras')
    .get(function(req, res) {
        res.render('./Quick_Installation/WebUI_And_Firmware_Upgrade_HD', {
            title: 'WebUI and Firmware Upgrade for HD Cameras',
          });
      });

/* GET /WebUI_And_Firmware_Upgrade_VGA */
quickInstallRouter.route('/WebUI_And_Firmware_Upgrade/VGA_Cameras')
    .get(function(req, res) {
        res.render('./Quick_Installation/WebUI_And_Firmware_Upgrade_VGA', {
            title: 'WebUI and Firmware Upgrade for VGA Cameras',
          });
      });

/* GET /How_To_Clear_Your_Browsing_History */
quickInstallRouter.route('/How_To_Clear_Your_Browsing_History')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History', {
            title: 'How to clear your Browsing History',
          });
      });

/* GET /Internet_Explorer */
quickInstallRouter.route('/How_To_Clear_Your_Browsing_History/Internet_Explorer')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Internet_Explorer', {
            title: 'How to clear your Browsing History Internet Explorer',
          });
      });

/* GET /Mozilla_Firefox */
quickInstallRouter.route('/How_To_Clear_Your_Browsing_History/Mozilla_Firefox')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Mozilla_Firefox', {
            title: 'How to clear your Browsing History Mozilla Firefox',
          });
      });

/* GET /Google_Chromium */
quickInstallRouter.route('/How_To_Clear_Your_Browsing_History/Google_Chromium')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Google_Chromium', {
            title: 'How to clear your Browsing History Google Chromium',
          });
      });

/* GET /Opera */
quickInstallRouter.route('/How_To_Clear_Your_Browsing_History/Opera')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Opera', {
            title: 'How to clear your Browsing History Opera',
          });
      });

/* GET /Microsoft_Edge */
quickInstallRouter.route('/How_To_Clear_Your_Browsing_History/Microsoft_Edge')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Microsoft_Edge', {
            title: 'How to clear your Browsing History Microsoft Edge',
          });
      });

/* GET /Vivaldi */
quickInstallRouter.route('/How_To_Clear_Your_Browsing_History/Vivaldi')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Vivaldi', {
            title: 'How to clear your Browsing History Vivaldi',
          });
      });

/* GET How to set up a Wireless Connection /Set_Up_A_Wireless_Connection */
quickInstallRouter.route('/Set_Up_A_Wireless_Connection')
    .get(function(req, res) {
        res.render('./Quick_Installation/Set_Up_A_Wireless_Connection', {
            title: 'How to set up a Wireless Connection',
          });
      });

/* GET DEV pages /dev */
quickInstallRouter.route('/DEV')
    .get(function(req, res) {
        res.render('DEV', {
            title: 'DEV Resources',
          });
      });

/* GET AMP Test Range /amp */
quickInstallRouter.route('/AMP')
    .get(function(req, res) {
        res.render('AMP', {
            title: 'Accelerated Mobile Page',
          });
      });

/* GET AMP2 Test Range /amp2 */
quickInstallRouter.route('/AMP2')
    .get(function(req, res) {
        res.render('AMP2', {
            title: 'Accelerated Mobile Page 2',
          });
      });

/* GET AMP3 Test Range /Redirection */
quickInstallRouter.route('/AMP3')
    .get(function(req, res) {
        res.render('AMP3', {
            title: 'Redirection',
          });
      });

/* GET AMP3 Test Range /Redirection */
quickInstallRouter.route('/AMP_Gallery')
    .get(function(req, res) {
        res.render('AMP_Gallery', {
            title: 'AMP Gallery',
          });
      });

module.exports = quickInstallRouter;
