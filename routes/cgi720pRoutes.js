var express = require('express');
var cgi720pRouter = express.Router();

cgi720pRouter.get('/', function(req, res) {
  res.render('./Advanced_User/720p_Series_CGI_List', {
      title: '720p Series CGI List',
    });
});

cgi720pRouter.get('/Software_Menu', function(req, res) {
  res.render('./Advanced_User/720p_Series_CGI_Software', {
      title: '720p Software CGIs',
    });
});

cgi720pRouter.get('/Network_Menu', function(req, res) {
  res.render('./Advanced_User/720p_Series_CGI_Network', {
      title: '720p Network CGIs',
    });
});

cgi720pRouter.get('/System_Menu', function(req, res) {
  res.render('./Advanced_User/720p_Series_CGI_System', {
      title: '720p System CGIs',
    });
});

cgi720pRouter.get('/Multimedia_Menu', function(req, res) {
  res.render('./Advanced_User/720p_Series_CGI_Multimedia', {
      title: '720p Multimedia CGIs',
    });
});

cgi720pRouter.get('/Alarm_Menu', function(req, res) {
  res.render('./Advanced_User/720p_Series_CGI_Alarm', {
      title: '720p Alarm CGIs',
    });
});

cgi720pRouter.get('/Recording_Menu', function(req, res) {
  res.render('./Advanced_User/720p_Series_CGI_Recording', {
      title: '720p Recording CGIs',
    });
});

cgi720pRouter.get('/Complete_CGI_List', function(req, res) {
  res.render('./Advanced_User/720p_Complete_CGI_List', {
      title: '720p Series Complete CGI List',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Video_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getvideoattr', {
      title: '720p cmd=getvideoattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Video_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setvideoattr', {
      title: '720p cmd=setvideoattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Video_Encoder_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getvencattr', {
      title: '720p cmd=getvencattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Video_Encoder_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setvencattr', {
      title: '720p cmd=setvencattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Image_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getimageattr', {
      title: '720p cmd=getimageattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Image_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setimageattr', {
      title: '720p cmd=setimageattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Overlay_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getoverlayattr', {
      title: '720p cmd=getoverlayattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Overlay_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setoverlayattr', {
      title: '720p cmd=setoverlayattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Mobile_Image_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getmobilesnapattr', {
      title: '720p cmd=getmobilesnapattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Mobile_Image_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setmobilesnapattr', {
      title: '720p cmd=setmobilesnapattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Audio_Encoder_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getaencattr', {
      title: '720p cmd=getaencattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Audio_Encoder_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setaencattr', {
      title: '720p cmd=setaencattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Audio-In_Volume_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getaudioinvolume', {
      title: '720p cmd=getaudioinvolume',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Audio-In_Volume_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setaudioinvolume', {
      title: '720p cmd=setaudioinvolume',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Audio-Out_Volume_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getaudiooutvolume', {
      title: '720p cmd=getaudiooutvolume',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Audio-Out_Volume_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setaudiooutvolume', {
      title: '720p cmd=setaudiooutvolume',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Request_Keyframe', function(req, res) {
  res.render('./Advanced_User/720p_cmd=requestifrm', {
      title: '720p cmd=requestifrm',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Infrared_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getinfrared', {
      title: '720p cmd=getinfrared',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Infrared_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setinfrared', {
      title: '720p cmd=setinfrared',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Network_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getnetattr', {
      title: '720p cmd=getnetattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Network_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setnetattr', {
      title: '720p cmd=setnetattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_HTTP_Port', function(req, res) {
  res.render('./Advanced_User/720p_cmd=gethttpport', {
      title: '720p cmd=gethttpport',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_HTTP_Port', function(req, res) {
  res.render('./Advanced_User/720p_cmd=sethttpport', {
      title: '720p cmd=sethttpport',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_RTSP_Port', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getrtspport', {
      title: '720p cmd=getrtspport',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_RTSP_Port', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setrtspport', {
      title: '720p cmd=setrtspport',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Internet_IP', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getinterip', {
      title: '720p cmd=getinterip',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_UPnP_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getupnpattr', {
      title: '720p cmd=getupnpattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_UPnP_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setupnpattr', {
      title: '720p cmd=setupnpattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_ONVIF_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getonvifattr', {
      title: '720p cmd=getonvifattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_ONVIF_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setonvifattr', {
      title: '720p cmd=setonvifattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Wireless_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getwirelessattr', {
      title: '720p cmd=getwirelessattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Wireless_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setwirelessattr', {
      title: '720p cmd=setwirelessattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Search_Wireless', function(req, res) {
  res.render('./Advanced_User/720p_cmd=searchwireless', {
      title: '720p cmd=searchwireless',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Check_Wireless_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=chkwirelessattr', {
      title: '720p cmd=chkwirelessattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Check_Wireless_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getchkwireless', {
      title: '720p cmd=getchkwireless',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Thirdparty_DDNS_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=get3thddnsattr', {
      title: '720p cmd=get3thddnsattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Thirdparty_DDNS_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=set3thddnsattr', {
      title: '720p cmd=set3thddnsattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/PTZ_Control', function(req, res) {
  res.render('./Advanced_User/720p_cmd=ptzctrl', {
      title: '720p cmd=ptzctrl',
    });
});

cgi720pRouter.get('/Complete_CGI_List/PTZ_Preset', function(req, res) {
  res.render('./Advanced_User/720p_cmd=preset', {
      title: '720p cmd=preset',
    });
});

cgi720pRouter.get('/Complete_CGI_List/PTZ_Move_Up', function(req, res) {
  res.render('./Advanced_User/720p_ptzup.cgi', {
      title: '720p ptzup.cgi',
    });
});

cgi720pRouter.get('/Complete_CGI_List/PTZ_Move_Down', function(req, res) {
  res.render('./Advanced_User/720p_ptzdown.cgi', {
      title: '720p ptzdown.cgi',
    });
});

cgi720pRouter.get('/Complete_CGI_List/PTZ_Move_Left', function(req, res) {
  res.render('./Advanced_User/720p_ptzleft.cgi', {
      title: '720p ptzleft.cgi',
    });
});

cgi720pRouter.get('/Complete_CGI_List/PTZ_Move_Right', function(req, res) {
  res.render('./Advanced_User/720p_ptzright.cgi', {
      title: '720p ptzright.cgi',
    });
});

cgi720pRouter.get('/Complete_CGI_List/PTZ_Zoom_In', function(req, res) {
  res.render('./Advanced_User/720p_ptzzoomin.cgi', {
      title: '720p ptzzoomin.cgi',
    });
});

cgi720pRouter.get('/Complete_CGI_List/PTZ_Zoom_Out', function(req, res) {
  res.render('./Advanced_User/720p_ptzzoomout.cgi', {
      title: '720p ptzzoomout.cgi',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Motion_Detection_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getmdattr', {
      title: '720p cmd=getmdattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Motion_Detection_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setmdattr', {
      title: '720p cmd=setmdattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Alarm_Input_Output_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getioattr', {
      title: '720p cmd=getioattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Alarm_Input_Output_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setioattr', {
      title: '720p cmd=setioattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Motion_Detection_Alarm_Status', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getmdalarm', {
      title: '720p cmd=getmdalarm',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Alarm_Relay_Parameter', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setmdalarm', {
      title: '720p cmd=setmdalarm',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Alarm_Relay_Delay_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getrelayattr', {
      title: '720p cmd=getrelayattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Alarm_Relay_Delay_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setrelayattr', {
      title: '720p cmd=setrelayattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Alarm_Snap_Quantity_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getalarmsnapattr', {
      title: '720p cmd=getalarmsnapattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Alarm_Snap_Quantity_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setalarmsnapattr', {
      title: '720p cmd=setalarmsnapattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Alarm_And_Planned_Recording_Schedule', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getscheduleex', {
      title: '720p cmd=getscheduleex',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Alarm_And_Planned_Recording_Schedule', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setscheduleex', {
      title: '720p cmd=setscheduleex',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Planned_Recording_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getplanrecattr', {
      title: '720p cmd=getplanrecattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Planned_Recording_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setplanrecattr', {
      title: '720p cmd=setplanrecattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Alarm_Server_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getalarmserverattr', {
      title: '720p cmd=getalarmserverattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Alarm_Server_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setalarmserverattr', {
      title: '720p cmd=setalarmserverattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_User_Attributes', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getuserattr', {
      title: '720p cmd=getuserattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_User_Attributes', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setuserattr', {
      title: '720p cmd=setuserattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Active_User_Info', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getuserinfo', {
      title: '720p cmd=getuserinfo',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Snapshot_Attributes', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getsnaptimerattrex', {
      title: '720p cmd=getsnaptimerattrex',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Snapshot_Attributes', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setsnaptimerattrex', {
      title: '720p cmd=setsnaptimerattrex',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_FTP_Attributes', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getftpattr', {
      title: '720p cmd=getftpattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_FTP_Attributes', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setftpattr', {
      title: '720p cmd=setftpattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Test_FTP', function(req, res) {
  res.render('./Advanced_User/720p_cmd=testftp', {
      title: '720p cmd=testftp',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_SMTP_Attributes', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getsmtpattr', {
      title: '720p cmd=getsmtpattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_SMTP_Attributes', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setsmtpattr', {
      title: '720p cmd=setsmtpattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Test_SMTP', function(req, res) {
  res.render('./Advanced_User/720p_cmd=testsmtp', {
      title: '720p cmd=testsmtp',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Format_SD_Card', function(req, res) {
  res.render('./Advanced_User/720p_cmd=sdfrmt', {
      title: '720p cmd=sdfrmt',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Unmount_SD_Card', function(req, res) {
  res.render('./Advanced_User/720p_cmd=sdstop', {
      title: '720p cmd=sdstop',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Device_Info', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getserverinfo', {
      title: '720p cmd=getserverinfo',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Device_Type', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getdevtype', {
      title: '720p cmd=getdevtype',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Streaming_User_Number', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getstreamnum', {
      title: '720p cmd=getstreamnum',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Server_Time', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getservertime', {
      title: '720p cmd=getservertime',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Server_Time', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setservertime', {
      title: '720p cmd=setservertime',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_NTP_Server_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getntpattr', {
      title: '720p cmd=getntpattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_NTP_Server_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setntpattr', {
      title: '720p cmd=setntpattr',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Multi-Device_Parameter', function(req, res) {
  res.render('./Advanced_User/720p_cmd=getdevices', {
      title: '720p cmd=getdevices',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Multi-Device_Parameter', function(req, res) {
  res.render('./Advanced_User/720p_cmd=setdevices', {
      title: '720p cmd=setdevices',
    });
});

cgi720pRouter.get('/Complete_CGI_List/MJPEG_Videostream', function(req, res) {
  res.render('./Advanced_User/720p_mjpegstream.cgi', {
      title: '720p mjpegstream.cgi',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Snapshot_Size', function(req, res) {
  res.render('./Advanced_User/720p_cmd=snapimage', {
      title: '720p cmd=snapimage',
    });
});

cgi720pRouter.get('/Complete_CGI_List/System_Reset', function(req, res) {
  res.render('./Advanced_User/720p_Sysreset.cgi', {
      title: '720p Sysreset.cgi',
    });
});

cgi720pRouter.get('/Complete_CGI_List/System_Reboot', function(req, res) {
  res.render('./Advanced_User/720p_Sysreboot.cgi', {
      title: '720p Sysreboot.cgi',
    });
});

cgi720pRouter.get('/Complete_CGI_List/System_Backup', function(req, res) {
  res.render('./Advanced_User/720p_backup.cgi', {
      title: '720p backup.cgi',
    });
});

cgi720pRouter.get('/Complete_CGI_List/System_Restore', function(req, res) {
  res.render('./Advanced_User/720p_restore.cgi', {
      title: '720p restore.cgi',
    });
});

cgi720pRouter.get('/Complete_CGI_List/System_Upgrade', function(req, res) {
  res.render('./Advanced_User/720p_upgrade.cgi', {
      title: '720p upgrade.cgi',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Admin_Variables', function(req, res) {
  res.render('./Advanced_User/720p_cmd=get_instar_admin', {
      title: '720p cmd=get_instar_admin',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Admin_Variables', function(req, res) {
  res.render('./Advanced_User/720p_cmd=set_instar_admin', {
      title: '720p cmd=set_instar_admin',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Login_Data', function(req, res) {
  res.render('./Advanced_User/720p_cmd=logsync', {
      title: '720p cmd=logsync',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Clear_Login_Data', function(req, res) {
  res.render('./Advanced_User/720p_cmd=cleanlog', {
      title: '720p cmd=cleanlog',
    });
});


module.exports = cgi720pRouter;
