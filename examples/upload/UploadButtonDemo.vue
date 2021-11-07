<template>
  <div>
    <h5>Default</h5>
    <LvUpload @validated="handleFilesValidated" @changed="handleFilesChanged"> </LvUpload><br />
    <h5>Restriction for file type (.svg,.jpg)</h5>
    <LvUpload accept-extensions=".jpg,.svg" @validated="handleFilesValidated" @changed="handleFilesChanged" width="5rem"> </LvUpload><br />
    <h5>Restriction for file Size</h5>

    <LvUpload :max-file-size="5 * 1024 * 1024" @validated="handleFilesValidated" @changed="handleFilesChanged"> </LvUpload><br />
    <h5>With Imgage Preview</h5>
    <LvUpload accept-extensions=".jpg,.svg" @validated="handleFilesValidated" @changed="handleFilesChangedPreview"> </LvUpload><br />
    <div class="page__demo-preview" v-if="filePreviewImage.length > 0">
      <img alt="filePreviewName" class="page__demo-preview-image" :src="filePreviewImage" />
    </div>
  </div>
</template>
<script>
import LvUpload from 'lightvue/upload';
export default {
  components: {
    LvUpload,
  },
  data() {
    return {
      filePreviewImage: '',
    };
  },
  methods: {
    handleFilesValidated(result, files) {
      console.log('Validation result: ', result);
    },

    handleFilesChanged(files) {
      console.log('Selected files: ');

      console.table(this.filePreviewImage);
    },
    handleFilesChangedPreview(files) {
      console.log('Selected files: ');
      this.filePreviewImage = URL.createObjectURL(files[0]);
      console.table(this.filePreviewImage);
    },
  },
};
</script>
<style lang="scss" scoped>
.upload {
  font-size: 4rem;
  font-weight: 700;
}
.page__demo-preview {
  display: table;
  border: 1px solid #ddd;
  margin-top: 8px;
  padding: 4px;
  line-height: 1;
}

.page__demo-preview-image {
  min-width: 24px;
  max-width: 256px;
}
/* button {
  pointer-events: none;
} */
</style>
