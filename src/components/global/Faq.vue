<template>

  <section class="faq py-5">
    <div class="container py-5">
      <div class="row">
        <div class="col-12">
          <div class="section-title text-center">
            <span class="top-title">size özel</span>
            <h1>En çok<span> sorulan sorular</span></h1>
          </div>
          <div class="faq-content py-5">
            <div class="accordion" id="accordion-faq">
              <div class="row">
                <!-- Item Content -->
                <div class="col-12 col-lg-6 mb-3" v-for="(accordion, index) in accordionData" :key="index">
                  <div class="accordion-item rounded-0 bg-transparent">
                    <h2 class="accordion-header rounded-0 bg-transparent shadow-none py-2" :id="'panelsStayOpen-'+ accordion.header_id">
                      <button class="accordion-button rounded-0 bg-transparent text-dark shadow-none" type="button"
                              data-bs-toggle="collapse" :data-bs-target="'#panelsStayOpen-'+ accordion.button_id">
                        {{ accordion.header_title }}
                      </button>
                    </h2>
                    <div :id="'panelsStayOpen-' + accordion.button_id" class="accordion-collapse collapse">
                      <div class="accordion-body text-dark">

                          <p> {{ accordion.body_content }} </p>

                      </div>
                    </div>
                  </div>
                </div>
                <!-- END Item Content -->


              </div>

            </div>
          </div>
        </div>
        <div class="text-center">
          <img src="/image/services/socialmedia/faq-bottom.png" alt="" class="img-fluid">
        </div>
      </div>
    </div>
  </section>


</template>

<script>
export default {
  name: "Faq",
  data() {
    return {
      accordionData: [
        {
            'header_id': 'item1',
            'header_title': 'Accordion Item #1',
            'button_id': 'item1button',
            'body_content': 'This is the first item\'s accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.'
        },
        {
            'header_id': 'item2',
            'header_title': 'Accordion Item #2',
            'button_id': 'item2button',
            'body_content': 'This is the first item\'s accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.'
        },
        {
            'header_id': 'item3',
            'header_title': 'Accordion Item #3',
            'button_id': 'item3button',
            'body_content': 'This is the first item\'s accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.'
        },
        {
            'header_id': 'item4',
            'header_title': 'Accordion Item #4',
            'button_id': 'item4button',
            'body_content': 'This is the first item\'s accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It\'s also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.'
        },
        
      ]
    }
  }
}
</script>

