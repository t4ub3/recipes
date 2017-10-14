/**
 * RecipeHasCategory.js
 *
 * @description :: Associates a recipe with a category.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    recipeID : { type: 'integer' },

    categoryID : { type: 'integer' }
  }
};

