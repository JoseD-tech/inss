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
          titulo: 'ATENCIÓN INTEGRAL',
          texto: 'Compromiso de mejorar la calidad de vida de los adultos y adultas mayores.',
          imagen: 'mdi-account-child',
          colorFondo: '#c41520',
          colorIcon: '#fff'
        },
        {
          titulo: 'CENTROS DE SERVICIOS SOCIALES',
          texto: 'Espacios de atención donde los adultos mayores tienen a disposición servicios médicos.',
          imagen: 'mdi-nature-people',
          colorFondo: '#c41520',
          colorIcon: '#fff'
        },
        {
          titulo: 'ALDEAS DE ENCUENTRO INTEGRALES',
          texto: 'Espacios constituidos por y para adultos mayores.',
          imagen: 'mdi-barn',
          colorFondo: '#c41520',
          colorIcon: '#fff'
        },
        {
          titulo: 'GEROGRANJAS',
          texto: 'Espacios donde se cultiva y la cosecha de rubros agrícolas, pecuarios, artesanales y culturales.',
          imagen: 'mdi-corn',
          colorFondo: '#c41520',
          colorIcon: '#fff'
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
          imagen: 'mdi-account-group',
          titulo: 'Atender',
          texto: 'Brindar proteccion y seguridad social brindando atencion integral con criterio de justicia social.',
          colorFondo: '#c41520',
          colorIcon: '#fff'
        },
        {
          imagen: 'mdi-heart',
          titulo: 'Cuidar',
          texto: 'Satisfacer requerimientos en la demanda de productos y servicios en la atención integral al adulto y adulta mayor y otras categorías de personas en el área social.',
          colorFondo: '#c41520',
          colorIcon: '#fff'
        },
        {
          imagen: 'mdi-medication',
          titulo: 'Salud',
          texto: 'Brindar medicamentos e insumos que permitan un estado de salud excelente para nuestros adultos mayores.',
          colorFondo: '#c41520',
          colorIcon: '#fff'
        }
      ]
      /** estado global de la seccion de ELLOS CONFIAN EN NOSOTROS */
      this.testimonios = [
        {
          imagen: 'https://i.postimg.cc/GtMjMktM/Whats-App-Image-2023-07-18-at-11-01-21.jpg',
          texto: 'Es lo mejor que podemos hacer para que esten contento ademas de los otros cuidados que les damos, me siento muy agradecidad de formar parte de esta familia.',
          url: '#',
          cargo: 'Departamento De Sociales',
          firmante: 'Nohelia Peñalver'
        },
        {
          imagen: 'https://i.postimg.cc/fyWKjHzt/Whats-App-Image-2023-07-18-at-11-01-07.jpg',
          texto: 'Cuidar y proteger a nuestros adultos. Eso es nuestro objetivo como INSS. proteger a nuestros adultos mayores nos da gran felicidad.',
          url: '#',
          cargo: 'Directora',
          firmante: 'Morela Useche'
        },
        {
          imagen: 'https://i.postimg.cc/pXrd3DyD/Whats-App-Image-2023-07-18-at-12-27-20.jpg',
          texto: 'Desde que llegue aqui mi atencion a mejorado el cuidado que me dan es unico y me agrada estar aqui.',
          url: '#',
          cargo: 'Mayor Residente',
          firmante: 'Hortencia Barrios'
        }
      ]

      /** esta parte manipula la seccion del footer */
      const telefono = '584125897495'
      const mail = 'INASS@gmail.com'
      const mailDos = 'INASS@INASS.org'
      this.contacto = [
        { icono: 'mdi-phone', texto: `+${telefono}`, url: `tel://${telefono}` },
        { icono: 'mdi-mail', texto: mail, url: `mailto://${mail}` },
        { icono: 'mdi-mail', texto: mailDos, url: `mailto://${mail}` },
        { icono: 'mdi-map-marker', texto: `+${telefono}` }
      ]
      this.mapsite = [
        { texto: 'Objetivos', url: '#' },
        { texto: 'Servicios', url: '#' },
        { texto: 'Testimonios', url: '#' }
      ]

      this.enlaceSocial = [
        { icono: 'mdi-twitter', url: 'https://twitter.com/salainass/status/1673386398596968448' },
        { icono: 'mdi-google', url: 'https://www.google.com' },
        { icono: 'mdi-instagram', url: 'https://www.instagram.com/inass_oficial/?hl=en' },
        { icono: 'mdi-pinterest', url: 'https://www.pinterest.com' },
        { icono: 'mdi-reddit', url: 'https://www.reddit.com' },
        { icono: 'mdi-facebook', url: 'https://www.facebook.com/INASSOFICIAL/' },
      ]
    }
  }
})

export default landingStore
