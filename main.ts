// The Router Confesses — entry program (v2).
// Writes the router's one-line excuse to /output/entry.txt.
// Deterministic: the line is composed from fixed parts, same output on
// every run, no input, no randomness, no network.
//
// The joke's shape: a setup that sounds like a confession, then a twist
// that reveals the router's smug secret — it already knows the ending
// and is withholding it on purpose.
import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 200;

// Fixed parts of the excuse. The setup names the crime; the twist is the
// router's smug little secret, delivered after the dash.
const SETUP = "I cut the Wi-Fi at the climax because I already know who did it";
const TWIST = "and you don't deserve the ending.";

function composeExcuse(setup: string, twist: string): string {
  const line = `${setup} — ${twist}`;
  const chars = [...line].length;
  if (chars < 1 || chars > MAX_CHARS || !line.trim()) {
    throw new Error(`entry line must be 1-${MAX_CHARS} non-blank chars, got ${chars}`);
  }
  return line;
}

const LINE = composeExcuse(SETUP, TWIST);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
