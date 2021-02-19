<template>
    <loader-base loader-name="semi-circle-spin" :child-count="1" v-bind="$attrs"/>
</template>

<script>
import LoaderBase from './../LoaderBase.vue';
import '../scss/animations/semi-circle-spin.scss';
export default {
    components:{
        LoaderBase
    }
}
</script>
