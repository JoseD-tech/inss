<template>
  <v-row class="my-4 col-12 col-md-9 mx-auto" align="center" justify="center">
    <v-col cols="12" md="6">
      <h3 class="text-h5 text-uppercase text-center text-md-left font-weight-regular">
        servicios de infraestructura tecnologica
      </h3>
    </v-col>
    <v-row class="col-12 col-md-6 text-center">
      <v-col data-aos="fade-up" data-aos-duration="800" v-for="(servicio, id) in landing.infraestructura" :key="id" cols="6" md="4">
        <img :src="require('@/static/img-globales/' + servicio.imagen + '.svg')" class="my-7 mx-auto" width="100px" />
        <span class="text-capitalize font-weight-light">{{ servicio.titulo }}</span>
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
  }
}
</script>

<style>

</style>
