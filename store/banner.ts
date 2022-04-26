import { defineStore } from 'pinia'
import banner from './types/banner'
import { sizes } from './types/common'

const bannerStore = defineStore('banner', {
  state: ():banner => ({
    slides: []
  }),

  actions: {
    inicializar () {
      this.slides = [
        {
          texto: 'Programacion',
          imagen: [
            { size: sizes.sm, url: '~/assets/banner/code-sm.jpg' },
            { size: sizes.md, url: '~/assets/banner/code-md.jpg' },
            { size: sizes.lg, url: '~/assets/banner/code-lg.jpg' }
          ]
        },
        {
          texto: 'Datacenter',
          imagen: [
            { size: sizes.sm, url: '~/assets/banner/datacenter-sm.jpg' },
            { size: sizes.md, url: '~/assets/banner/datacenter-md.jpg' },
            { size: sizes.lg, url: '~/assets/banner/datacenter-lg.jpg' }
          ]
        },
        {
          texto: 'Laptop',
          imagen: [
            { size: sizes.sm, url: '~/assets/banner/laptop-sm.jpg' },
            { size: sizes.md, url: '~/assets/banner/laptop-md.jpg' },
            { size: sizes.lg, url: '~/assets/banner/laptop-lg.jpg' }
          ]
        }
      ]
    }
  },

  getters: {
    banner: (state) => {
      return state.slides.map((slide) => {
        const result:any = { texto: slide.texto, imagen: {} }
        const sizes = ['xs', 'sm', 'md', 'lg', 'xl']
        sizes.forEach((size, sizeIndex) => {
          result.imagen[size] = slide.imagen.find((img) => {
            return img.size === sizeIndex + 1
          })?.url
        })
        return result
      })
    }
  }
})

export default bannerStore
