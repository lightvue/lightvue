<template>
    <loader-base loader-name="ball-rotate" :child-count="1" v-bind="$attrs"/>
</template>

<script>
import LoaderBase from './../LoaderBase.vue';
import '../scss/animations/ball-rotate.scss';
export default {
    components:{
        LoaderBase
    }
}
</script>
