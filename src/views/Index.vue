<template>
  <div>
    <main>
      <hero/>
      <who/>
      <how/>
      <mobile/>
      <work/>
      <foryou/>
      <ourteam/>
      <reference/>
    </main>
  </div>


</template>

<script>

import hero from '@/components/home/Hero';
import who from "@/components/home/Who";
import how from '@/components/home/How';
import mobile from '@/components/home/Mobile';
import work from '@/components/home/Work';
import foryou from '@/components/home/ForYou';
import ourteam from "@/components/home/OurTeam";
import Reference from "@/components/home/Reference";



export default {
  name: "index",
  components: {Reference, hero, who, how, mobile, work, foryou, ourteam}

}
</script>

<style scoped>

</style>



