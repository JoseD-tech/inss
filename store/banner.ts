import { defineStore } from 'pinia'
import banner from './types/banner'
import { sizes } from './types/common'

const bannerStore = defineStore('landing', {
  state: ():banner => ({
    slides: []
  }),

  actions: {
    inicializar () {
      // this.$nuxt
      this.slides = [{ imagen: [{ size: sizes.xs, url: '' }], texto: '' }]
    }
  }
})

export default bannerStore
