<template>

  <section :class="className">
    <div class="container-fuild">
      <div class="overflow-hidden">
        <div class="row justify-content-between align-items-center area-login">
          <div class="col-4 left-title ms-5">
            <span class="title-top">{{ titleTop }}</span>
            <h1 class="degrade text-start">{{ title }} </h1>
            <p class="w-100 text-start title-bottom">{{ text }}</p>
            <span class="scroll-btn">
                <a href="#">
                    <span class="mouse">
                        <span>
                        </span>
                    </span>
                </a>

            </span>

          </div>
          <div class="col-7">
            <img class="phones img-fluid" :src="image" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>



</template>

<script>
export default {
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