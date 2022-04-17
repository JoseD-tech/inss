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

export default interface servicioLanding{
    software:Array<servicio>
    fintech:Array<servicio>
    infraestructura:Array<servicio>
    acercaDe:Array<meta>
    mapsite:Array<meta>
    contacto:Array<meta>
    testimonios:Array<testimonio>
}
