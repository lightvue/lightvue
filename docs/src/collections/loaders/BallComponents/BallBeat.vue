<template>
    <loader-base loader-name="ball-beat" :child-count="3" v-bind="$attrs"/>
</template>

<script>
import LoaderBase from './../LoaderBase.vue';
import '../scss/animations/ball-beat.scss';
export default {
    components:{
        LoaderBase
    }
}
</script>
