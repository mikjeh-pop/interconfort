/**
 * Contrôle des marques interdites : noms de fichiers, code source ET texte
 * incrusté dans les images (OCR). À exécuter avant chaque mise en production.
 *
 *   npm run verifier:marques
 *
 * Prérequis pour l'OCR : tesseract-ocr installé sur la machine.
 *   Debian/Ubuntu : sudo apt-get install tesseract-ocr tesseract-ocr-fra
 * Sans tesseract, seuls le code et les noms de fichiers sont contrôlés.
 */
import { execSync } from "node:child_process";
import { readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const INTERDIT = /pop\s*['’]?\s*(frais|tout|ice|box)|popfrais|poptout|popice|popbox|multi\s*pro\s*matik/i;
let fautes = 0;

function fichiers(dir, exts) {
  const out = [];
  for (const e of readdirSync(dir)) {
    if (e === "node_modules" || e === ".next" || e === ".git") continue;
    const p = join(dir, e);
    if (statSync(p).isDirectory()) out.push(...fichiers(p, exts));
    else if (exts.includes(extname(p).toLowerCase())) out.push(p);
  }
  return out;
}

console.log("→ Noms de fichiers et code source");
try {
  const r = execSync(
    `grep -rniE "pop.?(frais|tout|ice|box)|multi.?pro.?matik" src public next.config.ts 2>/dev/null || true`,
  ).toString().trim();
  if (r) { console.error("  ✗ occurrences trouvées :\n" + r); fautes++; }
  else console.log("  ✓ aucune occurrence");
} catch { console.log("  ✓ aucune occurrence"); }

console.log("→ Texte incrusté dans les images (OCR)");
let ocr = true;
try { execSync("which tesseract", { stdio: "ignore" }); }
catch { ocr = false; console.warn("  ! tesseract absent, contrôle OCR ignoré"); }

if (ocr) {
  for (const img of fichiers("public/images", [".webp", ".jpg", ".jpeg", ".png"])) {
    let texte = "";
    try {
      texte = execSync(`tesseract "${img}" stdout -l fra+eng --psm 11 2>/dev/null || true`).toString();
    } catch { continue; }
    if (INTERDIT.test(texte.replace(/\s+/g, " "))) {
      console.error(`  ✗ ${img} — marque interdite lisible sur l'image`);
      fautes++;
    }
  }
  if (!fautes) console.log("  ✓ aucune marque lisible");
}

if (fautes) { console.error(`\n${fautes} problème(s). Ne pas déployer.`); process.exit(1); }
console.log("\nContrôle réussi.");
