<template>
  <div>
    <LvUpload :max-file-size="2000" extensions=".png" @submit-image="handleFilesChanged($event)" @file-size-error="showError('file-size-error')" @extension-error="showExtensionError('extension-error')" drop height="100%" width="100%">
      <div class="upload" v-if="!filePreviewImage.length > 0">
        <i class="light-icon-cloud-upload"></i>
      </div>
      <div class="page__demo-preview" v-else>
        <img alt="filePreviewName" class="page__demo-preview-image" :src="filePreviewImage" />
      </div>
    </LvUpload>
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
    showError(err) {
      if(err === 'file-size-error'){
        this.$notification.add({ type: 'error', title: 'File Size Error', content: 'Please select file less than 2mb', duration: 3000 });
      }
      if(err === 'extension-error'){
        this.$notification.add({ type: 'error', title: 'Extension error', content: 'Please select right file', duration: 3000 });
      }
    },
    handleFilesChanged(files) {
      this.fileName = files[0].name;
      this.$notification.add({ type: 'success', title: 'File Uploaded', content: 'File Upload success', position: 'bottom-right', duration: 3000 });
      this.handleFilesChangedPreview(files);
    },

    handleFilesChangedPreview(files) {
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
