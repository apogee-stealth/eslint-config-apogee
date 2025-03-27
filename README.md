# @apogeelabs/eslint-config

This package provides an eslint9 [flat config](https://eslint.org/blog/2022/08/new-config-system-part-1/) base for Apogee projects.

## Usage

To use this configuration:

- include this package.json `peerDependencies` in your project's `devDependencies`
- install this package: `npm install --save-dev @apogeelabs/eslint-config`
- create an eslint.config.js file in your prjoect that uses the Apogee config:

```ts
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import globals from "globals";
import apogeeConfig from "@apogeelabs/eslint-config";

export default [
    {
        ignores: [ /* project-specific ignores */ ],
    },
    {
        languageOptions: {
            globals: { ...globals.node },
        },
    },
    ...apogeeConfig(__dirname),
    {
        // project-specific configuration
    },
];
```

- verify your rules are configured correctly: `npx eslint --inspect-config`

## Building/Publishing

- install dependencies: `npm ci`
- make code changes
- update package.json verison number
- build code changes: `npm run build`
- publish package: `npm publish`

## References

- [eslint Documentation](https://eslint.org/docs/latest/)
- [Migrate to v9.x](https://eslint.org/docs/latest/use/migrate-to-9.0.0)
- ESLint's new config system, [Part 1](https://eslint.org/blog/2022/08/new-config-system-part-1/) and [Part 2](https://eslint.org/blog/2022/08/new-config-system-part-2/)
