'use strict';

function gradeConverter(result) {
  let msg = '';
  let grade = '';
  if (result < 0 || result > 100) {
    msg = `The value ${result} is not valid`;
  } else if (result < 50) {
    grade = 'F';
  } else if (result < 60) {
    grade = 'E';
  } else if (result < 70) {
    grade = 'D';
  } else if (result < 80) {
    grade = 'C';
  } else if (result < 90) {
    grade = 'B';
  } else if (result < 100) {
    grade = 'A';
  }

  if (msg == `The value ${result} is not valid`) {
    return `The value ${result} is not valid`;
  } else {
    return `You got an ${grade} (${result}%)!`;
  }
}

console.log(gradeConverter(75));
