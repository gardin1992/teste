import {CharInterface} from '../interfacies/char';

export abstract class CharAbstract implements CharInterface {
    fireAtkPhy() {
        throw new Error("Method not implemented.");
    }

    fireAtkMag() {
        throw new Error("Method not implemented.");
    }

    fireDefPhy() {
        throw new Error("Method not implemented.");
    }

    fireDefMag() {
        throw new Error("Method not implemented.");
    }
}
