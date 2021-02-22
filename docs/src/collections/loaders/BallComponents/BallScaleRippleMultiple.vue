<template>
    <loader-base loader-name="ball-scale-ripple-multiple" :child-count="3" v-bind="$attrs" :border-color="color"/>
</template>

<script>
import LoaderBase from './../LoaderBase.vue';
import '../scss/animations/ball-scale-ripple-multiple.scss';
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
