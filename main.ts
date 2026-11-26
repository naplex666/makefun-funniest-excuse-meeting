// The Funniest Excuse for Skipping a Meeting — entry program for make.fun.
// Writes a single line to $MAKEFUN_OUTPUT_DIR/entry.txt (the grader's /output).
// The line: one funny excuse for skipping a pointless work meeting.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const line =
  "Can't make it — I've been in this meeting since 2019 and nobody's noticed yet.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
