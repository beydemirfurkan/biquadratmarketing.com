

<template>
  <div id="app">
    <headers class="position-absolute top-0 w-100 bg-white" style="z-index: 3333;"/>
      <router-view/>
<!--    <footers/>-->
  </div>
</template>

<script>
import headers from "@/layouts/header";
import footers from "@/layouts/footer";

export default {
  name:'App',
  components: {
    headers,footers
  }
}
</script>
