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

## Repository-side fix for Workers Builds

This repository uses:

- `postinstall: opennextjs-cloudflare build`

Workers Builds always runs `npm clean-install` before `npx wrangler deploy`. Running the OpenNext build in `postinstall` ensures the deploy step can find:

- `.open-next/.build/open-next.config.edge.mjs`
- `.open-next/worker.js`

This avoids depending on the dashboard `Build command` for the specific OpenNext compiled-config error.

Even with this fix, the preferred Cloudflare setup is still:

- Build command: `npx opennextjs-cloudflare build`
- Deploy command: `npx wrangler deploy`

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
