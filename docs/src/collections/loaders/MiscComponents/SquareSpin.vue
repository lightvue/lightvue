<template>
    <loader-base loader-name="square-spin" :child-count="1" v-bind="$attrs"/>
</template>

<script>
import LoaderBase from './../LoaderBase.vue';
import '../scss/animations/square-spin.scss';
export default {
    components:{
        LoaderBase
    }
}
</script>
