<template>
  <div class="best__demo__wrapper" :id="computedId">
    <div class="wrapper__header">
      <h5 class="component__header" @click="$router.push({ hash: `#${computedId}` })"># {{ title }}</h5>
      <div class="flex">
        <div class="docs-card__action">
          <i class="docs-card__action-icon light-icon-adjustments-horizontal dy-props__toggle-drawer" @click="showOptions()"></i>
        </div>
        <div class="docs-card__action">
          <i class="docs-card__action-icon docs-card__action-icon light-icon-brand-github" @click="openURL(sourceLink)"></i>
        </div>
        <div class="docs-card__action">
          <i class="docs-card__action-icon docs-card__action-icon light-icon-devices" title="Responsive preview" @click="toggleDevice"></i>
        </div>
      </div>
    </div>
    <div class="dy-pg__wrap">
      <div style="flex: 1; position: relative" class="dy-pg__left">
        <ResponsiveDemo v-if="responsive" :overflow="overflow" :toggle-device-clicked="toggleDeviceClicked">
          <div class="dy-comp__wrap">
            <div class="demo-sec light-scrollbar">
              <slot></slot>
            </div>
          </div>
        </ResponsiveDemo>

        <div class="dy-code__wrap light-scrollbar">
          <CopyButton :text="getMarkup" />
          <slot name="code"></slot>
        </div>
      </div>

      <div class="dy-props__wrap">
        <div class="dy-props__header">All Props</div>
        <div class="dy-props__body light-scrollbar">
          <slot name="props"></slot>
        </div>
      </div>
      <LvDrawer v-model="showPorpsOptions" :maxSpan="100" :height="500" headerTitle="All Props" close shadow background="#fff" headerColor="#008080" :zIndex="1000">
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
      this.showPorpsOptions = !this.showPorpsOptions;
    },

    getMarkup() {
      return this.$el.querySelector('.dy-code__wrap').innerText;
    },
    toggleDevice() {
      this.toggleDeviceClicked++;
    },
    openURL(link) {
      window.open(link, '_blank');
    },
  },
  components: {
    CopyButton,
    ResponsiveDemo,
    LvDrawer,
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
}

.dy-props__wrap {
  width: 300px;
  max-height: 60vh;
  background: #ffffff;
  /* padding: 20px; */
  transition: all 0.2s ease-in-out;
  border-left: 2px solid #edf2f6;
  border-radius: 0px 0px 10px 0px;
}
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
  border-radius: 0px 0px 10px 0px;
  //   height: 350px;
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
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 10%;

  font-size: 24px;
  .docs-card__action {
    .docs-card__action-icon {
      cursor: pointer;
      transition: 0.5s all ease-out;
    }
    cursor: pointer;
    transition: 0.5s all ease-out;
    i {
      background-color: transparent;

      opacity: 1;
      /* color: #afafaf; */
      transition: 0.5s all ease-out;
      /* font-size: 24px; */
      &:hover {
        opacity: 0.8;
      }
    }
  }
}

.dy-comp__wrap {
  flex-grow: 1;
  position: relative;
  .demo-sec {
    min-height: 200px;
    max-height: 200px;
    width: 100%;
    padding: 48px;
    overflow-y: scroll;
  }

  justify-content: center;
  width: 100%;

  background: #ffffff;
}

.dy-props__toggle-drawer {
  display: none;
  cursor: pointer;
}
.dy-code__wrap.light-scrollbar::-webkit-scrollbar {
  width: 0 !important;
}
.dy-code__wrap {
  min-height: 180px;
  max-height: 180px;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  overflow-y: scroll;
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
  .flex {
    font-weight: 15px;
    width: 30%;
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
