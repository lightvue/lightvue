<template>
  <docs-card v-bind="$attrs">
    <template #code>{{ parts.template }}</template>
    <component :is="component" v-if="component" />
  </docs-card>
</template>

<script>
import DocsCard from "./DocsCard.vue";
export default {
  inheritAttrs: false,
  props: {
    file: String,
  },
  components: {
    DocsCard,
  },
  data() {
    return {
      loading: true,
      component: null,
      tabs: [],
      currentTab: "template",
      expanded: false,
      parts: {},
    };
  },
  mounted() {
    Promise.all([
      import("@/" + this.file + ".vue").then((comp) => {
        this.component = comp.default;
      }),
      import("!raw-loader!@/" + this.file + ".vue").then((comp) => {
        this.parseComponent(comp.default);
      }),
    ]).then(() => {
      this.loading = false;
    });
  },
  methods: {
    parseComponent(comp) {
      const template = this.parseTemplate("template", comp),
        script = this.parseTemplate("script", comp),
        style = this.parseTemplate("style", comp);
      this.parts = {
        template,
        script,
        style,
      };
      this.tabs = ["template", "script", "style"].filter(
        (type) => this.parts[type]
      );
    },
    parseTemplate(target, template) {
      const string = `(<${target}(.*)?>[\\w\\W]*<\\/${target}>)`,
        regex = new RegExp(string, "g"),
        parsed = regex.exec(template) || [];
      return parsed[1] || "";
    },
  },
};
</script>

<style>
</style>
