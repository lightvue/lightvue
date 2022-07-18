<template>
  <div class="lv-demo_layout">
    <!--------------------- Top PopOver  ------------------------->
    <LvPopOver v-bind="allOptions" :offset="10" placement="top" backgroundColor="#CEC9C9">
      <template #anchor>
        <LvButton label="Top" class="lv--primary" />
      </template>
      <div style="color:#566d79">
        <h6 >Top Popover</h6>
        <hr>
        <!-- <br/> -->
        <p>Popover show on top.</p>
      </div>
      <!-- <br> -->
      <LvButton label="Submit" class="lv--primary" />
    </LvPopOver>


    <!--------------------- Bottom PopOver  ------------------------->
    <LvPopOver :offset="10" placement="bottom" backgroundColor="#C9CDCE">
      <template #anchor>
        <LvButton label="Bottom" class="lv--plain" />
      </template>
      <LvButton label="Sign in" class="lv--success" />
      <br/>
      <br>
      <div>New Customer? <a href="#"> Start here </a></div>
    </LvPopOver>


    <!--------------------- Left PopOver  ------------------------->
    <LvPopOver :offset="10" placement="left" :isVisible="visibility" color="#263846">
      <template #anchor>
        <LvButton label="Left" class="lv--info" />
      </template>
      <strong>LightVue</strong>
      <iframe src="https://lightvue.org/" title="The Emerging UI Component Library" width="225" height="150" > 
</iframe>
    </LvPopOver>


    <!--------------------- Right PopOver  ------------------------->
    <LvPopOver :offset="10" placement="right" backgroundColor="#ffb300" color="#fff">
      <template #anchor>
        <LvButton label="Right" class="lv--help" />
      </template>
      <div>
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
.d-flex {
  width: auto;
  // display: flex;
  // justify-content: space-between;
}
.backgroundColor{
      margin-top: -26px;
    margin-left: 26px;
}
.popover-demo--rightpopover{
      text-align: center;
    // color: #566d79;
}
</style>
