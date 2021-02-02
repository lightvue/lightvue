<template>
    <loader-base loader-name="ball-zig-zag-deflect" :child-count="2" v-bind="$attrs"/>
</template>

<script>
import LoaderBase from './../LoaderBase.vue';
import '../scss/animations/ball-zig-zag-deflect.scss';
export default {
    components:{
        LoaderBase
    }
}
</script>
