import VueText from "./VueText.vue";

(VueText as any).install = function (Vue: any) {
  Vue.component("VueText", VueText);
};

export default VueText;
