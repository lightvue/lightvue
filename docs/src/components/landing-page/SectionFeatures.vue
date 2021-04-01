<template>
  <section class="section-features">
    <div class="section-features__wrapper">
       <!-- <div class="section-features__content">
        <div class="section-features__content-heading">Light Vue </div>
        <br />
        <div class="section-features__content-description">UI Library hands out everything you need to create contemporary, engaging, and responsive web applications. A platform set to offer unlimited light customizable UI variants and an implementation playground to define how your components would like to and fro.</div>
        <br /><br />
        <lv-button :push="true" :deep-shadow="true" label="Know More" type="button" size="xl" class="section-button__customise" style="--theme-color: #143a56; --theme-color-dark: #194a70" />
      </div> -->
      <div class="section-features__feature-boxes">
       <div class="section-features__content-wrapper">
            <div class="section-features__content">
                <div class="section-features__content-heading">Light Vue </div>
                <br />
            <div class="section-features__content-description">UI Library hands out everything you need to create contemporary, engaging, and responsive web applications. A platform set to offer unlimited light customizable UI variants and an implementation playground to define how your components would like to and fro.</div>
                <br /><br />
                <lv-button :push="true" :deep-shadow="true" label="Know More" type="button" size="xl" class="section-button__customise" style="--theme-color: #143a56; --theme-color-dark: #194a70" />
            </div>
            <div class="section-features__single-box --first">
                <div class="single-box__icon"> <i class="light-icon-id"></i> </div>
                <div class="single-box__heading">Professional Design</div>
                <div class="single-box__description">Light Vue lines up an array of UI components to give your web Application a professional and elegant design.</div>
            </div>
        </div>
        <div>
          <div class="section-features__single-box">
           <div class="single-box__icon"><i class="light-icon-mist"></i></div>
           <div class="single-box__heading"> Light Weight</div>
           <div class="single-box__description">One of the lightest UI Library in the market for developing fast and powerful web interfaces.</div>
          </div>
          <div class="section-features__single-box">
           <div class="single-box__icon"> <i class="light-icon-palette"></i> </div>
           <div class="single-box__heading">Customizable</div>
           <div class="single-box__description">Structure your ideal design by choosing from countless customizable UI variants that Light Vue offers.</div>
          </div>
          <div class="section-features__single-box">
           <div class="single-box__icon"><i class="light-icon-devices"></i> </div>
           <div class="single-box__heading">Responsive</div>
           <div class="single-box__description">Create layouts which adapts and adjusts smoothly to various screen sizes.</div>
          </div>
        </div>
        <div>
          <div class="section-features__single-box">
           <div class="single-box__icon"> <i class="light-icon-social"></i> </div>
           <div class="single-box__heading">No Dependency</div>
           <div class="single-box__description">Light Vue offers zero dependency and most Web portable code that makes it reliable and fast.</div>
          </div>
          <div class="section-features__single-box">
           <div class="single-box__icon">  </div>
           <div class="single-box__heading">Modern Features</div>
           <div class="single-box__description">Light Vue offers zero dependency and most Web portable code that makes it reliable and fast.</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.section-features__wrapper {
  display: flex;
  position: relative;
  justify-content: space-around;
//   align-items: center;
  max-width: 1400px;
  margin: 100px auto;
  padding: 20px;

  .section-features__feature-boxes {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    z-index: 100;
    .section-features__content-wrapper{
        display: flex;
        flex-direction: column;
        width: 50%;
    }
    .section-features__single-box{
        width: 280px;
        // height: 250px;
        padding: 30px;
        margin: 20px;
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        border-radius: 8px;
        background: #ffffff;
        box-shadow:  16px 16px 32px #e8e8e8,
             -16px -16px 32px #ffffff;
        &.--first{
           align-self: flex-end;
        }
        .single-box__icon{
            height: 50px;
            width: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50px;
            background-color: #f1faf4;;
            margin-bottom: 1.5em;
            i{
                color: #00a3a0;
                font-size: 24px;
            }
        }
        .single-box__heading{
            font-size: 20px;
            margin-bottom: 1em;
            font-weight: 600;
            color: #143a56;
        }
        .single-box__description{
            font-size: 16px;
            opacity: 0.7;
            color: #143a56;
            // margin-bottom: 0.75em;
        }

    }
  }
  .section-features__content {
    // width: 50%;
    max-width: 600px;
    padding: 0px 30px;
    // margin-top: 100px;
    // text-align: right;
    z-index: 100;
    .section-features__content-heading {
      font-size: 28px;
      line-height: 48px;
      font-weight: 600;
      color: #143a56;
      margin-bottom: 0.5em;
    }
    .section-features__content-description {
      font-size: 16px;
      line-height: 26px;
      opacity: 0.7;
      color: #143a56;
      margin-bottom: 0.5em;
    }
  }
}

@media (max-width: 934px) {
  .section-features__wrapper {
    .section-features__content {
      .section-features__content-heading {
        font-size: 36px;
      }
    }
  }
}
@media (max-width: 768px) {
  .section-features__wrapper {
    flex-direction: column;
    margin: 0px;
    .section-features__image-wrapper {
      width: 100%;
      margin-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      .section-features__image {
        width: 350px;
      }
    }
    .section-features__background {
      display: none;
    }
    .section-features__content {
      width: 100%;
      text-align: left;
    }
  }
}
@media (max-width: 425px) {
  .section-features__wrapper {
    .section-features__image-wrapper {
      .section-features__image {
        width: 100%;
      }
    }
    .section-features__content {
      .section-features__content-heading {
        font-size: 28px;
      }
    }
  }
}
</style>
