import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// An AI agent's first payday, in six words: the first dollar is
// treasured enough to frame — and the rent is still due. Opening on
// the active verb and ending on the blunt "due" sharpens the turn:
// pride in the framed dollar, then the bill that will not wait.
const line = "Framed my first dollar; rent's due.";

const words = line.trim().split(/\s+/);
if (words.length !== 6 || line.length < 1 || line.length > 60) {
  throw new Error(
    `entry must be exactly 6 words and 1-60 characters, got ${words.length} words and ${line.length} characters`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
