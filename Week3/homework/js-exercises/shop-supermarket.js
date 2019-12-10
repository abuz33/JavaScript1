'use strict';

let groceryItemList = ['banana', 'milk'];

function addToShoppingCart(groceryItem, arr = []) {
  arr.push(groceryItem);

  if (arr.length > 3) {
    arr.shift();
  }
  return `You bought ${arr}!`;
}

console.log(addToShoppingCart('rice', groceryItemList));
console.log(addToShoppingCart('cheese', groceryItemList));
console.log(addToShoppingCart('meat', groceryItemList));
