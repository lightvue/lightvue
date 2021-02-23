<template>
  <div class="loader-demo-wrapper">
    <div class="card">
        <h3>TYPE: <strong>ball-beat</strong></h3>
        <span class="demo__wrapper">
        <div class="demo__item"><lv-loader type="ball-beat"/><span>Default</span></div>
        <div class="demo__item"><lv-loader type="ball-beat" color="#38b2ac"/><span>With color prop</span></div>
        <div class="demo__item"><lv-loader type="ball-beat" :scale="2"/><span>With scale prop</span></div>
      </span>
    </div>
    <div class="card">
        <h3>TYPE: <strong>ball-pulse</strong></h3>
        <span class="demo__wrapper">
        <div class="demo__item"><lv-loader type="ball-pulse"/><span>Default</span></div>
        <div class="demo__item"><lv-loader type="ball-pulse" color="#38b2ac"/><span>With color prop</span></div>
        <div class="demo__item"><lv-loader type="ball-pulse" :scale="2"/><span>With scale prop</span></div>
      </span>
    </div>
    <div class="card">
        <h3>TYPE: <strong>ball-scale</strong></h3>
        <span class="demo__wrapper">
        <div class="demo__item"><lv-loader type="ball-scale"/><span>Default</span></div>
        <div class="demo__item"><lv-loader type="ball-scale" color="#38b2ac"/><span>With color prop</span></div>
        <div class="demo__item"><lv-loader type="ball-scale" :scale="2"/><span>With scale prop</span></div>
      </span>
    </div>
    <div class="card">
        <h3>TYPE: <strong>ball-pulse-rise</strong></h3>
        <span class="demo__wrapper">
        <div class="demo__item"><lv-loader type="ball-pulse-rise"/><span>Default</span></div>
        <div class="demo__item"><lv-loader type="ball-pulse-rise" color="#38b2ac"/><span>With color prop</span></div>
        <div class="demo__item"><lv-loader type="ball-pulse-rise" :scale="2"/><span>With scale prop</span></div>
      </span>
    </div>
    <div class="card">
        <h3>TYPE: <strong>ball-grid-pulse</strong></h3>
        <span class="demo__wrapper">
        <div class="demo__item"><lv-loader type="ball-grid-pulse"/><span>Default</span></div>
        <div class="demo__item"><lv-loader type="ball-grid-pulse" color="#38b2ac"/><span>With color prop</span></div>
        <div class="demo__item"><lv-loader type="ball-grid-pulse" :scale="2"/><span>With scale prop</span></div>
      </span>
    </div>
    <div class="card">
        <h3>TYPE: <strong>ball-clip-rotate</strong></h3>
        <span class="demo__wrapper">
        <div class="demo__item"><lv-loader type="ball-clip-rotate"/><span>Default</span></div>
        <div class="demo__item"><lv-loader type="ball-clip-rotate" color="#38b2ac"/><span>With color prop</span></div>
        <div class="demo__item"><lv-loader type="ball-clip-rotate" :scale="2"/><span>With scale prop</span></div>
      </span>
    </div>
    <div class="card">
        <h3>TYPE: <strong>ball-clip-rotate-multiple</strong></h3>
        <span class="demo__wrapper">
        <div class="demo__item"><lv-loader type="ball-clip-rotate-multiple"/><span>Default</span></div>
        <div class="demo__item"><lv-loader type="ball-clip-rotate-multiple" color="#38b2ac"/><span>With color prop</span></div>
        <div class="demo__item"><lv-loader type="ball-clip-rotate-multiple" :scale="2"/><span>With scale prop</span></div>
      </span>
    </div>
    <div class="card">
        <h3>TYPE: <strong>ball-clip-rotate-pulse</strong></h3>
        <span class="demo__wrapper">
        <div class="demo__item"><lv-loader type="ball-clip-rotate-pulse"/><span>Default</span></div>
        <div class="demo__item"><lv-loader type="ball-clip-rotate-pulse" color="#38b2ac"/><span>With color prop</span></div>
        <div class="demo__item"><lv-loader type="ball-clip-rotate-pulse" :scale="2"/><span>With scale prop</span></div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

.loader-demo-wrapper {
  display: flex;
  height: max-content;
  flex-flow: row wrap;
}
.card {
    width: calc(50% - 10px);
    min-width: 200px;
    border-radius: 4px;
    padding: 20px;
    padding-bottom: 0px;
    margin: 5px;
}

.card h3 {
    color: #607c8a;
    margin-bottom: 40px;
    font-size: 1.4em;
    font-weight: normal;

}

.demo__wrapper {
  display: flex;
  flex-flow: row wrap;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0px;
  padding: 0px;
  height: max-content;
  border: 0px;
}

.demo__item {
  display: inline-block;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  display: flex;
  border: 0px;
  height: 140px;
  width: 33%;
  margin: 0px;
  padding: 0px;
  min-width: 160px;
}

.demo__item span {
    display: inline-block;
    position: relative;
    top: 20px;
    background-color: #607c8a;
    width: max-content;
    width: 100%;
    font-size: 14px;
    text-align: center;
    padding: 5px;
    margin: 0;
    color: white;
    opacity: 0;
    transition: all 0.1s linear;
}

.demo__item:hover span {
    opacity: 1;
    top: 0px;
}

</style>
