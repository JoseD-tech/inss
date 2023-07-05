<template>
  <v-row align-content="center" justify="center">
    <v-col cols="12">
      <h3 class="text-h4 text-uppercase text-center font-weight-light">
        nuestros objetivos
      </h3>
    </v-col>
    <v-col cols="12">
      <v-col
        cols="12"
        md="9"
        class="
          d-flex
          justify-center
          align-center
          align-md-start
          flex-wrap flex-md-nowrap
          mx-auto
        "
      >
        <v-col data-aos="fade-up" data-aos-duration="800" v-for="(item, id) in landing.fintech" :key="id" cols="12" md="4" class="text-center px-2 mx-1">
          <v-avatar size="60px" :color="item.colorFondo">
            <v-icon :color="item.colorIcon" size="40px">
              {{ item.imagen }}
            </v-icon>
          </v-avatar>
          <div class="mt-4">
            <h4 class="text-h5 text-capitalize font-weight-regular my-2">
              {{ item.titulo }}
            </h4>
            <p class="font-weight-light">
              {{ item.texto }}
            </p>
          </div>
        </v-col>
      </v-col>
      <v-col cols="12" md="9" class="mx-auto">
        <img
          src="@/assets/banner/medico.png"
          alt=""
          class="img-clase"
          data-aos="fade-up"
          data-aos-duration="800"
        >
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
import landingStore from '~/store/landing'
export default {

  name: 'SeccionTecnologia',
  setup () {
    const landing = landingStore()
    landing.inicializar()
    return { landing }
  }
}
</script>

<style>
.img-clase {
  height: 200px;
  width: 100%;
}

@media (min-width: 600px) {
  .img-clase {
    height: 100%;
    width: 100%;
  }
}


</style>
