<template>
  <div>
    <h5>Default</h5>
    <LvUpload @validated="handleFilesValidated" @changed="handleFilesChanged" :withButtonInput="true"> </LvUpload><br />
    <h5>Restriction for file type (.svg,.jpg)</h5>
    <LvUpload accept-extensions=".jpg,.svg" @validated="handleFilesValidated" @changed="handleFilesChanged" :withButtonInput="true"> </LvUpload><br />
    <h5>Restriction for file Size</h5>

    <LvUpload :max-file-size="5 * 1024 * 1024" @validated="handleFilesValidated" @changed="handleFilesChanged" :withButtonInput="true"> </LvUpload><br />
    <!-- <LvUpload accept-extensions=".jpg,.svg" :multiple="true" :max-file-size="5 * 1024 * 1024" @validated="handleFilesValidated" @changed="handleFilesChanged" width="100%" height="100%">
      <div class="upload">
        <LvButton size="lg" icon="light-icon-cloud-upload" class="lv--primary" />
        Click me
        <button @click.prevent.stop>click</button>
      </div>
    </LvUpload> -->
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
