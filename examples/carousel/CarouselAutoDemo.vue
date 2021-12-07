<template>
  <div>
    <LvCarousel class="carousel">
      <template>
        <div v-for="slide in slides" :key="slide.text" class="carousel-slider" slot="slide">
          <LvCard :class="`card ${slide.color}`" borderRadius="8px" padding="30px" :shadowStyle="6">
            {{ slide.text }}
          </LvCard>
        </div>
      </template>
    </LvCarousel>
  </div>
</template>
<script>
import LvCarousel from 'lightvue/carousel';
import CarouselSlide from 'lightvue/carousel';
import LvCard from 'lightvue/card';

export default {
  components: {
    LvCarousel,
    LvCard,
    CarouselSlide,
  },
  data() {
    return {
      slides: [
        { text: 'Slide 1', color: 'primary' },
        { text: 'Slide 2', color: 'info' },
        { text: 'Slide 3', color: 'success' },
        { text: 'Slide 4', color: 'warning' },
        { text: 'Slide 5', color: 'danger' },
      ],
    };
  },
};
</script>
<style lang="scss">
.carousel-slider {
  padding: 3rem;
}
.card {
  color: white !important;
  height: 300px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
}
.primary {
  background-color: #38b2ac !important;
}
.info {
  background-color: #0288d1 !important;
}
.success {
  background-color: #008c7f !important;
}
.warning {
  background-color: #ffb300 !important;
}
.danger {
  background-color: #bb2727 !important;
}
</style>
