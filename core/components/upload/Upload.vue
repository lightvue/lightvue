<template>
  <label class="Lv__file" :class="{ 'lv-drag-enter': isDragEnter }" :style="computedStyle">
    <template v-if="!drop && !withButtonInput">
      <slot />
    </template>
    <template v-else-if="!drop && withButtonInput">
      <!-- <div class="fileupload__content">
        <div class="fileupload__icon">
          <slot name="icon">
            <i class="light-icon-cloud-upload"></i>
          </slot>
        </div>

        <span v-if="hasSelection" class="fileupload__display-text">{{ displayText }}</span>
        <slot v-else>{{ placeholder }}</slot>
      </div> -->
      <!-- <input class="md-input" readonly v-bind="{ placeholder }" @click="openPicker" /> -->
      <lv-input type="text" v-model="value1" :placeholder="placeholder" clearable @click="openPicker">
        <template #prepend>
          <LvButton :icon="icon" :class="ButtonClass" @click="openPicker" />
        </template>
      </lv-input>
    </template>

    <div v-else class="file--upload__draggable" ref="LvDroppable" @dragenter.prevent="isDragEnter = true" @dragover.prevent="() => {}" @dragleave.prevent="isDragEnter = false" @drop.prevent="handleDrop" :style="computedStyle">
      <slot></slot>
    </div>
    <input ref="LvFileInput" type="file" :tabindex="tabindex" :multiple="multiple" :accept="acceptExtensions" @change="handleChange" />
  </label>
</template>
<script>
import LvInput from 'lightvue/input';
export default {
  name: 'LvUpload',
  components: {
    LvInput,
  },
  props: {
    tabindex: [String, Number],
    drop: {
      type: Boolean,
      default: false,
    },
    withButtonInput: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: 'light-icon-cloud-upload',
    },
    ButtonClass: {
      type: String,
      default: 'lv--success',
    },
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
      type: String,
      default: '2rem',
    },
    width: {
      type: String,
      default: '2rem',
    },

    validateFn: {
      type: Function,
      default: () => true,
    },
    label: String,
  },

  data() {
    return {
      isDragEnter: false,
      hasSelection: false,
      displayText: '',
      value1: '',
    };
  },

  computed: {
    computedStyle() {
      return {
        height: this.height,
        width: this.width,
      };
    },
    placeholder() {
      if (this.label) {
        return this.label;
      }

      return this.multiple ? 'Choose files' : 'Choose a file';
    },
  },

  methods: {
    openPicker() {
      this.$refs.LvFileInput.click();
    },
    handleChange($event) {
      this.onFileSelected($event);
      this.preprocessFiles($event.target.files);
    },

    onFileSelected({ target, dataTransfer }) {
      const files = target.files || dataTransfer.files;

      this.value1 = this.getFileName(files, target);
    },
    getFileName(files, target) {
      if (!files || files.length === 0) {
        return target.value.split('\\').pop();
      }

      if (files.length > 1) {
        return this.getMultipleName(files);
      }

      if (files.length === 1) {
        return files[0].name;
      }

      return null;
    },
    getMultipleName(files) {
      let names = [];

      [...files].forEach(({ name }) => names.push(name));

      return names.join(', ');
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
