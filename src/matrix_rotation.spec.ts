import { rotateMatrix } from "./matrix_rotation";

const twoDMatrix = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
];
const expectedResult = [
	[6, 3, 0],
	[7, 4, 1],
	[8, 5, 2],
];

const nonSquareMatrix = [
	[1, 2],
	[3, 4],
	[5, 6],
];

const expectedNonSquareResult = [
	[5, 3, 1],
	[6, 4, 2],
];

const nonSquareWideMatrix = [
	[8, 9, 10],
	[11, 12, 13],
];

const expectedNonSquareWideResult = [
	[11, 8],
	[12, 9],
	[13, 10],
];

describe("RotateMatrix", () => {
	it("should rotate the matrix clockwise", () => {
		expect(rotateMatrix(twoDMatrix)).toEqual(expectedResult);
	});
	it("should work on a non-square matrix", () => {
		expect(rotateMatrix(nonSquareMatrix)).toEqual(expectedNonSquareResult);
	});

	it("should work on a non-square matrix with more columns than rows", () => {
		expect(rotateMatrix(nonSquareWideMatrix)).toEqual(
			expectedNonSquareWideResult
		);
	});
});
