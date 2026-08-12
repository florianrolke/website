// Copies the dotLottie WASM renderer from node_modules into public/ so the
// installed package version and the served .wasm can never drift apart.
// Wired as the npm "prebuild" script; main.tsx points the player at it via setWasmUrl.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const src = path.join(root, "node_modules", "@lottiefiles", "dotlottie-web", "dist", "dotlottie-player.wasm");
const dest = path.join(root, "public", "dotlottie-player.wasm");

if (!fs.existsSync(src)) {
  console.error(`copy-lottie-wasm: source not found: ${src}`);
  process.exit(1);
}
fs.copyFileSync(src, dest);
console.log(`copy-lottie-wasm: copied ${fs.statSync(dest).size} bytes -> public/dotlottie-player.wasm`);
