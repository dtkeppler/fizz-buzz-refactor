var userInput = prompt("Please enter a number");
var max = parseInt(userInput);

fizzbuzz(max)

function fizzbuzz(max) {
  for ( var i = 1; i <= max; i++ ) {
    if (i % 5 == 0 && i % 3 == 0) {
      document.write("FizzBuzz" + ", ");
    } else if ( i % 3 == 0 ) {
      document.write("Fizz" + ", ");
    } else if (i % 5 == 0) {
      document.write("Buzz" + ", ");
    } else {
      document.write(i + ", ");
    }
  }
}


