import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import vue from "rollup-plugin-vue";
import cjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import json from "@rollup/plugin-json";
import requireContext from "rollup-plugin-require-context";
import { string } from "rollup-plugin-string";
import autoprefixer from "autoprefixer";
import typescript from "rollup-plugin-typescript2";

const config = require("../package.json");

export default {
  input: "src/index.ts",
  plugins: [
    json(),
    resolve({
      mainFields: ["module", "jsnext", "main", "browser"],
      jsnext: true,
      preferBuiltins: true,
      browser: true,
    }),
    string({
      include: "**/*.svg",
    }),
    vue({
      css: false,
      style: {
        postcssPlugins: [autoprefixer],
      },
    }),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "runtime",
      presets: [
        [
          "@babel/env",
          {
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          "@babel/plugin-transform-runtime",
          {
            useESModules: true, // 使用 esm 形式的 helper
          },
        ],
      ],
    }),
    cjs({
      browser: true,
      exclude: "src/**",
    }),
    requireContext(),
    replace({
      COMP_VERSION: JSON.stringify(config.version),
      preventAssignment: true,
    }),
    typescript({
      tsconfig: "build/tsconfigComponent.json",
      useTsconfigDeclarationDir: true,
    }), // 解析TypeScript
  ],
  external: ["vue"],
};
