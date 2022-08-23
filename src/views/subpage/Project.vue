<template>

<fixed-page :fix-data="fixDataJson">

  <template #left-content>

  </template>


</fixed-page>


</template>

<script>
import FixedPage from "@/components/subpage/FixedPage";
import fixDataJson from '@/data/fixedpage-data.json';
export default {
  name: "Project",
  components: { FixedPage },
  data() {
    return {
      fixDataJson
    }
  }
}
</script>

<style scoped>

</style>