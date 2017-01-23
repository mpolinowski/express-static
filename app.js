var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var redirect = require('express-redirect');

var indexRouter = require('./build/routes/indexRoutes');
var searchRouter = require('./build/routes/searchRoutes');
var productRouter = require('./build/routes/productRoutes');
var softwareRouter = require('./build/routes/softwareRoutes');
var quickInstallRouter = require('./build/routes/quickInstallRoutes');
var internetAccessRouter = require('./build/routes/internetAccessRoutes');
var motionDetectionRouter = require('./build/routes/motionDetectionRoutes');
var advancedUserRouter = require('./build/routes/advancedUserRoutes');
var cgi720pRouter = require('./build/routes/cgi720pRoutes');
var cgi1080pRouter = require('./build/routes/cgi1080pRoutes');
var webUI720pRouter = require('./build/routes/webUI720pRoutes');
var webUI1080pRouter = require('./build/routes/webUI1080pRoutes');

var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'build/views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
  }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build/public')));

// Redirect
redirect(app);
/* Quick_Installation */
app.redirect('/index.php/Quick_Installation', '../Quick_Installation', 301);
app.redirect('/index.php/How_does_an_IP-Camera-Network_work%3F', '../Quick_Installation/How_Does_An_IP_Camera_Work', 301);
app.redirect('/index.php/Wie_arbeitet_eine_IP_Kamera%3F', '../Quick_Installation/How_Does_An_IP_Camera_Work', 301);
app.redirect('/index.php/First_Steps', '../Quick_Installation/First_Steps', 301);
app.redirect('/index.php/After_unpacking_your_INSTAR_IP_Camera', '../Quick_Installation/After_Unpacking', 301);
app.redirect('/index.php/Direct_LAN_connection_with_your_IP_camera', '../Quick_Installation/Direct_LAN_Connection', 301);
app.redirect('/index.php/Finding_your_IP_camera_in_the_network_if_the_IP_Camera_Tool_is_not_working', '../Quick_Installation/Alternative_IP_Scanner', 301);
app.redirect('/index.php/ONVIF', '../Quick_Installation/ONVIF', 301);
app.redirect('/index.php/Language_Selection', '../Quick_Installation/Language_Selection', 301);
app.redirect('/index.php/Creating_User_Accounts', '../Quick_Installation/Creating_User_Accounts', 301);
app.redirect('/index.php/How_to_upgrade_to_a_new_WebUI_or_Firmware', '../Quick_Installation/WebUI_And_Firmware_Upgrade', 301);
app.redirect('/index.php/How_to_upgrade_to_a_new_WebUI_or_Firmware_(HD_Cameras)', '../Quick_Installation/WebUI_And_Firmware_Upgrade/HD_Cameras', 301);
app.redirect('/index.php/How_to_upgrade_to_a_new_WebUI_or_Firmware_(VGA_Cameras)', '../Quick_Installation/WebUI_And_Firmware_Upgrade/HD_Cameras', 301);
app.redirect('/index.php/Clear_Browsing_History', '../Quick_Installation/How_To_Clear_Your_Browsing_History', 301);
app.redirect('/index.php/First_steps_to_set_up_a_Wifi_connection', '../Quick_Installation/Set_Up_A_Wireless_Connection', 301);

app.use('/', indexRouter);
app.use('/Search/', searchRouter);
app.use('/Products/', productRouter);
app.use('/Software/', softwareRouter);
app.use('/Quick_Installation/', quickInstallRouter);
app.use('/Internet_Access/', internetAccessRouter);
app.use('/Motion_Detection/', motionDetectionRouter);
app.use('/Advanced_User/', advancedUserRouter);
app.use('/720p_Series_CGI_List/', cgi720pRouter);
app.use('/1080p_Series_CGI_List/', cgi1080pRouter);
app.use('/Web_User_Interface/720p_Series/', webUI720pRouter);
app.use('/Web_User_Interface/1080p_Series/', webUI1080pRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

// Error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
          message: err.message,
          error: err,
        });
    });
}

// Production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
      });
  });


module.exports = app;
