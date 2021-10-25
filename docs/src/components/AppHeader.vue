<template>
  <div class="app-header">
    <div class="header-items">
       <div class="sidebar__logo" >
        <img src="/logo_v2.svg" class="header-logo" @click="$router.push('/')" />
        <!-- <h3>&nbsp; LightVue</h3> -->
      </div>
      <div class="lightvue--version">
        <div class="dropdown">
    Version
    <div class="dropdown-content">
      <ul>
        <li>0.4.8</li>
        <li @click="vue3">Vue2</li>
        <li @click="vue3">Vue3</li>
        
      </ul>
    </div>
  </div>
      </div>
      <div class="header__logo-row">
        <i class="light-icon-align-left menu-icon" @click="$emit('toggle-drawer')"></i>
      </div>
      <div class="search-row">
        <div class="search-bar">
          <AppSearch />
        </div>
      </div>
      <div class="social__row">
          <a href="https://github.com/lightvue/lightvue" target="_blank" class="social-links">
            <i class="header-social light-icon-brand-github"></i>
          </a>
          <a href="https://twitter.com/lightvue" class="social-links">
            <i class="header-social light-icon-brand-twitter"></i>
          </a>
          <!-- <a href="" class="social-links">
            <i class="header-social light-icon-brand-facebook"></i>
          </a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppSearch from '@/components/AppSearch';
export default {
  components: {
    AppSearch,
  },
  methods:{
  vue2(e) {
      console.log(window.location.href);
      let location = window.location.href.slice(22);
      console.log(location);
      window.location.href = 'https://lightvue.org/' + location;
    },
    vue3(e) {
      console.log(window.location.href);
      let location = window.location.href.slice(22);
      console.log(location);
      window.location.href = 'https://vue3.lightvue.org/' + location;
    },
}
};

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
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: space-between;
  z-index: 999999999;
}

.header-items .menu-icon {
  // color: #333333;
  font-size: 30px;
  // font-weight: bolder;
  padding: 10px;
  border-radius: 50%;
  transition: 0.3s ease-in-out all;
  &:hover {
    background: #e0e0e0;
  }
}
.header__logo-row {
  display: flex;
}
.menu-icon {
  display: none;
}
.header-logo {
  width: 50px;
}
.search-row {
  display: flex;
  margin: auto;
  padding: 40px 0;
}
.search-bar {
  position: relative;
  margin: 0 auto;
  width: 360px;
  display: flex;
  position: absolute;
  left: calc(50% - 180px);
  justify-content: center;
  z-index: 100;
  transition: all 0.5s;
}

.search-input {
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
.social-links {
  color: inherit;
  font-size: 25px;
  text-decoration: none;
}
.social__row {
  display: flex;
    align-items: center;
    justify-content: space-between;
    width: 6%;
  .header-social-icons__container {
    .header-social {
      font-size: 24px;
      padding: 10px;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: black;
        padding: 10px;
        background: #dfdfdf;
      }
    }
  }
}

.sidebar__logo {
  /* padding: 6px 32px; */
  /* height: 60px; */
  .header-logo {
    width: 60%;
    cursor: pointer;
  }
}
.dropdown {
    position: relative;
   
    font-size: 12px;
    margin-top: 1.5rem;
    font-weight: 600;
   margin-left: -8rem;

    cursor: pointer;
    
  }
 
  
  .dropdown-content {
    
    display: none;
    position: absolute;
    min-width: 87px;
    box-shadow: 0px 10px 16px 0px rgba(0, 0, 0, 0.2);
    z-index:1111;
    font-size: 12px;
   left: -2px;
    padding-top: 10px;
  }
  
  .dropdown:hover .dropdown-content {
    display: block;
  }
  
  .dropdown-content ul {
    list-style-type: none;
  }
  
  .dropdown-content li {
    padding: 10px 20px;
    cursor: pointer;
    background-color: #f9f9f9;
  }
  
  .dropdown-content li:nth-child(2n-1) {
    background-color: #e9e9e9;
  }
  
  .dropdown-content li:hover {
    background-color: #c9c9c9;
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
  .header-social-icons__container,
  .logo-text {
    display: none;
  }
  .search-bar {
    width: 250px;
  }
}
@media (max-width: 768px) {
  .search-bar {
    width: calc(100% - 90px);
    left: 80px;
  }
}
</style>
