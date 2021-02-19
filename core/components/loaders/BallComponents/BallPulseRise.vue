<template>
    <loader-base loader-name="ball-pulse-rise" :child-count="5" v-bind="$attrs"/>
</template>

<script>
import LoaderBase from './../LoaderBase.vue';
import '../scss/animations/ball-pulse-rise.scss';
export default {
    components:{
        LoaderBase
    }
}
</script>
