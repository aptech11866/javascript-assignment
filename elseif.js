checkNumber(10);

function checkNumber(num) {
    if (num > 0) {
      console.log(num + " is a positive number.");
    } else if (num < 0) {
      console.log(num + " is a negative number.");
    } else {
      console.log(num + " is zero.");
    }
  }