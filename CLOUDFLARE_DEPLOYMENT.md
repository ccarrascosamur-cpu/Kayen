# Cloudflare Workers Deploy

This project uses Next.js with `@opennextjs/cloudflare`.

## Required Cloudflare Build Settings

The failing build log shows Cloudflare Workers Builds is running only the deploy step:

- Deploy command: `npx wrangler deploy`

That fails because OpenNext's generated config does not exist until the build step runs first.

Configure the Worker in Cloudflare Dashboard as follows:

- Build command: `npx opennextjs-cloudflare build`
- Deploy command: `npx wrangler deploy`

You can also use this single deploy command instead:

- Deploy command: `npm run deploy`

## Repository workaround

This repository also commits the `.open-next/` output as a fallback for Workers Builds projects that are currently configured with:

- Build command: empty
- Deploy command: `npx wrangler deploy`

With `.open-next/worker.js` and `.open-next/.build/open-next.config.mjs` already present in git, `wrangler deploy` can run without first generating the OpenNext output.

This is a workaround for misconfigured Workers Builds, not the preferred long-term setup. If application code changes, rebuild OpenNext before pushing:

- `npx opennextjs-cloudflare build`

## Why this is required

`wrangler.jsonc` includes:

- `main: .open-next/worker.js`
- `assets.directory: .open-next/assets`

Those files are created by the OpenNext build step. In Workers Builds, the dashboard build settings control whether that build step runs before deploy.

## Symptom

If the build step is missing, deploy fails with:

`ERROR Could not find compiled Open Next config, did you run the build command?`

## Local commands

- Preview: `npm run preview`
- Deploy: `npm run deploy`
