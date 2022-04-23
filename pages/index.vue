<template>
  <v-row>
    <h1>hola</h1>
  </v-row>
</template>

<script>
import landingStore from '@/store/landing'

export default {
  name: 'IndexPage',
  setup () {
    const landing = landingStore()
    landing.inicializar()
    return { landing }
  },
  mounted () {}
}
</script>
