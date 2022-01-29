<template>
  <div class="lv-animate" :class="animationClass">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name:'LvAnimate',
  props: {
    name: {
      type: String,default:"fadeIn"
    }
  },
  data() {
    return {
      animations: {
        //Fade ins
      fadeIn:'lv-animate__fade-in',
      fadeInLeft:'lv-animate__fade-in--left',
      fadeInRight:'lv-animate__fade-in--right',
      fadeInTop:'lv-animate__fade-in--top',
      fadeInBottom:'lv-animate__fade-in--bottom',
      //Fade outs
      fadeOut:'lv-animate__fade-out',
      fadeOutLeft:'lv-animate__fade-in--out',
      fadeOutRight:'lv-animate__fade-in--out',
      fadeOutTop:'lv-animate__fade-in--out',
      fadeOutBottom:'lv-animate__fade-in--out',
       //Slide ins
      slideInLeft:'lv-animate__slide-in--left',
      slideInRight:'lv-animate__slide-in--right',
      slideInTop:'lv-animate__slide-in--top',
      slideInBottom:'lv-animate__slide-in--bottom',
      //Slide Outs
      slideOutLeft:'lv-animate__slide-out--left',
      slideOutRight:'lv-animate__slide-out--right',
      slideOutTop:'lv-animate__slide-out--top',
      slideOutBottom:'lv-animate__slide-out--bottom',
      //Zoom outs
      zoomIn:'lv-animate__zoom-in',
      zoomOut:'lv-animate__zoom-out',
    }
      }
  },
  computed:{
    animationClass(){
      return this.animations[`${this.name}`] 
    }
  }
 
}
</script>

<style lang="scss">
//Fix for zoom effects
.lv-animate{
  display: flex;
  align-items: center; 
  justify-content: center;
  max-width: fit-content;
  max-height: fit-content;
}
</style>