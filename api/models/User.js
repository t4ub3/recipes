/**
 * User.js
 *
 * @description :: A user of the system, who can create recipes.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name : { type: 'string' },

    email : { type: 'string' },

    password : { type: 'string' }
  }
};

