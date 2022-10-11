<template>
  <div class="app-footer">
    <!-- <div class="app-footer__row">
      Want to make some changes?
      <a href="#">
        You can suggest changes on GitHub
        <i class="light-icon-brand-github"></i>
      </a>
    </div> -->
    <div class="app-footer__text">
      Copyright {{ currentYear }} © LightVue. All rights reserved. <br /><br />
      <!-- <b>Improve this page on <i class="light-icon-brand-github"></i> GitHub</b> <br /> -->
    </div>
  </div>
</template>
<script>
import { DateUtils } from 'lightvue/utils';
export default {
  data() {
    return {
      currentYear: DateUtils?.getCurrentYear() || 2022,
    };
  },
};
</script>
<style lang="scss">
.app-footer {
  padding: 0px 30px;
  .app-footer__text {
    padding: 12px 0px;
    font-size: 13px;
    opacity: 0.6;
    text-align: center;
    border-top: 1px dotted #81a8bb;
    i {
      font-size: 12px;
      font-weight: bold;
    }
  }

  // .app-footer__div {
  //   border-top: 1px dotted #81a8bb;
  //   text-align: center;
  //   h5 {
  //     margin-bottom: 10px;
  //   }
  //   i {
  //     color: #81a8bb;
  //     font-size: 24px;
  //     padding: 10px;
  //     margin: 10px;
  //     margin-bottom: 0;
  //     border-radius: 50%;
  //     transition: 0.4s all ease-in-out;
  //     &:hover {
  //       color: #2e83ad;
  //       background: #e6e6e6;
  //     }
  //   }
  // }
  // .app-footer__row {
  //   // text-align: center;
  //   padding: 10px 0;
  //   a {
  //     text-decoration: none;
  //     color: #3fc5be;
  //     &:hover {
  //       color: #39b4ad;
  //     }
  //   }
  // }
}
</style>
