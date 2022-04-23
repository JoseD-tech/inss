<template>
  <v-app>
    <v-parallax
      dark
      src="https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538_960_720.jpg"
    >
      <v-container align="center" justify="center" class="px-10">
        <v-col class="text-left" cols="12">
          <v-col cols="4" class="d-flex justify-center align-center mb-4">
            <v-img
              src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png?20160308165539"
              height="100px"
              width="100px"
            />
            <h1 class="text-h2 font-weight-black my-0 px-0">
              SINAPSYS
            </h1>
          </v-col>
          <h4 class="text-h5 font-weight-regular">
            Fundacion lorem Ipsum <br>
            de desarrollo <span class="font-weight-bold">tegnologico</span>
          </h4>
        </v-col>
      </v-container>
    </v-parallax>
    <BarraNavegacion />
    <v-main>
      <v-container class="mt-4">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import BarraNavegacion from '../components/Navbar.vue'
export default {
  name: 'DefaultLayout',
  components: {
    BarraNavegacion
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
