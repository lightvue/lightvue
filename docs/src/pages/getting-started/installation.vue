<template>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>Installation</h1>
        <p style="opacity: 0.8">In order to get started with light vue, you need to install LightVue and its dependency LightIcon (Only required if the icons are getting used).</p>
      </div>
    </div>
    <br />
    <div class="content-section implementation">
      <docs-card title="Installing LightVue" :showCardActions="false" :responsive="false">
        <div class="install__wrapper" style="padding: 1rem">
          <div class="install__container">
            <div class="install__process">
              <CodeHighlight lang="javascript">
                <pre>

// For Vue 2.x
npm install lightvue

// For Vue 3.x
npm install lightvue@next

// OR:
yarn add lightvue
yarn add lightvue@next
          </pre
                >
              </CodeHighlight>
            </div>
            <h3>Register Components, as per need</h3>
            <div class="install__process">
              <CodeHighlight lang="javascript">
                <pre>
import Vue from 'vue' <br />
import LvInput from 'lightvue/input' <br />
import lvButton from 'lightvue/button' <br />

Vue.component('LvInput', LvInput);
Vue.component('LvButton', LvButton);
          </pre>
              </CodeHighlight>
            </div>
          </div>
        </div>
      </docs-card>
    </div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>Customization</h1>
        <p style="opacity: 0.8">
          In order to get started with light vue, you need to install LightVue and its dependency LightIcon (Only required if the icons are getting used). <br />
          For Detailed Customisation <nuxt-link :to="{ path: '/', hash: 'contact' }" style="color: #38b2ac">Contact Us</nuxt-link>
        </p>
      </div>
      <br />
      <!-- <div class="content-section implementation">
        <docs-card title="Customization" :responsive="false">
          <div class="custom__wrapper" style="padding: 1rem">
            <div class="custom__container">
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

          </pre
                  >
                </CodeHighlight>
              </div> -->
      <!-- <div class="description__para">This can be easily configured via passing the theme property</div> -->
      <!-- <div class="custom__process">
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

          </pre
                  >
                </CodeHighlight>
              </div> -->
      <!-- </div>
          </div>
        </docs-card>
      </div>
    </div>
    <div>
      <div class="content-section introduction">
        <div class="feature-intro">
          <h1>Contribution</h1>
          <p style="opacity: 0.8">Light Vue is hosted on Github, which is currently in version 1.0 with with vue/ Nuxt js. the actual SCSS Files are in the main folder and other DOCS files are in docs folder.</p>
        </div>
      </div>
      <br />
      <div class="content-section implementation">
        <docs-card title="Preparing your fork" :responsive="false">
          <div class="install__wrapper" style="padding: 1rem">Click ‘Fork’ on Github, creating e.g. yourname/lightvue.</div>
        </docs-card>
      </div>
      <div class="content-section implementation">
        <docs-card title="Making your changes" :responsive="false">
          <div class="install__wrapper" style="padding: 1rem">Click ‘Fork’ on Github, creating e.g. yourname/lightvue Write tests expecting the correct/fixed/new functionality. Add new Scss file and prepare docs page of the same in the core/component folder for individual component stylng. Run tests and save the changes. Commit your changes</div>
        </docs-card>
      </div>
      <div class="content-section implementation">
        <docs-card title="Create Pull requests" :responsive="false">
          <div class="install__wrapper" style="padding: 1rem">Push your commit to get it back up to your fork: git push origin HEAD Visit Github, click handy “Pull request” button that it will make upon noticing your new branch. In the description field, write down issue number (if submitting code fixing an existing issue) or describe the issue + your fix (if submitting a wholly new bugfix). Hit ‘submit’! And please be patient - the maintainers will get to you when they can.</div>
        </docs-card>
      </div> -->
    </div>
  </div>
</template>

<script>
import DocsCard from '@/components/docs-card/DocsCard';
import CodeHighlight from '@/components/docs-card/CodeHighlight.vue';
export default {
  head: {
    title: ' Installation Docs | LightVue ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'LightVue' },
      { property: 'og:image', content: 'https://lightvue.com/icon.png' },
      {
        property: 'og:site_name',
        content: 'Installation Docs | LightVue',
      },
      {
        property: 'og:description',
        content: ' ',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  components: {
    DocsCard,
    CodeHighlight,
  },
};
</script>

<style lang="scss">
.info-link {
  color: #3e8635;
  font-weight: 600;
  // text-decoration: underline;
}
</style>
