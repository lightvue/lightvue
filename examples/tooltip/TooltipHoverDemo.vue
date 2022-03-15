<template>
  <div class="tooltip-example-wrapper" >
    

        <LvInput type="text" placeholder="Hover over me!" v-tooltip.right="'Tooltip message'" />
    
  
         <LvButton v-tooltip.left="'Tooltip message'">Hover over me!</LvButton>
    
      
      </div>
    </div>
  </div>
</template>

<script>
import LvCard from 'lightvue/card';
import LvButton from 'lightvue/button';
import LvRangeSlider from 'lightvue/range-slider'; // REFACTORING
import Tooltip from 'lightvue/tooltip';

export default {
  data() {
    return {
      value1: 10,
      value2: 10,
    };
  },
  components: {
    LvCard,
    LvButton,
    LvRangeSlider, // REFACTORING
  },
  directives: {
    tooltip: Tooltip,
  },
};
</script>

<style scoped>
.tooltip-example-wrapper  {
display: flex;
align-items: center;
justify-content: space-between;
width: 80%;

}


</style>
