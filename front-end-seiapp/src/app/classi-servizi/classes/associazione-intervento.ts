import { Intervento } from './intervento';
import { CaratteristicheQualitative } from './caratteristiche-qualitative';
import { Struttura } from './strutture/struttura';

export class AssociazioneIntervento {
    intervento: Intervento
    caratteristicaAssociazioneIntervento: CaratteristicheQualitative
    strutturaAssociazione: Struttura
}