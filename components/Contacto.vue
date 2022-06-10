<template>
  <v-row class="col-12 col-md-9 mx-auto" data-aos="fade-up" data-aos-duration="800">
    <v-col cols="12" md="6" >
      <h3 class="text-h5 text-uppercase font-weight-light mb-10">
        Estamos para servirte
      </h3>
      <p class="font-weight-light text-justify">
        SINAPSYS, está íntimamente relacionada  con sistemas de producción, administrando recursos tecnológicos orientados a desarrollar la competitividad de SINAPSYS como Empresa Rental Digital.
      </p>
      <p class="font-weight-light text-justify"> 
        Es la encargada de tomar la tecnología como elemento corporativo principal para lograr beneficios sostenibles, priorizando la actualización constante de su capacidad tecnológica; aplicando sistemas de producción y llevándolos a cabo en distintas áreas, adaptándolas a las nuevas tecnologías. 
      </p>
      <p class="orange--text text-h6">
        {{ landing.contacto[1].texto }}
      </p>
      <p class="orange--text text-h6">
        {{ landing.contacto[2].texto }}
      </p>
    </v-col>
    <v-col cols="12" md="6">
      <h3 class="text-h5 text-uppercase font-weight-light mb-10">
        Contactanos
      </h3>
      <v-form>
        <v-col cols="12" class="py-0">
          <v-text-field id="nombre" name="nombre" label="Nombre" outlined />
        </v-col>
        <v-col cols="12" class="py-0">
          <v-text-field id="email" name="email" label="Email" outlined />
        </v-col>
        <v-col cols="12" class="py-0">
          <v-textarea
            label="Mensaje"
            auto-grow
            outlined
            rows="3"
            row-height="30"
          />
        </v-col>
        <v-col cols="12" class="py-0">
          <v-btn depressed color="amber darken-4" class="white--text" style="width: 100%;">
            Enviar
          </v-btn>
        </v-col>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import landingStore from '~/store/landing'
export default {
  name: 'SeccionContacto',
  setup () {
    const landing = landingStore()
    landing.inicializar()
    return { landing }
  }
}
</script>

<style>

</style>
