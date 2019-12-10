'use strict';

Array.prototype.sample = function() {
  return this[Math.floor(Math.random() * this.length)];
};

let childNumber = [2, 4, 7, 1, 10];
let partnerName = ['Jane', 'Jasmine', 'Bea', 'Anike', 'Eve'];
let location = ['Amsterdam', 'London', 'New York', 'Toronto', 'Roterdam'];
let jobTitle = [
  'Fullstack Developer',
  'Front-End Developer',
  'Data Analyst',
  'Bakc-end Developer',
  'Software Developer'
];

function tellMyFortune(childNumber, partnerName, location, jobTitle) {
  return `You will be a ${jobTitle.sample()} in ${location.sample()}, and married to ${partnerName.sample()} with ${childNumber.sample()} kids.`;
}

console.log(tellMyFortune(childNumber, partnerName, location, jobTitle));
