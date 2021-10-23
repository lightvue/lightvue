<template>
  <div class="typer">
      PROP:textColor="teal"<br/>
    <LvTyper :words="['Arya Stark', 'Jon Snow', 'Daenerys Targaryen', 'Melisandre', 'Tyrion Lannister']" textColor="teal" ></LvTyper></br>
    PROP:textColor="teal"<br/>
    <LvTyper :words="['Arya Stark', 'Jon Snow', 'Daenerys Targaryen', 'Melisandre', 'Tyrion Lannister']" fontSize="3rem" ></LvTyper></br>
    PROP:textColor="teal"<br/>
    <LvTyper :words="['Arya Stark', 'Jon Snow', 'Daenerys Targaryen', 'Melisandre', 'Tyrion Lannister']" fontWeight=700></LvTyper></br>
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
