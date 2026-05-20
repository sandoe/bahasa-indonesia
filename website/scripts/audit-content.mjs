import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const contentRoot = new URL("../src/content/lessons", import.meta.url);
const blockedProviders = new Set(["teacher-slide", "copyrighted-classroom"]);

const files = walk(contentRoot.pathname).filter((file) => file.endsWith(".json"));
const violations = [];

for (const file of files) {
  const raw = readFileSync(file, "utf8");
  const lesson = JSON.parse(raw);

  for (const media of lesson.media ?? []) {
    if (blockedProviders.has(media.provider)) {
      violations.push(`${file}: blocked provider "${media.provider}"`);
    }

    if (media.status === "public-ready" && media.rights?.owner !== "self-produced") {
      violations.push(
        `${file}: media "${media.id}" is public-ready but rights.owner is not self-produced`
      );
    }
  }
}

if (violations.length > 0) {
  console.error("Content rights audit failed:");
  for (const violation of violations) {
    console.error(`- ${violation}`);
  }
  process.exit(1);
}

console.log(`Content rights audit passed for ${files.length} lesson file(s).`);

function walk(dir) {
  const entries = readdirSync(dir);
  return entries.flatMap((entry) => {
    const fullPath = join(dir, entry);
    return statSync(fullPath).isDirectory() ? walk(fullPath) : [fullPath];
  });
}
