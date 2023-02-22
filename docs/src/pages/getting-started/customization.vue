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
      --lv-theme-color: #38b2ac;
      --lv-theme-color-light: #8ed8d6;
      --lv-theme-color-dark: #319795;
      --lv-theme-color-inverse: #ffffff;
    }

   .lv--secondary {
      --lv-theme-color: #607d8b;
      --lv-theme-color-light: #beccd2;
      --lv-theme-color-dark: #56717d;
      --lv-theme-color-inverse: #ffffff;
    }

   .lv--success {
      --lv-theme-color: #008c7f;
      --lv-theme-color-light: #95e8df;
      --lv-theme-color-dark: #03655b;
      --lv-theme-color-inverse: #ffffff;
    }

   .lv--info {
      --lv-theme-color: #0288d1;
      --lv-theme-color-light: #89d4fe;
      --lv-theme-color-dark: #027abc;
      --lv-theme-color-inverse: #ffffff;
    }

   .lv--warning {
      --lv-theme-color: #ffb300;
      --lv-theme-color-light: #ffd36d;
      --lv-theme-color-dark: #df9c00;
      --lv-theme-color-inverse: #ffffff;
    }

   .lv--help {
      --lv-theme-color: #795548;
      --lv-theme-color-light: #baafac;
      --lv-theme-color-dark: #795548;
      --lv-theme-color-inverse: #ffffff;
    }

   .lv--danger {
      --lv-theme-color: #bb2727;
      --lv-theme-color-light: #e9a5a5;
      --lv-theme-color-dark: #9b2222;
      --lv-theme-color-inverse: #ffffff;
    }

   .lv--plain {
      --lv-theme-color: #3f51b5;
      --lv-theme-color-light: #acb7f7;
      --lv-theme-color-dark: #2e3fa2;
      --lv-theme-color-inverse: #ffffff;
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
