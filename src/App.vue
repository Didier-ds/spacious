<template>
  <div id="main">
    <h2 class="text-4xl mb-2 font-bold">Spacious</h2>
    <div class="my-8">
      <router-link
        to="/"
        class="px-4 py-2 rounded uppercase font-semibold router-btn mr-4"
      >
        Planets
      </router-link>
      <router-link
        to="/characters"
        class="px-4 py-2 rounded uppercase font-semibold router-btn mr-4"
      >
        Characters
      </router-link>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/main.scss";
@media (min-width: 995px) {
  #main {
    width: 80%;
    
  }
}
#main {
  width: 90%;
  margin: 2em auto;
}
</style>
