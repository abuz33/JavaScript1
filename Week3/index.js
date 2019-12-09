function someFunction() {
  let names = [];

  for (let i = 0; i < 3; i++) {
    if (i > 1) {
      names.push('Hank');
    } else {
      names.push('Rita');
      break;
    }
  }
  return names;
}

console.log(someFunction);
