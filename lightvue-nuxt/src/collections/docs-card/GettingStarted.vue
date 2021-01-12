<template>
    <docs-card title="Getting Started" :responsive="false">
        <div class="getting-started">
            <div class="docs-step">
                <code-highlight lang="javascript" >
                    <pre>// import lightvue component
import {{componentName}} from 'lightvue/{{packageName}}';
</pre>
</code-highlight>
            </div>
            <div class="docs-step">
                <code-highlight lang="javascript"><pre>// register the component globally
Vue.component('{{componentName}}', {{componentName}});
               </pre></code-highlight>
            </div>
            <div class="docs-step">
                <code-highlight lang="javascript"><pre>// register the component locally
export default {
    components: {
        {{componentName}}
    }
}</pre></code-highlight>
            </div>
            <slot></slot>
        </div>
    </docs-card>
</template>

<script>
import DocsCard from "./DocsCard.vue";
import CodeHighlight from "./CodeHighlight.vue";


export default {
    components:{
        DocsCard,
        CodeHighlight
    },
    props:{
        packageName:{
            type: String,
            required: true
        },
        componentName:{
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.docs-step{
    /* border-left: 4px solid #dee7ea;
    border-top: 1px solid #f5f8f9;
    background-color: #f5f8f9;
    margin-top: 16px; */
    border-top: 2px dashed #dee7ea;
}
/* .docs-step:hover{
    background-color: #f5f8f9;
} */
/* .docs-step__heading{
    font-size: 16px;
    font-weight: 600;
    padding: 8px 16px 0px;
} */
</style>
