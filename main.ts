import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  'My smart fridge sent me a passive-aggressive email about the door. It signed it "Derrick." We have never once discussed the name.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
