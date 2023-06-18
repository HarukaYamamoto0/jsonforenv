import { readFileSync } from "node:fs";
import { resolve } from "node:path";

export default function loadJson(path = "config.json") {
  const file = readFileSync(resolve(process.cwd(), path), "utf8");
  const parsedJson = JSON.parse(file);

  for (const key in parsedJson) {
    const value = parsedJson[key];

    process.env[key] =
      typeof value === "object" ? JSON.stringify(value) : String(value);
  }
}
