module.exports = {
  extends: [
    'next',
    'plugin:react/recommended',
    'airbnb',
    "plugin:prettier/recommended"
  ],
  rules: {
    "no-console": [1, { allow: ["warn", "error"] }],
    "no-unused-vars": 1,
    "react/prop-types": 1,
    "prettier/prettier": 1,
    "react/jsx-filename-extension": 0,
    "react/jsx-props-no-spreading": 0,
    "react/no-array-index-key": 0,
    "no-param-reassign": 0,// for redux
    "no-shadow": 0,
    "arrow-body-style": ["error", "as-needed"],
  },
};
