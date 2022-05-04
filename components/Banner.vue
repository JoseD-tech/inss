<template>
  <v-container class="ma-0 img-fondo-vh">
    <v-col
      cols="12"
      class="
        d-md-flex
        flex-column
        justify-center
        vh
        text-center
        white--text
        text-md-left
        px-md-10
      "
    >
      <v-col
        cols="12"
        md="4"
        class="d-flex flex-column justify-center align-center vh mb-md-4"
      >
        <div class="d-flex flex-column flex-md-row justify-center align-center">
          <img
            src="../static/logo.png"
            alt="Logo SINAPSYS"
            style="height: 100px"
            class="mr-md-2"
          >
          <h1 class="text-h2 font-weight-black my-0 px-0">
            SINAPSYS
          </h1>
        </div>

        <p class="text-h5 font-weight-regular">
          Fundacion lorem Ipsum <br>
          de desarrollo <span class="font-weight-bold">tegnologico</span>
        </p>
      </v-col>
    </v-col>
  </v-container>

  <!--<v-parallax
    dark
    src="https://res.cloudinary.com/de6ewkpxa/image/upload/v1650769662/banner1_nveqpw.jpg"
  >
    <v-container align="center" justify="center" class="px-md-10">
      <v-col cols="12" class="text-center text-md-left">
        <v-col cols="12" md="4" class="d-md-flex justify-center align-center mb-4">
          <v-img
            src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png?20160308165539"
            height="100px"
            width="100px"
            class="mx-auto mx-md-0 mb-4 mb-md-0"
          />
          <h1 class="text-h2 font-weight-black my-0 px-0">
            SINAPSYS
          </h1>
        </v-col>
        <h4 class="text-h5 font-weight-regular">
          Fundacion lorem Ipsum <br>
          de desarrollo <span class="font-weight-bold">tegnologico</span>
        </h4>
      </v-col>
    </v-container>
  </v-parallax> -->
</template>

<script>
export default {
  name: 'BannerCabecera'
}
</script>

<style scoped>
.img-fondo-vh {
  height: 100vh;
  max-width: 100%;
  background-image: url("../assets/banner/datacenter-sm.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

@media (min-width: 600px) {
  .img-fondo-vh {
    background-image: url("../assets/banner/datacenter-md.jpg");
  }
}
@media (min-width: 960px) {
  .img-fondo-vh {
    background-image: url("../assets/banner/datacenter-lg.jpg");
  }
}

.vh {
  height: 100vh;
}
</style>
