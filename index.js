import { existsSync, readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

/**
 * Loads environment variables from a JSON file.
 *
 * @async
 * @param {string} filePath - The path to the JSON file.
 * @throws {Error} If the file is not found or an error occurs when reading and parsing the JSON.
 */
export async function loadEnvFromFile(filePath) {
	const fileExists = existsSync(filePath);

	if (!filePath) throw new Error(`File ${filePath} was not found!`);

	try {
		const fileData = await readFileSync(resolve(process.cwd(), filePath), "utf8");
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
 * Loads environment variables from JSON files in a folder.
 *
 * @param {string} folderPath - The path to the folder containing the JSON files.
 * @throws {Error} If an error occurs while loading the JSON files from the folder.
 */
export function loadEnvFromFolder(folderPath) {
	try {
		const files = readdirSync(resolve(process.cwd(), folderPath));
		for (const file of files) {
			if (file.endsWith(".json")) {
				const filePath = resolve(process.cwd(), folderPath, file);
				loadEnvFromFile(filePath);
			}
		}
	} catch (error) {
		throw new Error(`Error loading JSON files from folder: ${error.stack}`);
	}
}
