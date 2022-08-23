<template>

  <section :class="className" >
    <div class="container-fuild px-3 px-xl-0 text-center text-xl-start pb-5">
      <div class="overflow-hidden pb-5">
        <div class="row justify-content-between align-items-center area-login pb-5">
          <div class="col-xl-4 ms-xxl-5 ps-xl-5 left-title order-2 order-xl-1 pt-4 pt-xl-0">
            <span class="title-top">{{ titleTop }}</span>
            <h1 class="degrade text-xl-start">{{ title }} </h1>
            <p class="text-xl-start title-bottom col-xl-10 fw-500 py-3">{{ text }}</p>
            <span class="scroll-btn">
                <a href="#">
                    <span class="mouse">
                        <span>
                        </span>
                    </span>
                </a>
            </span>

          </div>
          <div class="col-xl-7 order-1 order-xl-2">
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

<style scoped lang="scss">

p.title-bottom {
  font-weight: 500;
}

</style>