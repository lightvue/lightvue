<template>
  <div class="docs-card" :id="computedId">
    <div class="docs-card__header">
      <div class="docs-card__header--title">
        <h2>
          {{ title }}
        </h2>
      </div>
      <div class="docs-card__header--discription">
        <p v-html="discription" style="line-height: 1.7; opacity: 0.8">
          <!-- {{ discription }} -->
        </p>
      </div>
    </div>
    <div class="docs-card__body">
      <ResponsiveDemo v-if="responsive" :device-width="deviceWidth" :overflow="overflow" :toggle-device-clicked="toggleDeviceClicked">
        <div class="body-content">
          <slot></slot>
        </div>
      </ResponsiveDemo>

      <slot v-else></slot>

      <div class="docs-card__body_btn-group" v-if="showMiddleControl">
        <div class="d-flex">
          <div class="docs-card__action" @click="openURL(sourceLink)">
            <i class="docs-card__action-icon light-icon-brand-github"></i>
          </div>
          <div v-if="responsive" class="docs-card__action" @click="toggleDevice">
            <i class="docs-card__action-icon light-icon-devices" title="Responsive preview"></i>
          </div>
          <div v-if="$slots['code']" class="docs-card__action">
            <i class="docs-card__action-icon light-icon-code" title="View code example" @click="showCode = !showCode"></i>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showCode" class="docs-card__code-wrap">
      <div class="docs-card__code-tab">
        <div class="docs-card__code-tab-text">Template</div>
      </div>
      <CodeHighlight><slot name="code"></slot></CodeHighlight>
    </div>
  </div>
</template>

<script>
import CodeHighlight from './CodeHighlight.vue';
import ResponsiveDemo from './ResponsiveDemo.vue';

export default {
  components: {
    CodeHighlight,
    ResponsiveDemo,
  },
  props: {
    id: String,
    title: {
      default: '',
      type: String,
    },
    discription: {
      default: '',
      type: String,
    },
    footer: {
      default: '',
      type: String,
    },
    sourceLink: String,
    responsive: {
      default: true,
      type: Boolean,
    },
    overflow: {
      default: false,
      type: Boolean,
    },
    showMiddleControl: {
      default: true,
      type: Boolean,
    },
  },
  data() {
    return {
      showCode: false,
      deviceWidth: 0,
      toggleDeviceClicked: 0,
    };
  },

  methods: {
    toggleDevice() {
      // this.$emit('toggleDevice');
      // this.bus.$emit('toggleDevice');
      this.toggleDeviceClicked++;

      this.deviceWidth = 300;
    },
    openURL(link) {
      window.open(link, '_blank');
    },
  },
  // mounted() {
  //   window.screen.availWidth > 1200 ? (this.showResponsive = false) : (this.hideResponsive = true);
  // },
  computed: {
    computedId() {
      return this.id ? this.id : this.title.split(' ').join('-').toLowerCase();
    },
  },
};
</script>

<style lang="scss">
$primary-color: #38b2ac;
.docs-card {
  /* padding: 20px 20px 30px 20px; */
  width: 100%;
  background: transparent;
  /* box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); */
  border-radius: 4px;
  //   overflow: hidden;
  margin-bottom: 30px;
  /* background: #ffffff; */
}

.copy-code {
  position: relative;
  top: 20px;
  left: 95%;
  i {
    color: #cccccc;
    padding: 5px;
    font-size: 2rem;
    font-weight: bold;
    border-radius: 50%;
    transition: all 0.8s ease-out;
  }
  i:hover {
    color: black;
    opacity: 0.6;
  }
}
.docs-card__body {
  background: #ffffff;
  /* border: 2px solid #d8d8d8; */

  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05);
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px; */
  /* padding: 0rem 0rem 0rem 3rem; */
  /* padding: 3rem; */
  border-radius: 10px;
  position: relative;

  .body-content {
    display: grid;
    place-items: center;
    min-height: 20vh;
    width: 100%;
    padding-bottom: 8px;
  }
  .docs-card__body_btn-group {
    position: absolute;
    bottom: 0%;
    right: 50%;
    transform: translate(50%, 50%);
    width: 10rem;
    padding: 5px 15px;
    border-radius: 50px;
    background: #ffffff;
    box-shadow: 0px 20px 50px -10px rgba(0, 0, 0, 0.2);
    /* box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px; */
    /* box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); */
    .d-flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 24px;

      .docs-card__action-icon {
        font-weight: bold;

        color: #b1b1b1;

        cursor: pointer;
        transition: 0.5s all ease-out;
      }
      .docs-card__action-icon:hover {
        color: #6c6c6c;
        /* opacity: 0.8; */
      }
    }
  }
}
.docs-card__header {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  /* border-bottom: 1px solid #edf2f6; */
  .docs-card__title {
    margin: 0px;
    white-space: nowrap;
    margin-left: -22px;
    padding: 8px 16px 8px 24px;
    background: #dfe7eb;
    color: #607b89;
    position: relative;
    cursor: pointer;
    border-radius: 6px 20px 20px 0;
    box-shadow: 1px 2px 4px -1px rgba(0, 0, 0, 0.4);
  }
  h5::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-top-color: #bdc7cf;
    border-width: 10px 0 0 12px;
    z-index: -1;
  }
}
.docs-card__code-tab {
  background: #edf2f6;
  color: #757575;
  border-bottom: 1px solid #cccccc;
  border-bottom: none;
}
.docs-card__code-tab-text {
  display: inline-block;
  border-bottom: 3px solid #38b2ac;
  padding: 0.5rem 1rem;
  font-weight: bold;
  cursor: pointer;
}
.docs-card__header--title {
  font-weight: 400;
  h2 {
    font-size: 1.8rem;
  }
}
.docs-card__header--discription {
  line-height: 1.7;
  span {
    color: $primary-color;
  }
}
.docs-card__footer--discription {
  padding: 10px;
  margin-top: 2rem;
  line-height: 1.7;
  span {
    color: $primary-color;
  }
}
</style>
