# Jest Boilerplate Project

## Overview

This project is a template [Jest](https://jestjs.io/) testing environment project ready for use.

In this project you can:

- Use ES6 `import` and `export`
- Have intellisense in VS Code for the Jest [matchers](https://jestjs.io/docs/using-matchers).

## Setting Up the Project

To set up the project you need to initialise Node:

```
npm init -y
```

This will then generate the `package.json` file.

## Installing the dependencies

```
npm install -D @babel/preset-env jest
npm install -S @types/jest
```

## Copying the project

You can simply take the `babel.config.js` file and add the dev and main dependencies from the `package.json` file to copy the project in order to run Jest in your own project.

Ensure you run `npm install` once you update dependencies.

## Troubleshooting

If you see:

```
jest: command not found
```

Then you need to run `npm install` in order to install required packages.
