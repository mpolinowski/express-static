var express = require('express');
var motionDetectionRouter = express.Router();
var appdata = require('../views/_partials/data/motionDetection.json');

/* GET Internet_Access page. */
motionDetectionRouter.get('/', function(req, res) {

    var mdPicture = []; /* Get all Pictures from gallery.json for the gallery */
    var mdPictureAlt = [];
    var mdHref = [];
    appdata.articles.forEach(function(item) {
        mdPicture = mdPicture.concat(item.mdPic);
        mdPictureAlt = mdPictureAlt.concat(item.mdPicAlt);
        mdHref = mdHref.concat(item.mdUrl);
      });

    res.render('./Motion_Detection/Motion_Detection', {
        title: 'Motion Detection',
        mdPic: mdPicture,
        mdPicAlt: mdPictureAlt,
        mdUrl: mdHref,
      });
  });

motionDetectionRouter.get('/Setup/', function(req, res) {
    res.render('./Motion_Detection/Motion_Detection_Setup', {
        title: 'Motion Detection Setup',
      });
  });

motionDetectionRouter.get('/Alarm_Notification/', function(req, res) {
    res.render('./Motion_Detection/Alarm_Notification', {
        title: 'Alarm Notification',
      });
  });

motionDetectionRouter.get('/Alarm_Notification/SMTP_Servers', function(req, res) {
    res.render('./Motion_Detection/Alarm_Notification_SMTP_Servers', {
        title: 'SMTP Server',
      });
  });

motionDetectionRouter.get('/Alarm_Recording/', function(req, res) {
    res.render('./Motion_Detection/Alarm_Recording', {
        title: 'Alarm Recording',
      });
  });

motionDetectionRouter.get('/SD_Card_Access/', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access', {
        title: 'SD Card Access',
      });
  });

motionDetectionRouter.get('/SD_Card_Access/Bitkinex/', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_Bitkinex', {
        title: 'SD Card Access - Bitkinex',
      });
  });

motionDetectionRouter.get('/SD_Card_Access/CuteFTP', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_CuteFTP', {
        title: 'SD Card Access - CuteFTP',
      });
  });

motionDetectionRouter.get('/SD_Card_Access/DownThemAll', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_DownThemAll', {
        title: 'SD Card Access - DownThemAll',
      });
  });

motionDetectionRouter.get('/SD_Card_Access/Interachy', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_Interarchy', {
        title: 'SD Card Access - Interachy',
      });
  });

motionDetectionRouter.get('/SD_Card_Access/DeepVacuum', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_DeepVacuum', {
        title: 'SD Card Access - DeepVacuum',
      });
  });

motionDetectionRouter.get('/SD_Card_Access/SiteSucker', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_SiteSucker', {
        title: 'SD Card Access - SiteSucker',
      });
  });

motionDetectionRouter.get('/SD_Card_Access/SimpleWget', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_SimpleWget', {
        title: 'SD Card Access - SimpleWget',
      });
  });

motionDetectionRouter.get('/Alarm_FTP_Upload/', function(req, res) {
    res.render('./Motion_Detection/Alarm_FTP_Upload', {
        title: 'Alarm FTP Upload',
      });
  });

motionDetectionRouter.get('/Router_as_a_FTP_Server/', function(req, res) {
    res.render('./Motion_Detection/Router_as_a_FTP_Server', {
        title: 'Router or NAS as FTP Server',
      });
  });

motionDetectionRouter.get('/Router_as_a_FTP_Server/AVM_Fritzbox_as_FTP_Server', function(req, res) {
    res.render('./Motion_Detection/AVM_Fritzbox_as_FTP_Server', {
        title: 'AVM Fritzbox as FTP Server',
      });
  });

motionDetectionRouter.get('/Router_as_a_FTP_Server/Telekom_Speedport_as_FTP_Server', function(req, res) {
    res.render('./Motion_Detection/Telekom_Speedport_as_FTP_Server', {
        title: 'Telekom Speedport as FTP Server',
      });
  });

motionDetectionRouter.get('/Router_as_a_FTP_Server/QNAP_as_FTP_Server', function(req, res) {
    res.render('./Motion_Detection/QNAP_as_FTP_Server', {
        title: 'QNAP as FTP Server',
      });
  });

motionDetectionRouter.get('/Router_as_a_FTP_Server/WD_MyCloud_as_FTP_Server', function(req, res) {
    res.render('./Motion_Detection/WD_MyCloud_as_FTP_Server', {
        title: 'WD MyCloud as FTP Server',
      });
  });

motionDetectionRouter.get('/FTP_Server_Setup/', function(req, res) {
    res.render('./Motion_Detection/FTP_Server_Setup', {
        title: 'FTP Server Setup',
      });
  });

motionDetectionRouter.get('/FTP_Server_Setup/Install_FileZilla_Server/', function(req, res) {
    res.render('./Motion_Detection/Install_FileZilla_Server', {
        title: 'FTP Server Setup',
      });
  });

motionDetectionRouter.get('/Alarm_Server/', function(req, res) {
    res.render('./Motion_Detection/Alarm_Server', {
        title: 'Alarm Server',
      });
  });

module.exports = motionDetectionRouter;
