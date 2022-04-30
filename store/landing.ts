import { defineStore } from 'pinia'
import servicioLanding from './types/servicioLanding'

const landingStore = defineStore('landing', {
  state: (): servicioLanding => ({
    fintech: [],
    software: [],
    acercaDe: [],
    contacto: [],
    infraestructura: [],
    mapsite: [],
    testimonios: []
  }),
  getters: {
    landing: (state): servicioLanding => {
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
    inicializar() {
      const randomPic = 'https://picsum.photos/seed/picsum/200/200'
      /** estado global de la seccion de Desarrollo de software */
      this.software = [
        {
          titulo: 'Sistema de informacion',
          texto: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, facilis?',
          imagen: 'mdi-desktop-mac',
          colorFondo: 'orange lighten-4',
          colorIcon: 'orange darken-3'
        },
        {
          titulo: 'App para moviles',
          texto: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, facilis?',
          imagen: 'mdi-cellphone',
          colorFondo: 'orange lighten-4',
          colorIcon: 'orange darken-3'
        },
        {
          titulo: 'Presencia en la web',
          texto: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, facilis?',
          imagen: 'mdi-eye',
          colorFondo: 'orange lighten-4',
          colorIcon: 'orange darken-3'
        },
        {
          titulo: 'Comercio electronico',
          texto: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, facilis?',
          imagen: 'mdi-hand-coin',
          colorFondo: 'orange lighten-4',
          colorIcon: 'orange darken-3'
        }
      ]
      /**estado global de la seccion de SERVICIOS DE INFRAESTRUCTURA TECNOLOGICA*/
      this.infraestructura = [
        { 
          imagen: 'https://cdn-icons-png.flaticon.com/512/4707/4707024.png', 
          titulo: 'Redes', 
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus' 
        },
        { 
          imagen: 'https://cdn-icons-png.flaticon.com/512/4707/4707024.png', 
          titulo: 'Telefonia', 
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus'
        },
        { 
          imagen: 'https://cdn-icons-png.flaticon.com/512/4707/4707024.png', 
          titulo: 'Mantenimiento', 
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus'
        },
        { 
          imagen: 'https://cdn-icons-png.flaticon.com/512/4707/4707024.png', 
          titulo: 'Capacitacion', 
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus' 
        },
        { 
          imagen: 'https://cdn-icons-png.flaticon.com/512/4707/4707024.png', 
          titulo: 'Servidores', 
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus' 
        },
        { 
          imagen: 'https://cdn-icons-png.flaticon.com/512/4707/4707024.png', 
          titulo: 'Venta de equipos', 
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus'
        }
      ]
      /** estado global de la seccion de tecnologia financiera */
      this.fintech = [
        { 
          imagen: 'mdi-credit-card', 
          titulo: 'Pasarelas de pago', 
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus',
          colorFondo: 'purple lighten-5',
          colorIcon: 'purple lighten-1'
        },
        { 
          imagen: 'mdi-finance', 
          titulo: 'Inversiones', 
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus',
          colorFondo: 'orange lighten-5', 
          colorIcon: 'orange darken-1'
        },
        { 
          imagen: 'mdi-account-group',
          titulo: 'Asesorias', 
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus',
          colorFondo: 'green lighten-5',
          colorIcon: 'green darken-1'
        },
      ]
      /** estado global de la seccion de ELLOS CONFIAN EN NOSOTROS */
      this.testimonios = [
        { 
          imagen: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg', 
          texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores adipisci excepturi necessitatibus eligendi alias odio, dolorem maxime reprehenderit nam cumque eveniet mollitia fuga. Dicta necessitatibus ea facere repellat saepe.', 
          url: '#', 
          cargo: 'Rector', 
          firmante: 'Alberto quintero' 
        },
        { 
          imagen: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg', 
          texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores adipisci excepturi necessitatibus eligendi alias odio, dolorem maxime reprehenderit nam cumque eveniet mollitia fuga. Dicta necessitatibus ea facere repellat saepe.', 
          url: '#', 
          cargo: 'Rector', 
          firmante: 'Alberto quintero' 
        },
        { 
          imagen: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg', 
          texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores adipisci excepturi necessitatibus eligendi alias odio, dolorem maxime reprehenderit nam cumque eveniet mollitia fuga. Dicta necessitatibus ea facere repellat saepe.', 
          url: '#', 
          cargo: 'Rector', 
          firmante: 'Alberto quintero' 
        }
      ]

      /** esta parte manipula la seccion del footer */
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
