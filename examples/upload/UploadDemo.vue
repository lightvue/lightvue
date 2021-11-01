<template>
  <LvUpload accept-extensions=".jpg,.svg" :multiple="true" :max-file-size="5 * 1024 * 1024" @validated="handleFilesValidated" @changed="handleFilesChanged"> Select image files </LvUpload>
</template>
<script>
import LvUpload from 'lightvue/upload';
export default {
  components: {
    LvUpload,
  },
  methods: {
    handleFilesValidated(result, files) {
      console.log('Validation result: ', result);
    },

    handleFilesChanged(files) {
      console.log('Selected files: ');
      console.table(files);
    },
  },
};
</script>
<style lang="scss" scoped>
.badge__wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.--mr {
  margin-left: 4px;
}
</style>
