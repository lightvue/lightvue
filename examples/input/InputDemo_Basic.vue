<template>
  <div class="masked-wrapper">
    <the-mask type="tel" v-model="input" :mask="masks" :masked="masked" @input="log"></the-mask>

    <the-mask :mask="['##/##/####']" v-model="date" placeholder="date" />
  </div>
</template>

<script>
import TheMask from './MaskDemo';

export default {
  components: { TheMask },
  data() {
    return {
      input: '7757828621',
      date: null,
      masked: true,
      mask: '+91 (##########)',
    };
  },
  computed: {
    masks() {
      return this.mask.split('|');
    },
  },
  methods: {
    log(e) {
      // console.log('input', e)
    },
  },
};
</script>
<style>
.masked-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
