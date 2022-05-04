interface servicio{
    titulo:string,
    texto:string,
    imagen?:string
}

interface meta{
    texto:string
    url?:string
    icono?:string
}

interface testimonio{
    texto:string
    url:string
    imagen:string
    firmante:string
    cargo:string
}

interface fintech {
    titulo:string,
    texto:string,
    imagen?:string,
    colorFondo: string,
    colorIcon: string
}

export default interface servicioLanding{
    software:Array<fintech>
    fintech:Array<fintech>
    infraestructura:Array<servicio>
    acercaDe:Array<meta>
    mapsite:Array<meta>
    contacto:Array<meta>
    testimonios:Array<testimonio>
}
