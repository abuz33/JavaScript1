'use strict';

const drinkTray = [];

const drinks = ['cola', 'lemonade', 'water'];

for (const i = 0; i < 5; i++) {
  drinkTray.push(drinks[i % drinks.length]);
}

console.log(
  `Hey Guys!!! I brought ${drinkTray.join(', ')} to soften our throat.`
);
