<template>
    <loader-base loader-name="ball-scale-multiple" :child-count="3" v-bind="$attrs"/>
</template>

<script>
import LoaderBase from './../LoaderBase.vue';
export default {
    components:{
        LoaderBase
    }
}
</script>
