<template>
  <div class="typer">
      
    <!-- <LvTyper :words="['Arya Stark', 'Jon Snow', 'Daenerys Targaryen', 'Melisandre', 'Tyrion Lannister']" :typingSpeed="100"></LvTyper></br> -->
  
    <!-- <LvTyper :words="['Arya Stark', 'Jon Snow', 'Daenerys Targaryen', 'Melisandre', 'Tyrion Lannister']" :erasingSpeed="200" :typingSpeed="100"></LvTyper></br> -->

    <LvTyper :words="['Arya Stark', 'Jon Snow', 'Daenerys Targaryen', 'Melisandre', 'Tyrion Lannister']" :erasingSpeed="200" :typingSpeed="100" :newTextDelay="1000"></LvTyper></br>
  </div>
</template>
<script>
import LvTyper from 'lightvue/typer';
export default {
  components: {
    LvTyper,
  },
};
</script>
<style lang="scss" scoped>

</style>
