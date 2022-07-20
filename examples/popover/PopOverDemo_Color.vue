<template>
  <div class="lv-demo_layout">
    <LvPopOver v-bind="allOptions" :offset="10" placement="top" backgroundColor="#fff">
      <template #anchor>
        <LvButton label="Top" class="lv--primary" />
      </template>
      <div style="width: 250px">
        <div class="header" style="color: #0d2131">
          <h5>PopOver</h5>
        </div>
        <div class="body" style="color: #0d2131">
          <p>The Popover component is similar to tooltips; it is a pop-up box that appears when the user clicks on an element. The difference is that the popover can contain much more content.</p>
        </div>
        <div class="footer">
          <LvButton label="Back" icon="light-icon-chevrons-left" outlined class="lv--info" style="width: 49%" />
          <LvButton label="Next" icon-right="light-icon-chevrons-right" class="lv--info" style="height: 32.8px; width: 49%" />
        </div>
      </div>
    </LvPopOver>

    <!----------------------------------------------------------------------->
    <LvPopOver :offset="10" placement="bottom" backgroundColor="#263846" padding="0px">
      <template #anchor>
        <LvButton label="Bottom" class="lv--primary" />
      </template>
      <div style="width: 250px">
        <div style="color: white; padding: 10px">
          <h6>Progress Bar</h6>
          <p>Progress Bar component can be used as a process status indicator for a time-consuming process.</p>
        </div>
        <div class="popOverDemo_color-progressBarBody">
          <LvButton label="Back" icon="light-icon-arrow-left-circle" class="lv--success" />
          <p style="color: white; margin: 0">3/7</p>
          <LvButton label="Next" icon-right="light-icon-arrow-right-circle" class="lv--success" />
        </div>
      </div>
    </LvPopOver>

    <!----------------------------------------------------------------------->

    <LvPopOver :offset="10" placement="left" :isVisible="visibility" backgroundColor="#F5F8F4" padding="0px">
      <template #anchor>
        <LvButton label="Left" class="lv--primary" />
      </template>
      <div style="width: 250px">
        <div style="color: #566d79; padding: 10px">
          <h6>Progress Spinners</h6>
          <p style="width: 200px">Progress spinner components can be used as a loading animations or space-fillers while waiting for the actual content to load.</p>
        </div>
        <div class="popOverDemo_color-progressSpinnerBtns">
          <LvButton label="Back" icon="light-icon-arrow-left-circle" class="lv--secondary" style="width: 40%" />
          <p style="color: white; margin: 0">3/7</p>
          <LvButton label="Next" icon-right="light-icon-arrow-right-circle" class="lv--secondary" style="width: 40%" />
        </div>
      </div>
    </LvPopOver>

    <!----------------------------------------------------------------------->

    <LvPopOver :offset="10" placement="right" backgroundColor="#C9CDCE" color="#fff">
      <template #anchor>
        <LvButton label="Right" class="lv--primary" />
      </template>
      <div style="color: #263846">
        <h5>HTML Embedded</h5>
        <p>tooltip content <u>inline HTML, images, iframe, videos, maps Through templates, </u>. A title can be added to the content can be loaded with</p>
      </div>
    </LvPopOver>
  </div>
</template>

<script>
import LvPopOver from 'lightvue/popover';

export default {
  components: {
    LvPopOver,
  },
  data() {
    return {
      visibility: false,
    };
  },
  methods: {
    toggleVisibility() {
      console.log(this.visibility, 'Changed');
      this.visibility = !this.visibility;

      // debugger;
    },
  },
};
</script>
<style lang="scss" scoped>
.lv-demo_layout {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.popOverDemo_color-progressBarBody {
  background: #323c45;
  height: 45px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
}
.popOverDemo_color-progressSpinnerBtns {
  height: 45px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
