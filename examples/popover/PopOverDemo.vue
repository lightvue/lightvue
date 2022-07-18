<template>
  <div class="lv-demo_layout">
    <!--------------------- Top PopOver  ------------------------->
    <LvPopOver v-bind="allOptions" :offset="10" placement="top" backgroundColor="#F5F8F4">
      <template #anchor>
        <LvButton label="Top" class="lv--primary" />
      </template>
      <div>
        <p>HP Pavilion Laptop</p>
        <div>
        <img src="@/assets/images/demo/laptop.jpg" alt="laptop" height="150px" />
        </div>
        
      </div>
      <br>
      <a href="https://www.hp.com/in-en/shop/hp-pavilion-laptop-14-dv2053tu-6k9c6pa.html?gclid=CjwKCAjwoMSWBhAdEiwAVJ2ndmUy8aFkIq8kmKFP6-dPeZu5SQL873dPL_p8pJZlFkrv4_2MYIWMYxoCumYQAvD_BwE&gclsrc=aw.ds" target="_blank">
      <LvButton label="Buy" class="lv--primary" />
      </a> 
      <!-- <br> -->
      <!-- <LvButton label="Submit" class="lv--primary" /> -->
    </LvPopOver>


    <!--------------------- Bottom PopOver  ------------------------->
    <LvPopOver :offset="10" placement="bottom" backgroundColor="#C9CDCE">
      <template #anchor>
        <LvButton label="Bottom" class="lv--primary" />
      </template>
      <LvButton label="Sign in" class="lv--success" />
      <br/>
      <br>
      <div>New Customer? <a href="#"> Start here </a></div>
    </LvPopOver>


    <!--------------------- Left PopOver  ------------------------->
    <LvPopOver :offset="10" placement="left" :isVisible="visibility">
      <template #anchor>
        <LvButton label="Left" class="lv--primary" />
      </template>
      <div class="d-flex">
        <lv-input type="text" label="First Name" placeholder="Enter your first name" bottomBar/>
        <br>
        <lv-input type="text" label="Last Name" placeholder="Enter your last name" bottomBar/>
        <br>
        <lv-input type="text" label="Email" placeholder="Enter your Email" bottomBar/>
        <br>
        <LvButton label="Submit" class="lv--success" />


      </div>
    </LvPopOver>


    <!--------------------- Right PopOver  ------------------------->
    <LvPopOver :offset="10" placement="right">
      <template #anchor>
        <LvButton label="Right" class="lv--primary" />
      </template>
      <div>
      <h6 class="popover-demo--rightpopover">Newsletter Subscription</h6>
      <hr/>
      <br/>
      <lv-input type='email' placeholder="Email Address" bottomBar></lv-input>
      <br/>
      <LvButton label="Subscribe" class="lv--primary" style="width:-webkit-fill-available" />
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
    color: #566d79;
}
</style>
