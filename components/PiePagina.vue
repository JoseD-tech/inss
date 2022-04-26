<template>
  <v-container class="color-footer ma-0 mt-10 py-10" style="max-width: 100%">
    <v-row class="col-12 col-md-9 mx-auto">
      <v-row>
        <v-col cols="6" md="3">
          <h4 class="text-h4 text-capitalize white--text mb-5">
            Mapsite
          </h4>

          <ul class="d-flex flex-column a font-weight-light">
            <li>
              <nuxt-link to="/">
                Inicio
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/empresa">
                Empresa
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/Fintech">
                Fintech
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/Tecnologias">
                Tecnologias de la informacion
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/Servicios">
                Servicios Tecnologicos
              </nuxt-link>
            </li>
          </ul>
        </v-col>
        <v-col cols="6" md="3">
          <h4 class="text-h4 text-capitalize white--text mb-5">
            Acera de
          </h4>
          <ul class="d-flex flex-column font-weight-light">
            <li>
              <nuxt-link to="/nosotros">
                Nosotros
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/legal">
                Marco legal
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/Our">
                Our services
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/stories">
                Stories
              </nuxt-link>
            </li>
          </ul>
        </v-col>
        <v-col cols="6" md="3">
          <h4 class="text-h4 text-capitalize white--text mb-5">
            Contact
          </h4>
          <ul class="d-flex flex-column font-weight-light white--text">
            <li class="d-flex align-center">
              <v-icon color="white">
                mdi-phone
              </v-icon>
              <p>+58 414 1234567</p>
            </li>
            <li class="d-flex align-center">
              <v-icon color="white">
                mdi-email
              </v-icon>
              <p>info@codigo.com</p>
            </li>
            <li class="d-flex align-center">
              <v-icon color="white">
                mdi-map
              </v-icon>
              <p>Barinas</p>
            </li>
          </ul>
        </v-col>
        <v-col cols="6" md="3">
          <h4 class="text-h4 text-capitalize white--text mb-5">
            Siguenos
          </h4>
          <v-col cols="12" class="d-flex align-center justify-center flex-wrap pa-0">
            <v-col cols="6" md="4" class="pa-0 mb-5 text-center">
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <v-icon color="white" size="40px">mdi-twitter</v-icon>
              </a>
            </v-col>
            <v-col cols="6" md="4" class="pa-0 mb-5 text-center">
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <v-icon color="white" size="40px">mdi-google</v-icon>
              </a>
            </v-col>
            <v-col cols="6" md="4" class="pa-0 mb-5 text-center">
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <v-icon color="white" size="40px">mdi-instagram</v-icon>
              </a>
            </v-col>
            <v-col cols="6" md="4" class="pa-0 mb-5 text-center">
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <v-icon color="white" size="40px">mdi-pinterest</v-icon>
              </a>
            </v-col>
            <v-col cols="6" md="4" class="pa-0 mb-5 text-center">
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <v-icon color="white" size="40px">mdi-reddit</v-icon>
              </a>
            </v-col>
            <v-col cols="6" md="4" class="pa-0 mb-5 text-center">
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <v-icon color="white" size="40px">mdi-facebook</v-icon>
              </a>
            </v-col>
          </v-col>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <p class="white--text text-center font-weight-medium">
            &copy; Copyright 2022 UNELLEZ - All right reserved.
          </p>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
export default {}
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
