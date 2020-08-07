import { Intervento } from './intervento';
import { CaratteristicheQualitative } from './caratteristiche-qualitative';
import { Struttura } from './strutture/struttura';

export class AssociazioneIntervento {
    intervento: Intervento
    caratteristicaAssociazioneIntervento: CaratteristicheQualitative
    strutturaAssociazione: Struttura
    modicitaDiCosto: number|number[]
    efficacia: number|number[]
    supIntonacate: number|number[]
    supVista: number|number[]
    reversibilita: number|number[]
    semplicitaDiCantiere: number|number[]
    esiguitaDiIngombro: number|number[]
    totale: number[]
    variante: String
    varianti?: String[]
    //Può non esistere
    maxVariante?: number
    minVariante?: number
    ante?: number
    post?: number
}
