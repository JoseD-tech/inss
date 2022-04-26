<template>
  <v-app>
    <BannerCabecera />
    <BarraNavegacion />
    <v-main>
      <v-container class="mt-10">
        <Nuxt />
      </v-container>
      <PiePagina />
    </v-main>
  </v-app>
</template>

<script>
<<<<<<< HEAD
export default {
  name: 'DefaultLayout',
  data () {
    return {
    }
  }
}
</script>
=======
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
</style>
>>>>>>> f6ddbaa3638586ad9dd52d4cfdc04b2b6e6fa752
