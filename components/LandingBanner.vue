<template>
  <v-parallax class="landing-banner" />
</template>

<script>
import bannerStore from '@/store/banner'
export default {
  setup () {
    const banner = bannerStore()
    banner.inicializar()
    return {
      banner: banner.banner
    }
  }
}
</script>

<style>
.landing-banner{
  height: 100vh;
}
</style>
