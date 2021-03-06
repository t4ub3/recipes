/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name : {
      type: 'string',
      required: true,
      unique: true,
      alphanumeric: true
    },

    email : {
      type: 'string',
      required: true,
      unique: true,
      email: true
    },

    password : {
      type: 'string',
      required: true
    },

    recipes : {
      collection: 'recipe',
      via: 'author'
    }
  }
};

