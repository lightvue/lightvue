<template>
  <div :class="`sidebar ${showDrawer ? 'show-drawer' : ''}`" @click="$emit('toggle-drawer')">
    <div class="nav-list">
      <div class="sidebar__logo" @click="$router.push('/')">
        <img src="@/assets/logo_rect.png" class="header-logo" />
        <!-- <h3>&nbsp; LightVue</h3> -->
      </div>
      <div class="nav-list__nest">
        <h5 class="nav-list__head"><i class="light-icon-bulb"></i> About</h5>
        <div class="nav-list__container">
          <nuxt-link to="/" class="nav-list__item">
            <div class="nav-list__label">Home Page</div>
          </nuxt-link>
          <nuxt-link to="/" class="nav-list__item">
            <div class="nav-list__label">Get Started</div>
          </nuxt-link>
          <nuxt-link to="/" class="nav-list__item">
            <div class="nav-list__label">Sponser Us</div>
          </nuxt-link>
        </div>
      </div>
      <!-- <div class="nav-list__item">
        <div class="nav-list__label">Source Code</div>
      </div>
      <div class="nav-list__item">
        <div class="nav-list__label">Support</div>
      </div> -->
      <div class="nav-list__nest">
        <h5 class="nav-list__head"><i class="light-icon-clipboard"></i>Form Items</h5>
        <nuxt-link to="/vue-components/input" class="nav-list__item">
          <div class="nav-list__label">InputDemo</div>
        </nuxt-link>
        <nuxt-link to="/vue-components/button" class="nav-list__item">
          <div class="nav-list__label">Buttons</div>
        </nuxt-link>
        <nuxt-link to="/vue-components/card" class="nav-list__item">
          <div class="nav-list__label">Card</div>
        </nuxt-link>
        <nuxt-link to="/vue-components/checkbox" class="nav-list__item">
          <div class="nav-list__label">CheckBox</div>
        </nuxt-link>
        <nuxt-link to="/vue-components/ColorPicker" class="nav-list__item">
          <div class="nav-list__label">Color Picker</div>
        </nuxt-link>
        <nuxt-link to="/vue-components/dropdown" class="nav-list__item">
          <div class="nav-list__label">Dropdown</div>
        </nuxt-link>
      </div>
      <div class="nav-list__nest">
        <h5 class="nav-list__head"><i class="light-icon-brand-github"></i>Form Items</h5>
        <nuxt-link to="/vue-components/loaders" class="nav-list__item">
          <div class="nav-list__label">Loaders</div>
        </nuxt-link>
        <nuxt-link to="/vue-components/overlay-panel" class="nav-list__item">
          <div class="nav-list__label">Overlay Panel</div>
        </nuxt-link>
        <nuxt-link to="/vue-components/progress-bar" class="nav-list__item">
          <div class="nav-list__label">Peogress Bar</div>
        </nuxt-link>
        <nuxt-link to="/vue-components/progress-loader" class="nav-list__item">
          <div class="nav-list__label">Progress Loader</div>
        </nuxt-link>
        <nuxt-link to="/vue-components/progress-spinner" class="nav-list__item">
          <div class="nav-list__label">Progress Spinner</div>
        </nuxt-link>
        <nuxt-link to="/vue-components/rating" class="nav-list__item">
          <div class="nav-list__label">Rating</div>
        </nuxt-link>
        <nuxt-link to="/vue-components/toggle-switch" class="nav-list__item">
          <div class="nav-list__label">Toggle Switch</div>
        </nuxt-link>
        <nuxt-link to="/vue-components/buttons" class="nav-list__item">
          <div class="nav-list__label">Buttons</div>
        </nuxt-link>
        <nuxt-link to="/vue-components/shimmers" class="nav-list__item">
          <div class="nav-list__label">Shimmers</div>
        </nuxt-link>
        <nuxt-link to="/vue-components/glass-card" class="nav-list__item">
          <div class="nav-list__label">Glass Card</div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showDrawer'],
  methods: {},
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
}
.nav-list__nest {
  // border-radius: 3px;
  // background: #ececec;
  margin-bottom: 10px;
  box-shadow: inset 7px 7px 100px #364453, inset -7px -7px 100px #485c71;
}
.nav-list__container {
  // padding: 10px;
  padding-bottom: 5px;
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
}
.nav-list {
  padding: 20px 0px;
  .nav-list__head {
    color: #f4fbfd;
    font-size: 14px;
    padding: 20px 20px 0 20px;
    // margin: 25px 16px 10px 16px;
    // border-bottom: 1px solid #566d79;
    i {
      margin-right: 5px;
      display: none;
    }
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
  color: #ffffff;
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
