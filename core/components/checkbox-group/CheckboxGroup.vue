<template>
  <div>
    <lv-check-box @change="refresh($event, option)" v-bind="$attrs" v-for="(option, i) of options" :aria-label="getOptionLabel(option)" :key="getOptionRenderKey(option)" role="option" :aria-selected="isOptionSelected(option)" :disabled="isOptionDisabled(option)" :value="isOptionSelected(option)" :true-value="true">
      <slot name="option" :option="option" :index="i">
        {{ getOptionLabel(option) }}
      </slot>
    </lv-check-box>
  </div>
</template>
<script>
import LvCheckBox from 'lightvue/checkbox';
import { trueValueMixin, optionsMixin } from 'lightvue/mixins';
import { ObjectUtils } from 'lightvue/utils';

export default {
  name: 'LvCheckboxGroup',
  mixins: [trueValueMixin, optionsMixin],
  props: {
    // name: {
    //   required: true,
    // },
  },
  components: {
    LvCheckBox,
  },
  methods: {
    refresh(isChecked, option) {
      let value = this.getOptionValue(option);
      // console.log(isChecked, value, option);
      let newValue = [...this.modelValue];

      if (isChecked) {
        newValue.push(value);
      } else {
        // remove from array
        // if (option instanceof Object && !this.optionValue) {
        let oldIndex = newValue.findIndex(item => {
          return ObjectUtils.equals(item, value);
        });
        newValue.splice(oldIndex, 1);
        // } else {
        //   newValue.splice(newValue.indexOf(value), 1);
        // }
      }
      this.updateValue(newValue);
    },
  },
};
</script>
