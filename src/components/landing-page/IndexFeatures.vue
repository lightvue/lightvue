<template>
  <div class="features-wrapper" id="features">
    <div class="features-container">
      <div class="features-row">
        <h2 class="features-heading">Why Light-Vue?</h2>
      </div>
      <div class="features-div-container">
        <!-- <div class="features-div">
          <div class="features-icon-div">
            <i class="light-icon-bolt"></i>
          </div>
          <div class="features-content">
            <h3 class="features-content__heading">Light Weight</h3>
            <p class="features-content__subtext">As the name suggest, lightVue is Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div class="features-div">
          <div class="features-icon-div">
            <i class="light-icon-layers-difference"></i>
          </div>
          <div class="features-content">
            <h3 class="features-content__heading">Customizable</h3>
            <p class="features-content__subtext">Light Vue is very easy to customize and allows users to build the theme according to their likings.</p>
          </div>
        </div>
        <div class="features-div">
          <div class="features-icon-div">
            <i class="light-icon-brand-github"></i>
          </div>
          <div class="features-content">
            <h3 class="features-content__heading">Open Source</h3>
            <p class="features-content__subtext">Light Vue is open source and Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolorem consequuntur. Fugit illo provident expedita.</p>
          </div>
        </div>
        <div class="features-div">
          <div class="features-icon-div">
            <i class="light-icon-brand-github"></i>
          </div>
          <div class="features-content">
            <h3 class="features-content__heading">No External Dependencies</h3>
            <p class="features-content__subtext">Light Vue is open source and Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolorem consequuntur. Fugit illo provident expedita.</p>
          </div>
        </div>
        <div class="features-div">
          <div class="features-icon-div">
            <i class="light-icon-brand-github"></i>
          </div>
          <div class="features-content">
            <h3 class="features-content__heading">Professional Looking</h3>
            <p class="features-content__subtext">Light Vue is open source and Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolorem consequuntur. Fugit illo provident expedita.</p>
          </div>
        </div> -->
        <LvCard class="features-div" borderRadius="8px" padding="30px" shadowStyle="6">
          <!-- <div class="features-div"> -->
          <div class="features-icon-div">
            <i class="light-icon-mist"></i>
          </div>
          <div class="features-content">
            <h3 class="features-content__heading">Light Weight</h3>
            <p class="features-content__subtext">As the name suggest, lightVue is one of the lightest UI component library in the market.</p>
          </div>
          <!-- </div> -->
        </LvCard>
        <LvCard class="features-div" borderRadius="8px" padding="30px" shadowStyle="6">
          <!-- <div class="features-div"> -->
          <div class="features-icon-div">
            <i class="light-icon-palette"></i>
          </div>
          <div class="features-content">
            <h3 class="features-content__heading">Customizable</h3>
            <p class="features-content__subtext">Light Vue is very easy to customize and allows users to build the theme according to their likings.</p>
          </div>
          <!-- </div> -->
        </LvCard>
        <LvCard class="features-div" borderRadius="8px" padding="30px" shadowStyle="6">
          <!-- <div class="features-div"> -->
          <div class="features-icon-div">
            <i class="light-icon-brand-github"></i>
          </div>
          <div class="features-content">
            <h3 class="features-content__heading">Open Source</h3>
            <p class="features-content__subtext">Light Vue is open source and Devs can give their suggestions and changes on our github repository.</p>
          </div>
          <!-- </div> -->
        </LvCard>
        <LvCard class="features-div" borderRadius="8px" padding="30px" shadowStyle="6">
          <!-- <div class="features-div"> -->
          <div class="features-icon-div">
            <i class="light-icon-id"></i>
          </div>
          <div class="features-content">
            <h3 class="features-content__heading">Professional Looking</h3>
            <p class="features-content__subtext">LightVue makes your web app or website look professional and elegant.</p>
          </div>
          <!-- </div> -->
        </LvCard>
        <LvCard class="features-div" borderRadius="8px" padding="30px" shadowStyle="6">
          <!-- <div class="features-div"> -->
          <div class="features-icon-div">
            <i class="light-icon-social"></i>
          </div>
          <div class="features-content">
            <h3 class="features-content__heading">No Dependency</h3>
            <p class="features-content__subtext">LightVue has 0 external dependency that makes it very reliable and fast.</p>
          </div>
          <!-- </div> -->
        </LvCard>
        <LvCard class="features-div" borderRadius="8px" padding="30px" shadowStyle="6">
          <!-- <div class="features-div"> -->
          <div class="features-icon-div">
            <i class="light-icon-devices"></i>
          </div>
          <div class="features-content">
            <h3 class="features-content__heading">Responsive</h3>
            <p class="features-content__subtext">With lightVue the user can build web applications which are ready to use on any device.</p>
          </div>
          <!-- </div> -->
        </LvCard>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.features-wrapper {
  padding-bottom: 120px;
  .features-container {
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    color: #585858;
    .features-row {
      margin-bottom: 30px;
      .features-heading {
        text-align: center;
        font-size: 50px;
        margin-top: 22px;
        margin-bottom: 11px;
      }
    }
  }
  .features-div-container {
    padding: 0 50px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    .features-div {
      width: 350px;
      height: 250px;
      margin: 20px;
      background: #ffffff;
      // border-radius: 8px;
      // box-shadow: 0 1px 3px 0 #0000001a, 0 1px 2px 0 #0000000f;
      // padding: 30px;
      border-color: #e2e8f0;
      transition: all 0.5s;
      &:hover {
        box-shadow: 0 8px 8px rgba(0, 0, 0, 0.25);
        transform: translateY(-3px);
      }
      i {
        color: #607c8a;
      }
      .features-content__heading {
        color: #607c8a;
      }
    }
    .features-icon-div {
      display: flex;
      justify-content: center;
      i {
        padding: 10px;
        background: #44bebc;
        color: #ffffff;
        border-radius: 50%;
        font-size: 28px;
        transition: all 0.3s;
        // font-weight: bolder;
      }
    }
    .features-content {
      .features-content__heading {
        color: #354152;
        text-align: center;
        font-size: 26px;
        line-height: 1.2;
        margin-top: 16px;
        margin-bottom: 8px;
      }
      .features-content__subtext {
        color: #535a66;
        // text-align: center;
        font-size: 18px;
        line-height: 2rem;
      }
    }
  }
}
@media (max-width: 768px) {
  .features-wrapper {
    padding: 80px 0px;
  }
  .features-div-container {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .features-div {
    width: 100vw !important;
    &:hover {
      border-color: rgba(0, 0, 0, 0) !important;
    }
  }
}

@media (max-width: 435px) {
  .features-wrapper {
    .features-container {
      .features-row {
        .features-heading {
          font-size: 38px;
        }
      }
    }
  }
}

@media only screen and (min-width: 2000px) {
  .features-heading {
    padding-top: 175px;
  }
}
</style>
