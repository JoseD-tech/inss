<template>
  <v-row>
    <v-col cols="12">
      <h3 class="text-h4 text-uppercase text-center font-weight-light mt-10">
        Articulos de Interes
      </h3>
    </v-col>
    <v-col cols="12" class="d-flex aling-center flex-wrap">
      <v-col
        v-for="(articulo, id) in articulos"
        :key="id"
        cols="12"
        md="4"
        class="my-md-10 d-flex align-center pa-4"
        height="150px"
      >
        <v-avatar size="100px" class="rounded-lg">
          <img :src="articulo.urlImg" alt="alt">
        </v-avatar>
        <div>
          <v-card-title primary-title>
            {{ articulo.titleArticulo }}
          </v-card-title>
          <v-card-text class="text-justify">
            {{ articulo.texto }}
          </v-card-text>
        </div>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>

export default {

}
</script>

<style>
</style>
