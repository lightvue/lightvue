<template>
  <div class="unit_input-wrapper">
    <div class="unit-input">
      <lv-input ref="unitInput" v-model="localValue" type="number" placeholder="10" @focus="inputFocus" @blur="inputBlur" bottomBar> </lv-input>
    </div>
    <div class="unit-dropdown">
      <lv-dropdown ref="unitDropdown" id="units-dropdown" v-model="selectedUnit" :options="units" bottomBar @focus="dropdownFocus" />
    </div>
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
      localValue: '0',
      units: ['px', 'rem', 'em'],
      selectedUnit: 'px',
    };
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
    inputFocus(el) {
      this.$refs.unitDropdown.$children[0].$el.classList.add('--manual-bottom-bar');
    },
    inputBlur() {
      this.$refs.unitDropdown.$children[0].$el.classList.remove('--manual-bottom-bar');
    },
    dropdownFocus() {
      console.log('hellp');
      console.log(this.$refs.unitInput);
    },
  },
};
</script>

<style lang="scss">
.unit_input-wrapper {
  display: flex;
  align-items: center;
  flex: 1 1 0px;
  .unit-dropdown {
    flex-basis: 0;
    .lv-input__field {
      border-radius: 0px 5px 5px 0px;
    }
  }
  .unit-input {
    width: 100%;
    height: 100%;
    .lv-input__field {
      border-radius: 5px 0px 0px 5px;
      height: 100% !important;
    }
    .lv-input__group {
      height: 100%;
    }
  }
}
.--manual-bottom-bar {
  .lv-input__field {
    &::after {
      left: 0% !important;
      width: 100% !important;
    }
  }
}
</style>
