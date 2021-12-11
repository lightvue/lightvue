<template>
  <div>
    <LvUpload :max-file-size="5000" extensions=".png" @submit-image="handleFilesChanged($event)" @file-size-error="fileSizeError" @extension-error="showError" drop height="100%" width="100%">
      <div class="upload" v-if="!filePreviewImage.length > 0">
        <i class="light-icon-cloud-upload"></i>
      </div>
      <div class="page__demo-preview" v-else>
        <img alt="filePreviewName" class="page__demo-preview-image" :src="filePreviewImage" />
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
  data() {
    return {
      filePreviewImage: '',
      fileName: '',
    };
  },
  methods: {
    showError() {
      console.log('hii');
      this.$notification.add({ type: 'error', title: 'File Size Error', content: 'Please select Valid File Type' });
    },
    fileSizeError() {
      window.alert('file to too big');
    },
    handleFilesChanged(files) {
      this.fileName = files[0].name;
      this.$notification.add({ type: 'success', title: 'File Uploaded', content: 'File Upload success', position: 'bottom-right', duration: 3000 });
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
</style>
