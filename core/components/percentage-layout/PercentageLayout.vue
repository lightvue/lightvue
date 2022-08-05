<template>
  <div>
    <div class="wrapper">
      <h5>Columns Settings</h5>
      <div class="columns-settings">
        <div class="section-wrapper">
          <div class="outside">
            <div class="sections"></div>
            <div class="sections"></div>
          </div>
        </div>
        <div class="section-wrapper">
          <div class="outside">
            <div class="sections" style="width: 6px"></div>
            <div class="sections" style="width: 6px"></div>
            <div class="sections" style="width: 6px"></div>
          </div>
        </div>
        <div class="section-wrapper">
          <div class="outside">
            <div class="sections" style="width: 4px"></div>
            <div class="sections" style="width: 4px"></div>
            <div class="sections" style="width: 4px"></div>
            <div class="sections" style="width: 4px"></div>
          </div>
        </div>
        <div class="section-wrapper">
          <div class="outside">
            <div class="sections"></div>
            <div class="sections" style="width: 16px"></div>
          </div>
        </div>
        <div class="section-wrapper">
          <div class="outside">
            <div class="sections" style="width: 16px"></div>
            <div class="sections"></div>
          </div>
        </div>
        <div class="section-wrapper">
          <div class="outside">
            <div class="sections" style="width: 4px"></div>
            <div class="sections" style="width: 10px"></div>
            <div class="sections" style="width: 4px"></div>
          </div>
        </div>
        <div class="section-wrapper">
          <div class="outside">
            <div class="sections" style="width: 2px"></div>
            <div class="sections" style="width: 4px"></div>
            <div class="sections" style="width: 10px"></div>
            <div class="sections" style="width: 2px"></div>
          </div>
        </div>
        <div class="section-wrapper">
          <div class="outside">
            <div class="sections" style="width: 2px"></div>
            <div class="sections" style="width: 2px"></div>
            <div class="sections" style="width: 2px"></div>
            <div class="sections" style="width: 12px"></div>
            <div class="sections" style="width: 2px"></div>
          </div>
        </div>
        <div class="section-wrapper">
          <div class="outside">
            <div class="sections" style="width: 2px"></div>
            <div class="sections" style="width: 2px"></div>
            <div class="sections" style="width: 2px"></div>
            <div class="sections" style="width: 2px"></div>
            <div class="sections" style="width: 2px"></div>
            <div class="sections" style="width: 2px"></div>
          </div>
        </div>
      </div>
      <!-- <br /> -->

      <h5>Customize</h5>
      <div class="columns">
        <div class="col"></div>
        <!-- <Splitpanes></Splitpanes> -->
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes';

export default {
  name: 'LvPercentageLayout',
  components: {
    Splitpanes,
    Pane,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  // border: 1px solid black;
  // height: 40px;
  // border-radius: 4px;
  padding: 10px;
}
.columns-settings {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
  cursor: pointer;
}
.section-wrapper {
  border: 1px solid #263846;
  height: 35px;
  width: 40px;
  background: #323c45;
  border-radius: 2px;
  &:hover {
    background: #2b2b2b;
  }
}
.outside {
  display: flex;
  justify-content: space-between;
  padding: 4px;
}
.sections {
  background: #c9cdce;
  height: 25px;
  width: 12px;
}
.columns {
  display: flex;
  justify-content: center;
}
.col {
  height: 28px;
  width: 43%;
  margin-right: 9px;
  background-color: #5e5e5e;
  border: 1px solid transparent;
  border-radius: 2px;
}
</style>
