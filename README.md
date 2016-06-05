#A Node/Express App with Static Content (Training)


 This code is part of a training in web development with **Node.js** and **Express /Generator**. Goal of this course is to quickly set up a node/express environment to serve static HTML/CSS/JS content.

This App was created in several steps:

1. [Install Node.js and Express.js to serve our Web Application](#1-install-nodejs-and-expressjs-to-serve-our-web-application)
2. [Preparing the Site Structure](#2-preparing-the-site-structure)
3. []()
4. []()
5. []()
6. []()
  * []()


### 1 Install Node.js and Express.js to serve our Web Application
___

* Install [Node.js](https://nodejs.org/en/download/).
* Install express-generator globally to set up our node/express scaffolding: *npm install -g express-generator*
* Apply the generator with the EJS templating engine (*-e*) and give your app an name (*e.g. express-static*): *express -e express-static*
* Switch to the created express-static folder and install dependencies: *cd express-static && npm install*
* Start the app with: DBEUG=my-application ./bin/www


### 2 Preparing the Site Structure
___

* Add *partials/content* to the *views* folder
* Add *partials/template* to views and add *head.ejs*, *header.ejs*, *footer.ejs* and *jsdefaults.ejs*
* Copy content from the *head* section of your web site (*index.ejs*) to *head.ejs*
* Reference the *head.ejs* file inside the *head* section of index.ejs: *<% include partials/template/head.ejs %>*
* Add *<script src="/javascrip/scrip.js"></script>* to *jsdefaults.ejs* and reference it in *index.ejs* at the end of body: *<% include partials/template/jsdefaults.ejs %>*
* Copy all JS script tags to *jsdefaults.ejs*
* Copy content from the *footer* section of your web site (*index.ejs*) to *footer.ejs*
* Reference the *footer.ejs* file inside the *footer* section of index.ejs: *<% include partials/template/footer.ejs %>*
* Repeat with other partials that you might want to reuse on other pages!
* Copy all your websites (EJS files) pages into the content folder


### 3 Import JSON Elements
___

**index.js**

Let´s add data from the *gallery.json* file to our index.ejs page. First we have to reference the JSON document in the *index.js* route. We also specify which elemts we want to extract from the file, so we can later create a for-loop over it inside the gallery-xxx.ejs partials.

```javascript
var express = require('express');
var router = express.Router();
var appdata = require('../views/partials/data/gallery.json'); /* Reference the JSON file (can later be subtitued by a database) */

/* GET home page. */
router.get('/', function(req, res, next) {

    var qiPicture = []; /* Create arrays  */
    var qiPictureAlt = [];
    var qiHref = [];
    var iaPicture = [];
    var iaPictureAlt = [];
    var iaHref = [];
    var mdPicture = [];
    var mdPictureAlt = [];
    var mdHref = [];
    appdata.articles.forEach(function(item) { /* Add all elements from gallery.json for the gallery */
        qiPicture = qiPicture.concat(item.qiPic);
        qiPictureAlt = qiPictureAlt.concat(item.qiPicAlt);
        qiHref = qiHref.concat(item.qiUrl);
        iaPicture = iaPicture.concat(item.iaPic);
        iaPictureAlt = iaPictureAlt.concat(item.iaPicAlt);
        iaHref = iaHref.concat(item.iaUrl);
        mdPicture = mdPicture.concat(item.mdPic);
        mdPictureAlt = mdPictureAlt.concat(item.mdPicAlt);
        mdHref = mdHref.concat(item.mdUrl);
      });

    res.render('index', {  /* Make arrays available in index.ejs */
        title: 'INSTAR Wiki',
        qiPic: qiPicture,
        qiPicAlt: qiPictureAlt,
        qiUrl: qiHref,
        iaPic: iaPicture,
        iaPicAlt: iaPictureAlt,
        iaUrl: iaHref,
        mdPic: mdPicture,
        mdPicAlt: mdPictureAlt,
        mdUrl: mdHref,
      });
  });

module.exports = router;
```

**gallery-xxx.ejs**

Now we can for-loop over all required elements in our gallery partials:

```javascript
<% if (mdPic.length > 0) { %>
    <% for (i=1; i<mdPic.length; i++) { %>
        <div class="col-xs-6 col-lg-4 mb">
            <a href="http://loxalhost:3000/<%= mdUrl[i] %>"><img src="<%= mdPic[i] %>" alt="<%= mdPicAlt[i] %>" class="img-fluid"></a>
        </div>
    <% } %>
<% } %>
```
