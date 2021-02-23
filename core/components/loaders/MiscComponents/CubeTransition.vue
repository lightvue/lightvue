<template>
    <loader-base loader-name="cube-transition" :child-count="2" v-bind="$attrs"/>
</template>

<script>
import LoaderBase from './../LoaderBase.vue';
import '../scss/animations/cube-transition.scss';
export default {
    components:{
        LoaderBase
    }
}
</script>
