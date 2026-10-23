# Create Our Backend

A free CLI scaffold for creating a structured Node.js + Express backend.

## Current status

This repository contains the source code for the generator. Once this project is published as a public npm package, users will be able to run:

```bash
npm create our-backend@latest my-api
```

The package name above is a placeholder and must be checked for availability before publishing.

## Development

```bash
npm install
node bin/cli.js example-api
cd example-api
npm install
cp .env.example .env
npm run dev
```

The starter includes Express, MongoDB/Mongoose configuration, health checking, error handling, and example route/controller/service/model files.

## Publishing

1. Check that the intended npm package name is available.
2. Update the package name and README with the final package name.
3. Test with `npm pack --dry-run`.
4. Log in with `npm login`.
5. Publish with `npm publish --access public`.

Publishing to npm is not performed automatically by this repository.
