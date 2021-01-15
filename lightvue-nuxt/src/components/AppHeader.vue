<template>
  <div class="app-header">
    <div class="header-items">
      <i class="light-icon-menu-2 menu-icon" @click="$emit('toggle-drawer')"></i>
      <div class="logo" @click="$router.push('/')">
        <img src="@/assets/logo.png" class="header-logo" />
        <h3>&nbsp; LightVue</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.app-header {
  background-color: #ffffff;
  padding: 0 24px;
  height: 55px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 997;
  -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  /* border-bottom: 1px solid #dee2e6; */
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.header-items {
  display: flex;
  align-items: center;
}

.header-items i {
  color: #000000;
  font-size: 24px;
}
.menu-icon {
  display: none;
}
.header-logo {
  width: 50px;
}

@media (max-width: 768px) {
  .menu-icon {
    display: inline-block;
    margin-right: 12px;
    cursor: pointer;
  }
  /* .header-logo {
    width: 35px;
  } */
}
</style>
