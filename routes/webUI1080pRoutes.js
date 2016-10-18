var express = require('express');
var webUI1080pRouter = express.Router();

/* GET WebUI page. */
webUI1080pRouter.route('/Overview')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface', {
            title: 'INSTAR Web User Interface',
          });
      });

/* ###################################### fullHD Series ###################################### */

/* GET fullHD WebUI page. */
webUI1080pRouter.route('/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series', {
            title: 'INSTAR Web User Interface fullHD Series',
          });
      });

/* ###################################### fullHD Series Software ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Software/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Software', {
            title: 'Software Menu',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Software/Language/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Software_Language', {
            title: 'Software Menu :: Language',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Software/Backup/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Software_Backup', {
            title: 'Software Menu :: Backup',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Software/Update/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Software_Update', {
            title: 'Software Menu :: Update',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Software/Reboot_Reset/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Software_Reboot_Reset', {
            title: 'Software Menu :: Reboot & Reset',
          });
      });

/* ###################################### fullHD Series Network ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Network/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network', {
            title: 'Network Menu',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Network/IP_Configuration/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_IP_Configuration', {
            title: 'Network Menu :: IP Configuration',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Network/WiFi/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_WiFi', {
            title: 'Network Menu :: WiFi',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Network/DDNS/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_DDNS', {
            title: 'Network Menu :: DDNS',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Network/P2P/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_P2P', {
            title: 'Network Menu :: P2P',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Network/UPnP/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_UPnP', {
            title: 'Network Menu :: UPnP',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Network/Push_Service/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_Push_Service', {
            title: 'Network Menu :: Push Service',
          });
      });

/* ###################################### fullHD Series System ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System', {
            title: 'System Menu',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/Info/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Info', {
            title: 'System Menu :: Info',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/Date_Time/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Date_Time', {
            title: 'System Menu :: Date & Time',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/User/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_User', {
            title: 'System Menu :: User',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/Status_LED/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Status_LED', {
            title: 'System Menu :: Status LED',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/IR_LED/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_IR_LED', {
            title: 'System Menu :: IR LED',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/ONVIF/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_ONVIF', {
            title: 'System Menu :: ONVIF',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/PTZ/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_PTZ', {
            title: 'System Menu :: PTZ',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/PTZ_Tour/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_PTZ_Tour', {
            title: 'System Menu :: PTZ Tour',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/System_Log/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_System_Log', {
            title: 'System Menu :: System Log',
          });
      });

/* ###################################### fullHD Series Multimedia ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Multimedia/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia', {
            title: 'Multimedia Menu',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Multimedia/Audio/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Audio', {
            title: 'Multimedia Menu :: Audio',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Multimedia/Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Video', {
            title: 'Multimedia Menu :: Video',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Multimedia/Image/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Image', {
            title: 'Multimedia Menu :: Image',
          });
      });

/* ###################################### fullHD Series Alarm ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm', {
            title: 'Alarm Menu',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/Areas/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Areas', {
            title: 'Alarm Menu :: Areas',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/Privacy_Mask/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Privacy_Mask', {
            title: 'Alarm Menu :: Privacy Mask',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/Actions/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Actions', {
            title: 'Alarm Menu :: Actions',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/Schedule/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Schedule', {
            title: 'Alarm Menu :: Schedule',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/SMTP_Server/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_SMTP_Server', {
            title: 'Alarm Menu :: SMTP Server',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/Email/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Email', {
            title: 'Alarm Menu :: Email',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/FTP/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_FTP', {
            title: 'Alarm Menu :: FTP',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/Audio_Alarm/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Audio_Alarm', {
            title: 'Alarm Menu :: Audio Alarm',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/SD_Card/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_SD_Card', {
            title: 'Alarm Menu :: SD Card',
          });
      });

/* ###################################### fullHD Series Recording ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Recording/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Recording', {
            title: 'Recording Menu',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Recording/Schedule/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Recording_Schedule', {
            title: 'Recording Menu :: Schedule',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Recording/Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Recording_Video', {
            title: 'Recording Menu :: Video',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Recording/Photoseries/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Recording_Photoseries', {
            title: 'Recording Menu :: Photoseries',
          });
      });

/* ###################################### fullHD Series Menu Bar ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Menu_Bar/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Menu_Bar', {
            title: 'Menu Bar',
          });
      });

/* ###################################### fullHD Series Video Menu Bar ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Video_Menu_Bar/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Video_Menu_Bar', {
            title: 'Video Menu Bar',
          });
      });

/* ###################################### fullHD Series PTZ ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/PTZ_Control/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_PTZ_Control', {
            title: 'PTZ Control',
          });
      });


module.exports = webUI1080pRouter;
