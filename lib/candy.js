/*
 * Require mongoose, an object modeling
 * library for MongoDB.
 * http://mongoosejs.com/
 */

var mongoose = require('mongoose');

/*
 * Using mongoose, connect to our
 * database at the specified URL.
 */

mongoose.connect(process.env.MONGOSOUP_URL || 'mongodb://localhost/carrot-u-api');

/*
 * Create a MongoDB collection (called a `model`
 * by Mongoose). A collection, in principle, is
 * much like a `table` in a SQL database.  However,
 * note that Mongo uses a "flexible schema." In SQL,
 * table schemas must be declared before data is
 * inserted.  In Mongo, schemas are not enforced;
 * each "instance" may have its own distinct set
 * of fields.
 *
 * For more:
 * http://docs.mongodb.org/manual/core/data-modeling-introduction/
 */

var Candy = mongoose.model('Candy', {

  /*
   * Mongoose lets you declare a
   * schema, mostly for validation
   * and to convert values to the
   * appropriate JavaScript object
   * type.
   */

  name: String,
  flavor: String,
  price: Number

});

/*
 * Finally, export the Mongoose model. In Node.js,
 * one exports an object (e.g. makes it accessible
 * when the module is required) by assigning it to
 * `module.exports`.
 */

module.exports = Candy;
