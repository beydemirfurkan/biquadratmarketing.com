<template>




<section class="contact-section pb-5">
  <div class="container">

    <div class="section-title text-center mb-5">
      <span class="top-title">biquadrat ile</span>
      <h1 class="degrade fw-bold">Size değer katıyoruz</h1>
    </div>
    <div class="row justify-content-between py-4 ">
      <div class="col-lg-3">
        <div class="section-title">
          <h4 class="degrade-1">Let's <span class="text-dark">talk</span></h4>
        </div>
        <ul>
          <li><a href="">Kurfürstendamm 72 10709</a></li>
          <li><a href="">Berlin Deutschland</a></li>
          <li><a href="">Tel : +491787603917</a></li>
          <li><a href="">info@biquadratmarketing.com</a></li>
        </ul>
      </div>
      <div class="col-lg-8">
        <form action="">
          <div class="row justify-content-between">
            <div class="col-lg-4">
              <input type="text" class="form-control border-0 border-bottom rounded-0 border-dark border-2 shadow-none" placeholder="Name *"/>
            </div>
            <div class="col-lg-4">
              <input type="mail" class="form-control border-0 border-bottom rounded-0 border-dark border-2 shadow-none" placeholder="E-Mail *"/>
            </div>
            <div class="col-lg-4">
              <input type="text" class="form-control border-0 border-bottom rounded-0 border-dark border-2 shadow-none" placeholder="Phone Number *"/>
            </div>
          </div>
          <div class="row justify-content-between mt-5">
            <div class="col-lg-8">
              <input type="text" class="form-control border-0 border-bottom rounded-0 border-dark border-2 shadow-none" placeholder="Description *"/>
            </div>
            <div class="col-lg-4">
              <a href="" class="btn btn-yellow text-dark rounded-pill w-100">Lets do this</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>


  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 align-self-end">
          <h1>Get in touch  <i class="bi bi-arrow-right position-absolute ms-2" style="transform: rotate(-45deg); color: #f9df00"></i></h1>
          <!-- <hr style="height: 25px; color: #f9df00; width: 70%; border-width: 5px; opacity: 1"> -->
          <ul class="d-sm-flex text-uppercase fw-bold footer-modal" style="font-size: 0.75rem;">
            <li class="pe-2"><router-link to="">home</router-link></li>
            <li class="pe-2"><router-link to="">agb</router-link></li>
            <li class="pe-2"><router-link to="">impressum</router-link></li>
            <li class="pe-2"><router-link to="">Datenschutzerklärung</router-link></li>
            <li class="pe-2 active"><router-link to="">Widerrufsbelehrung </router-link></li>
          </ul>
          <span class="fs-07 pt-3">Copyright @2022 All rights reserved</span>
        </div>
        <div class="col-7 col-lg-3 footer-list">
          <ul>
            <li>Services</li>
            <li>About us</li>
            <li>Work</li>
            <li>Thinking</li>
          </ul>
        </div>
        <div class="col-5 col-lg-3 footer-list2">
          <ul>
            <li>
              <strong class="text-uppercase fs-08 d-block">email</strong>
              <span>info@biquadrat.com</span>
            </li>
            <li>
              <strong class="text-uppercase fs-08 d-block">adress</strong>
              <span>155 Farringdon Road EC1R 3AD London, UK</span>
            </li>
            <li>
              <strong class="text-uppercase fs-08 d-block">phone</strong>
              <span>(+49) 441 20 00</span>
            </li>
            <li>
              <strong class="text-uppercase fs-08 d-block">email</strong>
              <div class="d-flex">
                <a href="" class="pe-2"><i class="bi bi-facebook"></i></a>
                <a href="" class="pe-2"><i class="bi bi-linkedin"></i></a>
                <a href="" class="pe-2"><i class="bi bi-instagram"></i></a>
                <a href="" class="pe-2"><i class="bi bi-whatsapp"></i></a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>


</template>

<script>

export default {
  name: "footer",

}
</script>

<style scoped>

</style>