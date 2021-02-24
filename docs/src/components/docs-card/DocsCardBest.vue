<template>
  <div class="best__demo__wrapper" :id="computedId">
    <div class="wrapper__header">
      <h5 class="component__header" @click="$router.push({ hash: `#${computedId}` })"># {{ title }}</h5>
    </div>
    <div class="playground_wrapper">
      <div class="componets_wrapper">
        <div class="component__render">
          <div class="rendered__component"><slot></slot></div>
        </div>
        <div class="best__demo__code">
          <div class="demo__code"><slot name="code"></slot></div>
        </div>
      </div>
      <div class="props__wrapper">
        <h5 class="props__header">{{ componentName }} Props</h5>
        <div class="props__Api"><slot name="props"></slot></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   component: null,
    };
  },
  props: {
    title: String,
    id: String,
    file: String,
    componentName: String,
  },
  computed: {
    computedId() {
      return this.$props.id ? this.$props.id : this.title.split(' ').join('-').toLowerCase();
    },
  },
};
</script>

<style lang="scss">
.best__demo__wrapper {
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.15);
  background: #ffffff;
  margin-bottom: 30px;
}
.playground_wrapper {
  display: flex;
  justify-content: space-between;
  /* margin-bottom: ; */
  /* border: 1px solid #cccccc; */
  /* justify-content: space-between; */
}

.rendered__component {
  border-right: 1px solid #edf2f6;
  padding: 20px;
  /* color: #ffffff; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  height: 350px;
}

.componets_wrapper {
  width: 100%;
}

.props__wrapper {
  width: 300px;
  /* padding: 20px; */
  border-left: 2px solid #edf2f6;
}

.wrapper__header {
  display: flex;
  width: 100%;
  padding: 10px;
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
  }
}

.demo__code {
  padding: 20px;
  //   height: 100px;
  position: relative;
  background: #fafafa;
  overflow: hidden;
  span.token.attr-value::after {
    content: '\A';
  }
}

.props__header {
  padding: 20px;
  border-bottom: 1px solid #cccccc;
  font-weight: 600;
  color: #008080;
}

.props__Api {
  padding: 20px;
  overflow-y: scroll;
  //   height: 350px;
}
</style>
