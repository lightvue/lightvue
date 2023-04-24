<template>
  <div>
    <h5>Default</h5>
    <LvUpload @submit-image="handleFilesChanged($event)" :label="fileName" @validated="handleFilesValidated" :withButtonInput="true"> </LvUpload><br />
    <h5>Restriction for file type (.pdf)</h5>
    <LvUpload extensions=".pdf" @submit-image="handleFilesChanged($event)" @validated="handleFilesValidated" :label="fileName" :withButtonInput="true"> </LvUpload><br />
    <h5>Restriction for file Size(Less Than 2MB)</h5>
    <LvUpload :max-file-size="2024" @submit-image="handleFilesChanged($event)" @validated="handleFilesValidated" :label="fileName" :withButtonInput="true"> </LvUpload><br />
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
    handleFilesValidated(result, files) {
      if (result === 'MULTIFILES_ERROR') {
        this.$notification.add({ type: 'error', title: 'File Size Error', content: 'Multiple files not allowed', duration: 3000 });
      }
      if (result === 'EXTENSION_ERROR') {
        this.$notification.add({ type: 'error', title: 'Extension error', content: 'Please select right file', duration: 3000 });
      }
      if (result === 'FILE_SIZE_ERROR') {
        this.$notification.add({ type: 'error', title: 'File Size Error', content: 'Please select file less than 2mb', duration: 3000 });
      }
    },
    // showError($event)() {
    // },
    handleFilesChanged(files) {
      this.fileName = files[0].name;
      this.$notification.add({ type: 'success', title: 'File Uploaded', content: 'File Upload success', duration: 3000 });
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
