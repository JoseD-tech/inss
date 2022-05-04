<template>
  <v-row class="col-12 mx-auto">
    <!--<ArticulosInteres /> -->
    <SeccionTecnologia />
    <SeccionDesarrollo />
    <SeccionServicios />
    <SeccionConfian />
    <SeccionMapa />
    <SeccionContacto />
  </v-row>
</template>

<script>
// import ArticulosInteres from '../components/ArticulosInteres.vue'
import SeccionTecnologia from '../components/Tecnologia.vue'
import SeccionDesarrollo from '../components/Desarrollo.vue'
import SeccionServicios from '../components/Servicios.vue'
import SeccionConfian from '../components/Confian.vue'
import SeccionMapa from '../components/Mapa.vue'
import SeccionContacto from '../components/Contacto.vue'
import landingStore from '@/store/landing'
export default {
  name: 'IndexPage',
  components: {
    // ArticulosInteres,
    SeccionTecnologia,
    SeccionDesarrollo,
    SeccionServicios,
    SeccionConfian,
    SeccionMapa,
    SeccionContacto
  },
  setup () {
    const landing = landingStore()
    landing.inicializar()
    return { landing }
  }
}
</script>
