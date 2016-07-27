var express = require('express');
var webUIRouter = express.Router();

/* GET WebUI page. */
webUIRouter.route('/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface', {
            title: 'INSTAR Web User Interface',
          });
      });

/* ###################################### HD Series ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series', {
            title: 'INSTAR Web User Interface HD Series',
          });
      });

/* ###################################### HD Series Software ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Software/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Software', {
            title: 'Software Menu',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Software/Language/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Software_Language', {
            title: 'Software Menu :: Language',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Software/Backup/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Software_Backup', {
            title: 'Software Menu :: Backup',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Software/Update/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Software_Update', {
            title: 'Software Menu :: Update',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Software/Reboot_Reset/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Software_Reboot_Reset', {
            title: 'Software Menu :: Reboot & Reset',
          });
      });

/* ###################################### HD Series Network ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Network/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Network', {
            title: 'Network Menu',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Network/IP_Configuration/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Network_IP_Configuration', {
            title: 'Network Menu :: IP Configuration',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Network/WiFi/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Network_WiFi', {
            title: 'Network Menu :: WiFi',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Network/DDNS/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Network_DDNS', {
            title: 'Network Menu :: DDNS',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Network/P2P/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Network_P2P', {
            title: 'Network Menu :: P2P',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Network/UPnP/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Network_UPnP', {
            title: 'Network Menu :: UPnP',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Network/Push_Service/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Network_Push_Service', {
            title: 'Network Menu :: Push Service',
          });
      });

/* ###################################### HD Series System ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/System/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_System', {
            title: 'System Menu',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/System/Info/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_System_Info', {
            title: 'System Menu :: Info',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/System/Date_Time/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_System_Date_Time', {
            title: 'System Menu :: Date & Time',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/System/User/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_System_User', {
            title: 'System Menu :: User',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/System/Status_LED/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_System_Status_LED', {
            title: 'System Menu :: Status LED',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/System/IR_LED/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_System_IR_LED', {
            title: 'System Menu :: IR LED',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/System/ONVIF/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_System_ONVIF', {
            title: 'System Menu :: ONVIF',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/System/PTZ/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_System_PTZ', {
            title: 'System Menu :: PTZ',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/System/PTZ_Tour/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_System_PTZ_Tour', {
            title: 'System Menu :: PTZ Tour',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/System/System_Log/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_System_System_Log', {
            title: 'System Menu :: System Log',
          });
      });

/* ###################################### HD Series Multimedia ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Multimedia/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Multimedia', {
            title: 'Multimedia Menu',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Multimedia/Audio/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Multimedia_Audio', {
            title: 'Multimedia Menu :: Audio',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Multimedia/Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Multimedia_Video', {
            title: 'Multimedia Menu :: Video',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Multimedia/Image/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Multimedia_Image', {
            title: 'Multimedia Menu :: Image',
          });
      });

/* ###################################### HD Series Alarm ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Alarm/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Alarm', {
            title: 'Alarm Menu',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Alarm/Areas/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Alarm_Areas', {
            title: 'Alarm Menu :: Areas',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Alarm/Privacy_Mask/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Alarm_Privacy_Mask', {
            title: 'Alarm Menu :: Privacy Mask',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Alarm/Actions/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Alarm_Actions', {
            title: 'Alarm Menu :: Actions',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Alarm/Schedule/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Alarm_Schedule', {
            title: 'Alarm Menu :: Schedule',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Alarm/SMTP_Server/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Alarm_SMTP_Server', {
            title: 'Alarm Menu :: SMTP Server',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Alarm/Email/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Alarm_Email', {
            title: 'Alarm Menu :: Email',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Alarm/FTP/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Alarm_FTP', {
            title: 'Alarm Menu :: FTP',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Alarm/Audio_Alarm/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Alarm_Audio_Alarm', {
            title: 'Alarm Menu :: Audio Alarm',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Alarm/SD_Card/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Alarm_SD_Card', {
            title: 'Alarm Menu :: SD Card',
          });
      });

/* ###################################### HD Series Recording ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Recording/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Recording', {
            title: 'Recording Menu',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Recording/Schedule/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Recording_Schedule', {
            title: 'Recording Menu :: Schedule',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Recording/Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Recording_Video', {
            title: 'Recording Menu :: Video',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Recording/Photoseries/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Recording_Photoseries', {
            title: 'Recording Menu :: Photoseries',
          });
      });

/* ###################################### HD Series Menu Bar ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Menu_Bar/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Menu_Bar', {
            title: 'Menu Bar',
          });
      });

/* ###################################### HD Series Video Menu Bar ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/Video_Menu_Bar/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_Video_Menu_Bar', {
            title: 'Video Menu Bar',
          });
      });

/* ###################################### HD Series PTZ ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/HD_Series/PTZ_Control/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_HD-Series_PTZ_Control', {
            title: 'PTZ Control',
          });
      });

/* ###################################### fullHD Series ###################################### */

/* GET fullHD WebUI page. */
webUIRouter.route('/fullHD_Series/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/WebUserInterface_fullHD-Series', {
            title: 'INSTAR Web User Interface fullHD Series',
          });
      });

module.exports = webUIRouter;
