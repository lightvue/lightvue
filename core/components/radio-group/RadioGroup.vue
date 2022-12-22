<template>
  <div class="lv-radio-group_wrap">
    <lv-check-box type="radio" @change="refresh($event, option)" v-bind="$attrs" v-for="(option, i) of options" :aria-label="getOptionLabel(option)" :key="getOptionRenderKey(option)" role="option" :aria-selected="isOptionSelected(option)" :checked="isOptionSelected(option)" :disabled="isOptionDisabled(option)" :value="getOptionValue(option)">
      <slot name="option" :option="option" :index="i">
        {{ getOptionLabel(option) }}
      </slot>
    </lv-check-box>
  </div>
</template>
<script>
import LvCheckBox from 'lightvue/checkbox';
import { localValueMixin, optionsMixin } from 'lightvue/mixins';

export default {
  name: 'LvCheckboxGroup',
  mixins: [localValueMixin, optionsMixin],
  props: {
    // name: {
    //   required: true,
    // },
  },
  components: {
    LvCheckBox,
  },
  methods: {
    refresh(event, option) {
      let value = this.getOptionValue(option);
      // console.log(event, value, option);
      this.updateValue(value);
    },
  },
};
</script>
<style lang="scss">
.lv-radio-group_wrap .lv-checkbox {
  margin: 4px 1em 4px 2px;
}
</style>
