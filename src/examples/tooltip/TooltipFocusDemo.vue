<template>
        <div class="tooltip-example-wrapper">
            <div>
                <LvInput type="text" placeholder="Click to focus" v-tooltip.bottom.focus="'Tooltip message'" />
            </div>
            <div>
                <LvInput type="text" placeholder="Click to focus" v-tooltip.top.focus="'Tooltip message'" />
            </div>
        </div>
</template>

<script>
import Tooltip from '@/collections/tooltip/Tooltip';
export default {
    directives: {
        'tooltip': Tooltip
    }
}

</script>

<style scoped>
.tooltip-example-wrapper > div {
    display: inline-block;
    width: 40%;
    min-width: 300px;
    margin-left: 100px;
    margin-bottom: 60px;
}
</style>