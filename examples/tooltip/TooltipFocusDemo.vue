<template>
  <div class="lv-demo_layout">
    <input type="text" placeholder="Click to focus" v-tooltip.bottom.focus="'Tooltip message'" />
    <input type="text" placeholder="Click to focus" v-tooltip.top.focus="'Tooltip message'" />
  </div>
</template>

<script>
import Tooltip from 'lightvue/tooltip';
export default {
  directives: {
    tooltip: Tooltip,
  },
};
</script>

<style scoped>
.lv-demo_layout {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
input {
  padding: 8px;
  background-color: #edf2f7;
  border: none;
  width: 30%;
  border-radius: 4px;

  border: solid 3px rgba(0, 0, 0, 0);
  transition: all 0.2s;
}

.tooltip-example-wrapper > input::placeholder {
  opacity: 0.7;
}

.tooltip-example-wrapper > input:focus {
  outline: none;
  border: solid 3px rgba(0, 0, 0, 0.1);
}
</style>
