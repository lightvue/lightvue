<template>
  <div class="api-table__wrap">
    <div class="api-table --slots">
      <div class="api-table__header">
        <div class="api-table__cell --name">Slots</div>
        <div class="api-table__cell">Description</div>
      </div>
      <div
        class="api-table__row"
        v-for="slot in slotsList"
        :key="slot.name"
      >
        <div class="api-table__cell --name">{{ slot.name }}</div>
        <div class="api-table__cell --description">
          {{ slot.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["slotsList"],
};
</script>
