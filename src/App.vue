<template>
  <div id="main">
    <h2 class="text-4xl font-bold">Spacious</h2>
    <div class="my-4">
      <button class="px-4 py-2 rounded uppercase font-medium router-btn">
        Planets
      </button>
      <button class="px-4 py-2 rounded uppercase font-medium router-btn">
        Characters
      </button>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/main.scss";
@media (min-width: 995px) {
  #main {
    width: 80%;
    margin: 2em auto;
  }
}
</style>
