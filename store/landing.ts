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
    testimonios: [],
    enlaceSocial: []
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
        testimonios: state.testimonios,
        enlaceSocial: state.enlaceSocial
      }
    }
  },
  actions: {
    inicializar () {
      //const randomPic = '@/assets/banner/Redes.svg'
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
      /** estado global de la seccion de SERVICIOS DE INFRAESTRUCTURA TECNOLOGICA */
      this.infraestructura = [
        {
          imagen: 'Redes',
          titulo: 'Redes',
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus'
        },
        {
          imagen: 'Telefonia',
          titulo: 'Telefonía',
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus'
        },
        {
          imagen: 'Mantenimiento',
          titulo: 'Mantenimiento',
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus'
        },
        {
          imagen: 'Capacitacion',
          titulo: 'Capacitación',
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus'
        },
        {
          imagen: 'Servidores',
          titulo: 'Servidores',
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus'
        },
        {
          imagen: 'Ventasv1',
          titulo: 'Venta de equipos',
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus'
        }
      ]
      /** estado global de la seccion de tecnologia financiera */
      this.fintech = [
        {
          imagen: 'mdi-credit-card',
          titulo: 'Desarrollo se servicios y productos',
          texto: 'En  SINAPSYS desarrollamos tus ideas. La vida digital con oportunidades en un mercado exponencial.',
          colorFondo: '#edebfe',
          colorIcon: '#806fea'
        },
        {
          imagen: 'mdi-finance', 
          titulo: 'planes de inversión',
          texto: 'En SINAPSYS hemos diseñado planes de inversión para el trabajador, el emprendedor y las empresas.',
          colorFondo: '#feeed0',
          colorIcon: '#fcac12'
        },
        {
          imagen: 'mdi-account-group',
          titulo: 'consultorías técnicas y financieras',
          texto: 'Les orientamos a la rentabilidad y a las oportunidades para un productivo emprendimiento digital.',
          colorFondo: '#16c562',
          colorIcon: '#d9f7e7'
        }
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
      const mailDos = 'sinapsys@unellez.edu.ve'
      this.contacto = [
        { icono: 'mdi-phone', texto: `+${telefono}`, url: `tel://${telefono}` },
        { icono: 'mdi-mail', texto: mail, url: `mailto://${mail}` },
        { icono: 'mdi-mail', texto: mailDos, url: `mailto://${mail}` },
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
      this.enlaceSocial = [
        { icono: 'mdi-twitter', url: 'https://twitter.com' },
        { icono: 'mdi-google', url: 'https://www.google.com' },
        { icono: 'mdi-instagram', url: 'https://www.instagram.com/fundacionsinapsys' },
        { icono: 'mdi-pinterest', url: 'https://www.pinterest.com' },
        { icono: 'mdi-reddit', url: 'https://www.reddit.com' },
        { icono: 'mdi-facebook', url: 'https://www.facebook.com/FundacionSinapsys' },
      ]
    }
  }
})

export default landingStore
