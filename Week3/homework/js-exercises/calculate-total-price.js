'use strict';

function calculateTotalPrice(items) {
  let total = 0;
  for (let item in items) {
    total += items[item];
  }
  return `total price of all items is ${total}`;
}

const cartForParty = {
  sweet: 2.75,
  chocolate: 5.0,
  cake: 14.0,
  drinks: 50.0,
  chips: 3.75
};

console.log(calculateTotalPrice(cartForParty));
