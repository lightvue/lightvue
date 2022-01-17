<template>
  <label class="Lv__file" :class="{ 'lv-drag-enter': isDragEnter }">
    <template v-if="!drop && !withButtonInput && button">
      <LvButton :icon="icon" :class="ButtonClass" @click="openPicker" :rounded="rounded" :label="placeholder" />
    </template>
    <template v-else-if="!drop && withButtonInput">
      <lv-input type="text" v-model="value1" :placeholder="placeholder" clearable :rounded="rounded">
        <template #prepend>
          <LvButton :icon="icon" :class="ButtonClass" @click="openPicker" />
        </template>
      </lv-input>
    </template>

    <div v-else-if="drop" class="file--upload__draggable" ref="LvDroppable" @dragenter.prevent="isDragEnter = true" @dragover.prevent="() => {}" @dragleave.prevent="isDragEnter = false" @drop.prevent="handleDrop" :style="computedStyle">
      <slot></slot>
    </div>
    <template>
      <slot></slot>
    </template>
    <input ref="LvFileInput" type="file" :accept="extensions" :tabindex="tabindex" :multiple="multiple" @change="handleFileChange($event)" />
  </label>
</template>
<script>
import LvInput from 'lightvue/input';
export default {
  name: 'LvUpload',
  emits: ['file-size-error', 'extension-error', 'submit-image'],
  components: {
    LvInput,
  },
  props: {
    tabindex: [String, Number],
    drop: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    withButtonInput: {
      type: Boolean,
      default: false,
    },
    button: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: 'light-icon-upload',
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
    // Same as native accept attribute
    extensions: {
      type: String,
      default: '.jpg,.svg',
    },

    // This value should be a positive number
    maxFileSize: {
      type: Number,
      default: 1024,
      validator: value => {
        return value > 0;
      },
    },

    height: {
      type: String,
      default: '2rem',
    },
    width: {
      type: String,
      default: '2rem',
    },
    label: String,
    validateFn: {
      type: Function,
      default: () => true,
    },
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
    handleFileChange(e) {
      // This method will be called when the file gets uploaded
      const files = e.target.files || e.dataTransfer.files;

      if (files[0]) {
        this.preprocessFiles($event.target.files);
      }
    },
    handleDrop($event) {
      this.isDragEnter = false;
      this.preprocessFiles($event.dataTransfer.files);
    },

    checkFileExtensions(files) {
      // get non-empty, unique extension items
      const extList = [...new Set(this.extensions.toLowerCase().split(',').filter(Boolean))];
      const list = Array.from(files);
      // check if the selected files are in supported extensions
      const invalidFileIndex = list.findIndex(file => {
        const ext = `.${file.name.toLowerCase().split('.').pop()}`;
        return extList.includes(ext);
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

      // check File extension for normal upload its not necessary but for drop we have to check the extension
      if (this.checkFileExtensions(files)) {
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
        this.$emit('submit-image', files);
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
