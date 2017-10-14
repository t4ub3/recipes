/**
 * RecipeHasIngredient.js
 *
 * @description :: Associates a recipe with an ingredient.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    recipeID : { type: 'integer' },

    ingredientID : { type: 'integer' },

    amountPerPerson : { type: 'integer' }
  }
};

