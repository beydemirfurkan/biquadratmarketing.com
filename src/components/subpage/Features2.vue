<template>

  <section class="features2 mb-5">
    <div class="container-fluid">
      <span class="features-mini text-center text-white-50 text-uppercase">size özel</span>
      <h1 class="degrade text-center"> {{ title }}</h1>
      <p> {{ description }}</p>
      <ul class="features-list justify-content-evenly"  style="cursor:pointer;">
        <li  v-for="(item, index) in features" :key="index">
          <img :src="item.image" alt="">
          <span class="pt-3">
            <span class="pink-bg">{{ item.span1 }}</span>
            <span class="ps-1">{{ item.span2 }}</span>
          </span>
        </li>
      </ul>
    </div>
  </section>

</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    titleYellow: String,
    features: Array,
  }
}
</script>

<style scoped>

</style>