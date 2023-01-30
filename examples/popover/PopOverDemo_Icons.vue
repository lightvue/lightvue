<template>
  <div class="lv-demo_layout">


    <!--------------------- bulb PopOver  ------------------------->
    <LvPopOver :offset="10" placement="right" backgroundColor="#f5f8fa" >
      <template #anchor>
        <i class="light-icon-bulb icons bulb"></i>
      </template>
      

      <div style="color: #566d79;">
        List Items
        <ul class="table-view light-scrollbar">
          <li class="table-view-cell">Item1</li>
          <li class="table-view-cell">Item2</li>
          <li class="table-view-cell">Item3</li>
          <li class="table-view-cell">Item4</li>
          <li class="table-view-cell">Item5</li>
          <li class="table-view-cell">Item6</li>
          <li class="table-view-cell">Item7</li>
          <li class="table-view-cell">Item8</li>
        </ul>
      </div>

      
      
    </LvPopOver>

    <!--------------------- alert PopOver  ------------------------->
    <LvPopOver :offset="10" placement="bottom" backgroundColor="#FFAB26" padding="0px">
      <template #anchor>
        <i class="light-icon-alert-triangle icons alert" ></i>
      </template>
      <div class="header">
        Steps to use LightVue
      </div>
      <div class="wrapper">
        <ul>
          <li>Install <a href="https://lightvue.org/">LightVue</a>
            <pre>
// For Vue 2.x
npm install lightvue
// For Vue 3.x
npm install lightvue@next
            </pre>
          </li>
          <li>Register Components, as per need</li>
          
        </ul>
      </div>
    </LvPopOver>

  <!--------------------- github PopOver  ------------------------->
      <LvPopOver :offset="10" placement="left" backgroundColor="#008c7f" >
        <template #anchor>
          <i class="light-icon-brand-github icons github"></i>
        </template>
        <p>Clone Repository</p>
        <a href="https://github.com/lightvue/lightvue" target="_blank"><LvButton label="Visit" class="lv--plain" /></a>
        
        
      </LvPopOver>

    <!--------------------- Apps PopOver  ------------------------->

    <LvPopOver :offset="10" placement="top" backgroundColor="#ffffff">
      <template #anchor>
        <i class="light-icon-apps icons apps"></i>
      </template>
      <div style="background: #f0e7e74d; border-radius: 5px;">
        <div class="appcontent">
          <div class="appdraweritem">
          <i class="light-icon-search"></i>
          search
          </div>
          <div class="appdraweritem">
          <i class="light-icon-brand-google"></i>
          google
          </div>
          <div class="appdraweritem">
          <i class="light-icon-brand-google-drive"></i>
          drive
          </div>
          <div class="appdraweritem">
          <i class="light-icon-brand-instagram"></i>
          instagram
          </div>
          <div class="appdraweritem">
          <i class="light-icon-brand-linkedin"></i>
          linkedin
          </div>
          <div class="appdraweritem">
          <i class="light-icon-brand-snapchat"></i>
          snapchat
          </div>
        </div>
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
.popover-icon{
    font-size: 25px;
    background: #C9CDCE;
    padding: 5px;
    border-radius: 5px;
    color: #0D2131;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.05);
}
.header{
  display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
}
.wrapper{
  background: white;
  ul{
    list-style-type: square;
    margin-left: 25px;
    margin-right: 2px;
    // border: 1px solid;
  }
}
.alert{
  color: rgb(255, 171, 38);
  
}
.icons{
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
}
.apps{
  color: #0D2131;
}
.github{
  color: #323C45;

}
.bulb{
  color: #008080;

}

.table-view{
    max-height: 150px;
    margin-bottom: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    background-color: #fff;
    border-top: 0;
    border-bottom: 0;
    border-radius: 6px;
    .table-view-cell {
    border-bottom: 1px solid #ddd;
}
}
.table-view-cell {
    position: relative;
    padding: 11px 65px 11px 15px;
    overflow: hidden;
}
.appcontent{
  display: grid;
  grid-template-columns: repeat(2, 73px);
  grid-column-gap: 20px;
  grid-row-gap: 15px;
}
.appdraweritem{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #323C45;
  padding: 4px;
  // box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);

}
</style>
