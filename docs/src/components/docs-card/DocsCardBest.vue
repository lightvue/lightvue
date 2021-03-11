<template>
  <div class="best__demo__wrapper" :id="computedId">
    <div class="wrapper__header">
      <h5 class="component__header" @click="$router.push({ hash: `#${computedId}` })"># {{ title }}</h5>
      <i class="light-icon-adjustments-horizontal porps__drawer" @click="showOptions()"></i>
    </div>
    <div class="playground_wrapper">
      <div class="componets_wrapper">
        <div class="component__render light-scrollbar">
          <div class="rendered__component"><slot></slot></div>
        </div>
        <div class="best__demo__code light-scrollbar">
          <div class="demo__code">
            <div class="code__wrapper">
              <CopyButton :text="getMarkup" />
              <slot name="code"></slot>
            </div>
          </div>
        </div>
      </div>
      <div class="props__wrapper" :class="`${showPorpsOptions ? 'show__Porps__Options' : ''}`">
        <div class="props__header">All Props</div>
        <div class="props__Api light-scrollbar"><slot name="props"></slot></div>
      </div>
    </div>
  </div>
</template>

<script>
import CopyButton from '@/components/docs-card/CopyButton';
export default {
  data() {
    return {
      showPorpsOptions: false,
    };
  },
  props: {
    title: String,
    id: String,
    file: String,
  },
  computed: {
    computedId() {
      return this.$props.id ? this.$props.id : this.title.split(' ').join('-').toLowerCase();
    },
  },
  methods: {
    showOptions() {
      this.showPorpsOptions = !this.showPorpsOptions;
    },
    getMarkup() {
      return this.$el.querySelector('.code__wrapper').innerText;
    },
  },
  components: {
    CopyButton,
  },
};
</script>

<style lang="scss">
.best__demo__wrapper {
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.15);
  background: #ffffff;
  margin-bottom: 30px;
  width: 100%;
  position: relative;
}
.playground_wrapper {
  display: flex;
  justify-content: space-between;
  position: relative;
  /* margin-bottom: ; */
  /* border: 1px solid #cccccc; */
  /* justify-content: space-between; */
}

.rendered__component {
  width: 100%;
  padding: 60px 60px 20px;
  background: #ffffff;
}

.componets_wrapper {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-height: 60vh;
  align-items: stretch;
  overflow: hidden;
}

.props__wrapper {
  width: 300px;
  max-height: 60vh;
  background: #ffffff;
  /* padding: 20px; */
  transition: all 0.2s ease-in-out;
  border-left: 2px solid #edf2f6;
}

.wrapper__header {
  display: flex;
  width: 100%;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #edf2f6;
  .component__header {
    padding: 20px;
    color: teal;
    font-size: 18px;
    font-weight: bold;
    border: 1px solid #edf2f6;
    margin: 0px;
    white-space: nowrap;
    margin-left: -22px;
    padding: 8px 16px 8px 24px;
    background: #dfe7eb;
    color: #607b89;
    position: relative;
    cursor: pointer;
    border-radius: 6px 20px 20px 0;
    box-shadow: 1px 2px 4px -1px rgba(0, 0, 0, 0.4);
  }
  h5::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-top-color: #bdc7cf;
    border-width: 10px 0 0 12px;
    z-index: -1;
    margin: 0px;
  }
}

.component__render {
  flex-grow: 1;
  min-height: 200px;
  display: flex;
  overflow-y: auto;
  justify-content: center;
}

.best__demo__code {
  overflow-y: auto;
}

.demo__code {
  position: relative;
  background: #ffffff;
  overflow: hidden;
}

.props__header {
  padding: 22px;
  border-bottom: 1px solid #edf2f6;
  font-weight: 600;
  font-size: 1em;
  color: #008080;
}

.props__Api {
  padding: 20px;
  overflow-y: scroll;
  height: calc(100% - 62px);
  background: #ffffff;
  //   height: 350px;
}

.porps__drawer {
  display: none;
}

.code__wrapper {
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  overflow: auto;
  // padding: 5px;
  pre {
    color: #2f9c0a;
    span {
      color: #1990b8;
    }
  }
  .dy-code-row {
    &.--tag-row {
      color: #c92c2c;
      padding-left: 16px;
    }
    &.--empty-row {
      height: 20px;
    }
    &:nth-child(even) {
      background-color: #f6f9fc;
    }
    &:nth-child(odd) {
      background-color: #ffffff;
    }
  }
}
.dynamic__code {
  padding: 20px;
}

@media (max-width: 975px) {
  .props__wrapper {
    display: none;
  }

  .show__Porps__Options {
    position: absolute;
    z-index: 900;
    display: block;
    height: 100%;
  }

  .rendered__component {
    padding: 0px;
  }

  .porps__drawer {
    display: block;
  }
}
</style>
