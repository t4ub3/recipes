/**
 * Recipe.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name : {
      type: 'string',
      required: true
    },

    description : {
      type: 'text'
    },

    is_deleted : {
      type: 'boolean'
    },

    picture : {
      type: 'string'
    },

    author: {
      model: 'user'
    },

    tags: {
      collection: 'tag',
      via: 'taggedRecipes',
      dominant: true
    },

    ingredients: {
      collection: 'ingredient',
      via: 'recipe',
      through: 'amountperperson'
    }
  }
};

