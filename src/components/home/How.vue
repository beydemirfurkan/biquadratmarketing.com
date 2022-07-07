<template>

  <section class="how py-5">
    <div class="container-fluid gx-0 overflow-hidden">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-5 padding-left">
          <span class="fs-6 text-black-50 fw-bold">2.HOW</span>
          <div class="section-title">
            <h1>Biquadrat <span> are specialists in:</span></h1>
            <ul class="py-3">
              <li><span>Creative Web Design</span></li>
              <li><span>Web Development</span></li>
              <li><span>Branding</span></li>
              <li><span>Digital Marketing</span></li>
              <li><span>E-Commerce</span></li>
              <li><span>WordPress</span></li>
            </ul>
          </div>
          <div>
            <a href="" class="mt-4 btn btn-outline-dark px-5 py-3 text-uppercase rounded-pill">our services</a>
          </div>
        </div>
        <div class="col-lg-6">
          <img src="/image/home/how.png" alt="">
        </div>
      </div>

    </div>
  </section>

</template>

<script>
export default {
  name: "how",
  mounted() {
    $(window).scroll(function () {
      var objectt = $('.work');
      var obj_height = objectt.height();
      var windows_height = $(window).height();

      var obj_pos_top = objectt.position().top - (windows_height / 2);
      var obj_pos_bottom = obj_pos_top + obj_height - (windows_height / 4);

      var scroll_top = $(window).scrollTop();
      var scroll_bottom = scroll_top + windows_height;


      console.log('offset top : ', obj_pos_top);
      console.log('offset bottom : ', obj_pos_bottom);
      console.log('offset : ', scroll_bottom);

      if (  (scroll_top >= obj_pos_top  && scroll_top <= obj_pos_bottom)){
        $("body").addClass("color-background");

      } else {
        $("body").removeClass("color-background");

      }
    });
  }
}
</script>

<style scoped>



</style>