<template>
    <loader-base loader-name="ball-grid-beat" :child-count="9" v-bind="$attrs"/>
</template>

<script>
import LoaderBase from './../LoaderBase.vue';
import '../scss/animations/ball-grid-beat.scss';
export default {
    components:{
        LoaderBase
    }
}
</script>
