import { CaratteristicheQualitative } from './caratteristiche-qualitative';

export class TipoEdificio {
    id: number;
    tipologiaStrutture: string;
    carQualEms: CaratteristicheQualitative[]
    abilitato: boolean
}
