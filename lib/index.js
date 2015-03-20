/*
 * Require modules.  Modules which are "local"
 * to your project are included by requiring
 * a path; modules installed via npm are
 * simply referenced by the package name.
 */

var Candy = require('./candy') // Our Candy object.
  , express = require('express') // Express (https://github.com/strongloop/express)
  , bodyParser = require('body-parser'); // body-parser Express middleware (see below)

/*
 * Create Express instance.
 */

var app = express();

/*
 * Add middleware to Express. An Express application is
 * essentially a series of middleware calls. Middleware
 * is a function with access to the `request` object, the
 * `response` object, and the next middleware in line in
 * the request-response cycle of an Express application,
 * commonly denoted by a variable named `next`.
 *
 * Middleware can:
 *
 * - Execute any code.
 * - Make changes to the request and the response objects.
 * - End the request-response cycle.
 * - Call the next middleware in the stack.
 *
 * If the current middleware does not end the request-response,
 * cycle, it must call next() to pass control to the next
 * middleware; otherwise, the request will be left hanging.
 *
 * http://expressjs.com/guide/using-middleware.html
 */

app.use(bodyParser.json()); // for writing json responses.
app.use(bodyParser.urlencoded({extended: true})); // for URL-encoded request body; used often for POST methods.

/*
 * Helper which returns a callback
 * function which responds with correct
 * status codes and a JSON object if
 * there is no error.
 */

function onCompletion (response) {
  return function (error, result) {
    if (error) {
      response.status(500).end();
    } else {
      response.status(200).json(result);
    }
  }
}

/*
 * Add routes.  To create a GET route, use `app.get(route, callback)`;
 * to create a POST route, use `app.post(route, callback)`; and so on.
 *
 * Method reference:
 * http://expressjs.com/4x/api.html#app.METHOD
 */

app.get('/candies', function (request, response) {

  /*
   * GET /candies
   * Get all candies.
   * Returns an array of dictionaries.
   */

  Candy.find().exec(onCompletion(response));

});

app.get('/candies/:id', function (request, response) {

  /*
   * GET /candies/:id
   * Get one Candy, selected by its identifier (`id`).
   * Returns a dictionary.
   */

  Candy.findOne({_id: request.params.id}, onCompletion(response));

});

app.post('/candies', function (request, response) {

  /*
   * POST /candies
   * Create a candy.
   * Returns a dictionary.
   */

  Candy.create(request.body, onCompletion(response));

});

app.put('/candies/:id', function (request, response) {

  /*
   * PUT /candies/:id
   * Update attributes of one Candy, selected by
   * its identifier (`id`)
   * Returns 1
   */

  Candy.update({_id: request.params.id}, request.body, onCompletion(response));

});

app.delete('/candies/:id', function (request, response) {

  /*
   * DELETE /candies/:id
   * Delete one Candy, selected by its identifier (`id`)
   * Returns 1
   */

  Candy.remove({_id: request.params.id}, onCompletion(response));

});

/*
 * Start the server.
 */

var port = (process.env.PORT || 6969);
app.listen(port, function () {
  console.log('Server started at port ' + port + '!');
});
