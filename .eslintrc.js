module.exports = {
  extends: [
    "next",
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  rules: {
    "max-lines": [
      "error",
      { max: 300, skipBlankLines: false, skipComments: false },
    ],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-nested-ternary": 0,
    "prettier/prettier": 1,
    "import/prefer-default-export": 0,
    "react/require-default-props": 0,
    "jsx-a11y/no-autofocus": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-props-no-spreading": 0,
    "react/no-array-index-key": 0,
    "no-param-reassign": 0,
    "no-shadow": 0,
    "arrow-body-style": ["warn", "as-needed"],
    // for next.js
    "react/react-in-jsx-scope": 0,
    "@next/next/no-img-element": 0,
    // ts
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
};
