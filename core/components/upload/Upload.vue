<template>
  <div class="Lv__file"  :class="{ 'fs-drag-enter': isDragEnter }" >
    

<div class="file--upload"   ref="LvDroppable"
      :style="{ height: height + 'px' }"
      @dragenter.prevent="isDragEnter = true"
      @dragover.prevent="() => {}"
      @dragleave.prevent="isDragEnter = false"
      @drop.prevent="handleDrop">

      <input ref="LvFileInput" type="file" tabindex="-1" :multiple="multiple" :accept="acceptExtensions" @change="handleChange" />
</div>
    
   

      <div href="#" class="fs-btn-select" @click="$refs.LvFileInput.click()">
        <slot>Select</slot>
      </div>

    
    </div>
  </div>
</template>
<script>
export default {
  name: 'LvUpload',
  props: {
    multiple: {
      type: Boolean,
      default: false,
    },

    isLoading: {
      type: Boolean,
      default: false,
    },

    acceptExtensions: {
      type: String,
      default: '',
    },

    maxFileSize: {
      // in bytes
      type: Number,
      default: NaN,
    },

    height: {
      type: Number,
      default: NaN,
    },

    validateFn: {
      type: Function,
      default: () => true,
    },
  },

  data() {
    return {
      isDragEnter: false,
    };
  },

  methods: {
    handleChange($event) {
      this.preprocessFiles($event.target.files);
    },

    handleDrop($event) {
      this.isDragEnter = false;
      this.preprocessFiles($event.dataTransfer.files);
    },

    checkFileExtensions(files) {
      // get non-empty, unique extension items
      const extList = [...new Set(this.acceptExtensions.toLowerCase().split(',').filter(Boolean))];
      const list = Array.from(files);

      // check if the selected files are in supported extensions
      const invalidFileIndex = list.findIndex(file => {
        const ext = `.${file.name.toLowerCase().split('.').pop()}`;

        return !extList.includes(ext);
      });

      // all exts are valid
      return invalidFileIndex === -1;
    },

    checkFileSize(files) {
      if (Number.isNaN(this.maxFileSize)) {
        return true;
      }

      const list = Array.from(files);

      // find invalid file size
      const invalidFileIndex = list.findIndex(file => file.size > this.maxFileSize);

      // all file size are valid
      return invalidFileIndex === -1;
    },

    validate(files) {
      // file selection
      if (!this.multiple && files.length > 1) {
        return 'MULTIFILES_ERROR';
      }

      // extension
      if (!this.checkFileExtensions(files)) {
        return 'EXTENSION_ERROR';
      }

      // file size
      if (!this.checkFileSize(files)) {
        return 'FILE_SIZE_ERROR';
      }

      // custom validation
      return this.validateFn(files);
    },

    preprocessFiles(files) {
      const result = this.validate(files);
      this.$emit('validated', result, files);

      // validation
      if (result === true) {
        this.$emit('changed', files);
      }

      // clear selected files
      this.$refs.LvFileInput.value = '';
    },
  },
};
</script>
<style lang="sass">
@import './upload.scss'
</style>
