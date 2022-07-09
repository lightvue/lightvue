<template>
  <div class="accordian-wrapper">
    <div class="nav-list__category-wrap">
      <div class="collapsible_catgory" @click="open1" :class="{ active: isOpenA == true }">
        <div class="nav-list__category-label">
          <i class="light-icon-clipboard"></i>
          Form Elements
        </div>
        <i :class="isOpenA ? 'light-icon-chevron-up' : 'light-icon-chevron-down'"></i>
      </div>
      <LvCollapsible :show="isOpenA">
        <div class="nav-list__category-wrap">
          <div class="collapsible_catgory" @click="isOpenB = !isOpenB" :class="{ active: isOpenB == true }">
            <div class="nav-list__category-label">
              <i class="light-icon-directions"></i>
              Input
            </div>
            <i :class="isOpenB ? 'light-icon-chevron-up' : 'light-icon-chevron-down'"></i>
          </div>
          <LvCollapsible :show="isOpenB">
            <div class="collapsible__category-items">
              <div class="nav-list__category-item --link">
                <div class="nav-list__item-line"></div>
                <div class="nav-list__item-bullet"></div>
                <div class="nac-list__item-label">Number</div>
              </div>
              <div class="nav-list__category-item --link">
                <div class="nav-list__item-line"></div>
                <div class="nav-list__item-bullet"></div>
                <div class="nac-list__item-label">Text Area</div>
              </div>
              <div class="nav-list__category-item --link">
                <div class="nav-list__item-line"></div>
                <div class="nav-list__item-bullet"></div>
                <div class="nac-list__item-label">Checkbox</div>
              </div>
              <div class="nav-list__category-item --link">
                <div class="nav-list__item-line"></div>
                <div class="nav-list__item-bullet"></div>
                <div class="nac-list__item-label">Radio</div>
              </div>
              <div class="nav-list__category-item --link">
                <div class="nav-list__item-line"></div>
                <div class="nav-list__item-bullet"></div>
                <div class="nac-list__item-label">Button</div>
              </div>
            </div>
          </LvCollapsible>
        </div>
      </LvCollapsible>
    </div>
  </div>
</template>
<script>
import LvCollapsible from 'lightvue/collapsible';
export default {
  components: {
    LvCollapsible,
  },
  data() {
    return {
      isOpenA: false,
      isOpenB: false,
      isOpenC: false,
    };
  },
  methods: {
    open1() {
      this.isOpenA = !this.isOpenA;
      this.isOpenB = false;
      this.isOpenC = false;
    },
  },
};
</script>
<style lang="scss">
$bg-color: #133a56;
$primary-color: #38b2ac;

.collapsible_catgory {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 16px 0px;
  cursor: pointer;
  font-size: 18px;
  .nav-list__category-label {
    display: flex;
    align-items: center;
  }
  i {
    font-size: 20px;
    margin-right: 8px;
    min-width: 20px;
    height: 20px;
  }
}
.collapsible__category-items {
  padding: 0px 16px 8px;
  margin-left: 8px;

  background: #f7fcfc;
}

.nav-list__item-line {
  width: 20px;
  border-bottom: 1px dotted #566779;
}

.nav-list__item-bullet {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #566779;
}
.nav-list__category-item {
  display: flex;
  align-items: center;
  border-left: 1px dotted #57687a;
  padding: 8px 0px;
  text-indent: 10px;
  &.--link {
    cursor: pointer;

    &:hover,
    &:focus {
      color: $primary-color;
      font-weight: 500;
    }
  }
}
.collapisible--answer {
  padding: 4px 15px 10px 22px;
  /* margin-left: 18px; */
  background: #f7fcfc;
  border-left: 3px solid #38b2ac;
}
.accordian-wrapper {
  width: 100%;
}
</style>
