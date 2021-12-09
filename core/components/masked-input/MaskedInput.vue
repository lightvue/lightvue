<template>
  <lv-input type="text" :editable="false" :class="{ '--not-empty': true }" :value="modelValue" @clear="handleClear()">
    <label for="">{{ modelValue }}</label>
    <input id="msked" placeholder="__/__/____" @blur="handleBlur" @focus="handleFocus" class="lv-masked-input" v-bind="$attrs" @input="updateModel" :value="modelValue" />
  </lv-input>
</template>

<script>
export default {
  name: 'MaskedInput',
  data() {
    return {
      modelValue: '',
    };
  },
  methods: {
    updateModel(e) {
      console.log(e.target.value, e.target.selectionStart, e.target);
      let val = this.modelValue.split('');

      this.modelValue = this.maskDate(val.join(''));
      setTimeout(() => {
        let caretPos = i == 1 ? 3 : i == 4 ? 6 : i + 1;

        console.log('pos', i, caretPos);
        e.target.setSelectionRange(caretPos, caretPos);
      }, 0.5);

      this.setCaretPosition(e.target, i);
      this.modelValue = this.maskDate(e.target.value, '-');
    },

    handleFocus() {
      if (!this.modelValue) {
        this.modelValue = '__/__/____';
      }
    },

    handleBlur() {
      if (this.modelValue == '__/__/____') {
        this.modelValue = '';
      }
    },
    maskDate(date, sep) {
      let val = date.replaceAll(sep, '');
      let pattern = '##/##/####';
      console.log(val);
      val = val.split('');
      for (let i = 0; i <= pattern.length; i++) {
        if (pattern[i] != '#') {
          val[i] = pattern[i];
          console.log(val, i, pattern[i]);
        }
      }
      // if (val.length > 4 && val.length < 9) {
      //   console.log('first', val.length);
      //   val.splice(2, 0, sep);
      //   val.splice(5, 0, sep);
      //   console.log(val);
      // } else if (val.length > 2 && val.length < 5) {
      //   console.log('second');
      //   val.splice(2, 0, sep);
      //   console.log(val);
      // } else if (val.length > 8) {
      //   console.log('popping');
      //   val = val.slice(0, 8);
      //   val.splice(2, 0, sep);
      //   val.splice(5, 0, sep);
      // }
      return val.join('');
    },
  },
};
</script>

<style lang="scss" scoped>
@import './MaskedInput.scss';
</style>
