/*
DIRECTIONS
Write a program that console logs the numbers
from 1 to n. But for multiples of three print
“fizz” instead of the number and for the multiples
of five print “buzz”. For numbers which are multiples
of both three and five print “fizzbuzz”.
--- Example
  fizzBuzz(5);
  1
  2
  fizz
  4
  buzz
*/

// helper function
function isMultipleOf(num: number, factor: number) {
	return num % factor === 0;
}

export function fizzBuzz(n: number) {
	for (let i = 1; i <= n; i++) {
		if (isMultipleOf(i, 3) && isMultipleOf(i, 5)) {
			console.log("fizzbuzz");
		} else if (isMultipleOf(i, 3)) {
			console.log("fizz");
		} else if (isMultipleOf(i, 5)) {
			console.log("buzz");
		} else {
			console.log(i);
		}
	}
}

/*
THOUGHT PROCESS
we can use the "%" operator to check if it's a multiple of 3 or 5 

we want to use if/if else/else so we can check if it's a multiple of both 3 and 5

will right a helper function for checking if it's a multiple so I don't
have to rewrite the same check 
*/
