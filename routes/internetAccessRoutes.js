var express = require('express');
var internetAccessRouter = express.Router();
var appdata = require('../views/_partials/data/internetAccess.json');

/* GET Internet_Access page. */
internetAccessRouter.get('/', function(req, res) {

    var iaPicture = []; /* Get all Pictures from gallery.json for the gallery */
    var iaPictureAlt = [];
    var iaHref = [];
    appdata.articles.forEach(function(item) {
        iaPicture = iaPicture.concat(item.iaPic);
        iaPictureAlt = iaPictureAlt.concat(item.iaPicAlt);
        iaHref = iaHref.concat(item.iaUrl);
      });

    res.render('./Internet_Access/Internet_Access', {
        title: 'Internet Access',
        iaPic: iaPicture,
        iaPicAlt: iaPictureAlt,
        iaUrl: iaHref,
      });
  });

internetAccessRouter.get('/The_DDNS_Service', function(req, res) {
    res.render('./Internet_Access/The_DDNS_Service', {
        title: 'The DDNS Service',
      });
  });

internetAccessRouter.get('/Port_Forwarding', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding', {
        title: 'Port Forwarding',
      });
  });

internetAccessRouter.get('/Port_Forwarding/AVM_Fritzbox/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_AVM_Fritzbox', {
        title: 'Port Forwarding AVM Fritzbox',
      });
  });

internetAccessRouter.get('/Port_Forwarding/Telekom_Speedport/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Telekom_Speedport', {
        title: 'Port Forwarding Telekom Speedport',
      });
  });

internetAccessRouter.get('/Port_Forwarding/D-Link/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_D-Link', {
        title: 'Port Forwarding D-Link',
      });
  });

internetAccessRouter.get('/Port_Forwarding/Netgear/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Netgear', {
        title: 'Port Forwarding Netgear',
      });
  });

internetAccessRouter.get('/Port_Forwarding/Vodafone_Easybox/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Vodafone_Easybox', {
        title: 'Port Forwarding Vodafone Easybox',
      });
  });

internetAccessRouter.get('/Port_Forwarding/Pirelli/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Pirelli', {
        title: 'Port Forwarding Pirelli',
      });
  });

internetAccessRouter.get('/DDNS_Provider', function(req, res) {
    res.render('./Internet_Access/DDNS_Provider', {
        title: 'Third Party DDNS Provider',
      });
  });

module.exports = internetAccessRouter;
