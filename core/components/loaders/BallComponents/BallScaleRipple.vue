<template>
    <loader-base loader-name="ball-scale-ripple" :child-count="1" v-bind="$attrs" :border-color="color"/>
</template>

<script>
import LoaderBase from './../LoaderBase.vue';
import '../scss/animations/ball-scale-ripple.scss';
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
