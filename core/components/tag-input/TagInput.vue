<template>
  <div>
  <lv-input v-bind="$attrs" :editable="false">
    <template #prepend>
      <div class="lv-tags__container">
        <span class="lv-tag" v-for="(tag,index) in tags" :key="index">
          {{tag}}
          <i @click="removeTag(index)" class="light-icon-x lv-tag__delete"></i>
        </span>
      </div>
    </template>
    <input  class="lv-tag__input-field" v-bind="$attrs" type="text" @keydown="keyEvents"  v-model="newTagValue" >
  </lv-input>
  </div>
</template>

<script>
import LvInput from 'lightvue/input';
import { localValueMixin } from '../../mixins';
export default{
  name:'LvTagInput',
  mixins: [localValueMixin],
  props:{
    value: {
      type:Array,
      default: () => []
    },
    placeholder:{
      type: String,
      default: "",
    },
    limit:{
     type: Number,
     default: -1,
    },
  },
  data(){
    return {
      newTagValue: '',
      tags: [...this.value],
    }
  },
  watch: {
    value(){
      this.tags = [...this.value];
    },
  },
  methods:{
    keyEvents(e){
      const key = e.keyCode;
      if(key == 13) this.addNewTag(); // ' Enter ' key is pressed -> Add new tag
      if(key == 8) this.removeLastTag(); // 'Backspace is pressed -> Remove last element
      if(key == 188){
        // ',' is pressed -> Add a new tag
        // Remove , from the tag
        this.addNewTag();
        this.newTagValue = '';
        e.preventDefault();
      }
    },
    addNewTag(){
      if(this.newTagValue != '' && (this.limit === -1 || this.tags.length < this.limit)){
        this.tags.push(this.newTagValue);
        this.updateValue(this.tags);
        // this.value.push(this.newTagValue);
        this.newTagValue = '';
      }
    },
    removeLastTag(){
      if(this.newTagValue === ''){
        this.tags.pop();
        this.updateValue(this.tags);
      }
    },
    removeTag(index){
      this.tags = this.tags.filter((item,idx) => index != idx );
      this.updateValue(this.tags);
    },
  },
  components:{
    LvInput
  }
}
</script>

<style lang="scss">
@import './taginput.scss'
</style> 