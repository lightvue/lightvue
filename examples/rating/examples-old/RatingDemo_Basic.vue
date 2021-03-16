<template>
  <div>
    <h2>Default</h2>
    <lv-rating></lv-rating>

    <h2>Half Stars</h2>
    <lv-rating :increment="0.5"></lv-rating>

    <h2>Red Stars</h2>
    <lv-rating active-color="#9c0000"></lv-rating>

    <h2>Vibrant Stars</h2>
    <lv-rating inactive-color="#e1bad9" active-color="#cc1166"></lv-rating>

    <h2>Small Stars</h2>
    <lv-rating :star-size="20"></lv-rating>

    <h2>Big Stars</h2>
    <lv-rating :star-size="90"></lv-rating>

    <h2>Bordered Stars</h2>
    <lv-rating :border-width="5"></lv-rating>

    <!-- <h2>Star Points</h2>
    <lv-rating :border-width="5" :star-points="6"></lv-rating> -->

    <h2>Fluid Stars</h2>
    <lv-rating :increment="0.01"></lv-rating>

    <h2>Preset Stars</h2>
    <lv-rating :rating="4"></lv-rating>

    <h2>Non rounded start rating</h2>
    <lv-rating :rating="4.67" :round-start-rating="false"></lv-rating>

    <h2>Read Only Stars</h2>
    <lv-rating :rating="3.8" :read-only="true" :increment="0.01"></lv-rating>

    <h2>Lots of stars</h2>
    <lv-rating :max-rating="10" :star-size="20"></lv-rating>

    <h2>Right To Left</h2>
    <lv-rating :rtl="true" :increment="0.01"></lv-rating>

    <h2>Style Rating</h2>
    <lv-rating text-class="custom-text"></lv-rating>

    <h2>Hide Rating</h2>
    <lv-rating :show-rating="false"></lv-rating>

    <h2>Capture Rating</h2>
    <lv-rating :show-rating="false" @update:rating="rating = $event"></lv-rating>
    <div style="margin-top: 10px; font-weight: bold">
      {{ currentRatingText }}
    </div>

    <h2>Capture Mouse Over Rating</h2>
    <div @mouseleave="mouseOverRating = null" style="display: inline-block">
      <lv-rating :show-rating="false" @hover:rating="mouseOverRating = $event" :increment="0.5"></lv-rating>
    </div>
    <div style="margin-top: 10px; font-weight: bold">
      {{ mouseOverRatingText }}
    </div>

    <h2>Resetable stars with v-model</h2>
    <div style="display: inline-block">
      <!-- <lv-rating v-model:rating="resetableRating"></lv-rating> -->
      <div style="padding-top: 10px; cursor: pointer; margin-bottom: 20px; color: blue">
        <a @click="resetableRating = 0">Reset Rating</a>
      </div>
    </div>

    <h2>Inline Stars</h2>
    <div style="display: inline-block">
      Rated
      <lv-rating :inline="true" :star-size="20" :read-only="true" :show-rating="false" :rating="5"></lv-rating>
      by our customers.
    </div>

    <h2>Rounded Corners</h2>
    <lv-rating :rounded-corners="true" :border-width="6"></lv-rating>

    <h2>Custom Stars</h2>

    <lv-rating :star-size="50" :rounded-corners="true" :border-width="4" :star-points="[23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34, 46, 19, 31, 17]"></lv-rating>

    <h2>Animated Stars</h2>
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

    <h2>Glowing Stars</h2>
    <div style="background: #35495d; overflow: auto; padding: 24px; border-radius: 4px">
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
