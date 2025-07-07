import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"

export default tseslint.config(
  {
    // Global ignore patterns: Excludes the "dist" directory from linting,
    // ensuring build output is not checked for errors.
    ignores: ["dist", "vite.config.ts"]
  },
  {
    // Inherit recommended rules from both @eslint/js and TypeScript ESLint.
    extends: [js.configs.recommended, ...tseslint.configs.recommended],

    // Specify the file patterns that the configuration applies to.
    // Here, all TypeScript and TSX files are targeted.
    files: ["**/*.{ts,tsx}"],

    // Set the language options:
    languageOptions: {
      // Specify ECMAScript version for parsing.
      ecmaVersion: 2020,
      // Define global variables for a browser environment.
      globals: globals.browser,
      // **Parser Options for TypeScript:**
      // This tells the TypeScript ESLint parser where to find your TS configuration,
      // which is required for rules that require type information.
      parserOptions: {
        project: "./tsconfig.app.json" // Change this path if needed (e.g., "./tsconfig.json")
      }
    },

    // Define the plugins used to extend ESLint functionalities.
    plugins: {
      // Enforces rules for React Hooks (e.g., rules of hooks, dependency arrays).
      "react-hooks": reactHooks,
      // Ensures React Fast Refresh works correctly by enforcing proper export patterns.
      "react-refresh": reactRefresh
    },

    // Specify custom rules in addition to the inherited ones.
    rules: {
      // Spread the recommended rules for React Hooks from the plugin.
      ...reactHooks.configs.recommended.rules,

      // Configure the React Refresh plugin:
      // Warn if the component export does not follow the expected pattern,
      // with an option that allows constant export if desired.
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ],

      // Additional strictness rules to enforce higher code quality and type safety:

      // Require strict equality operators (=== and !==) over abstract equality (== and !=).
      eqeqeq: "error",

      // Disallow usage of 'var' in favor of block-scoped declarations.
      "no-var": "error",

      // Require the use of 'const' for variables that are never reassigned.
      "prefer-const": "error",

      // Require curly braces for all control structures.
      curly: "error",

      // Require explicit return types on functions (with an allowance for simple expressions).
      "@typescript-eslint/explicit-function-return-type": [
        "warn",
        { allowExpressions: true }
      ],

      // Disallow the usage of the 'any' type to enforce stricter type safety.
      "@typescript-eslint/no-explicit-any": "error",

      // Enforce strict boolean expressions to avoid unintended type coercions.
      "@typescript-eslint/strict-boolean-expressions": "error",

      // Disallow unsafe assignments that might lead to runtime errors.
      "@typescript-eslint/no-unsafe-assignment": "error",

      // Disallow unsafe function calls on values of unknown type.
      "@typescript-eslint/no-unsafe-call": "error",

      // Disallow unsafe member access on values of unknown type.
      "@typescript-eslint/no-unsafe-member-access": "error",

      // Disallow returning values of unsafe type.
      "@typescript-eslint/no-unsafe-return": "error",

      // Enforce the use of the nullish coalescing operator (??) when appropriate.
      "@typescript-eslint/prefer-nullish-coalescing": "error",

      // Encourage optional chaining to simplify expressions dealing with possibly nullish objects.
      "@typescript-eslint/prefer-optional-chain": "error"
    }
  }
)
