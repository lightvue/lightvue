<template>
  <section class="lightvue-pricing">
    <div class="lightvue-pricing__section-heading">Choose your Plan</div>
    <div class="lightvue-pricing__section-description">Select from one of our options below to experiance the superior interface</div>
    <div class="lightvue-pricing__table-wrapper">
      <div class="lightvue-pricing__column --features">
        <div class="lightvue-pricing__list-item">Form Elements</div>
        <div class="lightvue-pricing__list-item">Directives</div>
        <div class="lightvue-pricing__list-item">Cards</div>
        <div class="lightvue-pricing__list-item">Loaders</div>
        <div class="lightvue-pricing__list-item">Unlimited Customization</div>
        <div class="lightvue-pricing__list-item">independent build</div>
        <div class="lightvue-pricing__list-item">Light icons</div>
        <div class="lightvue-pricing__list-item">Early updates</div>
      </div>
      <div class="lightvue-pricing__column --selected-price-column">
        <div class="lightvue-pricing__list-item-header">
          <div class="lightvue-pricing__column-heading --teal">Free Trial</div>
          <div class="lightvue-pricing__column-price">
            <!-- <span class="column-price__value">FREE</span> -->
            <lv-button :push="true" :deep-shadow="true" label="Get Started Free" size="l" type="button" class="pricing-button__styles" />
          </div>
        </div>
        <div class="lightvue-pricing__list-item"><i class="light-icon-check --green"></i></div>
        <div class="lightvue-pricing__list-item"><i class="light-icon-check --green"></i></div>
        <div class="lightvue-pricing__list-item"><i class="light-icon-check --green"></i></div>
        <div class="lightvue-pricing__list-item"><i class="light-icon-check --green"></i></div>
        <div class="lightvue-pricing__list-item"><i class="light-icon-x --red"></i></div>
        <div class="lightvue-pricing__list-item"><i class="light-icon-x --red"></i></div>
        <div class="lightvue-pricing__list-item"><i class="light-icon-x --red"></i></div>
        <div class="lightvue-pricing__list-item"><i class="light-icon-x --red"></i></div>
      </div>
      <!-- <div class="lightvue-pricing__column --selected-price-column">
        <div class="lightvue-pricing__list-item-header">
          <div class="lightvue-pricing__column-heading">Pro</div>
          <div class="lightvue-pricing__column-price">$20<span class="column-price__value">/month</span></div>
        </div>
        <div class="lightvue-pricing__list-item"><i class="light-icon-check --green"></i></div>
        <div class="lightvue-pricing__list-item"><i class="light-icon-check --green"></i></div>
        <div class="lightvue-pricing__list-item"><i class="light-icon-check --green"></i></div>
        <div class="lightvue-pricing__list-item"><i class="light-icon-check --green"></i></div>
        <div class="lightvue-pricing__list-item"><i class="light-icon-check --green"></i></div>
        <div class="lightvue-pricing__list-item"><i class="light-icon-x"></i></div>
        <div class="lightvue-pricing__list-item"><i class="light-icon-x"></i></div>
        <div class="lightvue-pricing__list-item"><i class="light-icon-x"></i></div>
      </div> -->
      <div class="lightvue-pricing__column --selected-price-column">
        <div class="lightvue-pricing__list-item-header">
          <div class="lightvue-pricing__column-heading --dark">Enterprise</div>
          <div class="lightvue-pricing__column-price">
            <!-- $50<span class="column-price__value">/month</span> -->
            <lv-button :push="true" :deep-shadow="true" class="pricing-button__styles" label="Contact us" size="l" type="button" style="--lv-theme-color: #143a56; --lv-theme-color-dark: #194a70" />
          </div>
        </div>
        <div class="lightvue-pricing__list-item"><i class="light-icon-check --green"></i></div>
        <div class="lightvue-pricing__list-item"><i class="light-icon-check --green"></i></div>
        <div class="lightvue-pricing__list-item"><i class="light-icon-check --green"></i></div>
        <div class="lightvue-pricing__list-item"><i class="light-icon-check --green"></i></div>
        <div class="lightvue-pricing__list-item"><i class="light-icon-check --green"></i></div>
        <div class="lightvue-pricing__list-item"><i class="light-icon-check --green"></i></div>
        <div class="lightvue-pricing__list-item"><i class="light-icon-check --green"></i></div>
        <div class="lightvue-pricing__list-item"><i class="light-icon-check --green"></i></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.lightvue-pricing__section-heading {
  font-size: 48px;
  color: #143a56;
  font-weight: 600;
  margin: 200px 0px 30px 0px;
  text-align: center;
}
.lightvue-pricing__section-description {
  font-size: 20px;
  color: #143a56;
  text-align: center;
  margin-bottom: 100px;
}
.lightvue-pricing__table-wrapper {
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;

  .lightvue-pricing__column {
    width: 300px;
    padding: 20px;
    text-align: center;
    font-size: 18px;
    &.--selected-price-column {
      &:hover {
        padding: 21px;
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 16px 16px 42px 0 rgba(23, 18, 63, 0.12);
      }
    }
    &.--features {
      padding-top: 170px;
      text-align: left;
    }
    .lightvue-pricing__list-item-header {
      height: 140px;
      .lightvue-pricing__column-heading {
        font-size: 28px;
        line-height: 30px;
        font-weight: 700;
        &.--teal {
          color: #008080;
        }
        &.--dark {
          color: #143a56;
        }
      }
      .pricing-button__styles {
        height: 40px;
        width: 200px;
      }
      .lightvue-pricing__column-price {
        margin-top: 30px;
        margin-bottom: 10px;
        color: #231d4f;
        font-size: 42px;
        line-height: 44px;
        font-weight: 700;
        .column-price__value {
          color: #848199;
          font-size: 22px;
        }
      }
    }
    .lightvue-pricing__list-item {
      padding: 20px 5px;
      height: 70px;
      color: #143a56;
      font-weight: 600;
      i {
        font-size: 20px;
        font-weight: 800;
        &.--green {
          color: #006500;
        }
        &.--red {
          color: #cb0000;
        }
      }
    }
  }
}
</style>
