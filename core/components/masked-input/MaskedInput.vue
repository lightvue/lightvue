<template>
  <lv-input type="text" :editable="false" :class="{ '--not-empty': true }" :value="modelValue" @clear="handleClear()">
    <input class="lv-masked-input" v-bind="$attrs" @input="updateModel" v-model="modelValue" />
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
      console.log(e.target.value);

      this.modelValue = this.maskDate(e.target.value);
    },
    maskDate(date) {
      let val = date.replaceAll('/', '');
      console.log(val);
      val = val.split('');
      if (val.length > 4 && val.length < 9) {
        console.log('first', val.length);
        val.splice(2, 0, '/');
        val.splice(5, 0, '/');
        console.log(val);
      } else if (val.length > 2 && val.length < 5) {
        console.log('second');
        val.splice(2, 0, '/');
        console.log(val);
      } else if (val.length > 8) {
        console.log('popping');
        val = val.slice(0, 8);
        val.splice(2, 0, '/');
        val.splice(5, 0, '/');
      }
      return val.join('');
    },
  },
};
</script>

<style lang="scss" scoped>
@import './MaskedInput.scss';
</style>
