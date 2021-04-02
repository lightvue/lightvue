<template>
  <div class="install__wrapper">
    <div class="install__container">
      <h1>Getting Started</h1>
      <div class="installation__description">In order to get started with light vue, you need to install LightVue and its dependency LightIcon (Only required if the icons are getting used).</div>
      <h2>1. Installing LightVue</h2>
      <div class="install__process">
        <CodeHighlight lang="javascript">
          <pre>

   npm install lightvue

          </pre>
        </CodeHighlight>
      </div>
      <div class="discription__para">OR</div>
      <div class="install__process">
        <CodeHighlight lang="javascript">
          <pre>

   yarn add lightvue

          </pre>
        </CodeHighlight>
      </div>
      <h3>With Vue CLI Plugin</h3>
      <div class="discription__para">While using Vue CLI, LighgVue can be installed using the LightVue plugin</div>
      <div class="install__process">
        <CodeHighlight lang="javascript">
          <pre>

    vue add light-vue

          </pre>
        </CodeHighlight>
      </div>
      <h2>2. Configuring your Vue Project</h2>
      <div class="install__process">
        <CodeHighlight lang="javascript">
          <pre>

   import Vue from 'vue' <br />
   import LightVue from 'light-vue' <br />
          <br />
   const components = { <br />
   //... <br />
   } <br />
   Vue.use(LightVue, components)

          </pre>
        </CodeHighlight>
      </div>
      <h3>Injecting Global Styles</h3>
      <div class="install__process">
        <CodeHighlight lang="javascript">
          <pre>

   import Vue from 'vue' <br />
   import LightVue, { LvThemeProvider, LvReset } from '@lightvue/vue' <br />
   import App from './App.vue' <br />
   Vue.use(LightVue) <br />
   new Vue({ <br />
    el: '#app', <br />
    render: (h) => h(LvThemeProvider, [h(LvReset), h(App)]) <br />
   }).$mount()

          </pre>
        </CodeHighlight>
      </div>
      <h3>Injecting the required components</h3>
      <div class="install__process">
        <CodeHighlight lang="javascript">
          <pre>
   import Vue from 'vue' <br />
   import LightVue from 'light-vue' <br />
   import LvInput from 'lightvue/vue-components/lv-input' <br />
   import lvButton from 'lightvue/vue-components/lv-button' <br />
   const settings = { <br />
    'lv-input': {<br />
        component: LvInput, <br />
        props: { <br />
        } <br />
     }, <br />
     'lv-button': { <br />
         component: LvButton, <br />
         props: { <br />
         } <br />
     }, <br />
   } <br />
   Vue.use(LightVue, settings)
          </pre>
        </CodeHighlight>
      </div>
    </div>
  </div>
</template>

<script>
import CodeHighlight from '@/components/docs-card/CodeHighlight.vue';
export default {
  components: { CodeHighlight },
};
</script>

<style lang="scss" scoped>
// .install__wrapper {
//   padding: 2rem 8rem;
// }
.install__container {
  h1 {
    text-align: center;
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.5;
    margin: 50px 0;
    color: #585858;
  }
  .discription__para {
    margin-top: 1rem;
    line-height: 1.625;
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .install__container {
    h1 {
      font-size: 2rem;
      margin: 0px 0px;
    }
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.3rem;
    }
    .discription__para {
      font-size: 14px;
    }
    .installation__description {
      text-align: center;
      margin-bottom: 30px;
    }
  }
}
</style>
