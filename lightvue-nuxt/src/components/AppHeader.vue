<template>
  <div class="app-header">
    <div class="header-items">
      <i
        class="light-icon-menu-2 menu-icon"
        @click="$emit('toggle-drawer')"
      ></i>
      <div class="logo" @click="$router.push('/')">
        <img src="@/assets/logo.png" class="header-logo" />
        <h3>&nbsp; LightVue</h3>
      </div>
      <div class="icons__search-row">
        <div class="icons__search-bar">
          <input
            class="icons__search-input"
            placeholder="Search Icons"
            type="text"
          />
          <i class="light-icon-search search-icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.app-header {
  background-color: #ffffff;
  padding: 0 24px;
  height: 80px;
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
  justify-content: space-between;
}

.header-items i {
  color: #333333;
  font-size: 30px;
  font-weight: bolder;
  padding: 10px;
  border-radius: 50%;
  transition: 0.3s ease-in-out all;
  &:hover {
    background: #e0e0e0;
  }
}
.menu-icon {
  display: none;
}
.header-logo {
  width: 50px;
}
.icons__search-row {
  position: sticky;
  display: flex;

  top: 0px;
  margin: auto;
  padding: 40px 0;
  // background: #F5F8FA;
}
.icons__search-bar {
  position: relative;
  margin: 0 auto;
  width: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
.icons__search-input {
  outline: none;
  width: 100%;
  padding: 15px 40px 15px 20px;
  box-sizing: border-box;
  border: 0px;
  border-radius: 20px;
  transition: all 0.25s ease;
  background: #f5f8fa;
  &:focus {
    outline: none;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
  }
}
.search-icon {
  position: absolute;
  right: 15px;
  font-size: 1.5rem;
  transition: all 0.25s ease;
  opacity: 0.5;
}

@media (max-width: 768px) {
  .app-header {
    padding-left: 10px;
  }
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
