import VueVideo from "./VueVideo.vue";

(VueVideo as any).install = function (Vue: any) {
  Vue.component("VueVideo", VueVideo);
};

export default VueVideo;
