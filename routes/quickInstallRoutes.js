var express = require('express');
var quickInstallRouter = express.Router();
var appdata = require('../views/partials/data/quickInstall.json');

/* GET quickInstall page. */
quickInstallRouter.route('/')
    .get(function(req, res) {
        res.render('Quick_Installation', {
            title: 'INSTAR Wiki Quick-Installation',
          });
      });

/* GET How Does An IP Camera Work? /How_Does_An_IP_Camera_Work */
quickInstallRouter.route('/:qiUrl')
.get(function(req, res) {
    var qiURL = req.params.qiURL;
    res.render('How_Does_An_IP_Camera_Work', {
        title: 'How Does An IP Camera Work?',
      });
  });

/* After Unpacking your INSTAR IP Camera */
quickInstallRouter.get('/After_Unpacking_Your_INSTAR_IP_Camera',
    function(req, res, next) {
    res.render('After_Unpacking_Your_INSTAR_IP_Camera', {
        title: 'After Unpacking your INSTAR IP Camera',
      });
  });

/* GET First Steps */
quickInstallRouter.get('/First_Steps', function(req, res, next) {
    res.render('First_Steps', {
        title: 'First Steps to get your IP Up and Running',
      });
  });

module.exports = quickInstallRouter;
