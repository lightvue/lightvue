<template>
    <loader-base loader-name="ball-zig-zag" :child-count="2" v-bind="$attrs"/>
</template>

<script>
import LoaderBase from './../LoaderBase.vue';
import '../scss/animations/ball-zig-zag.scss';
export default {
    components:{
        LoaderBase
    }
}
</script>
