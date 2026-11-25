import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync(
  "/output/entry.txt",
  "I lived, I laughed, I left the group chat.",
  "utf8"
);
console.log("Wrote 42 characters to /output/entry.txt");
