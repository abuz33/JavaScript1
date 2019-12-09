function firstWord(string) {
  let words = string.split(' ');
  return words[0];
}

function firstWord2(input, splitBy = ' ', item = 0) {
  const words = input.split(splitBy);
  return words[item];
}

console.log(firstWord2('Hack Your Future'));

console.log(firstWord2('we,are,in,amsterdam'), ',', 2);

const first = firstWord('Hack Your Future');
console.log(first);

function firstLetterOfEachWord(string) {
  let words = string.split(' '); // words = ['Hack', 'Your', "Future" ]
  let abbriviation = '';

  for (let word of words) {
    // let part = word.split(''); // ['']
    abbriviation += word[0];
  }
  return abbriviation;
}

const abb = firstLetterOfEachWord('Hack Your Future'); // ?
console.log(abb);

// charAt
