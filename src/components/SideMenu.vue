<template>
  <div :class="`sidebar ${showDrawer ? 'show-drawer' : ''}`" @click="$emit('toggle-drawer')">
    <div class="nav-list">
      <div class="sidebar__logo" @click="$router.push('/')">
        <img src="@/assets/logo_rect.png" class="header-logo" />
        <!-- <h3>&nbsp; LightVue</h3> -->
      </div>
      <div class="nav-list__nest">
        <h5 class="nav-list__head" v-if="hideAbout" @click="showAboutFn"><i class="light-icon-info-circle"></i>About<i class="nav-container--close light-icon-chevron-down"></i></h5>
        <div v-else class="nav-list__container">
          <h5 class="nav-list__label nav-list__label--head" @click="hideAbout = !hideAbout"><i class="light-icon-info-circle"></i> About <i class="nav-container--close light-icon-chevron-up"></i></h5>
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
        <h5 class="nav-list__head" v-if="hideForm" @click="showFormFn"><i class="light-icon-clipboard"></i>Form <i class="nav-container--close light-icon-chevron-down"></i></h5>
        <div class="nav-list__container" v-else>
          <h5 class="nav-list__label nav-list__label--head" @click="hideForm = !hideForm"><i class="light-icon-clipboard nav-container"></i> Form <i class="nav-container--close light-icon-chevron-up"></i></h5>
          <div class="dropdown__content">
            <div class="sub-menu__link--wrapper">
              <div class="sub-menu__line"></div>
              <div class="sub-menu__bullet"></div>
              <nuxt-link to="/vue-components/button" class="nav-list__item">
                <div class="nav-list__label"><p>Button</p></div>
              </nuxt-link>
            </div>
            <div class="sub-menu__link--wrapper">
              <div class="sub-menu__line"></div>
              <div class="sub-menu__bullet"></div>
              <nuxt-link to="/vue-components/checkbox" class="nav-list__item">
                <div class="nav-list__label"><p>CheckBox</p></div>
              </nuxt-link>
            </div>
            <div class="sub-menu__link--wrapper">
              <div class="sub-menu__line"></div>
              <div class="sub-menu__bullet"></div>
              <nuxt-link to="/vue-components/colorpicker" class="nav-list__item">
                <div class="nav-list__label"><p>Color Picker</p></div>
              </nuxt-link>
            </div>
            <div class="sub-menu__link--wrapper">
              <div class="sub-menu__line"></div>
              <div class="sub-menu__bullet"></div>
              <nuxt-link to="/vue-components/dropdown" class="nav-list__item">
                <div class="nav-list__label"><p>Dropdown</p></div>
              </nuxt-link>
            </div>
            <div class="sub-menu__link--wrapper">
              <div class="sub-menu__line"></div>
              <div class="sub-menu__bullet"></div>
              <nuxt-link to="/vue-components/input" class="nav-list__item">
                <div class="nav-list__label"><p>Input</p></div>
              </nuxt-link>
            </div>
            <div class="sub-menu__link--wrapper">
              <div class="sub-menu__line"></div>
              <div class="sub-menu__bullet"></div>
              <nuxt-link to="/vue-components/rating" class="nav-list__item">
                <div class="nav-list__label"><p>Rating</p></div>
              </nuxt-link>
            </div>
            <div class="sub-menu__link--wrapper">
              <div class="sub-menu__line"></div>
              <div class="sub-menu__bullet"></div>
              <nuxt-link to="/vue-components/slider" class="nav-list__item">
                <div class="nav-list__label"><p>Slider</p></div>
              </nuxt-link>
            </div>
            <div class="sub-menu__link--wrapper">
              <div class="sub-menu__line"></div>
              <div class="sub-menu__bullet"></div>
              <nuxt-link to="/vue-components/toggle-switch" class="nav-list__item">
                <div class="nav-list__label"><p>Toggle Switch</p></div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="nav-list__nest">
        <h5 class="nav-list__head" v-if="hideLoader" @click="showLoaderFn"><i class="light-icon-rotate-clockwise"></i>Loaders <i class="nav-container--close light-icon-chevron-down"></i></h5>
        <div class="nav-list__container" v-else>
          <h5 class="nav-list__label nav-list__label--head" @click="hideLoader = !hideLoader"><i class="light-icon-rotate-clockwise"></i> Loaders <i class="nav-container--close light-icon-chevron-up"></i></h5>
          <div class="dropdown__content">
            <div class="sub-menu__link--wrapper">
              <div class="sub-menu__line"></div>
              <div class="sub-menu__bullet"></div>
              <nuxt-link to="/vue-components/progress-bar" class="nav-list__item">
                <div class="nav-list__label"><p>Progress Bar</p></div>
              </nuxt-link>
            </div>
            <div class="sub-menu__link--wrapper">
              <div class="sub-menu__line"></div>
              <div class="sub-menu__bullet"></div>
              <nuxt-link to="/vue-components/progress-loader" class="nav-list__item">
                <div class="nav-list__label"><p>Progress Loaders</p></div>
              </nuxt-link>
            </div>
            <div class="sub-menu__link--wrapper">
              <div class="sub-menu__line"></div>
              <div class="sub-menu__bullet"></div>
              <nuxt-link to="/vue-components/progress-spinner" class="nav-list__item">
                <div class="nav-list__label"><p>Progress Spinners</p></div>
              </nuxt-link>
            </div>
            <div class="sub-menu__link--wrapper">
              <div class="sub-menu__line"></div>
              <div class="sub-menu__bullet"></div>
              <nuxt-link to="/vue-components/shimmer" class="nav-list__item">
                <div class="nav-list__label"><p>Shimmers</p></div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="nav-list__nest">
          <h5 class="nav-list__head" v-if="hideMisc" @click="showMiscFn"><i class="light-icon-square-plus"></i>Misc. <i class="nav-container--close light-icon-chevron-down"></i></h5>
          <div class="nav-list__container" v-else>
            <h5 class="nav-list__label nav-list__label--head" @click="hideMisc = !hideMisc"><i class="light-icon-square-plus"></i> Misc. <i class="nav-container--close light-icon-chevron-up"></i></h5>
            <div class="dropdown__content">
              <div class="sub-menu__link--wrapper">
                <div class="sub-menu__line"></div>
                <div class="sub-menu__bullet"></div>
                <nuxt-link to="/vue-components/card" class="nav-list__item">
                  <div class="nav-list__label"><p>Cards</p></div>
                </nuxt-link>
              </div>
              <div class="sub-menu__link--wrapper">
                <div class="sub-menu__line"></div>
                <div class="sub-menu__bullet"></div>
                <nuxt-link to="/vue-components/glassmorphic-card" class="nav-list__item">
                  <div class="nav-list__label"><p>Glassmorphic Card</p></div>
                </nuxt-link>
              </div>
              <div class="sub-menu__link--wrapper">
                <div class="sub-menu__line"></div>
                <div class="sub-menu__bullet"></div>
                <nuxt-link to="/vue-components/overlay-panel" class="nav-list__item">
                  <div class="nav-list__label"><p>Overlay Panel</p></div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showDrawer'],
  methods: {
    showAboutFn() {
      this.hideAbout = false;
      this.hideForm = true;
      this.hideLoader = true;
      this.hideMisc = true;
    },
    showFormFn() {
      this.hideAbout = true;
      this.hideForm = false;
      this.hideLoader = true;
      this.hideMisc = true;
    },
    showLoaderFn() {
      this.hideAbout = true;
      this.hideForm = true;
      this.hideLoader = false;
      this.hideMisc = true;
    },
    showMiscFn() {
      this.hideAbout = true;
      this.hideForm = true;
      this.hideLoader = true;
      this.hideMisc = false;
    },
  },
  data() {
    return {
      hideAbout: true,
      hideForm: false,
      hideLoader: true,
      hideMisc: true,
    };
  },
};
</script>

<style scoped lang="scss">
.sidebar {
  position: fixed;
  left: 0;
  height: 100%;
  overflow: auto;
  width: 250px;
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
  z-index: 1000;
}
.nav-list__nest {
  box-shadow: inset 7px 7px 100px #364453, inset -7px -7px 100px #485c71;
}
.nav-list__container {
  padding: 20px;
  border-radius: 0px;
  background: #3f5062;
  box-shadow: inset 0px 0px 1px #212a33, inset 0px 0px 2px #212a33;
  border-left: 5px solid #3edb9c;
}
.nav-list__item {
  text-indent: 20px;
  line-height: 40px;
  cursor: pointer;
  color: #bdc4c8;
  &:hover,
  &:focus {
    // color: #fff;
    // background: #ffffff33;
  }
  p {
    text-indent: 10px;
  }
}

.nav-list__label--head {
  color: #fafbff;
  cursor: pointer;
}
.nav-list {
  padding: 20px 0px;
  .nav-list__head {
    cursor: pointer;
    color: #f4fbfd;
    font-size: 18px;
    padding: 21px;
    margin: 0px;
    i {
      margin-right: 5px;
      font-size: 18px;
    }
    border-bottom: 1px solid #314254;
    border-top: 1px solid #516274;
  }
  .nuxt-link-active {
    // // background-color: #e0e7ec;
    // // border-radius: 5px;
    color: #38b2ac;
    font-weight: bolder;
  }
}
.nav-container--close {
  position: absolute;
  cursor: pointer;
  font-size: 24px;
  right: 20px;
}
.nav-list__label {
  display: block;
  // color: #bdc4c8;
  &:hover,
  &:focus {
    color: #3edb9c;
  }
  p {
    margin: 0px;
  }
}
.sidebar__logo {
  // display: none;
  align-items: center;
  cursor: pointer;
  // margin: 0px 0px 20px;
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
  width: 20px;
  border-bottom: 1px solid #566779;
}

.sub-menu__bullet {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #566779;
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
