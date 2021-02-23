<template>
  <stop
        :offset="offset"
        :stop-color="stopColor"
        :stop-opacity="stopOpacity"
    >
        <animate
            attributeName="offset"
            :values="values"
            :dur="dur"
            repeatCount="indefinite"
            v-if="animate"
        />
    </stop>
</template>

<script>
export default {
    props:['offset', 'stopColor', 'stopOpacity', 'dur', 'animate', 'values']

}
</script>
