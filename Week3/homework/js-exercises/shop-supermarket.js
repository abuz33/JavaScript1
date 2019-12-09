'use strict';

function addToShoppingCart(groceryItem) {
  let groceryItemList = ['banana', 'milk'];

  if (groceryItemList.length < 3) {
    groceryItemList.push(groceryItem);
  } else {
    groceryItemList.push(groceryitem);
    groceryItemList.shift();
  }
  return `You bought ${groceryItemList}!`;
}

console.log(addToShoppingCart('rice'));
console.log(addToShoppingCart('cheese'));
console.log(addToShoppingCart('meat'));
