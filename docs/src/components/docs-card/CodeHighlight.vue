<template>
  <div class="code-wrap">
    <CodePrism :lang="lang">
      <slot></slot>
    </CodePrism>
    <CopyButton :text="getMarkup"></CopyButton>
  </div>
</template>
<script>
import CodePrism from "./CodePrism.vue";
import CopyButton from "./CopyButton.vue";
export default {
  name: "DocCode",
  components: {
    CodePrism,
    CopyButton,
  },
  props: {
    lang: {
      type: String,
      default: "html",
    },
  },
  methods: {
    getMarkup() {
      return this.$el.querySelector("pre").innerText;
    },
  },
};
</script>

<style>
.code-wrap {
  position: relative;
  border-bottom: 1px solid #edf2f6;
}
</style>
