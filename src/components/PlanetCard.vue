<template>
  <div id="card" class="card relative p-4 w-full">
    <img
      class="mx-auto w-3/4 planet-img"
      :src="'/images/planet-' + i + '.svg'"
    />
    <div class="absolute bottom-0 m-4 left-0">
      <p class="font-semibold">Planet Alpha</p>
      <p class="opacity-60 text-sm">Pop 235</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "PlanetCard",
  props: ["i"],
};
</script>
