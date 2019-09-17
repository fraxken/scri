# Scri
![version](https://img.shields.io/badge/dynamic/json.svg?url=https://raw.githubusercontent.com/fraxken/scri/master/package.json&query=$.version&label=Version)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/fraxken/scri/commit-activity)
![MIT](https://img.shields.io/github/license/mashape/apistatus.svg)
![dep](https://img.shields.io/david/fraxken/scri)
![size](https://img.shields.io/bundlephobia/min/scri)
[![Known Vulnerabilities](https://snyk.io//test/github/fraxken/scri/badge.svg?targetFile=package.json)](https://snyk.io//test/github/fraxken/scri?targetFile=package.json)

Node.js CLI to create or edit local package.json scripts without having to leave the terminal or writing complex commands.

<p align="center">
    <img src="https://i.imgur.com/HCGMeEs.png" height="450">
</p>

## Getting Started
This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm install scri -g
# or
$ npx scri
```

## Usage example
When installed globally the `scri` executable will be exposed in your terminal

```bash
$ cd yourProject
$ scri start node server.js
```

To delete a script, use the `-d` flag:
```
$ scri -d start
```

## Licence
MIT
