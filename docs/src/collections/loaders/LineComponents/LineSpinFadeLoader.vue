<template>
    <loader-base loader-name="line-spin-fade-loader" :child-count="8" v-bind="$attrs"/>
</template>

<script>
import LoaderBase from './../LoaderBase.vue';
import '../scss/animations/line-spin-fade-loader.scss';
export default {
    components:{
        LoaderBase
    }
}
</script>
