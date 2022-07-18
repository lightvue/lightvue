<template>
  <div class="lv-demo_layout">
    <!--------------------- cut PopOver  ------------------------->
    <LvPopOver :offset="10" placement="top" backgroundColor="#CEC9C9" color="#0D2131">
      <template #anchor>
        <i class="light-icon-cut popover-icon"></i>
      </template>
      <div >
        <p>Cut (Ctrl + X)</p>
        <p>Remove the selection and put it on the Clipboard so you can paste it somewhere else.</p>
      </div>
      <!-- <br> -->
      <!-- <LvButton label="Submit" class="lv--primary" /> -->
    </LvPopOver>


    <!--------------------- copy PopOver  ------------------------->
    <LvPopOver :offset="10" placement="bottom" backgroundColor="#C9CDCE" hover="true" color="blue">
      <template #anchor>
        <i class="light-icon-copy popover-icon"></i>
      </template>
      <p>Copy (Ctrl+C)</p>
      <p>Put a copy of a selection on the Clipboard so you can paste it somewhere else.</p>
    </LvPopOver>


    <!--------------------- clipboard PopOver  ------------------------->

    <LvPopOver :offset="10" placement="right" backgroundColor="#008080" hover="true" color="#fff">
      <template #anchor>
        <i class="light-icon-clipboard  popover-icon"></i>
      </template>
      <p>Paste (Ctrl+V)</p>
      <p>Add content on the Clipboard to your document</p>
     
    </LvPopOver>


    <!--------------------- bold PopOver  ------------------------->
    <LvPopOver :offset="10" placement="left" backgroundColor="#ffb300" color="#fff">
      <template #anchor>
        <i class="light-icon-bold popover-icon"></i>
      </template>
      <p>Bold (Ctrl+B)</p>
      <p>Makes your text bold.</p>
      
    </LvPopOver>

    <!--------------------- italic PopOver  ------------------------->
    <LvPopOver :offset="10" placement="right" backgroundColor="#607d8b" hover="true" color="#fff">
      <template #anchor>
        <i class="light-icon-italic popover-icon"></i>
      </template>
      <p>Italic (Ctrl+I)</p>
      <p>Italicize your text.</p>
      
    </LvPopOver>

    <!--------------------- Underline PopOver  ------------------------->
    <LvPopOver :offset="10" placement="left" backgroundColor="#38b2ac" hover="true" color="#fff">
      <template #anchor>
        <i class="light-icon-underline popover-icon"></i>
      </template>
      <p>Underline (Ctrl+U)</p>
      <p>Underline your text</p>
     
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
    color: #566d79;
}
.popover-icon{
    font-size: 25px;
    background: #C9CDCE;
    padding: 5px;
    border-radius: 5px;
    color: #0D2131;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.05);
}
</style>
