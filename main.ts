import { writeFileSync } from "node:fs";

function deliverMidnightRoast(): void {
  const roast = "I bought the smart fridge, but after midnight it locks me out like I'm a guest visiting my own leftovers.";
  writeFileSync("/output/entry.txt", roast, "utf8");
}

deliverMidnightRoast();
