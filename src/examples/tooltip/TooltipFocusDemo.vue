<template>
        <div class="tooltip-example-wrapper">
            <!-- <div>
                <LvInput type="text" placeholder="Click to focus" v-tooltip.bottom.focus="'Tooltip message'" />
            </div> -->
            <div>
                <input type="text" placeholder="Click to focus" v-tooltip.bottom.focus="'Tooltip message'" />
            </div>
            <div>
                <input type="text" placeholder="Click to focus" v-tooltip.top.focus="'Tooltip message'" />
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

.tooltip-example-wrapper > div input {
    padding: 8px;
    background-color: #edf2f7;
    border: none;
    width: 100%;
    border-radius: 4px;
    border: solid 3px rgba(0,0,0,0);
    transition: all 0.2s;
}

.tooltip-example-wrapper > div input::placeholder {
    opacity: 0.7;
}

.tooltip-example-wrapper > div input:focus {
    outline: none;
    border: solid 3px rgba(0,0,0,0.1);
}

</style>