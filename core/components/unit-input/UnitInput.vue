<template>
  <!-- <div class="unit_input-wrapper">
    <div class="unit-input">
      <lv-input ref="unitInput" v-model="localValue" type="number" placeholder="10" @focus="inputFocus" @blur="inputBlur" bottomBar> </lv-input>
    </div>
    <div class="unit-dropdown">
      <lv-dropdown ref="unitDropdown" id="units-dropdown" v-model="selectedUnit" :options="units" bottomBar @focus="dropdownFocus" />
    </div>
  </div> -->
  <lv-input class="unit-input-wrapper" type="text" :editable="false" v-bind="$attrs" :value="localValue" @clear="handleClear()" bottomBar>
    <!-- <lv-input ref="unitInput" v-model="localValue" type="number" placeholder="10" bottomBar> </lv-input> -->
    <input class="unit-input" type="number" v-bind="$attrs" v-model="localValue" placeholder="10"></input>
     <!-- <select class="unit-dropdown" @change="selectUnit($event)">
    <option v-for="unit in units" :value="unit" :key="unit" :selected="unit === 'px'">{{ unit}}</option>
  </select> -->
  <!-- <label class="custom-selector" @mousedown.prevent="openDropdown">
  <select name="sample">
    <option value="1">px</option>
    <option value="2">rem</option>
    <option value="3">em</option>
  </select>
</label> -->
<div tabindex="0" class="custom-select"  @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selectedUnit }}
      <i class="light-icon-chevron-down"></i>
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(unit, i) of units"
        :key="unit"
        @click="optionSelect(unit)"
        :class="{ 'active-option' : selectedUnit === unit }"
      >
        {{ unit }}
      </div>
    </div>
  </div>
  </lv-input>
</template>

<script>
import LvInput from 'lightvue/input';
import LvDropdown from 'lightvue/dropdown';
import { trueValueMixin } from 'lightvue/mixins';
export default {
  name: 'InputDropdown',
  mixins: [trueValueMixin],
  data() {
    return {
      localValue: null,
      units: ['px', 'rem', 'em'],
      selectedUnit: 'px',
      open: false,
    };
  },
  watch: {
    localValue() {
      if (this.localValue !== this.modelValue) {
        console.log(this.localValue)
        this.updateValue(this.localValue + this.selectedUnit);
      }
    },
    selectedUnit() {
      if (this.localValue !== this.modelValue) {
        this.updateValue(this.localValue + this.selectedUnit);
      }
    },
  },
  mounted() {
    this.localValue = this.modelValue;
  },
  components: {
    LvInput,
    LvDropdown,
  },
  methods: {
    inputFocus(el) {
      this.$refs.unitDropdown.$children[0].$el.classList.add('--manual-bottom-bar');
    },
    inputBlur() {
      this.$refs.unitDropdown.$children[0].$el.classList.remove('--manual-bottom-bar');
    },
    // selectUnit(e) {
    //   console.log(e)
    // },
    // openDropdown(){
    //   console.log('hello')
    //   const selector = document.querySelector('.custom-selector')
    //   const select = selector.children[0]
    //   const dropdown = document.createElement('ul')
    //   dropdown.className = "selector-options";
    //   [...select.children].forEach(option =>{
    //     const dropdownOption = document.createElement('li');
    //     dropdownOption.textContent = option.textContent
    //     dropdownOption.addEventListener('mousedown',e =>{
    //       e.stopPropagation()
    //       select.value = option.value
    //       selector.value = option.value
    //       dropdown.remove()
    //     })
    //     dropdown.appendChild(dropdownOption)
    //   })
    //   selector.appendChild(dropdown)
    // }
    optionSelect(unit){
      this.open = false
      this.selectedUnit = unit
    }
  },
};
</script>

<style lang="scss">
/* .unit_input-wrapper {
  display: flex;
  align-items: center;
  flex: 1 1 0px;
  .unit-dropdown {
    flex-basis: 0;
    .lv-input__field {
      border-radius: 0px 5px 5px 0px;
    }
  }
  .unit-input {
    width: 100%;
    height: 100%;
    .lv-input__field {
      border-radius: 5px 0px 0px 5px;
      height: 100% !important;
    }
    .lv-input__group {
      height: 100%;
    }
  }
}
.--manual-bottom-bar {
  .lv-input__field {
    &::after {
      left: 0% !important;
      width: 100% !important;
    }
  }
} */
/* ---------------------- */
/* 
  .unit-dropdown{
    border: none;
    font-size: 1rem;
    color: #495057;
    background: transparent;
    width: 50%;
    appearance: none;
    cursor: pointer;
      &:focus{
        outline: none;
      }
        &::-ms-expand {
          color: red;
          background: red;
  }
      option{
        border-radius: 0;
        background: white;
        cursor: pointer;
        &:hover{
          background: teal;
        }
      }
  }
  .custom-selector {
  position: relative;
  display: inline-block;
  font-size: 1rem;
  color: #495057;
}

.custom-selector select {
  display: block;
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
}



.custom-selector .selector-options {
  list-style: none;
  margin: 0;
  background: white;
  font-size: 1rem;
  color: #495057;
  border-radius: 4px;
  z-index: 1;
  position: absolute;
  left: 2%;
}

.custom-selector .selector-options li {
  height: 35px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.custom-selector .selector-options li:hover {
  background: teal;
}
.unit-input-wrapper{
  .lv-input__field{
    overflow: visible !important;
  }
} */
/* ------------------------- */
.custom-select {
  display: inline-block;
  position: relative;
  width: 40%;
  text-align: left;
  outline: none;
  background: transparent;
}

.custom-select .selected {
  font-size: 1rem;
  color: #495057;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items:center;
  justify-content: space-between;
}

.custom-select .selected.open {
  border-radius: 3px;
}
.custom-select .items {
    font-size: 1rem;
  color: #495057;
  border-radius: 3px;
  overflow: hidden;
  position: absolute;
  background-color: white;
  left: 0;
  right: 0;
  margin-top: 6px;
  width: max-content;
  z-index: 1;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
}
  


.custom-select .items div {
  font-size: 1rem;
  color: #495057;
  padding: 0.5rem 1rem;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
    color: #495057;
    background: #e9ecef;
}

.selectHide {
  display: none;
}
.unit-input-wrapper{
  .lv-input__field{
    overflow: visible !important;
  }
}
.unit-input {
  border: none;
  background: transparent;
  font-size: 1rem;
  color: #495057;
  width: 56%;
  &:focus {
    outline: none;
  }

}
.active-option{
  color: #ffffff !important;
  background: #38b2ac;
  &:hover{
      color: #ffffff !important;
    background: #38b2ac !important;
  }
}
</style>
