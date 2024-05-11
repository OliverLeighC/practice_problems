// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/* THOUGHT PROCESS

basically just need to check if the string is equal to the reversed string
Do we want it to be case sensitive? 

If we want case sensitive we can just to === 
otherwise we should convert both to lower first 

We could split out the reverse string into it's own function 
but we are only using it once so I am just going to assign it to a variable
*/

export function isAPalindrome(str: string): boolean {
	const reversedString = str.split("").reduce((acc, curr) => curr + acc, "");

	return str.toLowerCase() === reversedString.toLowerCase();
}
