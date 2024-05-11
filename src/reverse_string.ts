// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

export function reverse(str: string) {
	return str.split("").reverse().join("");
}

/* without using .reverse() helper */
/* could also use a loop */
export function reverseWithoutReverse(str: string) {
	return str.split("").reduce((acc, curr) => curr + acc, "");
}
