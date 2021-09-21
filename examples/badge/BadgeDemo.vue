<template>
  <div>
    <div class="badge__wrapper">
      <LvBadge class="--mr lv--primary">primary</LvBadge>
      <LvBadge class="--mr lv--secondary">secondary</LvBadge>
      <LvBadge class="--mr lv--success">sucess</LvBadge>
      <LvBadge class="--mr lv--info">info</LvBadge>
      <LvBadge class="--mr lv--warning">warning</LvBadge>
      <LvBadge class="--mr lv--help">help</LvBadge>
      <LvBadge class="--mr lv--danger">danger</LvBadge>
      <LvBadge class="--mr lv--plain">Plain</LvBadge>
    </div>
  </div>
</template>
<script>
import LvBadge from 'lightvue/badge';
export default {
  components: {
    LvBadge,
  },
};
</script>
<style lang="scss" scoped>
.badge__wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.--mr {
  margin-left: 4px;
}
</style>
