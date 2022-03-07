<template>
  <div>
    <LvButton icon="light-icon-alert-circle" class="lv--primary" />
    <LvButton label="Submit" icon="light-icon-arrow-down-circle" class="lv--primary" />
    <LvButton label="Submit" icon-right="light-icon-arrow-down-circle" class="lv--primary" />
 
  </div>
</template>

<script>
import LvButton from 'lightvue/button';
export default{
  components:{
    LvButton
  }
}
</script>