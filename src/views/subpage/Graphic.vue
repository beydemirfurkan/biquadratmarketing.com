<template>

    <hero class="py-5 d-flex align-items-center justify-content-center"
          class-name="login-area"
          title-top="services"
          title="Creative Graphic Design"
          text="We are Berlin's highest rated Search Marketing, Social and
          SEO agency on Google in 2021. Instagram, Facebook, Twitter, Linkedin, Twitch..."
          image="/image/services/graphic/graphic-hero.png" />

    <features class="pt-5" title="Crafting beautiful websites that" title-yellow="keep your users engaged."
              :features="features" />

    <slider :data="data.socialMedia.section1"></slider>


    <slider :data="data.socialMedia.section2"></slider>


    <slider :data="data.socialMedia.section3"></slider>


    <div class="changed-section-color">
      <features-3 />
      <modern />
      <we-do/>
      <team />
      <faq />
    </div>

    <footers/>
</template>

<script>


import data from '@/data/subpage-socialmedia.json';
import Hero from "@/components/subpage/Hero.vue";
import Slider from "@/components/subpage/Slider.vue";
import Features from "@/components/subpage/Features.vue";
import Features2 from "@/components/subpage/Features2.vue";
import Features3 from "@/components/subpage/Features3.vue";
import Modern from "@/components/subpage/social-media/Modern.vue";
import WeDo from "@/components/subpage/social-media/WeDo.vue";
import Team from "@/components/subpage/social-media/Team.vue";
import Faq from "@/components/global/Faq.vue";
import Footers from "@/layouts/footer.vue";


export default {
  name: "socialmedia",
  components: { Hero, Features, Features2, Features3, Slider, Faq, Modern, Team, WeDo, Footers },

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
      ],

      features2: [
        {
          image: "/image/services/graphic/graphic-icon6.png",
          span1: "Kreatif ",
          span2: "Fikir."
        },
        {
          image: "/image/services/graphic/graphic-icon7.png",
          span1: "Logo ",
          span2: "Tasarımı."
        },
        {
          image: "/image/services/graphic/graphic-icon8.png",
          span1: "Mobil",
          span2: "Tasarımlar"
        },
        {
          image: "/image/services/graphic/graphic-icon9.png",
          span1: "Kurumsal",
          span2: "Kimlik"
        },
        {
          image: "/image/services/graphic/graphic-icon10.png",
          span1: "Web",
          span2: "Tasarım"
        }
      ]
    };
  },

}
</script>


