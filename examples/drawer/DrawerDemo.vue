<template>
  <div class="drawer-opener-container">
    <h3>Relative to the window</h3>
    props: {absolute: false} default
    <div class="drawer-wrapper">
      <div class="card">
        <div class="card-header">
          <div
            class="header-item --left"
            @click="drawer1 = !drawer1"
          >
            <i class="light-icon-menu-2"></i>
          </div>
        </div>
      </div>
      <lv-drawer
        v-model="drawer1"
        left
        headerTitle="Title Of Header"
        headerColor="#607c8a"
        close
        shadow
        background="#fff"
        :zIndex="1000"
      >
        <template>
          <div class="list">
            <div
              class="list-item"
              v-for="(item, index) in items"
              :key="index"
            >{{ item.name }}</div>
          </div>
        </template>
      </lv-drawer>
    </div>
    <h3>Relative to the window</h3>
    props : {absolute = true}
    <div class="drawer-wrapper --absolute">
      <div class="card">
        <div class="card-header">
          <div
            class="header-item --left"
            @click="drawer2 = !drawer2"
          >
            <i class="light-icon-menu-2"></i>
          </div>
        </div>
        <div class="card-drawer">
          <lv-drawer
            v-model="drawer2"
            left
            headerTitle="Title Of Header"
            headerColor="#607c8a"
            close
            shadow
            background="#fff"
            absolute
          >
            <template>
              <div class="list">
                <div
                  class="list-item"
                  v-for="(item, index) in items"
                  :key="index"
                >{{ item.name }}</div>
              </div>
            </template>
          </lv-drawer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LvDrawer from 'lightvue/drawer';
export default {
  components: { LvDrawer },
  data() {
    return {
      items: [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }, { name: 'Item 3' }, { name: 'Item 4' }, { name: 'Item 5' }, { name: 'Item 6' }, { name: 'Item 7' }],
      drawer1: false,
      drawer2: false,
    };
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
      width: 100%;
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
      margin: 20px 0;
      position: relative;
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
    &.--absolute {
      .card {
        height: 600px;
        .card-header {
          background-color: #607c8a;
          .header-item {
            i {
              color: white;
            }
          }
        }
        .card-drawer {
          position: relative;
          height: 100%;
          width: 100%;
        }
      }
    }
  }
}
</style>
