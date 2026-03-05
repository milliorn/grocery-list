import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"

// ESLint v9 flat config array — no tseslint.config() wrapper needed since
// we are not using the extends property inside any config object.
export default [
  // Global ignore patterns: excludes build output and CommonJS config files
  // from linting. Only TypeScript source files are in scope.
  { ignores: ["dist", "**/*.cjs"] },

  // Base configs applied to all matched files.
  // typescript-eslint's recommended configs already scope TypeScript rules
  // to *.ts / *.tsx internally.
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // App source files: set browser globals, project path, plugins, and custom rules.
  {
    files: ["**/*.{ts,tsx}"],

    languageOptions: {
      // Specify ECMAScript version for parsing.
      ecmaVersion: 2020,
      // Define global variables for a browser environment.
      globals: globals.browser,
      // Tell the TypeScript ESLint parser where to find the TS configuration.
      // Required for rules that use type information.
      parserOptions: {
        project: "./tsconfig.app.json"
      }
    },

    plugins: {
      // Enforces rules for React Hooks (e.g., rules of hooks, dependency arrays).
      "react-hooks": reactHooks,
      // Ensures React Fast Refresh works correctly by enforcing proper export patterns.
      "react-refresh": reactRefresh
    },

    rules: {
      // Spread the recommended rules for React Hooks from the plugin.
      ...reactHooks.configs.recommended.rules,

      // Warn if the component export does not follow the expected pattern,
      // with an option that allows constant export if desired.
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ],

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
  },

  // vite.config.ts: targets the Node environment and is type-checked using
  // tsconfig.node.json instead of the application-level tsconfig.app.json.
  {
    files: ["vite.config.ts"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.node,
      parserOptions: {
        project: "./tsconfig.node.json"
      }
    }
  }
]
