module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "simple-import-sort",
    "unused-imports",
  ],
  ignorePatterns: ["**/build/**.js"],
  rules: {
    curly: ["error", "multi-line"],
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false,
      },
    ],
    "object-shorthand": ["error", "always"],
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "func-style": ["error", "expression"],
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "react/no-unescaped-entities": "off",
    // no implicit any
    "@typescript-eslint/no-explicit-any": "off",
    "import/prefer-default-export": "off",
    // camelcase
    "@typescript-eslint/camelcase": "off",
    camelcase: "off",
    "import/extensions": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
};
