<template>
  <div class="lv-box-model">
    <div class="lv-box-model__controller">
      <div class="lv-box-model__controller-row">
        <div v-tooltip.right="localState.top" class="dir-value" :class="{ '--active': ['top', 'y-axis', 'all'].includes(selectedDirection) }" @click="setDirection('top')">{{ displayDirectionValue('top') }}</div>
      </div>
      <div class="lv-box-model__controller-row --center-row">
        <div v-tooltip.left="localState.left" class="dir-value" :class="{ '--active': ['left', 'x-axis', 'all'].includes(selectedDirection) }" @click="setDirection('left')">{{ displayDirectionValue('left') }}</div>
        <div class="lv-box-model__inner_box">
          <div @click="setDirection('y-axis')" class="lv-box-model__direction-controller" :class="{ '--active': ['y-axis', 'all'].includes(selectedDirection) }"></div>
          <div @click="setDirection('x-axis')" class="lv-box-model__direction-controller --horizontal" :class="{ '--active': ['x-axis', 'all'].includes(selectedDirection) }"></div>
        </div>
        <div v-tooltip.top="localState.right" class="dir-value" :class="{ '--active': ['right', 'x-axis', 'all'].includes(selectedDirection) }" @click="setDirection('right')">{{ displayDirectionValue('right') }}</div>
      </div>
      <div class="lv-box-model__controller-row">
        <div v-tooltip.left="localState.bottom" class="dir-value" :class="{ '--active': ['bottom', 'y-axis', 'all'].includes(selectedDirection) }" @click="setDirection('bottom')">{{ displayDirectionValue('bottom') }}</div>
      </div>
    </div>
    <div class="lv-box-model__inputs">
      <lv-dropdown :value="selectedDirection" @input="setDirection" placeholder="Select direction" :options="directions" bottom-bar />
      <LvUnitInput :value="localInputValue" @input="setLocalInputValue" :units="units" bottom-bar></LvUnitInput>
    </div>
  </div>
</template>

<script>
import LvInput from 'lightvue/input';
import LvDropdown from 'lightvue/dropdown';
import { trueValueMixin } from 'lightvue/mixins';
import LvUnitInput from 'lightvue/unit-input';
import Tooltip from 'lightvue/tooltip';

export default {
  name: 'LvBoxModel',
  mixins: [trueValueMixin],
  directives: {
    tooltip: Tooltip,
  },
  data() {
    return {
      localInputValue: null,
      directions: ['all', 'x-axis', 'y-axis', 'top', 'right', 'bottom', 'left'],
      selectedDirection: 'all',
      localState: { left: '0px', right: '0px', top: '0px', bottom: '0px' },
    };
  },
  props: {
    units: {
      type: Array,
      default: () => ['px', 'em', 'rem', '%', 'auto'],
    },
  },
  watch: {
    modelValue: {
      handler(newValue) {
        if (newValue !== this.encodeLocalState(this.localState)) {
          this.localState = this.decodeModelValue(newValue);
          this.setDirection(this.decodeDirection());
        }
      },
      immediate: true,
    },
  },
  methods: {
    decodeDirection() {
      const { top, right, bottom, left } = this.localState;
      if (left === right && left === top && top === bottom) {
        return 'all';
      } else if (left === right) {
        return 'x-axis';
      } else if (top === bottom) {
        return 'y-axis';
      } else {
        return 'top';
      }
    },
    decodeDirectionValue(direction) {
      switch (direction) {
        case 'all':
        case 'y-axis':
        case 'top':
          return this.localState.top;
        case 'x-axis':
        case 'left':
          return this.localState.left;
        case 'right':
          return this.localState.right;
        case 'bottom':
          return this.localState.bottom;
      }
    },
    decodeModelValue(value) {
      const val_array = value ? value.split(' ') : [];
      const length = val_array.length;
      if (length == 1) {
        const [all] = val_array;
        return { top: all, right: all, bottom: all, left: all };
      } else if (length == 2) {
        const [y, x] = val_array;
        return { top: y, bottom: y, left: x, right: x };
      } else if (length == 3) {
        const [_top, _right, _bottom] = val_array;
        return { top: _top, bottom: _bottom, right: _right, left: 0 };
      } else if (length == 4) {
        const [_top, _right, _bottom, _left] = val_array;
        return { top: _top, bottom: _bottom, right: _right, left: _left };
      }
    },
    encodeLocalState(val) {
      const { left, right, top, bottom } = val;
      if (left === right && left === top && top === bottom) {
        return `${left}`;
      } else if (top == bottom && left == right) {
        return `${top} ${left}`;
      } else if (left == '0px' || left == '') {
        return `${top} ${right} ${bottom} `;
      } else {
        return `${top} ${right} ${bottom} ${left}`;
      }
    },
    setDirection(dir) {
      this.selectedDirection = dir;
      this.localInputValue = this.decodeDirectionValue(this.selectedDirection);
    },
    setLocalInputValue(newValue) {
      newValue = newValue == '' ? '0px' : newValue.includes('auto') ? 'auto' : newValue;
      this.localInputValue = newValue;
      switch (this.selectedDirection) {
        case 'all':
          this.localState = { left: newValue, right: newValue, top: newValue, bottom: newValue };
          break;
        case 'x-axis':
          this.localState = { ...this.localState, left: newValue, right: newValue };
          break;
        case 'y-axis':
          this.localState = { ...this.localState, top: newValue, bottom: newValue };
          break;
        case 'left':
          this.localState = { ...this.localState, left: newValue };
          break;
        case 'right':
          this.localState = { ...this.localState, right: newValue };
          break;
        case 'top':
          this.localState = { ...this.localState, top: newValue };
          break;
        case 'bottom':
          this.localState = { ...this.localState, bottom: newValue };
          break;
      }
      this.updateValue(this.encodeLocalState(this.localState));
    },
    displayDirectionValue(direction) {
      let regex = new RegExp('([0-9.]+)|([a-zA-Z%]+)', 'g');
      let separateUnit = this.localState[direction].match(regex);
      if (separateUnit.length === 2 && separateUnit[0].length > 5) {
        return separateUnit[0].slice(0, 5) + separateUnit[1];
      } else {
        return this.localState[direction];
      }
    },
  },
  components: {
    LvInput,
    LvDropdown,
    LvUnitInput,
  },
};
</script>

<style lang="scss">
@import './box-model.scss';
</style>
