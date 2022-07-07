

<template>
  <header/>
  <div id="app">
    <router-view/>
  </div>
  <footers/>
</template>

<script>
import header from "@/layouts/header";
import footers from "@/layouts/footer";

export default {
  name:'App',
  components: {
    header,footers
  }
}
</script>
