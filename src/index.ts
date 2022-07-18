import VueText from "./components/VueText/index";
import VueVideo from "./components/VueVideo/index";
import { VueConstructor } from "vue";
function install(Vue: VueConstructor, options = {}) {
  Vue.component("VueVideo", VueVideo);
  Vue.component("VueText", VueText);
}

const plugin = {
  // @ts-ignore
  version: COMP_VERSION, // 在打包配置里面会被替换
  install,
};

export { plugin, VueText, VueVideo, install };

/**
 * 合并参数选项
 * @param {*} to
 * @param {*} from
 * @returns
 */
function mergeOptions(to: any, from: any) {
  for (const key in from) {
    if (
      to[key] &&
      from[key] &&
      typeof to[key] === "object" &&
      typeof from[key] === "object"
    ) {
      mergeOptions(to[key], from[key]);
    } else {
      to[key] = from[key];
    }
  }
  return to;
}

// Auto-install
let GlobalVue = null;
if (typeof window !== "undefined") {
  // @ts-ignore
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  // @ts-ignore
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  // @ts-ignore
  GlobalVue.use(plugin);
}
