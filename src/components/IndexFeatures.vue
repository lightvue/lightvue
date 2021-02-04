<template>
  <div class="features-wrapper">
    <div class="features-container">
      <div class="features-row">
        <h2 class="features-heading">Why Light-Vue?</h2>
      </div>
      <div class="features-div-container">
        <div class="features-div">
          <div class="features-icon-div">
            <i class="light-icon-bolt"></i>
          </div>
          <div class="features-content">
            <h3 class="features-content__heading">Light Weight</h3>
            <p class="features-content__subtext">Light Vue is only xyz kb in size and if the user want, they can import the desired components instead of importing the whole UI library.</p>
          </div>
        </div>
        <div class="features-div">
          <div class="features-icon-div">
            <i class="light-icon-layers-difference"></i>
          </div>
          <div class="features-content">
            <h3 class="features-content__heading">Customizable</h3>
            <p class="features-content__subtext">Light Vue is very easy to costumize and allows user to build the theme according to their likings.</p>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.features-wrapper {
  padding: 200px 0px;
  .features-container {
    max-width: 1600px;
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
    display: flex;
    flex-basis: 33%;
    justify-content: space-between;
    .features-div {
      width: 33.33vw;
      padding: 30px;
      margin: 10px;
      border: 1px solid;
      border-color: rgba(0, 0, 0, 0);
      border-radius: 12px;
      transition: all 0.3s;
      &:hover {
        transform: scale(1.15);
        border-color: rgba(0, 0, 0, 0.5);
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
          font-size: 60px;
          transition: all 0.3s;
          font-weight: bolder;
        }
      }
      .features-content {
        .features-content__heading {
          text-align: center;
          font-size: 26px;
          transition: all 0.3s;
          font-weight: 900;
          line-height: 1.1;
          margin-top: 22px;
          margin-bottom: 11px;
        }
        .features-content__subtext {
          text-align: center;
          font-size: 17px;
          line-height: 1.6rem;
        }
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
</style>
