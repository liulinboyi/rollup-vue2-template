import base from "./rollup.config.base";
import { generate } from "./generate.js";
import postcss from "rollup-plugin-postcss";
import { cssUrl } from "@liulinboyi/css-url";
import url from "@liulinboyi/plugin-url";
import alias from "@rollup/plugin-alias";
import path from 'path'

const config = [
  Object.assign({}, base, {
    plugins: [
      ...base.plugins,
      postcss({
        plugins: [
          cssUrl({
            imgOutput: "dist/imgs",
            fontOutput: "dist/font",
            cssOutput: "dist/style",
            limit: 100,
          }),
        ],
        extract: "style.css",
      }),
      url({
        include: [
          `**/*.svg`,
          `**/*.png`,
          `**/*.jpg`,
          `**/*.gif`,
          `**/*.woff`,
          `**/*.woff2`,
          '**/*.mp4',
        ],
        limit: 100,
        fileName: '[dirname][hash][extname]',
        sourceDir: path.join(__dirname, '../dist')
      }),
      alias({
        entries: [
          // { find: "@", replacement: "../src" },
          // { find: "batman-1.0.0", replacement: "./joker-1.5.0" },
        ],
      }),
    ],
    output: {
      exports: "named",
      name: "componentTemplate",
      file: "dist/umd/index.js",
      format: "umd",
      globals: {
        vue: "Vue",
      },
      // sourcemap: true,
    },
    external: [...base.external],
  }),
];

export default generate(config, "umd");
