import { longestUniqueSubstringLength } from "./longest_substring";

const stringFromOriginalProblem = "abbbcabcdefef";
const randomString = "abccdefghijklmnopqrssstu";
const allDoubles = "aabbccddeeffgghhii";

describe("LongestUniqueSubstringLength", () => {
	it("should return the length of the longest substring of non-repeating characters", () => {
		expect(longestUniqueSubstringLength(stringFromOriginalProblem)).toEqual(6);
		expect(longestUniqueSubstringLength(randomString)).toEqual(17);
		expect(longestUniqueSubstringLength(allDoubles)).toEqual(2);
	});
});
