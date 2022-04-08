<template>
  <div class="best__demo__wrapper" :id="computedId">
    <div class="wrapper__header">
      <h5 class="component__header" @click="$router.push({ hash: `#${computedId}` })"># {{ title }}</h5>
      <div class="docs-card__actions">
        <!-- <div class="docs-card__action">
          <i class="docs-card__action-icon docs-card__action-icon light-icon-brand-github" @click="openURL(sourceLink)"></i>
        </div> -->
        <div class="docs-card__action --active --disabled" title="Playground Demo" v-tooltip.top="'Realtime Demo'">
          <i class="light-icon-presentation"></i>
        </div>
        <div class="docs-card__action" title="Responsive View" v-tooltip.top="'Responsive View'" @click="toggleDevice">
          <i class="light-icon-devices"></i>
        </div>
        <div class="docs-card__action" :class="{ '--active': showCode }" @click="showCode = !showCode" title="Code Preview" v-tooltip.top="'Code Preview'">
          <i class="light-icon-code"></i>
        </div>
        <div class="docs-card__action --props" :class="{ '--active': showprops, '--active-mobile': showPorpsOptions }" title="Customization Options" v-tooltip.top="'Customization Options'" @click="showOptions">
          <i class="light-icon-adjustments-horizontal"></i>
        </div>
      </div>
    </div>
    <div class="dy-pg__wrap">
      <div style="flex: 1; position: relative" class="dy-pg__left" :class="{ '--only-left': !showprops }">
        <ResponsiveDemo v-if="responsive" :overflow="overflow" :toggle-device-clicked="toggleDeviceClicked" class="dy-comp__wrap" :hideResizer="true">
          <div class="demo-sec light-scrollbar" :class="{ '--allow-overflow': overflow }">
            <slot></slot>
          </div>
        </ResponsiveDemo>
        <LvCollapsible :show="showCode" class="dy-code__wrap">
          <CopyButton :text="getMarkup" />
          <div class="dy-code light-scrollbar">
            <slot name="code"></slot>
          </div>
        </LvCollapsible>
      </div>

      <LvCollapsible :show="showprops" class="dy-props__wrap" orientation="horizontal">
        <div class="dy-props__header">Realtime Customizations</div>
        <div class="dy-props__body light-scrollbar">
          <slot name="props"></slot>
        </div>
      </LvCollapsible>
      <LvDrawer v-model="showPorpsOptions" :maxSpan="100" :height="500" :width="300" headerTitle="Realtime Customizations" close shadow background="#fff" headerColor="#008080" :zIndex="1000">
        <div class="dy-props__body light-scrollbar">
          <slot name="props"></slot>
        </div>
      </LvDrawer>
    </div>
  </div>
</template>

<script>
import CopyButton from '@/components/docs-card/CopyButton';
import LvDrawer from 'lightvue/drawer';
import ResponsiveDemo from './ResponsiveDemo.vue';
import LvCollapsible from 'lightvue/collapsible';
import Tooltip from 'lightvue/tooltip';

export default {
  components: {
    CopyButton,
    ResponsiveDemo,
    LvDrawer,
    LvCollapsible,
  },
  directives: {
    tooltip: Tooltip,
  },
  data() {
    return {
      showPorpsOptions: false,
      deviceWidth: 0,
      toggleDeviceClicked: 0,
      showCode: true,
      showprops: true,
    };
  },
  props: {
    title: String,
    id: String,
    file: String,
    responsive: {
      default: true,
      type: Boolean,
    },
    overflow: {
      default: true,
      type: Boolean,
    },
  },
  computed: {
    computedId() {
      return this.$props.id ? this.$props.id : this.title.split(' ').join('-').toLowerCase();
    },
  },

  methods: {
    showOptions() {
      window.innerWidth <= 525 ? (this.showPorpsOptions = !this.showPorpsOptions) : (this.showprops = !this.showprops);
      // this.showPorpsOptions = !this.showPorpsOptions;
    },

    getMarkup() {
      return this.$el.querySelector('.dy-code').innerText;
    },
    toggleDevice() {
      this.toggleDeviceClicked++;
    },
    openURL(link) {
      window.open(link, '_blank');
    },
  },
};
</script>

<style lang="scss">
.best__demo__wrapper {
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.15);
  background: #ffffff;
  margin-bottom: 32px;
  margin-top: 24px;
  width: 100%;
  position: relative;
  border-radius: 10px;
}
.dy-pg__wrap {
  display: flex;
  /* justify-content: space-between; */
  position: relative;
  /* margin-bottom: ; */
  /* border: 1px solid #cccccc; */
  /* justify-content: space-between; */
}

.dy-pg__left {
  display: flex;
  flex-direction: column;

  max-height: 60vh;

  align-items: stretch;
  overflow: hidden;
  position: relative;
  border-radius: 0px 0px 0px 10px;
  &.--only-left {
    border-radius: 0px 0px 10px 10px;
  }
}

.dy-props__wrap {
  max-width: 300px;
  max-height: 60vh;
  background: #ffffff;
  /* padding: 20px; */
  transition: all 0.2s ease-in-out;
  border-left: 2px solid #edf2f6;
  border-radius: 0px 0px 10px 0px;
}
.dy-props__header {
  padding: 16px;
  border-bottom: 1px solid #edf2f6;
  font-weight: 600;
  font-size: 1em;
  color: #008080;
  white-space: nowrap;
  width: 300px;
}

.dy-props__body {
  padding: 20px;
  // overflow-y: scroll;
  height: calc(100% - 52px);
  background: #ffffff;
  border-radius: 0px 0px 10px 0px;
  //   height: 350px;
}

.wrapper__header {
  display: flex;
  width: 100%;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #edf2f6;
  .component__header {
    /* padding: 20px; */

    font-size: 18px;
    font-weight: bold;
    /* border: 1px solid #edf2f6; */
    margin: 0px;
    white-space: nowrap;
    /* margin-left: -22px; */
    /* padding: 8px 16px 8px 24px; */
    /* background: #dfe7eb; */
    color: #607b89;
    position: relative;
    cursor: pointer;
    /* border-radius: 6px 20px 20px 0;
    box-shadow: 1px 2px 4px -1px rgba(0, 0, 0, 0.4); */
  }
  /* h5::after {
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
    margin: 0px;
  } */
}
.docs-card__actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  font-size: 24px;
  .docs-card__action {
    cursor: pointer;
    /* transition: 0.5s all ease-out; */
    border-radius: 50%;
    // font-weight: bold;
    padding: 6px;
    height: 36px;
    width: 36px;
    cursor: pointer;
    transition: 0.5s all ease-out;
    /* font-size: 24px; */
    &.--active {
      color: #687f8b;
      background-color: #edf2f6;
    }
    &.--disabled {
      cursor: not-allowed;
    }

    &:hover {
      color: #607b89;
      background-color: #dde4e9;
    }
  }
}

.dy-comp__wrap {
  flex-grow: 1;
  position: relative;

  justify-content: center;
  width: 100%;

  background: #ffffff;
  .demo-sec {
    min-height: 200px;
    width: 100%;
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    overflow-y: scroll;
    &.--allow-overflow {
      overflow: initial !important;
    }
  }
}

.dy-props__toggle-drawer {
  display: none;
  cursor: pointer;
}
// .dy-code__wrap.light-scrollbar::-webkit-scrollbar {
//   width: 0 !important;
// }
.dy-code__wrap {
  position: relative;
  border-top: 2px solid #edf2f6;
}
.dy-code {
  max-height: 180px;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  position: relative;
  // padding: 5px;
  pre {
    color: #2f9c0a;
    span {
      color: #1990b8;
    }
  }
  .dy-code-row {
    &.--tag-row {
      color: #c92c2c;
      padding-left: 16px;
    }
    &.--empty-row {
      height: 20px;
      min-height: 4px;
    }
    &:nth-child(even) {
      background-color: #f6f9fc;
    }
    &:nth-child(odd) {
      background-color: #ffffff;
    }
  }
}

@media (max-width: 975px) {
  .docs-card__actions {
    font-weight: 15px;
  }
  .docs-card__action.--props {
    background-color: transparent !important;
    &:hover {
      color: #607b89;
      background-color: #dde4e9 !important;
    }
    &.--active-mobile {
      color: #687f8b;
      background-color: #edf2f6 !important;
    }
  }
  .dy-props__body {
    height: 100%;
  }
  .dy-props__wrap {
    display: none;
    &.--mobile-show {
      position: absolute;
      z-index: 900;
      display: block;
      height: 100%;
      width: 100%;
    }
  }

  .dy-comp__wrap {
    padding: 8px;
    .demo-sec {
      padding: 8px;
    }
  }

  .dy-props__toggle-drawer {
    display: block;
  }
}
</style>
