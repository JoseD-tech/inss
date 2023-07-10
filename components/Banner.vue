<template>
  <v-container class="ma-0 img-fondo-vh">
    <div class="image-overlay"></div>
    <v-col cols="12" class="
        d-md-flex
        flex-column
        justify-center
        vh
        text-center
        text-md-left
        px-md-10
      ">
      <v-col cols="12" md="4" class="d-flex flex-column justify-center justify-md-strat vh mb-md-4" data-aos="fade-right"
        data-aos-duration="800" style="z-index: 2;">

        <div class="mb-5">
          <img src="../static/logo.png" alt="Logo SINAPSYS" style="height: 200px;" class="ml-md-2">
        </div>

        <p class="text-h4 font-weight-regular text-capitalize text-color">
          CSSR Jose Ignacio del pumar.<br> <span class="mt-2 d-block font-weight-bold">familia que proteje.</span>
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
  background-image: url("../assets/banner/banner.jpg");
  background-position: center left;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}

.text-color {
  color: white;
}

@media (min-width: 960px) {
  .img-fondo-vh {
    background-image: url("../assets/banner/banner.jpg");
    background-position: center center;
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: -40%;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    transform: skew(-20deg, 0deg);
    /* Ajusta el ángulo según tus necesidades */
    transform-origin: top left;
    z-index: 1;
    opacity: 1;
    /* Cambia la opacidad según tus necesidades */
  }

  .text-color {
    color: #c41520;
  }
}

.vh {
  height: 100vh;
}
</style>
