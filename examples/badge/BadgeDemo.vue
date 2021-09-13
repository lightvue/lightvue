<template>
  <div>
    <div class="badge">
      <div class="simple">
        <LvBadge primary class="--mr">primary</LvBadge>
        <LvBadge secondary rounded class="--mr">secondary</LvBadge>
        <LvBadge sucess class="--mr">sucess</LvBadge>
        <LvBadge danger class="--mr">danger</LvBadge>
        <LvBadge warning class="--mr">warning</LvBadge>
        <LvBadge info class="--mr">info</LvBadge>
        <LvBadge light class="--mr">light</LvBadge>
        <LvBadge dark class="--mr">dark</LvBadge>
      </div>

      <div class="corner__badge">
        <div class="--topbadge --mr5">
          Notification
          <LvBadge topRight danger>4</LvBadge>
        </div>
        <div class="--topbadge --mr5">
          Notification
          <LvBadge bottomLeft danger>4</LvBadge>
        </div>
        <div class="--topbadge --mr5">
          Notification
          <LvBadge topLeft danger>4</LvBadge>
        </div>
        <div class="--topbadge --mr5">
          Notification
          <LvBadge bottomRight danger>4</LvBadge>
        </div>
        <div class="--btn --mr5">
          <LvButton label="Submit" class="lv--primary" />
          <LvBadge bottomRight danger>4</LvBadge>
        </div>
      </div>
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
.simple {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.corner__badge {
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-top: 3rem;
}
.badge {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}
.--mr {
  margin-left: 4px;
}
.--mr5 {
  margin-left: 3rem;
}
.--topbadge {
  position: relative;
  padding: 0.25em 0.4em;
  color: white;
  background: #007bff;
}
.--btn {
  position: relative;
}
</style>
