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

  var aggValue = req.query.agg_value;
  var aggField = req.query.agg_field;

  var filter = {};
  filter[aggField] = aggValue;

  client.search({
      index: _index,
      type: _type,
      body: {
          query: {
              filtered: {
                  query: {
                      multi_match: {
                          query: req.query.q,
                          fields: ['title^100', 'tags^50', 'abstract^20', 'description^10', 'models^5', 'chapter^5', 'title2^5'],
                          fuzziness: 1,
                        },
                    },
                  filter: {
                      term: (aggField ? filter : undefined),
                    },
                },

            },
          aggs: {
              title: {
                  terms: {
                      field: 'title.raw',
                    },
                },
              tags: {
                  terms: {
                      field: 'tags.raw',
                    },
                },
              abstract: {
                  terms: {
                      field: 'abstract.raw',
                    },
                },
              title2: {
                  terms: {
                      field: 'title2.raw',
                    },
                },
              chapter: {
                  terms: {
                      field: 'chapter.raw',
                    },
                },
            },
          suggest: {
              text: req.query.q,
              simple_phrase: {
                  phrase: {
                      field: 'title',
                      size: 1,
                      real_word_error_likelihood: 0.95,
                      max_errors: 0.5,
                      gram_size: 2,
                      direct_generator: [{
                          field: 'title',
                          suggest_mode: 'always',
                          min_word_length: 1,
                        },],
                      highlight: {
                          pre_tag: '<b><em>',
                          post_tag: '</em></b>',
                        },
                    },
                },
            },
        },
    }).then(function(resp) {
      res.render('Search_Results', {
          title: 'INSTAR Wiki Search Results',
          response: resp,
          query: req.query.q,
        });
    }, function(err) {
      console.trace(err.message);
      res.render('Search_Results', {
          title: 'INSTAR Wiki Search Results',
          response: err.message,
        });
    });
});

module.exports = searchRouter;
