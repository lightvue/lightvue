<template>
  <div class="lv-demo_layout">
    <!--------------------- Top PopOver  ------------------------->
    <LvPopOver :offset="10" placement="top" :hover="true" backgroundColor="#F5F8F4">
      <template #anchor>
        <LvButton label="Top" class="lv--primary" />
      </template>
      <div>
      <h6>Top Popover</h6>
        <hr>
        <!-- <br/> -->
        <p>Popover show on top.</p>
      </div>
      <!-- <LvButton label="Submit" class="lv--primary" /> -->
    </LvPopOver>

    <!--------------------- Bottom PopOver  ------------------------->
    <LvPopOver :offset="10" placement="bottom" :hover="true" backgroundColor="#F5F8F4">
      <template #anchor>
        <LvButton label="Bottom" class="lv--primary" />
      </template>
      <!-- <div>
        <p>HP Pavilion Laptop</p>
        <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRiCFuvA1fxOBdcbiKZ8ld2NaIub5eaErI6f_6xZJbmoen7HSlEwhhZlj6ThvVG71oTC5_FBkT5D-dS0tqG54xzLnS_y_0LP5XwW2jBEmMITFfNiJ_QV5AwEg&usqp=CAc"/>
        
      </div>
      <br>
      <a href="https://www.hp.com/in-en/shop/hp-pavilion-laptop-14-dv2053tu-6k9c6pa.html?gclid=CjwKCAjwoMSWBhAdEiwAVJ2ndmUy8aFkIq8kmKFP6-dPeZu5SQL873dPL_p8pJZlFkrv4_2MYIWMYxoCumYQAvD_BwE&gclsrc=aw.ds" target="_blank">
      <LvButton label="Buy" class="lv--primary" />
      </a> -->
      <div>
      <h6 >Bottom Popover</h6>
        <hr>
        <!-- <br/> -->
        <p>Popover show on bottom.</p>
      </div>
    </LvPopOver>
    <!--------------------- Left PopOver  ------------------------->
    <LvPopOver :offset="10" placement="left" :hover="true" backgroundColor="#F5F8F4">
      <template #anchor>
        <LvButton label="Left" class="lv--primary" />
      </template>
      <!-- <div class="d-flex">
        <lv-input type="text" label="First Name" placeholder="Enter your first name" />
      </div> -->
      <div>
      <h6 >Left Popover</h6>
        <hr>
        <!-- <br/> -->
        <p>Popover show on left.</p>
      </div>
    </LvPopOver>
    <!--------------------- Right PopOver  ------------------------->
    <LvPopOver :offset="10" placement="right" :hover="true" backgroundColor="#F5F8F4">
      <template #anchor>
        <LvButton label="Right" class="lv--primary" />
      </template>
      <!-- <div>
      <h6 class="popover-demo--rightpopover">Newsletter Subscription</h6>
      <hr/>
      <br/>
      <lv-input type='email' placeholder="Email Address" bottomBar></lv-input>
      <br/>
      <LvButton label="Subscribe" class="lv--primary" style="width:-webkit-fill-available" />
      </div> -->

      <div>
      <h6 >Right Popover</h6>
        <hr>
        <!-- <br/> -->
        <p>Popover show on right.</p>
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
  display: flex;
  justify-content: space-between;
}
.popover-demo--rightpopover{
      text-align: center;
    color: #566d79;
}
</style>
