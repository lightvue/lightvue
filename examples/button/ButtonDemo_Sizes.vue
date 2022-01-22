<template>
    <div>
      <LvButton label="Small" size="sm" icon="light-icon-arrow-down-circle" class="lv--primary" />
      <LvButton label="Normal" size="md" icon="light-icon-arrow-down-circle" class="lv--primary" />
      <LvButton label="Large" size="lg" icon="light-icon-arrow-down-circle" class="lv--primary" />
      <LvButton label="Extra Large" size="xl" icon="light-icon-arrow-down-circle" class="lv--primary" />
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
