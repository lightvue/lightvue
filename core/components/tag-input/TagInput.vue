<template>
  <div class="lv-tag__input">
    <span class="tag" v-for="(tag,index) in tags" :key="index">
      {{tag}}
      <i @click="removeTag(index)" class="light-icon-x lv-tag__delete"></i>
    </span>
    <input class="lv-tag__input-field" type="text" @keydown="addNewTag" v-model="newTagValue" >
  </div>
</template>

<script>
import LvInput from 'lightvue/input';

export default{
  name:'LvTagInput',
  data(){
    return {
      newTagValue: '',
      tags: ['hre'],
    }
  },
  methods:{
    addNewTag(e){
      if(e.keyCode == 13 && this.newTagValue != ''){
        this.tags.push(this.newTagValue);
        this.newTagValue = '';
      }
    },
    removeTag(index){
      // this.tags.pop(index);
      this.tags = this.tags.filter((item,idx) => index != idx );
      console.log(this.tags)
    },
  }
}
</script>

<style lang="scss">
.lv-tag__input{
  color: #495057;
  background: #edf2f7;
  border-radius: 4px;
  display: flex;
  padding: 0 4px ;
  font-size: 1rem;
  gap: 0.25rem;
}
.tag{
  background: #38b2ac;
  padding: 0 0.5rem ;
  margin: 4px 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  justify-content: center;
  color: white;
  border-radius: 4px;
  
  white-space: nowrap;
}
.lv-tag__delete{
  cursor: pointer;
}
.lv-tag__input-field{
  border: none;
  flex-grow: 1;
  background: transparent;
  color: #495057;
  padding: 10px 8px;
}
input:focus-within{
  outline: none;
}
</style>