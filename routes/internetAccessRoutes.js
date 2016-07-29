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
        title: 'Port_Forwarding',
      });
  });

internetAccessRouter.get('/DDNS_Provider', function(req, res) {
    res.render('./Internet_Access/DDNS_Provider', {
        title: 'Third Party DDNS Provider',
      });
  });

module.exports = internetAccessRouter;
