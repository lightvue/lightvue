<template>
  <lv-input type="text" :editable="false" :class="{ '--not-empty': true }" :value="modelValue" @clear="handleClear()">
    <label for="">{{ modelValue }}</label>
    <input id="msked" placeholder="________" @blur="handleBlur" @focus="handleFocus" class="lv-masked-input" v-bind="$attrs" @input="updateModel" :value="modelValue" />
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
      let newVal = e.target.value;
      let oldVal = this.modelValue.split('');
      let curPos = e.target.selectionStart - 1;
      console.log(oldVal, curPos, 1, '_');
      if (newVal.length < 8) {
        console.log('backspaced');
        console.log(curPos + 1);
        // oldVal[curPos + 1] = '_';
        console.log(oldVal, curPos + 1, 1, '_');
        oldVal.splice(curPos + 1, 1, '_');
        this.modelValue = oldVal.join('');
        this.updateModelValue(oldVal, curPos, e);
      } else if (newVal[curPos] != oldVal[curPos]) {
        oldVal[curPos] = newVal[curPos];
        this.modelValue = oldVal.join('');

        this.updateModelValue(oldVal, curPos, e);
      }
    },
    updateModelValue(oldVal, i, e) {
      this.modelValue = oldVal.join('');
      setTimeout(() => {
        e.target.setSelectionRange(i + 1, i + 1);
      }, 1);
    },
    // updateModel(e) {
    //   console.log(e.target.value, curPos, e.target);
    //   let val = this.modelValue.split('');

    //   for (let i = 0; i < 10; i++) {
    //     if (this.modelValue[i] != e.target.value[i]) {
    //       this.modelValue[i + 1] = '';
    //       this.modelValue = this.maskDate(val.join(''));
    //       setTimeout(() => {
    //         let caretPos = i == 1 ? 3 : i == 4 ? 6 : i + 1;

    //         console.log('pos', i, caretPos);
    //         e.target.setSelectionRange(caretPos, caretPos);
    //       }, 0.5);
    //     }
    //   }

    //   // this.setCaretPosition(e.target, i);
    //   this.modelValue = this.maskDate(e.target.value, '/');
    // },

    handleFocus() {
      if (!this.modelValue) {
        this.modelValue = '________';
      }
    },

    handleBlur() {
      if (this.modelValue == '________') {
        this.modelValue = '';
      }
    },
    // maskDate(date, sep) {
    //   let val = date.replaceAll(sep, '');
    //   let pattern = '##/##/####';
    //   console.log(val);
    //   val = val.split('');
    //   for (let i = 0; i <= pattern.length; i++) {
    //     if (pattern[i] != '#') {
    //       val[i] = pattern[i];
    //       console.log(val, i, pattern[i]);
    //     }
    //   }
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
    //   return val.join('');
    // },
  },
};
</script>

<style lang="scss" scoped>
@import './MaskedInput.scss';
</style>
