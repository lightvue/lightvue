<template>
  <div>
    <LvUpload accept-extensions=".jpg,.svg" :multiple="true" :max-file-size="5 * 1024 * 1024" @validated="handleFilesValidated" @changed="handleFilesChanged">
      <div class="upload">
        <i class="light-icon-cloud-upload"></i>
      </div>
    </LvUpload>
    <!-- <LvUpload accept-extensions=".jpg,.svg" :multiple="true" :max-file-size="5 * 1024 * 1024" @validated="handleFilesValidated" @changed="handleFilesChanged" width="100%">
      <div class="upload">
        <LvButton label="Upload" size="lg" icon="light-icon-cloud-upload" class="lv--primary" />
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
</style>
