<template>

  <div class="work-item pb-4">
    <img :src="image" alt="">
    <div class="py-3 d-flex fs-08">
      <span class="text-warning text-uppercase fw-bold">{{tag1}}</span>
      <span class="text-warning text-uppercase ms-1 ms-md-3 fw-bold">{{tag2}}</span>
    </div>
    <h2>{{title}}</h2>
    <p class="py-3 fs-08">{{text}}</p>
  </div>

</template>

<script>
export default {
  name: "work-item",
  props: {
    image: String,
    tag1: String,
    tag2: String,
    title: String,
    text: String,
  }
}
</script>

<style scoped>

</style>