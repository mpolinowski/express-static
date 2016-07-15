var express = require('express');
var webUIRouter = express.Router();

/* GET WebUI page. */
webUIRouter.route('/')
    .get(function(req, res) {
        res.render('WUI_WebUserInterface', {
            title: 'INSTAR Web User Interface',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/')
    .get(function(req, res) {
        res.render('WUI_WebUserInterface_HD-Series', {
            title: 'INSTAR Web User Interface HD Series',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Software/')
    .get(function(req, res) {
        res.render('WUI_WebUserInterface_HD-Series_Software', {
            title: 'Web User Interface HD Series :: Software Menu',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Software/Language/')
    .get(function(req, res) {
        res.render('WUI_WebUserInterface_HD-Series_Software_Language', {
            title: 'Web User Interface HD Series :: Software Menu :: Language',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Software/Backup/')
    .get(function(req, res) {
        res.render('WUI_WebUserInterface_HD-Series_Software_Backup', {
            title: 'Web User Interface HD Series :: Software Menu :: Backup',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Software/Update/')
    .get(function(req, res) {
        res.render('WUI_WebUserInterface_HD-Series_Software_Update', {
            title: 'Web User Interface HD Series :: Software Menu :: Update',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Software/Reboot_Reset')
    .get(function(req, res) {
        res.render('WUI_WebUserInterface_HD-Series_Software_Reboot_Reset', {
            title: 'Web User Interface HD Series :: Software Menu :: Reboot & Reset',
          });
      });

/* GET fullHD WebUI page. */
webUIRouter.route('/fullHD_Series/')
    .get(function(req, res) {
        res.render('WUI_WebUserInterface_fullHD-Series', {
            title: 'INSTAR Web User Interface fullHD Series',
          });
      });

module.exports = webUIRouter;
