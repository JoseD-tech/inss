<template>
  <v-row class="mt-10" align="center" justify="center">
    <v-col cols="12">
      <h3 class="text-h4 text-uppercase text-center font-weight-light">
        Testimonios
      </h3>
    </v-col>
    <v-col cols="12" md="9" class="d-flex flex-wrap">
      <v-col data-aos="flip-left" data-aos-duration="1000" data-aos-easing="ease-out-cubic" v-for="(confia, id) in landing.testimonios" :key="id" cols="10" md="4" class="mx-auto">
        <v-card
          class="mx-auto rounded-lg color-gradiante"
          height="16"
          max-width="100%"
        />
        <v-card width="" class="rounded-lg py-5 px-3 mt-n3">
          <v-img
            height="80px"
            width="80px"
            :src="confia.imagen"
            class="rounded-circle mx-auto"
          />
          <v-card-text class="font-weight-light text-center">
            <p class="font-weight-regular my-3">
              {{ confia.texto }}
            </p>
            <span class="font-weight-medium text-uppercase">{{ confia.firmante }}</span>
            <br>
            <span class="font-weight-Light">{{ confia.cargo }}</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
import landingStore from '~/store/landing'
export default {
  name: 'SeccionConfian',
  setup () {
    const landing = landingStore()
    landing.inicializar()
    return { landing }
  }
}
</script>

<style>
.color-gradiante {
  background: #c41520 !important;

}
</style>
