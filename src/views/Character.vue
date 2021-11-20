<template>
  <div
    id="characters"
    class="
      flex flex-col
        sm:grid sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-6">
    <div
      v-for="i in 8"
      :key="i"
      id="card"
      class="card relative overflow-hidden w-full"
    >
      <img
        class="w-full character-img"
        :src="'/images/character-' + i + '.png'"
      />
      <div class="absolute bottom-0 bg-white w-full right-0 p-3">
        <p class="font-semibold">character Alpha</p>
        <p class="opacity-60 text-sm">23 Friends</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Characters",
  components: {
    // HelloWorld
  },
};
</script>
