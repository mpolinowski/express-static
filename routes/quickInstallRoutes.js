var express = require('express');
var quickInstallRouter = express.Router();
var appdata = require('../views/partials/data/quickInstall.json');

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

    res.render('Quick_Installation', {
        title: 'Quick Installation',
        qiPic: qiPicture,
        qiPicAlt: qiPictureAlt,
        qiUrl: qiHref,
      });
  });

/* GET How Does An IP Camera Work? /How_Does_An_IP_Camera_Work */
quickInstallRouter.route('/How_Does_An_IP_Camera_Work')
    .get(function(req, res) {
        res.render('How_Does_An_IP_Camera_Work', {
            title: 'How Does An IP Camera Work?',
          });
      });

/* GET First Steps to get your IP camera working /First_Steps */
quickInstallRouter.route('/First_Steps')
    .get(function(req, res) {
        res.render('First_Steps', {
            title: 'First Steps to get your IP camera working',
          });
      });

/* GET After unpacking your INSTAR IP Camera /After_Unpacking */
quickInstallRouter.route('/After_Unpacking')
    .get(function(req, res) {
        res.render('After_Unpacking', {
            title: 'After unpacking your INSTAR IP Camera',
          });
      });

/* GET Direct connection with a PC or Notebook /Direct_LAN_Connection */
quickInstallRouter.route('/Direct_LAN_Connection')
    .get(function(req, res) {
        res.render('Direct_LAN_Connection', {
            title: 'Direct connection with a PC or Notebook',
          });
      });

/* GET Find your IP Camera with an IP Scanner /Alternative_IP_Scanner */
quickInstallRouter.route('/Alternative_IP_Scanner')
    .get(function(req, res) {
        res.render('Alternative_IP_Scanner', {
            title: 'How to find your IP Camera with an alternative IP Scanner',
          });
      });

/* GET Angry IP Scanner /Angry_IP_Scanner */
quickInstallRouter.route('/Angry_IP_Scanner')
    .get(function(req, res) {
        res.render('Angry_IP_Scanner', {
            title: 'Angry IP Scanner',
          });
      });

/* GET Fing CLI /Fing_CLI */
quickInstallRouter.route('/Fing_CLI')
    .get(function(req, res) {
        res.render('Fing_CLI', {
            title: 'Fing IP Scanner - Command Line Interface',
          });
      });

/* GET Fing Mobile /Fing_Mobile */
quickInstallRouter.route('/Fing_Mobile')
    .get(function(req, res) {
        res.render('Fing_Mobile', {
            title: 'Fing IP Scanner - Mobile App',
          });
      });

/* GET Language Selection /Language_Selection */
quickInstallRouter.route('/Language_Selection')
    .get(function(req, res) {
        res.render('Language_Selection', {
            title: 'Language Selection',
          });
      });

/* GET Creating user accounts on your camera /Creating_User_Accounts */
quickInstallRouter.route('/Creating_User_Accounts')
    .get(function(req, res) {
        res.render('Creating_User_Accounts', {
            title: 'Creating user accounts on your camera',
          });
      });

/* GET WebUI and Firmware Upgrade /WebUI_And_Firmware_Upgrade */
quickInstallRouter.route('/WebUI_And_Firmware_Upgrade')
    .get(function(req, res) {
        res.render('WebUI_And_Firmware_Upgrade', {
            title: 'WebUI and Firmware Upgrade',
          });
      });

/* GET How to clear your Browsing History /WebUI_And_Firmware_Upgrade */
quickInstallRouter.route('/How_To_Clear_Your_Browsing_History')
    .get(function(req, res) {
        res.render('How_To_Clear_Your_Browsing_History', {
            title: 'How to clear your Browsing History',
          });
      });

/* GET How to set up a Wireless Connection /Set_Up_A_Wireless_Connection */
quickInstallRouter.route('/Set_Up_A_Wireless_Connection')
    .get(function(req, res) {
        res.render('Set_Up_A_Wireless_Connection', {
            title: 'How to set up a Wireless Connection',
          });
      });

/* GET AMP Test Range /amp */
quickInstallRouter.route('/AMP')
    .get(function(req, res) {
        res.render('AMP', {
            title: 'Accelerated Mobile Page',
          });
      });

module.exports = quickInstallRouter;
