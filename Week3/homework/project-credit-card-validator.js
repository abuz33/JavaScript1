'use strict';

function cardValidator(cardNumber) {
  let endMessage = '';
  const cardNumberAsString = cardNumber.toString();
  let sum = 0;
  let digitsAsArray = cardNumberAsString.split('');
  let allSameDigit = digitsAsArray.every((val, i, arr) => val === arr[0]);
  for (let i = 0; i < cardNumberAsString.length; i++) {
    sum += parseInt(cardNumberAsString[i]);
  }
  if (cardNumberAsString.length !== 16) {
    endMessage = `The credit card number is not valid because the credit card number you entered has more than 16 digits please try again.`;
  } else if (allSameDigit) {
    endMessage = `The credit card number is not valid because the credit card number you entered has all the digit same.`;
  } else if (sum <= 16) {
    endMessage = `The credit card number is not valid because the sum of digits of credit card number you entered is not more than 16.`;
  } else if (
    parseInt(cardNumberAsString[cardNumberAsString.length - 1]) % 2 !==
    0
  ) {
    endMessage = `The credit card number is not valid because the end digit must be an even number.`;
  } else if (!Number.isInteger(Number(cardNumber))) {
    endMessage = `What you typed is not even a proper number!`;
  } else {
    endMessage = `The credit card number you have entered is a valid credit card number. You can buy whatever you want. Go ahead.`;
  }

  return endMessage;
}

console.log(cardValidator('6666666666661666'));
console.log(cardValidator('9999777788880000'));
console.log(cardValidator('99997777888800a0'));
console.log(cardValidator('1111111111111110'));
