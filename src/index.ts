import jsConfig from "@eslint/js";
import tsConfig from "typescript-eslint";
import prettierConfig from "eslint-plugin-prettier/recommended";

export const DEFAULT_IGNORES = [
	"**/*.test.ts",
	"**/integration-tests/*",
	"**/test-fixture/*",
	"build/*",
	"coverage/*",
	"node_modules/*",
];

export default (tsconfigRootDir: string, ignores = DEFAULT_IGNORES) => [
	// syntax rules
	jsConfig.configs.recommended,
	...tsConfig.configs.recommended,
	prettierConfig,
	{
		ignores,
	},
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,jsx,tsx}"],
		languageOptions: {
			parser: tsConfig.parser,
			parserOptions: {
				sourceType: "module",
				tsconfigRootDir,
				project: "./tsconfig.json",
			},
		},
		plugins: { "@typescript-eslint": tsConfig.plugin },
		rules: {
			"max-lines": [
				"error",
				{ max: 500, skipBlankLines: true, skipComments: true },
			],
			"max-lines-per-function": [
				"error",
				{ max: 75, skipBlankLines: true, skipComments: true },
			],
			"no-duplicate-imports": 1,
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					varsIgnorePattern: "^_",
					argsIgnorePattern: "^_",
				},
			],
		},
	},
];
