import base from "./rollup.config.base";
import { generate } from "./generate.js";
import postcss from "rollup-plugin-postcss";
import { cssUrl } from "@liulinboyi/css-url";
import url from "@liulinboyi/plugin-url";
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
            limit: 100
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
    ],
    output: {
      name: "componentTemplate",
      file: "dist/es/index.js",
      format: "es",
      // sourcemap: true,
    },
    external: [...base.external],
  }),
];

export default generate(config, "es");
