module.exports = {
  extends: [
    "plugin:react/recommended",
    "@lotwt/eslint-config-ts",
  ],
  settings: {
    react: {
      version: "18.0",
    },
  },
  rules: {
    "jsx-quotes": [
      "error",
      "prefer-double",
    ],
    "react/react-in-jsx-scope": "off",
  },
}
