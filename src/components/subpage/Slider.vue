<template>
  <section class="vote-area">
    <div class="container">
      <h1 class="degrade mb-5 text-start"> Social Test</h1>
  <!-- Swiper -->
  <swiper
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
  >
    <!--  Slider Item -->
    <swiper-slide v-for="(item, index) in data[1]" :key="index">
      <div class="vote-item">
        <div class="row">
          <div class="img-left col-lg-6 order-1" :class="data[0].contentLTR ? 'order-lg-1' : 'order-lg-2' ">
            <img :src="item.image" alt="">
          </div>
          <div class="title-right col-lg-6 order-2" :class="data[0].contentLTR ? 'order-lg-2' : 'order-lg-1' ">
            <h3 class="text-start "> {{ item.title }} <span class="bg-yellow-title ">{{ item.titleSpan }}</span> {{ item.titleResume }}</h3>
            <p class="py-4 lh-lg">{{ item.paragraph }} </p>
            <ul v-if="item.other_design">
              <li v-for="(liItem, liIndex) in item.list" :key="liIndex">{{ liItem }}</li>
            </ul>
          </div>
        </div>
      </div>
    </swiper-slide>

    <!--  Navigation  -->
    <slider-navigation :class="data[0].position ? 'position-absolute start-0' : '' "/>
  </swiper>
    </div>

  </section>

</template>

<script>

import {Swiper, SwiperSlide} from 'swiper/vue'
import {Navigation, Scrollbar} from 'swiper'
import SliderNavigation from "@/components/global/SliderNavigation";

export default {
  components: {SliderNavigation, Swiper, SwiperSlide},
  props: {
    data:Array,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Scrollbar],
      // EffectCreative
    };
  },

}
</script>

<style scoped>

</style>

<!--
      <div class="vote-item">
        <div class="row">
          <div class="img-left col-lg-6 order-1" :class="item.sectionLTR ? 'order-lg-1' : 'order-lg-2' ">
            <img :src="item.image" alt="">
          </div>
          <div class="title-right col-lg-6 order-2" :class="item.sectionLTR ? 'order-lg-2' : 'order-lg-1' ">
            <h3 class="text-start "> {{ item.title }} <span class="bg-yellow-title ">{{ item.titleSpan }}</span> {{ item.titleResume }}</h3>
            <p class="pt-4 lh-lg">{{ item.paragraph }}</p>

          </div>
        </div>
      </div>
-->