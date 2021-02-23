<template>
    <loader-base loader-name="ball-grid-pulse" :child-count="9" v-bind="$attrs"/>
</template>

<script>
import LoaderBase from './../LoaderBase.vue';
import '../scss/animations/ball-grid-pulse.scss';
export default {
    components:{
        LoaderBase
    }
}
</script>
