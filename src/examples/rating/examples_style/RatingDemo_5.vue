<template>
  <div>
    <h3>Style Rating with custom class [ATTR: text-class]</h3>
    <lv-rating text-class="custom-text"></lv-rating>

    <h3>Inline Stars</h3>
    <div style="display: inline-block; font-size: 1.2em;">
      Rated
      <lv-rating
        :inline="true"
        :star-size="20"
        :read-only="true"
        :show-rating="false"
        :rating="5"
      ></lv-rating>
      by our customers.
    </div>
    <h3>Combining props to create custom style</h3>
    <lv-rating
      :star-size="40" :rounded-corners="true" :border-width="4"
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
    ></lv-rating>
    <h3>Right To Left layout [PROP: rtl]</h3>
    <lv-rating :rtl="true" :increment="0.01" ></lv-rating>
  </div>
</template>

<script>
import LvRating from "@/collections/rating/Rating.vue";
export default {
  components: {
    LvRating,
  },
  methods: {
    showCurrentRating(rating) {
      this.currentSelectedRating =
        rating === 0
          ? this.currentSelectedRating
          : "Click to select " + rating + " stars";
    },
    setCurrentSelectedRating(rating) {
      this.currentSelectedRating = "You have Selected: " + rating + " stars";
    },
  },
  computed: {
    currentRatingText() {
      return this.rating
        ? "You have selected " + this.rating + " stars"
        : "No rating selected";
    },
    mouseOverRatingText() {
      return this.mouseOverRating
        ? "Click to select " + this.mouseOverRating + " stars"
        : "No Rating";
    },
  },
  data() {
    return {
      rating: null,
      resetableRating: 2,
      currentRating: "No Rating",
      mouseOverRating: null,
    };
  },
};
</script>
