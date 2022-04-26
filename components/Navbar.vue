<template>
<div>
  <v-card flat tile>
    <v-toolbar dense elevation="0" class="amber darken-4">
      <v-toolbar-title class="d-md-none white--text font-weight-black"> SINAPSYS </v-toolbar-title>
      <v-spacer class="d-md-none"></v-spacer>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        color="white"
        class="d-md-none"
      />

      <v-row class="d-none d-md-flex">
        <ul class="d-flex justify-space-around align-center font-weight-light">
          <li>
            <nuxt-link to="/"> Inicio </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/empresa"> Empresa </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/Fintech"> Fintech </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/Tecnologias">
              Tecnologias de la informacion
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/Servicios"> Servicios Tecnologicos </nuxt-link>
          </li>
        </ul>
      </v-row>
    </v-toolbar>
  </v-card>
  <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</div>
  
  
</template>

<script>
export default {
  name: "BarraNavegacion",
  data() {
    return {
      selectedItem: 1,
      drawer: false,
      group: null,
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
ul {
  width: 60%;
  max-width: 100%;
  margin: 0 auto;
  list-style: none;
}

a {
  text-decoration: none;
  padding: 0.5rem 1rem;
  color: white !important;
  border-bottom: solid 2px transparent;
  transition: border-bottom 0.3s ease-in-out;
}

a:hover {
  border-bottom: solid 2px white;
}
</style>
