<template>
  <v-app>
    <BannerCabecera />
    <BarraNavegacion />
    <v-main>
      <v-container class="mt-10">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import BarraNavegacion from '../components/Navbar.vue'
import BannerCabecera from '../components/Banner.vue'
export default {
  name: 'DefaultLayout',
  components: {
    BarraNavegacion,
    BannerCabecera
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
