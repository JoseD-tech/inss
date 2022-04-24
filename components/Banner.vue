<template>
  <v-parallax
    dark
    src="https://res.cloudinary.com/de6ewkpxa/image/upload/v1650769662/banner1_nveqpw.jpg"
  >
    <v-container align="center" justify="center" class="px-10">
      <v-col class="text-left" cols="12">
        <v-col cols="4" class="d-flex justify-center align-center mb-4">
          <v-img
            src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png?20160308165539"
            height="100px"
            width="100px"
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
  </v-parallax>
</template>

<script>
export default {
  name: 'BannerCabecera'
}
</script>

<style>
</style>
