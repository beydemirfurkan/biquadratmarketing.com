

<template>
  <div id="app">
    <headers/>
      <router-view/>
    <footers/>
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
