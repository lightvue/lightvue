<template>
  <div class="unit-input-wrapper">
    <lv-input type="number" v-bind="$attrs" v-model="actualValue" placeholder="10" @input="handleChangeValue">
      <template #append>
        <lv-dropdown iconRight=" " v-model="selectedUnit" :options="units" @change="handleChangeValue" />
      </template>
    </lv-input>
  </div>
</template>

<script>
import LvInput from 'lightvue/input';
import LvDropdown from 'lightvue/dropdown';
import { trueValueMixin } from 'lightvue/mixins';
export default {
  name: 'UnitInput',
  mixins: [trueValueMixin],
  components: {
    LvInput,
    LvDropdown,
  },
  data() {
    return {
      actualValue: null,
      selectedUnit: this.units[0],
    };
  },
  props: {
    units: {
      type: Array,
      default: () => ['px', 'em', 'rem', '%'],
    },
  },
  watch: {
    modelValue: {
      handler(newValue) {
        const values = this.parseUnit(newValue);
        this.actualValue = values[0];
        if (this.units.includes(values[1])) {
          // to prevent blank case
          this.selectedUnit = values[1];
        }
      },
      immediate: true,
    },
  },
  methods: {
    parseUnit(str, out) {
      // common-util
      if (!out) out = [0, ''];
      str = String(str);
      var num = parseFloat(str, 10);
      out[0] = num || 0;
      out[1] = str.match(/[\d.\-\+]*\s*(.*)/)[1] || '';
      return out;
    },
    handleChangeValue() {
      const newValue = `${this.actualValue || 0}${this.selectedUnit}`;
      if (newValue !== this.modelValue) {
        this.updateValue(newValue);
      }
    },
  },
};
</script>

<style lang="scss">
.unit-input-wrapper {
  .lv-input__field {
    overflow: visible !important;
  }
  .lv-dropdown {
    min-width: 54px;
    .lv-input__field {
      // overflow: visible !important; // For the bottom bar; border-radius
      background: rgba(0, 0, 0, 0.05);
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      text-align: center;
      &:focus-within {
        box-shadow: none !important; // To disable border effect
        &::after {
          left: 0%;
          width: 0 !important; // To disable bottom-bar effect
        }
      }
      .lv-input__append {
        display: none;
      }
    }
  }
}
</style>
