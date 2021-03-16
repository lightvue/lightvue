<template>
  <div>
    <h3>Default</h3>
    <lv-rating></lv-rating>

    <h3>Modifying color</h3>
    <h5>Changing active color [PROP: active-color]</h5>
    <lv-rating></lv-rating>
    <lv-rating active-color="#607C8A"></lv-rating>
    <lv-rating active-color="#03FC53"></lv-rating>
    <lv-rating active-color="#FF3E3E"></lv-rating>
    <h5>Changing inactive color [PROP: inactive-color]</h5>
    <lv-rating></lv-rating>
    <lv-rating inactive-color="#BCD7E2"></lv-rating>
    <lv-rating inactive-color="#B6FFD0"></lv-rating>
    <lv-rating inactive-color="#FAC4C4"></lv-rating>

    <h3>Modifying size [PROP: star-size]</h3>
    <lv-rating :star-size="30"></lv-rating>
    <lv-rating :star-size="50"></lv-rating>
    <lv-rating :star-size="70"></lv-rating>

    <h3>Modifying border width [PROP: border-width]</h3>
    <lv-rating :border-width="0"></lv-rating>
    <lv-rating :border-width="2"></lv-rating>
    <lv-rating :border-width="5"></lv-rating>

    <!-- <h3>Star Points</h3>
    <lv-rating :border-width="5" :star-points="6"></lv-rating> -->

    <h3>Style Rating with custom class [ATTR: text-class]</h3>
    <lv-rating text-class="custom-text"></lv-rating>

    <h3>Inline Stars</h3>
    <div style="display: inline-block; font-size: 1.2em">
      Rated
      <lv-rating :inline="true" :star-size="20" :read-only="true" :show-rating="false" :rating="5"></lv-rating>
      by our customers.
    </div>

    <h3>Rounded Corners [PROP: rounded-corners]</h3>
    <lv-rating :rounded-corners="true" :border-width="6"></lv-rating>

    <h3>Combining props to create custom style</h3>
    <lv-rating :star-size="50" :rounded-corners="true" :border-width="4" :star-points="[23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34, 46, 19, 31, 17]"></lv-rating>

    <!-- <h3>Animated Stars</h3> -->
    <!-- <lv-rating
      :animate="true"
      :active-color="['#ae0000', '#003333']"
      :active-border-color="['#F6546A', '#a8c3c0']"
      :border-width="4"
      :star-points="[
        23,
        2,
        14,
        17,
        0,
        19,
        10,
        34,
        7,
        50,
        23,
        43,
        38,
        50,
        36,
        34,
        46,
        19,
        31,
        17,
      ]"
      :active-on-click="true"
      :clearable="true"
      :padding="3"
    ></lv-rating> -->

    <h3>Adding glow to the stars [PROPS: glow, glow-color]</h3>
    <div style="background: #35495d; width: max-content; overflow: auto; padding: 24px; border-radius: 4px">
      <lv-rating :star-size="70" :glow="10" glow-color="#38b2ac"></lv-rating>
      <br />
      <lv-rating :star-size="70" :glow="10" glow-color="#ffd055" active-color="#ffd055"></lv-rating>
    </div>
  </div>
</template>

<script>
import LvRating from 'lightvue/Rating.vue';
export default {
  components: {
    LvRating,
  },
  methods: {
    showCurrentRating(rating) {
      this.currentSelectedRating = rating === 0 ? this.currentSelectedRating : 'Click to select ' + rating + ' stars';
    },
    setCurrentSelectedRating(rating) {
      this.currentSelectedRating = 'You have Selected: ' + rating + ' stars';
    },
  },
  computed: {
    currentRatingText() {
      return this.rating ? 'You have selected ' + this.rating + ' stars' : 'No rating selected';
    },
    mouseOverRatingText() {
      return this.mouseOverRating ? 'Click to select ' + this.mouseOverRating + ' stars' : 'No Rating';
    },
  },
  data() {
    return {
      rating: null,
      resetableRating: 2,
      currentRating: 'No Rating',
      mouseOverRating: null,
    };
  },
};
</script>
