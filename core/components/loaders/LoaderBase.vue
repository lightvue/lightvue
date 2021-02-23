<template>
    <div class="loader-inner" :class="loaderName" :style="`transform: scale(${scale})`">
        <div v-for="i in childCount" :key="i" :style="`background-color: ${color}; border-color: ${borderColor}`"></div>
    </div>
</template>

<script>
import './scss/_variables.scss';
import './scss/_mixins.scss';
export default {
    loaderName: 'ball-beat',
    childCount: 3,
    props:{
        loaderName: {
            type: String,
            required: true
        },
        childCount: {
            type: Number,
            required: true
        },
        color: {
            type: String,
        },
        borderColor: {
            type: String,
        },
        scale: {
            type: [String, Number]
        }
    }
}
</script>

<style>
.loader-inner{
    display: inline-block;
}

</style>