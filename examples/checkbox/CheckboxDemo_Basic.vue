<template>
  <div>
    <h5>Basic</h5>
    <lv-checkbox name="check" color="success" v-model="checked" value="Hello">Basic</lv-checkbox>
    <lv-checkbox name="check" color="warning" v-model="checked" rounded value="World">Rounded </lv-checkbox>
    <lv-checkbox name="check" color="primary" v-model="checked" rounded filled>Filled </lv-checkbox>
    <lv-checkbox name="check" color="info" v-model="checked" rounded thick>Thick </lv-checkbox>
    <lv-checkbox name="check" color="danger" v-model="checked" plain smooth> Plain </lv-checkbox>

    <h5>With Animations</h5>
    <lv-checkbox name="check" color="danger" v-model="checked" smooth> Smooth </lv-checkbox>
    <lv-checkbox name="check" color="danger" v-model="checked" rounded thick pulse> Pulse </lv-checkbox>
    <lv-checkbox name="check" color="danger" v-model="checked" rounded thick pulse outline> Outline </lv-checkbox>
    <lv-checkbox name="check" color="danger" v-model="checked" thick pulse outline> Outline </lv-checkbox>
    <lv-checkbox name="check" color="danger" v-model="checked" filled pulse> Outline </lv-checkbox>

    <h5>Radio</h5>
    <lv-checkbox type="radio" name="check" color="success" v-model="radio" value="Hello">Basic</lv-checkbox>
    <lv-checkbox type="radio" name="check" color="warning" v-model="radio" value="World">Rounded </lv-checkbox>
    <lv-checkbox type="radio" name="check" color="primary" v-model="radio">Filled </lv-checkbox>
    <lv-checkbox type="radio" name="check" color="info" v-model="radio" thick>Thick </lv-checkbox>
    <lv-checkbox type="radio" name="check-3" color="success" v-model="radio"> Plain </lv-checkbox>

    <h5>With Animations</h5>
    <lv-checkbox type="radio" name="check" color="danger" v-model="radio" smooth> Smooth </lv-checkbox>
    <lv-checkbox type="radio" name="check" color="success" v-model="radio" pulse> Pulse </lv-checkbox>
    <lv-checkbox type="radio" name="check" color="success" v-model="radio" pulse outline> Pulse </lv-checkbox>
    <lv-checkbox type="radio" name="check" color="success" v-model="radio" pulse outline> Outline </lv-checkbox>
    <lv-checkbox type="radio" name="check-3" color="success" v-model="radio" thick pulse outline>Thick Outline </lv-checkbox>

    <h5>Disabled</h5>
    <lv-checkbox name="check" color="success" v-model="checked" disabled>Basic</lv-checkbox>
    <lv-checkbox name="check" color="warning" rounded value="World" disabled>Rounded </lv-checkbox>

    <h5>With Icons</h5>
    <lv-checkbox name="check" v-model="checked" value="Hello" icon toggle plain>
      <i class="icon light-icon-volume" slot="extra"></i>
      <i class="icon light-icon-volume-3" slot="off-extra"></i>
      <label slot="off-label">Volume off</label>
      Volume On</lv-checkbox
    >

    <lv-checkbox name="check" v-model="checked" value="Hello" icon toggle plain>
      <i class="icon light-icon-circle-check" slot="extra"></i>
      <i class="icon light-icon-circle" slot="off-extra"></i>
      <label slot="off-label">Switch off</label>
      Switch On
    </lv-checkbox>

    <h5>Scalable sizes</h5>
    <h6>
      <lv-checkbox name="check" color="success" v-model="checked" thick pulse outline rounded> Big </lv-checkbox>
    </h6>
    <h5>
      <lv-checkbox name="check" color="success" v-model="checked" thick pulse outline rounded> Bigger </lv-checkbox>
    </h5>
    <h4>
      <lv-checkbox name="check" color="success" v-model="checked" thick pulse outline rounded> Bigger </lv-checkbox>
    </h4>
    <h3>
      <lv-checkbox name="check" color="success" v-model="checked" thick pulse outline rounded> Bigger </lv-checkbox>
    </h3>
    <h2>
      <lv-checkbox name="check" color="success" v-model="checked" thick pulse outline rounded> Bigger </lv-checkbox>
    </h2>
    <h1>
      <lv-checkbox name="check" color="success" v-model="checked" thick pulse outline rounded> Bigger </lv-checkbox>
    </h1>
  </div>
</template>

<script>
import LvCheckbox from 'lightvue/checkbox/Checkbox.vue';

export default {
  data() {
    return {
      checked: false,
      radio: '',
      cities: [],
      categories: [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' },
      ],
      selectedCategories: [],
    };
  },
  created() {
    this.selectedCategories = this.categories.slice(1, 3);
  },
  components: {
    LvCheckbox,
  },
};
</script>
