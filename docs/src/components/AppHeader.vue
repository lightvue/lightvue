<template>
  <div class="app-header">
    <div class="header-items">
      <div class="header__logo-row">
        <i class="light-icon-align-left menu-icon" @click="$emit('toggle-drawer')"></i>
      </div>
      <div class="search-row">
        <div class="search-bar">
          <slot name="app-search"></slot>
        </div>
      </div>
      <div class="social__row">
        <!-- <LvToggleswitch @click="switchTheme" name='dark-theme-toggle' v-model="isDarkTheme" /> -->
          <!-- Version Selector -->
        
         <!-- Theme Selector -->
         <div class="dropdown">
          <div class="dropdown-btn">
            {{currentTheme}}
             <i class="light-icon-chevron-down"></i>
          </div>
          <div class="dropdown-content">
            <div class="dropdown-item" v-for="theme in themeList" @click="setTheme(theme)">{{theme.name}}</div>
          </div>
        </div>
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
</template>

<script>
import LvToggleswitch from 'lightvue/toggle-switch'
export default {
  data(){
    return{
      themeList:[ 
          {name:'🌕 Light',value:'light'},
          {name:'🌚 Dark', value:'dark'},
      ],
      currentTheme: "🌕 Light",  
    }
  },
  methods: {
    setTheme(theme){
        this.currentTheme = theme.name;
        document.documentElement.setAttribute('data-theme',theme.value);
    }
  },
  components: {
    LvToggleswitch
  }
};
</script>

<style scoped lang="scss">

.dropdown{
  position:relative;
  margin: auto;
}
.dropdown-btn{
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid var(--lightGray);
}

.dropdown-content{
  background: var(--background-color);
  width: 100%;
  display: none;
  position: absolute;
  left:0%; 
  overflow: hidden;
}

.dropdown-item{
  padding: 0.5rem 1rem;
  cursor: pointer;
}
.dropdown-item:hover{
  background: var(--input-field-bg);
  }

.dropdown-btn:hover{
  background: var(--input-field-bg);
}
.dropdown:hover .dropdown-content{
  display: block;
  border: 1px solid var(--lightGray);
  border-radius: 4px;
}
.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.app-header {
  background-color: var(--background-color);
  color:var(--text-color);
  padding: 0 24px;
  height: 60px;
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: space-between;
}

.header-items .menu-icon {
  // color: #333333;
  font-size: 30px;
  // font-weight: bolder;
  padding: 10px;
  border-radius: 50%;
  transition: 0.3s ease-in-out all;
  &:hover {
    background: var(--background-color-alt);
    color: var(--text-color);
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
  background: var(--input-field-bg);
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
  .header-social {
    font-size: 24px;
    margin-left: 12px;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: var(--text-color);
      padding: 10px;
      background: var(--background-color-alt);
    }
  }
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
  .social-row,
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
