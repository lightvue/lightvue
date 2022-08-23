<template>
  <div class="lv-box-model">
    <div class="lv-box-model__controller outside">
      <div class="--row">
        <div v-tooltip.right="localState.top" class="sub" :class="{ '--active': ['top', 'y-axis', 'all'].includes(selectedDirection) }" @click="setDirection('top')">{{ getComputedValue('top') }}</div>
      </div>
      <div class="--center-row">
        <div v-tooltip.left="localState.left" class="sub" :class="{ '--active': ['left', 'x-axis', 'all'].includes(selectedDirection) }" @click="setDirection('left')">{{ getComputedValue('left') }}</div>
        <div class="lv-box-model__inner_box">
          <div @click="setDirection('y-axis')" class="lv-box-model__direction-controller" :class="{ '--active': ['y-axis', 'all'].includes(selectedDirection) }"></div>
          <div @click="setDirection('x-axis')" class="lv-box-model__direction-controller --horizontal" :class="{ '--active': ['x-axis', 'all'].includes(selectedDirection) }"></div>
        </div>
        <div v-tooltip.top="localState.right" class="sub" :class="{ '--active': ['right', 'x-axis', 'all'].includes(selectedDirection) }" @click="setDirection('right')">{{ getComputedValue('right') }}</div>
      </div>
      <div class="--row">
        <div v-tooltip.left="localState.bottom" class="sub" :class="{ '--active': ['bottom', 'y-axis', 'all'].includes(selectedDirection) }" @click="setDirection('bottom')">{{ getComputedValue('bottom') }}</div>
      </div>
    </div>
    <div class="lv-box-model__inputs">
      <lv-dropdown v-model="selectedDirection" placeholder="Select direction" :options="directions" @change="optionSelect($event)" bottom-bar />
      <LvUnitInput v-model="localInputValue" :units="units" bottom-bar></LvUnitInput>
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
      selectedUnit: 'px',
      localState: { left: '0px', right: '0px', top: '0px', bottom: '0px' },
    };
  },
  props: {
    units: {
      type: Array,
      default: () => ['px', 'rem', 'em'],
    },
  },
  watch: {
    localInputValue(newVal) {
      const d = this.selectedDirection;
      newVal = newVal == '' ? '0px' : this.appendUnit(newVal);
      if (d === 'all') {
        this.localState = { left: newVal, right: newVal, top: newVal, bottom: newVal };
      } else if (d === 'x-axis') {
        this.localState = { ...this.localState, left: newVal, right: newVal };
      } else if (d === 'y-axis') {
        this.localState = { ...this.localState, top: newVal, bottom: newVal };
      } else if (d === 'left') {
        this.localState = { ...this.localState, left: newVal };
      } else if (d === 'right') {
        this.localState = { ...this.localState, right: newVal };
      } else if (d === 'top') {
        this.localState = { ...this.localState, top: newVal };
      } else if (d === 'bottom') {
        this.localState = { ...this.localState, bottom: newVal };
      }
      this.updateValue(this.encodeLocalState(this.localState));
    },
  },
  computed: {
    modelValue() {
      const value = this.$attrs.modelValue ? this.$attrs.modelValue : this.value;
      return this.decodeModelValue(value);
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.localState = this.modelValue;
    });
  },
  methods: {
    decodeModelValue(value) {
      const val_array = value.split(' ');
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
      if (((left == right) == top) == bottom) {
        return `${left}`;
      } else if (top == bottom && left == right) {
        return `${top} ${left}`;
      } else if (left == '0px' || left == '') {
        return `${top} ${right} ${bottom} `;
      } else {
        return `${top} ${right} ${bottom} ${left}`;
      }
    },
    appendUnit(val) {
      return val;
    },
    setDirection(dir) {
      this.selectedDirection = dir;
    },
    getComputedValue(direction) {
      let regex = new RegExp('([0-9.]+)|([a-zA-Z%]+)', 'g');
      let seperatUnit = this.localState[direction].match(regex);
      if (seperatUnit.length === 2 && seperatUnit[0].length > 5) {
        return seperatUnit[0].slice(0, 5) + seperatUnit[1];
      } else {
        return this.localState[direction];
      }
    },
    optionSelect() {
      if (this.localInputValue) {
        this.localState = this.decodeModelValue(this.localInputValue);
        this.updateValue(this.encodeLocalState(this.localState));
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
