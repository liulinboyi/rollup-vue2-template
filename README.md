# component-template
源于[Vue UI Framework](https://github.com/vuejs/ui)

一个基于Rollup的Vue2组件模板

> ### 以组件库名称为`Com`为例：
> ### 注意！！以下为示例

## 安装包`Com`:

```
npm i -S Com
```

### 全量引入
```js
import Vue from 'vue'
import Com from 'Com'

Vue.use(Com)
```

### 按需引入

#### 使用插件[`babel-plugin-component`](https://github.com/ElementUI/babel-plugin-component)

安装`babel`插件

```
npm i babel-plugin-component -D

# For babel6
npm i babel-plugin-component@0 -D
```
使用`babel`插件`.babelrc`或者`babel.config.js`
```
  plugins: [
    [
      "component",
      {
        libraryName: "component-template",
        "libDir": "dist/umd",
        "camel2Dash": false
      }
    ]
  ]
```
引入组件
```js
import { VueVideo } from 'Com'

Vue.use(VueVideo)
```
