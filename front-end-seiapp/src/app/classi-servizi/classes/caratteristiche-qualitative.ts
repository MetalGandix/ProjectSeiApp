import { MeccanismiAssociati } from './meccanismi-associati';
import { ValutazionePunteggio } from './valutazione-punteggio';

export class CaratteristicheQualitative {
    id: number;
    caratteristicheQualitative: String;
    meccanismiAssociati: MeccanismiAssociati
    valutazionePunteggio: ValutazionePunteggio
}
