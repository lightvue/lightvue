<template>
  <label class="Lv__file" :class="{ 'lv-drag-enter': isDragEnter }">
    <template v-if="!drop && !withButtonInput">
      <LvButton :icon="icon" :class="ButtonClass" @click="openPicker" :rounded="rounded" :label="placeholder" />
    </template>
    <template v-else-if="!drop && withButtonInput">
      <lv-input type="text" v-model="value1" :placeholder="placeholder" clearable :rounded="rounded">
        <template #prepend>
          <LvButton :icon="icon" :class="ButtonClass" @click="openPicker" />
        </template>
      </lv-input>
    </template>
    <div v-else class="file--upload__draggable" ref="LvDroppable" @dragenter.prevent="isDragEnter = true" @dragover.prevent="() => {}" @dragleave.prevent="isDragEnter = false" @drop.prevent="handleDrop" :style="computedStyle">
      <slot></slot>
    </div>
    <input ref="LvFileInput" type="file" :accept="extensions" :tabindex="tabindex" :multiple="multiple" @change="handleFileChange($event)" />
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
    rounded: {
      type: Boolean,
      default: false,
    },
    withButtonInput: {
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
      // We are checking the size of image or if not valid then calling sizeErrorCallback
      const imageSize = files[0].size / 1024; // size in KB

      if (imageSize > this.maxFileSize) {
        this.$emit('file-size-error', imageSize);
        this.$refs.LvFileInput.value = '';
        return;
      }
      // check File extension for normal upload its not necessary but for drop we have to check the extension
      if (this.checkFileExtensions(files)) {
        this.$emit('extension-error', files);
        this.$refs.LvFileInput.value = '';
        return;
      }
      if (files && files[0]) {
        this.$emit('submit-image', files);
      }
    },
    handleDrop($event) {
      this.isDragEnter = false;
      this.handleFileChange($event);
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

    validate(files) {
      // file selection
      if (!this.multiple && files.length > 1) {
        return this.$emit('multiple-file-error');
      }
    },
    getImageURL(image) {
      // here we are dealing with variuos cases
      // 1: if image is not provided use default image from assets
      // 2: if image is string use it directly
      // 3: if image is dataURL object, create image url using data, encoding and data format
      return image ? (typeof image === 'object' ? `data:image/${image.dataFormat};${image.encoding},${image.data}` : image) : this.defaultImage;
    },
  },
};
</script>
<style lang="sass">
@import './upload.scss'
</style>
