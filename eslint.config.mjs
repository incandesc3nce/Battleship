import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    ignorePatterns: ["*.test.js"],
  },
  pluginJs.configs.recommended,
];
