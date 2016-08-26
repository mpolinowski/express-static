var express = require('express');
var cgi1080pRouter = express.Router();


cgi1080pRouter.get('/', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_Series_CGI_List', {
      title: '1080p Series CGI List',
    });
});

cgi1080pRouter.get('/Software_Menu', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_Series_CGI_Software', {
      title: '1080p Software CGIs',
    });
});

cgi1080pRouter.get('/Network_Menu', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_Series_CGI_Network', {
      title: '1080p Network CGIs',
    });
});

cgi1080pRouter.get('/System_Menu', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_Series_CGI_System', {
      title: '1080p System CGIs',
    });
});

cgi1080pRouter.get('/Multimedia_Menu', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_Series_CGI_Multimedia', {
      title: '1080p Multimedia CGIs',
    });
});

cgi1080pRouter.get('/Alarm_Menu', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_Series_CGI_Alarm', {
      title: '1080p Alarm CGIs',
    });
});

cgi1080pRouter.get('/Recording_Menu', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_Series_CGI_Recording', {
      title: '1080p Recording CGIs',
    });
});

cgi1080pRouter.get('/Complete_CGI_List', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_Complete_CGI_List', {
      title: '1080p Series Complete CGI List',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Video_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getvideoattr', {
      title: '1080p cmd=getvideoattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Video_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setvideoattr', {
      title: '1080p cmd=setvideoattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Video_Encoder_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getvencattr', {
      title: '1080p cmd=getvencattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Video_Encoder_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setvencattr', {
      title: '1080p cmd=setvencattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Image_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getimageattr', {
      title: '1080p cmd=getimageattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Image_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setimageattr', {
      title: '1080p cmd=setimageattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Overlay_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getoverlayattr', {
      title: '1080p cmd=getoverlayattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Overlay_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setoverlayattr', {
      title: '1080p cmd=setoverlayattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Mobile_Image_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getmobilesnapattr', {
      title: '1080p cmd=getmobilesnapattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Mobile_Image_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setmobilesnapattr', {
      title: '1080p cmd=setmobilesnapattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Audio_Encoder_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getaencattr', {
      title: '1080p cmd=getaencattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Audio_Encoder_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setaencattr', {
      title: '1080p cmd=setaencattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Audio-In_Volume_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getaudioinvolume', {
      title: '1080p cmd=getaudioinvolume',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Audio-In_Volume_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setaudioinvolume', {
      title: '1080p cmd=setaudioinvolume',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Audio-Out_Volume_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getaudiooutvolume', {
      title: '1080p cmd=getaudiooutvolume',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Audio-Out_Volume_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setaudiooutvolume', {
      title: '1080p cmd=setaudiooutvolume',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Request_Keyframe', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=requestifrm', {
      title: '1080p cmd=requestifrm',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Infrared_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getinfrared', {
      title: '1080p cmd=getinfrared',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Infrared_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setinfrared', {
      title: '1080p cmd=setinfrared',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Network_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getnetattr', {
      title: '1080p cmd=getnetattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Network_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setnetattr', {
      title: '1080p cmd=setnetattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_HTTP_Port', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=gethttpport', {
      title: '1080p cmd=gethttpport',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_HTTP_Port', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=sethttpport', {
      title: '1080p cmd=sethttpport',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_RTSP_Port', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getrtspport', {
      title: '1080p cmd=getrtspport',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_RTSP_Port', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setrtspport', {
      title: '1080p cmd=setrtspport',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Internet_IP', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getinterip', {
      title: '1080p cmd=getinterip',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_UPnP_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getupnpattr', {
      title: '1080p cmd=getupnpattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_UPnP_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setupnpattr', {
      title: '1080p cmd=setupnpattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_ONVIF_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getonvifattr', {
      title: '1080p cmd=getonvifattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_ONVIF_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setonvifattr', {
      title: '1080p cmd=setonvifattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Wireless_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getwirelessattr', {
      title: '1080p cmd=getwirelessattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Wireless_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setwirelessattr', {
      title: '1080p cmd=setwirelessattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Search_Wireless', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=searchwireless', {
      title: '1080p cmd=searchwireless',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Check_Wireless_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=chkwirelessattr', {
      title: '1080p cmd=chkwirelessattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Check_Wireless_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getchkwireless', {
      title: '1080p cmd=getchkwireless',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Thirdparty_DDNS_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=get3thddnsattr', {
      title: '1080p cmd=get3thddnsattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Thirdparty_DDNS_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=set3thddnsattr', {
      title: '1080p cmd=set3thddnsattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/PTZ_Control', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=ptzctrl', {
      title: '1080p cmd=ptzctrl',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/PTZ_Preset', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=preset', {
      title: '1080p cmd=preset',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/PTZ_Move_Up', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=ptzup', {
      title: '1080p cmd=ptzup',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/PTZ_Move_Down', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=ptzdown', {
      title: '1080p cmd=ptzdown',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/PTZ_Move_Left', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=ptzleft', {
      title: '1080p cmd=ptzleft',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/PTZ_Move_Right', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=ptzright', {
      title: '1080p cmd=ptzright',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/PTZ_Zoom_In', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=ptzzoomin', {
      title: '1080p cmd=ptzzoomin',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/PTZ_Zoom_Out', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=ptzzoomout', {
      title: '1080p cmd=ptzzoomout',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Motion_Detection_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getmdattr', {
      title: '1080p cmd=getmdattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Motion_Detection_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setmdattr', {
      title: '1080p cmd=setmdattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Alarm_Input_Output_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getioattr', {
      title: '1080p cmd=getioattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Alarm_Input_Output_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setioattr', {
      title: '1080p cmd=setioattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Motion_Detection_Alarm_Status', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getmdalarm', {
      title: '1080p cmd=getmdalarm',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Motion_Detection_Alarm_Status', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setmdalarm', {
      title: '1080p cmd=setmdalarm',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Alarm_Relay_Delay_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getrelayattr', {
      title: '1080p cmd=getrelayattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Alarm_Relay_Delay_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setrelayattr', {
      title: '1080p cmd=setrelayattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Alarm_Snap_Quantity_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getalarmsnapattr', {
      title: '1080p cmd=getalarmsnapattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Alarm_Snap_Quantity_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setalarmsnapattr', {
      title: '1080p cmd=setalarmsnapattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Alarm_And_Planned_Recording_Schedule', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getscheduleex', {
      title: '1080p cmd=getscheduleex',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Alarm_And_Planned_Recording_Schedule', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setscheduleex', {
      title: '1080p cmd=setscheduleex',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Planned_Recording_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getplanrecattr', {
      title: '1080p cmd=getplanrecattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Planned_Recording_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setplanrecattr', {
      title: '1080p cmd=setplanrecattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Alarm_Server_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getalarmserverattr', {
      title: '1080p cmd=getalarmserverattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Alarm_Server_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setalarmserverattr', {
      title: '1080p cmd=setalarmserverattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_User_Attributes', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getuserattr', {
      title: '1080p cmd=getuserattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_User_Attributes', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setuserattr', {
      title: '1080p cmd=setuserattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Active_User_Info', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getuserinfo', {
      title: '1080p cmd=getuserinfo',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Snapshot_Attributes', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getsnaptimerattrex', {
      title: '1080p cmd=getsnaptimerattrex',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Snapshot_Attributes', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setsnaptimerattrex', {
      title: '1080p cmd=setsnaptimerattrex',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_FTP_Attributes', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getftpattr', {
      title: '1080p cmd=getftpattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_FTP_Attributes', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setftpattr', {
      title: '1080p cmd=setftpattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Test_FTP', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=testftp', {
      title: '1080p cmd=testftp',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_SMTP_Attributes', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getsmtpattr', {
      title: '1080p cmd=getsmtpattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_SMTP_Attributes', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setsmtpattr', {
      title: '1080p cmd=setsmtpattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Test_SMTP', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=testsmtp', {
      title: '1080p cmd=testsmtp',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Format_SD_Card', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=sdfrmt', {
      title: '1080p cmd=sdfrmt',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Unmount_SD_Card', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=sdstop', {
      title: '1080p cmd=sdstop',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Device_Info', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getserverinfo', {
      title: '1080p cmd=getserverinfo',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Device_Type', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getdevtype', {
      title: '1080p cmd=getdevtype',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Streaming_User_Number', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getstreamnum', {
      title: '1080p cmd=getstreamnum',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Server_Time', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getservertime', {
      title: '1080p cmd=getservertime',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Server_Time', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setservertime', {
      title: '1080p cmd=setservertime',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_NTP_Server_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getntpattr', {
      title: '1080p cmd=getntpattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_NTP_Server_Attribute', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setntpattr', {
      title: '1080p cmd=setntpattr',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Multi-Device_Parameter', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=getdevices', {
      title: '1080p cmd=getdevices',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Multi-Device_Parameter', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=setdevices', {
      title: '1080p cmd=setdevices',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/MJPEG_Videostream', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_mjpegstream', {
      title: '1080p mjpegstream',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Snapshot_Size', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=snapimage', {
      title: '1080p cmd=snapimage',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/System_Reset', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_Sysreset', {
      title: '1080p Sysreset',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/System_Reboot', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_Sysreboot', {
      title: '1080p Sysreboot',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/System_Backup', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_backup', {
      title: '1080p backup',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/System_Restore', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_restore', {
      title: '1080p restore',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/System_Upgrade', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_upgrade', {
      title: '1080p upgrade',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Admin_Variables', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=get_instar_admin', {
      title: '1080p cmd=get_instar_admin',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Admin_Variables', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=set_instar_admin', {
      title: '1080p cmd=set_instar_admin',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Login_Data', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=logsync', {
      title: '1080p cmd=logsync',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Clear_Login_Data', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_cmd=cleanlog', {
      title: '1080p cmd=cleanlog',
    });
});

module.exports = cgi1080pRouter;
