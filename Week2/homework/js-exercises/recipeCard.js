'use strict';

const recipeCard = {
  nameOfTheMeal: 'Menemen',
  serves: 4,
  ingredients: [
    '4 large free range eggs',
    '7-8 medium tomatoes',
    '1 Onion',
    '1 small green bell pepper',
    '2 tsp hot chilli flakes ',
    'Sunflower oil for frying',
    '1 tsp salt',
    '1 tsp pepper',
    '1 tsp salt'
  ]
};

for (const attribute in recipeCard) {
  if (Array.isArray(recipeCard[attribute])) {
    console.log(`${attribute.match(/[A-Z][a-z]+|[0-9]+/g).join(' ')} :`);
    for (let part of recipeCard[attribute]) console.log(`${part}`);
  } else {
    console.log(
      `${attribute.match(/[A-Z][a-z]+|[0-9]+/g).join(' ')} : ${
        recipeCard[attribute]
      }`
    );
  }
}
