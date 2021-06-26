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
          <!-- <div
            class="header-item --right"
            @click="drawer = !drawer"
          >
            <i class="light-icon-menu-2"></i>
          </div> -->
        </div>
      </div>

      <lv-drawer
        v-model="drawer"
        left
        headerTitle="Title Of Header"
        headerColor="#607c8a"
        close
        shadow
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
    height: 100%;
    width: 100%;
    .list {
      display: flex;
      flex-direction: column;
      & > div {
        padding: 10px 15px;
        color: black;
        cursor: pointer;
        &:active,
        &:hover {
          background-color: #607c8a9f;
          color: white;
        }
      }
    }
    .card {
      height: 100%;
      width: 50%;
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        background-color: #fff;
        .header-item {
          cursor: pointer;
          height: 100%;
          width: 50px;
          // color: white;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          i {
            font-size: 28px;
            font-weight: 700;
            color: #607c8a;
            &::before,
            &::after {
              vertical-align: initial;
            }
          }
          &:hover {
            i {
              color: #607c8abb;
            }
          }
        }
      }
    }
  }
}
</style>
