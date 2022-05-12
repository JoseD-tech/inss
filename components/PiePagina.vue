<template>
  <v-container class="color-footer ma-0 mt-10 py-10" style="max-width: 100%">
    <v-row class="col-12 col-md-9 mx-auto">
      <v-row>
        <v-col cols="12" md="3">
          <h4 class="text-h4 text-center text-md-left text-capitalize white--text mb-5">
            Mapsite
          </h4>
          <ul class="d-flex flex-column font-weight-light">
            <li v-for="(enlaceMapsite, id) in landing.mapsite" :key="id">
              <nuxt-link :to="enlaceMapsite.url">
                {{ enlaceMapsite.texto }}
              </nuxt-link>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" md="3">
          <h4 class="text-h4 text-center text-md-left text-capitalize white--text mb-5">
            Acera de
          </h4>
          <ul class="d-flex flex-column font-weight-light">
            <li v-for="(enlaceAcercaDe, id) in landing.acercaDe" :key="id">
              <nuxt-link :to="enlaceAcercaDe.url">
                {{ enlaceAcercaDe.texto }}
              </nuxt-link>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" md="3">
          <h4 class="text-h4 text-center text-md-left text-capitalize white--text mb-5">
            Contacto
          </h4>
          <ul class="d-flex flex-column font-weight-light white--text">
            <li v-for="(enlaceContacto, id) in landing.contacto" :key="id">
              <nuxt-link to="#" class="d-flex align-center">
                <v-icon color="white" class="mr-1">
                  {{ enlaceContacto.icono }}
                </v-icon>
                {{ enlaceContacto.texto }}
              </nuxt-link>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" md="3">
          <h4 class="text-h4 text-center text-md-left text-capitalize white--text mb-5">
            Siguenos
          </h4>
          <v-col cols="12" class="d-flex align-center justify-center flex-wrap pa-0">
            <v-col v-for="(enlace, id) in landing.enlaceSocial" :key="id" cols="6" md="4" class="pa-0 mb-5 text-center">
              <a :href="enlace.url" target="_blank" rel="noopener noreferrer">
                <v-icon color="white" size="40px">{{enlace.icono}}</v-icon>
              </a>
            </v-col>
          </v-col>
        </v-col>
      </v-row>
      
    </v-row>
    <v-row>
        <v-col cols="12">
          <p class="white--text text-center font-weight-medium">
            &copy; Copyright 2022 UNELLEZ - All right reserved.
          </p>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import landingStore from '~/store/landing'
export default {
  setup () {
    const landing = landingStore()
    landing.inicializar()
    return { landing }
  }
}
</script>

<style scoped>
.color-footer {
  background: rgb(55, 56, 150);
  background: linear-gradient(
    180deg,
    rgba(55, 56, 150, 1) 0%,
    rgba(12, 12, 66, 1) 100%
  );
}
ul {
  max-width: 100%;
  padding: 0;
  list-style: none;
}

li {
    padding: 3px 0;
}

a {
  text-decoration: none;
  color: white !important;
}

p {
    margin:0;
    padding-left: 5px;
}

</style>
