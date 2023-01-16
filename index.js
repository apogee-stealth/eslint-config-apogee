module.exports = {
    root: true,
    env: {
        node: true,
    },
    parser: "@typescript-eslint/parser",
	// Here as reference. Consuming projects will need to declare this locally to use their tsconfig.json!
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: "./tsconfig.json",
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
	ignorePatterns: ["**/integration-tests/*.ts", "**/test-fixture/*.ts"],
    rules: {
        "no-duplicate-imports": 1,
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                varsIgnorePattern: "^_",
                argsIgnorePattern: "^_",
            },
        ],
    },
    overrides: [
        {
            files: ["**/*.ts"],
            excludedFiles: "**/*.test.ts",
            rules: {
                "max-lines": [
                    "error",
                    { max: 500, skipBlankLines: true, skipComments: true },
                ],
                "max-lines-per-function": [
                    "error",
                    { max: 50, skipBlankLines: true, skipComments: true },
                ],
            },
        },
    ],
};
