<template>
  <v-row class="col-12 col-md-9 mx-auto">
    <v-col cols="12" md="6">
      <h3 class="text-h5 text-uppercase font-weight-light mb-10">
        Estamos para servirte
      </h3>
      <p class="font-weight-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        aliquam architecto? Architecto magni nobis delectus. Ea atque eius
        voluptas adipisci voluptatum, architecto minima nostrum blanditiis
        ratione ex cum dolore placeat.
      </p>
      <p class="mt-10 font-weight-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta delectus
        neque esse dolore placeat nobis id unde illum vel. Quae?
      </p>
      <p class="orange--text text-h6">correo@correo.com</p>
    </v-col>
    <v-col cols="12" md="6">
      <h3 class="text-h5 text-uppercase font-weight-light mb-10">
        Contactanos
      </h3>
      <v-form>
        <v-col cols="12" class="py-0">
          <v-text-field
            name="nombre"
            label="Nombre"
            id="nombre"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="py-0">
          <v-text-field
            name="email"
            label="Email"
            id="email"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="py-0">
          <v-textarea
            label="Mensaje"
            auto-grow
            outlined
            rows="3"
            row-height="30"
          ></v-textarea>
          <v-btn depressed color="amber darken-4" class="white--text"> Normal </v-btn>
        </v-col>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SeccionContacto",
};
</script>

<style>
</style>