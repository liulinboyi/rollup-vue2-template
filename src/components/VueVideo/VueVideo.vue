<template>
  <div class="VueVideo" :style="{ background: `url(${bg})` }">
    <video controls src="../../imgs/flower.mp4"></video>
    <video controls :src="src"></video>
    <video controls :src="importSrc"></video>
    <img :src="bg" />
    <img src="../../imgs/bg.png" />
    <div>667788990011</div>
    <div class="json">{{ JSON.stringify(data, null, 4) }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import axios from "axios";
import bg from "../../imgs/bg.png";
import importSrc from "../../imgs/flower.mp4";
import "../../style/global.scss";

@Component({
  name: "VueVideo",
})
export default class VueVideo extends Vue {
  @Prop({ required: true, type: String }) src!: string;
  bg = bg;
  importSrc = importSrc;
  data = null;
  mounted() {
    axios({
      method: "get",
      url: "https://api.github.com/repos/vuejs/vue",
      responseType: "json",
    }).then((response) => {
      console.log(response);
      this.data = response.data;
    });
  }
}
</script>

<style lang="scss" scoped>
.VueVideo {
  width: auto;
  height: auto;
  background: url(../../imgs/bg.png);
  // display: flex;
  flex-direction: column;
  .json {
    color: black;
  }
  img {
    display: block;
  }
}
</style>
