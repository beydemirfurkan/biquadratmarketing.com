<template>


  <div class="fixed-page vh-100 overflow-hidden position-relative">
      <div class="container-fluid gx-0 overflow-hidden h-100">
        <div class="row justify-content-between align-items-center h-100">
            <div class="col-sm-4 ps-5 ms-xxl-5 mb-5  left-fixed-content">
                <span class="text-uppercase fw-bold fs-6 title-sub-top"> {{ fixData.subTitle }}</span>
                <h1 class="display-3 fw-bold mt-4"> {{ fixData.Title }} </h1>
                <a href="" class="btn btn-outline-dark rounded-pill text-uppercase py-3 px-5 mt-5">view our work</a>
                <slot name="left-content"></slot>
            </div>

          <div class="col-sm-6 right-fixed">
            <div class="d-flex flex-wrap">
              <div class="col-6 project-nav pointer" v-for="dataImage in fixData.image" :id="fixData.image.id">
                <a href="">
                  <img :src="dataImage.src" :alt="dataImage.alt" class="project-nav-img">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>




</template>

<script>
export default {
  name: "FixedPage",
  props: ['fixData'],
}

</script>

<style lang="scss" scoped>

.project-nav {
  overflow: hidden;
  &:hover {
    overflow: hidden;
    .project-nav-img {
      overflow: hidden;
      transform: scale(1.2);
      transition: all 400ms ease-in-out;
    }
    }

  .project-nav-img {
    position: relative;
    transform: scale(1);
    will-change: transform;
    overflow: hidden !important;
    transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  }
  }

@media(min-width:768px) {
.right-fixed {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
}
  .left-fixed-content {
    position: absolute;
    top: 25%;
    height: 100%;
  }
}



</style>