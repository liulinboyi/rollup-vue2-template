import fs from "fs-extra";
import path from "path";
import base from "./rollup.config.base";
import postcss from "rollup-plugin-postcss";
import { cssUrl } from "@liulinboyi/css-url";
import url from "@liulinboyi/plugin-url";

export function generate(config, type) {
  const files = fs.readdirSync(path.resolve(__dirname, "../src/components"), {
    withFileTypes: true,
  });
  for (let item of files) {
    if (item.isDirectory()) {
      const dir = path.resolve(
        __dirname,
        `../dist/theme-chalk/${item.name}.css`
      );
      console.log(dir);
      config.push(
        Object.assign({}, base, {
          input: `src/components/${item.name}/index.ts`,
          output: {
            name: item.name,
            file: `dist/${type}/${item.name}/index.js`,
            format: type === 'browser' ? 'iife' : type,
            // sourcemap: true,
            globals: {
              vue: "Vue",
            },
          },
          plugins: [
            ...base.plugins,
            postcss({
              plugins: [
                cssUrl({
                  imgOutput: `dist/imgs`,
                  fontOutput: `dist/font`,
                  cssOutput: `dist/style`,
                  limit: 100,
                  // slash: true,
                  relativeDir: '../'
                }),
              ],
              extract: `style.css`,
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
              sourceDir: path.join(__dirname, './dist')
            }),
          ],
          external: [...base.external],
        })
      );
    }
  }
  return config;
}
