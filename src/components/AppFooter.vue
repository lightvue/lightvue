<template>
  <div class="layout-footer">
    <div class="layout-footer__row">
      Want to make some changes?
      <a href="#">
        You can suggest changes on GitHub
        <i class="light-icon-brand-github"></i>
      </a>
    </div>
    <div class="layout-footer__legal">
      <p class>Copyright 2021 © DIGI-K-LABS. All rights reserved.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-footer {
  padding: 0px 10px;
  color: #566d79;
  width: 100%;
  .layout-footer__div {
    border-top: 1px dotted #81a8bb;
    text-align: center;
    h5 {
      margin-bottom: 10px;
    }
    i {
      color: #81a8bb;
      font-size: 24px;
      padding: 10px;
      margin: 10px;
      margin-bottom: 0;
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
    padding: 10px 0;
    a {
      text-decoration: none;
      color: #3fc5be;
      &:hover {
        color: #39b4ad;
      }
    }
  }
  .layout-footer__legal {
    margin: 5px 100px;
    margin-bottom: 0;
    text-align: center;
    padding: 5px 5px;
    border-top: 1px dotted #81a8bb;
  }
}
</style>
