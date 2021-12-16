<template>
  <div class="docs-card" :id="computedId">
    <div class="docs-card__header">
      <h5 class="docs-card__title" @click="$router.push({ hash: `#${computedId}` })"># {{ title }}</h5>
      <div class="docs-card__actions">
        <div v-if="responsive" class="docs-card__action" @click="toggleDevice">
          <i class="docs-card__action-icon light-icon-devices" title="Responsive preview"></i>
        </div>
        <div v-if="sourceLink" class="docs-card__action" @click="openURL(sourceLink)">
          <i class="docs-card__action-icon light-icon-brand-github"></i>
        </div>
        <div v-if="$slots['code']" class="docs-card__action">
          <i class="docs-card__action-icon light-icon-code" title="View code example" @click="showCode = !showCode"></i>
        </div>
      </div>
    </div>
    <div v-if="showCode" class="docs-card__code-wrap">
      <div class="docs-card__code-tab">
        <div class="docs-card__code-tab-text">Template</div>
      </div>
      <CodeHighlight><slot name="code"></slot></CodeHighlight>
    </div>
    <ResponsiveDemo v-if="responsive" :device-width="deviceWidth" :overflow="overflow" :toggle-device-clicked="toggleDeviceClicked"><slot></slot></ResponsiveDemo>
    <slot v-else></slot>
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
    sourceLink: String,
    responsive: {
      default: true,
      type: Boolean,
    },
    overflow: {
      default: false,
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
  computed: {
    computedId() {
      return this.id ? this.id : this.title.split(' ').join('-').toLowerCase();
    },
  },
};
</script>

<style lang="scss">
.docs-card {
  padding: 0px;
  width: 100%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  //   overflow: hidden;
  margin-bottom: 30px;
  background: var(--background-color);
}
.copy-code {
  position: relative;
  top: 20px;
  left: 95%;
  i {
    color: var(--lightGray);
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

.docs-card__header {
  display: flex;
  width: 100%;
  padding: 10px;
  color: var(--text-color);
  border-bottom: 1px solid var(--lightGray);
  .docs-card__title {
    margin: 0px;
    white-space: nowrap;
    margin-left: -22px;
    padding: 8px 16px 8px 24px;
    background: var(--lightGray);
    color: var(--text-color);
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
    border-top-color: var(--gray);
    border-width: 10px 0 0 12px;
    z-index: -1;
  }
  .docs-card__actions {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .docs-card__action-icon {
      font-size: 24px;
      font-weight: bold;
      padding: 5px;
      padding-bottom: 0px;
      margin-left: 10px;
      color: var(--text-color);
      cursor: pointer;
      transition: 0.5s all ease-out;
    }
    .docs-card__action-icon:hover {
      color: black;
      opacity: 0.6;
    }
  }
}
.docs-card__code-tab {
  background: var(--lightGray);
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
</style>
