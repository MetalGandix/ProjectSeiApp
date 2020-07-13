import { MeccanismiAssociati } from './meccanismi-associati';
import { EdificioSingolo } from './edificio-singolo';

export class CaratteristicheQualitative {
    id: number;
    caratteristicheQualitative: String;
    caratteristichePunteggi: EdificioSingolo;
    meccanismiAssociati: MeccanismiAssociati
}
