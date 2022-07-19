<template>
  <div class="lv-demo_layout">
    <!--------------------- Top PopOver  ------------------------->
    <LvPopOver :offset="10" placement="top" :hover="true" backgroundColor="#F5F8F4">
      <template #anchor>
        <LvButton label="Top" class="lv--primary" />
      </template>
      <div>
      <h6>Top Popover</h6>
        <hr>
        <!-- <br/> -->
        <p>Popover show on top.</p>
      </div>
    </LvPopOver>

    <!--------------------- Bottom PopOver  ------------------------->
    <LvPopOver :offset="10" placement="bottom" :hover="true" backgroundColor="#F5F8F4">
      <template #anchor>
        <LvButton label="Bottom" class="lv--primary" />
      </template>
      <div>
      <h6 >Bottom Popover</h6>
        <hr>
        <!-- <br/> -->
        <p>Popover show on bottom.</p>
      </div>
    </LvPopOver>
    <!--------------------- Left PopOver  ------------------------->
    <LvPopOver :offset="10" placement="left" :hover="true" backgroundColor="#F5F8F4">
      <template #anchor>
        <LvButton label="Left" class="lv--primary" />
      </template>
      
      <div>
      <h6 >Left Popover</h6>
        <hr>
        <!-- <br/> -->
        <p>Popover show on left.</p>
      </div>
    </LvPopOver>
    <!--------------------- Right PopOver  ------------------------->
    <LvPopOver :offset="10" placement="right" :hover="true" backgroundColor="#F5F8F4">
      <template #anchor>
        <LvButton label="Right" class="lv--primary" />
      </template>
      <div>
      <h6 >Right Popover</h6>
        <hr>
        <!-- <br/> -->
        <p>Popover show on right.</p>
      </div>
    </LvPopOver>
  </div>
</template>

<script>
import LvPopOver from 'lightvue/popover';
export default {
  components: {
    LvPopOver,
  },
};
</script>
<style lang="scss" scoped>
.lv-demo_layout {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.d-flex {
  width: auto;
  display: flex;
  justify-content: space-between;
}
.popover-demo--rightpopover{
      text-align: center;
    color: #566d79;
}
</style>
