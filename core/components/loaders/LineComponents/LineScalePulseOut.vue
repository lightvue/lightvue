<template>
    <loader-base loader-name="line-scale-pulse-out" :child-count="5" v-bind="$attrs"/>
</template>

<script>
import LoaderBase from './../LoaderBase.vue';
import '../scss/animations/line-scale-pulse-out.scss';
export default {
    components:{
        LoaderBase
    }
}
</script>
