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
        class="d-flex flex-column justify-center justify-md-strat  vh mb-md-4"
      >
        <div class="d-flex flex-column flex-md-row align-center mb-5">
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
          Fundación  Rental  Tecnológica  de la UNELLEZ <br> <span class="font-weight-bold">Sembrando la  vida  Digital</span>
        </p>
      </v-col>
    </v-col>
  </v-container>

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
  background-image: url("../assets/banner/banner-md.jpg");
  background-position: center right 85%;
  background-size: cover;
  background-repeat: no-repeat;
}

@media (min-width: 960px) {
  .img-fondo-vh {
    background-image: url("../assets/banner/banner-lg.jpg");
      background-position: center center;
  }
}

.vh {
  height: 100vh;
}
</style>
