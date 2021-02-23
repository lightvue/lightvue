<template>
    <loader-base loader-name="ball-spin-fade-loader" :child-count="8" v-bind="$attrs"/>
</template>

<script>
import LoaderBase from './../LoaderBase.vue';
import '../scss/animations/ball-spin-fade-loader.scss';
export default {
    components:{
        LoaderBase
    }
}
</script>
