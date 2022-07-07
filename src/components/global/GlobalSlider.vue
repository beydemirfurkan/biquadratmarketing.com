<template>




</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Navigation, Scrollbar} from "swiper";
import SliderNavigation from "@/components/global/SliderNavigation";

export default {
  name: "globalSlider",
  components: {Swiper, SwiperSlide, SliderNavigation},
  props: {
    // voteClass:String,
    title:String,
    img:String,
    miniTitle:String,
    miniText:String,
    text:String,
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
      modules: [Navigation,  Scrollbar],
    };
  },




}
</script>

<style scoped>

</style>