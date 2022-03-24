<template>
  <div class="responsive-demo__wrap" :class="{ '--full-width': paneSize === 100 && hideResizer, '--rounded': roundedCard }">
    <Splitpanes @resize="setPane($event[0].size)" @pane-maximize="setPane(100 - $event.size)">
      <Pane :size="paneSize" :min-size="minSize" class="responsive-area" :class="{ '--allow-overflow': overflow }">
        <slot>
          <loader />
        </slot>
      </Pane>
      <Pane :size="100 - paneSize" class="responsive-area__extra">
        <div class="extra--resize-icon">
          <i class="light-icon-grip-vertical"></i>
        </div>
        <div v-if="paneSize <= 90" class="responsive-dimensions" @dblclick="toggleDevice">{{ paneSizePixel }}px</div>
      </Pane>
    </Splitpanes>
  </div>
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes';
import './splitpanes.css';
import Loader from './Loader.vue';
// import BallScaleMultiple from 'lightvue/loaders/BallComponents/BallScaleMultiple.vue';

export default {
  components: {
    Splitpanes,
    Pane,
    Loader,
    // BallScaleMultiple,
  },
  props: {
    minWidth: {
      type: Number,
      default: 320,
    },
    tabletWidth: {
      type: Number,
      default: 720,
    },
    overflow: {
      default: false,
      type: Boolean,
    },
    toggleDeviceClicked: {
      type: Number,
    },
    hideResizer: {
      type: Boolean,
      default: false,
    },
    roundedCard: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    minSize: 20,
    paneSize: 100,
    paneSizePixel: '',
    direction: 'left',
  }),
  watch: {
    minWidth(newWidth) {
      this.setMinWidth(newWidth);
    },
    toggleDeviceClicked() {
      this.toggleDevice();
    },
  },

  created() {
    // if (this.$parent && this.$parent.$on) {
    //   this.$parent.$on('toggleDevice', this.toggleDevice);
    // }
    // this.bus.$on('loadMore', args => {
    //   // do something with args.data
    //   this.toggleDevice;
    // });
  },
  mounted() {
    this.setMinWidth(this.minWidth);
    this.paneSizePixel = this.$el.clientWidth;
  },
  methods: {
    setMinWidth(widthInPx) {
      this.minSize = (widthInPx / this.$el.clientWidth) * 100;
    },
    setPane(widthPercent) {
      this.paneSize = widthPercent;
      this.setPanelSizePixel(widthPercent);
    },
    setPanelSizePixel(widthPercent) {
      this.paneSizePixel = Math.round((widthPercent * this.$el.clientWidth) / 100);
    },
    toggleDevice() {
      switch (this.direction) {
        case 'right':
          if (this.paneSizePixel < this.tabletWidth) {
            // set ot tablet mode
            this.setPane((this.tabletWidth / this.$el.clientWidth) * 100);
          } else {
            // set to desktop mode
            this.setPane(100);
            this.direction = 'left';
          }
          break;
        case 'left':
          if (this.paneSizePixel > this.tabletWidth) {
            // set to tablet mode
            this.setPane((this.tabletWidth / this.$el.clientWidth) * 100);
          } else {
            // set to mobile modde
            this.setPane((this.minWidth / this.$el.clientWidth) * 100);

            this.direction = 'right';
          }
          break;
      }
    },
  },
};
</script>

<style lang="scss">
.responsive-area {
  flex-grow: 1;
  background-color: #ffffff !important;
  padding: 20px !important;
  border-radius: 0px 0px 0px 4px;
  width: 100%; /* Initial default width */
  min-height: 100px;
  /* box-shadow: inset 0px 0px 2px 1px rgba(0, 0, 0, 0.15); */
  overflow-y: auto;
  &.--allow-overflow {
    overflow: initial !important;
  }
}
.responsive-area__extra {
  background-color: #607d8b !important;
  height: unset !important;
  position: relative;
  overflow: unset !important;
  width: 0px; /* Initial default width */
  box-shadow: inset 0px 0px 20px 2px rgba(0, 0, 0, 0.25);
}
.responsive-demo__wrap.--rounded {
  .responsive-area {
    border-radius: 10px;
  }
  .responsive-area__extra {
    border-radius: 0px 10px 10px 0px;
  }
}
.extra--resize-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -16px;
  color: white;
  cursor: e-resize;
  pointer-events: none;
  color: #4b5563;
}

.splitpanes__splitter {
  width: 16px !important;
  background-color: #edf2f6 !important;
  cursor: e-resize;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #d6dfe8 !important;
  }
}

.responsive-demo__wrap.--full-width {
  .splitpanes__splitter,
  .extra--resize-icon {
    display: none;
  }
}
.responsive-dimensions {
  color: #ffffff;
  opacity: 0.3;
  font-size: 36px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}
</style>
