<template>
  <v-row class="col-12 col-md-9 mx-auto" data-aos="fade-up" data-aos-duration="800">
    <v-col cols="12" md="6" >
      <h3 class="text-h5 text-uppercase font-weight-light mb-10">
        Estamos para servirte
      </h3>
      <p class="font-weight-light text-justify">
        Garantizar la atención integral de los Adultos, Adultas Mayores y Otras Categorías de Personas menores de 60 años no amparados por otras leyes o programas mediante la prestación de un servicio social a nivel nacional, con la participación e integración ciudadana a fin de mejorar su calidad de vida.
      </p>
      <p class="font-weight-light text-justify">
        Ser el organismo rector en la prestación de servicios sociales los Adultos, Adultas Mayores y Otras Categorías de Personas de una manera confiable, eficiente y eficaz, basado en los principios constitucionales de justicia social, autonomía y participación.
      </p>
      <p class="red--text text-h6">
        {{ landing.contacto[1].texto }}
      </p>
      <p class="red--text text-h6">
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
          <v-btn depressed color="#c41520" class="white--text" style="width: 100%;">
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
