<template>
  <div class="lv-text-editor">
    <div class="lv-text-editor__toolbar" :style="{ backgroundColor: theme }">
      <LvButton v-for="(tool, i) in editorTools" :key="i" :icon="tool.icon" :style="{ backgroundColor: theme, color }" size="xl" :class="['lv-text-editor__toolbar__btn', { 'lv-text-editor__toolbar__btn--active': tool.active }]" v-tooltip.top="`${tool.tooltipText}`" @mousedown.prevent.stop="action(tool)" />
    </div>
    <div class="lv-text-editor__content light-scrollbar" ref="content" contenteditable @keydown="handleKeyControls" v-html="content" @input="handleInput"></div>
    <div class="lv-text-editor__footer">Characters: {{ characterCount }}</div>

    <LvOverlayPanel ref="linkOP" appendTo="body" style="max-width: 300px" :dismissable="false">
      <LvInput label="URL" type="url" v-model.trim="linkURL" />
      <br />
      <LvInput label="Link text" type="text" v-model.trim="linkText" />
      <br />
      <LvButton label="Set" @click.prevent="save" />
      <LvButton label="Cancel" @click.prevent="close" />
    </LvOverlayPanel>

    <LvOverlayPanel ref="linkVisitOP" appendTo="body" style="max-width: 500px">
      <i class="light-icon-link"></i>
      <a :href="linkURL" :dismissable="false" target="_blank">
        {{ linkURL }}
      </a>
    </LvOverlayPanel>

    <input type="file" ref="imageInput" hidden accept="image/*" @change="onFileChange" />
  </div>
</template>

<script>
import Tooltip from 'lightvue/tooltip';
import LvOverlayPanel from 'lightvue/overlay-panel';
import { format, heading, list, addLink, align, addImage, getContainer, code } from './helper';
export default {
  components: {
    LvOverlayPanel,
  },
  data() {
    return {
      characterCount: 0,
      content: '<p><br/></p>',
      imgContainer: null,
      linkContainer: null,
      linkText: '',
      linkURL: '',
      tools: {
        format: {
          bold: {
            action: format,
            active: false,
            icon: 'light-icon-bold',
            name: 'Bold',
            tag: 'b',
            tooltipText: 'Bold (Ctrl + B)',
            property: 'font-weight',
            value: 'bold',
            code: 66,
          },
          italic: {
            active: false,
            icon: 'light-icon-italic',
            name: 'Italic',
            tag: 'i',
            tooltipText: 'Italic (Ctrl + I)',
            action: format,
            property: 'font-style',
            value: 'italic',
            code: 73,
          },
          underline: {
            active: false,
            icon: 'light-icon-underline',
            name: 'Underline',
            tag: 'u',
            property: 'text-decoration-line',
            value: 'underline',
            tooltipText: 'Underline (Ctrl + U)',
            action: format,
            code: 85,
          },
          strikethrough: {
            active: false,
            icon: 'light-icon-strikethrough',
            name: 'Strikethrough',
            tag: 's',
            tooltipText: 'Strikethrough (Ctrl + S)',
            action: format,
            property: 'text-decoration-line',
            value: 'line-through',
            code: 83,
          },
        },
        heading: {
          'heading 1': {
            active: false,
            icon: 'light-icon-heading-1',
            name: 'Heading 1',
            tag: 'h1',
            tooltipText: 'Heading 1',
            action: heading,
          },
          'heading 2': {
            active: false,
            icon: 'light-icon-heading-2',
            name: 'Heading 2',
            tag: 'h2',
            tooltipText: 'Heading 2',
            action: heading,
          },
        },
        align: {
          left: {
            active: false,
            icon: 'light-icon-align-left',
            name: 'Left Align',
            tag: 'left',
            tooltipText: 'Left Align (Ctrl + L)',
            action: align,
            property: 'text-align',
            value: 'left',
            code: 76,
          },
          center: {
            active: false,
            icon: 'light-icon-align-center',
            name: 'Center Align',
            tag: 'center',
            tooltipText: 'Center Align (Ctrl + E)',
            action: align,
            property: 'text-align',
            value: 'center',
            code: 69,
          },
          right: {
            active: false,
            icon: 'light-icon-align-right',
            name: 'Right Align',
            tag: 'right',
            tooltipText: 'Right Align (Ctrl + R)',
            action: align,
            property: 'text-align',
            value: 'right',
            code: 82,
          },
          justify: {
            active: false,
            icon: 'light-icon-align-justified',
            name: 'Justify Align',
            tag: 'justify',
            tooltipText: 'Justify Align (Ctrl + J)',
            action: align,
            property: 'text-align',
            value: 'justify',
            code: 74,
          },
        },
        link: {
          active: false,
          icon: 'light-icon-link',
          name: 'Link',
          tag: 'a',
          tooltipText: 'Link (Ctrl + K)',
          code: 75,
        },
        code: {
          active: false,
          icon: 'light-icon-code',
          name: 'Code',
          tag: 'code',
          tooltipText: 'Code',
          action: code,
        },
        image: {
          active: false,
          icon: 'light-icon-photo',
          name: 'Image',
          tag: 'img',
          tooltipText: 'Insert Image',
          code: 80,
        },
        list: {
          numbered: {
            active: false,
            icon: 'light-icon-list-numbered',
            name: 'Numbered List',
            tag: 'ol',
            tooltipText: 'Numbered List',
            action: list,
          },
          bulleted: {
            active: false,
            icon: 'light-icon-list',
            name: 'Bulleted List',
            tag: 'ul',
            tooltipText: 'Bulleted List',
            action: list,
          },
        },
      },
    };
  },
  directives: {
    tooltip: Tooltip,
  },
  computed: {
    editorTools() {
      return this.menu
        .map(item => item.toLowerCase())
        .filter(item => item in this.tools || item in this.tools.format || item in this.tools.heading)
        .map(item => this.tools.format[item] || this.tools.heading[item] || (item == 'align' || item == 'list' ? Object.values(this.tools[item]) : this.tools[item]))
        .flat(Infinity);
    },
  },
  methods: {
    action(tool, code = null) {
      this.checkFocus();
      if (code) tool = this.editorTools.find(e => e.code == code);
      if (tool && tool.name == 'Link') {
        const { selection, container } = getContainer();
        const closestLink = container.closest('.lv-text-editor__content a');
        this.linkURL = this.linkText = '';

        if (closestLink) {
          this.linkContainer = closestLink;
          this.linkURL = closestLink.href;
          this.linkText = closestLink.innerText;
        } else {
          this.linkText = this.linkURL = '';

          let range = selection.getRangeAt(0);
          const a = document.createElement('a');
          this.linkContainer = a;
          this.linkText = selection.toString() || '';
          this.range = range;
          range.insertNode(a);
          this.$refs.linkOP.toggle(null, a);
          return;
        }
        this.$refs.linkOP.toggle(null, closestLink || container);
      }
      if (tool && tool.name == 'Image') {
        this.$refs.imageInput.click();
      }
      tool && tool.action(tool, code);
    },
    checkFocus() {
      const { selection, container } = getContainer();
      if (!container.closest('.lv-text-editor__content')) {
        let range = document.createRange();
        range.selectNodeContents(this.$refs.content.lastElementChild);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    },
    close() {
      if (this.linkContainer && this.linkContainer.localName === 'a' && !this.linkContainer.hasAttribute('href')) this.linkContainer.parentNode.removeChild(this.linkContainer);
      this.$refs.linkOP.hide();
    },
    handleInput() {
      // handling backspace/del
      if (this.$refs.content.innerHTML == '') this.$refs.content.innerHTML = '<p><br/></p>';
      this.updateCharacterCount();
    },
    handleKeyControls(e) {
      this.toggleButtons(e);
      if (e.ctrlKey) {
        let i = this.editorTools.findIndex(item => item.code == e.keyCode);
        // i != -1 && this.editorTools[i].active == !this.editorTools[i].active;
        switch (e.keyCode) {
          case 66:
          case 73:
          case 83:
          case 85:
          case 76:
          case 69:
          case 74:
          case 82:
          case 75:
          case 80:
            e.preventDefault();
            this.action(null, e.keyCode);
        }
      }
    },
    onFileChange({ target }) {
      const file = target && target.files && target.files[0];
      if (file) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        const { selection } = getContainer();
        let range = selection.getRangeAt(0);
        range.insertNode(img);
        range.collapse(false);
      }
    },
    toggleButtons(e) {},
    save() {
      if (this.linkURL == '') {
        if (this.linkContainer && this.linkContainer.hasAttribute('href')) {
          this.linkContainer.removeAttribute('href');
          const textNode = document.createTextNode(this.linkContainer.innerHTML);
          this.linkContainer.replaceWith(textNode);
          this.linkContainer = null;
        }
        this.range && this.range.deleteContents();
        this.$refs.linkOP.hide();
        return;
      }
      const elem = this.linkContainer.localName === 'a' ? this.linkContainer : document.createElement('a');

      elem.innerHTML = this.linkText || this.linkURL;
      elem.href = this.linkURL;

      this.range && this.range.deleteContents();
      this.range && this.range.insertNode(this.linkContainer);
      this.linkContainer = null;
      this.updateCharacterCount();

      this.$refs.linkOP.hide();
    },
    updateCharacterCount() {
      this.characterCount = this.$refs.content.innerText.replaceAll('\n', '').length || 0;
    },
  },
  props: {
    menu: {
      type: Array,
      default: () => ['Bold', 'Italic', 'Strikethrough', 'Heading 1', 'Heading 2', 'Align', 'Link', 'Code', 'List'],
      validator: prop => prop.every(e => typeof e === 'string'),
    },
    theme: {
      type: String,
      default: '#ffffff',
    },
    color: {
      type: String,
      default: '#333333',
    },
  },
};
</script>

<style lang="scss">
@import './styles/TextEditor.scss';
</style>

<style scoped>
@import './styles/TextContent.css';
</style>
