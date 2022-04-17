import { sizes } from './common'

interface imagen{
    url:string
    size:sizes
}

interface slide{
    imagen:Array<imagen>
    texto:string
}

export default interface banner{
    slides:Array<slide>
}
