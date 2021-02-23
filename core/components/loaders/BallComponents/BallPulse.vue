<template>
    <loader-base loader-name="ball-pulse" :child-count="3" v-bind="$attrs"/>
</template>

<script>
import LoaderBase from './../LoaderBase.vue';
import '../scss/animations/ball-pulse.scss';
export default {
    components:{
        LoaderBase
    }
}
</script>
