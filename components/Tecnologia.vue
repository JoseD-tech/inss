<template>
  <v-row align-content="center" justify="center">
    <v-col cols="12">
      <h3 class="text-h4 text-uppercase text-center font-weight-light">
        tecnologia financiera
      </h3>
    </v-col>
    <v-col cols="12">
      <v-col
        cols="12"
        md="9"
        class="
          d-flex
          justify-center
          align-center
          flex-wrap flex-md-nowrap
          mx-auto
        "
      >
        <v-col v-for="(item, id) in tegnologia" :key="id" cols="12" md="4" class="text-center px-2 mx-1">
          <v-avatar size="60px" :color="item.colorFondo">
            <v-icon :color="item.colorIcon" size="40px">
              {{ item.icon }}
            </v-icon>
          </v-avatar>
          <div class="mt-4">
            <h4 class="text-h5 text-capitalize font-weight-regular my-2">
              {{ item.title }}
            </h4>
            <p class="font-weight-light">
              {{ item.texto }}
            </p>
          </div>
        </v-col>
      </v-col>
      <v-col cols="12" md="9" class="mx-auto">
        <img
          src="https://img.freepik.com/free-vector/email-sent-new-message-notification-internet-promotion-mobile-phone-with-envelope_39422-756.jpg?t=st=1650772714~exp=1650773314~hmac=9c6c664eb22c8d81f70e60d2810b9223b89528639b89db29a332a83bd89071eb&w=996"
          alt=""
          class="img-clase"
        >
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'SeccionTecnologia',
  data () {
    return {
      tegnologia: [
        {
          icon: 'mdi-credit-card',
          title: 'pasarelas de pago',
          texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, quo ian. Non dignissimos ipsam nam!',
          colorFondo: 'purple lighten-5',
          colorIcon: 'purple lighten-1'
        },
        {
          icon: 'mdi-finance',
          title: 'inversiones',
          texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, quo ian. Non dignissimos ipsam nam!',
          colorFondo: 'orange lighten-5',
          colorIcon: 'orange darken-1'
        },
        {
          icon: 'mdi-account-group',
          title: 'Asesorias',
          texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, quo ian. Non dignissimos ipsam nam!',
          colorFondo: 'green lighten-5',
          colorIcon: 'green darken-1'
        }
      ]
    }
  }
}
</script>

<style>
.img-clase {
  height: 500px;
  width: 100%;
}
</style>
