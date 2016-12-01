var express = require('express');
var advancedUserRouter = express.Router();
var appdata = require('../views/_partials/data/advancedUser.json');

/* GET Internet_Access page. */
advancedUserRouter.get('/', function(req, res) {

    var mdPicture = []; /* Get all Pictures from gallery.json for the gallery */
    var mdPictureAlt = [];
    var mdHref = [];
    appdata.articles.forEach(function(item) {
        mdPicture = mdPicture.concat(item.mdPic);
        mdPictureAlt = mdPictureAlt.concat(item.mdPicAlt);
        mdHref = mdHref.concat(item.mdUrl);
      });

    res.render('./Advanced_User/Advanced_User', {
        title: 'Advanced User',
        mdPic: mdPicture,
        mdPicAlt: mdPictureAlt,
        mdUrl: mdHref,
      });
  });

advancedUserRouter.get('/Website_Integration/', function(req, res) {
    res.render('./Advanced_User/Website_Integration', {
        title: 'Website Integration',
        uplink: '/Advanced_User/',
      });
  });

advancedUserRouter.get('/Website_Integration/Cambozola', function(req, res) {
    res.render('./Advanced_User/Cambozola', {
        title: 'Cambozola (JAVA Plugin)',
        uplink: '/Advanced_User/Website_Integration/',
      });
  });

advancedUserRouter.get('/Website_Integration/Open_IP_Camera_Manager', function(req, res) {
    res.render('./Advanced_User/Open_IP_Camera_Manager', {
        title: 'Open IP Camera Manager (PHP)',
        uplink: '/Advanced_User/Website_Integration/',
      });
  });

advancedUserRouter.get('/Website_Integration/HD_Camera_Integration', function(req, res) {
    res.render('./Advanced_User/HD_Camera_Integration', {
        title: 'HD Camera Website Integration',
        uplink: '/Advanced_User/Website_Integration/',
      });
  });

advancedUserRouter.get('/CGI_Commands/', function(req, res) {
    res.render('./Advanced_User/CGI_Commands', {
        title: 'CGI Commands',
      });
  });

advancedUserRouter.get('/CGI_Commands/VGA_Series_CGI_List', function(req, res) {
    res.render('./Advanced_User/VGA_Series_CGI_List', {
        title: 'VGA Series CGI List',
      });
  });

advancedUserRouter.get('/Restore_WebUI/', function(req, res) {
    res.render('./Advanced_User/Restore_WebUI', {
        title: 'Restore your Camera after a faulty WebUI Upgrade',
        uplink: '/Advanced_User/',
      });
  });

advancedUserRouter.get('/Restore_Firmware/', function(req, res) {
    res.render('./Advanced_User/Restore_Firmware', {
        title: 'Restore your Camera after a faulty Firmware Upgrade',
        uplink: '/Advanced_User/',
      });
  });

advancedUserRouter.get('/CCTV_vs_IP/', function(req, res) {
    res.render('./Advanced_User/CCTV_vs_IP', {
        title: 'Difference Between Analog And IP Cameras',
        uplink: '/Advanced_User/',
      });
  });

advancedUserRouter.get('/VPN_AVM_Fritzbox/', function(req, res) {
    res.render('./Advanced_User/VPN_AVM_Fritzbox_Windows', {
        title: 'VPN in AVM Fritzbox',
        uplink: '/Advanced_User/',
      });
  });

module.exports = advancedUserRouter;
