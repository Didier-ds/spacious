<template>
  <div>
    <div
      id="planets"
      class="
        flex flex-col
        sm:grid sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-6
      "
    >
      <PlanetCard v-for="i in 8" :i="i" :key="i" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PlanetCard from "@/components/PlanetCard.vue";

export default {
  name: "Planets",
  components: {
    // HelloWorld
    PlanetCard,
  },
};
</script>
