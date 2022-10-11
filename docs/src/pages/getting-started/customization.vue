<template>
  <div class="custom__wrapper">
    <div class="custom__container">
      <h1>Customizing LightVue</h1>
      <div class="description__para">LightVue Can be easily customized in order to make the custom theme which can fulfil the needs of user's project</div>
      <div class="description__para">By default, this is the theme that is applied to all the components</div>
      <div class="custom__process">
        <CodeHighlight lang="css">
          <pre>

   .lv--primary {
      --theme-color: #38b2ac;
      --theme-color-light: #8ed8d6;
      --theme-color-dark: #319795;
      --theme-color-inverse: #ffffff;
    }

   .lv--secondary {
      --theme-color: #607d8b;
      --theme-color-light: #beccd2;
      --theme-color-dark: #56717d;
      --theme-color-inverse: #ffffff;
    }

   .lv--success {
      --theme-color: #008c7f;
      --theme-color-light: #95e8df;
      --theme-color-dark: #03655b;
      --theme-color-inverse: #ffffff;
    }

   .lv--info {
      --theme-color: #0288d1;
      --theme-color-light: #89d4fe;
      --theme-color-dark: #027abc;
      --theme-color-inverse: #ffffff;
    }

   .lv--warning {
      --theme-color: #ffb300;
      --theme-color-light: #ffd36d;
      --theme-color-dark: #df9c00;
      --theme-color-inverse: #ffffff;
    }

   .lv--help {
      --theme-color: #795548;
      --theme-color-light: #baafac;
      --theme-color-dark: #795548;
      --theme-color-inverse: #ffffff;
    }

   .lv--danger {
      --theme-color: #bb2727;
      --theme-color-light: #e9a5a5;
      --theme-color-dark: #9b2222;
      --theme-color-inverse: #ffffff;
    }

   .lv--plain {
      --theme-color: #3f51b5;
      --theme-color-light: #acb7f7;
      --theme-color-dark: #2e3fa2;
      --theme-color-inverse: #ffffff;
    }

          </pre>
        </CodeHighlight>
      </div>
      <div class="description__para">This can be easily configured via passing the theme property</div>
      <div class="custom__process">
        <CodeHighlight lang="css">
          <pre>

    // src/plugins/lightVue.js

    import Vue from 'vue'
    import LightVue from 'LightVue/lib'
    const LightVue = new LightVue({
      theme: {
        themes: {
          light: {
            primary: '#3f51b5',
            secondary: '#b0bec5',
            accent: '#8c9eff',
            error: '#b71c1c',
          },
        },
      },
    })

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
// .custom__wrapper {
//   padding: 2rem 8rem;
// }
.custom__container {
  h1 {
    text-align: center;
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.5;
    margin: 50px 0;
    color: #585858;
  }
  .description__para {
    margin-top: 1rem;
    line-height: 1.625;
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .custom__container {
    h1 {
      font-size: 2rem;
      margin: 0px 0px;
    }
    .description__para {
      font-size: 14px;
    }
  }
}
</style>
