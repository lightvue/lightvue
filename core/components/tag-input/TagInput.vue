<template>
  <div class="lv-tag__input">
    <lv-input v-bind="$attrs" :rounded="rounded" :editable="false">
      <template #prepend>
        <slot name="prepend"> </slot>
      </template>
      <div class="lv-tag__input-container">
        <slot name="tag" v-for="(tag, index) in modelValue" :deleteTag="() => removeTag(index)" :content="tag">
          <div :class="{ '--rounded-tags': rounded }" :style="{ backgroundColor: tagColor, color: tagTextColor }" class="lv-tag">
            {{ getOptionLabel(tag) }}
            <i class="light-icon-x" @click="removeTag(index)"></i>
          </div>
        </slot>
        <input class="lv-tag__input-field" v-bind="$attrs" type="text" @keydown="keyEvents" v-model="newTagValue" />
      </div>
    </lv-input>
  </div>
</template>

<script>
import LvInput from 'lightvue/input';
import { localValueMixin, optionsMixin } from '../../mixins';
export default {
  name: 'LvTagInput',
  mixins: [localValueMixin, optionsMixin],
  props: {
    dataType: {
      type: String,
      default: 'string',
    },
    // value: {
    //   type:Array,
    //   default: () => []
    // },
    limit: {
      type: Number,
      default: -1,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    tagColor: {
      type: String,
      default: '#38b2ac',
    },
    tagTextColor: {
      type: String,
      default: '#fff',
    },
  },
  data() {
    return {
      newTagValue: '',
      tags: [],
    };
  },
  // watch: {
  //   value(){
  //     this.tags = [...this.value];
  //   },
  // },
  methods: {
    keyEvents(e) {
      const key = e.keyCode;
      if (key == 13) this.addNewTag(); // ' Enter ' key is pressed -> Add new tag
      if (key == 8) this.removeLastTag(); // 'Backspace is pressed -> Remove last element
      if (key == 188) {
        // ',' is pressed -> Add a new tag
        // Remove , from the tag
        this.addNewTag();
        this.newTagValue = '';
        e.preventDefault();
      }
    },
    addNewTag() {
      if (this.newTagValue != '' && (this.limit === -1 || this.tags.length < this.limit)) {
        if (this.dataType.toLowerCase() == 'string') {
          this.tags.push(this.newTagValue); // push the new tag value directly to the array as a STRING
        }
        if (this.dataType.toLowerCase() == 'object') {
          this.tags.push({ label: this.newTagValue, value: this.newTagValue }); // push the new tag value as an OBJECT
        }
        this.updateValue(this.tags);
        this.newTagValue = '';
      }
    },
    removeLastTag() {
      if (this.newTagValue === '') {
        this.tags.pop();
        this.updateValue(this.tags);
      }
    },
    removeTag(index) {
      this.tags = this.tags.filter((item, idx) => index != idx);
      this.updateValue(this.tags);
    },
  },
  mounted() {
    if (this.value) {
      this.tags = [...this.value];
    }
    if (this.modelValue) {
      this.tags = [...this.modelValue];
    }
  },
  components: {
    LvInput,
  },
};
</script>

<style lang="scss">
@import './taginput.scss';
</style>
