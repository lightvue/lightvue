<template>
  <DocsCard title="Getting Started" :responsive="false">
    <div class="getting-started">
      <div class="getting-started__docs">
        <CodeHighlight lang="javascript">
          <pre>
// import lightvue component
import {{ componentName }} from 'lightvue/{{ packageName }}';
</pre
          >
        </CodeHighlight>
      </div>
      <div class="getting-started__docs">
        <CodeHighlight lang="javascript">
          <pre>
// register the component globally
Vue.component('{{ componentName }}', {{ componentName }});
               </pre
          >
        </CodeHighlight>
      </div>
      <div class="getting-started__docs">
        <CodeHighlight lang="javascript">
          <pre>
// register the component locally
export default {
    components: {
        {{ componentName }}
    }
}</pre
          >
        </CodeHighlight>
      </div>
      <slot></slot>
    </div>
  </DocsCard>
</template>

<script>
import DocsCard from "./DocsCard.vue";
import CodeHighlight from "./CodeHighlight.vue";

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
.getting-started__docs {
  /* border-left: 4px solid #dee7ea;
    border-top: 1px solid #f5f8f9;
    background-color: #f5f8f9;
    margin-top: 16px; */
  border-top: 2px dashed #dee7ea;
}
/* .getting-started__docs:hover{
    background-color: #f5f8f9;
} */
/* .getting-started__docs__heading{
    font-size: 16px;
    font-weight: 600;
    padding: 8px 16px 0px;
} */
</style>
