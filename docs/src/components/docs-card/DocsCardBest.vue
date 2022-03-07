<template>
  <div class="best__demo__wrapper" :id="computedId">
    <div class="wrapper__header">
      <h5 class="component__header" @click="$router.push({ hash: `#${computedId}` })"># {{ title }}</h5>
    </div>
    <div class="dy-pg__wrap">
      <div style="flex: 1" class="dy-pg__left">
        <ResponsiveDemo v-if="responsive" :device-width="deviceWidth" :overflow="overflow" :toggle-device-clicked="toggleDeviceClicked">
          <div class="dy-comp__wrap light-scrollbar" style="position: relative">
            <slot></slot>
            <div class="dy-pg_btn-group">
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

          <div class="dy-code__wrap light-scrollbar">
            <CopyButton :text="getMarkup" />
            <slot name="code"></slot>
          </div>
        </ResponsiveDemo>
      </div>

      <div class="dy-props__wrap" :class="`${showPorpsOptions ? '--mobile-show' : ''}`">
        <div class="dy-props__header">All Props</div>
        <div class="dy-props__body light-scrollbar">
          <slot name="props"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CopyButton from '@/components/docs-card/CopyButton';
import ResponsiveDemo from './ResponsiveDemo.vue';
export default {
  data() {
    return {
      showPorpsOptions: false,
      deviceWidth: 0,
      toggleDeviceClicked: 0,
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
      default: false,
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
      this.showPorpsOptions = !this.showPorpsOptions;
    },
    getMarkup() {
      return this.$el.querySelector('.dy-code__wrap').innerText;
    },
    toggleDevice() {
      // this.$emit('toggleDevice');
      // this.bus.$emit('toggleDevice');
      this.toggleDeviceClicked++;

      this.deviceWidth = 300;
    },
  },
  components: {
    CopyButton,
    ResponsiveDemo,
  },
};
</script>

<style lang="scss">
.best__demo__wrapper {
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.15);
  background: #edf2f7;
  margin-bottom: 30px;
  width: 100%;
  position: relative;
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
  flex-grow: 1;
  max-height: 60vh;
  align-items: stretch;
  overflow: hidden;
  position: relative;
}

.dy-props__wrap {
  width: 300px;
  max-height: 60vh;
  background: #ffffff;
  /* padding: 20px; */
  transition: all 0.2s ease-in-out;
  border-left: 2px solid #edf2f6;
  .dy-props__header {
    padding: 22px;
    border-bottom: 1px solid #edf2f6;
    font-weight: 600;
    font-size: 1em;
    color: #008080;
  }

  .dy-props__body {
    padding: 20px;
    overflow-y: scroll;
    height: calc(100% - 62px);
    background: #ffffff;
    //   height: 350px;
  }
}

.wrapper__header {
  display: flex;
  width: 100%;
  padding: 10px;
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
.dy-pg_btn-group {
  position: absolute;
  bottom: 0%;
  right: 50%;
  transform: translate(50%, 50%);
  width: 10rem;
  z-index: 1000;
  padding: 5px 15px;
  border-radius: 50px;
  background: #ffffff;
  /* box-shadow: 0px 20px 50px -10px rgba(0, 0, 0, 0.2); */
  box-shadow: 0px 25px 80px rgba(0, 0, 0, 0.15);
  .d-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;

    .docs-card__action-icon {
      font-weight: bold;

      color: #afafaf;

      cursor: pointer;
      transition: 0.5s all ease-out;
    }
    .docs-card__action-icon:hover {
      /* color: #38b2ac; */
      opacity: 0.8;
    }
  }
}

.dy-comp__wrap {
  flex-grow: 1;
  min-height: 200px;
  // display: flex;
  /* overflow-y: auto; */
  justify-content: center;
  width: 100%;
  padding: 48px;
  background: #ffffff;
}

.dy-props__toggle-drawer {
  display: none;
  cursor: pointer;
}

.dy-code__wrap {
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  overflow: auto;
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
    padding: 16px;
  }

  .dy-props__toggle-drawer {
    display: block;
  }
}
</style>
