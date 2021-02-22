<template>
  <div>
    <h3>Default</h3>
    <lv-rating></lv-rating>

    <h3>Modifying Increment [PROP: increment]</h3>
    <h5>Increment: 0.5 (half-stars)</h5>
    <lv-rating :increment="0.5"></lv-rating>
    <h5>Increment: 0.25 (quarter-stars)</h5>
    <lv-rating :increment="0.25"></lv-rating>
    <h5>Increment: 0.01 (fluid-rating)</h5>
    <lv-rating :increment="0.01"></lv-rating>

    <h3>Specifying preset value [PROP: rating]</h3>
    <h5>Rounded preset value</h5>
    <lv-rating :rating="4"></lv-rating>
    <h5>Non-rounded preset value [PROP: round-start-rating]</h5>
    <lv-rating :rating="4.67" :round-start-rating="false"></lv-rating>

    <h3>Read-Only rating field [PROP: read-only]</h3>
    <lv-rating :rating="3.8" :read-only="true" :increment="0.01"></lv-rating>

    <h3>Specifying the number of stars [PROP: max-rating]</h3>
    <lv-rating :max-rating="3"></lv-rating>
    <lv-rating :max-rating="5"></lv-rating>
    <lv-rating :max-rating="10"></lv-rating>
    <!-- <h2>Style Rating</h2>
    <lv-rating text-class="custom-text"></lv-rating> -->

    <h3>Show/Hide Rating Value [PROP: show-rating]</h3>
    <lv-rating :show-rating="true"></lv-rating>
    <lv-rating :show-rating="false"></lv-rating>

    <h3>Capture rating value with events</h3>
    <h5>On mouse click</h5>
    <lv-rating :show-rating="true" @update:rating="rating = $event"></lv-rating>
    <div style="margin-top: 10px; font-weight: bold">
      {{ currentRatingText }}
    </div>

    <h5>On mouse hover</h5>
    <div @mouseleave="mouseOverRating = null" style="display: inline-block">
      <lv-rating :show-rating="true" @hover:rating="mouseOverRating = $event" :increment="0.5"></lv-rating>
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

    <h3>Right To Left layout [PROP: rtl]</h3>
    <lv-rating :rtl="true" :increment="0.01"></lv-rating>
  </div>
</template>

<script>
import LvRating from 'lightvue/rating/Rating.vue';
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
