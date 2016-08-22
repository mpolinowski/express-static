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

module.exports = cgi720pRouter;
