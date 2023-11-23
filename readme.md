# Issue

Superjson throws an error on import:

```
Error [ERR_REQUIRE_ESM]: require() of ES Module <redacted>superjson-bug-repro/node_modules/superjson/dist/index.js from <redacted>/superjson-bug-repro/index.ts not supported.
```

See:
https://github.com/blitz-js/superjson/issues/268

# Steps to reproduce

Install node LTS via n

```
n lts
```

Note: I've confirmed the bug with v18.18.2 as well as v20.10.0

Install dependencies via yarn:

```
yarn install
```

Run the entrypoint using ts-node via npx:

```
npx ts-node index.ts
```
