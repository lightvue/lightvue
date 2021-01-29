<template>
  <div class="layout-footer">
    <div class="layout-footer__row">
      Want to make some changes?
      <a href="#"
        >You can suggest changes on GitHub
        <i class="light-icon-brand-github"></i>
      </a>
    </div>
    <div class="layout-footer__div">
      <div class="layout-footer__row">
        <span>LightVue</span>, a product of
        <a href="https://www.digiklabs.com">DIGI-K LABS</a>
      </div>

      <div class="layout-footer__row">
        <h5 class="footer-bold">Follow For More Updates</h5>
        <a href="https://github.com/lightvue" class="p-mr-3">
          <i class="light-icon-brand-github"></i>
        </a>
        <a href="https://twitter.com/lightvue">
          <i class="light-icon-brand-twitter"></i>
        </a>
      </div>
    </div>
    <div class="layout-footer__legal">
      <p class>Copyright © 2021 DIGI-K-LABS. All rights reserved.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-footer {
  margin-top: 40px;
  padding: 30px 10px;
  color: #566d79;
  width: 100%;
  .layout-footer__div {
    border-top: 1px dotted #81a8bb;
    text-align: center;
    h5 {
      margin-bottom: 15px;
    }
    i {
      color: #81a8bb;
      font-size: 24px;
      padding: 10px;
      margin: 10px;
      border-radius: 50%;
      transition: 0.4s all ease-in-out;
      &:hover {
        color: #2e83ad;
        background: #e6e6e6;
      }
    }
  }
  .layout-footer__row {
    // text-align: center;
    padding: 20px 0;
    a {
      text-decoration: none;
      color: #3fc5be;
      &:hover {
        color: #39b4ad;
      }
    }
  }
  .layout-footer__legal {
    margin: 30px 100px;
    text-align: center;
    padding: 20px 5px;
    border-top: 1px dotted #81a8bb;
  }
}
</style>
