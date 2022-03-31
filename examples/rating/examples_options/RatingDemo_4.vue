<template>
  <div class="lv-demo_layout">
    <div>
      <p>On mouse click</p>
      <lv-rating :star-size="40" :show-rating="true" @update:rating="rating = $event"></lv-rating>
      <div style="margin-top: 10px; font-weight: bold">
        {{ currentRatingText }}
      </div>
    </div>
    <div style="width: 40%">
      <p>On mouse hover</p>
      <div @mouseleave="mouseOverRating = null" style="display: inline-block">
        <lv-rating :star-size="40" :show-rating="true" @hover:rating="mouseOverRating = $event" :increment="0.5"></lv-rating>
      </div>
      <div style="margin-top: 10px; font-weight: bold">
        {{ mouseOverRatingText }}
      </div>
    </div>
  </div>
</template>

<script>
import LvRating from 'lightvue/rating';
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
<style>
.lv-demo_layout {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
