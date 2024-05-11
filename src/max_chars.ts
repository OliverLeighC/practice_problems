/*
DIRECTIONS

Given a string, return the character that is most
commonly used in the string.
--- Examples
maxChar("abcccccccd") === "c"
maxChar("apple 1231111") === "1"
*/

export function maxChars(str: string) {
	const charMap: Record<string, number> = {};
	const cleanString = str.replace(/ /g, ""); // can also use split(" ").join("")

	for (let char of cleanString) {
		charMap[char] = charMap[char] ? charMap[char]++ : 1;
	}

	let max = 0;
	let maxChar = "";

	for (let _char in charMap) {
		if (charMap[_char] > max) {
			max = charMap[_char];
			maxChar = _char;
		}
	}

	return maxChar;
}

/*
THOUGHT PROCESS

make a character map 
strip spaces first since those are not characters 

then loop and check against max and maxChar
*/
