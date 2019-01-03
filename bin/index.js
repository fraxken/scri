#!/usr/bin/env node

// Require Dependencies
const { join } = require("path");
const { existsSync, readFileSync, writeFileSync } = require("fs");
const { red, yellow, green, gray } = require("kleur");
const diff = require("json-diff");

// constants
const CWD = process.cwd();

// argv
const [scriptName, ...others] = process.argv.slice(2);
const scriptValue = others.join(" ");
if (typeof scriptName !== "string") {
    console.log(gray("\n  scri <scriptName> [value]"));
    console.log(gray("        ^ ~~~~~~~~       "));
    console.log(red("> You must provide a script name to create or edit\n"));
    process.exit(0);
}

// load package.json
const pkgPath = join(CWD, "package.json");
if (!existsSync(pkgPath)) {
    console.log(red(`\n > No package.json found on current working directory: ${yellow(CWD)}\n`));
    process.exit(0);
}

const pkgStr = readFileSync(pkgPath, { encoding: "utf8" });
const pkg = JSON.parse(pkgStr);
if (!Reflect.has(pkg, "scripts")) {
    pkg.scripts = Object.create(null);
}

if (scriptName === "-d") {
    if (scriptValue.trim() === "") {
        console.log(gray("\n  scri -d <scriptName>"));
        console.log(gray("           ^ ~~~~~~~~       "));
        console.log(red("> Script name must not be empty\n"));
        process.exit(0);
    }
    delete pkg.scripts[scriptValue];
    console.log(`\n ✔️ Script '${green(scriptValue)}' successfully deleted\n`);
}
else {
    pkg.scripts[scriptName] = scriptValue;
    console.log(`\n ✔️ Script '${green(scriptName)}' successfully updated with value => ${yellow(scriptValue)}\n`);
}

const fStr = JSON.stringify(pkg, null, 2);
writeFileSync(pkgPath, fStr);
console.log(diff.diffString(JSON.parse(pkgStr), JSON.parse(fStr)));
