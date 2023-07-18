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
          imagen: 'data:image/jpeg;base64,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',
          texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores adipisci excepturi necessitatibus eligendi alias odio, dolorem maxime reprehenderit nam cumque eveniet mollitia fuga. Dicta necessitatibus ea facere repellat saepe.',
          url: '#',
          cargo: 'Gobernador',
          firmante: 'Adan Chavez'
        },
        {
          imagen: 'data:image/jpeg;base64,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',
          texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores adipisci excepturi necessitatibus eligendi alias odio, dolorem maxime reprehenderit nam cumque eveniet mollitia fuga. Dicta necessitatibus ea facere repellat saepe.',
          url: '#',
          cargo: 'Presidente',
          firmante: 'Nicolas Maduro'
        },
        {
          imagen: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhUZGRgaGhwcGhwaGhgYGhocGhoaHBocGhgcIS4lHB4rIRgaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJSsxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNP/AABEIAQUAwQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xAA9EAABAwIDBQYEAwcEAwEAAAABAAIRAyEEEjEFQVFhcQYigZGhsRNCwdEyUvAHFDNicuHxI1OCkhUWohf/xAAaAQADAQEBAQAAAAAAAAAAAAAAAgMBBAUG/8QAKhEAAgICAQMDBAIDAQAAAAAAAAECEQMhMQQSQQVRcSIyM2ETQoGxwSP/2gAMAwEAAhEDEQA/AKaLKCuYU7VxiGSEgxFhsSWOBlWCjiWgtrASLCoOX5o5KrE3RWFxZYeIOo4jgqY5uElJGSimqL9WoCqQ6mQDAtoFDtXFjD4Z4N3myqtbaNSmwOpw5nym+Zn8pjUKDZu2BVqFuINnDLyErvydRBw079kSjGUXrQi23iviPzHXKAlhR21sIadV7DeDY8WnQ+SBXnooaWiugJV22V2IJyOqF3eaHEDKA2flJN8w4QtGjFt0gfYeAe6k0MbJcJjrxRz+xeIfc5Gz+apB8grO97aDRTpiIEcz/U5c0alWxgAbyLx9UjkdEenVXIqj+w2IE5Q09Htd9ZS6lsWtTe4PY4dRC9IoscR3X3/qcD5FTU31BZxDhwIE/Yre5iyxR9zy2owiRF/XyQzXL1bE4OhWlr2NDuYg+YuFVdrdjntl9E5h+UkejvutsnLG1wVNxC0xy3iKbmEtc0tcNQRB8lE0piRK4qJ7lsOXLkAjeHqQYUjygyYMopz5QANhHw4hX/s28sw762jj3WHeOnivPWGHr0BxDcNRYPmgnxuptHR3vsoZf+ZxP++9Yl3xFiXsXsR7mI6TrKbLIQWHfIRdNy00W4ll1xQdNijsZS3pWXZXIAIw+LdSfcS06g6EJhiNksqD4lLTUjeCl2IpZ2Fw1AUOx9puov17uhHJBpvbzDFMu1gtnpolACtna6iHMp1WXYSQeROir+zcGajo3b064MUW3SHnYfZ7X1w97SWMuDEjMNLb969Jx22GssxgJMT8sSkGxarKIaxlnaEzryhOMRgi8gubN82hvynxU5Ss7IwUFsMwlak495ozHnK3i8GCC6m4AzpaFUdql7H5ocBOvDhKmwu2ze9x+IfrdzTRpk5X7jtlYH8QuPP+6mfjAB3jI3Hgk1XFjNY2dcHru81C6uQYJsdUwrHLq4drruI1jkosPjyx0E67xo4dOKQHFFhF+6dOC7fi7z6/VaCY62vs2jiWS5oa6Ia9urTw5jkvONqbKqUHlrhPAjQjiFbaWPLTqCOE7uKnxjWVmZH9WuGoO6CsMlFSPPWldSi9q7NfScb5m8eHVANetTINUaeFlJ1o4LblE10FaBw8w5Xt75bRH8o9lVNk4YVMRTaRILrjkL+SvW28NlqMIsDYDhAU5PZXtfYn+waAsXWVYgUrpZke5o0m3Q3CnpPUeMjO0je32P8AhY0oapmLgMc3MEmx1EgpxRcsxWGzCVgCLAYnK6+m9R7WwuV2Zv4XXCzFUi0orC1RUZ8N2urTwKDSLAY8uovoOvMFvIhcU8SKZgbtPuhqTcj3TqAQptibPdiK7KTfmcJPATf0WseOtnq3YHYRqtbVc2G6jmvRjstmWIXOysKKTGsaIDQAPBHuqJEkNKTb0V/aHZ+m8Hu3heU9rNivwz87RIuD04HkvcS5A7R2ayq0tcAQVlNbQJ+GeCYfHAiJtqOR3hHVK+ZszdtiOI49bqbtr2RfhXmrTGakTJH5P7JJgcXmGtxYjiDpPqFVOwetDJlWRlOmoUZrWtu9kGX2tNrj7Lv4l+RuEwvBJn3HdcdDuROHxfyxcaJe+R4Ll5yODgbG4+3ug0d7Sc1zHZhq2CJ844FUmvTyHkdD9OoVoZUmd4ISfaDGhrREQXRvMT/hYhci8i/PZRubK5BXTnxdMSLB2SoFtb4hGg9yrRtfGZ6jBlgAHxsqj2Ye5z3OJO4D3+if4gkVmA8FL+zOiescV8slWKaFiCJTqdfM0TucfVGsNkqbZ5bwumlIyFsuQRPTfCOovkJcQiMO9YBvH4EOEtVerUyx0i0K2CoWnkosRs5tW7dTAhAIqu0agcA/5jY9QvQf2PbKGd2JqENaJDJ3k2J6D6qzf/meBY2Kgc9w3uqOZMibBtgif37Z2GYzDPzMgCIBfA4lwExzha1oomXgVWkWIPQrgFVvZ9BkfEoVm1GH8rpI6tNwnbswbKm274G7VWmGNA4rvIqpjKT5nPl/5AfVE4Bj7f62bkDPsUKX6BwryMdpYVr2lrgCCIuvDO13Zw4OsHtn4TyRH5SfovcqtR7R3gSOYgj7qtdr9nCvRc2N0jqhvtdmpWqPIA/QrVXT9aLmu3IS06/UKD4kifNWTtE5aDmOzN5qN3ebziQoMPV5rtz7+q0xMmwGItl+YXH1C1jac3t0P3QrzlcHcf0UXVbLDry4JfI/MRJUYOiFrIt4v/hQVWSYi6YiWPstQkM5ucT0EBMdo4mcQwjQGB7LrZtP93w4ab1CDP8AKDeElr14c0k6OB9UlFcslKq8JIsuZYufiDiFiCeynY6nlxHJwBHQj7hMaBsodqtzUqdQa03ZXf0uu31BHipaS2XIIIC22y5YVIQlM8hdI5hCzD1Sx4k92RPSUNQqwUdUAIlBp6htzCmpWpGiwvFRocK09xjWgcNXXsPsodrdjab+9Jz5cpdxB3JZ+yus7LWaXuyteAGkktbIkw02EyvQatYDVw8gh1ZVWkkUjsz2afh6hDTIP5gdJBvfSys+2JDcrQBINwI4bk2o0ovvKGxpb8x8eCVrQKScuDzHH7Fr1HZc0iZNzpO77oFvZjEseSwkCbFrnBw4X0PkvVG0ARYAjkVJTbHyn0WK0Uk7Kt2cr43IWYg5o/CZk67z0Vqo4djmsa5ubMDe404wt1HACwulmNrVMsCoWjg2G+outckuRO1y40eeftN7PspRUpMe3OMziTLQZgC9wV5pQr7l6B29p9zMXOJB3uJ9yvM6joM7imjJPgycXFbYXnhTOqy0IAvnwv8AdabWOickhox2dhG8GyJwxOUfroleErQQfApjTqd4t8UrKx2D4qgLn9T5ors7h2vqZ33bTGaOe5RV2jOAdJvzHRH7AgtqOboSB5bk16JyWzeL2iHONoSbHs3zZPa+Ga7UJVicORMXHArDOQ/9yrcCsQf/AJjE/wC470W0tMbR1hmEtew6PBHjuPgVzhXHK08hP1U1E6HctlgaXAaST4G/1Ty4EidtKnYJCEBRVByQ04eIKKoVZEKOqxQh8IBFz/Z1jwH4hm+WO8II+g81bK+0C1zXESAdF5J2WxhbjmgGA+WHxbLfUBelvcGkZzlE6nko5LUjuwpOJYBt2Jk7t9rKOn2jpGxa4njlJB8YUZbQqN/E3291LhWUm2a9vmFuwcIr+rBcPjXsebEMcZbO7+yd08ZKWbQYC2RuUFGrwKXucWb2qSGuIrHcgsXWlqxryVHXZZK5WZ20ecdtWOcwhec4iiQBPBesdpKYLXcgfULz7bmGa1jHAybg8oiypjl4Eyx7lYhaY8FhIXJWlc5Seg65TKlXECdR9PuEoYYIU7TcjxCxjQY5rtgE7xdH7DAbRJ/M4+lkJTGdlrkttwsmFKnkYxnK/UoTNmjHOQGLqBoJKOqNICRbQMlaSIf3wcFtBZVtAFg2X3233IrE/jI/lb9R9EnwVUgpxWM5HT8pb5GfqU0uDEDuXVF91qo1RgwpjjZlwhK7YUmEq+K6xTSboMXJXKVZzKjKg1Y8O/6kFe602MxLGPHeY5od5iV4c+kIJmYnxhekfsl2tmY/DON2d9n9JPeHgfdLONqzphOmWLDdl3S52YEOMhpdGTiOKlbsB8wHMbzzOP1TipgX7iYXdHBkalLaXg6HlfNiD/11/wA2Jef6ABPip8Ds57DkLi5uoLru6Eqw5AEJiqgCWVCLI5M40QePxIa0lR1cWBN0hx+KNQwPwj1UrGoT7fxUsPM+i82x1YlxE2JmFeNvuMEDXQcpVCxLe8VfGiOV0gcrS6IXJCscrMUzdyjiynazuzwQzYli7PU8zb6NJTXEvzGNP1wSLs7iMheNQRP0TkPBvKW9lJ8A+KsFWsZWklOtqVc1mpK7C8UxEDzLEX+7LEASMEJjha+ZoHA+9kAWcSFJg2Q43n2TPgwZvaonIwMlQVGKYxqg+DZMy6Wnokswm2zmOecoH9hzQCEWWx6H7lE9kNrjDY1lRxhklr+TXWnwMHwQ+0WZHuZM75CSOKYdyp2fUFDaQjWRuXZxgN1897K7W4miA0OzMGjXSYHAHWFYdlduKlV7WOAbmMZgSbnSx5qMoyR0Qljk68nqmO2q1gMlVvE7Yc9Lajnk98krtlKdFzuVnVHGkTB7n66KYUgAuaLCCpqlgsBoqXaEwD0JVAe+6vvalwDXHkPuqFSbLgOa6cXByZ+UjQpFbNPcmZaBZR4ihIA4f5ViDiC0KUyjdlUsxLDvt56LqkwAz5/VT0mZXyDE6dQZ+6GNFE+zcJlfBsYI/XA2THE4bL3hpN/7ptVoNe2nWaADID+unqpcTgyGuIkiPLRTvZaUU0VHE0CCS3yQxdyTrEsi+4+hSjGVmgJ0cslRBnW0H8ULFopLk6IjCRccioGCdFPRZBBnenFGmHfIHRSPZKHwv4ehKOogRcqbHSsXtoy4cE/wD2tZAEibn8x+ySbQqZRDdXWR2Dr5WRqGj23rUtWzf0hH2nq5qxI4BIHapptN5ec/E3S+o1YmNKJEUVgdUO4IzZzUTf0lOljeVI9d2NXZXoseYzRB6ix9UbTptFlTeyGMyudRO/vN+sfrera0OPy3XFJbPSlHtk0SVGqO5F9yI+Gd6HxQgErBEimdtXQ2OLgLKlUh3x1Vm7VVi5zeAKrJkGea6sf2nPmi07YxaQTEGdyMZTlknXQ9QhKZBYCbQdfZE4TFSSHC2/7qiZztA1c5YPWURhw14yzr+E7p+ijY0OzDgZjklTazqbiBpOi0y6PROzzyO4/WIIOhG7/KtBoAg/lP68F5ts7tC2weOnLodyt2ydtMkAPInjcJG6OlRUlpkO3NjOLHBhgkH9Hj1XmWLpVGOh4IPp/de5NxTHDUeER5JVtvYDK7ZaGz6FCkvBGeKXk8aznl5D7LavP/AKY//b9T91pNZH+NlaovRTGmUA1hCY4GpJggeXvCqTJcI/Xqi2PSzZz5JHM+6ZBhUmOAVRmqFxiG7vRFDEwxwABkRP2SxnzO3E6IyhSkTuQ3oaEdgDmZs0+HghXMlvRHO/F0BKHm54H3Qh5AYbIRux7mPEIc04Kuf7PMfhsKyviKjQ6sAG0wQHZZN3ct1+SJK1RuLI8WRSq6A34etQqUq3w3hoiSRFjY21XodKuS0OFwRIR3azs6ysynWaXVC5oOYXGkgiNLTbkq7sascppk3bpO8LnnGtHWs7yycmqHIr8UVsqiaryMpcwNOZwAcGk6EjfvsLpbiA4CTClwG1atKi4MhpfncXExAYN363pILezZ9zh9K50ULtXsz4DjTL2vIcCHN0LTp0N79FWa9ExzVm7QkudfU6jmleJp7tNArRZ09XhcYru5pC7C19x3ozCPBeGGAHCx58PdLn0IzcitvqwBuOo5EKp5NvyNKRyVINwbfT3E+KF2ngIeSPwuuDwPArmrjA6Hb9T14rv97ka2371g1Ji9mEcdPJHYRz2GDbeiGMLpLPxAZuoGqJ2big8gVWidA4W/yhmr6XpjrCMeYlxaTBEO3HU81ZtmUKjbZ84O+Uro0Rka4Xy23zH6JW8PXjeZ5kn0lNGK8E5za07LL8F/ArEp/e3cW+axPRHuX7PL/hovBU4cChmOkKXBP7/mgUk2Q8DNMfiOvVM62Jhroa3Q7km2S/uk/wA0/dH4h9j0Kk1s6FkajVirD9NRYc09ezIwNOoF+v6KVbEoZnZj8olMMdU7tuvmh80PjWrAKRnOeaDLIJB6+iOwxhvUoLFCJKELJEcyu6NNwLsuhEHmo6dOQjcA6CAVr4CO2esfsp2lXNIsfUyspQDmbM5j3GsM66za0Dii9qbErFz3spUwA90uGZrgJnvCNdDIEXVa2DtQU2OYWy0kPB0hzSDBIuAQ2J3aq0YbtMHgNMugmBmg3kkiwJPgQL7rJLjJbHi5Y5WlfyBdqj+7tYwuBDmBwdF3GYcJ5WtzCoeFxJqVgA4wLkTrHFWTtRj6dWkaD3kGm/Mwtb3mSIc1zTHkLWEQq9sdjGtcWScsgucILjvtwFkk4rlHsdB1Dn24u3y22axPfrgfzD3lQY+n3j1ROy25q0/lBP0+q1jmy+OM+ynB7PR6zEp45P2YjxTIzc7pcWyCOVk1xwhvPRKi+wO8G66rPlpqpMHp8FI1hn7LhxvITHCMsI3x6lYLFB+y35XsMWzZTzB1HkStYugGPLB8pI8jb0hFU6ZkRuIt1IUG1a01HOtJJnwNvSFqMnoa4PHOawiZmJHCygr7RyiG2PFKmVoa7iRPkR90G6uTqqI55SbGn/kX/mPmsSfMsW2Kd4V023qSj3XjqEso1cplPzTa9ge3URKwYipUSxzmcHGOm70RLhIjiEXtOl3mu/M31CioN38Pfcpy0x4fUcsZkpxbd4mf15Liu2RwRmIpHuzAi6GrunxSXs7VGkQADyCV7Q3pm0gylmPuQnRCbNYR/wCFH0KffCXERBHFMsNUuD+tVkjMZZsNQhpJ0hW7ZWzKhw5qUy0kZWnORAnVwcdABeeBVbazNRbEjTSxVz2XVzYUTZhcGEDSWw6PIaHdZJGKadm5pNNFM7QbNGHpuqVCS4iQdz3ngd8cuCT4duSg0HUiT1dcq1ftOpZ6OCaCZNV4g8C1puOIj1VS2lV+XnCTIlFUj2fR7fdll4VBXZ5n8R3KPcqDaTodI3H6plsVkU3HiT9ko2kZd5JFqj2JqsTTF22/wt9fokbQdE52q7MQOAUWEwJMOMBvW/krp6PlMkbmAU6Gia4amGuaBxB8l1kE2Fm2HE9VLg2EvJ/K31KZCaTpBGJxOXS5H6lJ6z5JKI2hUyuHISlr3WPmmiQyO2TMqmT0+yjLwoM9io8yeyQXmC2hFiLCjTwOKN2Vi8joN2usQg30CFE1xasA9Cx9MGm1wvpB5GyGwhDb68tEPsXaAqUnUzq0W6blNhBIKTIX6dXKiTFVC8AnT7WS7E1m3O8W+yIxbwGEnnHRJKz5ZzN/NTjs9HPUFRM+qAwlLi/Mb7ly+sTDV2xqrFHmTlYTg6Gd7W8ifJM8Zs9zA0xbf6IjsZg/iV3n8rPcj7K7Y/ZANMiNynkdMrh4EfZvEnM1hveyt2PpGo3L3W5KbqhJ36HKbxcN38VUn024d4eSG5WX6za28pNtnti+pTexjQ34ktfYEZcuSG7wYAWw2mZnW0Ft2+/GVC4jLSpA5GmdXWzOubwEsqHO+BxU2yKGTDA73knw0Hsp9j4eXFx0k+n6ChN3Jn03Q4XDBCPvtjygzLShIMY2XEkjx0VhqECmJ5Kt4vENJNrcURWx+uzdsHFcsXto5yYvxcbDoERSA7zj+BgIHMrirWkBrBEoTaOKAaGN0GvMqqPnZy8nXxQZ4I7BtyMM6m5SfAmTJ/C2558AjKmM3nqnI35A9qPl5jkEDmW61SXTxuuSU6OeTtmitBbAWitFMzLa5yrEAGUq4OqlNJpQJYu2P5wtAY7OHw6gg2Nk8whImN8yq3hQQ4E6SFasC3vDmVLK6R6PpeNTz0+KsXbVN8p6JFVfJITPbOImpZKcqMauNm+oyX8rivBy1neCIhcQpIVTzSzdg9pMpVnh9g8NAdqAQSb8rr1XHV6LKJqve0MAmZkHgBxJXheAAlziYjepMTjXvGUuOXc2THWOKk490mdklGGFSvb8BO3NrOxFQv0b8o4Dd4paxkkAbzHmtgJjsCgH128GS4+GnqndRiRwwlmyxj7scY/uwwaMaAOoEfdHYWllpgch5m5QVBueoSeM/ZMqx/COJP2XDd7Pu4wpaBtqYoBscFW6tQa7/bon21KBIskDqR3p4tI8vq8GSb2B1sXl013cuZQE7ypMUw/ELRxUeII0G5dCWj5zLLtk17OjptSy3Vdaxsh5K6Iiy2iTno4BupIUYN12E5IwrFixAG4WLmFiAO3PXGZSPAUZIQAwwE6bt3Iq34YgCRuZPoqfgH7pVppvim8/ytA8r+ynm4R6/o6/9JP9FWxtTM9xUcLTzc9StsCeCqKPO6mTlllJ+7McpFyVsaJiBA2qZy7pRGlygfiQ471Kxhdc+W5CGcm+SY1CbNFuP2Vp2JhxSoud8xaCTv72noPVVzDtzPawbyB5lWnEGKf9T7dG90exUczqJ7XouJPI5vxpBGzhlbPGT5BEuHeYODZ9lA2zSODfeyIfeqB/KPquZcH1N7NY5qS/DuOid4/7Je1svA6D2W+SWTaRUMe+Kjo1zGShIRm0P4r9LOduG8+qGJXXH7UfD9Q3/LL5f+zgrh5W3vUJcmIGwbqSVCpWlAHYWi1YCuggDnKtraxAGZhwXDiF25ROQAZgIkz4K2PEU3frQKnbPPfA4ke6uNZ3+mev0Ucz0j3PR4/fIqlZsGZ1k9LkfRRly5rOhzguCVWL+lHj5vyS+WENettdYhCkrbXymslRFvRQqISbqamFiNGWx/4oP5Q53kLe6s1Uy6kzhHtJ91Xtis7zzwaB/wBiArEHTXH8od9lz5uT6b0iNYk/dhJN45tB/wCwRFMzWfyAQk9//mz3n6IrCj/UeenuVLwe2ntmY12qGoDvxz9gpsS6Seqho/xPM+hQjJ+CmbXEVndZS9z0dtv+MfD2QAauuP2o+I6vWeXyzmFohSwuXJjmI10xckLbVgEwWwuQV0tAyViyFiAO3KF5WLEAS7PH+o3+oK31v4Z/5LFihl5PoPSPxy+f+FQxQ7081FKxYqR+1Hi5/wAkvlnRXBWLE5I5OqlpLaxADrYVy4cSwf8A0nmG/iu/p+oW1i5sn3M+o9L/ABR/yT/O3+tvsi8B+J/UfVYsUj1/LOHC/ioKB7x/pPssWLUE+SmbZ/iuQaxYuqP2o+I6v88vlmlw5YsTnMcFY1YsWASBdrFi0DFixYtA/9k=',
          texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores adipisci excepturi necessitatibus eligendi alias odio, dolorem maxime reprehenderit nam cumque eveniet mollitia fuga. Dicta necessitatibus ea facere repellat saepe.',
          url: '#',
          cargo: 'Familia',
          firmante: 'Cilia Flores'
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
