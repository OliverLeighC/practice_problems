import { maxChars } from "./max_chars";

describe("maxChars", () => {
	it("Finds the most frequently used char", () => {
		expect(maxChars("a")).toEqual("a");
		expect(maxChars("abcdefghijklmnaaaaa")).toEqual("a");
	});

	it("Works with numbers in the string", () => {
		expect(maxChars("ab1c1d1e1f1g1")).toEqual("1");
	});
});
