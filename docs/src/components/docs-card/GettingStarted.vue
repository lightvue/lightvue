<template>
  <docs-card title="Setup" description="You can  import a component and register it as a local and global vue component as follows:" :showCardActions="false" :responsive="false">
    <div class="getting-started">
      <div style="padding-top: 8px">
        <code-highlight lang="javascript">
          <pre>
// import the component
import {{ componentName }} from 'lightvue/{{ packageName }}';
</pre
          >
        </code-highlight>
      </div>
      <div class="docs-step">
        <code-highlight lang="javascript">
          <pre>
// Register the component locally
export default {
    components: {
        {{ componentName }}
    }
}</pre
          >
        </code-highlight>
      </div>
      <div class="docs-step">
        <code-highlight lang="javascript">
          <pre>
// Register the component globally (Vue 2.x)
Vue.component('{{ componentName }}', {{ componentName }});

// Register the component globally (Vue 3.x)
const app = Vue.createApp({
  // ...
});
app.component('{{ componentName }}', {{ componentName }});
app.mount('#app')
               </pre
          >
        </code-highlight>
      </div>

      <slot></slot>
    </div>
  </docs-card>
</template>

<script>
import DocsCard from './DocsCard.vue';
import CodeHighlight from './CodeHighlight.vue';

export default {
  components: {
    DocsCard,
    CodeHighlight,
  },
  props: {
    packageName: {
      type: String,
      required: true,
    },
    componentName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.docs-step {
  border-top: 2px dashed #dee7ea;
}
</style>
