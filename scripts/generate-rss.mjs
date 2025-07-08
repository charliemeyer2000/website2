#!/usr/bin/env node

import generateRSS from "../utils/generateRSS.mjs";

try {
  generateRSS();
  process.exit(0);
} catch (error) {
  console.error("Error generating RSS:", error);
  process.exit(1);
}
