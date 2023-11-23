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
