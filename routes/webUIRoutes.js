var express = require('express');
var webUIRouter = express.Router();

/* GET WebUI page. */
webUIRouter.route('/')
    .get(function(req, res) {
        res.render('WebUserInterface', {
            title: 'INSTAR Web User Interface',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/')
    .get(function(req, res) {
        res.render('WebUserInterface_HD-Series', {
            title: 'INSTAR Web User Interface HD Series',
          });
      });

/* GET fullHD WebUI page. */
webUIRouter.route('/fullHD_Series/')
    .get(function(req, res) {
        res.render('WebUserInterface_fullHD-Series', {
            title: 'INSTAR Web User Interface fullHD Series',
          });
      });

module.exports = webUIRouter;
