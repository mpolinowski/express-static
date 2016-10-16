var express = require('express');
var searchRouter = express.Router();
var elasticsearch = require('elasticsearch');

var connectionString = 'localhost:9200';

var client = new elasticsearch.Client({
    host: connectionString,
    log: 'trace',
  });

var _index = 'wiki';
var _type = 'article';

/* GET Search page. */
searchRouter.route('/')
    .get(function(req, res) {
        res.render('Search', {
            title: 'INSTAR Wiki Search',
          });
      });


// Search
searchRouter.route('/Results')
    .get(function(req, res) {

      var userQuery = request.params.search_query;

      var searchParams = {
        index: '_index',
        body: {
          query: {
            filtered: {
              query: {
                match: {
                  // Match the query agains all of
                  // the fields in the posts index
                  _all: userQuery,
                },
              },
            },
          },
        },
      };
      client.search(searchParams, function(err, res) {
        console.trace(err.message);
        res.render('Search_Results', {
            title: 'INSTAR Wiki Search Results',
            response: err.message,
          });

        response.render('Search_Results', {
          results: res.hits.hits,
          page: pageNum,
          pages: Math.ceil(res.hits.total / perPage),
          title: 'INSTAR Wiki Search Results',
        });
      });
    });

module.exports = searchRouter;
