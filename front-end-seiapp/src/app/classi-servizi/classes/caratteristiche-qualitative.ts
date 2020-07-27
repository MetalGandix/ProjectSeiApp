import { MeccanismiAssociati } from './meccanismi-associati';
import { ValutazionePunteggio } from './valutazione-punteggio';
import { Struttura } from './strutture/struttura';

export class CaratteristicheQualitative {
    id: number;
    caratteristicheQualitative: String;
    meccanismiAssociati: MeccanismiAssociati
    valutazionePunteggio: ValutazionePunteggio
}
