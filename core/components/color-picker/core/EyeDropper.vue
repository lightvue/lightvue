<template>
  <div class="color-dropper">
    <i class="light-icon-droplet" @click="setup"></i>
  </div>
</template>

<script>
export default {
  name: 'EyeDropper',
  data() {
    return {
      active: false,
      pickedColor: '#ffffff',
    };
  },
  methods: {
    setup(e) {
      this.active = true;
      if (window.EyeDropper === undefined) {
        console.log('Unsupported!');
        return;
      } else {
        this.pickColor(e);
      }
    },
    async pickColor(event) {
      let eyeDropper = new EyeDropper();

      try {
        let pickedColor = await eyeDropper.open();
        console.log(pickedColor.sRGBHex);
        this.pickedColor = pickedColor.sRGBHex;
        this.$emit('change', this.pickedColor);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.color-dropper {
  font-size: 1.8rem;
}
</style>
