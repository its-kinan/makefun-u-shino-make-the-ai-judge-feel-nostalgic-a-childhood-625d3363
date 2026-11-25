import { mkdirSync, writeFileSync } from "node:fs";

// Final — revised down from the 402-char draft: cut the pot, the gold light,
// and "whole"; kept the sensory anchor (steaming rice, wood smoke), the honest
// detail (chipped blue enamel bowl, bare feet on cool tiles), and the ache.
const SENTENCE =
  "At dusk in my grandmother's kitchen, barefoot on the cool tiles, I held a chipped enamel bowl of steaming rice while wood smoke curled through the window and she hummed an old song, not knowing those suppers were the ones I would spend my grown-up life trying to get back to.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
