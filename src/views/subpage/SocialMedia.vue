<template>
  <div class="">


    <!--  Hero  -->
    <section-hero
    class-name="socialmedia"
    title-top="services"
    title="Social Media Managment"
    text="We are Berlin's highest rated Search Marketing, Social and
    SEO agency on Google in 2021. Instagram, Facebook, Twitter, Linkedin, Twitch..."
    image="/image/services/socialmedia/socialmedia-hero.png"
    />


  <!-- Features-->

  <section-features
  title="Crafting beautiful websites that"
  title-yellow="keep your users engaged."
  :features="features"
  />

  <section-slider
      :data="data.socialMedia.section1"
  ></section-slider>


  <section-slider
      :data="data.socialMedia.section2"
  ></section-slider>


  <section-slider
      :data="data.socialMedia.section3"
  ></section-slider>


  </div>
</template>

<script>


import data from '@/data/subpage-socialmedia.json';
import sectionHero from "@/components/subpage/SectionHero";
import sectionSlider from "@/components/subpage/SectionSlider";
import SectionFeatures from "@/components/subpage/SectionFeatures";
export default {
  name: "socialmedia",
  components:{ SectionFeatures, sectionHero, sectionSlider },

  data() {
    return {
        data,
        features: [
          {
            image: "/image/services/socialmedia/socialmedia-icon1.png",
            span1: "Workshops & ",
            span2: "Brainstorming."
          },
          {
            image: "/image/services/socialmedia/socialmedia-icon2.png",
            span1: "Wireframing and ",
            span2: "UX Design."
          },
          {
            image: "/image/services/socialmedia/socialmedia-icon3.png",
            span1: "Mobile and ",
            span2: "Responsive Design."
          },
          {
            image: "/image/services/socialmedia/socialmedia-icon4.png",
            span1: "Iconography & ",
            span2: "Type."
          },
          {
            image: "/image/services/socialmedia/socialmedia-icon5.png",
            span1: "UI Design Concepts & ",
            span2: "Prototyping."
          }
        ]
    };
  },


}
</script>


