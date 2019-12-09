'use strict';

Array.prototype.sample = function() {
  return this[Math.floor(Math.random() * this.length)];
};

function giveCompliment(name) {
  let compliments = [
    'great',
    'awesome',
    'wonderful',
    'tall',
    'handsome',
    'beatiful',
    'smart',
    'courages',
    'great listener',
    'candle in the dark'
  ];

  let randomCompliment = compliments.sample();
  return `You are ${randomCompliment}, ${name}`;
}

console.log(giveCompliment('Noer'));
