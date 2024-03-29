<template>
  <div ref="container" :class="containerClass" @click="onClick($event)">
    <div class="lv-hidden-accessible">
      <input ref="focusInput" type="text" :id="inputId" readonly :disabled="disabled" @focus="onFocus" @blur="onBlur" @keydown="onKeyDown" :tabindex="tabindex" aria-haspopup="listbox" :aria-expanded="overlayVisible" :aria-labelledby="ariaLabelledBy" />
    </div>
    <lv-input type="text" v-bind="$attrs" ref="mainInput" :disabled="disabled" @focus="onFocus" @blur="onBlur" :placeholder="placeholder" @update:modelValue="onEditableInput" @keydown="onKeyDown" aria-haspopup="listbox" :aria-expanded="overlayVisible" :editable="editable" :modelValue="editableInputValue" :value="editableInputValue" autocomplete="cc-csc" :icon-right="iconRight || 'light-icon-chevron-down'">
      <span v-if="!editable" :class="labelClass">
        <slot name="value" :value="modelValue" :placeholder="placeholder">
          {{ selectedLabel }}
        </slot>
      </span>
    </lv-input>
    <transition name="lv-transition__overlay" @enter="onOverlayEnter" @leave="onOverlayLeave">
      <div ref="overlayRef" class="lv-dropdown__panel lv-component" v-if="overlayVisible">
        <div class="lv-dropdown__panel-header" v-if="filter">
          <lv-input type="text" ref="filterInput" autofocus v-bind="$attrs" v-model="filterValue" autoComplete="off" icon-right="light-icon-search" :placeholder="filterPlaceholder" @keydown="onFilterKeyDown" @input-native="onFilterChange" @click.stop></lv-input>
        </div>
        <div class="lv-dropdown__items-wrap" :style="{ 'max-height': scrollHeight }">
          <ul class="lv-dropdown__items" role="listbox">
            <li v-for="(option, i) of visibleOptions" :class="['lv-dropdown__item', { '--selected': isOptionSelected(option), '--disabled': isOptionDisabled(option) }]" v-ripple :aria-label="getOptionLabel(option)" :key="getOptionRenderKey(option)" @click="onOptionSelect($event, option)" role="option" :aria-selected="isOptionSelected(option)">
              <slot name="option" :option="option" :index="i">
                {{ getOptionLabel(option) }}
              </slot>
            </li>
            <li v-if="filterValue && (!visibleOptions || (visibleOptions && visibleOptions.length === 0))" class="lv-dropdown__empty-message">{{ emptyFilterMessage }}</li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ConnectedOverlayScrollHandler, ObjectUtils, DomHandler } from 'lightvue/utils';
import { trueValueMixin, optionsMixin } from 'lightvue/mixins';
import Ripple from 'lightvue/ripple';
import LvInput from 'lightvue/input';

export default {
  name: 'LvDropdown',
  inheritAttrs: false,
  mixins: [trueValueMixin, optionsMixin],
  emits: ['before-show', 'before-hide', 'show', 'hide', 'change', 'filter'],
  components: {
    LvInput,
  },
  props: {
    // value: null, // via mixin
    scrollHeight: {
      type: String,
      default: '200px',
    },
    filter: Boolean,
    filterPlaceholder: String,
    filterLocale: String,
    editable: {
      type: Boolean,
      default: false,
    },
    placeholder: String,
    disabled: Boolean,
    inputId: String,
    tabindex: String,
    iconRight: String,
    ariaLabelledBy: null,
    appendTo: {
      type: String,
      default: null,
    },
    emptyFilterMessage: {
      type: String,
      default: 'No results found',
    },
    closeOnResize: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      focused: false,
      filterValue: null,
      overlayVisible: false,
    };
  },
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  // searchTimeout: null,
  // currentSearchChar: null,
  // previousSearchChar: null,
  // searchValue: null,
  // overlay: null,
  beforeDestroy() {
    this.onBeforeUnmount();
  },
  beforeUnmount() {
    this.onBeforeUnmount();
  },
  methods: {
    getSelectedOption() {
      let selectedOption;

      if (this.modelValue != null && this.options) {
        for (let option of this.options) {
          if (ObjectUtils.equals(this.modelValue, this.getOptionValue(option), this.equalityKey)) {
            selectedOption = option;
            break;
          }
        }
      }

      return selectedOption;
    },
    getSelectedOptionIndex() {
      let selectedOptionIndex = -1;
      if (this.modelValue != null && this.visibleOptions) {
        for (let i = 0; i < this.visibleOptions.length; i++) {
          if (ObjectUtils.equals(this.modelValue, this.getOptionValue(this.visibleOptions[i]), this.equalityKey)) {
            selectedOptionIndex = i;
            break;
          }
        }
      }

      return selectedOptionIndex;
    },
    show() {
      this.$emit('before-show');
      this.overlayVisible = true;
    },
    hide() {
      this.$emit('before-hide');
      this.overlayVisible = false;
    },
    onFocus() {
      this.focused = true;
    },
    onBlur() {
      this.focused = false;
    },
    onKeyDown(event) {
      switch (event.which) {
        //down
        case 40:
          this.onDownKey(event);
          break;

        //up
        case 38:
          this.onUpKey(event);
          break;

        //space
        case 32:
          if (!this.overlayVisible) {
            this.show();
            event.preventDefault();
          }
          break;

        //enter and escape
        case 13:
        case 27:
          if (this.overlayVisible) {
            this.hide();
            event.preventDefault();
          }
          break;

        //tab
        case 9:
          this.hide();
          break;

        default:
          // this.search(event);
          break;
      }
    },
    onFilterKeyDown(event) {
      switch (event.which) {
        //down
        case 40:
          this.onDownKey(event);
          break;

        //up
        case 38:
          this.onUpKey(event);
          break;

        //enter and escape
        case 13:
        case 27:
          this.overlayVisible = false;
          event.preventDefault();
          break;

        default:
          break;
      }
    },
    onDownKey(event) {
      if (this.visibleOptions) {
        if (!this.overlayVisible && event.altKey) {
          this.show();
        } else {
          let nextOption = this.findNextOption(this.getSelectedOptionIndex());

          if (nextOption) {
            this.updateModel(event, this.getOptionValue(nextOption));
          }
        }
      }

      event.preventDefault();
    },
    onUpKey(event) {
      if (this.visibleOptions) {
        let prevOption = this.findPrevOption(this.getSelectedOptionIndex());

        if (prevOption) {
          this.updateModel(event, this.getOptionValue(prevOption));
        }
      }

      event.preventDefault();
    },
    findNextOption(index) {
      let i = index + 1;
      if (i === this.visibleOptions.length) {
        return null;
      }

      let option = this.visibleOptions[i];
      if (this.isOptionDisabled(option)) return this.findNextOption(i);
      else return option;
    },
    findPrevOption(index) {
      let i = index - 1;
      if (i < 0) {
        return null;
      }

      let option = this.visibleOptions[i];
      if (this.isOptionDisabled(option)) return this.findPrevOption(i);
      else return option;
    },
    onClick(event) {
      // To focus automatically
      if (this.disabled) {
        return;
      }

      // if (DomHandler.hasClass(event.target, 'lv-dropdown__clear-icon')) {
      //   return;
      // } else
      if (!this.$refs.overlayRef || !this.$refs.overlayRef.contains(event.target)) {
        if (this.overlayVisible) this.hide();
        else this.show();

        this.$refs.focusInput.focus();
        if (this.$refs.mainInput) {
          this.$refs.mainInput.$el.querySelector('input').focus();
        }
      }
    },
    onOptionSelect(event, option) {
      let value = this.getOptionValue(option);
      this.updateModel(event, value);
      this.$refs.focusInput.focus();
      if (this.$refs.mainInput) {
        this.$refs.mainInput.$el.querySelector('input').focus();
      }
      setTimeout(() => {
        this.hide();
      }, 200);
    },
    onEditableInput(newValue) {
      this.filterValue = newValue || '';
      // this.$emit('input', newValue);
      // this.$emit('update:modelValue', newValue);
      this.updateValue(newValue); // From trueValueMixin
    },
    onOverlayEnter() {
      this.$refs.overlayRef.style.zIndex = String(DomHandler.generateZIndex());
      this.appendContainer();
      this.alignOverlay();
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.closeOnResize && this.bindResizeListener();

      if (this.filter) {
        this.$refs.filterInput.$el.querySelector('input').focus();
      }

      this.$emit('show');
    },
    onOverlayLeave() {
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.closeOnResize && this.unbindResizeListener();
      this.$emit('hide');
      // this.overlay = null;
    },
    alignOverlay() {
      if (this.appendTo) {
        DomHandler.absolutePosition(this.$refs.overlayRef, this.$el);
        this.$refs.overlayRef.style.minWidth = DomHandler.getOuterWidth(this.$el) + 'px';
      } else {
        let mainInputNode = this.$refs.mainInput.$el;
        let inputFieldNode = null;
        for (let node of mainInputNode.childNodes) {
          if (node.className === 'lv-input__field') {
            inputFieldNode = node;
            break;
          }
        }
        DomHandler.relativePosition(this.$refs.overlayRef, mainInputNode, inputFieldNode);
      }
    },
    updateModel(event, value) {
      this.updateValue(value); // From TrueValueMixin
      // this.$emit('input', value);
      // this.$emit('update:modelValue', value);
      this.$emit('change', { originalEvent: event, value: value });
    },
    bindOutsideClickListener() {
      if (!this.outsideClickListener) {
        this.outsideClickListener = event => {
          if (this.overlayVisible && this.$refs.overlayRef && !this.$el.contains(event.target) && !this.$refs.overlayRef.contains(event.target)) {
            this.hide();
          }
        };
        document.addEventListener('click', this.outsideClickListener);
      }
    },
    unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener('click', this.outsideClickListener);
        this.outsideClickListener = null;
      }
    },
    bindScrollListener() {
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.container, () => {
          if (this.overlayVisible) {
            this.hide();
          }
        });
      }

      this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    },
    bindResizeListener() {
      if (!this.resizeListener) {
        this.resizeListener = () => {
          if (this.overlayVisible) {
            this.hide();
          }
        };
        window.addEventListener('resize', this.resizeListener);
      }
    },
    unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener('resize', this.resizeListener);
        this.resizeListener = null;
      }
    },
    // search(event) {
    //   if (!this.visibleOptions) {
    //     return;
    //   }

    //   if (this.searchTimeout) {
    //     clearTimeout(this.searchTimeout);
    //   }

    //   const char = String.fromCharCode(event.keyCode);
    //   this.previousSearchChar = this.currentSearchChar;
    //   this.currentSearchChar = char;

    //   if (this.previousSearchChar === this.currentSearchChar) this.searchValue = this.currentSearchChar;
    //   else this.searchValue = this.searchValue ? this.searchValue + char : char;

    //   let searchIndex = this.getSelectedOptionIndex();
    //   let newOption = this.searchOption(++searchIndex);

    //   if (newOption) {
    //     this.updateModel(event, this.getOptionValue(newOption));
    //   }

    //   this.searchTimeout = setTimeout(() => {
    //     this.searchValue = null;
    //   }, 250);
    // },

    // searchOption(index) {
    //   let option;

    //   if (this.searchValue) {
    //     option = this.searchOptionInRange(index, this.visibleOptions.length);

    //     if (!option) {
    //       option = this.searchOptionInRange(0, index);
    //     }
    //   }

    //   return option;
    // },

    // searchOptionInRange(start, end) {
    //   for (let i = start; i < end; i++) {
    //     let opt = this.visibleOptions[i];
    //     let label = this.getOptionLabel(opt).toLocaleLowerCase(this.filterLocale);
    //     if (label.startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))) {
    //       return opt;
    //     }
    //   }
    //   return null;
    // },
    appendContainer() {
      if (this.appendTo) {
        if (this.appendTo === 'body') document.body.appendChild(this.$refs.overlayRef);
        else document.getElementById(this.appendTo).appendChild(this.$refs.overlayRef);
      }
    },
    restoreAppend() {
      if (this.$refs.overlayRef && this.appendTo) {
        if (this.appendTo === 'body') document.body.removeChild(this.$refs.overlayRef);
        else document.getElementById(this.appendTo).removeChild(this.$refs.overlayRef);
      }
    },
    onFilterChange(event) {
      this.$emit('filter', { originalEvent: event, value: event.target.value });
      if (this.overlayVisible) {
        this.alignOverlay();
      }
    },
    onBeforeUnmount() {
      this.restoreAppend();
      this.unbindOutsideClickListener();
      this.unbindResizeListener();

      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
      // this.overlay = null;
    },
    // overlayRef(el) {
    //     this.overlay = el;
    //     return 'overlayRef';
    // }
  },
  computed: {
    modelValue() {
      return this.$attrs.modelValue ? this.$attrs.modelValue : this.value;
    },
    visibleOptions() {
      if (this.filterValue && this.filterValue.trim().length > 0) return this.options.filter(option => this.getOptionLabel(option).toLocaleLowerCase(this.filterLocale).indexOf(this.filterValue.toLocaleLowerCase(this.filterLocale)) > -1);
      else return this.options;
    },
    containerClass() {
      return [
        'lv-dropdown lv-component',
        {
          '--disabled': this.disabled,
          // '--clearable': this.clearable && !this.disabled,
          '--focused': this.focused,
          '--filled': this.modelValue, // only usefull for floating-label case
        },
      ];
    },
    labelClass() {
      return [
        'lv-dropdown__label',
        {
          '--as-placeholder': this.selectedLabel === this.placeholder,
          'lv-dropdown__label-empty': !this.$slots['value'] && (this.selectedLabel === '--empty-label' || this.selectedLabel.length === 0),
        },
      ];
    },
    selectedLabel() {
      let selectedOption = this.getSelectedOption();
      if (selectedOption) return this.getOptionLabel(selectedOption);
      else return this.placeholder || '--empty-label';
    },
    editableInputValue() {
      let selectedOption = this.getSelectedOption();
      if (selectedOption) return this.getOptionLabel(selectedOption);
      else return this.modelValue;
    },
  },
  directives: {
    ripple: Ripple,
  },
};
</script>
<style lang="scss">
@import './Dropdown.scss';
@import './OverlayAnimation.scss';
</style>
