<template>
  <v-row class="my-4 col-12 col-md-9 mx-auto" align="center" justify="center">
    <v-col cols="12" md="6">
      <h3 class="text-h5 text-md-h5 text-uppercase text-center text-md-left font-weight-regular">
        servicios de infraestructura tecnologica
      </h3>
    </v-col>
    <v-row class="col-12 col-md-6 text-center">
      <v-col v-for="(servicio, id) in landing.infraestructura" :key="id" cols="6" md="4">
        <v-img class="my-7 mx-auto" width="100px" :src="servicio.imagen" />
        <span class="text-capitalize font-weight-light text-md-h6">{{ servicio.titulo }}</span>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import landingStore from '~/store/landing'
export default {
  name: 'SeccionServicios',
  setup () {
    const landing = landingStore()
    landing.inicializar()
    return { landing }
  },
}
</script>

<style>

</style>
