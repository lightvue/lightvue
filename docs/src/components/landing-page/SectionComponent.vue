<template>
  <section class="component-section">
    <div class="title">
      Unstyled,accessible UI component's <br />
      with increadible developer experience
    </div>
    <div class="discription">
      LightVue is a open source UI component library for <br />
      building high quality,accessible design system and web apps
    </div>

    <LvCarousel class="carousel">
      <carousel-slide v-for="slide in slides" :key="slide.name" class="carousel-slider">
        <LvCard class="card" borderRadius="8px" padding="30px" :shadowStyle="6">
          <img :src="slide.component" :alt="slide" class="slide" @click="location(slide.name)" />
          <!-- <div class="component--title">{{ slide.name }} <br /></div>
          <div class="des">
            {{ slide.Description }}
          </div> -->
        </LvCard>
      </carousel-slide>
    </LvCarousel>
  </section>
</template>
<script>
import LvCarousel from 'lightvue/carousel';
import CarouselSlide from 'lightvue/carousel';
import LvCard from 'lightvue/card';
import btn from '../../static/elements/button.png';
import checkbox from '../../static/elements/checkbox.png';
import dropdown from '../../static/elements/dropdown.png';
import input from '../../static/elements/input.png';
import number from '../../static/elements/number.png';
import quickloader from '../../static/elements/quickloader.png';
import progress_bar from '../../static/elements/progress_bar.png';
import progress_spinner from '../../static/elements/progress_spinner.png';
import rating from '../../static/elements/rating.png';
import radio from '../../static/elements/radio.png';
import shimmer from '../../static/elements/shimmer.png';
import slider from '../../static/elements/slider.png';
import text_area from '../../static/elements/text_area.png';
import toggle_switch from '../../static/elements/toggle_switch.png';

export default {
  components: {
    LvCarousel,
    LvCard,
    CarouselSlide,
  },
  data() {
    return {
      slides: [
        { component: input, name: 'input', Description: 'Light-input provides with a variety of input fields with various available customizations for input field.' },
        { component: number, name: 'number', Description: 'Input Number component allows user to Take Number as a input with various available customizations.' },
        { component: checkbox, name: 'checkbox', Description: 'LvCheckbox component can be used in projects where a way is required to select or deselect an option.' },
        { component: radio, name: 'radio', Description: 'LvRadio component can be used in projects where a way is required for user to select or deselect an option.' },
        { component: slider, name: 'slider', Description: 'Slider from light vue which provide user to have a slider in the web application which can be used to select a range.' },
        { component: rating, name: 'rating', Description: 'Rating component can be used when user wants to provide an option to rate the products/services provided.' },
        { component: dropdown, name: 'dropdown', Description: 'Dropdown component allows user to choose an option from the provided options with custmization.' },
        { component: quickloader, name: 'page-loader', Description: 'Progress Loader can be used as a loading animations or space-fillers while waiting for the actual content to load.' },
        { component: progress_bar, name: 'progress-bar', Description: 'Progress Bar component can be used as a process status indicator for a time-consuming process' },
        { component: shimmer, name: 'shimmer', Description: 'Skeleton Loader components can be used as a loading animations or space-fillers while waiting for the content to load.' },
        { component: progress_spinner, name: 'progress-spinner', Description: 'Progress spinner components can be used as a loading animations or space-fillers while waiting for the content to load.' },
        { component: text_area, name: 'textarea', Description: 'Textarea from light vue component allows user to write long text/ paragraphs as a review.' },
        { component: btn, name: 'button', Description: 'Button is an extension to standard button element with an option to add icons and your custom theming.' },
        { component: toggle_switch, name: 'toggle-switch', Description: 'LightVue ToggleSwitch component is used to select a boolean value or toggle between True or False.' },
      ],
    };
  },
  methods: {
    location(path) {
      if (this.$router) {
        this.$router.push(`vue-components/${path}`);
      }
    },
  },
};
</script>
<style lang="scss">
.component-section {
  margin-left: 22px;
  height: 100vh;
}
.title {
  font-size: 32px;
  line-height: 48px;
  font-weight: 600;
  color: #143a56;
  margin-bottom: 0.5em;
  padding-left: 22px;
}
.discription {
  font-size: 20px;
  line-height: 26px;
  opacity: 0.7;
  color: #143a56;
  margin-bottom: 0.78em;
  padding-left: 22px;
}
.slide {
  height: 200px;
  /* width: 300px; */
}
.card {
  cursor: pointer;
}
.component--title {
  color: #143a56;
  text-transform: capitalize;
  font-size: 15px;
  margin-bottom: 0.5em;
  font-weight: 600;
}
.des {
  font: 11px;
  line-height: 15px;
  opacity: 0.7;
  color: #143a56;
}
</style>
