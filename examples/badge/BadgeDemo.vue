<template>
  <div>
    <div class="badge__wrapper">
      <LvBadge class="--mr" color="primary">primary</LvBadge>
      <LvBadge class="--mr" color="secondary">secondary</LvBadge>
      <LvBadge class="--mr" color="success">sucess</LvBadge>
      <LvBadge class="--mr" color="info">info</LvBadge>
      <LvBadge class="--mr" color="warning">warning</LvBadge>
      <LvBadge class="--mr" color="help">help</LvBadge>
      <LvBadge class="--mr" color="danger">danger</LvBadge>
      <LvBadge class="--mr" color="plain">Plain</LvBadge>
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
  gap: 1rem;
  flex-wrap: wrap;
}
.--mr {
  margin-left: 4px;
}
</style>
