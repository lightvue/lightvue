<template>
  <DocsCard v-bind="$attrs" v-if="file" :file="file">
    <template #templateCode v-if="parts.template">{{ parts.template }}</template>
    <template #scriptCode v-if="parts.script">{{ parts.script }}</template>
    <template #styleCode v-if="parts.style">{{ parts.style }}</template>
    <component :is="component" v-if="component" />
  </DocsCard>
</template>

<script>
import DocsCard from './DocsCard.vue';
export default {
  components: {
    DocsCard,
  },
  inheritAttrs: false,
  props: {
    file: String,
  },
  data() {
    return {
      // loading: true,
      component: null,
      tabs: [],
      parts: {},
    };
  },
  created() {
    if (this.file) {
      // this.component = () => import('lightvueDocs/example/' + this.file + '.vue');
      //
      if (!this.component) {
        import('lightvueDocs/example/' + this.file + '.vue').then(comp => {
          this.component = comp.default;
        });
      }

      Promise.all([
        // import('@/' + this.file + '.vue').then(comp => {
        //   this.component = comp.default;
        // }),
        import('!raw-loader!lightvueDocs/example/' + this.file + '.vue').then(comp => {
          this.parseComponent(comp.default);
        }),
      ]).then(() => {
        // this.loading = false;
      });
    }
  },
  // watch: {
  //   file: function (newValue) {
  //     import(`${newValue}.vue`).then(loadedComponent => {
  //       this.component = loadedComponent;
  //     });
  //   },
  // },
  // mounted: function () {
  //   import(`${this.file}.vue`).then(loadedComponent => {
  //     this.component = loadedComponent;
  //   });
  // },
  methods: {
    parseComponent(comp) {
      const template = this.parseTemplate('template', comp),
        script = this.parseTemplate('script', comp),
        style = this.parseTemplate('style', comp);
      this.parts = {
        template,
        script,
        style,
      };
      this.tabs = ['template', 'script', 'style'].filter(type => this.parts[type]);
    },
    parseTemplate(target, template) {
      const string = `(<${target}(.*)?>[\\w\\W]*<\\/${target}>)`,
        regex = new RegExp(string, 'g'),
        parsed = regex.exec(template) || [];
      return parsed[1] || '';
    },
  },
};
</script>

<style></style>
