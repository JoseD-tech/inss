<template>
  <v-app>
    <BarraNavegacion />
    <BannerCabecera />
    <v-main>
      <v-container class="mt-10">
        <Nuxt />
      </v-container>
      <PiePagina />
    </v-main>
  </v-app>
</template>

<script>
import BarraNavegacion from '../components/Navbar.vue'
import BannerCabecera from '../components/Banner.vue'
import PiePagina from '../components/PiePagina.vue'
export default {
  name: 'DefaultLayout',
  components: {
    BarraNavegacion,
    BannerCabecera,
    PiePagina
  },
  data () {
    return {}
  }
}
</script>

<style>

html::-webkit-scrollbar {
  width: 8px;
}

html::-webkit-scrollbar-thumb {
  background-color: #ff6600;
  border-radius: 10px;
}


</style>
