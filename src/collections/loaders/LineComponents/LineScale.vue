<template>
    <loader-base loader-name="line-scale" :child-count="5" v-bind="$attrs"/>
</template>

<script>
import LoaderBase from './../LoaderBase.vue';
import '../scss/animations/line-scale.scss';
export default {
    components:{
        LoaderBase
    }
}
</script>
