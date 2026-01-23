import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// If you want to catch unused imports, install this plugin:
// npm install eslint-plugin-unused-imports --save-dev
import unusedImports from "eslint-plugin-unused-imports";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      // Unused imports → error
      "unused-imports/no-unused-imports": "error",

      // Unused variables → error, ignore variables starting with _
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      // Disable base no-unused-vars since unused-imports handles it
      "no-unused-vars": "off",
    },
  },
]);

export default eslintConfig;
