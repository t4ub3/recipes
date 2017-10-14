/**
 * Ingredients.js
 *
 * @description :: Ingredients which can be used in recipes, associated with the measure they should be given in.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name : { type: 'string' },

    hasStandardMeasureID : { type: 'integer' }
  }
};

