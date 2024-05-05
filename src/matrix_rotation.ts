/**
 * Write a function that rotates a matrix clockwise
 * @param matrix 2d array of numbers
 * @returns the rotated matrix
 */
export function rotateMatrix(matrix: number[][]): number[][] {
	let rotatedMatrix: number[][] = [];
	// use the number of columns for the rows
	for (let iRow = 0; iRow < matrix[0].length; iRow++) {
		// use the number of rows for the columns
		for (let iCol = 0; iCol < matrix.length; iCol++) {
			// since it's clockwise we need to prepend to the row
			rotatedMatrix[iRow] = [
				matrix[iCol][iRow],
				...(rotatedMatrix[iRow] ?? []),
			];
		}
	}
	return rotatedMatrix;
}

/* 
THOUGHT PROCESS 

since we want to flip columns to rows we could match on index 
so everything at index 0 becomes the first array, index 1 the second array, etc 

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

// INITIAL ATTEMPT
this method works for the example but won't work for a non-square matrix because the second loop 
uses the length of each rows which could be smaller or larger than the number of rows

export function rotateMatrix(matrix: number[][]): number[][] {
	let rotatedMatrix: number[][] = [];
	for (let iRow = 0; iRow < matrix.length; iRow++) {
		for (let iCol = 0; iCol < matrix[iRow].length; iCol++) {
			rotatedMatrix[iRow] = [
				matrix[iCol][iRow],
				...(rotatedMatrix[iRow] ?? []),
			];
		}
	}
	return rotatedMatrix;
}

-- CONSIDERATIONS -- 

Is there a better approach than looping twice? 
*/
