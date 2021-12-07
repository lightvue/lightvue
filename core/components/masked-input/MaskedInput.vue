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
      let val = e.target.value.replaceAll('/', '');
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
      this.modelValue = val.join('');
      console.log(val, this.modelValue);
      // const regex = /^[0-1][0-9]-[0-3][0-9]-[0-9]{4}$/;
      // if (len > 2) {
      //   let val;
      //   if (this.modelValue.includes('/')) {
      //     val = this.modelValue.split('/');
      //   } else {
      //     val = this.modelValue.split('');
      //   }
      //   console.log(val);
      //   for (let i = 1; i <= parseInt(len / 2); i++) {
      //     console.log(i);
      //     if (val[i * 2] != '/') val.splice(i * 2, 0, '/');
      //   }
      //   this.modelValue = val.join('');
      //   console.log(val, this.modelValue);
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
@import './MaskedInput.scss';
</style>
