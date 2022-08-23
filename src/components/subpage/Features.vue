<template>


  <section class="features py-xl-4">
    <div class="containe-fluid px-3 px-xl-5">
    <h1 class="mb-5 pb-3 text-center fw-500" style="color:#3e435d;"> {{ title }}<span class="bg-yellow-title"> <br> {{ titleYellow }}</span></h1>
      <div class="features-list d-flex flex-wrap justify-content-evenly mt-3 mb-5" style="cursor:pointer;">
        <div
          class="features-list-item d-flex flex-column justify-content-evenly align-items-center fs-5 fw-bold mx-sm-4 text-center"
          v-for="(item, index) in features" :key="index">
          <img :src="item.image" alt="" class="features-list-item-img">
          <span class="pt-3"> {{ item.span1 }} </span>
          <span class="d-block"> {{ item.span2 }}</span>
        </div>
      </div>
    </div>
  </section>


</template>

<script>
export default {
  props: {
    title: String,
    titleYellow: String,
    features: Array,
  }

}
</script>

<style scoped lang="scss">


.features-list {
  .features-list-item {
    &:hover {
      img {
        transform: scale(1.1);
        transition: transform 400ms ease-in-out;
        }
    }
      @media(max-width:576px) {
        margin-bottom: 15px;
        img {
          width: 100px;
        }
        span {
          font-size: 1.1rem;
        }
      }
  }

  img {
    transform: scale(1);
    transition: transform 400ms ease-in-out;
  }

}
</style>