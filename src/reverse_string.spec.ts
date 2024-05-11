import { reverse, reverseWithoutReverse } from "./reverse_string";

describe("ReverseString", () => {
	it("reverses a string", () => {
		expect(reverse("abcd")).toEqual("dcba");
		expect(reverse("  abcd")).toEqual("dcba  ");
	});

	it("still works without the built in reverse method", () => {
		expect(reverseWithoutReverse("abcd")).toEqual("dcba");
		expect(reverseWithoutReverse("  abcd")).toEqual("dcba  ");
	});
});
