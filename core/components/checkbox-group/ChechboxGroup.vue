<template>
  <div>
    <lv-check-box @change="refresh" v-bind="$attrs" :name="name" v-for="option of options" :key="optionValue ? option[optionValue] : option" v-model="checkedBooleans[options.lastIndexOf(option)]" :disabled="option.disabled">
      {{ optionLabel ? option[optionLabel] : option }}
    </lv-check-box>
  </div>
</template>
<script>
import LvCheckBox from 'lightvue/checkbox';
export default {
  name: 'LvCheckboxGroup',
  data() {
    return {
      checkedBooleans: [],
      checkedOptions: [],
    };
  },
  components: {
    LvCheckBox,
  },
  created() {
    this.$attrs.value.forEach(value => {
      this.checkedBooleans[this.options.lastIndexOf(value)] = true;
    });

    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i].checked) this.checkedBooleans[i] = true;
    }

    this.refresh();
  },
  props: {
    options: {
      type: Array,
    },
    optionLabel: {
      type: String,
    },
    optionValue: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    refresh() {
      this.checkedOptions = [];
      for (let i = 0; i < this.options.length; i++) {
        let tempOption = {};
        tempOption[this.optionLabel] = this.options[i][this.optionLabel];
        tempOption[this.optionValue] = this.options[i][this.optionValue];
        if (this.checkedBooleans[i] == true) this.checkedOptions.push(this.optionLabel ? tempOption : this.options[i]);
      }
      this.$emit('input', this.checkedOptions);
      this.$emit('change', this.checkedOptions);
    },
  },
};
</script>
