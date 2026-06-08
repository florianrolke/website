import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const distDir = "dist";
const indexPath = join(distDir, "index.html");
const staticRoutes = ["privacy-policy"];

if (!existsSync(indexPath)) {
  throw new Error("dist/index.html was not found. Run this after the Vite build.");
}

for (const route of staticRoutes) {
  const routeDir = join(distDir, route);
  mkdirSync(routeDir, { recursive: true });
  copyFileSync(indexPath, join(routeDir, "index.html"));
}
