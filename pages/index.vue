<template>
  <v-row justify="center" align="center" dense>
    <v-col cols="12" no-gutter>
      <LandingBaner class="landing-banner" />
    </v-col>
  </v-row>
</template>

<script>
import LandingBaner from '@/components/LandingBanner'
import landingStore from '@/store/landing'
export default {
  name: 'IndexPage',
  components: { LandingBaner },
  setup () {
    const landing = landingStore()
    landing.inicializar()
    return { landing }
  },
  mounted () {

  }
}
</script>
