<template>
  <div class="typer">
    <LvTyper :words="['Arya Stark', 'Jon Snow', 'Daenerys Targaryen', 'Melisandre', 'Tyrion Lannister']"> hello hi </LvTyper>
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
  font-size: 3rem;
}
</style>
