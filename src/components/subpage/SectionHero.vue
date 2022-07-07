<template>

  <section :class="className">
    <div class="container-fluid">
      <div class="mt-5 overflow-hidden">
        <div class="row justify-content-between area-login align-items-center">
          <div class="col-4 left-title mt-5 ps-5">
            <span class="title-top">{{ titleTop }}</span>
            <h1 class="degrade text-start">{{ title }}</h1>
            <p class="w-100 text-start">  {{ text }} </p>
            <span class="scroll-btn">
                  <a href="#">
                      <span class="mouse">
                          <span>
                          </span>
                      </span>
                  </a>
                  <p>Aşağı kaydır</p>
              </span>
          </div>
          <div class="col-8">
            <img class="phones" :src="image" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>



</template>

<script>
export default {
  name: "section-hero",
  props: {
    className:String,
    titleTop:String,
    title:String,
    text:String,
    image:String
  }
}
</script>

<style scoped>

</style>