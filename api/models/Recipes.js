/**
 * Recipes.js
 *
 * @description :: Recipes main model.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name : { type: 'string' },

    description : { type: 'text' },

    authorID : { type: 'integer' },

    isDeleted : { type: 'boolean' },

    picture : { type: 'string' }
  }
};

