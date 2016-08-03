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

motionDetectionRouter.get('/Alarm_FTP_Upload/', function(req, res) {
    res.render('./Motion_Detection/Alarm_FTP_Upload', {
        title: 'Alarm FTP Upload',
      });
  });

motionDetectionRouter.get('/FTP_Server_Setup/', function(req, res) {
    res.render('./Motion_Detection/FTP_Server_Setup', {
        title: 'FTP Server Setup',
      });
  });

motionDetectionRouter.get('/Alarm_Server/', function(req, res) {
    res.render('./Motion_Detection/Alarm_Server', {
        title: 'Alarm Server',
      });
  });

module.exports = motionDetectionRouter;
