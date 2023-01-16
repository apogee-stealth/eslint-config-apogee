# @apogeelabs/eslint-config
This repo provides Apogee's .eslintrc as an extensible [shared config](http://eslint.org/docs/developer-guide/shareable-configs).

## Usage

This package support one "standard" eslint configuration at the moment.

### eslint-config-apogee

To use this configuration:

1. `yarn add eslint @apogeelabs/eslint-config --dev`
2. add `"extends": "@apogeelabs/eslint-config"` to your `.eslintrc`

## Example Setup

### Simple Project Using All the Rules

```
.
└── .eslintrc // extends: [ "@apogeelabs/eslint-config" ]
```

## References

See als ESLint's [Shareable Configs documentation](https://eslint.org/docs/latest/extend/shareable-configs) and
the [ESLint config documentation](https://eslint.org/docs/latest/use/configure/)
for more information.
