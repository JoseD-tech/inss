<template>
  <v-card flat tile>
    <v-toolbar dense elevation="0" class="amber darken-4">
      <v-app-bar-nav-icon class="d-md-none" />

      <v-toolbar-title class="d-md-none">
        Title
      </v-toolbar-title>

      <v-row>
        <ul class="d-flex justify-space-around align-center font-weight-light">
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
      </v-row>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: 'BarraNavegacion',
  data () {
    return {
      selectedItem: 1,
      items: [
        { title: 'Inicio' },
        { title: 'Empresa' },
        { title: 'Fintech' },
        { title: 'Tecnologias de la informacion' },
        { title: 'Servicios Tecnologicos' }
      ]
    }
  }
}
</script>

<style>
ul {
  width: 60%;
  max-width: 100%;
  margin: 0 auto;
  list-style: none;
}

a {
  text-decoration: none;
  color: white !important;
}
</style>
