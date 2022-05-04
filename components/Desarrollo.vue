<template>
  <v-row align="center" justify="center" class="my-15">
    <v-row class="col-12 col-md-9">
      <v-col cols="12" md="5">
        <img src="https://img.freepik.com/free-vector/man-doing-freelance-work-home-young-guy-working-with-laptop-sofa-online-modern-lifestyle-scene-remote-business-workplace-with-comfort-dog-sleeping_575670-682.jpg?t=st=1650850315~exp=1650850915~hmac=4cf56b2f2fe195b13e9e354a11db0cbf16cf1f6b76a21d007a7c803cf2c973cc&w=740" alt="" class="img-clase">
      </v-col>
      <v-col cols="12" md="7" class="my-3">
        <h3 class="text-h4 my-5 my-md-2 text-uppercase text-center font-weight-regular">
          Desarrollo de Software
        </h3>
        <v-row class="py-4">
          <v-col v-for="(item, id) in landing.software" :key="id" cols="12" md="6">
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
  height: 100%;
  width: 100%;
}
</style>
