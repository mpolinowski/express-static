var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var redirect = require('express-redirect');

var indexRouter = require('./build/routes/indexRoutes');
var searchRouter = require('./build/routes/searchRoutes');
var productRouter = require('./build/routes/productRoutes');
var indoorCamsRouter = require('./build/routes/indoorCamsRoutes');
var outdoorCamsRouter = require('./build/routes/outdoorCamsRoutes');
var downloadsRouter = require('./build/routes/downloadsRoutes');
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
app.redirect('/index.php/ActiveX_Plugin_Installation_on_Windows', '../Quick_Installation/Live_Video', 301);
app.redirect('/index.php/Quicktime_Plugin_Setup', '../Quick_Installation/Live_Video', 301);
app.redirect('/index.php/Exception_for_your_IP_camera_in_Avast_Internet_Security', '../Quick_Installation/Live_Video/Troubleshooting/Avast', 301);
app.redirect('/index.php/Exception_for_your_IP_camera_in_GDATA_Internet_Security_2016', '../Quick_Installation/Live_Video/Troubleshooting/GDATA', 301);
app.redirect('/index.php/Exception_for_your_IP_camera_in_Kaspersky_Internet_Security', '../Quick_Installation/Live_Video/Troubleshooting/Kaspersky_2013', 301);
app.redirect('/index.php/Exception_for_your_IP_camera_in_Kaspersky_Internet_Security_2014', '../Quick_Installation/Live_Video/Troubleshooting/Kaspersky_2014', 301);
app.redirect('/index.php/Exception_for_your_IP_camera_in_Kaspersky_Internet_Security_2016', '../Quick_Installation/Live_Video/Troubleshooting/Kaspersky_2017', 301);
app.redirect('/index.php/Exception_for_your_IP_camera_in_AVG_Internet_Security', '../Quick_Installation/Live_Video/Troubleshooting/AVG', 301);
app.redirect('/index.php/Exception_for_your_IP_camera_in_AVIRA_Antivirus_Pro', '../Quick_Installation/Live_Video/Troubleshooting/AVIRA', 301);
app.redirect('/index.php/Exception_for_your_IP_camera_in_F-Secure_Internet_Security', '../Quick_Installation/Live_Video/Troubleshooting/F-Secure', 301);
app.redirect('/index.php/Live_Video_in_Microsoft_Edge', '../Quick_Installation/Live_Video', 301);
app.redirect('/index.php/Language_Selection', '../Quick_Installation/Language_Selection', 301);
app.redirect('/index.php/Creating_User_Accounts', '../Quick_Installation/Creating_User_Accounts', 301);
app.redirect('/index.php/How_to_upgrade_to_a_new_WebUI_or_Firmware', '../Quick_Installation/WebUI_And_Firmware_Upgrade', 301);
app.redirect('/index.php/How_to_upgrade_to_a_new_WebUI_or_Firmware_(HD_Cameras)', '../Quick_Installation/WebUI_And_Firmware_Upgrade/HD_Cameras', 301);
app.redirect('/index.php/How_to_upgrade_to_a_new_WebUI_or_Firmware_(VGA_Cameras)', '../Quick_Installation/WebUI_And_Firmware_Upgrade/HD_Cameras', 301);
app.redirect('/index.php/Clear_Browsing_History', '../Quick_Installation/How_To_Clear_Your_Browsing_History', 301);
app.redirect('/index.php/First_steps_to_set_up_a_Wifi_connection', '../Quick_Installation/Set_Up_A_Wireless_Connection', 301);

/* Internet_Access */
app.redirect('/index.php/Access_over_the_Internet', '../Internet_Access', 301);
app.redirect('/index.php/The_DDNS_Service', '../Internet_Access/The_DDNS_Service', 301);
app.redirect('/index.php/Port_Forwarding', '../Internet_Access/Port_Forwarding', 301);
app.redirect('/index.php/AVM_Fritzbox', '../Internet_Access/Port_Forwarding/AVM_Fritzbox/', 301);
app.redirect('/index.php/Telekom_Speedport', '../Internet_Access/Port_Forwarding/Telekom_Speedport/', 301);
app.redirect('/index.php/D-Link', '../Internet_Access/Port_Forwarding/D-Link/', 301);
app.redirect('/index.php/Netgear', '../Internet_Access/Port_Forwarding/Netgear/', 301);
app.redirect('/index.php/Vodafone_Easybox', '../Internet_Access/Port_Forwarding/Vodafone_Easybox/', 301);
app.redirect('/index.php/Pirelli_Router', '../Internet_Access/Port_Forwarding/Pirelli/', 301);
app.redirect('/index.php/Third_Party_DDNS_Addresses', '../Internet_Access/DDNS_Provider', 301);
app.redirect('/index.php/Www.noip.com', '../Internet_Access/DDNS_Provider/NoIP/', 301);
app.redirect('/index.php/Www.selfhost.de', '../Internet_Access/DDNS_Provider/Selfhost/', 301);
app.redirect('/index.php/Www.ddnss.de', '../Internet_Access/DDNS_Provider/DDNSS/', 301);

/* Motion_Detection */
app.redirect('/index.php/Motion_Detection_Setup', '../Motion_Detection/Setup', 301);
app.redirect('/index.php/Email%20Setup_/Alarm%20Notification', '../Motion_Detection/Alarm_Notification', 301);
app.redirect('/index.php/Alarm_Recording', '../Motion_Detection/Alarm_Recording', 301);
app.redirect('/index.php/How_to_Access_your_SD_Card', '../Motion_Detection/SD_Card_Access', 301);
app.redirect('/index.php/Alarm_Upload_/_FTP%20Settings', '../Motion_Detection/Alarm_FTP_Upload', 301);
app.redirect('/index.php/FTP_Server_Setup', '../Motion_Detection/FTP_Server_Setup', 301);
app.redirect('/index.php/Router_as_a_FTP_Server', '../Motion_Detection/Router_as_a_FTP_Server', 301);
app.redirect('/index.php/Alarm_Server_Function', '../Motion_Detection/Alarm_Server', 301);
app.redirect('/index.php/INSTAR_Cloud', '../Motion_Detection/INSTAR_Cloud', 301);

/* For Developers */
app.redirect('/index.php/For_Developers', '../Advanced_User', 301);
app.redirect('/index.php/Website_Integration', '../Advanced_User/Website_Integration', 301);
app.redirect('/index.php/Website_Integration_(HD_Cameras)', '../Advanced_User/Website_Integration/HD_Camera_Integration', 301);
app.redirect('/index.php/Cambozola_JAVA_Plugin', '../Advanced_User/Website_Integration/Cambozola', 301);
app.redirect('/index.php/OIPCM', '../Advanced_User/Website_Integration/Open_IP_Camera_Manager', 301);
app.redirect('/index.php/CGI_Commands', '../Advanced_User/CGI_Commands', 301);
app.redirect('/index.php/List_of_CGI_commands_(HD)', '../720p_Series_CGI_List/', 301);
app.redirect('/index.php/List_of_CGI_commands_(VGA)', '../Advanced_User/CGI_Commands/VGA_Series_CGI_List/', 301);
app.redirect('/index.php/Restore_your_Camera_after_a_faulty_WebUI_Upgrade', '../Advanced_User/Restore_WebUI', 301);
app.redirect('/index.php/Restore_your_Camera_after_a_faulty_Firmware_Upgrade', '../Advanced_User/Restore_Firmware', 301);
app.redirect('/index.php/IP_vs_CCTV', '../Advanced_User/CCTV_vs_IP', 301);

app.use('/', indexRouter);
app.use('/Search/', searchRouter);
app.use('/Products/', productRouter);
app.use('/Indoor_Cameras/', indoorCamsRouter);
app.use('/Outdoor_Cameras/', outdoorCamsRouter);
app.use('/Downloads/', downloadsRouter);
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
/* app.use(function(req, res, next) {
 *    var err = new Error('Not Found');
 *   err.status = 404;
 *    next(err);
 * }); */
app.use(function(req, res, next){
    res.status(404).redirect('/');
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
