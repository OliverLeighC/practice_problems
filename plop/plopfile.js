module.exports = function (plop) {
	plop.setGenerator("algo", {
		description: "function and test file for algorithm practice",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "name of function",
			},
		],
		actions: [
			{
				type: "add",
				path: "../src/{{ snakeCase name }}.ts",
				templateFile: "templates/algo.hbs",
			},
			{
				type: "add",
				path: "../src/{{ snakeCase name }}.spec.ts",
				templateFile: "templates/test.hbs",
			},
		],
	});
};
