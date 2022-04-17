<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center" />
    </v-col>
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
  mounted () {

  }
}
</script>
