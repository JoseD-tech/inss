import { defineStore } from 'pinia'
import servicioLanding from './types/servicioLanding'

const landingStore = defineStore('landing', {
  state: ():servicioLanding => ({
    fintech: [],
    software: [],
    acercaDe: [],
    contacto: [],
    infraestructura: [],
    mapsite: [],
    testimonios: []
  }),
  getters: {
    landing: (state):servicioLanding => {
      return {
        fintech: state.fintech,
        software: state.software,
        acercaDe: state.acercaDe,
        contacto: state.contacto,
        infraestructura: state.infraestructura,
        mapsite: state.mapsite,
        testimonios: state.testimonios
      }
    }
  },
  actions: {
    inicializar () {
      const randomPic = 'https://picsum.photos/seed/picsum/200/200'
      this.software = [
        { titulo: 'Sistemas administrativos', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus' },
        { titulo: 'Presencia en la web', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus' },
        { titulo: 'Apps Moviles', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus' },
        { titulo: 'Comercio electronico', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus' }
      ]
      this.infraestructura = [
        { imagen: randomPic, titulo: 'Redes', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus' },
        { imagen: randomPic, titulo: 'Telefonia', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus' },
        { imagen: randomPic, titulo: 'Mantenimiento', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus' },
        { imagen: randomPic, titulo: 'Capacitacion', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus' },
        { imagen: randomPic, titulo: 'Servidores', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus' },
        { imagen: randomPic, titulo: 'Venta de equipos', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus' }
      ]
      this.fintech = [
        { imagen: randomPic, titulo: 'Pasarelas de pago', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus' },
        { imagen: randomPic, titulo: 'Inversiones', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus' },
        { imagen: randomPic, titulo: 'Asesorias', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus' }
      ]
      this.testimonios = [
        { imagen: randomPic, texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus', url: '#', cargo: 'Rector', firmante: 'Alberto quintero' },
        { imagen: randomPic, texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus', url: '#', cargo: 'Rector', firmante: 'Alberto quintero' },
        { imagen: randomPic, texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus', url: '#', cargo: 'Rector', firmante: 'Alberto quintero' }
      ]
      const telefono = '584125897495'
      const mail = 'sinapsysunellez@gmail.com'
      this.contacto = [
        { icono: 'mdi-phone', texto: `+${telefono}`, url: `tel://${telefono}` },
        { icono: 'mdi-mail', texto: mail, url: `mailto://${mail}` },
        { icono: 'mdi-map-marker', texto: `+${telefono}` }
      ]
      this.mapsite = [
        { texto: 'Fintech', url: '#' },
        { texto: 'Tecnologias de informacion', url: '#' },
        { texto: 'Infraestructura tecnológica', url: '#' }
      ]
      this.acercaDe = [
        { texto: 'Nosotros', url: '#' },
        { texto: 'Marco legal', url: '#' },
        { texto: 'Servicios', url: '#' }
      ]
    }
  }
})

export default landingStore
