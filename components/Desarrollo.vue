<template>
  <v-row align="center" justify="center" class="my-15">
    <v-row class="col-12 col-md-9">
      <v-col cols="12" md="5" order="2" order-md="1">
        <img src="@/assets/banner/medico-md.png" alt="" class="img-clase" data-aos="fade-up" data-aos-duration="700">
      </v-col>
      <v-col cols="12" md="7" class="my-3" order="1" order-md="2">
        <h3 class="text-h4 my-5 my-md-2 text-uppercase text-center font-weight-regular">
          Servicios Que Ofrecemos
        </h3>
        <v-row class="py-4">
          <v-col data-aos="fade-up" data-aos-duration="800" v-for="(item, id) in landing.software" :key="id" cols="12" md="6">
            <div class="d-flex align-center">
              <v-avatar size="35px" :color="item.colorFondo" class="rounded-circle">
                <v-icon size="20px" :color="item.colorIcon">
                  {{ item.imagen }}
                </v-icon>
              </v-avatar>
              <h4 class="text-capitalize ml-2">
                {{ item.titulo }}
              </h4>
            </div>
            <div class="font-weight-light text-justify">
              <p>
                {{ item.texto }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import landingStore from '~/store/landing'
export default {
  name: 'SeccionDesarrollo',
  setup () {
    const landing = landingStore()
    landing.inicializar()
    return { landing }
  }
}
</script>

<style scoped>
.img-clase {
  max-height: 100%;
  width: 100%;
}
</style>
