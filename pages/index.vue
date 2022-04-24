<template>
  <v-row>
    <ArticulosInteres />
    <SeccionTecnologia />
  </v-row>
</template>

<script>
import ArticulosInteres from '../components/ArticulosInteres.vue'
import SeccionTecnologia from '../components/Tecnologia.vue'
import landingStore from '@/store/landing'

export default {
  name: 'IndexPage',
  components: {
    ArticulosInteres,
    SeccionTecnologia
  },
  setup () {
    const landing = landingStore()
    landing.inicializar()
    return { landing }
  }
}
</script>
