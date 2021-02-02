<template>
    <loader-base loader-name="pacman" :child-count="5" v-bind="$attrs"/>
</template>

<script>
import LoaderBase from './../LoaderBase.vue';
import '../scss/animations/pacman.scss';
export default {
    components:{
        LoaderBase
    }
}
</script>
