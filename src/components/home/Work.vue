<template>

  <section class="work">
    <div class="overlay-work"></div>
    <div class="container-fluid gx-0 overflow-hidden">
      <div class="work-wrap p-5">
        <div class="row justify-content-between align-items-center">
          <div class="col-md-6">
            <div class="work-title">
              <h1 class="d-flex">
                <div class="d-flex flex-column"><span>w</span> <span class="ps-3">r</span></div>
                <div class="d-flex flex-column"><span>o</span> <span>k</span></div>
              </h1>
            </div>
          </div>
          <div class="col-md-6">
            <div class="col-8">
              <span class="fs-6 text-black-50 fw-bold">3.WHAT</span>
              <div class="section-title">
                <h1>We are experts in bringing <span>brands to life</span> dgiitally.</h1>
                <p>BIQUADRAT is a progressive and insightful design agency, technically and creatively skilled to
                  translate your brand into its best digital self. Our design and development approach creates impactful,
                  engaging brands and immersive digital experiences that bring you a return on creativity.</p>

              </div>
              <div>
                <a href="" class="mt-4 btn btn-outline-dark px-5 py-3 text-uppercase rounded-pill">wiew our work</a>
              </div>
            </div>

          </div>
        </div>
        <div class="row p-5 justify-content-between">
          <div class="col-md-6">
            <work-item
                :image="('/image/home/work-image-1.png')"
                tag1="web design"
                tag2="web development"
                title="Starsamazon"
                text="We took on the challenge of creating the new website for tangerine, a global design pioneer."
            />
            <work-item
                :image="('/image/home/work-image-3.png')"
                tag1="logo design"
                tag2="brand create"
                title="DGS 1899"
                text="We took on the challenge of creating the new website for tangerine, a global design pioneer."
            />
          </div>
          <div class="col-md-6">

            <work-item
                :image="('/image/home/work-image-2.png')"
                tag1="web design"
                tag2="web development"
                title="Marcaspio"
                text="We took on the challenge of creating the new website for tangerine, a global design pioneer."
            />
            <work-item
                :image="('/image/home/work-image-4.png')"
                tag1="web design"
                tag2="web development"
                title="Marcaspio"
                text="We took on the challenge of creating the new website for tangerine, a global design pioneer."
            />
          </div>
        </div>
      </div>

    </div>
  </section>


</template>

<script>
import workItem from "@/components/home/WorkItem";

export default {
  name: "work",
  components: {workItem},

}
</script>


<style scoped>

</style>