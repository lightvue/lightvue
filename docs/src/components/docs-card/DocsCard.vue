<template>
  <div class="docs-card" :id="computedId">
    <div class="docs-card__header">
      <nuxt-link :to="{ hash: `#${computedId}` }" class="docs-card__header--title">
        <h2><span>#</span>{{ title }}</h2>
      </nuxt-link>
      <div class="docs-card__header--description">
        <p v-html="description" style="line-height: 1.7; opacity: 0.8"></p>
      </div>
    </div>
    <div class="docs-card__body">
      <ResponsiveDemo v-if="responsive" :overflow="overflow" :toggle-device-clicked="toggleDeviceClicked" :hideResizer="true" roundedCard>
        <div class="body-content">
          <slot></slot>
        </div>
      </ResponsiveDemo>

      <slot v-else></slot>

      <div class="docs-card__floating-actions" v-if="showCardActions">
        <a :href="`https://github.com/lightvue/lightvue/blob/master/examples/${file}.vue`" target="_blank" class="docs-card__action">
          <i class="light-icon-brand-github"></i>
        </a>
        <div v-if="responsive" class="docs-card__action" @click="toggleDevice" title="Responsive preview">
          <i class="light-icon-devices"></i>
        </div>
        <div v-if="$slots['templateCode'] || $slots['scriptCode'] || $slots['styleCode']" class="docs-card__action" :class="{ '--active': showCode }" title="View code example" @click="showCode = !showCode">
          <i class="light-icon-code"></i>
        </div>
      </div>
      <LvCollapsible :show="showCode">
        <div class="docs-card__code-wrap">
          <div class="docs-card__code-tabs">
            <div class="docs-card__code-tab" :class="{ '--active': activeTab === 'templateCode' }" v-if="$slots['templateCode']" @click="activeTab = 'templateCode'">Template</div>
            <div class="docs-card__code-tab" :class="{ '--active': activeTab === 'scriptCode' }" v-if="$slots['scriptCode']" @click="activeTab = 'scriptCode'">Script</div>
            <div class="docs-card__code-tab" :class="{ '--active': activeTab === 'styleCode' }" v-if="$slots['styleCode']" @click="activeTab = 'styleCode'">Style</div>
          </div>
          <CodeHighlight v-show="activeTab === 'templateCode'"><slot name="templateCode"></slot></CodeHighlight>
          <CodeHighlight v-show="activeTab === 'scriptCode'"><slot name="scriptCode"></slot></CodeHighlight>
          <CodeHighlight v-show="activeTab === 'styleCode'"><slot name="styleCode"></slot></CodeHighlight>
        </div>
      </LvCollapsible>
    </div>
  </div>
</template>

<script>
import CodeHighlight from './CodeHighlight.vue';
import ResponsiveDemo from './ResponsiveDemo.vue';
import LvCollapsible from 'lightvue/collapsible';

export default {
  components: {
    CodeHighlight,
    ResponsiveDemo,
    LvCollapsible,
  },
  props: {
    id: String,
    title: {
      default: '',
      type: String,
    },
    description: {
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
    showCardActions: {
      default: true,
      type: Boolean,
    },
    file: String,
  },
  data() {
    return {
      showCode: false,
      deviceWidth: 0,
      toggleDeviceClicked: 0,
      hover: false,
      activeTab: 'templateCode',
    };
  },

  methods: {
    toggleDevice() {
      this.toggleDeviceClicked++;
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
$primary-color: #38b2ac;
.docs-card {
  /* padding: 20px 20px 30px 20px; */
  width: 100%;
  background: transparent;
  /* box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); */
  border-radius: 4px;
  //   overflow: hidden;
  margin-bottom: 56px;
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

  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  position: relative;

  .body-content {
    display: grid;
    place-items: center;
    min-height: 20vh;
    width: 100%;
    padding-bottom: 8px;
  }
  .docs-card__floating-actions {
    position: absolute;
    bottom: 0%;
    right: 50%;
    transform: translate(50%, 50%);
    // width: 10rem;
    padding: 8px;
    border-radius: 50px;
    background: #ffffff;
    box-shadow: 0px 20px 50px -10px rgba(0, 0, 0, 0.2);
    z-index: 1;
    /* box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px; */
    /* box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); */
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    font-size: 24px;

    .docs-card__action {
      font-weight: bold;
      border-radius: 50%;
      width: 36px;
      height: 36px;
      padding: 6px;
      color: #b1b1b1;

      cursor: pointer;
      transition: 0.5s all ease-out;

      &.--active {
        color: #687f8b;
        background-color: #edf2f6;
      }
      &:hover {
        color: #687f8b;
        background-color: #e0e7ed;
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
.docs-card__code-tabs {
  display: flex;
  align-items: center;
  width: 100%;
  background: #edf2f6;
}
.docs-card__code-tab {
  color: #757575;
  font-weight: bold;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  padding: 10px 20px;
  background-color: transparent;
  transition: 0.3s all ease-out;
  &.--active {
    border-bottom: 3px solid #38b2ac;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
}
.docs-card__header--title {
  color: unset;
  h2 {
    font-weight: 400;
    font-size: 1.8rem;
    width: max-content;
    cursor: pointer;
    span {
      display: inline;
      opacity: 0.3;
      margin-right: 8px;
      transition: opacity 0.3s ease-in-out;
    }
    &:hover span {
      opacity: 0.7;
    }
  }
}
.docs-card__header--description {
  line-height: 1.7;
  span {
    color: $primary-color;
  }
}
.docs-card__footer--description {
  padding: 10px;
  margin-top: 2rem;
  line-height: 1.7;
  span {
    color: $primary-color;
  }
}
.docs-card__code-wrap {
  border-radius: 0 0 10px 10px;
}
</style>
