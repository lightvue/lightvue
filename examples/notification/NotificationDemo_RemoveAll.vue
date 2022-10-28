<template>
  <div>
    <LvButton @click="clear" label="Clear" />
  </div>
</template>

<script>
export default {
  methods: {
    clear() {
      this.$notification.removeAllGroups();
    },
  },
};
</script>
<style lang="scss" scoped>
.--mr-4 {
  margin-right: 8px;
  margin-top: 3px;
}
</style>
