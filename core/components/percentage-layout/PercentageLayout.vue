<!--  -->
<template>
  <div>
    <!-- <LvRangeSlider :min="0" :max="12" v-model="valueRange1" /> -->
    <!-- <div id="app">
  <div class="outer col-wd-12">
    <div class="block block-1 col-wd-6 " ref="block1" >
    
    </div>
    <div class="slider" @mousedown="drag">
    </div>
    <div class="block block-2 col-wd-6 " ref="block2">
      
    </div> -->
    <!-- <div class="slider" @mousedown="drag">
    </div>
    <div class="block block-2 col-wd-3 " ref="block3">
    </div>
    <div class="slider" @mousedown="drag">
    </div>
    <div class="block block-2 col-wd-3 " >
    </div> -->
    <!-- </div>
</div> -->
    <!-- <div class="grid">
      <div class="row">
        <div class="col-wd-6" @mouseover="draging">
          <div id="resizeable" class="col">6</div>
          <div id="handle" class="horizontalbar"></div>
        </div> -->
    <!--yaha h phir niche bhi h ------------------------- -->
    <!-- <div class="col-wd-4">
          <div id="resizeable" @mouseover="draging" class="col">4</div>
          <div id="handle" class="horizontalbar"></div>
        </div> -->
    <!-- <div>
        </div> -->
    <!-- <div class="col-wd-4 col-md-4">
          <div class="col">4</div>
        </div>
        <div>
          <div class="horizontalbar"></div>
        </div>
        <div class="col-wd-2 col-md-2">
          <div class="col">2</div>
        </div> -->
    <!-- yeh do divs -------------- uper ke saath h</div>
    </div> -->
    <!-- <Splitpanes>
      <Pane>
        <slot>
          <div class="grid">
            <div class="row">
              <div class="col-wd-6 col-md-6">
                <div class="col">6</div>
              </div>
              <div>
                <div class="horizontalbar"></div>
              </div>
              <div class="col-wd-4 col-md-4">
                <div class="col">4</div>
              </div>
              <div>
                <div class="horizontalbar"></div>
              </div>
              <div class="col-wd-2 col-md-2">
                <div class="col">2</div>
              </div>
            </div>
          </div>
        </slot>
      </Pane>
      <Pane :size="100" class="responsive-area__extra">
        <div class="extra--resize-icon">
          <i class="light-icon-grip-vertical"></i>
        </div>
        <div class="responsive-dimensions"></div>
      </Pane>
    </Splitpanes> -->

    <!------------------------------  ------------------------------------------->
    <!-- <div class="grid">
      <div class="row">
        <div class="col-wd-12" @click="setWidth" v-model="localInputValue">
          {{ localInputValue }}
          <div class="col">12 Column</div>
        </div>

        <div class="col-wd-8">
          <div class="col">8 Column</div>
        </div>

        <div class="col-wd-6">
          <div class="col">6 Column</div>
        </div>

        <div class="col-wd-4">
          <div class="col">4 Column</div>
        </div>

        <div class="col-md-3">
          <div class="col">3 Column</div>
        </div>

        <div class="col-sm-2">
          <div class="col">2 Column</div>
        </div>

        <div class="col-sm-1">
          <div class="col">1 Column</div>
        </div>
      </div>
    </div> -->

    <!-- <div class="wrapper">
      <div class="input-control">
        <div class="guide">
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
        </div> -->
    <!-- <div class="columns">
          <div class="col col-3">
            <div class="gutter">
              <div class="handle">
                <div class="arrow"></div>
              </div>
              <span class="label">3</span>
            </div>
          </div>
          <div class="col col-3">
            <div class="gutter">
              <div class="handle">
                <div class="arrow"></div>
              </div>
              <span class="label">3</span>
            </div>
          </div>
          <div class="col-3">
            <div class="gutter">
              <div class="handle">
                <div class="arrow"></div>
              </div>
              <span class="label">3</span>
            </div>
          </div>
          <div class="col col-3">
            <div class="gutter">
              <div class="handle">
                <div class="arrow"></div>
              </div>
              <span class="label">3</span>
            </div>
          </div>
        </div> -->
    <div class="split">
      <div id="split-0"></div>
      <div id="split-1"></div>
      <div id="split-2"></div>
      <div id="split-3"></div>
      <div id="split-4"></div>
      <div id="split-5"></div>
    </div>
    <!-- </div>
    </div> -->
  </div>
</template>

<script>
import LvRangeSlider from 'lightvue/range-slider';
import { Splitpanes, Pane } from 'splitpanes';
import Split from './Split';
// Split(['#split-0', '#split-1', '#split-2', '#split-3'])
// import './splitpanes.css';

export default {
  name: 'LvPercentageLayout',
  data() {
    return {
      valueRange1: 0,
      //  block1W: '0%'
    };
  },
  components: { LvRangeSlider, Splitpanes, Pane },
  mounted() {
    Split(['#split-0', '#split-1', '#split-2', '#split-3', '#split-4', '#split-5'], {
      sizes: [25, 75, 50, 80, 40, 10],
      minSize: 200,
    });
    console.log('split', Split);
  },
  methods: {
    drag: function (e) {
      let dragX = e.clientX;
      let block = this.$refs.block1;
      let block2 = this.$refs.block2;
      let block3 = this.$refs.block3;

      document.onmousemove = function onMouseMove(e) {
        block.style.width = block.offsetWidth + e.clientX - dragX + 'px';
        dragX = e.clientX;
        block2.style.width = block2.offsetWidth + e.clientX - dragX + 'px';
        dragX = e.clientX;
        block3.style.width = block3.offsetWidth + e.clientX - dragX + 'px';
        dragX = e.clientX;
      };
      // remove mouse-move listener on mouse-up
      document.onmouseup = () => (document.onmousemove = document.onmouseup = null);
    },

    draging() {
      const getResizeableElement = () => {
        return document.getElementById('resizeable');
      };
      const getHandleElement = () => {
        return document.getElementById('handle');
      };
      const minPaneSize = 130;
      // const maxPaneSize = document.body.clientWidth * 0.5;
      const maxPaneSize = 250;

      getResizeableElement().style.setProperty('--max-width', `${maxPaneSize}px`);
      getResizeableElement().style.setProperty('--min-width', `${minPaneSize}px`);

      const setPaneWidth = width => {
        getResizeableElement().style.setProperty('--resizeable-width', `${width}px`);
      };

      const getPaneWidth = () => {
        const pxWidth = getComputedStyle(getResizeableElement()).getPropertyValue('--resizeable-width');
        return parseInt(pxWidth, 10);
      };

      const startDragging = event => {
        event.preventDefault();
        const host = getResizeableElement();
        const startingPaneWidth = getPaneWidth();
        const xOffset = event.pageX;

        const mouseDragHandler = moveEvent => {
          moveEvent.preventDefault();
          const primaryButtonPressed = moveEvent.buttons === 1;
          if (!primaryButtonPressed) {
            setPaneWidth(Math.min(Math.max(getPaneWidth(), minPaneSize), maxPaneSize));
            document.body.removeEventListener('pointermove', mouseDragHandler);
            return;
          }

          const paneOriginAdjustment = 'left' === 'right' ? 1 : -1;
          setPaneWidth((xOffset - moveEvent.pageX) * paneOriginAdjustment + startingPaneWidth);
        };
        const remove = document.body.addEventListener('pointermove', mouseDragHandler);
      };

      getHandleElement().addEventListener('mousedown', startDragging);
    },
  },
};
</script>

<style lang="scss">
@import './PercentageLayout.scss';
.row {
  background: #2b2b2b;
  padding: 2px;
  border-radius: 5px;
  display: flex;
}
.horizontalbar {
  border-right: 1px solid white;
  height: 26px;
  color: transparent;
}
///////

#resizeable {
  --resizeable-width: 100px;
  // height: 100vh;
  width: var(--resizeable-width);
  min-width: var(--min-width);
  max-width: var(--max-width);
  background-color: grey;
}

#handle {
  float: right;
  height: 100%;
  width: 1px;
  background-color: transparent;
  z-index: 1;
}

#handle::after {
  content: '';
  width: 9px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin-left: -4px;
  background-color: transparent;
  cursor: ew-resize;
  z-index: 2;
}
//
.split {
  display: flex;
  flex-direction: row;
  height: 50px;
  background: #2b2b2b;
}

.gutter {
  background-color: #2496ff;
  background-repeat: no-repeat;
  background-position: 50%;
}

.gutter.gutter-horizontal {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
  cursor: col-resize;
}
////////////////////////////////////

.wrapper {
  background: #2b2b2b;
  border: 1px solid #212121;
  padding: 1px;
  border-radius: 2px;
  width: 232px;
}
.input-control {
  position: relative;
  height: 30px;
  // width: 221px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.guide {
  position: absolute;
  left: 0;
  right: 0;
  top: -5px;
  bottom: -5px;
  z-index: 1;
  pointer-events: none;
  // opacity: 0;
  -webkit-transition: opacity 50ms ease-in;
  transition: opacity 50ms ease-in;
}
.col {
  width: 10px;
  height: 100%;
  float: left;
  margin-right: 9px;
  border-radius: 2px;
  background-color: rgba(36, 150, 255, 0.5);
}
// .col-3 {
//   width: 48px;
// }
// .columns {
//   position: absolute;
//   left: 0;
//   right: 0;
//   top: 0;
//   bottom: 0;
//   z-index: 2;
// }
// .gutter {
//   position: absolute;
//   z-index: 3;
//   right: -10px;
//   top: -1px;
//   width: 9px;
//   height: 28px;
//   cursor: col-resize;
// }
// .handle {
//   position: relative;
//   width: 3px;
//   height: 100%;
//   margin: 0 auto;
//   background: #2496ff;
//   -webkit-transition: margin-top 200ms ease-out, height 200ms ease-out, background-color 200ms linear;
//   transition: margin-top 200ms ease-out, height 200ms ease-out, background-color 200ms linear;
// }
// .arrows {
//   color: red;
//   position: absolute;
//   left: -9px;
//   top: 50%;
//   width: 21px;
//   height: 13px;
//   margin-top: -7px;
//   background-position: -520px -260px;
//   pointer-events: none;
//   opacity: 0.4;
//   -webkit-transition: opacity 200ms ease;
//   transition: opacity 200ms ease;
// }
// .label {
//   display: block;
//   padding-top: 5px;
//   text-align: center;
//   font-size: 12px;
//   line-height: 16px;
//   color: #d9d9d9;
// }

/////////
.outer {
  display: flex;
  flex-direction: row;
  background: #2b2b2b;
  padding: 4px;
  border-radius: 4px;
}

.block {
  // height: 100px;
  // width: 50%; /* 50% would suffice*/
  background-color: #5e5e5e;
  height: 28px;
  border-radius: 2px;
  margin: 2px;
}

.block-1 {
  // background-color: red;
}

.block-2 {
  // background-color: green;
  // flex: 1; /* adjust automatically */
  // min-width: 0; /* allow flexing beyond auto width */
  // overflow: hidden; /* hide overflow on small width */
}

.slider {
  line-height: 100%;
  width: 4px;
  border-radius: 2px;
  margin: 2px;
  background: #2496ff;
  border: none;
  cursor: col-resize;
  user-select: none; /* disable selection */
  text-align: center;
}
</style>
