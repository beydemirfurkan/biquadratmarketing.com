<template>
  <div class="vote-controls ">
    <div class="swiper-scrollbar"></div>
    <div class="vote-arrows">
      <div class="swiper-button-next" @click="swiper.slideNext()">
        <img src="image/global/vote-right.png" alt="">
      </div>
      <div class="swiper-button-prev" @click="swiper.slidePrev()">
        <img src="image/global/vote-right.png" alt="">
      </div>

    </div>
  </div>

</template>

<script>

import { useSwiper } from 'swiper/vue';

export default {
  name: "SliderNavigation",
  setup() {
    const swiper = useSwiper();

    return {
      swiper,
    };
  },
}
</script>

<style scoped>

</style>