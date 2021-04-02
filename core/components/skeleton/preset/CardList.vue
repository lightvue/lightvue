<template>
  <LvSkeleton v-bind="$attrs" viewBox="0 0 355 100">
    <rect x="4" y="8" rx="16" ry="16" width="7" height="86" />
    <rect x="6" y="8" rx="16" ry="16" width="675" height="8" />
    <rect x="6" y="86" rx="16" ry="16" width="669" height="8" />
    <rect x="350" y="8" rx="16" ry="16" width="6" height="86" />
    <rect x="25" y="25" rx="16" ry="16" width="200" height="50" />
    <rect x="240" y="25" rx="3" ry="3" width="100" height="10" />
    <rect x="240" y="45" rx="3" ry="3" width="100" height="10" />
    <rect x="240" y="65" rx="3" ry="3" width="100" height="10" />
  </LvSkeleton>
</template>

<script>
import LvSkeleton from 'lightvue/skeleton';
export default {
  components: {
    LvSkeleton,
  },
};
</script>
