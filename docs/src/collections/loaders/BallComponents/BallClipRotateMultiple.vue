<template>
    <loader-base loader-name="ball-clip-rotate-multiple" :child-count="2" v-bind="$attrs" :border-color="color"/>
</template>

<script>
import LoaderBase from './../LoaderBase.vue';
import '../scss/animations/ball-scale-multiple.scss';
export default {
    components:{
        LoaderBase
    },
    props: {
        color: {
            type: String,
        }
    }
}
</script>
