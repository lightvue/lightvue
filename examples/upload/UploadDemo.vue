<template>
  <div>
    <h5>Default</h5>
    <LvUpload @validated="handleFilesValidated" @changed="handleFilesChanged" :withButtonInput="true"> </LvUpload><br />
    <h5>Restriction for file type (.svg,.jpg)</h5>
    <LvUpload accept-extensions=".jpg,.svg" @validated="handleFilesValidated" @changed="handleFilesChanged" :withButtonInput="true"> </LvUpload><br />
    <h5>Restriction for file Size</h5>

    <LvUpload :max-file-size="5 * 1024 * 1024" @validated="handleFilesValidated" @changed="handleFilesChanged" :withButtonInput="true"> </LvUpload><br />
  </div>
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
.upload {
  font-size: 4rem;
  font-weight: 700;
}
/* button {
  pointer-events: none;
} */
</style>
