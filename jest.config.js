module.exports = {
	roots: ["<rootDir>/src"],
	testMatch: ["**/?(*.)+(spec|test).+(ts|tsx|js)"],
	transform: {
		"^.+\\.(t|j)sx?$": [
			"@swc/jest",
			{
				sourceMaps: true,
				module: { type: "commonjs", strictMode: true, noInterop: true },
				jsc: {
					externalHelpers: false,
					target: "es2021",
					parser: {
						syntax: "typescript",
						tsx: true,
						decorators: true,
						dynamicImport: true,
					},
					transform: {
						legacyDecorator: true,
						decoratorMetadata: true,
					},
					keepClassNames: true,
					paths: undefined,
					baseUrl: undefined,
				},
			},
		],
	},
	setupFilesAfterEnv: ["jest-extended/all"],
	moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node", "d.ts"],
};
