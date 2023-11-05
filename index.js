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

/**
 * Parses an object or array within process.env and converts it to its respective data type.
 *
 * @param {string} key - The key for the environment variable to parse.
 * @returns {any} The parsed value.
 */
export function parse(key) {
  const value = process.env[key];
  if (value === undefined) {
    throw new Error(`Environment variable ${key} not found.`);
  }

  // Check if the value is a JSON string representation of an object or array
  if (value.startsWith("{") || value.startsWith("[")) {
    try {
      return JSON.parse(value);
    } catch (error) {
      throw new Error(`Error parsing JSON for environment variable ${key}: ${error.message}`);
    }
  }

  // If it's not an object or array, return the original value
  return value;
}
