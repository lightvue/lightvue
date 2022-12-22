<template>
  <div>
    <div class="badge__wrapper">
      <LvBadge class="--mr" variant="primary">primary</LvBadge>
      <LvBadge class="--mr" variant="secondary">secondary</LvBadge>
      <LvBadge class="--mr" variant="success">sucess</LvBadge>
      <LvBadge class="--mr" variant="info">info</LvBadge>
      <LvBadge class="--mr" variant="warning">warning</LvBadge>
      <LvBadge class="--mr" variant="help">help</LvBadge>
      <LvBadge class="--mr" variant="danger">danger</LvBadge>
      <LvBadge class="--mr" variant="plain">Plain</LvBadge>
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
