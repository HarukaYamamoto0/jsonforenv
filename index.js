import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

/**
 * Loads environment variables from a JSON file
 *
 * @param {string} filePath - The path to the JSON file
 * @throws {Error} Throws an error if there is a problem loading the file or parsing the JSON
 */
export function loadEnvFromFile(filePath) {
	try {
		const fileData = readFileSync(resolve(process.cwd(), filePath), "utf8");
		const parsedJson = JSON.parse(fileData);

		for (const key in parsedJson) {
			const value = parsedJson[key];

			process.env[key] = typeof value === "object" ? JSON.stringify(value) : String(value);
		}
	} catch (error) {
		throw new Error(`Error loading JSON file: ${error.stack}`);
	}
}

/**
 * Loads environment variables from a specified JSON file
 *
 * @param {string} jsonFilePath - The path to the JSON file to be loaded
 */
export default function loadEnvironment(jsonFilePath) {
	if (!existsSync(jsonFilePath)) {
		console.error(`JSON file not found: ${jsonFilePath}`);
		process.exit(1);
	}

	loadEnvFromFile(jsonFilePath);
}
