<template>
  <div>
    <div class="split">
      <div class="split-inner" id="split-0"></div>
      <div class="split-inner" id="split-1"></div>
      <div class="split-inner" id="split-2"></div>
      <!-- <div class="split-inner" id="split-3"></div>
      <div class="split-inner" id="split-4"></div>
      <div class="split-inner" id="split-5"></div> -->
    </div>
  </div>
</template>

<script>
import LvRangeSlider from 'lightvue/range-slider';
import { Splitpanes, Pane } from 'splitpanes';
import Split from './Split';

export default {
  name: 'LvPercentageLayout',

  components: { LvRangeSlider, Splitpanes, Pane },

  mounted() {
    Split(['#split-0', '#split-1', '#split-2'], {
      minSize: 0,
      maxSize: 1000,
      gutterSize: 1,
    });
    // console.log('split', Split);
  },
  // methods: {
  //   drag: function (e) {
  //     let dragX = e.clientX;
  //     let block = this.$refs.block1;
  //     let block2 = this.$refs.block2;
  //     let block3 = this.$refs.block3;

  //     document.onmousemove = function onMouseMove(e) {
  //       block.style.width = block.offsetWidth + e.clientX - dragX + 'px';
  //       dragX = e.clientX;
  //       block2.style.width = block2.offsetWidth + e.clientX - dragX + 'px';
  //       dragX = e.clientX;
  //       block3.style.width = block3.offsetWidth + e.clientX - dragX + 'px';
  //       dragX = e.clientX;
  //     };
  //     // remove mouse-move listener on mouse-up
  //     document.onmouseup = () => (document.onmousemove = document.onmouseup = null);
  //   },

  //   draging() {
  //     const getResizeableElement = () => {
  //       return document.getElementById('resizeable');
  //     };
  //     const getHandleElement = () => {
  //       return document.getElementById('handle');
  //     };
  //     const minPaneSize = 130;
  //     // const maxPaneSize = document.body.clientWidth * 0.5;
  //     const maxPaneSize = 250;

  //     getResizeableElement().style.setProperty('--max-width', `${maxPaneSize}px`);
  //     getResizeableElement().style.setProperty('--min-width', `${minPaneSize}px`);

  //     const setPaneWidth = width => {
  //       getResizeableElement().style.setProperty('--resizeable-width', `${width}px`);
  //     };

  //     const getPaneWidth = () => {
  //       const pxWidth = getComputedStyle(getResizeableElement()).getPropertyValue('--resizeable-width');
  //       return parseInt(pxWidth, 10);
  //     };

  //     const startDragging = event => {
  //       event.preventDefault();
  //       const host = getResizeableElement();
  //       const startingPaneWidth = getPaneWidth();
  //       const xOffset = event.pageX;

  //       const mouseDragHandler = moveEvent => {
  //         moveEvent.preventDefault();
  //         const primaryButtonPressed = moveEvent.buttons === 1;
  //         if (!primaryButtonPressed) {
  //           setPaneWidth(Math.min(Math.max(getPaneWidth(), minPaneSize), maxPaneSize));
  //           document.body.removeEventListener('pointermove', mouseDragHandler);
  //           return;
  //         }

  //         const paneOriginAdjustment = 'left' === 'right' ? 1 : -1;
  //         setPaneWidth((xOffset - moveEvent.pageX) * paneOriginAdjustment + startingPaneWidth);
  //       };
  //       const remove = document.body.addEventListener('pointermove', mouseDragHandler);
  //     };

  //     getHandleElement().addEventListener('mousedown', startDragging);
  //   },
  // },
};
</script>

<style lang="scss">
// @import './PercentageLayout.scss';

.split {
  display: flex;
  flex-direction: row;
  height: 50px;
  background: #2b2b2b;
  border-radius: 5px;
  padding: 4px;
}
.split-inner {
  border: 1px solid slategrey;
  margin-right: 3px;
  margin-left: 3px;
  border-radius: 4px;
  background: #5e5e5e;
}

.gutter {
  background-color: #2496ff;
  background-repeat: no-repeat;
  background-position: 50%;
}

.gutter.gutter-horizontal {
  // background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
  cursor: col-resize;
}
</style>
