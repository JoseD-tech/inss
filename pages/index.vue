<template>
  <v-row>
    <ArticulosInteres />
    <SeccionTecnologia />
    <SeccionDesarrollo />
    <SeccionServicios />
    <SeccionConfian />
  </v-row>
</template>

<script>
import ArticulosInteres from '../components/ArticulosInteres.vue'
import SeccionTecnologia from '../components/Tecnologia.vue'
import SeccionDesarrollo from '../components/Desarrollo.vue'
import SeccionServicios from '../components/Servicios.vue'
import SeccionConfian from '../components/Confian.vue'
import landingStore from '@/store/landing'

export default {
  name: 'IndexPage',
  components: {
    ArticulosInteres,
    SeccionTecnologia,
    SeccionDesarrollo,
    SeccionServicios,
    SeccionConfian
  },
  setup () {
    const landing = landingStore()
    landing.inicializar()
    return { landing }
  }
}
</script>
