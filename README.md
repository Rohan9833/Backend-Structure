# Backend Structure CLI

A free CLI project for generating a starter Node.js + Express backend with a MongoDB/Mongoose model layer.

## What's included

- Express 5 with JSON parsing
- Helmet security headers
- Configurable CORS via `CLIENT_ORIGIN`
- MongoDB connection using Mongoose
- Health endpoint at `GET /api/health`
- Example CRUD foundation: routes, controller, service, and model
- Centralized 404 and error-handling middleware
- `.env.example` and `.gitignore`

## Create a project from this repository

Until the CLI has been published to npm, clone this repository and run:

```powershell
git clone https://github.com/Rohan9833/Backend-Structure.git
cd Backend-Structure
node bin/cli.js my-api
cd my-api
npm install
Copy-Item .env.example .env
npm run dev
```

Configure `MONGODB_URI` in the new project's `.env`. A local MongoDB instance is required for the example endpoints; the health endpoint can run without a database connection.

Then open `http://localhost:5000/api/health`.

## Published npm command (after publishing)

The intended package name is `create-our-backend`, subject to npm name availability. After it is published, users will be able to run:

```bash
npm create our-backend@latest my-api
```

## Publish checklist

1. Check package-name availability on npm.
2. Test the scaffold from a clean directory on a supported Node.js version.
3. Review dependencies, code, and security defaults.
4. Sign in with `npm login`.
5. Run `npm pack --dry-run` and inspect the package contents.
6. Publish with `npm publish --access public`.

Publishing is not automatic; it requires an npm account and a deliberate publish command.
