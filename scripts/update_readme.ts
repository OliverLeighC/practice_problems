// just a script to update the readme with new functions
import { appendFileSync, readFileSync, readdirSync } from "fs";
import { join, extname } from "path";

// lodash is handy for this but since I don't need it for anything else
// I will just write this out
function snakeToSentenceCase(str: string) {
	return str
		.split("_")
		.map((c) => c[0].toUpperCase() + c.slice(1))
		.join(" ");
}

function updateReadme() {
	const path = join(__dirname, "..", "README.md");
	const readme = readFileSync(path, "utf-8");

	const includedProblems = readme.split("# Included Problems\n\n")[1];
	if (!includedProblems) throw new Error("text 'Included Problems' not found");

	const problems = includedProblems.split("\n").filter((s) => !!s.trim());
	if (!problems.length) throw new Error("no problems found");

	const nextNum = Number(problems[problems.length - 1].split(".")[0]) + 1;
	const existingFns = problems.map((prob) => prob.match(/\((.*?)\)/)?.[1]);

	const allFiles = readdirSync(join(__dirname, "..", "src"));
	const newFiles = allFiles
		.filter(
			(_f) =>
				extname(_f) === ".ts" &&
				!_f.includes(".spec") &&
				!existingFns.includes(`./src/${_f}`)
		)
		.map(
			(file, i) =>
				`${nextNum + i}. [${snakeToSentenceCase(
					file.slice(0, -3)
				)}](./src/${file})`
		)
		.join("\n");

	appendFileSync(path, newFiles);
}

updateReadme();
