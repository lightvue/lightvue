<template>
  <div :class="`sidebar ${showDrawer ? 'show-drawer' : ''}`" @click="$emit('toggle-drawer')">
    <div class="nav-list">
      <div class="sidebar__logo" @click="$router.push('/')">
        <img src="@/assets/logo_rect.png" class="header-logo" />
        <!-- <h3>&nbsp; LightVue</h3> -->
      </div>
      <div class="nav-list__nest">
        <h5 class="nav-list__head" v-if="contentShow" @click="contentShow = !contentShow"><i class="light-icon-bulb"></i> About</h5>
        <div v-else class="nav-list__container">
          <h5 class="nav-list__label" @click="contentShow = !contentShow"><i class="light-icon-bulb"></i> About</h5>
          <div class="dropdown__content">
            <!-- <div class="left___line"></div> -->
            <div class="sub-menu__link--wrapper">
              <div class="sub-menu__line"></div>
              <div class="sub-menu__bullet"></div>
              <nuxt-link to="/" class="nav-list__item">
                <div class="nav-list__label"><p>Home Page</p></div>
              </nuxt-link>
            </div>
            <div class="sub-menu__link--wrapper">
              <div class="sub-menu__line"></div>
              <div class="sub-menu__bullet"></div>
              <nuxt-link to="/" class="nav-list__item">
                <div class="nav-list__label"><p>Get Started</p></div>
              </nuxt-link>
            </div>
            <div class="sub-menu__link--wrapper">
              <div class="sub-menu__line"></div>
              <div class="sub-menu__bullet"></div>
              <nuxt-link to="/" class="nav-list__item">
                <div class="nav-list__label"><p>Sponsor Us</p></div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="nav-list__item">
        <div class="nav-list__label">Source Code</div>
      </div>
      <div class="nav-list__item">
        <div class="nav-list__label">Support</div>
      </div> -->
      <div class="nav-list__nest">
        <h5 class="nav-list__head"><i class="light-icon-clipboard"></i>FORM</h5>
        <div class="nav-list__container">
          <h5 class="nav-list__label"><i class="light-icon-clipboard"></i> FORM</h5>
          <nuxt-link to="/vue-components/button" class="nav-list__item">
            <div class="nav-list__label">Button</div>
          </nuxt-link>
          <nuxt-link to="/vue-components/checkbox" class="nav-list__item">
            <div class="nav-list__label">Checkbox</div>
          </nuxt-link>
          <nuxt-link to="/vue-components/colorpicker" class="nav-list__item">
            <div class="nav-list__label">Color Picker</div>
          </nuxt-link>
          <nuxt-link to="/vue-components/dropdown" class="nav-list__item">
            <div class="nav-list__label">Dropdown</div>
          </nuxt-link>
          <nuxt-link to="/vue-components/input" class="nav-list__item">
            <div class="nav-list__label">Input</div>
          </nuxt-link>
          <nuxt-link to="/vue-components/rating" class="nav-list__item">
            <div class="nav-list__label">Rating</div>
          </nuxt-link>
          <nuxt-link to="/vue-components/slider" class="nav-list__item">
            <div class="nav-list__label">Slider</div>
          </nuxt-link>
          <nuxt-link to="/vue-components/toggle-switch" class="nav-list__item">
            <div class="nav-list__label">Toggle Switch</div>
          </nuxt-link>
        </div>
      </div>
      <div class="nav-list__nest">
        <h5 class="nav-list__head"><i class="light-icon-brand-github"></i>LOADERS</h5>
        <div class="nav-list__container">
          <h5 class="nav-list__label"><i class="light-icon-brand-github"></i> LOADERS</h5>
          <nuxt-link to="/vue-components/progress-bar" class="nav-list__item">
            <div class="nav-list__label">Progress Bar</div>
          </nuxt-link>
          <nuxt-link to="/vue-components/progress-loader" class="nav-list__item">
            <div class="nav-list__label">Progress Loaders</div>
          </nuxt-link>
          <nuxt-link to="/vue-components/progress-spinner" class="nav-list__item">
            <div class="nav-list__label">Progress Spinners</div>
          </nuxt-link>
          <nuxt-link to="/vue-components/shimmer" class="nav-list__item">
            <div class="nav-list__label">Shimmers</div>
          </nuxt-link>
        </div>
        <div class="nav-list__nest">
          <h5 class="nav-list__head"><i class="light-icon-brand-github"></i>MISC</h5>
          <nuxt-link to="/vue-components/card" class="nav-list__item">
            <div class="nav-list__label">Card</div>
          </nuxt-link>
          <nuxt-link to="/vue-components/glassmorphic-card" class="nav-list__item">
            <div class="nav-list__label">Glassmorphic Card</div>
          </nuxt-link>
          <nuxt-link to="/vue-components/overlay-panel" class="nav-list__item">
            <div class="nav-list__label">Overlay Panel</div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showDrawer'],
  methods: {},
  data() {
    return {
      contentShow: false,
    };
  },
};
</script>

<style scoped lang="scss">
.sidebar {
  padding: 10px 0px;
  position: fixed;
  left: 0;
  top: 55px;
  height: calc(100% - 55px);
  // background-color: #ffffff;
  overflow: auto;
  width: 250px;
  // border-right: 1px solid #dee2e6;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: -webkit-transform 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);
  transition: -webkit-transform 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);
  transition: transform 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);
  transition: transform 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99), -webkit-transform 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);

  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  background: #405364;
  border: 1px solid #1f2a35;
}
.nav-list__nest {
  // border-radius: 3px;
  // background: #ececec;
  // margin-bottom: 10px;
  box-shadow: inset 7px 7px 100px #364453, inset -7px -7px 100px #485c71;
}
.nav-list__container {
  padding: 20px;
  // padding-bottom: 5px;
  border-radius: 0px;
  background: #3f5062;
  box-shadow: inset -2px 2px 8px #212a33, inset 2px -2px 7px #212a33;
  border-left: 5px solid #3edb9c;
}
.nav-list__item {
  text-indent: 20px;
  line-height: 40px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #fff;
    // background: #ffffff33;
  }
  p {
    text-indent: 10px;
  }
}
.nav-list {
  padding: 20px 0px;
  .nav-list__head {
    color: #f4fbfd;
    font-size: 14px;
    padding: 21px;
    margin: 0px;
    // margin: 25px 16px 10px 16px;
    // border-bottom: 1px solid #566d79;
    i {
      margin-right: 5px;
    }
    border-bottom: 1px solid #314254;
    border-top: 1px solid #516274;
  }
  .nuxt-link-exact-active {
    // // background-color: #e0e7ec;
    // // border-radius: 5px;
    // color: #697074;
    // text-decoration: underline;
  }
}
.nav-list__label {
  display: block;
  color: #fff;
  p {
    color: #bdc4c8;
    margin: 0px;
  }
}
.sidebar__logo {
  display: none;
  align-items: center;
  cursor: pointer;
  margin: 0px 0px 20px;
  .header-logo {
    width: 100%;
  }
}

.dropdown__content {
  border-left: 1px solid #57687a;
  margin-left: 8px;
}

.sub-menu__link--wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.sub-menu__line {
  width: 30px;
  border: 1px solid#57687A;
}

.sub-menu__bullet {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #57687a;
}

@media (max-width: 768px) {
  .sidebar {
    height: 100%;
    top: 0px;
    z-index: 999;
    transform: translateX(-100%);
    transition: all 0.3s ease-in-out;
  }
  .sidebar.show-drawer {
    transform: translateX(0px);
  }
  .menu-icon {
    display: none;
  }
  .sidebar__logo {
    display: flex;
  }
}
</style>
