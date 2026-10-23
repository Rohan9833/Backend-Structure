#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const templateDir = path.resolve(here, "../templates/express-mongodb");

function printHelp() {
  console.log(`
Create Our Backend

Usage:
  npm create our-backend@latest <project-name>
  npx create-our-backend <project-name>

Options:
  -h, --help     Show this help
  -v, --version  Show version
`);
}

const args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-h")) {
  printHelp();
  process.exit(0);
}
if (args.includes("--version") || args.includes("-v")) {
  const pkg = JSON.parse(await fs.readFile(path.resolve(here, "../package.json"), "utf8"));
  console.log(pkg.version);
  process.exit(0);
}

const projectName = args.find((arg) => !arg.startsWith("-")) ?? "my-backend";
if (!/^[a-zA-Z0-9][a-zA-Z0-9._-]*$/.test(projectName)) {
  console.error("Project name may contain letters, numbers, dots, underscores, and hyphens; it must start with a letter or number.");
  process.exit(1);
}

const targetDir = path.resolve(process.cwd(), projectName);
if (targetDir === process.cwd()) {
  console.error("Choose a new directory name.");
  process.exit(1);
}
try {
  await fs.access(targetDir);
  console.error(`Cannot create project: "${projectName}" already exists.`);
  process.exit(1);
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}

try {
  await fs.cp(templateDir, targetDir, { recursive: true });
  const packagePath = path.join(targetDir, "package.json");
  const packageJson = JSON.parse(await fs.readFile(packagePath, "utf8"));
  packageJson.name = projectName.toLowerCase().replace(/[^a-z0-9._-]/g, "-");
  await fs.writeFile(packagePath, JSON.stringify(packageJson, null, 2) + "\n");
  console.log(`\nCreated backend project: ${projectName}`);
  console.log("\nNext steps:");
  console.log(`  cd ${projectName}`);
  console.log("  npm install");
  console.log("  copy .env.example .env   # PowerShell");
  console.log("  npm run dev");
} catch (error) {
  console.error("Could not create the project:", error.message);
  process.exit(1);
}
