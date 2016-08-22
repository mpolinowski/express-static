var express = require('express');
var cgi1080pRouter = express.Router();


cgi1080pRouter.get('/', function(req, res) {
  res.render('./Advanced_User/1080p_Series_CGI_List', {
      title: '1080p Series CGI List',
    });
});

module.exports = cgi1080pRouter;
