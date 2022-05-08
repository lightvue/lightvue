<template>
  <div class="typer">
    Default:</br>
    <LvTyper :words="['Arya Stark', 'Jon Snow', 'Daenerys Targaryen', 'Melisandre', 'Tyrion Lannister']" ></LvTyper></br>
    
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
.typer {
  font-size: 20px;
}
</style>
