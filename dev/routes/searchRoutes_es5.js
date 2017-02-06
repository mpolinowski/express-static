var express = require('express');
var searchRouter = express.Router();
var elasticsearch = require('elasticsearch');

var connectionString = 'localhost:9200';

var client = new elasticsearch.Client({
    host: connectionString,
    log: 'trace',
  });

var _index = 'wiki2_en';
var _type = 'article';

/* GET Search page. */
searchRouter.route('/')
    .get(function(req, res) {
        res.render('Search', {
            title: 'INSTAR Wiki Search',
            breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Search/">Search</a></li>',
          });
      });


// Search
searchRouter.route('/Results')
    .get(function(req, res) {

  client.search({
      index: _index,
      type: _type,
    }).then(function(resp) {
      res.render('Search_Results', {
          title: 'INSTAR Wiki Search Results',
          response: resp,
          query: req.query.q,
          breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Search/">Search</a></li><li class="breadcrumb-item"><a href="/Search/Results/">Search Results</a></li>',
        });
    }, function(err) {
      console.trace(err.message);
      res.render('Search_Results', {
          title: 'INSTAR Wiki Search Results',
          response: err.message,
          breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Search/">Search</a></li><li class="breadcrumb-item"><a href="/Search/Results/">Search Results</a></li>',
        });
    });
});

module.exports = searchRouter;
