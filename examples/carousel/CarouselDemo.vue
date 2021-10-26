<template>
  <div>
    <LvCarousel class="carousel">
      <carousel-slide v-for="slide in slides" :key="slide" class="carousel-slider">
        <LvCard class="card" borderRadius="8px" padding="30px" :shadowStyle="6">
          <img :src="slide" :alt="slide" class="slide" />
        </LvCard>
      </carousel-slide>
    </LvCarousel>
  </div>
</template>
<script>
import LvCarousel from 'lightvue/carousel';
import CarouselSlide from 'lightvue/carousel';
import LvCard from 'lightvue/card';
import btn from './img/button.png';
import checkbox from './img/checkbox.png';
import dropdown from './img/dropdown.png';
import input from './img/input.png';
import quickloader from './img/quickloader.png';

export default {
  components: {
    LvCarousel,
    LvCard,
    CarouselSlide,
  },
  data() {
    return {
      slides: [btn, dropdown, checkbox, input, quickloader, 'https://picsum.photos/id/235/600/300', 'https://picsum.photos/id/236/600/300'],
    };
  },
};
</script>
<style lang="scss">
.slide {
  height: 200px;
  /* width: 300px; */
}
</style>
