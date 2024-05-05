/**
 * Find the length of the longest substring of unique characters
 * @param theString a string of characters
 * @returns the length of the longest subtring with no repeating characters
 * @example let str = "abbbcabcdefef" the longest unique substring is "abcdef" so the output would be 6
 */

export function longestUniqueSubstringLength(theString: string) {
	// we could consider this an error, is it technically even a substring if it's also the whole string?
	if (theString.length === 1) return 1;

	// bypass the loop if there are only two characters, either they are unique or the same
	if (theString.length === 2) {
		theString[0] === theString[1] ? 1 : 2;
	}

	// start with the first character
	let currentSubstr: string[] = [theString[0]];
	let maxLength = 0;

	for (let i = 1; i < theString.length; i++) {
		if (currentSubstr.includes(theString[i])) {
			// update maxLength if current substring is longer
			maxLength = Math.max(currentSubstr.length, maxLength);
			// take what we can from the current substring and add on the current character
			const indexOfRepeatedChar = currentSubstr.indexOf(theString[i]);
			currentSubstr = [
				...currentSubstr.slice(indexOfRepeatedChar + 1),
				theString[i],
			];
		} else {
			currentSubstr.push(theString[i]);
		}
	}

	return maxLength;
}

/* 
THOUGHT PROCESS

- we need to keep track of the longest length so far

- GREEDY APPROACH 

loop through the string and set the first character to an array, 
for each subsequent character if it doesn't exist in the array push it and move on
if it does exist in the array set the max length and start over from the second character ?

we could actually use that same array but split from after the current character's duplicate 
so if the substring is [cab] and the current character is c, we could add it to a new array with abc and keep going

we would only update maxLength when the current character can't be added and if it's bigger than the stored max length

-- notes on the greedy approach --

we could hit our max length early but we will check the whole string anyway 

*/
