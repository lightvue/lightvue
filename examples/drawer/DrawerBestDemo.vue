<template>
  <div>
    <docs-card-best title="Playground">
      <div class="drawer-container__wrapper --absolute">
        <div class="wrapper__card">
          <div class="card__header">
            <div class="header__icon --left" @click="drawer2 = !drawer2">
              <i class="light-icon-menu-2"></i>
            </div>
          </div>
          <div class="card__drawer">
            <lv-drawer v-model="drawer2" v-bind="allOptions">
              <template>
                <div class="list">
                  <div class="list-item" v-for="(item, index) in items" :key="index">{{ item.name }}</div>
                </div>
              </template>
            </lv-drawer>
          </div>
        </div>
      </div>
      <template #props>
        <lv-toggle-switch v-model="allOptions.top" label="From Top" /> <br />
        <!-- <lv-toggle-switch
          v-model="allOptions.bottom"
          label="From Bottom"
        /> <br /> -->
        <lv-toggle-switch v-model="allOptions.right" label="From Right" /> <br />
        <lv-toggle-switch v-model="allOptions.left" label="From Left" /> <br />
        <lv-toggle-switch v-model="allOptions.absolute" label="Absolute to the container" /> <br />
        <lv-toggle-switch v-model="allOptions.close" label="Show Close" /> <br />
        <lv-toggle-switch v-model="allOptions.shadow" label="Show Shadow" /> <br />
        <lv-toggle-switch v-model="allOptions.noBackdrop" label="No Backdrop" /> <br />
        <lv-toggle-switch v-model="allOptions.backdropBlur" label="Blur the Backdrop" /> <br />
        <br />
        <lv-input v-model="allOptions.headerTitle" label="Header Title" /> <br />
        <lv-input v-model="allOptions.maxSpan" label="Max Span at mobile (in %)" type="number" /> <br />
        <lv-input v-model="allOptions.width" label="Width" type="number" /> <br />
        <lv-input v-model="allOptions.height" label="Height" type="number" /> <br />
        <lv-input v-model="allOptions.zIndex" label="z-index" type="number" /> <br />
        <lv-input v-model="allOptions.backdropOpacity" label="Backdrop Opacity" type="number" /> <br />
        <lv-input v-model="allOptions.headerFontSize" label="Header Font Size" /> <br />
        <lv-input v-model="allOptions.padding" label="Padding" /> <br />
        <Lv-colorpicker v-model="allOptions.headerBackground" label="Header Background" />
        <Lv-colorpicker v-model="allOptions.headerColor" label="Header Color" />
        <Lv-colorpicker v-model="allOptions.background" label="Background Color" />
      </template>
      <template #code>
        <span class="dy-code-row --empty-row"></span>
        <span class="dy-code-row --tag-row">&nbsp;&lt;lv-drawer</span>
        <span class="dy-code-row --attribute-row" v-for="(option, name) in enabledOptions" :key="name">
          <pre v-if="option">&nbsp; &nbsp; &nbsp;<span v-if="!stringProps.includes(name)">:</span>{{ name }}=<span>"{{ option }}"</span></pre>
        </span>
        <span class="dy-code-row --tag-row">&nbsp;&gt;</span>
        <span class="dy-code-row --tag-row">&nbsp;&lt;/lv-drawer&gt;</span>
        <span class="dy-code-row --empty-row"></span>
      </template>
    </docs-card-best>
  </div>
</template>

<script>
import DocsCardBest from '@/components/docs-card/DocsCardBest';
import LvDrawer from 'lightvue/drawer';
import LvInput from 'lightvue/input';
import LvColorpicker from 'lightvue/color-picker';
import LvToggleSwitch from 'lightvue/toggle-switch';
export default {
  data() {
    return {
      allOptions: {
        top: false,
        right: false,
        // bottom: false,
        left: true,
        close: true,
        shadow: true,
        backdropBlur: false,
        absolute: false,
        noBackdrop: false,
        width: 250,
        height: 250,
        zIndex: 1000,
        maxSpan: 70,
        backdropOpacity: 0.3,
        headerTitle: 'Any Title',
        background: '#fff',
        headerColor: '#607c8a',
        headerBackground: '#fff',
        headerFontSize: '20px',
        padding: '0px',
      },
      stringProps: ['headerTitle', 'background', 'headerColor', 'headerBackground', 'headerFontSize', 'padding'],
      items: [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }, { name: 'Item 3' }, { name: 'Item 4' }, { name: 'Item 5' }, { name: 'Item 6' }, { name: 'Item 7' }],
      drawer1: false,
      drawer2: false,
    };
  },
  computed: {
    enabledOptions() {
      return Object.entries(this.allOptions).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});
    },
  },
  components: {
    DocsCardBest,
    LvInput,
    LvToggleSwitch,
    LvColorpicker,
    LvDrawer,
  },
};
</script>

<style lang="scss">
.drawer-container__wrapper {
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
  .wrapper__card {
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    margin: 20px 0;
    position: relative;
    .card__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      background-color: #fff;
      .header__icon {
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
    .wrapper__card {
      height: 200px;
      .card__header {
        background-color: #607c8a;
        .header__icon {
          i {
            color: white;
          }
        }
      }
      .card__drawer {
        position: relative;
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
