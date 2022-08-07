<template>
  <div class="unit_input-wrapper">
    <div class="unit-input">
      <lv-input v-model="localValue" type="number" placeholder="10" bottomBar> </lv-input>
    </div>
    <div class="unit-dropdown">
      <lv-dropdown id="units-dropdown" v-model="selectedUnit" :options="units" bottomBar />
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
        this.updateValue(this.localValue);
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
</style>
