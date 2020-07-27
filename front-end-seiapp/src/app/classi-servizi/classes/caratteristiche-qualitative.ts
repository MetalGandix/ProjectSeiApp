import { MeccanismiAssociati } from './meccanismi-associati';
import { ValutazionePunteggio } from './valutazione-punteggio';
import { TipoEdificio } from './tipo-edificio';

export class CaratteristicheQualitative {
    id: number;
    caratteristicheQualitative: String;
    meccanismiAssociati: MeccanismiAssociati
    valutazionePunteggio: ValutazionePunteggio
    emsCarQual: TipoEdificio
}