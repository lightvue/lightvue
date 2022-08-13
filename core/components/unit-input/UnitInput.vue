<template>
  <div class="unit-input-wrapper">
    <lv-input type="text" :editable="false" v-bind="$attrs" :value="localValue" @clear="handleClear()" bottomBar>
      <input class="unit-input" type="number" v-bind="$attrs" v-model="localValue" placeholder="10" />
      <template #append>
        <div class="dropdown-wrapper" @click="open = !open">
          <div tabindex="1" class="custom-select" @blur="open = false">
            <div class="selected" :class="{ open: open }">
              {{ selectedUnit }}
            </div>
            <div class="items" :class="{ selectHide: !open }">
              <div v-for="(unit, i) of units" :key="unit" @click="optionSelect($event, unit)" :class="{ 'active-option': selectedUnit === unit }">
                {{ unit }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </lv-input>
  </div>
</template>

<script>
import LvInput from 'lightvue/input';
import LvDropdown from 'lightvue/dropdown';
import { trueValueMixin } from 'lightvue/mixins';
export default {
  name: 'InputDropdown',
  mixins: [trueValueMixin],
  data() {
    return {
      localValue: null,
      selectedUnit: 'px',
      open: false,
    };
  },
  props: {
    units: {
      type: Array,
      default: () => ['px', 'rem', 'em'],
    },
  },
  watch: {
    localValue() {
      if (this.localValue !== this.modelValue) {
        this.updateValue(this.localValue + this.selectedUnit);
      }
    },
    selectedUnit() {
      if (this.localValue !== this.modelValue) {
        this.updateValue(this.localValue + this.selectedUnit);
      }
    },
  },
  mounted() {
    this.localValue = this.modelValue;
  },
  components: {
    LvInput,
    LvDropdown,
  },
  methods: {
    optionSelect(e, unit) {
      e.stopPropagation();
      this.open = false;
      this.selectedUnit = unit;
    },
  },
};
</script>

<style lang="scss">
.dropdown-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  padding: 0px 1rem;
  position: relative;
  min-width: 53px;
  cursor: pointer;
}
.custom-select {
  display: inline-block;
  text-align: left;
  outline: none;
  background: transparent;
}

.custom-select .selected {
  font-size: 1rem;
  color: #495057;
  cursor: pointer;
}

.custom-select .selected.open {
  border-radius: 3px;
}
.custom-select .items {
  font-size: 1rem;
  color: #495057;
  border-radius: 3px;
  overflow: hidden;
  position: absolute;
  background-color: white;
  left: 0;
  right: 0;
  margin-top: 6px;
  width: auto;
  z-index: 1;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
}

.custom-select .items div {
  font-size: 1rem;
  color: #495057;
  padding: 0.5rem 1rem;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  color: #495057;
  background: #e9ecef;
}

.selectHide {
  display: none;
}
.unit-input-wrapper {
  .lv-input__field {
    overflow: visible !important;
  }
}
.unit-input {
  border: none;
  background: transparent;
  font-size: 1rem;
  color: #495057;
  width: 100%;
  &:focus {
    outline: none;
  }
}
.active-option {
  color: #ffffff !important;
  background: #38b2ac;
  &:hover {
    color: #ffffff !important;
    background: #38b2ac !important;
  }
}
</style>
