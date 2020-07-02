import { Intervento } from './intervento';
import { CaratteristicheQualitative } from './caratteristiche-qualitative';
import { Struttura } from './strutture/struttura';

export class AssociazioneIntervento {
    intervento: Intervento
    caratteristicaAssociazioneIntervento: CaratteristicheQualitative
    strutturaAssociazione: Struttura
    modicitaDiCosto: number
    efficacia: number
    supIntonacate: number
    supVista: number
    reversibilita: number
    semplicitaDiCantiere: number
    esiguitaDiIngombro: number
    totale: number[]
    variante: String
    varianti: String[]
}
