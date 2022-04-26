<template>
  <v-row class="my-4 col-12 col-md-9 mx-auto" align="center" justify="center">
    <v-col cols="12" md="6">
      <h3 class="text-h4 text-md-h5 text-uppercase text-center text-md-left font-weight-regular">
        servicios de infraestructura tecnologica
      </h3>
    </v-col>
    <v-row class="col-12 col-md-6 text-center">
      <v-col v-for="(servicio, id) in servicios" :key="id" cols="6" md="4">
        <v-img class="my-7 mx-auto" width="100px" :src="servicio.urlImg" />
        <span class="text-capitalize font-weight-light text-h6">{{ servicio.nombre }}</span>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  name: 'SeccionServicios',
  data () {
    return {
      servicios: [
        { nombre: 'redes', urlImg: 'https://cdn-icons-png.flaticon.com/512/4707/4707024.png' },
        { nombre: 'redes', urlImg: 'https://cdn-icons-png.flaticon.com/512/4707/4707024.png' },
        { nombre: 'redes', urlImg: 'https://cdn-icons-png.flaticon.com/512/4707/4707024.png' },
        { nombre: 'redes', urlImg: 'https://cdn-icons-png.flaticon.com/512/4707/4707024.png' },
        { nombre: 'redes', urlImg: 'https://cdn-icons-png.flaticon.com/512/4707/4707024.png' },
        { nombre: 'redes', urlImg: 'https://cdn-icons-png.flaticon.com/512/4707/4707024.png' }
      ]
    }
  }
}
</script>

<style>

</style>
