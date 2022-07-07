<template>


  <section class="features">
    <h1> {{ title }}<span class="bg-yellow-title"> <br> {{ titleYellow }}</span></h1>
      <ul class="features-list"  style="cursor:pointer;">
        <li  v-for="(item, index) in features" :key="index">
          <img :src="item.image" alt="">
          <span class="pt-3"> {{ item.span1 }} </span>
          <span class="d-block"> {{ item.span2 }}</span>
        </li>
      </ul>
  </section>


</template>

<script>
export default {
  name: "section-features",
  props: {
    title: String,
    titleYellow: String,
    features: Array,
  }
}
</script>

<style scoped>

</style>