<template>
  <div class="VueText">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";


@Component({
  name: "VueText",
})
export default class VueText extends Vue {}
</script>

<style lang="scss">
@import './icons.scss';
.VueText {
  color: red;
}
</style>
