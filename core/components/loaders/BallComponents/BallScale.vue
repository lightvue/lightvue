<template>
    <loader-base loader-name="ball-scale" :child-count="1" v-bind="$attrs"/>
</template>

<script>
import LoaderBase from './../LoaderBase.vue';
import '../scss/animations/ball-scale.scss';
export default {
    components:{
        LoaderBase
    }
}
</script>
