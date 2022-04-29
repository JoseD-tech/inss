<template>
  <div>
    <v-card flat tile>
      <v-toolbar dense elevation="0" class="amber darken-4">
        <v-toolbar-title class="d-md-none white--text font-weight-black">
          SINAPSYS
        </v-toolbar-title>
        <v-spacer class="d-md-none" />
        <v-app-bar-nav-icon
          color="white"
          class="d-md-none"
          @click.stop="drawer = !drawer"
        />

        <v-row class="d-none d-md-flex">
          <ul
            class="d-flex justify-space-around align-center font-weight-light"
          >
            <li v-for="(enlace, id) in nav" :key="id">
              <nuxt-link class="white--text" :to="enlace.to">
                {{ enlace.title }}
              </nuxt-link>
            </li>
          </ul>
        </v-row>
      </v-toolbar>
    </v-card>
    <v-navigation-drawer v-model="drawer" absolute style="height: 100vh; top: 548px;">
      <v-list nav dense>
        <v-list-item
          v-for="(enlace, id) in nav"
          :key="id"
          link
          :to="enlace.to"
          active-class="orange darken-4 white--text"
        >
          <v-list-item-title>{{ enlace.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'BarraNavegacion',
  data () {
    return {
      drawer: false,
      nav: [
        { title: 'Inicio', to: '/' },
        { title: 'Empresa', to: '/empresa' },
        { title: 'Fintech', to: '/fintech' },
        { title: 'Tecnologias de la informacion', to: '/tecnologia' },
        { title: 'Servicios Tecnologicos', to: '/servicios' }
      ]
    }
  }
}
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
  border-bottom: solid 2px transparent;
  transition: border-bottom 0.3s ease-in-out;
}

a:hover {
  border-bottom: solid 2px white;
}
</style>
