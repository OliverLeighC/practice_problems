import { isAPalindrome } from "./palindrome";

const true1 = "abba";
const true2 = "aManAPlanACanalPanama";
const false1 = "abcdefg";
const false2 = "A man a plan a canal Panama";

describe("IsAPalindrome", () => {
	it("returns true if a string is a palindrome", () => {
		expect(isAPalindrome(true1)).toEqual(true);
		expect(isAPalindrome(true2)).toEqual(true);
	});
	it("returns false if a string is not a palindrome", () => {
		expect(isAPalindrome(false1)).toEqual(false);
	});
	it("respects spaces and punctuation", () => {
		expect(isAPalindrome(false2)).toEqual(false);
		expect(isAPalindrome(". $.$ .")).toEqual(true);
	});
});
