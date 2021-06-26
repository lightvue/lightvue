<template>
  <div class="drawer-opener-container">
    <div class="drawer-wrapper">
      <div class="card">
        <div class="card-header">
          <div
            class="header-item --left"
            @click="drawer = !drawer"
          >
            <i class="light-icon-menu-2"></i>
          </div>
          <div
            class="header-item --right"
            @click="drawer = !drawer"
          >
            <i class="light-icon-menu-2"></i>
          </div>
        </div>
      </div>

      <lv-drawer
        v-model="drawer"
        left
        headerTitle="Title Of Header"
        headerColor="#fff"
        close
        shadow
        headerBackground="#762CFF"
        background="#fff"
        :zIndex="1000"
      >
        <!-- :customStyle="{backdropFilter:'blur(20px)'}" -->
        <!-- wrappedClose -->
        <template>
          <div class="list">
            <div class="list-item">Item 1</div>
            <div class="list-item">Item 2</div>
            <div class="list-item">Item 3</div>
            <div class="list-item">Item 1</div>
            <div class="list-item">Item 2</div>
            <div class="list-item">Item 3</div>
            <div class="list-item">Item 1</div>
            <div class="list-item">Item 2</div>
            <div class="list-item">Item 3</div>
            <div class="list-item">Item 2</div>
            <div class="list-item">Item 3</div>
            <div class="list-item">Item 1</div>
            <div class="list-item">Item 2</div>
            <div class="list-item">Item 3</div>
          </div>
        </template>
      </lv-drawer>
    </div>
  </div>
</template>

<script>
import LvDrawer from 'lightvue/drawer';
export default {
  components: { LvDrawer },
  data() {
    return {
      items: [
        { name: 'Dashboard', icon: 'arrow-right' },
        { name: 'Photos', icon: 'arrow-right' },
        { name: 'About', icon: 'arrow-right' },
      ],
      right: null,
      drawer: false,
      group: null,
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.drawer-opener-container {
  height: 100%;
  width: 100%;
  margin: auto;
  .drawer-wrapper {
    position: relative;
    height: 500px;
    width: 100%;
    .list {
      display: flex;
      flex-direction: column;
      & > div {
        padding: 10px 15px;
        color: black;
        &:active {
          background-color: #762cff5b;
          color: white;
        }
      }
    }
    .card {
      height: 100%;
      width: 100%;
      overflow: hidden;
      // padding: 15px;
      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        background-image: linear-gradient(to bottom right, #2c4bff, #762cff);
        //   padding: 15px;
        .header-item {
          background-color: rgba(0, 0, 0, 0.13);
          padding: 15px;
          cursor: pointer;
          height: 100%;
          color: white;
          font-size: 25px;
          i {
            &::before,
            &::after {
              vertical-align: initial;
            }
          }
          &:hover {
            background-color: rgba(0, 0, 0, 0.459);
          }
        }
      }
    }
  }
}
</style>
