<template>
  <div class="container-fluid px-5">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-5 align-items-center">
      <a href="/" class="d-flex mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <img src="/image/global/biquadrat-logo.png" alt="">
      </a>

      <ul class="nav nav-pills align-items-center">
        <li class="nav-item navy-blue"><router-link to="/" class="nav-link fw-bold" style="color: #0e181e">About Us</router-link></li>
        <li class="nav-item"><router-link to="/" class="nav-link fw-bold" style="color: #0e181e">Contact</router-link></li>
        <li class="nav-item ms-3"><a href="/" class="btn btn-yellow text-dark fw-bold text-uppercase bg-yellow">start your project</a></li>
      </ul>
    </header>
  </div>


</template>

<script>

export default {
  name: "header"
}

</script>

