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
      // const randomPic = 'https://picsum.photos/seed/picsum/200/200'
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
          imagen: 'https://cdn-icons-png.flaticon.com/512/4707/4707024.png',
          titulo: 'Redes',
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus'
        },
        {
          imagen: 'https://cdn-icons-png.flaticon.com/512/4707/4707024.png',
          titulo: 'Telefonía',
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus'
        },
        {
          imagen: 'https://cdn-icons-png.flaticon.com/512/4707/4707024.png',
          titulo: 'Mantenimiento',
          texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula sagittis purus'
        },
        {
          imagen: 'https://cdn-icons-png.flaticon.com/512/4707/4707024.png',
          titulo: 'Capacitación',
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
          titulo: 'Desarrollo se servicios y productos',
          texto: 'Desarrollo de servicios y productos digitales a comercio, entretenimiento, educación...',
          colorFondo: 'purple lighten-5',
          colorIcon: 'purple lighten-1'
        },
        {
          imagen: 'mdi-finance', 
          titulo: 'planes de inversión',
          texto: 'En SINAPSYS tenemos diseñados los planes de inversión adaptados a las posibilidades del trabajador, el emprendedor y las empresas. Las finanzas tecnológicas, la criptomonedas, las inversiones, la finanzas descentralizadas, los activos digitales son algunos de los ámbitos de inversión que están presentes en la vida digital de todos los seres humanos. Las inversiones en finanzas tecnológicas con altos niveles de confianza y seguridad es la oferta que presentamos.',
          colorFondo: 'orange lighten-5',
          colorIcon: 'orange darken-1'
        },
        {
          imagen: 'mdi-account-group',
          titulo: 'consultorías técnicas y financieras',
          texto: 'En SINAPSYS sabemos que sus ideas para emprendimientos digitales requieren de un acompañamiento serio y de alta calidad profesional. Nuestro equipo de especialistas está preparado para atender sus solicitudes de asesorías en los distintos ámbitos  de la economía digital. Exploramos junto a usted las oportunidades para su emprendimiento digital, para su conversión o para la construcción de infraestructura digital que le permita desarrollar la productividad de su idea o su empresa.',
          colorFondo: 'green lighten-5',
          colorIcon: 'green darken-1'
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
