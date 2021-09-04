<template>
  <div class="lv-text-editor">
    <div class="lv-text-editor__toolbar" :style="{ backgroundColor: theme }">
      <LvButton v-for="(tool, i) in editorTools" :key="i" v-tooltip.top="`${tool.tooltipText}`" size="xl" :icon="tool.icon" :style="{ backgroundColor: theme, color }" :class="['lv-text-editor__toolbar__btn', { 'lv-text-editor__toolbar__btn--active': tool.active }]" @mousedown.prevent.stop="action(tool)" />
    </div>
    <div
      class="lv-text-editor__content light-scrollbar"
      ref="content"
      contenteditable
      v-html="content"
      @mousedown="setCurrentActivity"
      @keydown.exact="setCurrentActivity"
      @input="updateCharacterCount"
      @keydown.ctrl.75.prevent="action(editorTools.find(el => el.name == 'Link'))"
      @keydown.ctrl.80.prevent="action(editorTools.find(el => el.name == 'Image'))"
      @keydown.ctrl.76.prevent="action(editorTools.find(el => el.value == 'left'))"
      @keydown.ctrl.69.prevent="action(editorTools.find(el => el.value == 'center'))"
      @keydown.ctrl.74.prevent="action(editorTools.find(el => el.value == 'justify'))"
      @keydown.ctrl.82.prevent="action(editorTools.find(el => el.value == 'right'))"
      @keydown.ctrl.73.prevent="action(editorTools.find(el => el.name == 'Italic'))"
      @keydown.ctrl.83.prevent="action(editorTools.find(el => el.name == 'Strike'))"
      @keydown.ctrl.66.prevent="action(editorTools.find(el => el.name == 'Bold'))"
      @keydown.ctrl.85.prevent="action(editorTools.find(el => el.name == 'Underline'))"
    ></div>
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
import style from './style';
import LvOverlayPanel from 'lightvue/overlay-panel';
import { getContainer, updateSelection, replaceSelection } from './helper';
export default {
  components: {
    LvOverlayPanel,
  },
  directives: {
    tooltip: Tooltip,
  },
  props: {
    menu: {
      type: Array,
      default: () => ['Bold', 'Italic', 'Strike', 'Heading 1', 'Heading 2', 'Align', 'Link', 'Code', 'List'],
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
  computed: {
    editorTools() {
      return this.tools.filter(tool => this.menu.includes(tool.name));
    },
  },
  data() {
    return {
      content: `<p>\u200B</p>${style}`,
      characterCount: 0,
      tools: [
        {
          name: 'Bold',
          tooltipText: 'Bold (Ctrl + B)',
          active: false,
          property: 'font-weight',
          value: 'bold',
          icon: 'light-icon-bold',
          type: 'format',
        },
        {
          name: 'Italic',
          tooltipText: 'Italic (Ctrl + I)',
          active: false,
          property: 'font-style',
          value: 'italic',
          icon: 'light-icon-italic',
          type: 'format',
        },
        {
          name: 'Strike',
          tooltipText: 'Strikethrough (Ctrl + S)',
          active: false,
          property: 'text-decoration-line',
          value: 'line-through',
          icon: 'light-icon-strikethrough',
          type: 'format',
        },
        {
          name: 'Underline',
          tooltipText: 'Underline (Ctrl + U)',
          active: false,
          property: 'text-decoration-line',
          value: 'underline',
          icon: 'light-icon-underline',
          type: 'format',
        },

        {
          name: 'Heading 1',
          tooltipText: 'Heading 1',
          active: false,
          icon: 'light-icon-headphones',
          tag: 'h1',
          type: 'heading',
        },

        {
          name: 'Heading 2',
          tooltipText: 'Heading 2 ',
          active: false,
          icon: 'light-icon-headset',
          tag: 'h2',
          type: 'heading',
        },
        {
          name: 'Code',
          tooltipText: 'Code',
          active: false,
          icon: `light-icon-code`,
          tag: 'code',
          type: 'code',
        },
        {
          name: 'Align',
          tooltipText: 'Align Left (Ctrl + L)',
          active: false,
          property: 'text-align',
          value: 'left',
          icon: 'light-icon-align-left',
          type: 'align',
        },
        {
          name: 'Align',
          tooltipText: 'Align Center (Ctrl + E)',
          active: false,
          property: 'text-align',
          value: 'center',
          icon: 'light-icon-align-center',
          type: 'align',
        },
        {
          name: 'Align',
          tooltipText: 'Align Right (Ctrl + R)',
          active: false,
          property: 'text-align',
          value: 'right',
          icon: 'light-icon-align-right',
          type: 'align',
        },
        {
          name: 'Align',
          tooltipText: 'Align Justify (Ctrl + J)',
          active: false,
          property: 'text-align',
          value: 'justify',
          icon: 'light-icon-align-justified',
          type: 'align',
        },
        {
          name: 'List',
          tooltipText: 'Numbered List',
          active: false,
          tooltipText: 'Numbered list',
          icon: 'light-icon-list-check',
          tag: 'ol',
          type: 'list',
        },

        {
          name: 'List',
          tooltipText: 'Ordered List',
          active: false,
          type: 'list',
          icon: `light-icon-list`,
          tag: 'ul',
          type: 'list',
        },
        {
          name: 'Link',
          tooltipText: 'Link(Ctrl + K)',
          active: false,
          icon: `light-icon-link`,
          tag: 'a',
          type: 'link',
        },
        {
          name: 'Image',
          tooltipText: 'Image (Ctrl + P)',
          active: false,
          icon: `light-icon-photo`,
          url: null,
          container: null,
          tag: 'img',
          type: 'image',
        },
      ],
      linkText: '',
      linkURL: '',
      range: null,
    };
  },
  methods: {
    updateCharacterCount() {
      this.characterCount = this.$refs.content.innerText.replaceAll('\n', '').length || 0;
    },
    action(tool) {
      if (!tool) return;
      let { selection, container } = getContainer();
      if (!selection) return;
      if (!container) return;

      if (!container.closest('.lv-text-editor__content')) {
        container = this.$refs.content;
        let range = document.createRange();
        range.selectNodeContents(container);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
      }

      tool.type === 'format' && this.format(selection, container, tool);
      tool.type === 'heading' && this.toggleHeading(selection, container, tool);
      tool.type === 'code' && this.toggleCode(selection, container, tool);
      tool.type === 'list' && this.toggleList(selection, container, tool);
      tool.type === 'align' && this.toggleAlign(container, tool);
      tool.type === 'link' && this.insertLink(selection, container);
      tool.type === 'image' && this.insertImage(container);

      const bold = container.closest('span[style*="font-weight: bold"]');
      const italic = container.closest('span[style*="font-style: italic"]');
      const lineThrough = container.closest('span[style*="text-decoration-line: line-through"]');
      const underline = container.closest('span[style*="text-decoration-line: underline"]');

      const initial = container.closest('span[style*="font-weight: initial"]');
      const initialI = container.closest('span[style*="font-style: initial"]');
      const lineThroughI = container.closest('span[style*="text-decoration-line: initial"]');

      this.tools[this.tools.findIndex(tool => tool.name == 'Bold')].active = container.style.fontWeight == 'bold' || !!(bold && !(initial && bold.contains(initial)));

      this.tools[this.tools.findIndex(tool => tool.name == 'Italic')].active = container.style.fontStyle == 'italic' || !!(italic && !(initialI && italic.contains(initialI)));

      this.tools[this.tools.findIndex(tool => tool.name == 'Underline')].active = container.style.textDecorationLine == 'underline' || !!(underline && !(lineThroughI && underline.contains(linehroughI)));

      this.tools[this.tools.findIndex(tool => tool.name == 'Strike')].active = container.style.textDecorationLine == 'line-through' || !!(lineThrough && !(lineThroughI && lineThrough.contains(lineThroughI)));

      this.tools[this.tools.findIndex(tool => tool.value == 'right')].active = !!container.closest('.right');
      this.tools[this.tools.findIndex(tool => tool.value == 'center')].active = !!container.closest('.center');
      this.tools[this.tools.findIndex(tool => tool.value == 'justify')].active = container.closest('.justify');
      this.tools[this.tools.findIndex(tool => tool.value == 'left')].active = !!container.closest('.left');
      this.tools[this.tools.findIndex(tool => tool.tag == 'ul')].active = !!container.closest('ul');
      this.tools[this.tools.findIndex(tool => tool.tag == 'ol')].active = !!container.closest('ol');
      this.tools[this.tools.findIndex(tool => tool.name == 'Code')].active = !!container.closest('code');
    },
    setCurrentActivity(event) {
      // TODO active tools
      const { selection, container } = getContainer();
      if (!container) return;
      const path = event.path || event.composedPath();
      const index = path.findIndex(el => el.classList && el.classList.contains('lv-text-editor__content'));

      const paths = path.filter((_, i) => i < index);

      const bold = container.closest('span[style*="font-weight: bold"]');
      const italic = container.closest('span[style*="font-style: italic"]');
      const lineThrough = container.closest('span[style*="text-decoration-line: line-through"]');
      const underline = container.closest('span[style*="text-decoration-line: underline"]');
      const initial = container.closest('span[style*="font-weight: initial"]');
      const initialI = container.closest('span[style*="font-style: initial"]');

      this.tools[this.tools.findIndex(tool => tool.name == 'Bold')].active = container.style.fontWeight == 'bold' || !!(bold && !(initial && bold.contains(initial)));

      this.tools[this.tools.findIndex(tool => tool.name == 'Italic')].active = container.style.fontStyle == 'italic' || !!(italic && !(initialI && italic.contains(initialI)));

      this.tools[this.tools.findIndex(tool => tool.name == 'Underline')].active = container.style.textDecorationLine == 'underline' || !!(underline && !(initial && underline.contains(initial)));

      this.tools[this.tools.findIndex(tool => tool.name == 'Strike')].active = container.style.textDecorationLine == 'line-through' || !!(lineThrough && !(initial && lineThrough.contains(initial)));

      this.tools[this.tools.findIndex(tool => tool.value == 'right')].active = container.closest('.right');
      this.tools[this.tools.findIndex(tool => tool.value == 'center')].active = container.closest('.center');
      this.tools[this.tools.findIndex(tool => tool.value == 'justify')].active = container.closest('.justify');
      this.tools[this.tools.findIndex(tool => tool.value == 'left')].active = container.closest('.left');
      this.tools[this.tools.findIndex(tool => tool.tag == 'ul')].active = container.closest('ul');
      this.tools[this.tools.findIndex(tool => tool.tag == 'ol')].active = container.closest('ol');
      this.tools[this.tools.findIndex(tool => tool.name == 'Code')].active = container.closest('code');

      // console.log(
      // container.closest('.right'),
      // paths.filter(element => element.style.fontWeight == 'bold')
      // );

      const enclosingA = event.target.closest('.lv-text-editor__content a');
      if (enclosingA) {
        this.linkText = enclosingA.innerHTML;
        this.linkContainer = enclosingA;
        this.linkURL = enclosingA.href;
        this.$refs.linkVisitOP.toggle(null, enclosingA);
      }
    },

    toggleAlign(container, tool) {
      const enclosingDivContainer = container.closest('.lv-text-editor ol') || container.closest('.lv-text-editor ul') || container.closest('.lv-text-editor p');

      // const enclosingEndContainer = endContainer.closest('div');

      // if (enclosingDivContainer.parentElement == enclosingEndContainer.parentElement) {
      //   let i1 = Array.prototype.indexOf.call(enclosingDivContainer.parentElement.children, enclosingDivContainer);

      this.editorTools
        .filter(tool => tool.type == 'align')
        .forEach(item => {
          item.value != tool.value && enclosingDivContainer.classList.remove(item.value);
        });
      enclosingDivContainer.classList.toggle(tool.value);

      this.editorTools[this.editorTools.findIndex(tool => tool.value == 'right')].active = container.closest('.right');
      this.editorTools[this.editorTools.findIndex(tool => tool.value == 'center')].active = container.closest('.center');
      this.editorTools[this.editorTools.findIndex(tool => tool.value == 'justify')].active = container.closest('.justify');
      this.editorTools[this.editorTools.findIndex(tool => tool.value == 'left')].active = container.closest('.left');
    },

    toggleList(selection, container, tool) {
      const item = container.closest('.lv-text-editor__content ul') || container.closest('.lv-text-editor__content ol');

      if (item) {
        if (tool.tag != item.localName) {
          const newList = document.createElement(tool.tag);
          for (let i of item.children) {
            const item = document.createElement(i.localName);
            item.innerHTML = i.innerHTML;
            newList.appendChild(item);
          }
          item.parentNode.insertBefore(newList, item);
          item.parentNode.removeChild(item);
        } else {
          // remove list
          const newItem = document.createElement('div');
          for (let i of item.children) {
            const item = document.createElement('div');
            item.innerHTML = i.innerHTML;
            newItem.appendChild(item);
          }
          item.parentNode.insertBefore(newItem, item);
          item.parentNode.removeChild(item);
          this.editorTools[this.editorTools.findIndex(tool => tool.tag == 'ul')].active = false;
          this.editorTools[this.editorTools.findIndex(tool => tool.tag == 'ol')].active = false;
        }
      } else {
        // new list
        let range = selection.getRangeAt(0);
        const newList = document.createElement(tool.tag);
        const li = document.createElement('li');
        li.innerHTML = selection.toString();
        newList.appendChild(li);
        container.appendChild(newList);
        this.editorTools[this.editorTools.findIndex(tool => tool.tag == 'ul')].active = container.closest(tool.tag);
        this.editorTools[this.editorTools.findIndex(tool => tool.tag == 'ol')].active = container.closest(tool.tag);
        range.selectNodeContents(newList);
      }
    },
    toggleCode(selection, container, tool) {
      let range = selection.getRangeAt(0);
      let elem;
      if (container.localName !== tool.tag) {
        elem = document.createElement(tool.tag);
        elem.innerHTML = selection.toString() || '\u200B';
        range.deleteContents();
        range.insertNode(elem);
        range.selectNodeContents(elem);
      } else {
        elem = document.createElement('span');
        elem.innerHTML = '\u200B';
        container.parentNode.appendChild(elem);
        range.selectNodeContents(elem);
      }
    },
    format(selection, container, tool) {
      if (selection.toString()) {
        const sameSelection = container && container.innerText === selection.toString();

        if (sameSelection && container.style.type !== undefined) {
          updateSelection(container, {
            style: tool.property,
            value: tool.value,
            initial: element => element && element.style[tool.property] === tool.value,
          });
          return;
        }

        replaceSelection(
          container,
          {
            style: tool.property,
            value: tool.value,
            initial: element => element && element.style[tool.property] === tool.value,
          },
          selection
        );
      } else {
        let range = selection.getRangeAt(0);
        range.deleteContents();
        let elem = document.createElement('span');
        elem.innerHTML = '\u200B';

        elem.style[tool.property] = container.style[tool.property] === tool.value ? 'initial' : tool.value;

        range.insertNode(elem);
        range.selectNodeContents(elem);
      }
    },
    toggleHeading(selection, container, tool) {
      let range = selection.getRangeAt(0);
      let blockParent = container.closest('.lv-text-editor p');
      if (selection.toString()) {
        let elem = document.createElement(tool.tag);
        elem.innerHTML = selection.toString();
        if(blockParent.innerText == selection.toString()){
          // replace
          blockParent.replaceWith(elem)
          return
        }
        blockParent && blockParent.parentNode.insertBefore(elem, blockParent.nextSibling);

      } else {
        if (container.localName == tool.tag) {
          let elem = document.createElement('p');
          elem.innerHTML = container.innerHTML;
          container.replaceWith(elem);
        } else {
          let elem = document.createElement(tool.tag);
          elem.innerHTML = '\u200B';
           if(blockParent.innerText == ''){
          // replace
          blockParent.replaceWith(elem)
          return
        }
          blockParent && blockParent.parentNode.insertBefore(elem, blockParent.nextSibling);
          range.selectNodeContents(elem);
        }
      }
    },
    onFileChange({ target }) {
      const file = target && target.files && target.files[0];
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);

      this.editorTools.find(tool => tool.name == 'Image').container.appendChild(img);
    },
    insertLink(selection, container) {
      const closestLink = container.closest('.lv-text-editor__content a');

      this.linkURL = this.linkText = '';

      if (closestLink) {
        this.linkContainer = closestLink;
        this.linkURL = closestLink.href;
        this.linkText = closestLink.innerText;
      } else {
        let range = selection.getRangeAt(0);
        this.range = range;
        const a = document.createElement('a');
        this.range.insertNode(a);
        this.linkContainer = a;
        this.linkText = selection.toString() || '';
        this.$refs.linkOP.toggle(null, a);
        return;
      }
      this.$refs.linkOP.toggle(null, closestLink || container);
    },
    close() {
      if (this.linkContainer && this.linkContainer.localName === 'a' && !this.linkContainer.hasAttribute('href')) this.linkContainer.parentNode.removeChild(this.linkContainer);
      this.$refs.linkOP.hide();
    },
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
    insertImage(container) {
      this.$refs.imageInput.click();
      this.editorTools.find(tool => tool.name == 'Image').container = container;
    },
  },
};
</script>

<style lang="scss" scoped>
$editor-shade: rgba(75, 75, 75, 0.307);
$editor-bg: rgb(255, 255, 255);

.lv-text-editor {
  border: 1px solid $editor-shade;
  border-radius: 4px;
  overflow: auto;
  // resize: both;
  box-sizing: border-box;
  &__toolbar {
    display: flex;
    flex-wrap: wrap;
    padding: 4px;
    border-bottom: 1px solid $editor-shade;
    &__btn {
      &:hover {
        filter: brightness(85%);
      }
      &--active {
        font-weight: bolder;
      }
    }
  }
  &__content {
    padding: 1em;
    min-height: 120px;
    background: $editor-bg;
    overflow-y: scroll;
    &:focus-visible {
      outline: none;
    }
  }
  &__footer {
    display: flex;
    border-top: 1px solid lighten($color: $editor-shade, $amount: 30%);
    justify-content: flex-end;
    padding: 8px;
  }
}
</style>
