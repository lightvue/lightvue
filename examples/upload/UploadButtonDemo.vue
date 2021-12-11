<template>
  <div>
    <h5>Default</h5>
    <LvUpload @submit-image="handleFilesChanged($event)" @file-size-error="showError" :label="fileName" @extension-error="showExtensionError"> </LvUpload><br />
    <h5>Restriction for file type (.svg,.jpg)</h5>
    <LvUpload extensions=".jpg,.svg" @submit-image="handleFilesChanged($event)" @file-size-error="showError" :label="fileName" @extension-error="showExtensionError"> </LvUpload><br />
    <h5>Restriction for file Size 2MB</h5>
    <LvUpload :maxFileSize="2024" @submit-image="handleFilesChanged($event)" @file-size-error="showError" :label="fileName" @extension-error="showExtensionError"> </LvUpload><br />
    <h5>With Image Preview</h5>
    <LvUpload extensions=".jpg,.svg" @submit-image="handleFilesChanged($event)" @file-size-error="showError" :label="fileName" @extension-error="showExtensionError"> </LvUpload><br />
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
      fileName: '',
    };
  },
  methods: {
    showError() {
      this.$notification.add({ type: 'error', title: 'File Size Error', content: 'Please select file less than 1mb', duration: 3000 });
    },
    showExtensionError() {
      this.$notification.add({ type: 'error', title: 'Extension error', content: 'Please select right file', duration: 3000 });
    },
    handleFilesChanged(files) {
      console.log('Selected files: ', files);
      this.fileName = files[0].name;
      this.$notification.add({ type: 'success', title: 'File Uploaded', content: 'File Upload success', duration: 3000 });
      this.handleFilesChangedPreview(files);
    },
    handleFilesChangedPreview(files) {
      console.log('Selected files: ');
      this.filePreviewImage = URL.createObjectURL(files[0]);
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
