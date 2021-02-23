<template>
    <loader-base loader-name="ball-triangle-path" :child-count="3" v-bind="$attrs" :border-color="color"/>
</template>

<script>
import LoaderBase from './../LoaderBase.vue';
import '../scss/animations/ball-triangle-path.scss';
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
